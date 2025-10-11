import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerificationRequest {
  email: string;
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { email, name }: VerificationRequest = await req.json();

    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Set expiry to 3 minutes from now
    const expiresAt = new Date(Date.now() + 3 * 60 * 1000).toISOString();

    // Store verification code in database
    const { error: dbError } = await supabase
      .from("verification_codes")
      .insert({
        email,
        code,
        expires_at: expiresAt,
        verified: false,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }

    // Send email with verification code
    const emailResponse = await resend.emails.send({
      from: "Z4 VoteNet <onboarding@resend.dev>",
      to: [email],
      subject: "✅ Email Verification Code — Z4 VoteNet",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">Z4 VoteNet</h1>
          <h2 style="color: #555;">Email Verification</h2>
          <p>Hello <strong>${name}</strong>,</p>
          <p>Your verification code is:</p>
          <div style="background: #f4f4f4; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
            <h1 style="color: #4CAF50; font-size: 36px; letter-spacing: 8px; margin: 0;">${code}</h1>
          </div>
          <p style="color: #e74c3c;"><strong>⏰ This code will expire in 3 minutes.</strong></p>
          <p>If you didn't request this code, please ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">© 2025 Z4 VoteNet Team. All rights reserved.</p>
        </div>
      `,
    });

    console.log("Verification email sent:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Verification code sent" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-verification-code:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
