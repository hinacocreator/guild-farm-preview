import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { flow } from "@/content/flow";

/**
 * F-05　よくある質問。/flow/ 専用。
 *
 * JavaScriptを使わず、HTML標準の <details>/<summary> で開閉しています。
 *
 * ■ 質問と回答 … src/content/flow.ts の faq
 *
 * ⚠ 料金の数字はこのページに書きません。金額に関わる質問（期間と料金・費用の内訳・
 *   設備・部屋の選び方）は /plans/ の担当です（src/content/plans.ts の faq）。
 *   末尾のリンクでそちらへ送っています。
 */
export function FlowFaq() {
  return (
    <section
      id="faq"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={flow.faq.index}
          label={flow.faq.label}
          title={flow.faq.title}
        />

        <p className="reveal mt-8 max-w-[38em] text-[0.95rem] leading-[2.05] text-ink-soft">
          {flow.faq.lead}
        </p>

        <div className="mt-12 border-t border-sand md:mt-16">
          {flow.faq.items.map((item) => (
            <details
              key={item.q}
              className="reveal group border-b border-sand"
              name="flow-faq"
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

              <p className="max-w-[40em] pb-8 pr-8 text-[0.9rem] leading-[2.1] text-ink-soft md:pb-9">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="reveal mt-10 md:mt-12">
          <TextLink href={flow.faq.link.href} size="lg">
            {flow.faq.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
