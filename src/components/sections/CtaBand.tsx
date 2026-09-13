import { CtaButton } from "@/components/ui/CtaButton";
import { copy } from "@/content/copy";

/** ページ中盤に置く、控えめな問い合わせ導線。 */
export function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="reveal flex flex-col items-start gap-7 border-y border-sand py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <h2 className="text-[1.2rem] leading-[1.8] text-ink md:text-[1.45rem]">
              {copy.ctaBand.title}
            </h2>
            <p className="mt-3 max-w-lg text-[0.875rem] leading-[2] text-ink-soft">
              {copy.ctaBand.text}
            </p>
          </div>
          <CtaButton variant="outline" className="shrink-0">
            {copy.ctaBand.cta}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
