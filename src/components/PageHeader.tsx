import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { phrase } from "@/lib/jp";

type PageHeaderProps = {
  /** 英字ラベル（例：About） */
  label: string;
  /** ページ見出し（h1）。明朝体で表示されます */
  title: string;
  /** 見出しの下に1行だけ置くサブコピー */
  sub?: string;
  /** リード。1要素＝1段落 */
  lead: readonly string[];
};

/**
 * 下層ページの先頭に置く、ページヘッダー。
 * 英字ラベル → 明朝の大見出し → サブコピー → リードの順です。
 *
 * ■ 文章 … src/content/pages.ts
 *
 * ※ ヘッダー（SiteHeader）が画面上部に固定されているため、
 *   その高さ（h-16 / md:h-20）を上の余白に足しています。
 */
export function PageHeader({ label, title, sub, lead }: PageHeaderProps) {
  return (
    <section className="bg-paper pb-16 pt-28 md:pb-24 md:pt-44">
      <Container width="narrow">
        <div className="reveal">
          <p className="label-en flex items-center gap-3 text-[0.7rem] text-ink-faint">
            <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
            <span>{label}</span>
          </p>

          <h1 className="heading-jp heading-hero mt-6 text-ink">
            {phrase(title)}
          </h1>

          {sub ? (
            <p className="wrap-phrase mt-7 text-[0.95rem] leading-[2] text-ink-soft md:text-[1.05rem]">
              {sub}
            </p>
          ) : null}

          <LeafIcon size={22} className="mt-10 text-moss/70" />

          <div className="mt-8 space-y-6 text-[0.95rem] leading-[2.1] text-ink md:text-[1.02rem]">
            {lead.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
