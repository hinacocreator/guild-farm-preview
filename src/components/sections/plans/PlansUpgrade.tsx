import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

/**
 * P-05　部屋のグレードアップ（三津浜の個室）。/plans/ 専用。
 *
 * ⚠ 写真を入れていません。三津浜の部屋の写真が素材にないためです。
 *   道後の写真（house[3] 廊下など）を当てると別の場所の部屋と誤解されるので、
 *   写真が用意できるまでは文字だけで組んでいます（追加撮影推奨・優先度高）。
 *
 * ■ 文章 … src/content/plans.ts の upgrade
 * ■ 追加料金 … src/config/site.ts の price.plans.upgrade と揃えてください
 */
export function PlansUpgrade() {
  return (
    <section
      id="upgrade"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.upgrade.index}
              label={plans.upgrade.label}
              title={plans.upgrade.title}
            />

            <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
              {plans.upgrade.sub}
            </p>

            {/* 追加料金 */}
            <div className="reveal mt-8 border-y border-sand py-7">
              <p className="numeral text-[1.35rem] leading-[1.4] text-clay md:text-[1.7rem]">
                {plans.upgrade.extra}
              </p>
              <p className="mt-2 text-[0.75rem] text-ink-faint">
                {plans.upgrade.extraNote}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <p className="reveal text-[0.95rem] leading-[2.1] text-ink-soft">
              {plans.upgrade.text}
            </p>

            <ul className="reveal mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {plans.upgrade.merits.map((merit) => (
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
      </Container>
    </section>
  );
}
