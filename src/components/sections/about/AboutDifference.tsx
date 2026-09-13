import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";
import { cn } from "@/lib/cn";

/**
 * ABOUT 01「見るのでも、体験するのでもなく。」（設計書 A-02）
 *
 * ページのなかで唯一、深緑の面になるセクションです。
 * 旅行 / 農業体験 / GUILD Farm の3段対比で違いを見せます。
 *
 * ★ 大事な点：対比だけでは「結局何をするのか」が分かりません。
 *   対比のすぐ下に「実際にすることは、こうです」という
 *   普通の日本語の説明（about.difference.detail）を必ず置いています。
 *   ここを消したり短くしたりしないでください。
 *
 * ■ 文章 … src/content/about.ts の difference
 * ■ 写真 … src/config/images.ts の aboutSoil（土のついた作業靴）
 *
 * ※ 旧 WhyGuildFarm.tsx を置き換えたセクションです
 *   （元のコピーは src/content/copy.ts の why に残しています）。
 */
export function AboutDifference() {
  return (
    <section
      id="difference"
      className="scroll-mt-16 bg-forest py-20 text-paper md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={about.difference.index}
            label={about.difference.label}
            title={about.difference.title}
            tone="dark"
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-paper/70 md:text-[0.95rem]">
            {about.difference.sub}
          </p>
        </div>

        {/* 3つの関わり方の対比。GUILD Farm の行だけを大きく見せます */}
        <div className="mt-12 md:mt-20">
          {about.difference.rows.map((row) => {
            const highlight = "highlight" in row && row.highlight;

            return (
              <div
                key={row.subject}
                className={cn(
                  "reveal grid gap-2 border-t md:grid-cols-12 md:gap-8",
                  highlight
                    ? "border-sun/40 py-9 md:items-center md:py-14"
                    : "border-paper/12 py-7 md:items-baseline md:py-8",
                )}
              >
                <p
                  className={cn(
                    "md:col-span-4",
                    highlight
                      ? "heading-jp text-[1.8rem] leading-[1.35] text-paper md:text-[2.4rem]"
                      : "text-[0.95rem] tracking-[0.08em] text-paper/65",
                  )}
                >
                  {row.subject}
                </p>

                <p
                  className={cn(
                    "md:col-span-4",
                    highlight
                      ? "heading-jp text-[1.3rem] leading-[1.6] text-sun md:text-[1.6rem]"
                      : "text-[1rem] leading-[1.8] text-paper/60",
                  )}
                >
                  {row.result}
                </p>

                <p
                  className={cn(
                    "leading-[2] md:col-span-4",
                    highlight
                      ? "text-[0.9rem] text-paper/85"
                      : "text-[0.8rem] text-paper/60",
                  )}
                >
                  {row.text}
                </p>
              </div>
            );
          })}
          <div className="border-t border-sun/40" />
        </div>

        {/* ★ ここが「実際に何をするのか」の説明です。写真と並べて置いています */}
        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Photo
              image={images.aboutSoil}
              ratio="4 / 5"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal"
            />
          </div>

          <div className="md:col-span-7">
            <p className="label-en reveal text-[0.68rem] text-paper/60">
              In Practice
            </p>
            <p className="heading-jp reveal mt-4 text-[1.15rem] text-paper md:text-[1.35rem]">
              {about.difference.detailLead}
            </p>
            <div className="reveal mt-6 space-y-5 text-[0.92rem] leading-[2.1] text-paper/85 md:text-[1rem]">
              {about.difference.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* 芯になるコピー（松井さんの原文。文言は変えないでください） */}
        <blockquote className="reveal mt-14 border-t border-paper/15 pt-12 md:mt-24 md:pt-16">
          <LeafIcon size={26} className="text-sun/60" />
          <p className="pull-quote mt-7 max-w-[22em] text-[1.25rem] text-paper md:text-[1.9rem]">
            {about.difference.quote}
          </p>
        </blockquote>

        <p className="reveal mt-10 max-w-[30em] text-[0.95rem] leading-[2.1] text-paper/70 md:mt-14 md:ml-auto md:text-right">
          {about.difference.closing}
        </p>
      </Container>
    </section>
  );
}
