import { CtaButton } from "@/components/ui/CtaButton";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";
import { phrase } from "@/lib/jp";
import { withBasePath } from "@/lib/paths";

/**
 * H-01 HERO（HOME専用）。
 *
 * スマホと横長画面で写真のトリミングが変わるよう、2枚を出し分けています
 * （public/images/hero-mobile.jpg ＝ 縦長 9:16 ／ hero.jpg ＝ 横長 16:9）。
 * 実際に読み込まれるのは表示される側の1枚だけです。
 *
 * ■ 文章 … src/content/home.ts の hero
 * ■ 写真 … src/config/images.ts の hero / heroMobile
 *
 * ⚠ 金額は出しません。以前ここにあった「85,300円に含まれるもの →」のリンクは
 *   削除しました（金額は /plans/ だけに出す方針。文言は copy.ts に残しています）。
 * ⚠ id="top" は、スマホ固定CTAバー（StickyCtaBar）が
 *   「HEROを過ぎたか」を判定するのに使っています。変えないでください。
 */
/**
 * HERO見出し専用の改行調整。
 * 引用符で囲んだ語（例: “心地イイ”）と、その直後の助詞1文字を1かたまりにして、
 * 「“心地イイ”／を見つめ直す」のような助詞先頭の改行を避けます。コピー自体は変えません。
 */
function heroTitle(text: string) {
  const parts = text.split(/(“[^”]+”[をにはがのでとも]?)/).filter(Boolean);
  // 各かたまり（例: 農的暮らしを通じて／“心地イイ”を／見つめ直す）の内側では折り返さず、
  // かたまりの境目でだけ改行します。PCでは1行、スマホでは文節ごとの3行になります。
  return parts.map((part, i) => (
    <span key={i} className="inline-block whitespace-nowrap">
      {part}
    </span>
  ));
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={withBasePath(images.heroMobile.src)}
          width={864}
          height={1536}
        />
        {/* 画面幅で写真そのものを切り替えるため、next/image ではなく <picture> を使っています */}
        <img
          src={withBasePath(images.hero.src)}
          alt={images.hero.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* 文字を読ませるための暗いグラデーション */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20"
      />

      {/* 写真を差し替えても文字が読めるよう、軽い影を敷いています */}
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-32 [text-shadow:0_1px_24px_rgba(0,0,0,0.5)] md:px-10 md:pb-28">
        <p className="label-en text-[0.68rem] text-paper/90">
          {home.hero.eyebrow}
        </p>

        <h1 className="heading-jp heading-hero mt-6 max-w-[16em] text-paper">
          {/* 「“心地イイ”を」のように、閉じ引用符と直後の助詞のあいだで改行しないようにしています */}
          {heroTitle(home.hero.title)}
        </h1>

        <p className="mt-6 text-[0.95rem] leading-[2] text-paper md:text-[1.1rem]">
          {phrase(home.hero.sub)}
        </p>

        {/* wrap-phrase … 文節の切れ目で折り返します（globals.css）。
            HEROの説明文が語の途中で割れないようにするためです。 */}
        <div className="wrap-phrase mt-6 max-w-xl space-y-1 text-[0.9rem] leading-[2.1] text-paper/85 md:text-[1rem]">
          {home.hero.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 md:mt-12 md:flex-row md:items-center md:gap-10">
          {/* 主CTAは問い合わせではなく /life/。まず暮らしを見てもらいます */}
          <CtaButton size="lg" href={home.hero.cta.href}>
            {home.hero.cta.label}
          </CtaButton>

          <TextLink href={home.hero.secondary.href} tone="dark" size="lg">
            {home.hero.secondary.label}
          </TextLink>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-5 hidden items-center gap-3 md:right-10 md:flex"
      >
        <span className="label-en text-[0.6rem] text-paper/60">
          {home.hero.scroll}
        </span>
        <span className="h-10 w-px bg-paper/40" />
      </div>
    </section>
  );
}
