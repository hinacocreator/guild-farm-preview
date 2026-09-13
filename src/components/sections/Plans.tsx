import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * PLANS（2つの滞在プラン）。
 *
 * 価格表（テーブル）にはしていません。枠線で囲んだカードを並べると
 * 通販サイトのように見えてしまうため、2つのプランを左右に並べ、
 * あいだを細い縦線で仕切るだけにしています。
 *
 * ・文章・金額 … src/content/copy.ts の plans
 * ・金額の数字 … src/config/site.ts の price.plans と揃えてください
 * ・グレードアップ（三津浜の個室）は下に1ブロックだけ置いています。
 * ・両プラン共通の条件（食事・交通費は実費など）は、最後に小さく。
 */
export function Plans() {
  const [month, week] = copy.plans.items;
  const plans = [month, week];

  return (
    <section
      id="plans"
      className="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={copy.plans.index}
              label={copy.plans.label}
              title={copy.plans.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {copy.plans.lead}
          </p>
        </div>

        {/* ---------------- 2つのプラン（左右2カラム） ---------------- */}
        <div className="mt-14 grid gap-14 md:mt-24 md:grid-cols-2 md:gap-0">
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={cn(
                "reveal border-t border-sand pt-8 md:pt-10",
                i === 0
                  ? "md:pr-12 lg:pr-20"
                  : "md:border-l md:pl-12 lg:pl-20",
              )}
            >
              <h3 className="heading-jp text-[1.35rem] text-ink md:text-[1.6rem]">
                {plan.name}
              </h3>

              {/* 金額 */}
              <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="numeral whitespace-nowrap text-[clamp(2.6rem,11vw,4rem)] leading-[0.95] text-clay">
                  {plan.price}
                </span>
                <span className="heading-jp text-[0.95rem] text-ink md:text-[1.1rem]">
                  {plan.priceUnit}
                </span>
              </div>

              {/* 滞在先 */}
              <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-sand pt-5">
                <span className="label-en shrink-0 text-[0.6rem] text-ink-faint">
                  Stay
                </span>
                <span className="text-[0.9rem] text-soil">{plan.stay}</span>
              </p>

              {/* 滞在の特徴 */}
              <ul className="mt-7 space-y-3.5">
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className="grid grid-cols-[0.85rem_1fr] gap-x-3 text-[0.875rem] leading-[2] text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.95em] h-px bg-clay/50"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-[0.78rem] leading-[2] text-ink-faint">
                {plan.note}
              </p>
            </article>
          ))}
        </div>

        {/* ---------------- 滞在先のグレードアップ ---------------- */}
        <div className="reveal mt-20 grid gap-8 border-t border-sand pt-12 md:mt-28 md:grid-cols-12 md:gap-x-16 md:pt-16">
          <div className="md:col-span-4">
            <p className="label-en text-[0.6rem] text-ink-faint">Option</p>
            <h3 className="heading-jp mt-4 text-[1.2rem] text-ink md:text-[1.4rem]">
              {copy.plans.upgrade.title}
            </h3>
            <p className="numeral mt-4 text-[1.35rem] leading-[1.4] text-clay md:text-[1.6rem]">
              {copy.plans.upgrade.extra}
            </p>
            <p className="mt-2 text-[0.75rem] text-ink-faint">
              {copy.plans.upgrade.extraNote}
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[0.9rem] leading-[2.05] text-ink-soft">
              {copy.plans.upgrade.text}
            </p>
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {copy.plans.upgrade.merits.map((merit) => (
                <li
                  key={merit}
                  className="flex items-baseline gap-3 border-t border-sand pt-3 text-[0.85rem] leading-[1.9] text-soil"
                >
                  <span aria-hidden="true" className="text-[0.7rem] text-sun">
                    ◆
                  </span>
                  <span>{merit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- 共通の条件とCTA ---------------- */}
        <div className="reveal mt-16 flex flex-col gap-8 border-t border-sand pt-12 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-12">
          <ul className="max-w-[34em] space-y-1.5">
            {copy.plans.common.map((line) => (
              <li key={line} className="text-[0.8rem] leading-[2] text-ink-faint">
                {line}
              </li>
            ))}
          </ul>
          <CtaButton variant="clay" className="self-start md:shrink-0">
            {copy.plans.cta}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
