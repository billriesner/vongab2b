import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/**',
      },
    ],
  },
  // Exclude Supabase from server-side bundling during build
  serverExternalPackages: ['@supabase/supabase-js'],
};

export default nextConfig;
