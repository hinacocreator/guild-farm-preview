import { AccessMap } from "@/components/ui/AccessMap";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { plans } from "@/content/plans";

/**
 * P-08　通う畑は、3か所。/plans/ 専用。
 *
 * 検討段階で「どこへ行くのか」が分かるように、場所と所要時間だけを一覧にしています。
 * 畑で何をするか（全文）は /life/ の担当なので、ここには書きません。
 *
 * ⚠ 所要時間の起点（道後からか、市街地からか）は資料にないため
 *   「目安です」と添えています。個人名・屋号は書きません。
 *
 * ■ 文章 … src/content/plans.ts の fields
 * ■ 写真 … aboutField（耕したばかりの畑）を1枚だけ
 */
export function PlansFields() {
  return (
    <section
      id="fields"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.fields.index}
              label={plans.fields.label}
              title={plans.fields.title}
            />
            <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
              {plans.fields.sub}
            </p>

            <Photo
              image={images.aboutField}
              ratio="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10"
            />

            {/* 位置関係の模式図（松井さんFB①・F4）。
                「畑が滞在先のすぐ近くにある」と読まれないように置いています。 */}
            <AccessMap content={plans.fields.map} className="reveal mt-8" />
          </div>

          <ul className="md:col-span-6 md:col-start-7 md:pt-4">
            {plans.fields.items.map((field, i) => (
              <li
                key={field.name}
                className="reveal grid grid-cols-[2.25rem_1fr] gap-x-4 border-t border-sand py-5 first:border-t-0 first:pt-0 md:grid-cols-[3.5rem_1fr] md:gap-x-6 md:py-8"
              >
                <span className="numeral pt-1 text-[0.85rem] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="heading-item text-ink">{field.name}</h3>
                  <p className="mt-2 text-[0.8rem] leading-[1.9] text-ink-faint">
                    {field.area}
                  </p>
                  <p className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.875rem] leading-[2] text-soil">
                    <span>{field.access}</span>
                    <span aria-hidden="true" className="h-px w-5 bg-sand" />
                    <span className="text-ink-soft">{field.note}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-14 flex flex-col gap-7 border-t border-sand pt-8 md:mt-20 md:flex-row md:items-center md:justify-between md:gap-12">
          <p className="max-w-[38em] text-[0.8rem] leading-[2] text-ink-faint">
            {plans.fields.note}
          </p>
          <TextLink href={plans.fields.link.href} className="shrink-0">
            {plans.fields.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
