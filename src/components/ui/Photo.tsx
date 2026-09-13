import Image from "next/image";
import type { ImageAsset } from "@/config/images";
import { cn } from "@/lib/cn";

type PhotoProps = {
  image: ImageAsset;
  /** CSSのaspect-ratio。例："4 / 5"、"3 / 2"、"1 / 1" */
  ratio?: string;
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
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", objectPosition)}
      />
    </div>
  );
}
