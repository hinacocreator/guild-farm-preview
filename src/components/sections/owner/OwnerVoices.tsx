import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { owner } from "@/content/owner";

/**
 * OWNER「滞在した人の言葉」（設計書 O-11）
 *
 * 松井さんの語りを、第三者の言葉で受けるセクションです。
 *
 * ⚠ 言葉は資料にある3つだけです。新しい声を作りません。
 * ⚠ 名前・年齢・職業・性別などの属性は付けません。
 *   「松井が聞いた言葉」だと分かるように、上下に注記を置いています。
 * ⚠ 掲載許諾の状況が確認できていないため、人物写真は添えていません。
 *
 * ■ 文章 … src/content/owner.ts の voices（words は原文どおり）
 */
export function OwnerVoices() {
  return (
    <section
      id={owner.voices.id}
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container width="narrow">
        <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
          <span className="numeral">{owner.voices.index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
          <span>{owner.voices.label}</span>
        </p>

        <h2 className="heading-jp heading-section reveal mt-5 text-ink">
          {owner.voices.title}
        </h2>

        <p className="wrap-phrase reveal mt-6 text-[0.88rem] leading-[2] text-ink-faint md:text-[0.92rem]">
          {owner.voices.lead}
        </p>

        <LeafIcon size={24} className="reveal mt-10 text-moss/70" />

        <ul className="mt-8 space-y-9 md:mt-12 md:space-y-12">
          {owner.voices.words.map((word) => (
            <li key={word} className="reveal">
              <blockquote>
                <p className="pull-quote text-[1.2rem] leading-[1.9] text-ink md:text-[1.6rem]">
                  {word}
                </p>
              </blockquote>
            </li>
          ))}
        </ul>

        <p className="reveal mt-12 border-t border-sand pt-7 text-[0.78rem] leading-[2] text-ink-faint">
          {owner.voices.note}
        </p>
      </Container>
    </section>
  );
}
