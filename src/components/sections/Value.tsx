import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { copy } from "@/content/copy";

/**
 * VALUE（月額に含まれるもの）。
 * 左に「金額」と写真、右に「得られるもの6項目」の番号付きリスト、
 * 最後に都市との対比を大きな引用として置いています。
 *
 * ・文章 … src/content/copy.ts の value を編集してください。
 * ・金額 … copy.value.price（数字は src/config/site.ts の price と揃える）。
 * ・写真 … images.dayDinner を1枚だけ添えています。
 */
export function Value() {
  return (
    <section
      id="value"
      className="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-16">
          {/* ---------------- 左：見出し・金額・写真 ---------------- */}
          <div className="md:col-span-5">
            <SectionHeading
              index={copy.value.index}
              label={copy.value.label}
              title={copy.value.title}
              leaf
            />

            {/* 金額。数字は Fraunces（.numeral）、単位は明朝。 */}
            <div className="reveal mt-10 border-y border-sand py-8 md:mt-12 md:py-10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="numeral whitespace-nowrap text-[clamp(3rem,13vw,5.75rem)] leading-[0.95] text-clay">
                  {copy.value.price.amount}
                </span>
                <span className="heading-jp text-[1.05rem] text-ink md:text-[1.25rem]">
                  {copy.value.price.unit}
                </span>
                <span className="label-en ml-auto text-[0.62rem] text-ink-faint">
                  {copy.value.price.caption}
                </span>
              </div>
            </div>

            <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
              {copy.value.lead}
            </p>

            <Photo
              image={images.dayDinner}
              ratio="4 / 3"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10 md:mt-14"
            />
          </div>

          {/* ---------------- 右：得られるもの（番号付きリスト） ---------------- */}
          <ol className="md:col-span-6 md:col-start-7 md:pt-4">
            {copy.value.items.map((item, i) => (
              <li
                key={item.title}
                className="reveal grid grid-cols-[2.25rem_1fr] gap-x-4 border-t border-sand py-7 first:border-t-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-x-6 md:py-9"
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

        {/* ---------------- 都市との対比（引用） ---------------- */}
        <div className="reveal mt-20 border-t border-sand pt-14 md:mt-28 md:pt-20">
          <LeafIcon size={26} className="text-moss/70" />
          <p className="pull-quote mt-6 max-w-[26em] text-[1.15rem] text-ink md:text-[1.6rem]">
            {copy.value.comparison}
          </p>
        </div>

        {/* ---------------- 注記とCTA ---------------- */}
        <div className="reveal mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-12">
          <p className="max-w-[34em] text-[0.8rem] leading-[2] text-ink-faint">
            {copy.value.note}
          </p>
          <CtaButton variant="clay" className="self-start md:shrink-0">
            {copy.value.cta}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
