import { LeafIcon } from "@/components/ui/LeafIcon";
import { cn } from "@/lib/cn";
import { phrase } from "@/lib/jp";

type SectionHeadingProps = {
  /** 英字ラベル（例：About） */
  label: string;
  /** 通し番号（例：01） */
  index: string;
  /** 日本語の見出し。明朝体で表示されます */
  title: string;
  /**
   * 見出しを指定の位置で改行したいときだけ渡します（1要素＝1行）。
   * 渡すと title のかわりにこちらを表示します（title は読み上げ・検索用に残してください）。
   */
  lines?: readonly string[];
  className?: string;
  tone?: "light" | "dark";
  /** 見出しの横に小さな葉のマークを添える（使いすぎない） */
  leaf?: boolean;
};

/**
 * 各セクション共通の見出し。番号＋英字ラベル＋日本語見出しの3層構成。
 * 日本語見出しは Shippori Mincho（明朝体）です。
 * → 書体を変えたいときは src/app/globals.css の .heading-jp を編集してください。
 */
export function SectionHeading({
  label,
  index,
  title,
  lines,
  className,
  tone = "light",
  leaf = false,
}: SectionHeadingProps) {
  return (
    <header className={cn("reveal", className)}>
      <p
        className={cn(
          "label-en flex items-center gap-3 text-[0.7rem]",
          tone === "light" ? "text-ink-faint" : "text-paper/60",
        )}
      >
        <span className="numeral">{index}</span>
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-8",
            tone === "light" ? "bg-ink-faint/50" : "bg-paper/40",
          )}
        />
        <span>{label}</span>
      </p>

      <h2
        className={cn(
          "heading-jp heading-section mt-5",
          tone === "light" ? "text-ink" : "text-paper",
        )}
      >
        {lines
          ? lines.map((line) => (
              <span key={line} className="block">
                {phrase(line)}
              </span>
            ))
          : phrase(title)}
        {leaf ? (
          <LeafIcon
            className={cn(
              "ml-3 inline-block align-middle",
              tone === "light" ? "text-moss/70" : "text-sun/70",
            )}
          />
        ) : null}
      </h2>
    </header>
  );
}
