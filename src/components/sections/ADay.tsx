import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * A DAY（ここでの1日）。
 * 朝・昼・夕・夜の4つを、写真を大きく取りながら左右交互に置いています。
 *
 * ■ 文章を直したいとき   … src/content/copy.ts の aDay
 * ■ 写真を差し替えたいとき … src/config/images.ts の dayMorning / dayWork / dayEvening / dayDinner
 * ■ 並び方を変えたいとき   … 下の layouts（写真の比率と、左右どちらに置くか）
 */

type Layout = {
  /** 写真の縦横比。4:5（縦長）と 3:2（横長）を交互に混ぜています */
  ratio: string;
  /** true = PCで写真を右side、文章を左に置く */
  reversed: boolean;
  /** 写真側の列数（12分割）。PCのみ効きます */
  photoClass: string;
  /** 文章側の位置（12分割）。PCのみ効きます */
  textClass: string;
  sizes: string;
  /**
   * 写真のどこを残してトリミングするか（省略時は中央）。
   * 縦長の写真を横長の枠に入れると上下が大きく切れるので、
   * 見せたいものが下寄りにある写真は "object-bottom" にしています。
   */
  objectPosition?: string;
};

const layouts: Layout[] = [
  {
    ratio: "4 / 5",
    reversed: false,
    photoClass: "md:col-span-6 md:col-start-1",
    textClass: "md:col-span-4 md:col-start-8 md:self-end md:pb-6",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    ratio: "3 / 2",
    reversed: true,
    photoClass: "md:order-2 md:col-span-7 md:col-start-6",
    textClass: "md:order-1 md:col-span-4 md:col-start-1 md:self-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
    // day-work.jpg は縦長の写真です。中央で切ると主役の「机」が外れるため下寄せ。
    objectPosition: "object-bottom",
  },
  {
    ratio: "4 / 5",
    reversed: false,
    photoClass: "md:col-span-6 md:col-start-2",
    textClass: "md:col-span-4 md:col-start-9 md:self-end md:pb-6",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  {
    ratio: "3 / 2",
    reversed: true,
    photoClass: "md:order-2 md:col-span-7 md:col-start-5",
    textClass: "md:order-1 md:col-span-4 md:col-start-1 md:self-center",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
];

const dayPhotos = [
  images.dayMorning,
  images.dayWork,
  images.dayEvening,
  images.dayDinner,
];

export function ADay() {
  return (
    <section
      id="a-day"
      className="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={copy.aDay.index}
            label={copy.aDay.label}
            title={copy.aDay.title}
          />
          <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {copy.aDay.lead}
          </p>
        </div>

        {/* 朝 → 昼 → 夕 → 夜 */}
        <div className="mt-16 space-y-20 md:mt-28 md:space-y-32">
          {copy.aDay.items.map((item, i) => {
            const layout = layouts[i];

            return (
              <article
                key={item.time}
                className="reveal grid gap-7 md:grid-cols-12 md:gap-10"
              >
                <div className={layout.photoClass}>
                  <Photo
                    image={dayPhotos[i]}
                    ratio={layout.ratio}
                    sizes={layout.sizes}
                    objectPosition={layout.objectPosition}
                  />
                </div>

                <div className={layout.textClass}>
                  {/* 朝／昼／夕／夜 を明朝で大きく、時間は英字で小さく添える */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="heading-jp text-[2.4rem] leading-none text-forest md:text-[3.2rem]">
                      {item.kicker}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-px w-6 bg-ink-faint/40"
                    />
                    <span className="numeral label-en text-[0.66rem] text-ink-faint">
                      {item.time}
                    </span>
                  </div>

                  <h3 className="heading-item mt-6 text-ink">{item.title}</h3>

                  <p className="mt-4 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* 雨の日のこと */}
        <p
          className={cn(
            "reveal mx-auto mt-20 max-w-[34em] border-t border-sand pt-10 md:mt-32",
            "text-center text-[0.875rem] leading-[2.05] text-soil",
          )}
        >
          {copy.aDay.footnote}
        </p>
      </Container>
    </section>
  );
}
