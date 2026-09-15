import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type ImageAsset } from "@/config/images";
import { life } from "@/content/life";

/**
 * /life/ 02 畑に行く日の1日（全文版）。
 *
 * 朝・昼・夕・夜の4場面を、写真を大きく取りながら左右交互に置いています。
 * HOMEの HomeDay（各場面1行の短縮版）と重複しないよう、
 * こちらは場面ごとに2〜3文を置き、写真も大きく使います。
 * 4場面のあとに〈畑では、こんなことをします。〉を置いています
 * （旧「農」セクションの本文です。畑の話は1日の流れの続きで読めるほうが分かります）。
 *
 * ⚠ 具体的な時刻は書きません（出典にあるのは曜日単位の午前／午後の予定だけです）。
 *   旧 src/content/copy.ts の aDay に残っている「06:30 — 09:00」等は使っていません。
 * ⚠ 畑は滞在先のすぐ近くにはありません。1日2往復する描き方はしません。
 * ⚠ 「毎日この生活」ではなく「畑に行く日の一例」であることが、lead で分かるようにしています。
 *
 * ■ 文章 … src/content/life.ts の day
 * ■ 写真 … src/config/images.ts の dayMorning / aboutField / dayEvening / dayDinner
 *          ＋ expFarmwork / aboutSoil / expSeason（畑での作業）
 *          ※ 昼は「畑での作業が続く」場面なので、机の写真（dayWork）ではなく
 *            畑の写真（aboutField）を使っています。dayWork は「仕事」の章で使用中です。
 *          ※ 食卓（dayDinner）は流用写真です。追加撮影推奨。
 * ■ 並び方 … 下の layouts（写真の比率と、左右どちらに置くか）
 */

/** life.ts の photo キー → 実際の写真 */
const photos: Record<(typeof life.day.items)[number]["photo"], ImageAsset> = {
  dayMorning: images.dayMorning,
  aboutField: images.aboutField,
  dayEvening: images.dayEvening,
  dayDinner: images.dayDinner,
};

/** 〈畑では、こんなことをします。〉に添える写真3枚 */
const farmPhotos: Record<(typeof life.day.farm.photos)[number], ImageAsset> = {
  expFarmwork: images.expFarmwork,
  aboutSoil: images.aboutSoil,
  expSeason: images.expSeason,
};

/** 上の farmPhotos と同じ順。1枚目を大きく、残り2枚を小さく並べます */
const farmRatios = ["3 / 2", "1 / 1", "4 / 5"] as const;

type Layout = {
  /** 写真の縦横比（PC） */
  ratio: string;
  /** スマホだけの比率。縦長のままだとページが長くなりすぎるため横長にしています */
  ratioMobile?: string;
  /** 写真側の位置（PCのみ・12分割） */
  photoClass: string;
  /** 文章側の位置（PCのみ・12分割） */
  textClass: string;
  sizes: string;
  /** 写真のどこを残してトリミングするか（省略時は中央） */
  objectPosition?: string;
};

const layouts: Layout[] = [
  {
    ratio: "4 / 5",
    ratioMobile: "3 / 2",
    photoClass: "md:col-span-7 md:col-start-1",
    textClass: "md:col-span-4 md:col-start-9 md:self-end md:pb-8",
    sizes: "(min-width: 768px) 58vw, 100vw",
    /* day-morning.jpg は上部に看板が入るため、畑側（下）を見せます */
    objectPosition: "object-bottom",
  },
  {
    ratio: "3 / 2",
    photoClass: "md:order-2 md:col-span-7 md:col-start-6",
    textClass: "md:order-1 md:col-span-4 md:col-start-1 md:self-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    ratio: "4 / 5",
    ratioMobile: "3 / 2",
    photoClass: "md:col-span-7 md:col-start-2",
    textClass: "md:col-span-4 md:col-start-9 md:self-end md:pb-8",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    ratio: "3 / 2",
    photoClass: "md:order-2 md:col-span-7 md:col-start-5",
    textClass: "md:order-1 md:col-span-4 md:col-start-1 md:self-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
];

export function LifeDay() {
  return (
    <section
      id="a-day"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.day.index}
            label={life.day.label}
            title={life.day.title}
          />
          <p className="wrap-phrase reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {life.day.lead}
          </p>
        </div>

        {/* 朝 → 昼 → 夕 → 夜 */}
        <div className="mt-12 space-y-12 md:mt-24 md:space-y-32">
          {life.day.items.map((item, i) => {
            const layout = layouts[i];

            return (
              <article
                key={item.kicker}
                className="reveal grid gap-7 md:grid-cols-12 md:gap-10"
              >
                <div className={layout.photoClass}>
                  <Photo
                    image={photos[item.photo]}
                    ratio={layout.ratio}
                    ratioMobile={layout.ratioMobile}
                    sizes={layout.sizes}
                    objectPosition={layout.objectPosition}
                  />
                </div>

                <div className={layout.textClass}>
                  {/* 朝／昼／夕／夜 を明朝で大きく。時刻は添えません */}
                  <div className="flex items-center gap-4">
                    <span className="heading-jp text-[2.4rem] leading-none text-forest md:text-[3.2rem]">
                      {item.kicker}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-8 bg-ink-faint/40"
                    />
                  </div>

                  <h3 className="heading-item wrap-phrase mt-6 text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 畑で実際に何をするか（旧「農」セクションの本文） */}
        <div className="mt-14 border-t border-sand pt-12 md:mt-28 md:pt-20">
          <div className="grid gap-6 md:grid-cols-12 md:gap-14">
            <h3 className="heading-jp reveal text-[1.4rem] text-ink md:col-span-5 md:text-[1.8rem]">
              {life.day.farm.title}
            </h3>
            <div className="reveal space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7 md:text-[0.95rem]">
              {life.day.farm.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 畑の写真3枚。1枚目を大きく、残り2枚を小さく並べています */}
          <ul className="mt-12 grid grid-cols-6 items-start gap-3 md:mt-16 md:gap-6">
            {life.day.farm.photos.map((key, i) => (
              <li
                key={key}
                className={
                  i === 0
                    ? "reveal col-span-6 md:col-span-6"
                    : "reveal col-span-3 md:col-span-3 md:mt-16"
                }
              >
                <Photo
                  image={farmPhotos[key]}
                  ratio={farmRatios[i]}
                  sizes={
                    i === 0
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 24vw, 48vw"
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* 雨の日のこと */}
        <p className="reveal mx-auto mt-12 max-w-[34em] border-t border-sand pt-10 text-[0.875rem] leading-[2.05] text-soil md:mt-20">
          {life.day.footnote}
        </p>
      </Container>
    </section>
  );
}
