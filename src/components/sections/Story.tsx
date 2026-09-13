import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { copy } from "@/content/copy";

/**
 * STORY（はじめた人のこと）。
 *
 * ⚠ 写真もテキストも、いまは仮のものです。
 *   その旨の注記（copy.story.caption）は、差し替えが終わるまで必ず残してください。
 *
 * ■ 文章 … src/content/copy.ts の story（name / role / paragraphs / caption）
 * ■ 写真 … src/config/images.ts の owner
 */
export function Story() {
  return (
    <section
      id="story"
      className="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* 人物写真。PCでは少し下げて、見出しと段差をつくる */}
          <figure className="reveal md:col-span-5 md:mt-16">
            <Photo
              image={images.owner}
              ratio="4 / 5"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <figcaption className="mt-4 text-[0.72rem] leading-[1.9] text-ink-faint">
              {copy.story.caption}
            </figcaption>
          </figure>

          {/* 見出しと本文 */}
          <div className="md:col-span-6 md:col-start-7">
            <SectionHeading
              index={copy.story.index}
              label={copy.story.label}
              title={copy.story.title}
            />

            {/* 名前・肩書 */}
            <div className="reveal mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-sand pb-7">
              <p className="heading-jp text-[1.45rem] text-ink md:text-[1.75rem]">
                {copy.story.name}
              </p>
              <p className="text-[0.78rem] leading-[1.9] tracking-[0.04em] text-ink-faint">
                {copy.story.role}
              </p>
            </div>

            <div className="reveal mt-9 space-y-6 text-[0.95rem] leading-[2.1] text-ink-soft">
              {copy.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
