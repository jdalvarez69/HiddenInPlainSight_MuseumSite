import type { NextConfig } from "next";
import path from "path";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/HiddenInPlainSight_MuseumSite" : "",
  assetPrefix: isGitHubPages ? "/HiddenInPlainSight_MuseumSite/" : undefined,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
