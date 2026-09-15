import { AccessMap } from "@/components/ui/AccessMap";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { life } from "@/content/life";

/**
 * /life/ 03 場所について。
 *
 * 松井さんフィードバック①（F3・F4）と、ブランド編集指示（2026-09-16）で新設した章です。
 * 旧 LifeFarm の中に埋まっていた「体験の場所3か所」と位置関係の模式図を、
 * ここへ移しました。
 *
 * ⚠ この章は「畑に行く日の、1日。」（LifeDay）の**直後**に置きます。
 *   1日の流れを読んだすぐあとで、どこで暮らし・どこへ出かけるのかが分かるようにするためです。
 *   順番を変えるときは docs/life-inventory.md も直してください。
 *
 * ■ この章のつくり
 *   1. 暮らす場所（今市シェアハウス）
 *   2. 農に触れる場所（道後の畑 → GUILD Farmの畑 → 島の自然農園。近い順）
 *   3. 位置関係の模式図（AccessMap）
 *   地名を並べるだけにせず、「道後エリアの家で暮らし、畑へは日帰りで出かける」という
 *   関係が、リードの文章でも分かるようにしています。
 *
 * ⚠ 暮らす場所として書くのは今市シェアハウスだけです。
 *   1週間滞在の宿（三津浜エリア）は 01 最初の1週間の note に書いてあります。
 *   部屋の広さ・設備の一覧・グレードアップは /plans/ の担当です。
 * ⚠ 番地・農家さんやオーナーの名前・島の農園の屋号は書きません。所要時間は「目安」と添えます。
 * ⚠ 独立ページ（/places/）は作りません。ナビ項目も増やしません。
 *
 * ■ 文章 … src/content/life.ts の places
 * ■ 写真 … src/config/images.ts の expNature
 *          ※ シェアハウスの外観・室内の写真は /plans/ で使っています（house）。
 *            この章では暮らす範囲の風景を1枚だけ添えています。
 *          ※ 体験場所3か所それぞれの写真は素材にありません（追加撮影推奨）。
 */
export function LifePlaces() {
  const { home, fields } = life.places;

  return (
    <section
      id="places"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={life.places.index}
            label={life.places.label}
            title={life.places.title}
          />
          <div className="reveal mt-8 space-y-5 text-[0.95rem] leading-[2.05] text-ink-soft">
            {life.places.lead.map((paragraph) => (
              <p key={paragraph} className="wrap-phrase">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 1. 暮らす場所 */}
        <div className="mt-14 grid gap-8 border-t border-sand pt-12 md:mt-24 md:grid-cols-12 md:gap-14 md:pt-16">
          <div className="md:col-span-5">
            <p className="label-en reveal text-[0.62rem] text-clay">
              {home.kicker}
            </p>
            <h3 className="heading-jp wrap-phrase reveal mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.6rem]">
              {home.name}
            </h3>
            <p className="reveal mt-2 text-[0.78rem] tracking-[0.06em] text-ink-faint">
              {home.area}
            </p>

            <Photo
              image={images.house[4]} /* 外観（house-05・3:2）。暮らす場所の写真として */
              ratio="3 / 2"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="reveal mt-8 md:mt-10"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="reveal space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {home.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="reveal mt-7">
              <TextLink href={home.link.href}>{home.link.label}</TextLink>
            </div>
          </div>
        </div>

        {/* 2. 農に触れる場所 ＋ 3. 位置関係の模式図 */}
        <div className="mt-14 border-t border-sand pt-12 md:mt-24 md:pt-16">
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-14">
            <div className="md:col-span-5">
              <p className="label-en reveal text-[0.62rem] text-clay">
                {fields.kicker}
              </p>
              <h3 className="heading-jp wrap-phrase reveal mt-4 text-[1.3rem] leading-[1.6] text-ink md:text-[1.6rem]">
                {fields.title}
              </h3>
            </div>
            <p className="reveal text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
              {fields.lead}
            </p>
          </div>

          {/* 位置関係の模式図（F4）。
              「畑が家のすぐ隣にある」と読まれないよう、一覧の前に置いています。 */}
          <div className="reveal mt-10 md:mt-14 md:max-w-[28rem]">
            <AccessMap content={life.places.map} />
          </div>

          <ol className="mt-10 md:mt-14">
            {fields.items.map((place, i) => (
              <li
                key={place.name}
                className="reveal grid gap-x-8 gap-y-3 border-t border-sand py-8 md:grid-cols-12 md:py-10"
              >
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="numeral shrink-0 text-[0.8rem] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="heading-item wrap-phrase text-ink">
                      {place.name}
                    </h4>
                    <p className="mt-1.5 text-[0.78rem] tracking-[0.06em] text-ink-faint">
                      {place.area}
                    </p>
                  </div>
                </div>

                <p className="pl-8 text-[0.82rem] leading-[1.9] text-soil md:col-span-3 md:pl-0">
                  {place.access}
                </p>

                <p className="pl-8 text-[0.85rem] leading-[2] text-ink-soft md:col-span-5 md:pl-0">
                  {place.text}
                </p>
              </li>
            ))}
          </ol>

          <p className="reveal border-t border-sand pt-6 text-[0.78rem] leading-[2] text-ink-faint">
            {fields.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
