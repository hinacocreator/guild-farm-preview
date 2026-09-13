import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 06「約束をしなくても、人と会う。」（設計書 A-07）
 *
 * 「人が財産の場所」だと伝えつつ、人付き合いが苦手な人を安心させるのが役割です。
 * 2段落目（毎晩みんなで食卓を囲む決まりはない／距離感）を必ず残してください。
 *
 * ⚠ 体験先の農家さん・集落・シェアハウスのオーナーの個人名と屋号は書きません。
 *
 * ■ 文章 … src/content/about.ts の people
 * ■ 写真 … expPeople（畑に立つ地域の人と滞在者）／journal[3]（地域の子どもとおかき）
 *          ／dayEvening（夕方の畑で地域の人と）
 *
 * ※ journal[3] には地域の子どもが写っています。掲載許諾の確認が必要です（※要確認）。
 */
export function AboutPeople() {
  return (
    <section
      id="people"
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
            <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
              {about.people.sub}
            </p>

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {about.people.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 items-start gap-4 md:col-span-5 md:col-start-8 md:grid-cols-2 md:gap-6">
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
            <Photo
              image={images.journal[3]}
              ratio="3 / 2"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal col-span-2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
