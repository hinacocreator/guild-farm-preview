import { Fragment, type ReactNode } from "react";

/**
 * 日本語の見出しを「読点（、）のかたまり」ごとに折り返すためのヘルパー。
 *
 * 日本語はどこでも改行できてしまうため、そのままだと
 *   「旅行ではなく、暮らしてみ / る。」
 * のように、語の途中や1文字だけで行が変わってしまいます。
 *
 * ここでは読点のうしろで文字列を区切り、それぞれを inline-block にすることで
 *   「旅行ではなく、/ 暮らしてみる。」
 * と、意味の切れ目で改行されるようにしています。
 *
 * 画面が広くて1行に収まるときは、見た目は今までどおり1行のままです。
 * → 改行位置を変えたいときは、src/content/copy.ts の文章の読点を動かしてください。
 */
export function phrase(text: string): ReactNode {
  const chunks = text.split(/(?<=、)/).filter(Boolean);

  if (chunks.length < 2) return text;

  return chunks.map((chunk, i) => (
    <Fragment key={`${chunk}-${i}`}>
      <span className="inline-block">{chunk}</span>
      {/* 折り返せる位置であることをブラウザに伝えるための、幅ゼロの区切り */}
      {i < chunks.length - 1 ? <wbr /> : null}
    </Fragment>
  ));
}
