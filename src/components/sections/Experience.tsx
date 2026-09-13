import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images, type ImageAsset } from "@/config/images";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * LIFE（ここでできること）。※コード上のキーは experience のままです。
 *
 * 正方形の均等グリッドではなく、大小を混ぜたモザイクで並べています。
 * カタログのように見えないよう、写真の比率・大きさ・上下の位置をわざと揃えていません。
 *
 * ■ 文章   … src/content/copy.ts の experience（items 6件 ＋ remoteWork 1件）
 * ■ 写真   … src/config/images.ts の expFarmwork 〜 expSeason
 * ■ 並び方 … 下の entries（span＝マス目の幅、ratio＝写真の比率、offset＝上方向のずらし）
 */

type Entry = {
  title: string;
  text: string;
  /** リモートワークだけは写真がなく、深緑のテキストカードになります */
  image: ImageAsset | null;
  /** 写真の縦横比 */
  ratio?: string;
  /** マス目の幅（スマホは6分割、PCは12分割） */
  span: string;
  /** PCでの上方向のずらし。整列を崩すための余白です */
  offset?: string;
  sizes: string;
};

const entries: Entry[] = [
  {
    ...copy.experience.items[0],
    image: images.expFarmwork,
    ratio: "3 / 2",
    span: "col-span-6 md:col-span-7",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    ...copy.experience.items[1],
    image: images.expHarvest,
    ratio: "4 / 5",
    span: "col-span-3 md:col-span-5",
    offset: "md:mt-20",
    sizes: "(min-width: 768px) 40vw, 45vw",
  },
  {
    ...copy.experience.items[2],
    image: images.expFood,
    ratio: "4 / 5",
    span: "col-span-3 md:col-span-4",
    sizes: "(min-width: 768px) 32vw, 45vw",
  },
  {
    ...copy.experience.items[3],
    image: images.expPeople,
    ratio: "1 / 1",
    span: "col-span-3 md:col-span-5",
    offset: "md:mt-16",
    sizes: "(min-width: 768px) 40vw, 45vw",
  },
  {
    ...copy.experience.items[4],
    image: images.expNature,
    ratio: "4 / 5",
    span: "col-span-3 md:col-span-3",
    offset: "md:mt-32",
    sizes: "(min-width: 768px) 24vw, 45vw",
  },
  {
    ...copy.experience.remoteWork,
    image: null,
    span: "col-span-6 md:col-span-5",
    sizes: "",
  },
  {
    ...copy.experience.items[5],
    image: images.expSeason,
    ratio: "3 / 2",
    span: "col-span-6 md:col-span-7",
    offset: "md:mt-10",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={copy.experience.index}
            label={copy.experience.label}
            title={copy.experience.title}
          />
          <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {copy.experience.lead}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-6 items-start gap-x-3 gap-y-12 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-16">
          {entries.map((entry) => (
            <article
              key={entry.title}
              className={cn("reveal", entry.span, entry.offset)}
            >
              {entry.image ? (
                <>
                  <Photo
                    image={entry.image}
                    ratio={entry.ratio}
                    sizes={entry.sizes}
                  />
                  <h3 className="heading-item mt-5 text-ink">{entry.title}</h3>
                  <p className="mt-3 max-w-[26em] text-[0.85rem] leading-[2] text-ink-soft md:text-[0.875rem]">
                    {entry.text}
                  </p>
                </>
              ) : (
                /* 写真のない項目（リモートワーク）。深緑の面で1枚だけ調子を変えます */
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] bg-forest p-6 text-paper md:p-9">
                  <LeafIcon size={22} className="text-sun/70" />
                  <div className="mt-10 md:mt-14">
                    <h3 className="heading-jp text-[1.25rem] leading-[1.6] md:text-[1.5rem]">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-[0.85rem] leading-[2] text-paper/75 md:text-[0.875rem]">
                      {entry.text}
                    </p>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
