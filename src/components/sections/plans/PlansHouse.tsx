import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { plans } from "@/content/plans";
import { cn } from "@/lib/cn";

/**
 * P-07　住まい（道後のシェアハウス）。/plans/ 専用（旧 House.tsx の後継）。
 *
 * 写真6枚で実物を見せ、設備の事実と「正直に書いておくこと」で信頼を作ります。
 *
 * ■ 写真 … src/config/images.ts の images.house（6枚・上から順）
 * ■ キャプション … src/content/plans.ts の house.captions（同じ順番）
 *   差し替えるときは、写真とキャプションの順番を必ず合わせてください。
 *
 * 下の layout は、写真1枚ずつの「大きさ・位置・比率」です。
 * 見た目を組み替えたいときは、この配列だけを触れば済みます。
 */
const layout = [
  // 01 個室：いちばん大きく、左から
  {
    ratio: "4 / 5",
    grid: "md:col-span-6 md:col-start-1",
    offset: "",
    mobile: "",
    sizes: "(min-width: 768px) 46vw, 50vw",
  },
  // 02 共用キッチン：右上に、少し下げて
  {
    ratio: "4 / 5",
    grid: "md:col-span-4 md:col-start-8",
    offset: "md:mt-28",
    mobile: "",
    sizes: "(min-width: 768px) 31vw, 50vw",
  },
  // 03 洗面・洗濯：小さめに、正方形で
  {
    ratio: "1 / 1",
    grid: "md:col-span-4 md:col-start-2",
    offset: "md:mt-8",
    mobile: "",
    sizes: "(min-width: 768px) 31vw, 50vw",
  },
  // 04 廊下：右側に
  {
    ratio: "4 / 5",
    grid: "md:col-span-5 md:col-start-7",
    offset: "md:mt-16",
    mobile: "",
    sizes: "(min-width: 768px) 38vw, 50vw",
  },
  // 05 外観：横長で大きく
  {
    ratio: "3 / 2",
    grid: "md:col-span-7 md:col-start-1",
    offset: "md:mt-10",
    /* 外観だけはスマホでも横いっぱいに（建物の全体が分かるように） */
    mobile: "max-md:col-span-2",
    sizes: "(min-width: 768px) 54vw, 100vw",
  },
  // 06 玄関：右下に、いちばん下げて
  {
    ratio: "4 / 5",
    grid: "md:col-span-4 md:col-start-9",
    offset: "md:mt-28",
    mobile: "",
    sizes: "(min-width: 768px) 31vw, 50vw",
  },
];

export function PlansHouse() {
  return (
    <section
      id="house"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.house.index}
              label={plans.house.label}
              title={plans.house.title}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="reveal text-[0.9rem] leading-[2] text-ink-faint">
              {plans.house.sub}
            </p>
            <p className="reveal mt-5 text-[0.95rem] leading-[2.05] text-ink-soft">
              {plans.house.lead}
            </p>
          </div>
        </div>

        {/* 写真6枚（大小混在・ずらし） */}
        {/* スマホは2列（6枚を縦に並べるとページが長くなりすぎるため）。PCは従来どおりのずらし配置 */}
        <div className="mt-12 grid grid-cols-2 items-start gap-x-4 gap-y-8 md:mt-8 md:grid-cols-12 md:gap-x-8 md:gap-y-4">
          {images.house.map((image, i) => {
            const caption = plans.house.captions[i];
            const shape = layout[i];

            return (
              <figure
                key={image.src}
                className={cn("reveal", shape.grid, shape.offset, shape.mobile)}
              >
                <Photo
                  image={image}
                  ratio={shape.ratio}
                  sizes={shape.sizes}
                  className="w-full"
                />

                <figcaption className="mt-4 flex flex-col gap-1 md:mt-5 md:flex-row md:gap-4">
                  <span className="numeral shrink-0 text-[0.75rem] text-clay-deep md:pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-[24em]">
                    <h3 className="heading-item text-ink">{caption.title}</h3>
                    <p className="mt-1.5 text-[0.85rem] leading-[2] text-ink-soft">
                      {caption.text}
                    </p>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* 設備と暮らしのルール（事実の箇条書き） */}
        <div className="reveal mt-14 grid gap-8 border-t border-sand pt-10 md:mt-28 md:grid-cols-12 md:gap-16">
          <p className="label-en text-[0.62rem] text-ink-faint md:col-span-3">
            Facilities
          </p>
          <ul className="md:col-span-9 md:col-start-4 md:grid md:grid-cols-2 md:gap-x-12">
            {plans.house.facilities.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-t border-sand py-3.5 text-[0.85rem] leading-[1.95] text-ink-soft first:border-t-0 first:pt-0 md:first:border-t md:first:pt-3.5 md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+2)]:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.95em] h-px bg-clay/50"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 正直に書いておくこと ＋ 所在地 */}
        <div className="reveal mt-12 grid gap-8 border-t border-sand pt-10 md:mt-20 md:grid-cols-12 md:gap-16">
          <p className="label-en text-[0.62rem] text-ink-faint md:col-span-3">
            Honestly
          </p>
          <div className="md:col-span-8 md:col-start-4">
            <p className="text-[0.9rem] leading-[2.05] text-soil">
              {plans.house.honesty}
            </p>

            {/* 住所は src/config/site.ts の location.address が正の値です */}
            <p className="mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.78rem] tracking-[0.08em] text-ink-faint">
              <span className="text-[0.72rem] text-ink-faint">
                {plans.house.addressLabel}
              </span>
              <span>{siteConfig.location.address}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
