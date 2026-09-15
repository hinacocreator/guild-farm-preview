import { about } from "@/content/about";
import { cn } from "@/lib/cn";

/**
 * 旅行 / 一般的な農業体験 / GUILD Farm の比較表。
 *
 * AboutAgrarian（深緑の面）の中で使います。
 *
 * ■ 文章 … src/content/about.ts の agrarian.compare
 *   （軸と「旅行」「一般的な農業体験」の列はクライアント指定です。言い換えないでください）
 *   セルはすべて短い文です。記号（◎○△）前提の装飾はしていないので、
 *   文が伸びても PC は table-fixed で折り返し、スマホはブロックに積み替わります。
 *
 * ■ 表示の考え方
 *   ・意味づけのために <table> を使っています（軸は <th scope="row">）。
 *   ・PC（md 以上）は4列の表。GUILD Farm の列だけを
 *     生成り（paper）の薄い面と金色の罫線で強調します。
 *   ・スマホ（375px）は4列を押し込まず、比較軸ごとのブロックに変わります
 *     （軸名 → 旅行 / 一般的な農業体験 / GUILD Farm の3行。最後の行を強調）。
 *     Tailwind の display ユーティリティ（block ↔ md:table-cell）で切り替えています。
 *   ・横スクロールはページ全体に出さず、この表のコンテナの中だけに閉じます。
 */
export function AboutCompare() {
  const { caption, columns, rows } = about.agrarian.compare;
  /** 強調する列＝いちばん右（GUILD Farm） */
  const lastIndex = columns.length - 1;

  return (
    <div className="reveal mt-12 overflow-x-auto md:mt-20">
      <table className="w-full border-collapse text-left md:min-w-[44rem] md:table-fixed">
        <caption className="sr-only">{caption}</caption>

        {/* 列見出し。スマホでは各ブロックの中に出すので、ここでは隠します */}
        <thead className="hidden md:table-header-group">
          <tr>
            <th scope="col" className="w-[9rem] py-4 pr-4 align-bottom">
              <span className="sr-only">比較の軸</span>
            </th>
            {columns.map((column, i) => (
              <th
                key={column}
                scope="col"
                className={cn(
                  "border-b py-4 pr-5 align-bottom text-[0.95rem] font-normal leading-[1.7]",
                  i === lastIndex
                    ? "heading-jp border-sun/50 bg-paper/8 px-5 text-[1.05rem] text-paper"
                    : "border-paper/20 text-paper/65",
                )}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="block md:table-row-group">
          {rows.map((row) => (
            <tr
              key={row.axis}
              className="block border-t border-paper/20 pb-7 pt-6 md:table-row md:border-0 md:pb-0 md:pt-0"
            >
              {/* 比較の軸。スマホではブロックの見出しになります */}
              <th
                scope="row"
                className="heading-jp block pr-4 text-left text-[1rem] font-normal leading-[1.7] text-sun md:table-cell md:border-b md:border-paper/15 md:py-6 md:align-top md:text-[0.95rem] md:text-paper/65"
              >
                {row.axis}
              </th>

              {row.values.map((value, i) => (
                <td
                  key={`${row.axis}-${columns[i]}`}
                  className={cn(
                    // スマホ：ラベル（旅行など）＋ 内容の2列。PC：ふつうのセル
                    "mt-3 grid grid-cols-[8em_1fr] items-baseline gap-x-3 text-[0.88rem] leading-[1.9] md:mt-0 md:table-cell md:border-b md:py-6 md:pr-5 md:align-top md:text-[0.9rem] md:leading-[2]",
                    i === lastIndex
                      ? "border-sun/50 bg-paper/8 text-paper md:px-5"
                      : "border-paper/15 text-paper/65",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-[0.72rem] md:hidden",
                      i === lastIndex ? "text-paper/70" : "text-paper/45",
                    )}
                  >
                    {columns[i]}
                  </span>
                  <span>{value}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
