import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 04「農と食が、少し近くなる。」（ブランド編集指示 6. 農と食）
 *
 * ⚠ 無肥料栽培の背景・方法・農業の課題は、このページでは説明しません（→ /owner/）。
 * ⚠ 収穫は確約しません（松井さんFB①・F5）。
 *   「時期や畑の状況が合えば」を外したり、注意書きのように強めたりしないでください。
 * ⚠ 作物・キッチンの設備・食費のことは書きません（→ /life/ ・/plans/）。
 *
 * ■ 文章 … src/content/about.ts の food
 * ■ 写真 … expFood（採れた野菜の食事）／expHarvest（収穫したみかん）
 *
 * ★ 追加撮影推奨：食卓・自炊の場面（共用キッチンで切っている手元、盛り付けた皿）。
 */
export function AboutFood() {
  return (
    <section
      id={about.food.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-6">
            <SectionHeading
              index={about.food.index}
              label={about.food.label}
              title={about.food.title}
            />

            <div className="reveal mt-9 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-12 md:text-[1rem]">
              {about.food.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* 写真2枚。大きさを変えて、均等なカードにしません */}
          <div className="grid grid-cols-2 items-start gap-4 md:col-span-5 md:col-start-8 md:grid-cols-5 md:gap-6">
            <Photo
              image={images.expFood}
              ratio="3 / 2"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal col-span-2 md:col-span-5"
            />
            <Photo
              image={images.expHarvest}
              ratio="1 / 1"
              sizes="(min-width: 768px) 18vw, 48vw"
              className="reveal col-span-1 md:col-span-3 md:col-start-3"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
