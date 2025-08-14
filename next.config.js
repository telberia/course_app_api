/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Optimize chunk loading in development
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Create a vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Create a common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
