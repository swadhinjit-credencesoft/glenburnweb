/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};

module.exports = nextConfig;
