import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Places } from "@/components/sections/Places";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * SCHEDULE（滞在中の流れ）。
 *
 * 構成は上から順に、
 *   1. 1週目だけは特別、という話（文章）
 *   2. 2週目からの1週間のリズム（月〜日の7列）
 *   3. 最後の2日（BBQと退去）と、補足
 *   4. 1週間滞在の曜日別（小さめのサブブロック）
 *   5. 体験の場所（Places.tsx）
 *
 * 7列のグリッドは、罫線（sand の細線）だけで区切っています。
 * セルを塗りつぶすと時間割・料金表のように見えるため、面は使いません。
 * スマホでは文字を小さくして7列のまま収めています（火曜だけ、狭い画面用に
 * 短い言い方を copy.schedule.rhythm.days の short に入れています）。
 *
 * ■ 文章 … src/content/copy.ts の schedule / places
 */
export function Schedule() {
  const { week1, rhythm, last, notes, week } = copy.schedule;

  return (
    <section
      id="schedule"
      className="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={copy.schedule.index}
              label={copy.schedule.label}
              title={copy.schedule.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {copy.schedule.lead}
          </p>
        </div>

        {/* ---------------- 1. 1週目 ---------------- */}
        <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="reveal md:col-span-5">
            <p className="label-en text-[0.62rem] text-clay">{week1.kicker}</p>
            <h3 className="heading-jp mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.7rem]">
              {week1.title}
            </h3>
          </div>
          <div className="reveal space-y-5 md:col-span-6 md:col-start-7">
            {week1.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.9rem] leading-[2.05] text-ink-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ---------------- 2. 2週目からの1週間（7列） ---------------- */}
        <div className="mt-20 md:mt-28">
          <div className="reveal grid gap-4 md:grid-cols-12 md:items-baseline md:gap-16">
            <h3 className="heading-jp text-[1.2rem] text-ink md:col-span-4 md:text-[1.4rem]">
              {rhythm.title}
            </h3>
            <p className="text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-7 md:col-start-6">
              {rhythm.text}
            </p>
          </div>

          <div className="reveal mt-10 grid grid-cols-7 border-y border-sand md:mt-14">
            {rhythm.days.map((day) => {
              const short = "short" in day ? day.short : day.label;

              return (
                <div
                  key={day.day}
                  className="border-l border-sand px-1 py-5 text-center first:border-l-0 md:px-3 md:py-8"
                >
                  <span className="block text-[0.7rem] tracking-normal text-ink-faint md:text-[0.85rem]">
                    {day.day}
                  </span>
                  <span
                    className={cn(
                      "mt-2.5 block text-[0.7rem] leading-[1.6] tracking-normal md:mt-4 md:text-[0.95rem]",
                      day.tone === "accent" && "text-clay",
                      day.tone === "free" && "text-ink-soft",
                      day.tone === "rest" && "text-ink-faint",
                    )}
                  >
                    {/* スマホは短い言い方、md以上は本来の言い方 */}
                    <span className="md:hidden">{short}</span>
                    <span className="hidden md:inline">{day.label}</span>
                  </span>
                </div>
              );
            })}
          </div>

          <p className="reveal mt-5 text-[0.8rem] leading-[2] text-ink-faint">
            {rhythm.legend}
          </p>
        </div>

        {/* ---------------- 3. 最後の2日 と 補足 ---------------- */}
        <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-16">
          <div className="reveal md:col-span-5">
            <h3 className="heading-jp text-[1.2rem] text-ink md:text-[1.4rem]">
              {last.title}
            </h3>
            <p className="mt-4 text-[0.9rem] leading-[2.05] text-ink-soft">
              {last.text}
            </p>
          </div>

          <ul className="reveal space-y-4 md:col-span-6 md:col-start-7">
            {notes.map((note) => (
              <li
                key={note}
                className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-t border-sand pt-4 text-[0.82rem] leading-[2] text-soil"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.95em] h-px bg-clay/50"
                />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- 4. 1週間滞在の6日間 ---------------- */}
        <div className="mt-20 border-t border-sand pt-12 md:mt-28 md:pt-16">
          <div className="reveal grid gap-4 md:grid-cols-12 md:items-baseline md:gap-16">
            <div className="md:col-span-4">
              <p className="label-en text-[0.6rem] text-ink-faint">One Week</p>
              <h3 className="heading-jp mt-4 text-[1.2rem] text-ink md:text-[1.4rem]">
                {week.title}
              </h3>
            </div>
            <p className="text-[0.85rem] leading-[2] text-ink-soft md:col-span-7 md:col-start-6">
              {week.lead}
            </p>
          </div>

          <ol className="reveal mt-10 md:mt-12">
            {week.days.map((day) => (
              <li
                key={day.day}
                className="grid grid-cols-[1.8rem_1fr] items-baseline gap-x-4 gap-y-1.5 border-t border-sand py-4 last:border-b md:grid-cols-[4rem_1fr_1fr] md:gap-x-10 md:py-5"
              >
                <span className="heading-jp text-[1rem] text-clay md:text-[1.1rem]">
                  {day.day}
                </span>

                <span className="flex items-baseline gap-2.5 text-[0.85rem] leading-[1.9] text-ink">
                  <span className="label-en shrink-0 text-[0.55rem] text-ink-faint">
                    AM
                  </span>
                  <span>{day.am}</span>
                </span>

                {day.pm ? (
                  <span className="col-start-2 flex items-baseline gap-2.5 text-[0.85rem] leading-[1.9] text-ink-soft md:col-start-3">
                    <span className="label-en shrink-0 text-[0.55rem] text-ink-faint">
                      PM
                    </span>
                    <span>{day.pm}</span>
                  </span>
                ) : null}
              </li>
            ))}
          </ol>

          <p className="reveal mt-6 max-w-[42em] text-[0.8rem] leading-[2] text-ink-faint">
            {week.note}
          </p>
        </div>

        {/* ---------------- 5. 体験の場所 ---------------- */}
        <Places />
      </Container>
    </section>
  );
}
