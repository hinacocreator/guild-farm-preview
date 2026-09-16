import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { plans } from "@/content/plans";

/**
 * 07　プランを決める前に、よくある質問。/plans/ 専用。
 *
 * JavaScriptを使わず、HTML標準の <details>/<summary> で開閉しています
 * （キーボード操作・スクリーンリーダー・JS無効の環境でもそのまま動きます）。
 *
 * ■ 質問と回答 … src/content/plans.ts の faq
 *
 * ⚠ ここに置くのは「プランを決める前に必要な質問」だけです（指示書17）。
 *   未経験・共同生活・向き不向き・雨天・持ち物・申し込みの手続きは /flow/ の担当です
 *   （src/content/flow.ts の faq）。同じ回答を2ページで長く繰り返さないでください。
 *   FLOW と重なる質問は3文までにして、その項目の link で /flow/ へ送ります。
 */
export function PlansFaq() {
  return (
    <section
      id="faq"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={plans.faq.index}
          label={plans.faq.label}
          title={plans.faq.title}
        />

        <p className="reveal mt-8 max-w-[38em] text-[0.95rem] leading-[2.05] text-ink-soft">
          {plans.faq.lead}
        </p>

        <div className="mt-12 border-t border-sand md:mt-16">
          {plans.faq.items.map((item) => {
            const link = "link" in item ? item.link : undefined;

            return (
              <details
                key={item.q}
                className="reveal group border-b border-sand"
                name="plans-faq"
              >
                <summary className="flex cursor-pointer list-none items-start gap-5 py-6 transition-colors duration-300 hover:text-clay md:gap-8 md:py-7 [&::-webkit-details-marker]:hidden">
                  <h3 className="heading-item flex-1 text-ink transition-colors duration-300 group-hover:text-clay">
                    {item.q}
                  </h3>

                  {/* ＋ / −（開くと縦棒が回転して横棒に重なります） */}
                  <span
                    aria-hidden="true"
                    className="relative mt-2.5 block h-3.5 w-3.5 shrink-0"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-clay" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-clay transition-transform duration-300 group-open:rotate-90" />
                  </span>
                </summary>

                <div className="pb-8 pr-8 md:pb-9">
                  <p className="max-w-[40em] text-[0.9rem] leading-[2.1] text-ink-soft">
                    {item.a}
                  </p>
                  {link ? (
                    <div className="mt-5">
                      <TextLink href={link.href}>{link.label}</TextLink>
                    </div>
                  ) : null}
                </div>
              </details>
            );
          })}
        </div>

        <div className="reveal mt-10 md:mt-12">
          <TextLink href={plans.faq.link.href} size="lg">
            {plans.faq.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
