import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { owner } from "@/content/owner";

/**
 * 「松井について」の「これから。」（owner-brand-edit.md 11.）
 *
 * ページの最後に、松井さんがこれからやろうとしていることを本人の言葉で置いています。
 *
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください。
 *   「畳み1畳の畑」の「み」も原文のままです（ABOUT・HOMEの地の文は「畳1畳の畑」）。
 * ⚠ 完成された壮大なビジョンとして書きません。いま形にしようとしている構想です。
 * ⚠ コミュニティの具体的な仕組み・参加条件・時期は資料にないため書きません。
 * ⚠ このあとに OwnerNote（松井さんのnoteへの外部リンク）が入り、
 *   ページ末尾の ClosingCta が /plans/（プラン・料金）へ送ります（2026-09-16）。
 *
 * ■ 文章 … src/content/owner.ts の future
 * ■ 写真 … 置いていません（本人の言葉だけで読ませる短い章です）
 */
export function OwnerFuture() {
  return (
    <section
      id={owner.future.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
          <span className="numeral">{owner.future.index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
          <span>{owner.future.label}</span>
        </p>

        <h2 className="heading-jp heading-section reveal mt-5 text-ink">
          {owner.future.title}
        </h2>

        <p className="wrap-phrase reveal mt-6 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
          {owner.future.lead}
        </p>

        <LeafIcon size={22} className="reveal mt-10 text-moss/70" />

        {/* 本人の言葉（原文）。3つ続けて置いています */}
        <div className="reveal mt-8 space-y-7 md:mt-10 md:space-y-9">
          {owner.future.quotes.map((quote) => (
            <blockquote key={quote}>
              <p className="pull-quote text-[1.02rem] leading-[1.95] text-soil md:text-[1.25rem]">
                {quote}
              </p>
            </blockquote>
          ))}
        </div>

        <p className="reveal mt-12 border-t border-sand pt-7 text-[0.85rem] leading-[2] text-ink-faint">
          {owner.future.note}
        </p>
      </Container>
    </section>
  );
}
