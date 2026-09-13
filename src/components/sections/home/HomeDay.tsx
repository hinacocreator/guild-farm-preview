import type { ImageAsset } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

/**
 * H-04 暮らすように過ごす（ここでの、1日）。HOME専用。
 *
 * 朝・昼・夕・夜の4場面を、写真＋1行で見せます。
 * ⚠ 時間割（スケジュール表）にはしません。具体的な時刻は資料にないため書きません。
 *   1日・1週間・1ヶ月の流れの全文は /life/ の担当です。
 *
 * ■ 文章 … src/content/home.ts の day
 * ■ 写真 … src/config/images.ts の dayMorning / dayWork / dayEvening / dayDinner
 *
 * ▼ 見せ方
 *   スマホ … 横スクロール＋スナップ（1画面に1場面ずつ止まる）。縦に伸ばさないためです。
 *   PC     … 4枚を横並び。1枚ずつ上下にずらして、表組みに見えないようにしています。
 */

/** home.ts の photo キー → 実際の写真 */
const photos: Record<(typeof home.day.items)[number]["photo"], ImageAsset> = {
  dayMorning: images.dayMorning,
  dayWork: images.dayWork,
  dayEvening: images.dayEvening,
  dayDinner: images.dayDinner,
};

/** PCでの段差（4枚を少しずつずらす） */
const offsets = ["", "md:mt-14", "md:mt-6", "md:mt-20"] as const;

export function HomeDay() {
  return (
    <section id="day" className="overflow-hidden bg-paper py-20 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={home.day.index}
            label={home.day.label}
            title={home.day.title}
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
            {home.day.sub}
          </p>
        </div>
      </Container>

      {/* スマホは横スクロール（scroll-snap）。PC（md以上）は普通の4列グリッドに戻します */}
      <Container className="mt-12 md:mt-20">
        <ul
          className={cn(
            "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6",
            "md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0",
            "md:items-start",
          )}
        >
          {home.day.items.map((item, i) => (
            <li
              key={item.time}
              className={cn(
                "w-[76vw] shrink-0 snap-center sm:w-[54vw]",
                "md:w-auto md:shrink",
                "reveal",
                offsets[i],
              )}
            >
              <Photo
                image={photos[item.photo]}
                ratio="4 / 5"
                sizes="(min-width: 768px) 23vw, 76vw"
                /* 朝の写真は上部に看板が入るため、畑側（下）を見せる */
                objectPosition={item.photo === "dayMorning" ? "object-bottom" : "object-center"}
              />

              <p className="heading-jp mt-6 flex items-center gap-3 text-[1.15rem] text-ink md:text-[1.3rem]">
                <span>{item.time}</span>
                <span aria-hidden="true" className="h-px w-6 bg-sand" />
              </p>

              <p className="mt-3 text-[0.85rem] leading-[2] text-ink-soft md:text-[0.9rem]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* スマホだけに出す、横にスクロールできることの目印 */}
        <p
          aria-hidden="true"
          className="label-en mt-2 text-[0.6rem] text-ink-faint md:hidden"
        >
          Swipe →
        </p>

        <div className="reveal mt-12 md:mt-20">
          <TextLink href={home.day.link.href} size="lg">
            {home.day.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
