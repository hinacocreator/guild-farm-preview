import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { plans } from "@/content/plans";

/**
 * 06　滞在にかかる、その他の費用。/plans/ 専用。
 *
 * 「料金以外に、いくら必要になりそうか」を判断するためのセクションです。
 *
 * ⚠ 金額は推定しません。資料にあるのは「食事と現地交通費は実費」という事実だけです。
 *   1ヶ月の食費の目安、交通費の目安などの数字を**書き足さないでください**。
 * ⚠ 初期費用とお支払い方法は「お問い合わせのときにご案内します」を維持します。
 *   制作側の内部用語（未確定・確認中・準備中など）は公開文に書きません
 *   （docs/pending-facts.md A-1〜A-4 と運用ルール）。
 *
 * ■ 文章 … src/content/plans.ts の costs
 */
export function PlansCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={plans.costs.index}
          label={plans.costs.label}
          title={plans.costs.title}
        />

        <p className="reveal mt-8 max-w-[38em] text-[0.95rem] leading-[2.05] text-ink-soft">
          {plans.costs.lead}
        </p>

        <ul className="mt-10 border-t border-sand md:mt-14">
          {plans.costs.items.map((item) => (
            <li
              key={item.title}
              className="reveal grid gap-2 border-b border-sand py-6 md:grid-cols-[9rem_1fr] md:gap-8 md:py-7"
            >
              <h3 className="heading-item text-ink">{item.title}</h3>
              <p className="text-[0.9rem] leading-[2.05] text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 bg-cream px-6 py-6 text-[0.85rem] leading-[2.05] text-soil md:px-8 md:py-7">
          {plans.costs.note}
        </p>

        <div className="reveal mt-9">
          <TextLink href={plans.costs.link.href}>
            {plans.costs.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
