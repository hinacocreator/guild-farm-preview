import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 02「最初の1週間は、一緒に。／その先は、自分で組み立てる。」
 * （ブランド編集指示 4. 滞在の過ごし方）
 *
 * ⚠「毎日決められたプログラムがある」とも「最初から最後まで各自任せ」とも
 *   書かないでください（松井さんFB①・F1）。
 * ⚠ id="fit" は /flow/ のFAQ「どんな人が向いていますか」からの着地点です。
 *   変えるときは src/content/flow.ts の faq のリンクも直してください。
 *
 * ■ 文章 … src/content/about.ts の fit
 *          見出しは titleLines で指定の位置（「一緒に。」のあと）で改行しています。
 * ■ 写真 … src/config/images.ts の expNature（手入れをしている竹林）
 *          ※「畑以外の時間もある」ことが伝わる、畑仕事ではない風景を選んでいます。
 */
export function AboutFit() {
  const fit = about.fit;

  return (
    <section
      id={fit.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Photo
              image={images.expNature}
              ratio="4 / 5"
              sizes="(min-width: 768px) 38vw, 100vw"
              className="reveal"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <SectionHeading
              index={fit.index}
              label={fit.label}
              title={fit.title}
              lines={fit.titleLines}
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {fit.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 「時間にゆとりを持って過ごす人」も想像できるように1行（最終回遊QA C-9） */}
            <p className="reveal mt-7 border-t border-sand pt-6 text-[0.85rem] leading-[2] text-ink-faint">
              {fit.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
