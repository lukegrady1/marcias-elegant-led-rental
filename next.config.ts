import type { NextConfig } from "next";

// GitHub Pages serves this project site from a sub-path matching the repo
// name (https://lukegrady1.github.io/marcias-elegant-led-rental/), so we set
// basePath/assetPrefix in production. Static export is required because Pages
// only serves static files. The basePath is gated on production so local
// `next dev` keeps working at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "marcias-elegant-led-rental";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Custom loader prepends basePath to image src (next/image does not do this
  // for static export, so images would otherwise 404 on the project sub-path).
  images: { loader: "custom", loaderFile: "./image-loader.ts" },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
