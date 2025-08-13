/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'azexivprskyzieasifqy.supabase.co'],
  },
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL || 'https://azexivprskyzieasifqy.supabase.co',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZXhpdnByc2t5emllYXNpZnF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4ODMyMzAsImV4cCI6MjA3MDQ1OTIzMH0.mf0NLiUKSLRke0VnQywIhn0g5656UNFLYGvH_maN7Yk',
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZXhpdnByc2t5emllYXNpZnF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NDg4MzIzMCwiZXhwIjoyMDcwNDU5MjMwfQ.JC_ul9D7Ca3iS2tkdfNqhvZLoPjKdxqKJt5qz8baH3I',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || 'deutsch-lernen-super-secret-key-2024',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  },
}

module.exports = nextConfig
