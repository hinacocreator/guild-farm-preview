import { cn } from "@/lib/cn";

type LeafIconProps = {
  /** 一辺のpx。既定は24px */
  size?: number;
  className?: string;
};

/**
 * 線画の葉。区切りや見出しの添え物として、1ページに1〜2箇所だけ使います。
 * 色は文字色（currentColor）を継いでいるので、text-moss などで指定してください。
 */
export function LeafIcon({ size = 24, className }: LeafIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      {/* 葉のかたち */}
      <path d="M20.5 3.5c0 8.4-5 13.6-11.4 13.6-2.2 0-4-.6-5.1-1.5C4 8.9 9.1 3.9 15.5 3.5c1.8-.1 3.4 0 5 0Z" />
      {/* 葉脈と茎 */}
      <path d="M18.6 5.4C13.9 8.2 8.6 12.8 3.5 20.5" />
      <path d="M12.6 8.2c-1.4.7-2.9 1.6-4.4 2.6" />
      <path d="M15.3 12.4c-1.6.5-3.3 1.2-5 2" />
    </svg>
  );
}
