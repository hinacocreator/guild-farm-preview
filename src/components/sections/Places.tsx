import { copy } from "@/content/copy";

/**
 * PLACES（体験の場所・3か所）。
 *
 * ※ これは単独のセクションではなく、SCHEDULE（Schedule.tsx）の下部に
 *   置くブロックです。Container の中に差し込まれるので、
 *   このファイルでは左右の余白（Container）を付けていません。
 *   場所を移したいときは Schedule.tsx の <Places /> を動かしてください。
 *
 * ・文章 … src/content/copy.ts の places
 * ・住所は町名までにしています（番地は書きません）。
 * ・所要時間は目安です。畑の持ち主の名前は書きません。
 */
export function Places() {
  return (
    <div
      id="places"
      className="mt-24 scroll-mt-20 border-t border-sand pt-14 md:mt-32 md:pt-20"
    >
      <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-16">
        <div className="md:col-span-5">
          <p className="label-en reveal text-[0.62rem] text-ink-faint">
            {copy.places.label}
          </p>
          <h3 className="heading-jp reveal mt-4 text-[1.5rem] text-ink md:text-[1.9rem]">
            {copy.places.title}
          </h3>
        </div>
        <p className="reveal text-[0.9rem] leading-[2.05] text-ink-soft md:col-span-6 md:col-start-7">
          {copy.places.lead}
        </p>
      </div>

      {/* 3か所。罫線だけで区切り、面は塗りません */}
      <ol className="mt-12 md:mt-16">
        {copy.places.items.map((place, i) => (
          <li
            key={place.name}
            className="reveal grid gap-x-8 gap-y-3 border-t border-sand py-8 md:grid-cols-12 md:py-10"
          >
            <div className="flex items-baseline gap-4 md:col-span-4">
              <span className="numeral shrink-0 text-[0.8rem] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="heading-item text-ink">{place.name}</h4>
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
        {copy.places.note}
      </p>
    </div>
  );
}
