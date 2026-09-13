import type { ImageAsset } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { plans } from "@/content/plans";
import { cn } from "@/lib/cn";

/**
 * P-02 / P-03　2つの滞在プラン。/plans/ 専用。
 *
 * 価格表（テーブル）にはしていません。2つのプランを左右に並べ、
 * あいだを細い縦線で仕切るだけにしています（旧 Plans.tsx の組み方を引き継ぎ）。
 *
 * ⚠ 金額の下には必ず「その料金で何をして過ごすのか」を置いてください。
 *   料金だけで比べられないようにするのが、このページの設計方針です。
 *
 * ■ 文章・金額 … src/content/plans.ts の options
 *                 金額の数字は src/config/site.ts の price.plans と揃えてください
 * ■ 写真 … 1ヶ月＝個室／1週間＝収穫
 *   ※ 三津浜の宿の写真が素材にないため、1週間滞在には畑の写真を当てています。
 *     追加撮影推奨（優先度高）。宿の写真が届いたら photos の対応を差し替えてください。
 */

/** plans.ts の photo キー → 実際の写真 */
const photos: Record<(typeof plans.options.items)[number]["photo"], ImageAsset> =
  {
    houseRoom: images.house[0],
    expHarvest: images.expHarvest,
  };

export function PlansOptions() {
  return (
    <section
      id="options"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.options.index}
              label={plans.options.label}
              title={plans.options.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {plans.options.lead}
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:mt-24 md:grid-cols-2 md:gap-0">
          {plans.options.items.map((plan, i) => (
            <article
              key={plan.name}
              className={cn(
                "reveal border-t border-sand pt-8 md:pt-10",
                i === 0 ? "md:pr-12 lg:pr-20" : "md:border-l md:pl-12 lg:pl-20",
              )}
            >
              <h3 className="heading-jp text-[1.35rem] text-ink md:text-[1.6rem]">
                {plan.name}
              </h3>

              {/* 金額。数字は Fraunces（.numeral）、単位は明朝 */}
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

              <Photo
                image={photos[plan.photo]}
                ratio="3 / 2"
                sizes="(min-width: 768px) 44vw, 100vw"
                className="mt-8"
              />

              {/* この料金でどんな暮らしになるか */}
              <div className="mt-8 space-y-5 text-[0.9rem] leading-[2.1] text-ink-soft">
                {plan.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* 期間中にやること（要点） */}
              <ul className="mt-8 space-y-3.5 border-t border-sand pt-7">
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

              {/* 添え書き。1週間滞在の「2〜4週目のみ」は見落とされないよう囲みで出します */}
              <p
                className={cn(
                  "mt-7 text-[0.8rem] leading-[2]",
                  i === 1
                    ? "border-l-2 border-clay/50 bg-paper/70 px-4 py-3 text-soil"
                    : "text-ink-faint",
                )}
              >
                {plan.note}
              </p>

              <div className="mt-8">
                <TextLink href={plan.link.href}>{plan.link.label}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
