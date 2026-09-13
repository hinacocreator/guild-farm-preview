import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images, type ImageAsset } from "@/config/images";
import { life } from "@/content/life";
import { cn } from "@/lib/cn";

/**
 * /life/ 06 畑のほかの時間（仕事／食／自由時間／人／地域）。
 *
 * 旧 Experience.tsx（「ここでできること」7項目のモザイク）を作り替えたものです。
 * 短い一言を7つ並べるより、章立てにして「実際どうなるのか」を
 * 2段落ずつ説明したほうが、このページの役割（想像できるようにする）に合います。
 * 農は独立したセクション（LifeFarm）にしています。
 *
 * ■ 文章 … src/content/life.ts の chapters
 * ■ 写真 … src/config/images.ts の dayWork / expFood / expNature / expPeople / journal[5]
 *          ※ 食卓・自炊の写真、仕事をしている風景の写真は素材にありません（追加撮影推奨）。
 *            いまは部屋の写真・食事の写真で代用しています。
 * ⚠ 設備の一覧・部屋の広さ・料金は /plans/ の担当です。ここでは仕事と食に必要な範囲だけ。
 */

/** life.ts の photo キー → 実際の写真 */
const photos: Record<
  (typeof life.chapters.items)[number]["photo"],
  ImageAsset
> = {
  dayWork: images.dayWork,
  expFood: images.expFood,
  expNature: images.expNature,
  expPeople: images.expPeople,
  /** 田植えを終えた田んぼに集まった人たち。「地域」の章に添えています */
  journalRicePlanting: images.journal[5],
};

/** 写真の比率。章ごとに少しずつ変えて、カタログのように揃わないようにしています */
const ratios = ["3 / 2", "4 / 5", "4 / 5", "1 / 1", "3 / 2"] as const;

/**
 * スマホだけの比率。縦長の写真が5枚続くとページが極端に長くなるため、
 * 375px では横長に切り替えて高さを抑えています（PCは上の ratios のまま）。
 */
const ratiosMobile = ["3 / 2", "3 / 2", "3 / 2", "3 / 2", "3 / 2"] as const;

export function LifeChapters() {
  return (
    <section
      id="living"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.chapters.index}
            label={life.chapters.label}
            title={life.chapters.title}
          />
          <p className="wrap-phrase reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {life.chapters.lead}
          </p>
        </div>

        <div className="mt-12 space-y-12 md:mt-24 md:space-y-28">
          {life.chapters.items.map((item, i) => {
            /* 偶数番目は写真を右に置きます（PCのみ） */
            const reversed = i % 2 === 1;

            return (
              <article
                key={item.title}
                className="reveal grid gap-7 md:grid-cols-12 md:items-center md:gap-14"
              >
                <div
                  className={cn(
                    "md:col-span-6",
                    reversed ? "md:order-2 md:col-start-7" : "md:col-start-1",
                  )}
                >
                  <Photo
                    image={photos[item.photo]}
                    ratio={ratios[i]}
                    ratioMobile={ratiosMobile[i]}
                    sizes="(min-width: 768px) 48vw, 100vw"
                    objectPosition={
                      /* day-work.jpg は縦長の写真。中央で切ると主役の「机」が外れます */
                      item.photo === "dayWork" ? "object-bottom" : undefined
                    }
                  />
                </div>

                <div
                  className={cn(
                    "md:col-span-5",
                    reversed ? "md:order-1 md:col-start-1" : "md:col-start-8",
                  )}
                >
                  <p className="label-en text-[0.62rem] text-ink-faint">
                    {item.en}
                  </p>
                  <h3 className="heading-jp wrap-phrase mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.6rem]">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4 text-[0.88rem] leading-[2.05] text-ink-soft md:text-[0.93rem]">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {"link" in item && item.link ? (
                    <div className="mt-7">
                      <TextLink href={item.link.href}>
                        {item.link.label}
                      </TextLink>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
