import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { flow } from "@/content/flow";

/**
 * F-02　滞在がはじまるまでの、5つのこと。/flow/ 専用（旧 Flow.tsx の後継）。
 *
 * 5ステップを縦に並べ、番号と番号を細い線でつないでいます。
 * 旧セクションはPCで4ステップを横並びにしていましたが、
 * ステップごとの説明が長くなったため、スマホと同じ縦並びに揃えました
 * （375px で横スクロールが出ないことを優先しています）。
 *
 * ■ 文章 … src/content/flow.ts の steps
 * ■ 写真 … dayMorning（朝の畑）を1枚だけ。到着後の場面に添えています
 *
 * ⚠ 旧セクションにあった「03 見学する」は外しました。
 *   見学の受け入れ方法が資料で確認できていないためです（脚注で ※要確認 としています）。
 * ⚠ 「誰が」「何日で」連絡するかも資料にないため書いていません（同じく脚注）。
 */
export function FlowSteps() {
  const steps = flow.steps.items;

  return (
    <section
      id="steps"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-6">
            <SectionHeading
              index={flow.steps.index}
              label={flow.steps.label}
              title={flow.steps.title}
            />
            <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
              {flow.steps.lead}
            </p>
          </div>

          <Photo
            image={images.dayMorning}
            ratio="3 / 2"
            sizes="(min-width: 768px) 38vw, 100vw"
            objectPosition="object-bottom"
            className="reveal md:col-span-5 md:col-start-8"
          />
        </div>

        <ol className="mt-16 md:mt-24">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <li
                key={step.step}
                className="reveal relative grid grid-cols-[2.75rem_1fr] gap-x-5 pb-10 md:grid-cols-[6rem_1fr] md:gap-x-10 md:pb-14"
              >
                {/* 番号 */}
                <span className="numeral pt-1 text-[1.8rem] leading-none text-clay md:text-[2.6rem]">
                  {step.step}
                </span>

                {/* 次のステップへつながる縦線 */}
                {isLast ? null : (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 left-[0.7rem] top-11 w-px bg-sand md:left-[1.6rem] md:top-16"
                  />
                )}

                <div className="border-t border-sand pt-1 md:pt-2">
                  <h3 className="heading-item text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-[36em] text-[0.9rem] leading-[2.1] text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* 脚注（確認できていないこと）。確認が取れたら本文に直してください */}
        <div className="flex flex-col gap-8 border-t border-sand pt-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <ul className="reveal max-w-[42em] space-y-3">
            {flow.steps.notes.map((note) => (
              <li
                key={note}
                className="text-[0.78rem] leading-[2] text-ink-faint"
              >
                {note}
              </li>
            ))}
          </ul>

          {/* 金額はこのページに書かないので、プラン・料金へ送ります */}
          <div className="reveal shrink-0 md:pt-1">
            <TextLink href={flow.steps.link.href}>
              {flow.steps.link.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
