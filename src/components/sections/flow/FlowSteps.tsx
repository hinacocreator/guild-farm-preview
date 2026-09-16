import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { flow } from "@/content/flow";

/**
 * 02　申し込みから、滞在がはじまるまで。/flow/ 専用。
 *
 * 5ステップを縦に並べ、番号と番号を細い線でつないでいます。
 *
 * ⚠ ステップ 01 は「問い合わせる」ではなく「滞在を申し込む」です。
 *   以前の 01 問い合わせ → 02 オンラインで相談 → 03 申し込む という並びは、
 *   相談・面談が必須だと読めるため作り替えました（クライアント確定・2026-09-16）。
 *   相談は必須ではなく、任意のサポート導線として FlowConsult に独立させています。
 * ⚠ ステップ 02 を「面談」にしないでください（メッセージだけで終わる場合を含みます）。
 * ⚠ ステップ 03 の本文は確定公開文です（docs/pending-facts.md A-5）。
 *   申込書・支払い時期・キャンセルの中身は未確認なので、推測で補完しないでください。
 *
 * ■ 文章 … src/content/flow.ts の steps
 * ■ 写真 … dayMorning（朝の畑）を1枚だけ
 */
export function FlowSteps() {
  const steps = flow.steps.items;

  return (
    <section
      id="steps"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
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
            /** 持ち物の章へ送るステップだけ link を持っています（任意） */
            const link = "link" in step ? step.link : null;

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
                  {link ? (
                    <p className="mt-4">
                      <TextLink href={link.href}>{link.label}</TextLink>
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        {/* 金額はこのページに書かないので、プラン・料金へ送ります */}
        <div className="reveal border-t border-sand pt-8">
          <TextLink href={flow.steps.link.href}>{flow.steps.link.label}</TextLink>
        </div>
      </Container>
    </section>
  );
}
