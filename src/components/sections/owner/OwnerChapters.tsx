import type { ImageAsset } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import type { OwnerPhotoKey } from "@/content/owner";
import { owner } from "@/content/owner";
import { cn } from "@/lib/cn";
import { phrase } from "@/lib/jp";

/**
 * OWNER 本文（設計書 O-02〜O-09）。
 *
 * 時系列の読み物です。1章 = 見出し ＋ 本文（編集した標準語）＋ 引用（原文）。
 * 地の文と引用を交互に置いて、読み物としてのリズムをつくっています。
 *
 * ⚠ 引用（kind: "quote"）は matsui-story.txt の原文です。
 *   「ええけど」「〜せな」「抜け出せんくて」「何にもできてへん」「やば」「ほんまに」
 *   を標準語に直さないでください。ここを直すとこのページの価値が消えます。
 *
 * ■ 文章 … src/content/owner.ts の chapters（章の追加・並べ替えもこのファイルだけで済みます）
 * ■ 写真 … 下の photos で owner.ts の photo キーと対応づけています。
 *          ★ 松井さん本人の写真は素材にないため、米・田んぼ・畑・作業の写真で構成しています。
 *
 * ▼ 見せ方
 *   ・9章を1つの面（生成りの紙）に並べ、章のあいだは細い罫線で区切っています。
 *   ・写真のある章は左右交互に配置し、写真のない章（2011年・2015年・2020年）は
 *     文字だけの短い章として、年表の節目に見えるようにしています。
 *   ・各章の id は年表ナビ（OwnerTimeline）からのリンク先です。
 */

/** owner.ts の photo キー → 実際の写真 */
const photos: Record<OwnerPhotoKey, ImageAsset> = {
  hero: images.hero,
  journal5: images.journal[5],
  expSeason: images.expSeason,
  aboutSoil: images.aboutSoil,
  aboutField: images.aboutField,
  whyVisual: images.whyVisual,
  dayDinner: images.dayDinner,
};

export function OwnerChapters() {
  return (
    <section className="bg-paper">
      <Container>
        <div className="border-t border-sand">
          {owner.chapters.map((chapter, i) => {
            const photo = chapter.photo ? photos[chapter.photo] : null;
            /* 写真は章ごとに左右を入れ替えます（偶数番の章は写真が左） */
            const photoFirst = i % 2 === 1;

            return (
              <article
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-24 border-b border-sand py-16 md:scroll-mt-32 md:py-24"
              >
                <div
                  className={cn(
                    "grid gap-9 md:grid-cols-12 md:gap-14",
                    photo ? "" : "md:gap-0",
                  )}
                >
                  {/* 写真（ある章だけ）。スマホでは本文より先に出します */}
                  {photo ? (
                    <figure
                      className={cn(
                        "reveal md:col-span-4",
                        photoFirst
                          ? "md:order-1 md:col-start-1"
                          : "md:order-2 md:col-start-9 md:mt-14",
                      )}
                    >
                      <Photo
                        image={photo}
                        ratio="4 / 5"
                        sizes="(min-width: 768px) 30vw, 100vw"
                      />
                    </figure>
                  ) : null}

                  <div
                    className={cn(
                      photo
                        ? photoFirst
                          ? "md:order-2 md:col-span-7 md:col-start-6"
                          : "md:order-1 md:col-span-7"
                        : "md:col-span-8",
                    )}
                  >
                    <p className="label-en reveal flex items-center gap-3 text-[0.68rem] text-ink-faint">
                      <span className="numeral">{chapter.index}</span>
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-ink-faint/50"
                      />
                      <span>{chapter.en}</span>
                    </p>

                    <h2 className="heading-jp heading-item reveal mt-5 text-[1.3rem] text-ink md:text-[1.7rem]">
                      {phrase(chapter.title)}
                    </h2>

                    <p className="wrap-phrase reveal mt-4 text-[0.85rem] leading-[2] text-ink-faint md:text-[0.9rem]">
                      {chapter.sub}
                    </p>

                    <div className="mt-8 space-y-6 md:mt-10">
                      {chapter.blocks.map((block) =>
                        block.kind === "text" ? (
                          <p
                            key={block.text}
                            className="reveal text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]"
                          >
                            {block.text}
                          </p>
                        ) : (
                          /* 本人の言葉（原文）。文言は変えないでください */
                          <blockquote
                            key={block.text}
                            className="reveal border-l border-moss/40 pl-5 md:pl-8"
                          >
                            <LeafIcon size={18} className="text-moss/70" />
                            <p
                              className={cn(
                                "pull-quote mt-3 text-soil",
                                block.size === "lg"
                                  ? "text-[1.08rem] md:text-[1.35rem]"
                                  : /* スマホで「嫌な雑味なく…」が1文字だけ次行に落ちていたため少し小さく */
                                    "text-[0.95rem] md:text-[1.1rem]",
                              )}
                            >
                              {block.text}
                            </p>
                          </blockquote>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
