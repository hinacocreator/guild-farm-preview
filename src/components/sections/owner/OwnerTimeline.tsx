import { Container } from "@/components/ui/Container";
import { owner } from "@/content/owner";

/**
 * 「松井について」の年表ナビ（ページ上部）。
 *
 * 長い読み物なので、先に「いつ・何があったか」を一覧で見せて、
 * 読みたいところへ飛べるようにしています。
 * リンク先は OwnerChapters の各章の id（#ehime など）です。
 * → id は src/content/owner.ts の chapters と timeline の両方にあります。
 *   変えるときは両方を直してください。
 *
 * ⚠ 並びは「読む順（章の順）」であって、年代順ではありません
 *   （owner-brand-edit.md の章立てに合わせています）。
 * ⚠「10年前」は相対表記のままです（資料の作成時点が不明なため）。西暦に直さないでください。
 *
 * 本人写真（レモン）は PageHeader（名前のすぐ下）に置いています（2026-09-17）。
 * ここは年表だけです。
 *
 * ■ 文章 … src/content/owner.ts の timeline
 *
 * ※ ページ内リンクなので next/link ではなく素の <a> を使っています
 *   （同一ページ内のアンカーは、そのままのほうが確実に動きます）。
 */
export function OwnerTimeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-8">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{owner.timeline.label}</span>
            </p>

            <h2 className="heading-jp heading-item reveal mt-5 text-ink">
              {owner.timeline.title}
            </h2>

            <ol className="mt-8 border-t border-sand md:mt-10">
              {owner.timeline.items.map((item) => (
                <li key={item.href} className="reveal border-b border-sand">
                  <a
                    href={item.href}
                    className="group flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-clay md:gap-8"
                  >
                    <span className="numeral w-[4.5em] shrink-0 text-[0.85rem] tracking-[0.06em] text-ink-faint md:w-[6em] md:text-[0.95rem]">
                      {item.year}
                    </span>
                    <span className="text-[0.85rem] leading-[1.9] text-ink md:text-[0.95rem]">
                      {item.text}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </Container>
    </section>
  );
}
