import { CtaButton } from "@/components/ui/CtaButton";
import { images } from "@/config/images";
import { copy } from "@/content/copy";
import { phrase } from "@/lib/jp";

/**
 * HERO。
 * スマホと横長画面で写真のトリミングが変わるよう、2枚を出し分けています
 * （public/images/hero-mobile.jpg ＝ 縦長 9:16 ／ hero.jpg ＝ 横長 16:9）。
 * 実際に読み込まれるのは表示される側の1枚だけです。
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={images.heroMobile.src}
          width={864}
          height={1536}
        />
        {/* 画面幅で写真そのものを切り替えるため、next/image ではなく <picture> を使っています */}
        <img
          src={images.hero.src}
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
          {copy.hero.eyebrow}
        </p>

        <h1 className="heading-jp heading-hero mt-6 max-w-[16em] text-paper">
          {phrase(copy.hero.title)}
        </h1>

        <div className="mt-7 max-w-xl space-y-1 text-[0.95rem] leading-[2.1] text-paper/90 md:text-[1.05rem]">
          {copy.hero.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-6 md:mt-12 md:flex-row md:items-center md:gap-10">
          <CtaButton size="lg">{copy.hero.cta}</CtaButton>

          <a
            href={copy.hero.secondary.href}
            className="group inline-flex items-center gap-2.5 text-[0.9rem] tracking-[0.05em] text-paper/90 transition-opacity duration-300 hover:opacity-70"
          >
            <span className="border-b border-paper/40 pb-1">
              {copy.hero.secondary.label}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-5 hidden items-center gap-3 md:right-10 md:flex"
      >
        <span className="label-en text-[0.6rem] text-paper/60">
          {copy.hero.scroll}
        </span>
        <span className="h-10 w-px bg-paper/40" />
      </div>
    </section>
  );
}
