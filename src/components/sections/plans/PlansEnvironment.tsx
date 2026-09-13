import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { plans } from "@/content/plans";

/**
 * P-09 / P-10　仕事の環境と、周辺。/plans/ 専用。
 *
 * リモートで働く人と、車を持たない人の判断材料です。
 * ⚠ 回線の速度は計測されていないため、数値は書きません（書けないと正直に書く）。
 *   駅名・道後温泉や空港からの距離も資料にないため書きません。
 *
 * ■ 文章 … src/content/plans.ts の environment
 * ■ 写真 … dayWork（窓際に机を置いた部屋）
 *   ※ 周辺（商店街・海・三津浜の町）の写真は素材にありません（追加撮影推奨）。
 */
export function PlansEnvironment() {
  return (
    <section
      id="environment"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-6">
            <SectionHeading
              index={plans.environment.index}
              label={plans.environment.label}
              title={plans.environment.title}
            />
            <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
              {plans.environment.sub}
            </p>

            <div className="reveal mt-8 space-y-6 text-[0.9rem] leading-[2.1] text-ink-soft">
              {plans.environment.work.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Photo
              image={images.dayWork}
              ratio="4 / 5"
              ratioMobile="3 / 2"
              sizes="(min-width: 768px) 38vw, 100vw"
              className="reveal"
            />

            {/* 周辺環境（車がなくても暮らせるか） */}
            <div className="reveal mt-10 border-t border-sand pt-8">
              <h3 className="heading-jp text-[1.15rem] text-ink md:text-[1.3rem]">
                {plans.environment.around.title}
              </h3>
              <div className="mt-5 space-y-5 text-[0.9rem] leading-[2.1] text-ink-soft">
                {plans.environment.around.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
