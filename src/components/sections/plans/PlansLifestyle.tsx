import { Container } from "@/components/ui/Container";
import { plans } from "@/content/plans";
import { phrase } from "@/lib/jp";

/**
 * 過ごし方の組み立て（通し番号なし）。/plans/ 専用。
 *
 * 比較（01）のすぐ下、1週間プラン（02）の手前に置く短いセクションです。
 * 2つのプランの違いを読んだ人が、「自分だとどう過ごすことになるのか」を
 * 想像しはじめる位置にあります。
 *
 * ■ 組み方
 *   ・見出しと英字ラベルは SectionHeading と同じ形（英字ラベル＋明朝の h2）ですが、
 *     通し番号は出しません。既存の 01〜08 を動かさずに割り込ませるためです。
 *   ・2つの過ごし方は PC で横並び（2列）、スマホで縦積みです。
 *     どちらが上位ということはないので、枠線・背景・順番で差を付けていません。
 *   ・背景は上の比較（PlansCompare）と同じ cream です。比較の続きとして読ませ、
 *     1週間プラン（02・paper）から色が変わることで章の切れ目が分かるようにしています。
 *
 * ⚠ 写真は置きません。人物の写真と「こういう人向け」という読み方が
 *   結びつくのを避けるためです。
 * ⚠ 「シニア」「現役世代」「○代向け」「おすすめ」などのラベルも付けません。
 *   英字ラベルも属性を示さない "Your Time" にしています。
 * ⚠ 文言はクライアント確定です（src/content/plans.ts の lifestyle）。
 *   言い換え・ブランドコピーの追加をしないでください。
 *
 * ■ 文章 … src/content/plans.ts の lifestyle
 */
export function PlansLifestyle() {
  const lifestyle = plans.lifestyle;

  return (
    <section
      id={lifestyle.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <header className="reveal md:col-span-5">
            <p className="label-en flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{lifestyle.label}</span>
            </p>

            <h2 className="heading-jp heading-section mt-5 text-ink">
              {phrase(lifestyle.title)}
            </h2>
          </header>

          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {lifestyle.lead}
          </p>
        </div>

        {/* 2つの過ごし方。対等に並べています（優劣・属性の区別ではありません） */}
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          {lifestyle.items.map((item) => (
            <article
              key={item.title}
              className="reveal border-t-2 border-clay/40 pt-7"
            >
              <h3 className="heading-jp text-[1.15rem] leading-[1.7] text-ink md:text-[1.3rem]">
                {phrase(item.title)}
              </h3>
              <p className="mt-5 text-[0.9rem] leading-[2.05] text-ink-soft">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <p className="reveal mt-12 text-[0.8rem] leading-[2] text-ink-faint md:mt-16">
          {lifestyle.closing}
        </p>
      </Container>
    </section>
  );
}
