import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Mail } from 'lucide-react';
import { mapCourseToDepartment, availableCourses } from '@/utils/courseMapping';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [codeExpiry, setCodeExpiry] = useState<Date | null>(null);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.name || !formData.studentId || !formData.email || !formData.course) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      const department = mapCourseToDepartment(formData.course);
      if (!department) {
        setError('Invalid course selection');
        setLoading(false);
        return;
      }

      // Check if student already registered
      const { data: existing } = await supabase
        .from('voters')
        .select('*')
        .eq('student_id', formData.studentId)
        .eq('email', formData.email)
        .maybeSingle();

      if (existing) {
        setError('You have already registered. Please use the login option.');
        setLoading(false);
        return;
      }

      // Send verification code
      const { error: functionError } = await supabase.functions.invoke('send-verification-code', {
        body: { email: formData.email, name: formData.name },
      });

      if (functionError) throw functionError;

      setShowCodeInput(true);
      setCodeExpiry(new Date(Date.now() + 3 * 60 * 1000));
      toast.success('Verification code sent to your email!');
    } catch (err: any) {
      console.error('Send code error:', err);
      setError(err.message || 'Failed to send verification code');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setVerificationCode('');
    await handleSendCode(new Event('submit') as any);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Check code validity
      const { data: codeData, error: codeError } = await supabase
        .from('verification_codes')
        .select('*')
        .eq('email', formData.email)
        .eq('code', verificationCode)
        .eq('verified', false)
        .maybeSingle();

      if (codeError || !codeData) {
        setError('Invalid verification code');
        setLoading(false);
        return;
      }

      // Check expiry
      if (new Date(codeData.expires_at) < new Date()) {
        setError('Code expired. Please request a new one.');
        setLoading(false);
        return;
      }

      // Mark code as verified
      await supabase
        .from('verification_codes')
        .update({ verified: true })
        .eq('id', codeData.id);

      const department = mapCourseToDepartment(formData.course);

      // Create voter record
      const { error: voterError } = await supabase
        .from('voters')
        .insert({
          name: formData.name,
          student_id: formData.studentId,
          email: formData.email,
          department: department!,
          verified_at: new Date().toISOString(),
        });

      if (voterError) throw voterError;

      toast.success('Registration successful! You can now log in.');
      navigate('/login');
    } catch (err: any) {
      console.error('Verify code error:', err);
      setError(err.message || 'Failed to verify code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Voter Registration</h1>
          <p className="text-muted-foreground">Create your account to vote</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!showCodeInput ? (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Course / Program</Label>
              <Select
                value={formData.course}
                onValueChange={(value) => setFormData({ ...formData, course: value })}
                required
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  {availableCourses.map((course) => (
                    <SelectItem key={course.code} value={course.code}>
                      {course.code} - {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Verification Code'}
              <Mail className="ml-2 h-4 w-4" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => navigate('/login')}
            >
              Already registered? Log in
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code sent to <strong>{formData.email}</strong>
              </p>
              {codeExpiry && (
                <p className="text-xs text-destructive mt-2">
                  Code expires in {Math.max(0, Math.floor((codeExpiry.getTime() - Date.now()) / 1000))} seconds
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <Input
                id="code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="000000"
                maxLength={6}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify & Register'}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleResendCode}
              disabled={loading}
            >
              Resend Code
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
}
