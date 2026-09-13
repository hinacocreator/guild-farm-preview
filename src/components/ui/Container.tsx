import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** narrow = 読み物用の狭い幅（文章だけのブロックに） */
  width?: "default" | "narrow";
};

/**
 * ページ共通の左右余白と最大幅。
 * 幅を変えたいときは、このファイルの数値だけを直せば全セクションに反映されます。
 */
export function Container({
  children,
  className,
  width = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-10",
        width === "narrow" ? "max-w-[880px]" : "max-w-[1400px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
