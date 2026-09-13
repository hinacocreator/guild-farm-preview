import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { plans } from "@/content/plans";

/**
 * P-04　この料金に、含まれるもの。/plans/ 専用（旧 Value.tsx の後継）。
 *
 * 設備の一覧ではなく「滞在で手に入るもの」の言葉で書いています。
 * 金額は前のセクション（PlansOptions）に出ているので、ここでは繰り返しません。
 *
 * ■ 文章 … src/content/plans.ts の included
 * ■ 写真 … dayDinner（採れたものを並べた食卓）を1枚だけ
 *
 * ※「駅まで徒歩5分」は、プランのカード・住まい・周辺環境にも出てくるため
 *   この一覧からは外しています（同じ事実を4か所で繰り返さないため）。
 */
export function PlansIncluded() {
  return (
    <section
      id="included"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-x-16">
          {/* 左：見出し・リード・写真 */}
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.included.index}
              label={plans.included.label}
              title={plans.included.title}
              leaf
            />

            <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
              {plans.included.lead}
            </p>

            <Photo
              image={images.dayDinner}
              ratio="4 / 3"
              ratioMobile="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10 md:mt-14"
            />
          </div>

          {/* 右：含まれるもの（番号付きリスト） */}
          <ol className="md:col-span-6 md:col-start-7 md:pt-4">
            {plans.included.items.map((item, i) => (
              <li
                key={item.title}
                className="reveal grid grid-cols-[2.25rem_1fr] gap-x-4 border-t border-sand py-5 first:border-t-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-x-6 md:py-9"
              >
                <span className="numeral pt-1 text-[0.85rem] text-clay md:text-[0.95rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="heading-item text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-[2.05] text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="reveal mt-10 max-w-[38em] border-t border-sand pt-8 text-[0.8rem] leading-[2] text-ink-faint md:mt-20">
          {plans.included.note}
        </p>
      </Container>
    </section>
  );
}
