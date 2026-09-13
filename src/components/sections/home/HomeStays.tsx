import type { ImageAsset } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { home } from "@/content/home";

/**
 * H-07 滞在のかたち。HOME専用。
 *
 * 「1週間」「1ヶ月」という2つの選択肢があることだけを伝え、/plans/ へ送ります。
 * ⚠ 金額・受け入れ時期・人数・グレードアップは書きません（すべて /plans/ の担当）。
 *   金額の数値そのものは src/config/site.ts の price に残っています。
 *
 * ■ 文章 … src/content/home.ts の stays
 * ■ 写真 … expHarvest（1週間）／house[0]（1ヶ月）
 *
 * ※ ここだけリンクではなくボタン（控えめな罫線）です。
 *   料金を探して来た人が最短で /plans/ へ抜けられるようにするためです。
 */

/** home.ts の photo キー → 実際の写真 */
const photos: Record<(typeof home.stays.cards)[number]["photo"], ImageAsset> = {
  expHarvest: images.expHarvest,
  /** 窓際に机のある個室。「住む」イメージのため1ヶ月滞在に添えています */
  houseRoom: images.house[0],
};

export function HomeStays() {
  return (
    <section id="stays" className="bg-paper py-20 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={home.stays.index}
            label={home.stays.label}
            title={home.stays.title}
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
            {home.stays.sub}
          </p>
        </div>

        <ul className="mt-12 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-10 lg:gap-16">
          {home.stays.cards.map((card, i) => (
            <li
              key={card.term}
              className={i === 1 ? "reveal md:mt-16" : "reveal"}
            >
              <Photo
                image={photos[card.photo]}
                ratio="3 / 2"
                sizes="(min-width: 768px) 45vw, 100vw"
              />

              <p className="label-en mt-6 text-[0.65rem] text-ink-faint">
                {card.en}
              </p>
              <h3 className="heading-jp mt-3 text-[1.2rem] text-ink md:text-[1.45rem]">
                {card.term}
              </h3>
              <p className="wrap-phrase mt-3 text-[0.88rem] leading-[2.05] text-ink-soft md:text-[0.93rem]">
                {card.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 md:mt-20">
          <CtaButton
            variant="outline"
            size="md"
            href={home.stays.link.href}
          >
            {home.stays.link.label}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
