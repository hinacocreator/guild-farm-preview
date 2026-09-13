import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { flow } from "@/content/flow";
import { phrase } from "@/lib/jp";

/**
 * 先に知っておいてほしいこと。/flow/ 専用。
 *
 * 雨の日・土日・1週間滞在の受け入れ時期という、
 * 来てから分かると困る3つの条件をまとめています（設計書の「その他不安解消」）。
 * FAQで答えるより先に読ませたいので、FAQの手前に置いています。
 *
 * ■ 文章 … src/content/flow.ts の concerns
 * ※ 写真は入れていません（条件の確認なので、文字だけのほうが読みやすいため）。
 */
export function FlowConcerns() {
  return (
    <section
      id="concerns"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={flow.concerns.index}
          label={flow.concerns.label}
          title={flow.concerns.title}
        />

        <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
          {flow.concerns.lead}
        </p>

        <LeafIcon size={22} className="reveal mt-10 text-moss/70" />

        <ul className="mt-8 space-y-8 md:mt-10 md:space-y-10">
          {flow.concerns.items.map((item) => (
            <li
              key={item.title}
              className="reveal border-t border-sand pt-7 md:pt-8"
            >
              <h3 className="heading-jp wrap-phrase text-[1.1rem] text-ink md:text-[1.3rem]">
                {phrase(item.title)}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[2.1] text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
