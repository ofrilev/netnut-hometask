import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    // Modify rules for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          type: "asset/resource",
          resourceQuery: { not: [/\.react/] },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
