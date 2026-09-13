import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { about } from "@/content/about";
import { phrase } from "@/lib/jp";

/**
 * ABOUT 08「畳1畳の畑から、半径2kmへ。」（設計書 A-09）
 *
 * ⚠ id="future" は、HOMEの「目指している未来」から /about/#future で
 *   飛んでくる着地点です。変えないでください。
 * ⚠ コミュニティの具体的な仕組み・参加条件・開始時期は資料にないため書きません。
 *   「半径2kmは歩いて行き来できる距離」も、一般的な距離感の説明にとどめています。
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください。
 *
 * ■ 文章 … src/content/about.ts の future
 * ■ 写真 … src/config/images.ts の whyVisual（草の茂る土地を歩いて見てまわる人たち）
 */
export function AboutFuture() {
  return (
    <section
      id="future"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-14 md:gap-y-16">
          <div className="md:col-span-6 md:row-start-1">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span className="numeral">{about.future.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{about.future.label}</span>
            </p>

            <h2 className="heading-jp heading-section reveal mt-6 text-ink">
              {about.future.lines.map((line) => (
                <span key={line} className="block">
                  {phrase(line)}
                </span>
              ))}
            </h2>

            <p className="wrap-phrase reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
              {about.future.sub}
            </p>
          </div>

          <figure className="reveal md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:mt-6">
            <Photo
              image={images.whyVisual}
              ratio="3 / 2"
              sizes="(min-width: 768px) 38vw, 100vw"
            />
          </figure>

          <div className="md:col-span-6 md:row-start-2">
            <div className="reveal space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
              {about.future.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 本人の言葉（原文） */}
            <blockquote className="reveal mt-10 border-l border-moss/40 pl-6 md:mt-12 md:pl-8">
              <LeafIcon size={20} className="text-moss/70" />
              <p className="pull-quote mt-4 text-[1.05rem] text-soil md:text-[1.2rem]">
                {about.future.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
