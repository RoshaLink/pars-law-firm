import type { NextConfig } from "next";

// Static export for GitHub Pages. GitHub Actions sets GITHUB_ACTIONS=true and
// GITHUB_REPOSITORY=<owner>/<repo> automatically — we derive basePath/assetPrefix
// from that so the site works at https://<owner>.github.io/<repo>/ without
// hardcoding the repo name (see .github/workflows/deploy-pages.yml).
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages serves static files only — no image-optimization server.
    unoptimized: true,
  },
  env: {
    // next/image and next/font pick up basePath automatically, but plain
    // <video src="/videos/..."> tags don't — expose it so those can be
    // prefixed manually (see src/lib/utils.ts withBasePath()).
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
