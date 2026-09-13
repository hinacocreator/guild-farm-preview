import Link from "next/link";
import { cn } from "@/lib/cn";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  /** light = 紙の背景の上（既定） ／ dark = 写真や深緑の面の上 */
  tone?: "light" | "dark";
  /** lg = ブロックの締めに置く、少し大きめのリンク */
  size?: "md" | "lg";
  className?: string;
};

/**
 * 「次のページへ送る」テキストリンク（下線＋矢印）。
 *
 * HOMEの各ブロックは〈写真 → 短いコピー → このリンク〉で終わります。
 * ボタンにしないのは、問い合わせボタン（CtaButton）と役割を分けるためです。
 *
 * ・内部リンクは next/link。next.config.ts が trailingSlash: true なので
 *   リンク先は "/about/" のように末尾スラッシュ付きで書いてください。
 * ・http / mailto で始まるものは通常の <a> になります。
 */
export function TextLink({
  href,
  children,
  tone = "light",
  size = "md",
  className,
}: TextLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "group inline-flex items-center gap-2.5 tracking-[0.05em]",
    "transition-colors duration-300",
    size === "lg" ? "text-[0.95rem] md:text-[1rem]" : "text-[0.875rem]",
    tone === "light"
      ? "text-ink hover:text-clay"
      : "text-paper hover:text-sun",
    className,
  );

  const inner = (
    <>
      <span
        className={cn(
          "border-b pb-1",
          tone === "light"
            ? "border-clay/40 group-hover:border-clay"
            : "border-paper/40 group-hover:border-sun",
        )}
      >
        {children}
      </span>
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
