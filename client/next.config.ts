import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/form',
        permanent: true, // Use `true` for a 308 redirect or `false` for a 307 redirect
      },
    ];
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
