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
  images: {
    domains: ['img.daisyui.com'], // Add 'img.daisyui.com' to the list of allowed domains
  },
};

export default nextConfig;
