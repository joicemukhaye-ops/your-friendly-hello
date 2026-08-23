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
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          activity: string
          area: string | null
          cost: number
          created_at: string
          date: string
          hours: number | null
          id: string
          materials: string | null
          performed_by: string | null
          remarks: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          activity?: string
          area?: string | null
          cost?: number
          created_at?: string
          date?: string
          hours?: number | null
          id?: string
          materials?: string | null
          performed_by?: string | null
          remarks?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          activity?: string
          area?: string | null
          cost?: number
          created_at?: string
          date?: string
          hours?: number | null
          id?: string
          materials?: string | null
          performed_by?: string | null
          remarks?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      animal_treatments: {
        Row: {
          animal_name: string
          cost: number
          created_at: string
          date: string
          dosage: string | null
          id: string
          next_due_date: string | null
          reason: string | null
          remarks: string | null
          route: string | null
          species: string | null
          treated_by: string | null
          treatment: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          animal_name?: string
          cost?: number
          created_at?: string
          date?: string
          dosage?: string | null
          id?: string
          next_due_date?: string | null
          reason?: string | null
          remarks?: string | null
          route?: string | null
          species?: string | null
          treated_by?: string | null
          treatment?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          animal_name?: string
          cost?: number
          created_at?: string
          date?: string
          dosage?: string | null
          id?: string
          next_due_date?: string | null
          reason?: string | null
          remarks?: string | null
          route?: string | null
          species?: string | null
          treated_by?: string | null
          treatment?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bird_treatments: {
        Row: {
          bird_count: number | null
          bird_type: string | null
          cost: number
          created_at: string
          date: string
          dosage: string | null
          flock_id: string
          id: string
          next_due_date: string | null
          reason: string | null
          remarks: string | null
          route: string | null
          treated_by: string | null
          treatment: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          bird_count?: number | null
          bird_type?: string | null
          cost?: number
          created_at?: string
          date?: string
          dosage?: string | null
          flock_id?: string
          id?: string
          next_due_date?: string | null
          reason?: string | null
          remarks?: string | null
          route?: string | null
          treated_by?: string | null
          treatment?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          bird_count?: number | null
          bird_type?: string | null
          cost?: number
          created_at?: string
          date?: string
          dosage?: string | null
          flock_id?: string
          id?: string
          next_due_date?: string | null
          reason?: string | null
          remarks?: string | null
          route?: string | null
          treated_by?: string | null
          treatment?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      harvests: {
        Row: {
          created_at: string
          crop: string
          date: string
          field: string | null
          id: string
          quantity_kg: number
          remarks: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          crop?: string
          date?: string
          field?: string | null
          id?: string
          quantity_kg?: number
          remarks?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          crop?: string
          date?: string
          field?: string | null
          id?: string
          quantity_kg?: number
          remarks?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          buyer: string | null
          created_at: string
          crop: string
          date: string
          id: string
          price_per_kg: number
          quantity_kg: number
          remarks: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          buyer?: string | null
          created_at?: string
          crop?: string
          date?: string
          id?: string
          price_per_kg?: number
          quantity_kg?: number
          remarks?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          buyer?: string | null
          created_at?: string
          crop?: string
          date?: string
          id?: string
          price_per_kg?: number
          quantity_kg?: number
          remarks?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sprayings: {
        Row: {
          created_at: string
          crop: string
          date: string
          dosage: string | null
          field: string | null
          id: string
          interval_info: string | null
          next_due_date: string | null
          product_used: string | null
          quantity_mixed: string | null
          reason: string | null
          remarks: string | null
          sprayed_by: string | null
          updated_at: string
          user_id: string
          weather: string | null
        }
        Insert: {
          created_at?: string
          crop?: string
          date?: string
          dosage?: string | null
          field?: string | null
          id?: string
          interval_info?: string | null
          next_due_date?: string | null
          product_used?: string | null
          quantity_mixed?: string | null
          reason?: string | null
          remarks?: string | null
          sprayed_by?: string | null
          updated_at?: string
          user_id: string
          weather?: string | null
        }
        Update: {
          created_at?: string
          crop?: string
          date?: string
          dosage?: string | null
          field?: string | null
          id?: string
          interval_info?: string | null
          next_due_date?: string | null
          product_used?: string | null
          quantity_mixed?: string | null
          reason?: string | null
          remarks?: string | null
          sprayed_by?: string | null
          updated_at?: string
          user_id?: string
          weather?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
