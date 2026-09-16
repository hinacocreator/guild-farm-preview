import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { contactHref } from "@/config/site";
import { flow } from "@/content/flow";
import { phrase } from "@/lib/jp";

/**
 * 03　申し込む前に相談したい方へ。/flow/ 専用。
 *
 * **任意のサポート導線**です。ステップの途中ではなく、ステップの後ろに独立させています。
 * ステップの中に置くと「相談してから申し込む」のが標準の手順に見えてしまうためです。
 *
 * ⚠ items は「相談できる過ごし方の例」です。人の分類ではありません。
 *   「シニア向け」「現役世代向け」のような年齢のラベルを付けないでください
 *   （クライアント確定。同じ考え方で /plans/ の PlansLifestyle も作っています）。
 * ⚠ 2項目に優劣を付けません。枠線・背景・順番で差を出さないでください。
 *
 * ■ 文章 … src/content/flow.ts の consult
 * ※ 写真は入れていません（人物写真と「こういう人向け」の読み方が結びつくのを避けるため）。
 */
export function FlowConsult() {
  return (
    <section
      id="consult"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <SectionHeading
          index={flow.consult.index}
          label={flow.consult.label}
          title={flow.consult.title}
        />

        <p className="reveal mt-7 max-w-[38em] text-[0.95rem] leading-[2.05] text-ink-soft">
          {flow.consult.lead}
        </p>

        <LeafIcon size={22} className="reveal mt-10 text-moss/70" />

        <h3 className="reveal mt-8 text-[0.8rem] tracking-[0.08em] text-clay">
          {flow.consult.itemsTitle}
        </h3>

        <ul className="mt-6 grid gap-8 md:grid-cols-2 md:gap-10">
          {flow.consult.items.map((item) => (
            <li
              key={item.title}
              className="reveal border-t border-sand pt-6 md:pt-7"
            >
              <h4 className="heading-jp wrap-phrase text-[1.05rem] text-ink md:text-[1.15rem]">
                {phrase(item.title)}
              </h4>
              <p className="mt-4 text-[0.9rem] leading-[2.1] text-ink-soft">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 border-t border-sand pt-8">
          <TextLink href={contactHref} size="lg">
            {flow.consult.cta}
          </TextLink>
          <p className="mt-5 text-[0.8rem] leading-[2] text-ink-faint">
            {flow.consult.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
