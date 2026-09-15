import { cn } from "@/lib/cn";

/**
 * =========================================================
 * AccessMap — 滞在先と畑の位置関係を示す模式図
 * =========================================================
 * 松井さんフィードバック①（F4）で追加した部品です。
 * 「畑が家のすぐ隣にある」と誤解されないように、滞在先を起点にして
 * それぞれの畑までの移動手段と所要時間を1枚で見せます。
 *
 * ■ 使う場所
 *   /life/ の「農」セクション（体験の場所の一覧の上）
 *   /plans/ の「畑」セクション（3か所の一覧の上）
 *   文章（地名・所要時間）は src/content/life.ts / plans.ts の accessMap から渡します。
 *
 * ■ 書かないこと（クライアント確認済みのルール）
 *   方位・縮尺・住所・番地・緯度経度は入れません。実際の経路も描きません。
 *   地図サービスの画面や地図画像の転載もしません。だから「模式図」と明記しています。
 *
 * ■ つくり
 *   ・線と着点だけをインラインSVG（viewBox付き・列の幅いっぱい）で描いています。
 *   ・地名や所要時間の文字はSVGの中ではなくHTMLです。
 *     日本語フォント（--font-jp）と折り返しをそのまま使えるようにするためで、
 *     スマホ375pxでも文字が潰れません。
 *   ・色は globals.css の @theme が出力するCSS変数（--color-sand など）を
 *     そのまま参照しています。トークンを変えれば、この図の色も変わります。
 */

/** 行き先1件ぶん */
export type AccessMapStop = {
  /** 場所の名前（例: GUILD Farmの畑） */
  name: string;
  /** 名前に添える補足（例: 梅津寺駅から徒歩約5分） */
  detail?: string;
  /** 滞在先からの移動手段と所要時間（例: 公共交通機関で約50分） */
  access: string;
  /** 主役の行き先だけ true にすると、線と着点が濃くなります */
  emphasis?: boolean;
};

export type AccessMapContent = {
  /** 図の見出し */
  title: string;
  /** 起点（滞在先） */
  origin: { name: string; detail?: string };
  stops: readonly AccessMapStop[];
  /** 図の下に置く注記。「模式図です」の一文をここに入れています */
  caption: string;
};

type AccessMapProps = {
  content: AccessMapContent;
  className?: string;
};

export function AccessMap({ content, className }: AccessMapProps) {
  const { title, origin, stops, caption } = content;

  return (
    <figure
      className={cn(
        "w-full rounded-sm border border-sand bg-paper px-5 py-7 md:px-8 md:py-9",
        className,
      )}
    >
      <p className="label-en text-[0.65rem] text-ink-faint">Access</p>
      <h4 className="heading-item wrap-phrase mt-2 text-ink">{title}</h4>

      {/* 起点（滞在先） */}
      <div className="mt-6 rounded-sm border border-sand bg-cream px-4 py-3">
        <p className="text-[0.9rem] leading-[1.7] font-medium text-ink">
          {origin.name}
        </p>
        {origin.detail ? (
          <p className="mt-1 text-[0.75rem] leading-[1.7] text-ink-faint">
            {origin.detail}
          </p>
        ) : null}
      </div>

      {/* 行き先。左の列に線（SVG）、右の列に地名と所要時間（HTML） */}
      <ol className="mt-0">
        {stops.map((stop, i) => {
          const isLast = i === stops.length - 1;
          const line = stop.emphasis
            ? "var(--color-clay)"
            : "var(--color-sand)";

          return (
            <li key={stop.name} className="flex items-stretch gap-3">
              {/* 左の列（52px固定）。幹は縦線、枝と着点はSVG */}
              <div className="relative w-[3.25rem] shrink-0">
                {/* 縦の幹。最後の行では枝のところで止めます */}
                {!isLast ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-3 bottom-0 left-[7px] w-px bg-sand"
                  />
                ) : null}

                <svg
                  aria-hidden="true"
                  viewBox="0 0 52 24"
                  className="absolute top-0 left-0 w-full"
                >
                  {/* 幹から枝へ（かぎ型）。着点の手前で止めます */}
                  <path
                    d="M7 0 V12 H39"
                    fill="none"
                    stroke={line}
                    strokeWidth={stop.emphasis ? 1.6 : 1.2}
                  />
                  {/* 着点 */}
                  <circle
                    cx="44"
                    cy="12"
                    r={stop.emphasis ? 4 : 3}
                    fill={stop.emphasis ? "var(--color-clay)" : "var(--color-paper)"}
                    stroke={stop.emphasis ? "var(--color-clay)" : "var(--color-sand)"}
                    strokeWidth="1.2"
                  />
                </svg>
              </div>

              {/* 右の列。地名・補足・所要時間 */}
              <div
                className={cn(
                  "min-w-0 flex-1 pt-1.5",
                  isLast ? "pb-0" : "pb-6",
                )}
              >
                <p
                  className={cn(
                    "text-[0.9rem] leading-[1.7]",
                    stop.emphasis ? "font-medium text-ink" : "text-ink",
                  )}
                >
                  {stop.name}
                </p>
                {stop.detail ? (
                  <p className="mt-1 text-[0.75rem] leading-[1.7] text-ink-faint">
                    {stop.detail}
                  </p>
                ) : null}
                <p
                  className={cn(
                    "mt-1.5 text-[0.8rem] leading-[1.8]",
                    stop.emphasis ? "text-clay" : "text-soil",
                  )}
                >
                  {stop.access}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <figcaption className="mt-6 border-t border-sand pt-4 text-[0.72rem] leading-[1.9] text-ink-faint">
        {caption}
      </figcaption>
    </figure>
  );
}
