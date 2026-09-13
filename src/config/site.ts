/**
 * =========================================================
 * GUILD Farm サイト設定
 * =========================================================
 * 問い合わせ先・SNS・住所・価格など「文章ではない設定値」はすべてこのファイルに集約しています。
 * 導線を変えたいときは、基本的にこのファイルだけを編集すれば済みます。
 */

export const siteConfig = {
  name: "GUILD Farm",

  /** <title> に入る文字列 */
  title: "GUILD Farm｜暮らしの中に、農がある。",

  /** 検索結果・SNSシェア時の説明文（120文字前後が目安） */
  description:
    "愛媛・松山、畑のあるシェアハウス。仕事を続けたまま、1ヶ月暮らしてみる。個室と共用キッチン、畑に関わる時間、地域の人との食卓。移住を決める前に、暮らしから試せる場所です。",

  /** 本番URL。独自ドメインを取ったら差し替えてください（OGPの絶対URL生成に使用） */
  url: "https://guild-farm.vercel.app",

  /** SNSシェア画像（public/og.jpg） */
  ogImage: "/og.jpg",

  keywords: [
    "GUILD Farm",
    "シェアハウス",
    "愛媛",
    "松山",
    "道後",
    "移住",
    "二拠点生活",
    "リモートワーク",
    "農のある暮らし",
    "1ヶ月滞在",
  ],

  location: {
    region: "愛媛県松山市",
    /** 建物の住所（チラシに記載済みのため公開可） */
    address: "愛媛県松山市道後今市1-27",
    /** エリアの呼び方 */
    area: "道後エリア",
    note: "道後エリアにあります。周辺のことは、お問い合わせ時にご案内しています。",
    /** 最寄り駅までの徒歩時間（確認済みの事実） */
    stationWalk: "駅まで徒歩5分",
    /** 周辺の様子（確認済みの事実） */
    nearby: "徒歩圏内にスーパーや飲食店",
  },

  /**
   * 料金。
   * ・price.monthly / monthlyPriceText は 1ヶ月滞在の金額（既存の表示箇所で使用中）。
   * ・price.plans が2つの滞在プランの正となる値です。金額を変えるときは
   *   src/content/copy.ts の plans / value / stickyBar の表記も合わせて直してください。
   * 内訳（光熱費・Wi-Fi）や初期費用は未確定のため、サイトには書きません。
   * 食事と現地交通費は実費です（copy 側に明記）。
   */
  price: {
    monthly: 85300,
    note: "目安",
    plans: {
      /** 1ヶ月滞在 */
      month: {
        label: "1ヶ月滞在",
        price: 85300,
        stay: "道後シェアハウス",
      },
      /** 1週間滞在（5泊6日） */
      week: {
        label: "1週間滞在（5泊6日）",
        price: 58300,
        stay: "三津浜エリアの宿",
        capacity: "1〜5名",
        note: "各月の2〜4週目のみ",
      },
      /** 滞在先のグレードアップ（1ヶ月滞在向け・部屋による追加料金） */
      upgrade: {
        area: "三津浜地区",
        extra: [25000, 35000],
      },
    },
  },

  contact: {
    email: "guildfarm.dogo@gmail.com",
    /** メールの件名に自動で入る文字列 */
    subject: "GUILD Farmの入居について",
    /**
     * Googleフォームなどを使う場合は、ここにURLを入れてください。
     * 入っていればサイト内のCTAは全てそのURLへ、空ならメール（mailto:）に飛びます。
     */
    formUrl: "",
  },

  social: {
    instagram: {
      handle: "@guildfarm.dogo",
      url: "https://www.instagram.com/guildfarm.dogo/",
    },
  },

  /** サイト内のCTAボタンの既定の文言 */
  ctaLabel: "入居について相談する",
} as const;

/**
 * サイト内すべてのCTAボタンのリンク先。
 * siteConfig.contact.formUrl が入っていればフォーム、空ならメール。
 */
export const contactHref: string =
  siteConfig.contact.formUrl ||
  `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    siteConfig.contact.subject,
  )}`;

/** 「85,300円」のように、カンマ区切りの金額文字列を作ります */
export const monthlyPriceText = `${siteConfig.price.monthly.toLocaleString("ja-JP")}円`;

/** ヘッダーのナビゲーション。順番を変えるとそのまま表示順が変わります。 */
export const navItems = [
  { label: "About", href: "#about" },
  { label: "A Day", href: "#a-day" },
  { label: "Price", href: "#value" },
  { label: "Plans", href: "#plans" },
  { label: "House", href: "#house" },
  { label: "Life", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Flow", href: "#flow" },
] as const;
