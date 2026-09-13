import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * HOUSE（建物と部屋）。
 * 写真6枚を、大小をつけて少しずつずらしたモザイクで並べています。
 *
 * ・写真     … src/config/images.ts の images.house（6枚・上から順）
 * ・キャプション … src/content/copy.ts の copy.house.items（同じ順番）
 * 差し替えるときは、必ず「写真」と「キャプション」の順番を合わせてください。
 *
 * 下の layout は、写真1枚ずつの「大きさ・位置・比率」の指定です。
 * 見た目を組み替えたいときは、この配列だけを触れば済みます。
 */
const layout = [
  // 01 個室：いちばん大きく、左から
  {
    ratio: "4 / 5",
    grid: "md:col-span-6 md:col-start-1",
    offset: "",
    mobile: "",
    sizes: "(min-width: 768px) 46vw, 100vw",
  },
  // 02 共用キッチン：右上に、少し下げて
  {
    ratio: "4 / 5",
    grid: "md:col-span-4 md:col-start-8",
    offset: "md:mt-28",
    mobile: "max-md:ml-auto max-md:w-[86%]",
    sizes: "(min-width: 768px) 31vw, 86vw",
  },
  // 03 洗面・洗濯：小さめに、正方形で
  {
    ratio: "1 / 1",
    grid: "md:col-span-4 md:col-start-2",
    offset: "md:mt-8",
    mobile: "max-md:w-[86%]",
    sizes: "(min-width: 768px) 31vw, 86vw",
  },
  // 04 廊下：右側に
  {
    ratio: "4 / 5",
    grid: "md:col-span-5 md:col-start-7",
    offset: "md:mt-16",
    mobile: "max-md:ml-auto max-md:w-[92%]",
    sizes: "(min-width: 768px) 38vw, 92vw",
  },
  // 05 外観：横長で大きく
  {
    ratio: "3 / 2",
    grid: "md:col-span-7 md:col-start-1",
    offset: "md:mt-10",
    mobile: "",
    sizes: "(min-width: 768px) 54vw, 100vw",
  },
  // 06 玄関：右下に、いちばん下げて
  {
    ratio: "4 / 5",
    grid: "md:col-span-4 md:col-start-9",
    offset: "md:mt-28",
    mobile: "max-md:ml-auto max-md:w-[86%]",
    sizes: "(min-width: 768px) 31vw, 86vw",
  },
];

export function House() {
  return (
    <section
      id="house"
      className="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        {/* 見出しとリード */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={copy.house.index}
              label={copy.house.label}
              title={copy.house.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {copy.house.lead}
          </p>
        </div>

        {/* 写真6枚（大小混在・ずらし） */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-8 md:grid-cols-12 md:items-start md:gap-x-8 md:gap-y-4">
          {images.house.map((image, i) => {
            const caption = copy.house.items[i];
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

                <figcaption className="mt-5 flex gap-4">
                  <span className="numeral shrink-0 pt-0.5 text-[0.75rem] text-clay-deep">
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
        <div className="reveal mt-20 grid gap-8 border-t border-sand pt-12 md:mt-28 md:grid-cols-12 md:gap-16">
          <p className="label-en text-[0.62rem] text-ink-faint md:col-span-3">
            Facilities
          </p>
          <ul className="md:col-span-9 md:col-start-4 md:grid md:grid-cols-2 md:gap-x-12">
            {copy.house.facilities.map((item) => (
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

        {/* 正直に書いておくこと ＋ 住所 */}
        <div className="reveal mt-14 grid gap-8 border-t border-sand pt-12 md:mt-20 md:grid-cols-12 md:gap-16">
          <p className="label-en text-[0.62rem] text-ink-faint md:col-span-3">
            Honestly
          </p>
          <div className="md:col-span-8 md:col-start-4">
            <p className="text-[0.9rem] leading-[2.05] text-soil">
              {copy.house.honesty}
            </p>
            <p className="mt-6 text-[0.78rem] tracking-[0.08em] text-ink-faint">
              {siteConfig.location.address}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
