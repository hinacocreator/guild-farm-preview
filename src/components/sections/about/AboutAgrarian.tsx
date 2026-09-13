import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 02「農的暮らしと呼んでいるもの。」（設計書 A-03）
 *
 * 「農的暮らし」という言葉の中身を、生活の場面で説明します。
 * 2段落目が「具体的には」で始まるのが大事なところです（言葉の定義で終わらせない）。
 *
 * ■ 文章 … src/content/about.ts の agrarian
 * ■ 写真 … expFarmwork（採れたばかりの葉物）／expSeason（手のひらの玄米）
 */
export function AboutAgrarian() {
  return (
    <section
      id="agrarian"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={about.agrarian.index}
              label={about.agrarian.label}
              title={about.agrarian.title}
            />
            <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
              {about.agrarian.sub}
            </p>

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {about.agrarian.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 写真2枚。段差をつけて、カタログのように並べません */}
          <div className="grid grid-cols-2 gap-4 md:col-span-5 md:col-start-8 md:grid-cols-1 md:gap-8">
            <Photo
              image={images.expFarmwork}
              ratio="4 / 5"
              sizes="(min-width: 768px) 38vw, 48vw"
              className="reveal"
            />
            <Photo
              image={images.expSeason}
              ratio="1 / 1"
              sizes="(min-width: 768px) 28vw, 48vw"
              className="reveal self-end md:ml-16"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
