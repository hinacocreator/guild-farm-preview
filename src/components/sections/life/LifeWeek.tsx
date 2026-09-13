import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { life } from "@/content/life";
import { cn } from "@/lib/cn";

/**
 * /life/ 03 1週間滞在（5泊6日）の6日間。
 *
 * 旧 Schedule.tsx にあった「月〜日の7列グリッド」は廃止しました。
 * 時間割・料金表のように見えてしまい、読む順番も分かりにくかったためです。
 * 代わりに〈文章 → 曜日を縦に並べた軽い一覧〉にしています。
 *   左に曜日、右にその日のこと1行。罫線だけで区切り、面は塗りません。
 *
 * ■ 文章 … src/content/life.ts の week
 * ■ 写真 … src/config/images.ts の expHarvest
 *          ※ 島・三津浜・渡り船の写真は素材にありません（追加撮影推奨）。
 *            人物の代替写真は使わず、畑の写真1枚で構成しています。
 * ⚠ 受け入れ時期（各月の2〜4週目）と料金は /plans/ の担当です。ここには書きません。
 */
export function LifeWeek() {
  return (
    <section
      id="week"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.week.index}
            label={life.week.label}
            title={life.week.title}
          />
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          {/* 左：説明の文章と写真 */}
          <div className="md:col-span-5">
            <div className="reveal space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {life.week.lead.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Photo
              image={images.expHarvest}
              ratio="4 / 5"
              ratioMobile="3 / 2"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal mt-10 md:mt-12"
            />
          </div>

          {/* 右：曜日ごとに1行。表組みにはしません */}
          <ol className="reveal md:col-span-6 md:col-start-7">
            {life.week.days.map((day) => (
              <li
                key={day.day}
                className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 border-t border-sand py-6 last:border-b md:grid-cols-[3rem_1fr] md:gap-x-8 md:py-7"
              >
                <span
                  className={cn(
                    "heading-jp text-[1.05rem] md:text-[1.2rem]",
                    "accent" in day && day.accent ? "text-clay" : "text-soil",
                  )}
                >
                  {day.day}
                </span>
                <span className="text-[0.875rem] leading-[2] text-ink-soft md:text-[0.9rem]">
                  {day.text}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p className="reveal mt-12 max-w-[44em] border-t border-sand pt-6 text-[0.8rem] leading-[2] text-ink-faint md:mt-16">
          {life.week.note}
        </p>

        <div className="reveal mt-10 md:mt-12">
          <TextLink href={life.week.link.href} size="lg">
            {life.week.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
