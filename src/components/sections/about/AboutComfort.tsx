import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { about } from "@/content/about";
import { phraseLines } from "@/lib/jp";

/**
 * ABOUT 03「農的暮らしを通じて、“心地イイ”を見つめ直す。」
 * （ブランド編集指示 5. “心地イイ”について）
 *
 * ⚠ 見出しはHOMEのHEROとまったく同じコピーです。
 *   読点で改行する2行組み（src/lib/jp.tsx の phraseLines）もHEROと揃えています。
 *   表記は「心地イイ」。「心地よい」に直さないでください。
 * ⚠ 4つの項目は、指定の文をそのままの順番で並べています。
 *   ここに項目を足したり、言い換えたりしないでください。
 *
 * ■ 文章 … src/content/about.ts の comfort
 * ■ 写真 … src/config/images.ts の journal[1]（焼き芋を食べる滞在者）
 *
 * ※ 旧 AboutAbundance（豊かさと、心地よさ。）を置き換えたセクションです。
 *   松井さん本人の言葉（不安や恐怖／1ヶ月という貴重なじかん）は /owner/ にあります。
 */
export function AboutComfort() {
  const comfort = about.comfort;

  return (
    <section
      id={comfort.id}
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span className="numeral">{comfort.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{comfort.label}</span>
            </p>

            {/* HOMEのHEROと同じ2行組み（読点のあとで改行し、行の途中では折り返しません） */}
            <h2
              className="heading-jp heading-section reveal mt-5 text-ink"
              /* ⚠ 行を折り返さない組み方なので、スマホ幅（375px＝左右の余白を引いて335px）で
                 2行目「“心地イイ”を見つめ直す。」が収まる最小サイズまで下げています。
                 HEROと同じ 1.6rem です。ここを大きくすると横スクロールが出ます。 */
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)" }}
            >
              {phraseLines(comfort.title)}
            </h2>

            <p className="reveal mt-9 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {comfort.intro}
            </p>

            {/* 4つの「そんな暮らし」。短い文が続くので、箇条書きとして組んでいます */}
            <ul className="reveal mt-8 space-y-4 border-l border-moss/40 pl-6 md:pl-8">
              {comfort.items.map((item) => (
                <li
                  key={item}
                  className="text-[0.95rem] leading-[2] text-ink md:text-[1rem]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="reveal mt-8 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
              {comfort.closing}
            </p>

            <LeafIcon size={22} className="reveal mt-10 text-moss/70" />
          </div>

          <figure className="reveal md:col-span-4 md:col-start-9 md:mt-24">
            <Photo
              image={images.journal[1]}
              ratio="1 / 1"
              sizes="(min-width: 768px) 30vw, 100vw"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
