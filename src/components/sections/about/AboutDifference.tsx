import { AboutCompare } from "@/components/sections/about/AboutCompare";
import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 01「見るのでも、体験するのでもなく。」（設計書 A-02）
 *
 * ページのなかで唯一、深緑の面になるセクションです。
 * 旅行 / 一般的な農業体験 / GUILD Farm の違いを、比較表で一目で見せます。
 *
 * ★ 大事な点：表だけでは「結局何をするのか」が分かりません。
 *   表のすぐ下に「農との関わり方を、滞在のなかで見つける。」という
 *   普通の日本語の説明（about.difference.practice）を必ず置いています。
 *   ここを消したり短くしたりしないでください。
 *
 * ■ 文章 … src/content/about.ts の difference
 * ■ 写真 … src/config/images.ts の aboutSoil（土のついた作業靴）
 *
 * ※ Phase 3-C（クライアントレビュー）での変更点
 *   ・3段の文章対比 → 比較表（AboutCompare）に置き換えました。
 *   ・「実際にすることは、こうです。」→「農との関わり方を、滞在のなかで見つける。」。
 *     本文の下に「たとえば」（農・仕事・暮らし・学び・観光）を並べています。
 *   ・引用「やりたい人全員みな農家…」は ABOUT から外しました
 *     （背景の説明がある /owner/ に残しています）。
 *
 * ※ 旧 WhyGuildFarm.tsx を置き換えたセクションです
 *   （元のコピーは src/content/copy.ts の why に残しています）。
 */
export function AboutDifference() {
  const practice = about.difference.practice;

  return (
    <section
      id="difference"
      className="scroll-mt-16 bg-forest py-20 text-paper md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={about.difference.index}
            label={about.difference.label}
            title={about.difference.title}
            tone="dark"
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-paper/70 md:text-[0.95rem]">
            {about.difference.sub}
          </p>
        </div>

        {/* 3つの関わり方の違いを、一目で見られる比較表にしています */}
        <AboutCompare />

        {/* ★ ここが「実際に何をするのか」の説明です。写真と並べて置いています */}
        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Photo
              image={images.aboutSoil}
              ratio="4 / 5"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal"
            />
          </div>

          <div className="md:col-span-7">
            <p className="label-en reveal text-[0.68rem] text-paper/60">
              {practice.label}
            </p>
            <p className="heading-jp wrap-phrase reveal mt-4 text-[1.3rem] text-paper md:text-[1.6rem]">
              {practice.title}
            </p>
            <div className="reveal mt-6 space-y-5 text-[0.92rem] leading-[2.1] text-paper/85 md:text-[1rem]">
              {practice.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 仕事・観光・農・暮らしが共存できることを、事実ベースで具体的に */}
            <p className="label-en reveal mt-10 text-[0.68rem] text-paper/60">
              {practice.examplesLabel}
            </p>
            <dl className="reveal mt-5 space-y-4">
              {practice.examples.map((example) => (
                <div
                  key={example.label}
                  className="grid grid-cols-[4.5em_1fr] items-baseline gap-x-4 border-t border-paper/15 pt-4"
                >
                  <dt className="heading-jp text-[0.95rem] text-sun">
                    {example.label}
                  </dt>
                  <dd className="text-[0.88rem] leading-[2] text-paper/80 md:text-[0.92rem]">
                    {example.text}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="reveal mt-8 text-[0.85rem] leading-[2.1] text-paper/70">
              {practice.note}
            </p>
          </div>
        </div>

        <div className="reveal mt-14 border-t border-paper/15 pt-12 md:mt-24 md:pt-16">
          <LeafIcon size={26} className="text-sun/60" />
          <p className="mt-7 max-w-[30em] text-[0.95rem] leading-[2.1] text-paper/80 md:ml-auto md:text-right">
            {about.difference.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
