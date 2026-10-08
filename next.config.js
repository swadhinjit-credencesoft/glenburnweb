/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // `next dev` must not share `.next` with `next build`. The dev server rewrites
  // `.next/server/pages/*` while a build is running, which kills the build with
  // `PageNotFoundError: Cannot find module for page: /_document`, and the build
  // clears `.next/cache` under the dev server. Giving dev its own directory lets
  // a build and a dev server run side by side. Production keeps the default
  // `.next` so the static export still lands in `out/`.
  ...(process.argv.includes("dev") ? { distDir: ".next-dev" } : {}),
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

module.exports = nextConfig;
