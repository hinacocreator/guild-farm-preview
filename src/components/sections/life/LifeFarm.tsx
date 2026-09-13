import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type ImageAsset } from "@/config/images";
import { life } from "@/content/life";

/**
 * /life/ 05 農（何をするか・どこでするか・雨の日のこと）。
 *
 * 旧 Places.tsx（体験の場所3か所）は、Schedule の下部ではなく
 * この「農」のセクションの中に置きました。畑の話と場所の話は続けて読むものだからです。
 *
 * ■ 文章 … src/content/life.ts の farm（3か所の一覧は farm.places）
 * ■ 写真 … src/config/images.ts の expFarmwork / aboutSoil / expSeason
 *          ※ 体験場所3か所（海の近くの畑・島の自然農園・道後の畑）それぞれの写真は
 *            素材にありません（追加撮影推奨）。一覧は文字だけで組んでいます。
 * ⚠ 無肥料を選んだ理由は /about/ と /owner/ の担当です。ここでは畑の様子として1段落だけ。
 * ⚠ 番地・農家さんやオーナーの名前・島の農園の屋号は書きません。所要時間は「目安」と添えます。
 */

/** life.ts の photo キー → 実際の写真 */
const photos: Record<(typeof life.farm.photos)[number], ImageAsset> = {
  expFarmwork: images.expFarmwork,
  aboutSoil: images.aboutSoil,
  expSeason: images.expSeason,
};

/** 写真3枚の比率（上の photos と同じ順） */
const ratios = ["4 / 5", "1 / 1", "4 / 5"] as const;

export function LifeFarm() {
  return (
    <section
      id="farming"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.farm.index}
            label={life.farm.label}
            title={life.farm.title}
          />
          <p className="wrap-phrase reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {life.farm.lead}
          </p>
        </div>

        <div className="reveal mt-12 max-w-[46em] space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:mt-16 md:text-[0.95rem]">
          {life.farm.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* 畑の写真3枚。1枚目を大きく、残り2枚を小さく並べています */}
        <ul className="mt-12 grid grid-cols-6 items-start gap-3 md:mt-16 md:gap-6">
          {life.farm.photos.map((key, i) => (
            <li
              key={key}
              className={
                i === 0
                  ? "reveal col-span-6 md:col-span-6"
                  : "reveal col-span-3 md:col-span-3 md:mt-16"
              }
            >
              <Photo
                image={photos[key]}
                ratio={i === 0 ? "3 / 2" : ratios[i]}
                sizes={
                  i === 0
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 24vw, 48vw"
                }
              />
            </li>
          ))}
        </ul>

        {/* 体験の場所（3か所）。罫線だけで区切り、面は塗りません */}
        <div
          id="places"
          className="mt-14 scroll-mt-16 border-t border-sand pt-12 md:mt-28 md:scroll-mt-20 md:pt-20"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-14">
            <h3 className="heading-jp reveal text-[1.4rem] text-ink md:col-span-5 md:text-[1.8rem]">
              {life.farm.places.title}
            </h3>
            <p className="reveal text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
              {life.farm.places.lead}
            </p>
          </div>

          <ol className="mt-10 md:mt-14">
            {life.farm.places.items.map((place, i) => (
              <li
                key={place.name}
                className="reveal grid gap-x-8 gap-y-3 border-t border-sand py-8 md:grid-cols-12 md:py-10"
              >
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="numeral shrink-0 text-[0.8rem] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="heading-item wrap-phrase text-ink">
                      {place.name}
                    </h4>
                    <p className="mt-1.5 text-[0.78rem] tracking-[0.06em] text-ink-faint">
                      {place.area}
                    </p>
                  </div>
                </div>

                <p className="pl-8 text-[0.82rem] leading-[1.9] text-soil md:col-span-3 md:pl-0">
                  {place.access}
                </p>

                <p className="pl-8 text-[0.85rem] leading-[2] text-ink-soft md:col-span-5 md:pl-0">
                  {place.text}
                </p>
              </li>
            ))}
          </ol>

          <p className="reveal border-t border-sand pt-6 text-[0.78rem] leading-[2] text-ink-faint">
            {life.farm.places.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
