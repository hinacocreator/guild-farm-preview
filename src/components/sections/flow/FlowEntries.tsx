import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { applyHref, contactHref, siteConfig } from "@/config/site";
import { flow } from "@/content/flow";
import { phrase } from "@/lib/jp";

/**
 * 01　2つの入口。/flow/ 専用（HERO直下）。
 *
 * このページの第一の目的は「滞在したい人を、迷わせずに申し込みまで案内する」ことです。
 * そのため、2つの入口は**同格に並べていません**。
 *
 * ・A 滞在を決めている方 … 主CTA（テラコッタのボタン）。リンク先は applyHref
 * ・B まず話を聞いてみたい方 … 副CTA（テキストリンク）。リンク先は contactHref
 *
 * ⚠ 見た目で差を付けているのは意図的です。
 *   2つを同じボタンで並べると「どちらかを選ばないと進めない」ように見え、
 *   結果として「まず相談」が前提のページに戻ってしまいます。
 * ⚠ applyHref は Googleフォーム（外部サイト）です。CtaButton が http で始まるリンクに
 *   自動で target="_blank" rel="noopener noreferrer" を付けます。
 *   ボタンのすぐ下に「Googleフォームが開きます」（siteConfig.applyNote）を添えています。
 */
export function FlowEntries() {
  const { apply, consult } = flow.entries;

  return (
    <section
      id="start"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={flow.entries.index}
          label={flow.entries.label}
          title={flow.entries.title}
        />

        <p className="reveal mt-7 text-[0.95rem] leading-[2.05] text-ink-soft">
          {flow.entries.lead}
        </p>

        {/* A：滞在を決めている方（主） */}
        <div className="reveal mt-12 border-t border-sand pt-8 md:mt-16 md:pt-10">
          <h3 className="heading-jp wrap-phrase text-[1.15rem] text-ink md:text-[1.35rem]">
            {phrase(apply.title)}
          </h3>
          <p className="mt-4 max-w-[36em] text-[0.9rem] leading-[2.1] text-ink-soft">
            {apply.text}
          </p>
          <div className="mt-8">
            <CtaButton href={applyHref} size="lg">
              {apply.cta}
            </CtaButton>
            {/* 外部サイト（Googleフォーム）に移動することが分かるようにしています */}
            <p className="mt-3 text-[0.75rem] text-ink-faint">
              {siteConfig.applyNote}
            </p>
          </div>
        </div>

        {/* B：まず話を聞いてみたい方（副。ボタンにせずテキストリンクにしています） */}
        <div className="reveal mt-12 border-t border-sand pt-8 md:mt-14">
          <h3 className="heading-item text-ink">{consult.title}</h3>
          <p className="mt-3 max-w-[36em] text-[0.9rem] leading-[2.1] text-ink-soft">
            {consult.text}
          </p>
          <p className="mt-6">
            <TextLink href={contactHref}>{consult.cta}</TextLink>
          </p>
        </div>
      </Container>
    </section>
  );
}
