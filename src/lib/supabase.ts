import { createClient } from '@supabase/supabase-js'

// Hardcode Supabase configuration để tránh lỗi biến môi trường
const supabaseUrl = 'https://azexivprskyzieasifqy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZXhpdnByc2t5emllYXNpZnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4ODMyMzAsImV4cCI6MjA3MDQ1OTIzMH0.mf0NLiUKSLRke0VnQywIhn0g5656UNFLYGvH_maN7Yk'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZXhpdnByc2t5emllYXNpZnF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDg4MzIzMCwiZXhwIjoyMDcwNDU5MjMwfQ.JC_ul9D7Ca3iS2tkdfNqhvZLoPjKdxqKJt5qz8baH3I'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)
