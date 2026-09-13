import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * WHY（旅行／農業体験／GUILD Farm の対比）。
 * ページのなかで唯一、深緑の面が続くセクションです。
 *
 * ・上の2行（旅行・農業体験）は小さく淡く、GUILD Farm の行だけを明朝で大きく見せています。
 * ・結びの3段落のうち、真ん中の「全員が農家になる必要はない…」は引用（pull quote）扱いです。
 *
 * ■ 文章 … src/content/copy.ts の why（rows / closing）
 */
export function WhyGuildFarm() {
  const [openingText, quoteText, closingText] = copy.why.closing;

  return (
    <section
      id="why"
      className="scroll-mt-16 bg-forest py-24 text-paper md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={copy.why.index}
            label={copy.why.label}
            title={copy.why.title}
            tone="dark"
          />
        </div>

        {/* 3つの関わり方の対比 */}
        <div className="mt-14 md:mt-24">
          {copy.why.rows.map((row) => {
            const highlight = "highlight" in row && row.highlight;

            return (
              <div
                key={row.subject}
                className={cn(
                  "reveal grid gap-2 border-t md:grid-cols-12 md:gap-8",
                  highlight
                    ? "border-sun/40 py-10 md:items-center md:py-16"
                    : "border-paper/12 py-7 md:items-baseline md:py-8",
                )}
              >
                {/* 主語（旅行 / 農業体験 / GUILD Farm） */}
                <p
                  className={cn(
                    "md:col-span-4",
                    highlight
                      ? "heading-jp text-[1.9rem] leading-[1.35] text-paper md:text-[2.6rem]"
                      : "text-[0.95rem] tracking-[0.08em] text-paper/65",
                  )}
                >
                  {highlight ? "GUILD Farm" : row.subject}
                </p>

                {/* 何が起きるか */}
                <p
                  className={cn(
                    "md:col-span-4",
                    highlight
                      ? "heading-jp text-[1.35rem] leading-[1.6] text-sun md:text-[1.7rem]"
                      : "text-[1rem] leading-[1.8] text-paper/60",
                  )}
                >
                  {row.result}
                </p>

                {/* 補足 */}
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

        {/* 写真＋結びの一段落目 */}
        <div className="mt-16 grid gap-10 md:mt-28 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <Photo
              image={images.whyVisual}
              ratio="3 / 2"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="reveal"
            />
          </div>
          <p className="reveal self-end text-[0.95rem] leading-[2.1] text-paper/75 md:col-span-4 md:col-start-9 md:pb-4">
            {openingText}
          </p>
        </div>

        {/* 引用：全員が農家になる必要はない */}
        <blockquote className="reveal mt-16 border-t border-paper/15 pt-12 md:mt-24 md:pt-16">
          <LeafIcon size={26} className="text-sun/60" />
          <p className="pull-quote mt-7 max-w-[22em] text-[1.3rem] text-paper md:text-[2rem]">
            {quoteText}
          </p>
        </blockquote>

        {/* 結び */}
        <p className="reveal mt-12 max-w-[30em] text-[0.95rem] leading-[2.1] text-paper/70 md:mt-16 md:ml-auto md:text-right">
          {closingText}
        </p>
      </Container>
    </section>
  );
}
