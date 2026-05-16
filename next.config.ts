import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',   // <-- ADD THIS LINE
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;