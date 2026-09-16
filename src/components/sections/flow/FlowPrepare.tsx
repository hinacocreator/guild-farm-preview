import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { flow } from "@/content/flow";

/**
 * 04　滞在前に確認しておきたいこと。/flow/ 専用（旧 FlowPacking の後継）。
 *
 * 「用意されているもの」と「自分で用意するもの」の2つに分けています。
 *
 * ⚠ 設備は**短く**。部屋・共用部・周辺環境の詳細は /plans/ の担当なので、
 *   ここは4項目だけにしてリンクで送っています（設備の再掲をしないため）。
 * ⚠ 「用意されているもの」は**今市シェアハウス（1ヶ月プランの滞在先）の設備**です。
 *   三津浜エリアの宿（1週間プランの滞在先）の設備は確認できていません
 *   （docs/pending-facts.md C-2）。今市の設備を三津浜にも当てはめないでください。
 * ⚠ 持ち物は FACTS v2「来る準備」にあるものだけです。枚数・点数は資料にないため書きません。
 *
 * ■ 文章 … src/content/flow.ts の prepare
 * ■ 写真 … aboutSoil（土のついた作業靴）
 */
export function FlowPrepare() {
  const { provided, own } = flow.prepare;
  const groups = [own.must, own.nice];

  return (
    <section
      id="prepare"
      className="scroll-mt-16 bg-paper py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={flow.prepare.index}
              label={flow.prepare.label}
              title={flow.prepare.title}
            />
            <p className="reveal mt-7 text-[0.95rem] leading-[2.05] text-ink-soft">
              {flow.prepare.lead}
            </p>

            <Photo
              image={images.aboutSoil}
              ratio="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            {/* 用意されているもの（設備は短く。詳細は /plans/ へ） */}
            <div className="reveal border-t border-sand pt-6">
              <p className="text-[0.8rem] tracking-[0.08em] text-clay">
                {provided.label}
              </p>
              <p className="mt-4 text-[0.85rem] leading-[2] text-ink-faint">
                {provided.note}
              </p>
              <ul className="mt-4 space-y-2.5">
                {provided.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-sand pb-2.5 text-[0.875rem] leading-[1.95] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.8rem] leading-[2] text-ink-faint">
                {provided.unknown}
              </p>
              <p className="mt-5">
                <TextLink href={provided.link.href}>
                  {provided.link.label}
                </TextLink>
              </p>
            </div>

            {/* 自分で用意するもの */}
            <div className="reveal mt-12 border-t border-sand pt-6 md:mt-14">
              <p className="text-[0.8rem] tracking-[0.08em] text-clay">
                {own.label}
              </p>

              {groups.map((group) => (
                <div key={group.label} className="mt-6">
                  <p className="text-[0.8rem] tracking-[0.06em] text-ink-faint">
                    {group.label}
                  </p>
                  <ul className="mt-3.5 flex flex-wrap gap-x-3 gap-y-2.5">
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

              <p className="mt-8 text-[0.85rem] leading-[2.05] text-ink-soft">
                {own.note}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
