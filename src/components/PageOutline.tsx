import type { PageOutlineItem } from "@/content/pages";
import { Container } from "@/components/ui/Container";
import { phrase } from "@/lib/jp";

type PageOutlineProps = {
  /** 見出しの一覧（src/content/pages.ts の outline） */
  items: readonly PageOutlineItem[];
  /** 一覧の上に置く英字ラベル */
  label?: string;
};

/**
 * このページで扱う内容の一覧（見出し＋1行の要約）。
 *
 * Phase 3-A では、設計書で確定している見出しだけを並べています。
 * 各セクションの本文を実装するときは、この一覧の項目を
 * ひとつずつ実際のセクションに置き換えていってください。
 * → 文章は src/content/pages.ts の outline、本文の原稿は content-design.md です。
 */
export function PageOutline({ items, label = "Contents" }: PageOutlineProps) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container width="narrow">
        <p className="label-en reveal text-[0.7rem] text-ink-faint">{label}</p>

        <ol className="mt-10 border-t border-sand">
          {items.map((item) => (
            <li
              key={item.index}
              id={item.id}
              /* scroll-mt … 画面上部に固定されたヘッダー（h-16 / md:h-20）の高さ分、
                 アンカー着地（例: /about/#future）の位置を下げています。
                 これがないと、見出しがヘッダーの裏に隠れます。 */
              className="reveal scroll-mt-24 border-b border-sand py-8 md:scroll-mt-32 md:py-10"
            >
              <div className="flex items-baseline gap-4 md:gap-6">
                <span
                  className="numeral shrink-0 text-[0.85rem] text-ink-faint"
                  aria-hidden="true"
                >
                  {item.index}
                </span>
                <div>
                  <p className="label-en text-[0.62rem] text-ink-faint">
                    {item.en}
                  </p>
                  <h2 className="heading-jp heading-item mt-3 text-ink">
                    {phrase(item.title)}
                  </h2>
                  {item.summary ? (
                    <p className="mt-3 text-[0.875rem] leading-[2] text-ink-soft">
                      {item.summary}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
