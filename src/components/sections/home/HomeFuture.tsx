import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";

/**
 * H-06 GUILD Farmが目指している未来。HOME専用。
 *
 * 深い緑の面に、明朝で大きく2行。ここは「説明しない」ブロックです。
 * コミュニティの具体的な仕組みは資料にない（プレオープンで発表予定）ため書きません。
 * 続きは /about/#future へ渡します。
 *
 * ■ 文章 … src/content/home.ts の future（lines / body / quote）
 * ■ 写真 … src/config/images.ts の whyVisual（草の茂る土地を見てまわる人たち）
 *
 * ※ 英字ラベルだけを添え、番号付きの SectionHeading は使っていません。
 *   ここは見出しそのものを主役にしたいためです。
 */
export function HomeFuture() {
  return (
    <section id="future" className="bg-forest py-24 md:py-40">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-14 md:gap-y-16">
          {/* 大きな2行 */}
          <div className="md:col-span-6 md:row-start-1">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-paper/60">
              <span className="numeral">{home.future.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-paper/40" />
              <span>{home.future.label}</span>
            </p>

            <h2 className="heading-jp heading-section reveal mt-6 text-paper">
              {home.future.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* 写真は1枚。まだ何もない土地を見ている場面です */}
          <figure className="reveal md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 md:mt-6">
            <Photo
              image={images.whyVisual}
              ratio="3 / 2"
              sizes="(min-width: 768px) 38vw, 100vw"
            />
          </figure>

          {/* 短い本文と、本人の言葉 */}
          <div className="md:col-span-6 md:row-start-2">
            <div className="reveal space-y-5 text-[0.92rem] leading-[2.1] text-paper/85 md:text-[1rem]">
              {home.future.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* 本人の言葉（原文）。文言は変えないでください */}
            <blockquote className="reveal mt-8 border-l border-sun/40 pl-6 md:mt-10 md:pl-8">
              <LeafIcon size={20} className="text-sun/70" />
              <p className="pull-quote mt-4 text-[1.02rem] text-paper md:text-[1.15rem]">
                {home.future.quote}
              </p>
            </blockquote>

            <div className="reveal mt-10 md:mt-12">
              <TextLink href={home.future.link.href} tone="dark" size="lg">
                {home.future.link.label}
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
