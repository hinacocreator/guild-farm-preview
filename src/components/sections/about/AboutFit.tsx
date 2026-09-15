import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 02「こんな過ごし方を楽しめる方に。」（Phase 3-C クライアント追加）
 *
 * ■ このセクションの役割
 *   GUILD Farmは、毎日決められたプログラムを案内し続ける場所ではありません。
 *   最初の1週間はGUILD Farm側で農や地域を知るための予定を用意し、
 *   2週目からは、そこで見たことをもとに本人が予定を組み立てていきます。
 *   ⚠「最初から最後まで各自任せ」とは書かないでください（松井さんFB①）。
 *   その組み立てやすさを「体験価値」として先に伝えるため、
 *   AboutDifference の「農との関わり方を、滞在のなかで見つける。」の直後に置いています。
 *
 * ⚠ 語調のルール（クライアント指定）
 *   「主体性のある人を求めています」のような採用要件的・排他的な言い方はしません。
 *   note（合わないかもしれません）は、本文より小さく薄い文字で添えます。
 *   強調枠や警告色にはしないでください。
 *
 * ⚠ id="fit" は /flow/ のFAQ「どんな人が向いていますか」からの着地点です。変えないでください。
 *
 * ■ 文章 … src/content/about.ts の fit
 * ■ 写真 … src/config/images.ts の expNature（手入れをしている竹林）
 *          ※「畑以外の時間もある」ことが伝わる、畑仕事ではない風景を選んでいます。
 */
export function AboutFit() {
  const fit = about.fit;

  return (
    <section
      id={fit.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Photo
              image={images.expNature}
              ratio="4 / 5"
              sizes="(min-width: 768px) 38vw, 100vw"
              className="reveal"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <SectionHeading
              index={fit.index}
              label={fit.label}
              title={fit.title}
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {fit.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 補足。小さめ・薄めにして、選別しているように読ませません */}
            <p className="reveal mt-9 border-t border-sand pt-7 text-[0.85rem] leading-[2.05] text-ink-faint">
              {fit.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
