import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 05「地域の人と出会う。」（ブランド編集指示 7. 地域の人との出会い）
 *
 * ⚠ 資料にない人物・交流エピソードを追加しないでください。
 * ⚠ 体験先の農家さん・集落・シェアハウスのオーナーの個人名と屋号は書きません。
 * ⚠ 滞在中に会う人の顔ぶれや、共用部での距離感は /life/ の担当です。
 *
 * ■ 文章 … src/content/about.ts の people
 * ■ 写真 … expPeople（畑に立つ地域の人と滞在者）／dayEvening（夕方の畑で地域の人と）
 *
 * ※ 以前ここに置いていた journal[3]（地域の子どもが写る写真。掲載許諾が未確認）は、
 *   写真の枚数を絞るタイミングで外しています（docs/pending-facts.md B-5）。
 */
export function AboutPeople() {
  return (
    <section
      id={about.people.id}
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={about.people.index}
              label={about.people.label}
              title={about.people.title}
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {about.people.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 items-start gap-4 md:col-span-5 md:col-start-8 md:gap-6">
            <Photo
              image={images.expPeople}
              ratio="4 / 5"
              sizes="(min-width: 768px) 20vw, 48vw"
              className="reveal"
            />
            <Photo
              image={images.dayEvening}
              ratio="4 / 5"
              sizes="(min-width: 768px) 20vw, 48vw"
              className="reveal mt-8 md:mt-14"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
