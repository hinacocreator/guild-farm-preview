import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";
import { phrase } from "@/lib/jp";

/**
 * 08　どちらにするか迷ったら。/plans/ 専用。
 *
 * 見出しと本文はクライアント確定です（指示書16）。言い換えないでください。
 *
 * ⚠ このセクションにボタンは置きません。すぐ下に共通CTA（ClosingCta）が続くので、
 *   同じ役割のボタンが2つ並ぶのを避けています。ここは、その手前の一言です。
 * ⚠ 「1週間＝初心者」「1ヶ月＝本格的」のような優劣・人物像は書きません。
 *
 * ■ 文章 … src/content/plans.ts の decide
 */
export function PlansDecide() {
  return (
    <section
      id="decide"
      className="scroll-mt-16 bg-paper pt-16 pb-16 md:scroll-mt-20 md:pt-32 md:pb-24"
    >
      <Container width="narrow">
        <SectionHeading
          index={plans.decide.index}
          label={plans.decide.label}
          title={plans.decide.title}
        />

        <div className="reveal wrap-phrase mt-8 max-w-[36em] space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1.02rem]">
          {plans.decide.body.map((line) => (
            <p key={line}>{phrase(line)}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
