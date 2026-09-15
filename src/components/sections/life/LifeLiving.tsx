import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type ImageAsset } from "@/config/images";
import { life } from "@/content/life";
import { cn } from "@/lib/cn";

/**
 * /life/ 05 仕事 ／ 06 食 ／ 07 地域・人。
 *
 * 旧 LifeChapters（「畑のほかに、こんな時間があります。」の中に5章を入れ子にしたもの）を
 * 作り替えたものです。指示書の構成にあわせて、3つの独立したセクション（h2）にしています。
 *   ・旧「自由時間」の章 → 04 1ヶ月（2週目以降の具体例）へ統合
 *   ・旧「地域」の章     → 03 場所について へ統合
 *
 * ⚠ 仕事: 「ワーケーション」は使いません。確認済みなのは
 *   「個室に机がある」「Wi-Fiあり・弱い場所もある」までです。
 *   部屋のグレード比較（三津浜は音漏れが少ない等）は /plans/ の担当なので書きません。
 * ⚠ 食: 収穫は確約しません（F5）。「毎晩みんなで食卓を囲む」も書きません。
 * ⚠ 地域・人: 「必ず交流できる」「自然に友達ができる」等の保証表現は書きません。
 *
 * ■ 文章 … src/content/life.ts の living（配列。1要素＝1セクション）
 * ■ 写真 … src/config/images.ts の dayWork / expFood / expPeople
 *          ※ 自炊の風景・仕事をしている風景の写真は素材にありません（追加撮影推奨）。
 *          ※ 人物の顔が大きく写る写真は、オーナー本人に見える文脈では使いません。
 */

/** life.ts の photo キー → 実際の写真 */
const photos: Record<(typeof life.living)[number]["photo"], ImageAsset> = {
  dayWork: images.dayWork,
  expFood: images.expFood,
  expPeople: images.expPeople,
};

/** 写真の比率。章ごとに少しずつ変えて、カタログのように揃わないようにしています */
const ratios = ["3 / 2", "4 / 5", "1 / 1"] as const;

/**
 * スマホだけの比率。縦長の写真が続くとページが極端に長くなるため、
 * 375px では横長に切り替えて高さを抑えています（PCは上の ratios のまま）。
 */
const ratioMobile = "3 / 2";

export function LifeLiving() {
  return (
    <>
      {life.living.map((item, i) => {
        /* 偶数番目は写真を右に置きます（PCのみ） */
        const reversed = i % 2 === 1;

        return (
          <section
            key={item.id}
            id={item.id}
            className={cn(
              "scroll-mt-16 py-16 md:scroll-mt-20 md:py-28",
              i % 2 === 0 ? "bg-cream" : "bg-paper",
            )}
          >
            <Container>
              <div className="max-w-2xl">
                <SectionHeading
                  index={item.index}
                  label={item.label}
                  title={item.title}
                />
              </div>

              <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-center md:gap-14">
                <div
                  className={cn(
                    "md:col-span-6",
                    reversed ? "md:order-2 md:col-start-7" : "md:col-start-1",
                  )}
                >
                  <Photo
                    image={photos[item.photo]}
                    ratio={ratios[i]}
                    ratioMobile={ratioMobile}
                    sizes="(min-width: 768px) 48vw, 100vw"
                    objectPosition={
                      /* day-work.jpg は縦長の写真。中央で切ると主役の「机」が外れます */
                      item.photo === "dayWork" ? "object-bottom" : undefined
                    }
                  />
                </div>

                <div
                  className={cn(
                    "reveal space-y-4 text-[0.88rem] leading-[2.05] text-ink-soft md:col-span-5 md:text-[0.93rem]",
                    reversed ? "md:order-1 md:col-start-1" : "md:col-start-8",
                  )}
                >
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
