import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 06「この先につくりたいもの。」（ブランド編集指示 8. FUTURE）
 *
 * ⚠ id="future" は、HOMEの「目指している未来」から /about/#future で
 *   飛んでくる着地点です。変えないでください。
 * ⚠ コミュニティの具体的な仕組み・参加条件・開始時期は資料にないため書きません。
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください。
 *
 * ページの最後に、構想の背景（松井さんの経歴・問題意識）を読める
 * 「オーナー松井」への導線を置いています。
 *
 * ■ 文章 … src/content/about.ts の future
 * ■ 写真 … src/config/images.ts の whyVisual（草の茂る土地を歩いて見てまわる人たち）
 */
export function AboutFuture() {
  return (
    <section
      id={about.future.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={about.future.index}
              label={about.future.label}
              title={about.future.title}
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
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

            {/* 続きは「オーナー松井」へ */}
            <div className="reveal mt-10 md:mt-12">
              <TextLink href={about.future.link.href} size="lg">
                {about.future.link.label}
              </TextLink>
            </div>
          </div>

          <figure className="reveal md:col-span-5 md:col-start-8 md:mt-20">
            <Photo
              image={images.whyVisual}
              ratio="3 / 2"
              sizes="(min-width: 768px) 38vw, 100vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
