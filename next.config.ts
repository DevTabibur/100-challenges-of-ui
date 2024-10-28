import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* for using svg as react icon*/
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
