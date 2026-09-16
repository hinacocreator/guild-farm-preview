import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { copy } from "@/content/copy";
import { phrase } from "@/lib/jp";

type ClosingCtaProps = {
  /** 見出し。省略すると src/content/copy.ts の closing.title になります */
  title?: string;
  /** 本文。1要素＝1行 */
  body?: readonly string[];
  /** ボタンの文言 */
  cta?: string;
  /**
   * 主ボタンのリンク先。省略すると src/config/site.ts の contactHref（相談）です。
   * /flow/ だけが applyHref（申し込み）を渡しています。
   */
  ctaHref?: string;
  /**
   * 主ボタンの下に置く、副CTAのリンク（省略すると出ません）。
   * /flow/ の「滞在について相談する」（contactHref）に使っています。
   * ボタンではなくテキストリンクにして、主CTAと同格にならないようにしています。
   */
  secondary?: { label: string; href: string };
  /** ボタンの下に置く小さな添え書き */
  note?: string;
  /** ボタンの横に置く「次に読む」の副リンク（省略すると出ません） */
  next?: { label: string; href: string };
};

/**
 * ページ最後のCTA（全ページ共通）。
 * 全幅の写真の上に深い緑を重ねて、文字を読ませています。
 *
 * ■ 文章 … 既定は src/content/copy.ts の closing。
 *          ページごとに変えたいときは props で渡してください
 *          （HOMEは src/content/home.ts の closing を渡しています）。
 * ■ 写真 … src/config/images.ts の cta
 * ■ ボタンのリンク先 … src/config/site.ts の contactHref（フォーム or メール）
 *
 * ⚠ id="contact" は、スマホ固定CTAバー（StickyCtaBar）が
 *   「末尾のCTAが画面に出ているか」を判定するのに使っています。変えないでください。
 */
export function ClosingCta({
  title = copy.closing.title,
  body = copy.closing.body,
  cta = copy.closing.cta,
  ctaHref,
  secondary,
  note = copy.closing.note,
  next,
}: ClosingCtaProps = {}) {
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

      <Container className="relative py-24 md:py-44">
        <div className="reveal max-w-2xl">
          <LeafIcon size={26} className="text-sun/70" />

          <h2 className="heading-jp heading-section mt-7 text-paper">
            {phrase(title)}
          </h2>

          <div className="wrap-phrase mt-8 space-y-1 text-[0.95rem] leading-[2.1] text-paper/85 md:text-[1.05rem]">
            {/* phrase() … 読点のかたまりで折り返します。これがないとスマホで
                「…必要もありませ／ん。」のように1文字だけ次の行に落ちていました。 */}
            {body.map((line) => (
              <p key={line}>{phrase(line)}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-center md:gap-10">
            <CtaButton variant="light" size="lg" {...(ctaHref ? { href: ctaHref } : {})}>
              {cta}
            </CtaButton>

            {next ? (
              <TextLink href={next.href} tone="dark">
                {next.label}
              </TextLink>
            ) : null}
          </div>

          {/* 副CTA。主CTAの下に置いて、同格に見えないようにしています */}
          {secondary ? (
            <p className="mt-7">
              <TextLink href={secondary.href} tone="dark">
                {secondary.label}
              </TextLink>
            </p>
          ) : null}

          <p className="wrap-phrase mt-8 max-w-[26em] text-[0.78rem] leading-[2] text-paper/60">
            {note}
          </p>
        </div>
      </Container>
    </section>
  );
}
