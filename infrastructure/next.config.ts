import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Static export for S3 hosting
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Better for S3 routing
  distDir: 'out',
};

export default nextConfig;