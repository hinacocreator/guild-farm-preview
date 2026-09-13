import Image from "next/image";
import type { ImageAsset } from "@/config/images";
import { cn } from "@/lib/cn";
import { withBasePath } from "@/lib/paths";

type PhotoProps = {
  image: ImageAsset;
  /** CSSのaspect-ratio。例："4 / 5"、"3 / 2"、"1 / 1" */
  ratio?: string;
  /**
   * スマホ（768px未満）だけで使う比率。
   * 縦長の写真をスマホでそのまま出すとページが長くなりすぎるときに、
   * 横長に切り替えて高さを抑えるために使います（PCは ratio のまま）。
   */
  ratioMobile?: string;
  /** レスポンシブの読み込みサイズ指定（省略時はビューポート幅） */
  sizes?: string;
  /** 最初の画面に出る写真だけ true にする（LCP最適化） */
  priority?: boolean;
  className?: string;
  /** 写真の見せたい位置。例："object-top"、"object-bottom" */
  objectPosition?: string;
  /**
   * 角の丸み。
   * "rounded"（既定）= 20px の角丸 ／ "none" = 角なし（全幅写真・HEROに使う）
   */
  corners?: "rounded" | "none";
};

/**
 * サイト内の写真はすべてこのコンポーネント経由で表示しています。
 * 角丸・比率・読み込み方法をここで一括管理しているので、
 * 見た目を揃えて変えたいときはこのファイルを触ってください。
 */
export function Photo({
  image,
  ratio = "4 / 5",
  ratioMobile,
  sizes = "100vw",
  priority = false,
  className,
  objectPosition = "object-center",
  corners = "rounded",
}: PhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sand",
        corners === "rounded" && "rounded-[1.25rem]",
        /* スマホだけ別比率にするときは、CSS変数を2つ使って切り替えます */
        ratioMobile && "aspect-[var(--ratio-m)] md:aspect-[var(--ratio-d)]",
        className,
      )}
      style={
        ratioMobile
          ? ({
              "--ratio-m": ratioMobile,
              "--ratio-d": ratio,
            } as React.CSSProperties)
          : { aspectRatio: ratio }
      }
    >
      <Image
        /* サブパス配信（GitHub Pages）でも読めるように basePath を前置します。
           images.unoptimized: true のとき next/image は basePath を自動で付けません。 */
        src={withBasePath(image.src)}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", objectPosition)}
      />
    </div>
  );
}
