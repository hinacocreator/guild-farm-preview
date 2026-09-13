import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * FLOW（入居までの流れ）。
 * PCでは4ステップを横並びにして、番号と番号のあいだを細い線でつないでいます。
 * スマホでは縦に並び、線も縦になります。
 *
 * 末尾に「来る前に準備するもの」（持ちもの）のブロックを置いています。
 *
 * ・文章 … src/content/copy.ts の copy.flow（steps / note / cta / prepare）。
 * ・note（「上の流れは目安です」）は、事実が確定するまで必ず残してください。
 */
export function Flow() {
  const steps = copy.flow.steps;
  const prepare = copy.flow.prepare;

  return (
    <section
      id="flow"
      className="scroll-mt-16 bg-cream py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="max-w-[880px]">
          <SectionHeading
            index={copy.flow.index}
            label={copy.flow.label}
            title={copy.flow.title}
          />
          <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
            {copy.flow.lead}
          </p>
        </div>

        <ol className="mt-16 grid gap-10 md:mt-24 md:grid-cols-4 md:gap-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <li
                key={step.step}
                className="reveal relative grid grid-cols-[2.75rem_1fr] items-start gap-x-5 md:block md:pr-8"
              >
                {/* 番号と、次のステップへつながる横線（PC） */}
                <div className="relative flex items-start md:items-center">
                  <span className="numeral mt-1.5 text-[1.9rem] leading-none text-clay md:mt-0 md:text-[2.6rem]">
                    {step.step}
                  </span>
                  {isLast ? null : (
                    <span
                      aria-hidden="true"
                      className="ml-5 hidden h-px flex-1 bg-sand md:block"
                    />
                  )}
                </div>

                {/* 次のステップへつながる縦線（スマホ） */}
                {isLast ? null : (
                  <span
                    aria-hidden="true"
                    className="absolute left-[0.7rem] top-9 -bottom-10 w-px bg-sand md:hidden"
                  />
                )}

                <div className="md:mt-7">
                  <h3 className="heading-item text-ink">{step.title}</h3>
                  <p className="mt-3 max-w-[22em] text-[0.88rem] leading-[2.05] text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-20 flex flex-col gap-8 border-t border-sand pt-12 md:mt-28 md:flex-row md:items-center md:justify-between md:gap-12">
          <p className="max-w-[38em] text-[0.8rem] leading-[2] text-ink-faint">
            {copy.flow.note}
          </p>
          <CtaButton variant="clay" className="self-start md:shrink-0">
            {copy.flow.cta}
          </CtaButton>
        </div>

        {/* 持ちもの（必ず必要 / あると良いもの）。文章は copy.flow.prepare */}
        <div className="mt-20 border-t border-sand pt-12 md:mt-28 md:pt-16">
          <div className="reveal grid gap-4 md:grid-cols-12 md:items-baseline md:gap-16">
            <h3 className="heading-jp text-[1.2rem] text-ink md:col-span-4 md:text-[1.4rem]">
              {prepare.title}
            </h3>
            <p className="text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-7 md:col-start-6">
              {prepare.lead}
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-16">
            {[prepare.must, prepare.nice].map((group, i) => (
              <div
                key={group.label}
                className={cn(
                  "reveal border-t border-sand pt-6",
                  i === 0 ? "md:col-span-5" : "md:col-span-5 md:col-start-7",
                )}
              >
                <p className="text-[0.8rem] tracking-[0.08em] text-clay">
                  {group.label}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-sand px-4 py-1.5 text-[0.85rem] text-soil"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="reveal mt-10 max-w-[38em] text-[0.8rem] leading-[2] text-ink-faint">
            {prepare.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
