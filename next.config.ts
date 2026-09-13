import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 無料の静的ホスト（Cloudflare Pages / GitHub Pages）向けに静的書き出しする。
  // このサイトは動的ルート・API Route・Server Actionsを使っていないため export 可能。
  output: "export",
  // next/image の最適化サーバーは静的書き出しでは動かないため無効化する。
  images: { unoptimized: true },
  // 静的ホストで /about のようなパスを正しく解決するため、/about/index.html を出力する。
  trailingSlash: true,
  // サブパス配信（GitHub Pages の https://ユーザー名.github.io/リポジトリ名/ など）用。
  // 環境変数 NEXT_PUBLIC_BASE_PATH を渡したビルドのときだけ有効になる。
  // ローカル開発（npm run dev）や独自ドメイン運用では未設定なので影響しない。
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  reactStrictMode: true,
};

export default nextConfig;
