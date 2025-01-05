import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    eslint:{ignoreDuringBuilds : true}
    // Modify rules for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [,
        {
          type: "asset/resource",
          resourceQuery: { not: [/\.react/], },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
