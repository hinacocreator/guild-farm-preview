import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 無料の静的ホスト（Cloudflare Pages / GitHub Pages）向けに静的書き出しする。
  // このサイトは動的ルート・API Route・Server Actionsを使っていないため export 可能。
  output: "export",
  // next/image の最適化サーバーは静的書き出しでは動かないため無効化する。
  images: { unoptimized: true },
  // 静的ホストで /about のようなパスを正しく解決するため、/about/index.html を出力する。
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
