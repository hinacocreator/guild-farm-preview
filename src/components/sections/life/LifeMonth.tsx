import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { life } from "@/content/life";
import { cn } from "@/lib/cn";

/**
 * /life/ 04 1ヶ月で滞在するなら（最初の1週間／2〜4週目／最後の2日）。
 *
 * 旧 Schedule.tsx の7列グリッドは廃止しました。
 * 「2週目からの1週間」は、曜日を縦に並べた軽い一覧にしています
 * （決まっているのは火曜だけ、という一点だけが伝わればよいブロックです）。
 *
 * ⚠ 2週目以降を「自由」の一語で終わらせないため、Week 2–4 のブロックの直後に
 *   具体例（month.examples）を4つ置いています。旧「自由時間」の章はここへ統合しました。
 *
 * ■ 文章 … src/content/life.ts の month
 * ■ 写真 … src/config/images.ts の aboutField
 *          ※ 打上げのBBQの写真は素材にありません（追加撮影推奨）。
 *            ページ末尾の共通CTAの背景写真（cta）が近い雰囲気です。
 * ⚠ 日付（1日入居・30日BBQ・31日退去）は毎月固定かどうかが未確認のため書きません。
 * ⚠ 料金へのリンクは、ページ末尾の導線（LifeNext）に一本化しています。
 */
export function LifeMonth() {
  return (
    <section
      id="month"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={life.month.index}
              label={life.month.label}
              title={life.month.title}
            />
          </div>
          <p className="wrap-phrase reveal text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-5 md:col-start-8 md:text-[0.95rem]">
            {life.month.lead}
          </p>
        </div>

        <Photo
          image={images.aboutField}
          ratio="3 / 2"
          sizes="100vw"
          className="reveal mt-12 md:mt-16"
        />

        {/* 1週目 → 2〜4週目（＋具体例） → 最後の2日 */}
        <div className="mt-12 space-y-12 md:mt-24 md:space-y-20">
          {life.month.blocks.map((block, i) => (
            <div key={block.title}>
              <div className="reveal grid gap-5 border-t border-sand pt-10 md:grid-cols-12 md:gap-14 md:pt-12">
                <div className="md:col-span-5">
                  <p className="label-en text-[0.62rem] text-clay">
                    {block.kicker}
                  </p>
                  <h3 className="heading-jp wrap-phrase mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.6rem]">
                    {block.title}
                  </h3>
                </div>
                <div className="space-y-5 md:col-span-6 md:col-start-7">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* 2週目以降の組み方の例。「自由」の一語で終わらせないためのブロックです */}
              {i === 1 ? (
                <ul className="mt-8 grid gap-px overflow-hidden rounded-sm border border-sand bg-sand md:mt-10 md:grid-cols-2">
                  {life.month.examples.map((example) => (
                    <li key={example.title} className="reveal bg-paper p-6 md:p-7">
                      <h4 className="heading-item wrap-phrase text-ink">
                        {example.title}
                      </h4>
                      <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft">
                        {example.text}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* 2週目からの1週間（軽い一覧）と、補足 */}
        <div className="mt-12 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h3 className="heading-jp reveal text-[1.15rem] text-ink md:text-[1.3rem]">
              {life.month.rhythm.title}
            </h3>

            <ol className="reveal mt-8">
              {life.month.rhythm.days.map((day) => (
                <li
                  key={day.day}
                  className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 border-t border-sand py-3.5 last:border-b"
                >
                  <span className="heading-jp text-[0.95rem] text-soil">
                    {day.day}
                  </span>
                  <span
                    className={cn(
                      "text-[0.85rem] leading-[1.9]",
                      "accent" in day && day.accent
                        ? "text-clay"
                        : "text-ink-soft",
                    )}
                  >
                    {day.text}
                  </span>
                </li>
              ))}
            </ol>

            <p className="reveal mt-5 text-[0.8rem] leading-[2] text-ink-faint">
              {life.month.rhythm.note}
            </p>
          </div>

          <ul className="reveal space-y-4 md:col-span-6 md:col-start-7">
            {life.month.notes.map((note) => (
              <li
                key={note}
                className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-t border-sand pt-4 text-[0.82rem] leading-[2] text-soil"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.95em] h-px bg-clay/50"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
