import { AboutCompare } from "@/components/sections/about/AboutCompare";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 01「「農的暮らし」って、どんな暮らし？」（ブランド編集指示 3.）
 *
 * ページのなかで唯一、深緑の面になるセクションです。
 * 指定の本文（毎日農作業をすることだけが、農的暮らしではありません…）のあとに、
 * 旅行・一般的な農業体験との違いが一目で分かる比較表を置いています。
 *
 * ★ 表だけでは「結局どんな暮らしなのか」が伝わらないため、
 *   本文を表より先に置いています。順番を入れ替えないでください。
 *
 * ■ 文章 … src/content/about.ts の agrarian
 * ■ 写真 … src/config/images.ts の aboutSoil（土のついた作業靴）
 *
 * ※ 旧 AboutDifference（見るのでも、体験するのでもなく。）を置き換えたセクションです。
 *   比較表（AboutCompare）はそのまま引き継いでいます。
 */
export function AboutAgrarian() {
  return (
    <section
      id={about.agrarian.id}
      className="scroll-mt-16 bg-forest py-20 text-paper md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <SectionHeading
              index={about.agrarian.index}
              label={about.agrarian.label}
              title={about.agrarian.title}
              tone="dark"
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-paper/85 md:mt-12 md:text-[1rem]">
              {about.agrarian.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 畑は家の隣ではない、という事実を1行だけ添えています（最終回遊QA C-5） */}
            <p className="reveal mt-7 border-t border-paper/20 pt-6 text-[0.85rem] leading-[2] text-paper/65">
              {about.agrarian.note}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:mt-10">
            <Photo
              image={images.aboutSoil}
              ratio="4 / 5"
              sizes="(min-width: 768px) 30vw, 100vw"
              className="reveal"
            />
          </div>
        </div>

        {/* 旅行・一般的な農業体験との違いを、一目で見られる比較表にしています */}
        <AboutCompare />
      </Container>
    </section>
  );
}
