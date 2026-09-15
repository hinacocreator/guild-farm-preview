import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { TextLink } from "@/components/ui/TextLink";
import { home } from "@/content/home";

/**
 * H-08 ここで過ごした人たちの声。HOME専用。
 *
 * 滞在した人の言葉を、原文のまま3つだけ。明朝で大きく組みます。
 * ⚠ 名前・年齢・職業・性別などの属性は付けません。3つ以外の声も作りません。
 * ⚠ 許諾の状況が確認できていないため、人物写真は添えていません
 *   （写真を入れる場合は、写っている方への掲載確認が必要です）。
 *
 * ■ 文章 … src/content/home.ts の voices（words は原文どおり）
 */
export function HomeVoices() {
  return (
    <section id="voices" className="bg-cream py-20 md:py-36">
      <Container width="narrow">
        <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
          <span className="numeral">{home.voices.index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
          <span>{home.voices.label}</span>
        </p>

        {/* このブロックだけ見出しを画面に出していません（3つの言葉そのものを主役にするため）。
            見出しが無いと読み上げソフトや目次で位置が分からなくなるので、
            設計書 H-08 のブロック名を、画面に出さない見出しとして置いています。 */}
        <h2 className="sr-only">ここで過ごした人たちの声</h2>

        <LeafIcon size={24} className="reveal mt-8 text-moss/70 md:mt-10" />

        {/* 3つの言葉。引用元は伏せます（属性を付けない方針） */}
        <ul className="mt-8 space-y-10 md:mt-14 md:space-y-16">
          {home.voices.words.map((word) => (
            <li key={word} className="reveal">
              <blockquote>
                <p className="pull-quote text-[1.3rem] leading-[1.9] text-ink md:text-[1.75rem]">
                  {word}
                </p>
              </blockquote>
            </li>
          ))}
        </ul>

        <p className="reveal mt-12 border-t border-sand pt-7 text-[0.78rem] leading-[2] text-ink-faint">
          {home.voices.note}
        </p>

        <div className="reveal mt-8 md:mt-10">
          <TextLink href={home.voices.link.href} size="lg">
            {home.voices.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
