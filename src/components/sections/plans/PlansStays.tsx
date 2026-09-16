import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { plansPhotos } from "@/components/sections/plans/photos";
import type { Stay, StayBlock, StayPhoto } from "@/content/plans";
import { plans } from "@/content/plans";

/**
 * 04　暮らす場所。/plans/ 専用（旧 PlansHouse / PlansEnvironment / PlansFields の後継）。
 *
 * ■ この部品の考え方
 *   滞在先を「配列」で受け取って、同じ順番・同じ見出しで描画します。
 *   いま情報がそろっているのは今市シェアハウスだけですが、
 *   三津浜の宿の写真・設備が届いたら src/content/plans.ts に書き足すだけで、
 *   2か所を同じ切り口（個室 → 共用部 → 仕事環境 → 周辺 → 畑へのアクセス）で
 *   並べて比較できるようになります。
 *
 * ■ いちばん大事なルール
 *   **値のない項目は、その項目ごと描画しません。**
 *   空欄も、「準備中」「確認中」のような表示も出しません。
 *   だから三津浜の宿は、いま確定している事実（facts）だけの短いブロックになります。
 *
 * ⚠ 今市シェアハウスの写真を、三津浜の宿の写真として使ってはいけません。
 *   写真は src/components/sections/plans/photos.ts の対応表だけで決まります。
 *
 * ■ 並び順（「ここでどう暮らすのか」が分かる順番）
 *   外観 → 個室 → 共用部 → 仕事環境 → 周辺（＋所在地）→ 畑へのアクセス
 *
 * ⚠ 位置関係の模式図（AccessMap）は /life/ に置いています。
 *   このページでは所要時間の一覧だけにして、図は /life/ へのリンクで送ります
 *   （同じ図を2ページに置くと、直すときに片方だけ古くなるため）。
 *
 * ■ 文章 … src/content/plans.ts の stays
 */

/** 小見出し（個室・共用部…）の共通スタイル */
function BlockHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="heading-item text-ink">
      <span className="mr-3 inline-block h-px w-5 translate-y-[-0.3em] bg-clay/60 align-middle" />
      {children}
    </h4>
  );
}

/**
 * 写真＋見出し＋説明。写真がないときは呼ばれません。
 * level … 見出しの段階。滞在先の直下（外観）は h4、小見出しの中は h5 にします
 *         （h3 → h5 のように段を飛ばさないため）。
 */
function StayPhotos({
  photos,
  columns,
  level,
}: {
  photos: readonly StayPhoto[];
  columns: 1 | 2;
  level: 4 | 5;
}) {
  const Heading = level === 4 ? "h4" : "h5";
  return (
    <div
      className={
        columns === 2
          ? "mt-7 grid grid-cols-2 items-start gap-x-4 gap-y-7 md:gap-x-6 md:gap-y-9"
          : "mt-7"
      }
    >
      {photos.map((photo) => (
        <figure key={photo.key} className="reveal">
          <Photo
            image={plansPhotos[photo.key]}
            ratio="4 / 5"
            ratioMobile={columns === 1 ? "3 / 2" : undefined}
            sizes={
              columns === 2
                ? "(min-width: 768px) 26vw, 46vw"
                : "(min-width: 768px) 54vw, 100vw"
            }
          />
          <figcaption className="mt-3.5 max-w-[26em]">
            <Heading className="heading-item text-[0.95rem] text-ink">
              {photo.title}
            </Heading>
            <p className="mt-1.5 text-[0.82rem] leading-[1.95] text-ink-soft">
              {photo.text}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** 個室・共用部・仕事環境・周辺。中身のない項目は呼び出し側で省きます */
function StayBlockView({
  block,
  columns = 2,
}: {
  block: StayBlock;
  columns?: 1 | 2;
}) {
  return (
    <div className="reveal mt-12 border-t border-sand pt-8 md:mt-16">
      <BlockHeading>{block.title}</BlockHeading>

      {block.paragraphs ? (
        <div className="mt-4 max-w-[42em] space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {block.items ? (
        <ul className="mt-7 md:grid md:grid-cols-2 md:gap-x-12">
          {block.items.map((item) => (
            <li
              key={item}
              className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-b border-sand py-3 text-[0.85rem] leading-[1.95] text-ink-soft"
            >
              <span aria-hidden="true" className="mt-[0.95em] h-px bg-clay/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {block.photos ? (
        <StayPhotos photos={block.photos} columns={columns} level={5} />
      ) : null}
    </div>
  );
}

function StayView({ stay }: { stay: Stay }) {
  return (
    <article className="border-t-2 border-clay/40 pt-8 md:pt-10">
      {/* 滞在先の名前・エリア・どのプランの滞在先か */}
      <header className="reveal flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <div>
          <h3 className="heading-jp text-[1.3rem] leading-[1.6] text-ink md:text-[1.55rem]">
            {stay.name}
          </h3>
          <p className="mt-2 text-[0.82rem] leading-[1.9] text-ink-faint">
            {stay.area}
          </p>
        </div>
        <p className="shrink-0 text-[0.78rem] tracking-[0.1em] text-soil">
          {stay.usedBy}
        </p>
      </header>

      {stay.lead ? (
        <div className="reveal mt-7 max-w-[42em] space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft">
          {stay.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {/* 外観など、全体が分かる写真 */}
      {stay.photos ? (
        <StayPhotos photos={stay.photos} columns={1} level={4} />
      ) : null}

      {stay.rooms ? <StayBlockView block={stay.rooms} columns={1} /> : null}
      {stay.facilities ? <StayBlockView block={stay.facilities} /> : null}
      {stay.work ? <StayBlockView block={stay.work} columns={1} /> : null}

      {/* 周辺（＋所在地） */}
      {stay.surroundings ? (
        <div className="reveal mt-12 border-t border-sand pt-8 md:mt-16">
          <BlockHeading>{stay.surroundings.title}</BlockHeading>
          {stay.surroundings.paragraphs ? (
            <div className="mt-4 max-w-[42em] space-y-5 text-[0.9rem] leading-[2.05] text-ink-soft">
              {stay.surroundings.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {/* 住所は src/config/site.ts の location.address が正の値です */}
          {stay.address ? (
            <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.78rem] tracking-[0.08em] text-ink-faint">
              <span className="text-[0.72rem]">所在地</span>
              <span>{stay.address}</span>
            </p>
          ) : null}
        </div>
      ) : null}

      {/* 畑へのアクセス（所要時間の短い一覧） */}
      {stay.access ? (
        <div className="reveal mt-12 border-t border-sand pt-8 md:mt-16">
          <BlockHeading>{stay.access.title}</BlockHeading>
          {stay.access.lead ? (
            <p className="mt-4 max-w-[42em] text-[0.9rem] leading-[2.05] text-ink-soft">
              {stay.access.lead}
            </p>
          ) : null}

          <ul className="mt-7 border-t border-sand">
            {stay.access.items.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-1 border-b border-sand py-4 md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <span className="text-[0.9rem] leading-[1.8] text-ink">
                  {item.name}
                  <span className="ml-3 text-[0.78rem] text-ink-faint">
                    {item.area}
                  </span>
                </span>
                <span className="shrink-0 text-[0.85rem] leading-[1.8] text-soil">
                  {item.access}
                </span>
              </li>
            ))}
          </ul>

          {stay.access.note ? (
            <p className="mt-5 text-[0.8rem] leading-[2] text-ink-faint">
              {stay.access.note}
            </p>
          ) : null}
          {stay.access.link ? (
            <div className="mt-7">
              <TextLink href={stay.access.link.href}>
                {stay.access.link.label}
              </TextLink>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* 確定している事実だけの一覧（写真や設備の情報がまだない滞在先） */}
      {stay.facts ? (
        <ul className="reveal mt-7">
          {stay.facts.map((fact) => (
            <li
              key={fact}
              className="grid grid-cols-[0.85rem_1fr] gap-x-3 border-b border-sand py-3.5 text-[0.9rem] leading-[2] text-ink-soft"
            >
              <span aria-hidden="true" className="mt-[0.95em] h-px bg-clay/50" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {stay.suitedFor ? (
        <p className="reveal mt-7 max-w-[42em] text-[0.9rem] leading-[2.05] text-soil">
          {stay.suitedFor}
        </p>
      ) : null}
    </article>
  );
}

export function PlansStays() {
  return (
    <section
      id="stays"
      className="scroll-mt-16 bg-paper py-16 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              index={plans.stays.index}
              label={plans.stays.label}
              title={plans.stays.title}
            />
          </div>
          <p className="reveal text-[0.95rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
            {plans.stays.lead}
          </p>
        </div>

        <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
          {plans.stays.items.map((stay) => (
            <StayView key={stay.id} stay={stay} />
          ))}
        </div>
      </Container>
    </section>
  );
}
