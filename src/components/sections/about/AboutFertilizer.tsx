import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 04「無肥料という、選び方。」（設計書 A-05）
 *
 * 思想の話から入らず、味・環境・備えの3つの理由を順番に書きます。
 * ⚠「オーガニックだから安心・安全」という言い方はしません（効能を主張しない）。
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください。
 *
 * ■ 文章 … src/content/about.ts の fertilizer
 * ■ 写真 … journal[0]（精米したての白米）／expNature（手入れをしている竹林）
 *
 * ★ 追加撮影推奨：無肥料の畑・果樹園（木の全体が分かる引き、土の寄り、豆科やひまわり）。
 *   いまは収穫物と自然の写真で代用しています。
 */
export function AboutFertilizer() {
  return (
    <section
      id="fertilizer"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          {/* 写真はPCでは左、スマホでは本文のあと（order で入れ替え） */}
          <div className="order-2 grid grid-cols-2 gap-4 md:order-1 md:col-span-5 md:grid-cols-1 md:gap-8">
            <Photo
              image={images.journal[0]}
              ratio="1 / 1"
              sizes="(min-width: 768px) 38vw, 48vw"
              className="reveal"
            />
            <Photo
              image={images.expNature}
              ratio="4 / 5"
              sizes="(min-width: 768px) 30vw, 48vw"
              className="reveal self-end md:ml-14"
            />
          </div>

          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <SectionHeading
              index={about.fertilizer.index}
              label={about.fertilizer.label}
              title={about.fertilizer.title}
            />
            <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
              {about.fertilizer.sub}
            </p>

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {about.fertilizer.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 本人の言葉（原文）。2つ続けて置いています */}
            <div className="reveal mt-10 space-y-6 border-l border-moss/40 pl-6 md:mt-12 md:pl-8">
              <LeafIcon size={20} className="text-moss/70" />
              {about.fertilizer.quotes.map((quote) => (
                <blockquote key={quote}>
                  <p className="pull-quote text-[1.02rem] text-soil md:text-[1.15rem]">
                    {quote}
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
