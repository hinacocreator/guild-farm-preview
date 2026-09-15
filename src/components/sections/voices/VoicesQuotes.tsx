import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { voices } from "@/content/voices";

/**
 * /voices/ 01 滞在した人の言葉。
 *
 * このページの主役です。3つの言葉を、HOMEより大きく・1つずつ余白を取って組みます。
 * HOME（HomeVoices）は「この先にもっとある」ことを示す抜粋の置き方ですが、
 * ここは言葉そのものを読んでもらう場所なので、1つずつ独立して見えるようにしています。
 *
 * ⚠ 言葉は matsui-story.txt の原文です。資料にある3つだけで、新しい声は作りません。
 * ⚠ 名前・年齢・職業・滞在期間などの属性は付けません。
 *   「松井が聞いた言葉」だと分かるように、言葉の下に注記を置いています。
 * ⚠ 掲載許諾の状況が確認できていないため、人物写真は添えていません。
 *   添える写真は、人の顔が写らないもの（竹林）を1枚だけにしています。
 *
 * ■ 文章 … src/content/voices.ts の quotes
 * ■ 写真 … src/config/images.ts の expNature
 */
export function VoicesQuotes() {
  return (
    <section
      id={voices.quotes.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
          <span className="numeral">{voices.quotes.index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
          <span>{voices.quotes.label}</span>
        </p>

        {/* 見出しは画面に出していません（言葉そのものを主役にするため）。
            読み上げソフトや目次で位置が分かるように、見出し自体は置いています。 */}
        <h2 className="sr-only">{voices.quotes.srTitle}</h2>

        <LeafIcon size={24} className="reveal mt-8 text-moss/70 md:mt-10" />

        {/* 1つずつ、上下に線を引かずに余白だけで区切ります */}
        <ul className="mt-10 space-y-14 md:mt-16 md:space-y-24">
          {voices.quotes.words.map((word) => (
            <li key={word} className="reveal">
              <blockquote>
                <p className="pull-quote text-[1.35rem] leading-[1.95] text-ink md:text-[1.9rem]">
                  {word}
                </p>
              </blockquote>
            </li>
          ))}
        </ul>

        <div className="reveal mt-16 md:mt-24">
          <Photo
            image={images.aboutField} /* 人物の顔が写らない風景写真（滞在者と誤認されないため） */
            ratio="3 / 2"
            ratioMobile="4 / 3"
            sizes="(min-width: 768px) 800px, 100vw"
          />
        </div>

        <div className="reveal mt-10 space-y-2 border-t border-sand pt-7 text-[0.78rem] leading-[2] text-ink-faint">
          {voices.quotes.note.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
