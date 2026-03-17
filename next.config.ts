import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/email-logo.png",
        destination: "/logo.png",
      },
    ];
  },
};

export default nextConfig;
