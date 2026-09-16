import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { plansPhotos } from "@/components/sections/plans/photos";
import type { PlansLink, PlansPhotoKey } from "@/content/plans";
import { cn } from "@/lib/cn";

/**
 * 02 / 03　プランごとの詳しい内容。/plans/ 専用。
 *
 * 1週間プラン（plans.week）と1ヶ月プラン（plans.month）で同じ部品を使います。
 * 並べる順番は「プラン名 → 料金 → 滞在先 → 何をする1週間・1ヶ月か → 受け入れの条件」です
 * （指示書12: プラン名 → 滞在期間 → 料金 → 内容）。
 *
 * ⚠ 曜日別のスケジュールは書きません。過ごし方の全文は /life/ の担当です（指示書6・18）。
 *   このセクションは概要までにして、末尾のリンクで /life/ へ送ります。
 * ⚠ 金額は目立たせますが、大きくしすぎません（指示書12）。
 *
 * ■ 文章 … src/content/plans.ts の week / month
 * ■ 写真 … src/components/sections/plans/photos.ts の対応表
 *   ※ 三津浜の宿の写真は素材にありません。1週間プランには畑の写真を当てています
 *     （宿の写真としては使っていません。追加撮影推奨・pending-facts C-1）。
 */

/** 1ヶ月プランだけが持つ「部屋の変更（相談可）」のブロック */
export type PlanRoomChange = {
  title: string;
  text: string;
  extraLabel: string;
  /** 追加料金。src/config/site.ts の price.plans.upgrade と揃えてください */
  extra: string;
  extraNote: string;
  note: string;
};

export type PlansPlanContent = {
  index: string;
  label: string;
  title: string;
  price: string;
  priceUnit: string;
  priceNote: string;
  stayLabel: string;
  stay: string;
  photo: PlansPhotoKey;
  paragraphs: readonly string[];
  conditionsTitle: string;
  conditions: readonly string[];
  room?: PlanRoomChange;
  link: PlansLink;
};

type PlansPlanProps = {
  /** ページ内リンク（比較表の「詳しい内容」）の飛び先になります */
  id: string;
  content: PlansPlanContent;
  /** セクションの背景。上下のセクションと交互になるように指定します */
  tone?: "paper" | "cream";
};

export function PlansPlan({ id, content, tone = "paper" }: PlansPlanProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 py-16 md:scroll-mt-20 md:py-32",
        tone === "paper" ? "bg-paper" : "bg-cream",
      )}
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-16">
          {/* 左: 見出し・料金・滞在先・写真 */}
          <div className="md:col-span-5">
            <SectionHeading
              index={content.index}
              label={content.label}
              title={content.title}
            />

            {/* 料金 */}
            <div className="reveal mt-8 border-y border-sand py-6">
              <p className="label-en text-[0.6rem] text-ink-faint">Price</p>
              <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <span className="numeral whitespace-nowrap text-[2rem] leading-[1.1] text-clay md:text-[2.4rem]">
                  {content.price}
                </span>
                <span className="heading-jp text-[1rem] text-ink md:text-[1.1rem]">
                  {content.priceUnit}
                </span>
                <span className="text-[0.8rem] text-ink-faint">
                  / {content.priceNote}
                </span>
              </p>
            </div>

            {/* 滞在先 */}
            <p className="reveal mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="shrink-0 text-[0.72rem] tracking-[0.12em] text-ink-faint">
                {content.stayLabel}
              </span>
              <span className="text-[0.9rem] leading-[1.9] text-soil">
                {content.stay}
              </span>
            </p>

            <Photo
              image={plansPhotos[content.photo]}
              ratio="3 / 2"
              sizes="(min-width: 768px) 36vw, 100vw"
              className="reveal mt-10"
            />
          </div>

          {/* 右: どんな滞在になるか ＋ 条件 */}
          <div className="md:col-span-6 md:col-start-7 md:pt-4">
            <div className="reveal space-y-6 text-[0.95rem] leading-[2.1] text-ink-soft">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 受け入れの条件。あとから「そうだったのか」を作らないための位置です */}
            <div className="reveal mt-10 border-t border-sand pt-8 md:mt-12">
              <h3 className="heading-item text-ink">
                {content.conditionsTitle}
              </h3>
              <ul className="mt-5">
                {content.conditions.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-b border-sand py-3.5 text-[0.875rem] leading-[2] text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.95em] h-px bg-clay/50"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 部屋の変更（1ヶ月プランだけ）。
                ⚠ 三津浜の写真・周辺環境・今市との比較は書きません（pending-facts C 章）。 */}
            {content.room ? (
              <div className="reveal mt-10 bg-paper px-6 py-7 md:px-8 md:py-8">
                <h3 className="heading-item text-ink">{content.room.title}</h3>
                <p className="mt-4 text-[0.9rem] leading-[2.05] text-ink-soft">
                  {content.room.text}
                </p>

                <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-sand pt-5">
                  <span className="shrink-0 text-[0.72rem] tracking-[0.12em] text-ink-faint">
                    {content.room.extraLabel}
                  </span>
                  <span className="numeral text-[1.1rem] leading-[1.5] text-clay md:text-[1.25rem]">
                    {content.room.extra}
                  </span>
                  <span className="text-[0.75rem] text-ink-faint">
                    （{content.room.extraNote}）
                  </span>
                </p>

                <p className="mt-4 text-[0.8rem] leading-[2] text-ink-faint">
                  {content.room.note}
                </p>
              </div>
            ) : null}

            <div className="reveal mt-9">
              <TextLink href={content.link.href}>{content.link.label}</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
