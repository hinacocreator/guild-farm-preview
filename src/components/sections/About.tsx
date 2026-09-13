import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { copy } from "@/content/copy";

/**
 * INTRO（旧 About）。
 * 「旅行ではなく、暮らしてみる。」＋ 住まい／畑／仕事 の3本柱。
 * 文章は src/content/copy.ts の about を編集してください。
 */

/** 3本柱に添える線画アイコン。順番は copy.about.pillars と同じです。 */
const pillarIcons = [
  // 住まい：切妻屋根の家
  <path
    key="house"
    d="M3.5 10.6 12 4l8.5 6.6M5.8 9v10.5h12.4V9M10 19.5v-5.2h4v5.2"
  />,
  // 畑：畝
  <path
    key="farm"
    d="M2.8 18.5c2.6-1.6 5.4-2.4 9.2-2.4s6.6.8 9.2 2.4M2.8 14.4c2.6-1.6 5.4-2.4 9.2-2.4s6.6.8 9.2 2.4M12 11.4V4.2M12 7.6c-1.7 0-3-1.3-3-2.9 1.7 0 3 1.3 3 2.9Zm0 0c1.7 0 3-1.3 3-2.9-1.7 0-3 1.3-3 2.9Z"
  />,
  // 仕事：机の上のノートパソコン
  <path
    key="work"
    d="M5.6 6.5h12.8v8.2H5.6zM3 17.8h18M9.4 20.5h5.2"
  />,
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* テキスト */}
          <div className="md:col-span-5 md:pt-6">
            <SectionHeading
              index={copy.about.index}
              label={copy.about.label}
              title={copy.about.title}
            />

            <div className="reveal mt-10 space-y-6 text-[0.95rem] leading-[2.05] text-ink-soft md:text-[1rem]">
              {copy.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <p className="reveal mt-10 flex items-start gap-3 text-[0.875rem] leading-[2] text-soil">
              <LeafIcon size={20} className="mt-1.5 text-moss/70" />
              <span>{copy.about.note}</span>
            </p>
          </div>

          {/* 写真2枚（高さをずらして配置） */}
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Photo
                image={images.aboutField}
                ratio="4 / 5"
                sizes="(min-width: 768px) 26vw, 45vw"
                className="reveal md:mt-20"
              />
              <Photo
                image={images.aboutSoil}
                ratio="3 / 4"
                sizes="(min-width: 768px) 26vw, 45vw"
                className="reveal"
              />
            </div>
          </div>
        </div>

        {/* 3本柱：住まい／畑／仕事 */}
        <div className="mt-20 grid gap-px overflow-hidden border-t border-sand md:mt-32 md:grid-cols-3">
          {copy.about.pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="reveal border-b border-sand py-10 md:border-b-0 md:border-l md:px-8 md:py-12 md:first:border-l-0 md:first:pl-0"
            >
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  width={28}
                  height={28}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-moss"
                >
                  {pillarIcons[i]}
                </svg>
                <span className="numeral label-en text-[0.68rem] text-ink-faint">
                  {pillar.index} — {pillar.en}
                </span>
              </div>

              <h3 className="heading-jp mt-6 text-[1.3rem] text-ink md:text-[1.4rem]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-[2.05] text-ink-soft">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
