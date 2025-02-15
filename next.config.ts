import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build process
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
  },
};

export default nextConfig;
