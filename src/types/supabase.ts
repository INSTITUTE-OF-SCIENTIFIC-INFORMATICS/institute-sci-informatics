
// Define our own types for Supabase tables since we can't modify the generated types
export interface Profile {
  id: string;
  name?: string;
  location?: string;
  bio?: string;
  avatar_url?: string;
}

export interface PersonalRecord {
  id: string;
  user_id: string;
  course_selected: string;
  completion_percentage: number;
  course_start_date: string;
  course_end_date: string | null;
  open_source_collaborations: string;
  open_source_collaboration_percentage: number;
  success_rate: number;
  created_at?: string;
}
