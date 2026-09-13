import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 03「なぜ、農のある暮らしなのか。」（設計書 A-04）
 *
 * ⚠ サイトのなかで社会課題に触れるのは、このセクションだけです。
 *   ・2段落より長くしないでください。
 *   ・数字・グラフ・「危機」「崩壊」といった語は使いません。
 *   ・暗い写真・寂れた風景は使いません（田植えを終えた田んぼの写真を置いています）。
 *   ・必ず「だから、こうしたい」で閉じます。
 *
 * 経緯を知りたい人だけを /owner/ へ送る、テキストリンク付きです。
 *
 * ■ 文章 … src/content/about.ts の why
 * ■ 写真 … src/config/images.ts の journal[5]（田植えを終えた田んぼに集まった人たち）
 */
export function AboutWhy() {
  return (
    <section
      id="why"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={about.why.index}
          label={about.why.label}
          title={about.why.title}
        />
        <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
          {about.why.sub}
        </p>

        <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink md:mt-12 md:text-[1rem]">
          {about.why.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Photo
            image={images.journal[5]}
            ratio="3 / 2"
            sizes="(min-width: 880px) 880px, 100vw"
            className="reveal"
          />
        </div>

        {/* 本人の言葉（原文）。文言は変えないでください */}
        <blockquote className="reveal mt-10 border-l border-moss/40 pl-6 md:mt-14 md:pl-8">
          <LeafIcon size={20} className="text-moss/70" />
          <p className="pull-quote mt-4 text-[1.05rem] text-soil md:text-[1.25rem]">
            {about.why.quote}
          </p>
        </blockquote>

        <div className="reveal mt-10 md:mt-12">
          <TextLink href={about.why.link.href} size="lg">
            {about.why.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
