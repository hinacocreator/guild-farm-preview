import Link from "next/link";
import { contactHref, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

type CtaButtonProps = {
  /** 省略すると site.ts の ctaLabel（「滞在について相談する」）になります */
  children?: React.ReactNode;
  /**
   * clay    = 紙の背景の上（既定・テラコッタ）
   * light   = 写真や濃い背景の上（生成りのボタン）
   * outline = 罫線だけの控えめなボタン
   * dark    = 深緑のボタン
   */
  variant?: "clay" | "light" | "outline" | "dark";
  size?: "md" | "lg";
  className?: string;
  /** 問い合わせ以外に飛ばしたいときだけ指定（通常は不要） */
  href?: string;
};

/**
 * 問い合わせCTAボタン。
 * リンク先は src/config/site.ts の contactHref を見ています。
 * → 導線（メール or フォーム）を変えたいときは site.ts を編集してください。
 */
export function CtaButton({
  children,
  variant = "clay",
  size = "lg",
  className,
  href = contactHref,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "group inline-flex items-center justify-center gap-3 rounded-full",
    "transition-[background-color,color,border-color,transform] duration-300",
    "active:translate-y-px",
    size === "lg"
      ? "px-10 py-5 text-[1rem] md:px-12 md:py-6 md:text-[1.05rem]"
      : "px-7 py-3.5 text-[0.9rem]",
    "tracking-[0.06em]",
    variant === "clay" && "bg-clay text-paper hover:bg-clay-deep",
    variant === "light" && "bg-paper text-clay hover:bg-cream",
    variant === "dark" && "bg-forest text-paper hover:bg-moss",
    variant === "outline" &&
      "border border-clay/40 text-clay hover:border-clay hover:bg-clay hover:text-paper",
    className,
  );

  const inner = (
    <>
      <span>{children ?? siteConfig.ctaLabel}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
