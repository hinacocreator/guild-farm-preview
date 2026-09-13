import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { flow } from "@/content/flow";

/**
 * F-04　場所のこと（アクセス）。/flow/ 専用。
 *
 * 滞在先2か所と、体験の場所3か所への所要時間だけを書いています。
 * ⚠ 駅名・道後温泉・松山市街地・空港からの距離や所要時間は資料にないため書きません。
 *   地図の埋め込みも、番地の掲載可否とあわせて判断するため置いていません。
 *
 * ■ 文章 … src/content/flow.ts の access
 * ■ 写真 … house[4]（外観・看板）
 */
export function FlowAccess() {
  return (
    <section
      id="access"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={flow.access.index}
              label={flow.access.label}
              title={flow.access.title}
            />
            <p className="reveal mt-7 text-[0.9rem] leading-[2] text-ink-faint">
              {flow.access.lead}
            </p>

            <Photo
              image={images.house[4]}
              ratio="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            {/* 滞在先（プランごと） */}
            <dl>
              {flow.access.stays.map((stay) => (
                <div
                  key={stay.label}
                  className="reveal border-t border-sand py-6 first:border-t-0 first:pt-0 md:py-7"
                >
                  <dt className="heading-item text-ink">{stay.label}</dt>
                  <dd className="mt-3 text-[0.9rem] leading-[2.1] text-ink-soft">
                    {stay.text}
                  </dd>
                </div>
              ))}
            </dl>

            {/* 体験の場所へ */}
            <div className="reveal mt-4 border-t border-sand pt-7">
              <h3 className="heading-item text-ink">
                {flow.access.fieldsTitle}
              </h3>
              <ul className="mt-5">
                {flow.access.fields.map((field) => (
                  <li
                    key={field.name}
                    className="flex flex-col gap-1 border-b border-sand py-3.5 text-[0.875rem] leading-[1.95] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-ink-soft">{field.name}</span>
                    <span className="shrink-0 text-soil">{field.access}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="reveal mt-8 text-[0.8rem] leading-[2] text-ink-faint">
              {flow.access.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
