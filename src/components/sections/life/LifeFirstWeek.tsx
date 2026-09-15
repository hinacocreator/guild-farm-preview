import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { life } from "@/content/life";
import { cn } from "@/lib/cn";

/**
 * /life/ 01 最初の1週間。
 *
 * 旧 LifeWeek（「1週間滞在の、6日間。」）を作り替えたものです。
 * 1週間滞在と1ヶ月滞在の1週目は「GUILD Farm側が予定を用意する」という同じ趣旨なので、
 * 別々の章に分けず、この1章にまとめています。
 *
 * 旧 Schedule.tsx にあった「月〜日の7列グリッド」は引き続き使いません。
 * 時間割・料金表のように見えてしまうためです。
 *   左に曜日、右にその日のこと1行。罫線だけで区切り、面は塗りません。
 *
 * ⚠ 曜日の一覧には「スケジュール例」と見出しを付けています。
 *   毎週必ずこの時間割どおりに動く、という読まれ方をさせないためです。
 *
 * ■ 文章 … src/content/life.ts の firstWeek
 * ■ 写真 … src/config/images.ts の expHarvest
 *          ※ 島・三津浜・渡り船の写真は素材にありません（追加撮影推奨）。
 *            人物の代替写真は使わず、畑の写真1枚で構成しています。
 * ⚠ 受け入れ時期（各月の2〜4週目）と料金は /plans/ の担当です。ここには書きません。
 */
export function LifeFirstWeek() {
  return (
    <section
      id="first-week"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.firstWeek.index}
            label={life.firstWeek.label}
            title={life.firstWeek.title}
          />
        </div>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          {/* 左：説明の文章と写真 */}
          <div className="md:col-span-5">
            <div className="reveal space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {life.firstWeek.lead.map((paragraph) => (
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
          <div className="md:col-span-6 md:col-start-7">
            <h3 className="heading-item reveal text-ink">
              {life.firstWeek.daysTitle}
            </h3>

            <ol className="reveal mt-6 md:mt-8">
              {life.firstWeek.days.map((day) => (
                <li
                  key={day.day}
                  className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 border-t border-sand py-6 last:border-b md:grid-cols-[3rem_1fr] md:gap-x-8 md:py-7"
                >
                  <span
                    className={cn(
                      "heading-jp text-[1.05rem] md:text-[1.2rem]",
                      "accent" in day && day.accent
                        ? "text-clay"
                        : "text-soil",
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

            {/* 1ヶ月滞在の1週目。日付や運用の細部は書きません */}
            <div className="reveal mt-10 rounded-sm border border-sand bg-cream px-5 py-6 md:mt-12 md:px-7 md:py-7">
              <h3 className="heading-jp text-[1.05rem] text-ink md:text-[1.15rem]">
                {life.firstWeek.month.title}
              </h3>
              <p className="mt-4 text-[0.875rem] leading-[2.05] text-ink-soft">
                {life.firstWeek.month.text}
              </p>
            </div>
          </div>
        </div>

        <p className="reveal mt-12 max-w-[44em] border-t border-sand pt-6 text-[0.8rem] leading-[2] text-ink-faint md:mt-16">
          {life.firstWeek.note}
        </p>
      </Container>
    </section>
  );
}
