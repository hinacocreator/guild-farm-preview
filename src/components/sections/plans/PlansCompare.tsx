import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { plans } from "@/content/plans";

/**
 * 01　1週間プランと、1ヶ月プラン。/plans/ 専用。
 *
 * このページでいちばん上に置く比較です。ここだけ読めば違いが分かるようにしています。
 *
 * ■ 組み方
 *   ・スマホ（〜767px）… プランごとの縦積みカード。各項目に見出し（滞在期間・料金…）が
 *     付いているので、上下にスクロールしても何の値かが分かります。
 *   ・PC（768px〜）… 2列。`grid-rows-subgrid` で左右の行の高さをそろえているので、
 *     同じ項目が必ず同じ高さに並びます（表の行と同じ読み方ができます）。
 *   ・DOMはひとつだけです（PC用とスマホ用の2重出力はしていません）。
 *
 * ⚠ 「おすすめ」「人気」「初心者向け」等のラベルは付けません（指示書5）。
 *   2つのプランは対等に並べます。枠線・背景・順番で優劣を付けないでください。
 * ⚠ 金額は目立たせますが、大きくしすぎません（指示書12）。
 *
 * ■ 文章・金額 … src/content/plans.ts の compare
 *                 金額の数字は src/config/site.ts の price.plans と揃えてください
 */

/** 見出し1行＋金額＋5項目＋リンク＝8行。左右のカードでこの行数をそろえます */
const ROWS = "md:grid-rows-[repeat(8,auto)]";

export function PlansCompare() {
  return (
    <section
      id="compare"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.compare.index}
              label={plans.compare.label}
              title={plans.compare.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {plans.compare.lead}
          </p>
        </div>

        <div
          className={`mt-12 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-x-12 md:gap-y-0 lg:gap-x-20 ${ROWS}`}
        >
          {plans.compare.items.map((plan, i) => (
            <article
              key={plan.id}
              className={[
                "reveal border-t-2 border-clay/40 pt-7",
                "md:row-span-8 md:grid md:grid-rows-subgrid md:gap-0",
                /* 2列目だけ、左に細い仕切り線を足します（優劣の表現ではありません） */
                i === 1 ? "md:border-l md:border-l-sand md:pl-12 lg:pl-20" : "",
              ].join(" ")}
            >
              {/* 1行目: プラン名 */}
              <h3 className="heading-jp text-[1.3rem] leading-[1.6] text-ink md:text-[1.5rem]">
                {plan.name}
              </h3>

              {/* 2行目: 料金。数字は .numeral、単位は明朝 */}
              <div className="mt-5 border-b border-sand pb-6 md:mt-6">
                <p className="label-en text-[0.6rem] text-ink-faint">Price</p>
                <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="numeral whitespace-nowrap text-[1.9rem] leading-[1.1] text-clay md:text-[2.3rem]">
                    {plan.price}
                  </span>
                  <span className="heading-jp text-[1rem] text-ink">
                    {plan.priceUnit}
                  </span>
                  <span className="text-[0.8rem] text-ink-faint">
                    / {plan.priceNote}
                  </span>
                </p>
              </div>

              {/* 3〜7行目: 比較する項目 */}
              {plan.cells.map((cell) => (
                <div
                  key={cell.label}
                  className="border-b border-sand py-5 md:py-6"
                >
                  <p className="text-[0.72rem] tracking-[0.12em] text-ink-faint">
                    {cell.label}
                  </p>
                  <p className="mt-2 text-[0.9rem] leading-[2] text-ink-soft">
                    {cell.value}
                  </p>
                </div>
              ))}

              {/* 8行目: それぞれの詳しい説明へ */}
              <div className="pt-6 md:pt-7">
                <TextLink href={plan.link.href}>{plan.link.label}</TextLink>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-12 text-[0.8rem] leading-[2] text-ink-faint md:mt-16">
          {plans.compare.note}
        </p>
      </Container>
    </section>
  );
}
