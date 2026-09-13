import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 07「豊かさと、心地よさ。」（設計書 A-08）
 *
 * 社会課題（03）を読んだあとの読後感を、ここで整えます。
 * 引用が主役のセクションなので、地の文は1段落だけにしています。
 *
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください。
 *
 * ■ 文章 … src/content/about.ts の abundance
 * ■ 写真 … src/config/images.ts の journal[1]（焼き芋を食べる滞在者）
 *
 * ※ 番号付きの SectionHeading は使わず、英字ラベルだけを添えています
 *   （引用そのものを主役にしたいため）。
 */
export function AboutAbundance() {
  return (
    <section
      id="abundance"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span className="numeral">{about.abundance.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{about.abundance.label}</span>
            </p>

            {/* 見出しは画面に出しています（目次・読み上げのため h2 のまま） */}
            <h2 className="heading-jp heading-section reveal mt-5 text-ink">
              {about.abundance.title}
            </h2>

            {/* 本人の言葉（原文）。大きく組みます */}
            <blockquote className="reveal mt-10 md:mt-12">
              <LeafIcon size={24} className="text-moss/70" />
              <p className="pull-quote mt-5 text-[1.2rem] leading-[1.95] text-soil md:text-[1.6rem]">
                {about.abundance.quote}
              </p>
            </blockquote>

            <div className="reveal mt-10 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
              {about.abundance.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="reveal md:col-span-4 md:col-start-9 md:mt-20">
            <Photo
              image={images.journal[1]}
              ratio="1 / 1"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
