import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

/**
 * 05　料金に含まれるもの、含まれないもの。/plans/ 専用（旧 Value.tsx → PlansIncluded の改修）。
 *
 * ⚠ 指示書13により、3つを**別のカテゴリ**として出します。混ぜないでください。
 *   1) 料金に含まれるもの … 宿泊・最初の1週間の予定など「サービス」
 *   2) 使える設備         … キッチン・洗濯機・Wi-Fi など「施設設備」
 *   3) 料金に含まれないもの … 食事・現地の交通費など
 *
 * ⚠ 「使える設備」は今市シェアハウスの設備です（FACTS v2）。
 *   三津浜の宿の設備は確認できていないので、注記でどちらの滞在先かを明示しています。
 * ⚠ 写真は置いていません。食卓の写真を「含まれるもの」の隣に置くと、
 *   食事が料金に含まれると読まれるためです（食事は実費）。
 *
 * ■ 文章 … src/content/plans.ts の included
 */
export function PlansIncluded() {
  return (
    <section
      id="included"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.included.index}
              label={plans.included.label}
              title={plans.included.title}
              leaf
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {plans.included.lead}
          </p>
        </div>

        {/* 1) 料金に含まれるもの（サービス） */}
        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-12 md:gap-x-16">
          <h3 className="reveal heading-item text-ink md:col-span-3">
            {plans.included.services.title}
          </h3>
          <ol className="md:col-span-9 md:col-start-4">
            {plans.included.services.items.map((item, i) => (
              <li
                key={item.title}
                className="reveal grid grid-cols-[2.25rem_1fr] gap-x-4 border-t border-sand py-5 first:border-t-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-x-6 md:py-7"
              >
                <span className="numeral pt-1 text-[0.85rem] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="heading-item text-ink">{item.title}</h4>
                  <p className="mt-2.5 max-w-[38em] text-[0.9rem] leading-[2.05] text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* 2) 使える設備（施設設備。1 とはカテゴリが違います） */}
        <div className="mt-14 grid gap-8 border-t border-sand pt-12 md:mt-20 md:grid-cols-12 md:gap-x-16 md:pt-16">
          <div className="reveal md:col-span-3">
            <h3 className="heading-item text-ink">
              {plans.included.facilities.title}
            </h3>
            <p className="mt-3 text-[0.78rem] leading-[1.95] text-ink-faint">
              {plans.included.facilities.note}
            </p>
          </div>
          <ul className="md:col-span-9 md:col-start-4 md:grid md:grid-cols-2 md:gap-x-12">
            {plans.included.facilities.items.map((item) => (
              <li
                key={item}
                className="reveal grid grid-cols-[0.85rem_1fr] gap-x-3 border-b border-sand py-3.5 text-[0.875rem] leading-[1.95] text-ink-soft"
              >
                <span aria-hidden="true" className="mt-[0.95em] h-px bg-clay/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3) 料金に含まれないもの */}
        <div className="mt-14 grid gap-8 border-t border-sand pt-12 md:mt-20 md:grid-cols-12 md:gap-x-16 md:pt-16">
          <h3 className="reveal heading-item text-ink md:col-span-3">
            {plans.included.excluded.title}
          </h3>
          <div className="md:col-span-9 md:col-start-4">
            <ul className="md:grid md:grid-cols-2 md:gap-x-12">
              {plans.included.excluded.items.map((item) => (
                <li
                  key={item}
                  className="reveal grid grid-cols-[0.85rem_1fr] gap-x-3 border-b border-sand py-3.5 text-[0.875rem] leading-[1.95] text-ink-soft"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.95em] h-px bg-clay/50"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="reveal mt-7 text-[0.8rem] leading-[2] text-ink-faint">
              {plans.included.excluded.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
