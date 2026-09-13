import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { copy } from "@/content/copy";
import { phrase } from "@/lib/jp";

/**
 * ページ最後のCTA。
 * 全幅の写真の上に深い緑を重ねて、文字を読ませています。
 *
 * ■ 文章 … src/content/copy.ts の closing
 * ■ 写真 … src/config/images.ts の cta
 * ■ ボタンのリンク先 … src/config/site.ts の contactHref（フォーム or メール）
 */
export function ClosingCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden md:scroll-mt-20"
    >
      {/* 背景写真。全幅なので角丸なし（corners="none"） */}
      <Photo
        image={images.cta}
        ratio="16 / 9"
        sizes="100vw"
        corners="none"
        className="absolute inset-0 h-full w-full"
      />

      {/* 文字を読ませるための深緑のベール */}
      <div aria-hidden="true" className="absolute inset-0 bg-forest/78" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent"
      />

      <Container className="relative py-28 md:py-44">
        <div className="reveal max-w-2xl">
          <LeafIcon size={26} className="text-sun/70" />

          <h2 className="heading-jp heading-section mt-7 text-paper">
            {phrase(copy.closing.title)}
          </h2>

          <div className="mt-8 space-y-1 text-[0.95rem] leading-[2.1] text-paper/85 md:text-[1.05rem]">
            {copy.closing.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-12">
            <CtaButton variant="light" size="lg">
              {copy.closing.cta}
            </CtaButton>
          </div>

          <p className="mt-8 max-w-[26em] text-[0.78rem] leading-[2] text-paper/60">
            {copy.closing.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
