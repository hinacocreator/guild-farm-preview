import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { flow } from "@/content/flow";
import { cn } from "@/lib/cn";

/**
 * F-03　持ってくるもの。/flow/ 専用。
 *
 * 「必ず必要」と「あると良いもの」の2つに分けて、資料にあるものだけを並べています。
 * ⚠ 衣類の枚数は資料にないため書きません（乾燥機があるという事実の範囲に留めています）。
 *
 * ■ 文章 … src/content/flow.ts の packing
 * ■ 写真 … aboutSoil（土のついた作業靴）
 */
export function FlowPacking() {
  const groups = [flow.packing.must, flow.packing.nice];

  return (
    <section
      id="packing"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={flow.packing.index}
              label={flow.packing.label}
              title={flow.packing.title}
            />
            <p className="reveal mt-7 text-[0.95rem] leading-[2.05] text-ink-soft">
              {flow.packing.lead}
            </p>

            <Photo
              image={images.aboutSoil}
              ratio="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            {groups.map((group, i) => (
              <div
                key={group.label}
                className={cn(
                  "reveal border-t border-sand pt-6",
                  i === 1 && "mt-10 md:mt-12",
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

            <p className="reveal mt-10 text-[0.85rem] leading-[2.05] text-ink-soft md:mt-12">
              {flow.packing.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
