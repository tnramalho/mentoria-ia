import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves the site under /<repo>; empty everywhere else.
  basePath: process.env.PAGES_BASE_PATH || undefined,
};

export default nextConfig;
