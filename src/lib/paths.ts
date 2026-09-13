/**
 * =========================================================
 * 画像・ファイルのパスに「サブパス」を前置するための関数
 * =========================================================
 * GitHub Pages のように https://ユーザー名.github.io/リポジトリ名/ という
 * サブパス配信をするホストでは、サイト全体が /リポジトリ名 の下にぶら下がります。
 * next.config.ts の basePath がその設定で、next/link や _next/ の読み込みには
 * Next.js が自動で付けてくれますが、
 *
 *   ・<img src="..."> / <source srcSet="..."> のような素のHTMLタグ
 *   ・next/image の src（images.unoptimized: true のときは自動付与されない）
 *
 * には付きません。そこで、public/ 以下のファイルを指すパスは
 * この withBasePath() を通してから渡します。
 *
 * ■ ローカル開発・独自ドメイン運用（Cloudflare Pages など）では
 *   環境変数 NEXT_PUBLIC_BASE_PATH を設定しないので、basePath は空文字。
 *   つまり何も起きません（従来どおり "/images/hero.jpg" のまま）。
 *
 * ■ GitHub Pages のプレビュー公開では、ビルド時に
 *   NEXT_PUBLIC_BASE_PATH=/guild-farm-preview を渡します。
 */

/** 配信サブパス。設定されていなければ空文字（＝ルート配信） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * public/ 以下のファイルを指すパスに、配信サブパスを前置します。
 * 例）basePath が "/guild-farm-preview" のとき
 *     "/images/hero.jpg" → "/guild-farm-preview/images/hero.jpg"
 *
 * 先頭が "/" ではないパス（外部URL・data URI など）はそのまま返します。
 */
export function withBasePath(path: string): string {
  if (!basePath) return path;
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${basePath}${path}`;
}
