import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";

/**
 * H-02 GUILD Farmとは（短）。HOME専用の短縮版です。
 *
 * 「宿でも農業体験ツアーでもない」を3段落で決着させ、続きは /about/ に渡します。
 * 3段落目が「豊かさの話」から「少し長い話」への橋渡しです。
 *
 * ■ 文章 … src/content/home.ts の intro
 * ■ 写真 … src/config/images.ts の aboutField（1枚だけ、大きく）
 *
 * ※ 同じ話題の全文は /about/（A-01）にあります。ここを長くしないでください。
 */
export function HomeIntro() {
  return (
    <section id="intro" className="bg-paper py-20 md:py-36">
      <Container width="narrow">
        <SectionHeading
          index={home.intro.index}
          label={home.intro.label}
          title={home.intro.title}
        />

        <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
          {home.intro.sub}
        </p>
      </Container>

      {/* 写真は1枚だけ。スマホでは画面いっぱい、PCでは角丸で内側に収めます */}
      <div className="mt-10 md:mt-16">
        <div className="mx-auto max-w-[1400px] md:px-10">
          <Photo
            image={images.aboutField}
            ratio="3 / 2"
            sizes="100vw"
            corners="none"
            className="reveal md:rounded-[1.25rem]"
          />
        </div>
      </div>

      <Container width="narrow">
        <div className="reveal mt-10 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-16 md:text-[1rem]">
          {home.intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="reveal mt-10 md:mt-12">
          <TextLink href={home.intro.link.href} size="lg">
            {home.intro.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
