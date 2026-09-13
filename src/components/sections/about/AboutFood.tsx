import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { about } from "@/content/about";

/**
 * ABOUT 05「採れたものを、その日に食べる。」（設計書 A-06）
 *
 * このページで最も写真が主役になるセクションです。
 * ⚠ 作物は資料にある「米」「季節の野菜」までにしています
 *   （柑橘・さつまいもは写真のaltにあるだけなので、本文には書きません）。
 * ⚠ 食事の実費・キッチンの設備は /plans/ の担当なので、ここには書きません。
 *
 * ■ 文章 … src/content/about.ts の food
 * ■ 写真 … expFood（採れた野菜の食事）／dayDinner（屋外の食卓）／expHarvest（みかん）
 *
 * ★ 追加撮影推奨：食卓・自炊の場面（共用キッチンで切っている手元、盛り付けた皿、
 *   誰かと食べている場面）。既存の食の写真は2枚しかありません。
 */
export function AboutFood() {
  return (
    <section
      id="food"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={about.food.index}
            label={about.food.label}
            title={about.food.title}
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
            {about.food.sub}
          </p>
        </div>

        {/* 写真3枚。大きさを変えて、均等なカードにしません */}
        <div className="mt-12 grid grid-cols-2 items-start gap-4 md:mt-16 md:grid-cols-12 md:gap-8">
          <Photo
            image={images.expFood}
            ratio="3 / 2"
            sizes="(min-width: 768px) 55vw, 100vw"
            className="reveal col-span-2 md:col-span-7"
          />
          <Photo
            image={images.dayDinner}
            ratio="4 / 5"
            sizes="(min-width: 768px) 30vw, 48vw"
            className="reveal md:col-span-4 md:mt-14"
          />
          <Photo
            image={images.expHarvest}
            ratio="1 / 1"
            sizes="(min-width: 768px) 22vw, 48vw"
            className="reveal md:col-span-3 md:col-start-9 md:mt-8"
          />
        </div>

        <div className="reveal mt-12 max-w-[46em] space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft md:mt-16 md:text-[1rem]">
          {about.food.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
