import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { voices } from "@/content/voices";

/** プランの表示名。料金の数字は書きません（数字を出すのは /plans/ だけ） */
const planLabel = {
  week: "1週間滞在",
  month: "1ヶ月滞在",
} as const;

/**
 * /voices/ 体験ストーリー（1人ずつの滞在記）の一覧。
 *
 * ⚠ src/content/voices.ts の stories が空のあいだは、このセクションごと出しません。
 *   見出しも「準備中」の文字も出しません（下の早期 return がその役目です）。
 *   行き先のない見出しを先に置かないための作りなので、外さないでください。
 *
 * ⚠ ここに架空の滞在者・体験談を置かないでください。
 *   掲載の前提（取材・掲載許諾・モニターの明示・料金非表示）は
 *   src/content/voices.ts の VoiceStory 型のコメントにまとめています。
 *
 * 将来ストーリーが増えたら、1件ずつ /voices/<slug>/ に切り出せます
 * （VoiceStory は1件で完結するデータにしてあります）。
 *
 * ■ 文章 … src/content/voices.ts の stories
 */
export function VoicesStories() {
  if (voices.stories.length === 0) return null;

  return (
    <section
      id="stories"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading index="02" label="Stories" title="滞在記" />

        <div className="mt-12 space-y-20 md:mt-16 md:space-y-28">
          {voices.stories.map((story) => (
            <article key={story.slug} className="reveal">
              <p className="label-en flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] text-ink-faint">
                <span className="numeral">{story.period}</span>
                <span aria-hidden="true" className="h-px w-6 bg-ink-faint/50" />
                <span>{planLabel[story.plan]}</span>
                {/* 属性は、本人が公開に同意した範囲だけ入っています */}
                {story.attributes ? <span>{story.attributes}</span> : null}
              </p>

              <h3 className="heading-jp mt-5 text-[1.35rem] leading-[1.7] text-ink md:text-[1.7rem]">
                {story.title}
              </h3>

              {/* モニター滞在は隠しません。有料で滞在した方の声と混ぜないための注記です */}
              {story.consent.isMonitor ? (
                <p className="mt-4 text-[0.75rem] leading-[2] text-ink-faint">
                  ※ モニター滞在としてご協力いただいています
                </p>
              ) : null}

              {story.photos.length > 0 ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {story.photos.map((photo) => (
                    <Photo
                      key={photo.src}
                      image={photo}
                      ratio="4 / 5"
                      sizes="(min-width: 768px) 400px, 50vw"
                    />
                  ))}
                </div>
              ) : null}

              <div className="mt-10 space-y-10">
                {story.sections.map((section) => (
                  <div key={section.heading}>
                    <h4 className="heading-jp text-[1.05rem] leading-[1.8] text-ink md:text-[1.15rem]">
                      {section.heading}
                    </h4>

                    <div className="mt-5 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {/* 本人の言葉は原文どおり。整えたり要約したりしません */}
                    {section.quote ? (
                      <blockquote className="mt-7 border-l border-clay/40 pl-5">
                        <p className="pull-quote text-[1.1rem] leading-[1.9] text-ink md:text-[1.35rem]">
                          {section.quote}
                        </p>
                      </blockquote>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
