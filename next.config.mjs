import crypto from "node:crypto";
import fs from "node:fs";

const markupDirectory = new URL("./content/markup/", import.meta.url);
const contentVersion = crypto
  .createHash("sha256")
  .update(
    fs
      .readdirSync(markupDirectory)
      .sort()
      .map((file) => fs.readFileSync(new URL(file, markupDirectory)))
      .join(""),
  )
  .digest("hex")
  .slice(0, 12);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    TRAVLINK_CONTENT_VERSION: contentVersion,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
