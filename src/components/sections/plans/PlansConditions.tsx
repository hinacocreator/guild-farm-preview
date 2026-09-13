import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

/**
 * P-06　両方のプランに共通すること。/plans/ 専用。
 *
 * 条件をまとめて先に見せて、あとから「そうだったのか」を作らないためのセクションです。
 * 末尾の note（初期費用・お支払い方法は断定しない）は、
 * 条件が固まるまで必ず残してください。ここを曖昧に盛らないこと。
 *
 * ■ 文章 … src/content/plans.ts の conditions
 */
export function PlansConditions() {
  return (
    <section
      id="conditions"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={plans.conditions.index}
          label={plans.conditions.label}
          title={plans.conditions.title}
        />

        <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
          {plans.conditions.lead}
        </p>

        <ul className="mt-10 border-t border-sand md:mt-14">
          {plans.conditions.items.map((item) => (
            <li
              key={item}
              className="reveal grid grid-cols-[0.85rem_1fr] gap-x-4 border-b border-sand py-4 text-[0.9rem] leading-[2.05] text-ink-soft md:gap-x-5 md:py-6"
            >
              <span aria-hidden="true" className="mt-[0.95em] h-px bg-clay/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 bg-cream px-6 py-6 text-[0.85rem] leading-[2.05] text-soil md:px-8 md:py-7">
          {plans.conditions.note}
        </p>
      </Container>
    </section>
  );
}
