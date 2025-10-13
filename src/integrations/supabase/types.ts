export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          admin_user: string | null
          created_at: string | null
          details: Json | null
          id: string
        }
        Insert: {
          action: string
          admin_user?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
        }
        Update: {
          action?: string
          admin_user?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
        }
        Relationships: []
      }
      candidates: {
        Row: {
          candidate_name: string
          created_at: string
          department: string
          id: string
          position: string
          year_level: string | null
        }
        Insert: {
          candidate_name: string
          created_at?: string
          department: string
          id?: string
          position: string
          year_level?: string | null
        }
        Update: {
          candidate_name?: string
          created_at?: string
          department?: string
          id?: string
          position?: string
          year_level?: string | null
        }
        Relationships: []
      }
      departments: {
        Row: {
          color_hex: string
          created_at: string
          icon_name: string
          id: string
          name: string
          short_code: string
        }
        Insert: {
          color_hex: string
          created_at?: string
          icon_name: string
          id?: string
          name: string
          short_code: string
        }
        Update: {
          color_hex?: string
          created_at?: string
          icon_name?: string
          id?: string
          name?: string
          short_code?: string
        }
        Relationships: []
      }
      election_status: {
        Row: {
          department: string
          id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          department: string
          id?: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          department?: string
          id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      partylists: {
        Row: {
          created_at: string
          department: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          department: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          department?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      verification_codes: {
        Row: {
          code: string
          created_at: string | null
          email: string
          expires_at: string
          id: string
          verified: boolean | null
        }
        Insert: {
          code: string
          created_at?: string | null
          email: string
          expires_at: string
          id?: string
          verified?: boolean | null
        }
        Update: {
          code?: string
          created_at?: string | null
          email?: string
          expires_at?: string
          id?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      verifications: {
        Row: {
          course: string
          created_at: string
          department: string
          device_id: string | null
          name: string
          student_id: string
        }
        Insert: {
          course: string
          created_at?: string
          department: string
          device_id?: string | null
          name: string
          student_id: string
        }
        Update: {
          course?: string
          created_at?: string
          department?: string
          device_id?: string | null
          name?: string
          student_id?: string
        }
        Relationships: []
      }
      voters: {
        Row: {
          created_at: string | null
          department: string
          email: string
          has_voted: boolean | null
          id: string
          name: string
          student_id: string
          verified_at: string | null
        }
        Insert: {
          created_at?: string | null
          department: string
          email: string
          has_voted?: boolean | null
          id?: string
          name: string
          student_id: string
          verified_at?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string
          email?: string
          has_voted?: boolean | null
          id?: string
          name?: string
          student_id?: string
          verified_at?: string | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          candidate_name: string
          created_at: string
          department: string
          device_id: string | null
          id: string
          partylist_vote: string | null
          position: string
          student_id: string
        }
        Insert: {
          candidate_name: string
          created_at?: string
          department: string
          device_id?: string | null
          id?: string
          partylist_vote?: string | null
          position: string
          student_id: string
        }
        Update: {
          candidate_name?: string
          created_at?: string
          department?: string
          device_id?: string | null
          id?: string
          partylist_vote?: string | null
          position?: string
          student_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_partylist_counts: {
        Args: { dept_code: string }
        Returns: {
          partylist_name: string
          vote_count: number
        }[]
      }
      get_vote_counts: {
        Args: { dept_code: string }
        Returns: {
          candidate_name: string
          pos: string
          vote_count: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
