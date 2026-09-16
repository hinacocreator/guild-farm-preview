import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { owner } from "@/content/owner";

/**
 * 「松井について」の末尾に置く、松井さんのnoteへの導線（2026-09-16 最終回遊QA）。
 *
 * 「これから。」（OwnerFuture）を読み終えて、もっと知りたくなった人だけが進む
 * 外部リンクです。ページの本体ではないので、写真も通し番号も付けずに
 * 小さく置いています。
 *
 * ⚠ **noteの記事の内容を、このページの本文・年表・引用に持ち込まないでください。**
 *   /owner/ の一次資料は matsui-story.txt だけです。ここは「続きは本人のnoteで」
 *   と送り出すためだけの導線です。
 * ⚠ URL は src/config/site.ts の social.note.url（https://note.com/guild853）。
 *   Instagram のプロフィール経由のリダイレクトURLは使いません。
 * ⚠ 外部サイトなので、Instagram のリンクと同じく別タブで開きます
 *   （target="_blank" rel="noopener noreferrer"）。↗ は外部リンクの目印です。
 *
 * ■ 文章 … src/content/owner.ts の noteLink
 */
export function OwnerNote() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Container width="narrow">
        <div className="reveal border-t border-sand pt-10 md:pt-12">
          <h2 className="heading-jp text-[1.15rem] text-ink md:text-[1.35rem]">
            {owner.noteLink.title}
          </h2>

          <p className="mt-5 max-w-[36em] text-[0.9rem] leading-[2.1] text-ink-soft">
            {owner.noteLink.text}
          </p>

          <p className="mt-7">
            <a
              href={siteConfig.social.note.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-sand px-6 py-3.5 text-[0.85rem] tracking-[0.05em] text-ink transition-colors duration-300 hover:border-clay hover:text-clay"
            >
              <span>{owner.noteLink.cta}</span>
              <span className="numeral text-[0.72rem] text-ink-faint transition-colors duration-300 group-hover:text-clay">
                {siteConfig.social.note.handle}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
