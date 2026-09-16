/**
 * =========================================================
 * 全ページ共通の部品に出る文章
 * =========================================================
 * ヘッダー・フッター・スマホ固定CTAバー・ページ末尾の共通CTA（ClosingCta）・
 * Journal（Instagram）の既定値だけを置いています。
 *
 * ■ このファイルができた理由（2026-09-16 最終回遊QA）
 *   以前は src/content/copy.ts に「共通部品の文言」と「使わなくなった旧セクションの
 *   コピー」が同居していました。copy.ts は SiteHeader（クライアントコンポーネント）から
 *   import されていたため、画面に出ていない旧コピー
 *   （「入居までの流れ」「まず話を聞くところから」「オーナーの畑」「道後シェアハウス」
 *   「料金の数字」など）が、ビルド後のJSチャンクに丸ごと残っていました。
 *   共通部品が必要とする文言だけをこのファイルに移し、copy.ts は削除しました。
 *
 * ■ ページ本文の文章はここには置きません
 *   HOME → src/content/home.ts ／ ABOUT → about.ts ／ OWNER → owner.ts ／
 *   LIFE → life.ts ／ VOICES → voices.ts ／ PLANS → plans.ts ／ FLOW → flow.ts
 *
 * ■ 料金の数字はこのファイルに書きません（/plans/ だけに出す方針です）。
 */

export const common = {
  /** ---------------- ページ末尾の共通CTA（ClosingCta の既定値） ----------------
   * 各ページは自分の content ファイルの closing を渡すので、
   * ここの値は「props を渡さなかったとき」の保険です。 */
  closing: {
    title: "少しだけ、違う暮らしをしてみる。",
    body: [
      "移住する必要も、仕事を辞める必要もありません。",
      "まずは1週間、あるいは1ヶ月。松山の家で暮らしてみてください。",
    ],
    cta: "滞在について相談する",
    note: "滞在の時期・期間・費用については、状況に合わせてご相談ください。",
  },

  /** ---------------- スマホ用 固定CTAバー ----------------
   * 主＝申し込み（Googleフォーム）／副＝相談（メール）の2導線です。
   * ⚠ 375px に収まる長さにしてください。料金の数字は出しません。 */
  stickyBar: {
    /** 主CTA。リンク先は src/config/site.ts の applyHref（Googleフォーム） */
    apply: "滞在を申し込む",
    /** 副CTA。リンク先は contactHref（メール） */
    consult: "相談する",
  },

  /** ---------------- フッター ---------------- */
  footer: {
    tagline: "暮らしの中に、農がある。",
    contactLabel: "Contact",
    locationLabel: "Location",
    instagramLabel: "Instagram",
    copyright: "GUILD Farm",
    /** Contact 欄の2つの導線に添えるラベル */
    applyLabel: "滞在を申し込む（Googleフォーム）",
    consultLabel: "滞在について相談する（メール）",
  },

  /** ---------------- JOURNAL / INSTAGRAM ----------------
   * いまどのページにも置いていません（部品は残しています）。
   * 使うときは <Journal /> をページに足してください。 */
  journal: {
    label: "Journal",
    index: "12",
    title: "ここでの毎日",
    lead: "畑のことだけではなく、住んでいる人の普通の1日、食事、地域のこと、仕事をしている風景まで。日々の記録をInstagramで更新しています。滞在のご相談も、DMで受け付けています。",
    cta: "Instagramを見る",
  },
} as const;
