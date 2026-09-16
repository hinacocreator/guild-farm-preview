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
    "愛媛・松山のシェアハウスに住んで、農のある暮らしを1週間から1ヶ月。仕事や暮らしを続けながらでも、まとまった時間を使ってでも。個室と共用キッチン、畑に関わる時間、地域の人とのつながり。移住を決める前に、暮らしから試せる場所です。",

  /**
   * 本番URL。独自ドメインを取ったら下の既定値を差し替えてください（OGP・JSON-LDの絶対URL生成に使用）。
   * ビルド時に環境変数 NEXT_PUBLIC_SITE_URL があれば、そちらが優先されます
   * （GitHub Pages のプレビュー公開のように、サブパス付きURLで配信するとき用）。
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://guild-farm.vercel.app",

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
   * ・price.plans が2つの滞在プランの正となる値です。金額を表示してよいのは
   *   /plans/ だけです（src/content/plans.ts の表記も合わせて直してください）。
   * 内訳（光熱費・Wi-Fi）や初期費用は未確定のため、サイトには書きません。
   * 食事と現地交通費は実費です（/plans/ の本文に明記しています）。
   */
  price: {
    monthly: 85300,
    note: "目安",
    plans: {
      /** 1ヶ月滞在 */
      month: {
        label: "1ヶ月滞在",
        price: 85300,
        /** 滞在先の呼称は「今市シェアハウス（道後エリア）」で全ページ統一しています */
        stay: "今市シェアハウス（道後エリア）",
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
    /** 相談のメールの件名に自動で入る文字列 */
    subject: "GUILD Farmの滞在について",
    /**
     * Googleフォームなどを使う場合は、ここにURLを入れてください。
     * 入っていればサイト内のCTAは全てそのURLへ、空ならメール（mailto:）に飛びます。
     */
    formUrl: "",

    /**
     * ---- 申し込み導線（「滞在を申し込む」CTA の行き先） ----
     *
     * 正式な導線です（クライアント確定・2026-09-16）。チラシの「予約はGoogleフォーム」の
     * 実URLをいただいたので、暫定のメール導線（件名「GUILD Farmの滞在申し込み」）は廃止しました。
     *
     * ⚠ 外部サイト（Googleフォーム）です。ボタン・リンクは Instagram と同じく
     *   target="_blank" rel="noopener noreferrer" で開き、
     *   「Googleフォームが開きます」の補足を添えてください（applyNote）。
     */
    applyFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfFacZVGyQsPF3SjHJKzeJXb2BwH4dNhgseU-4r287ND22USQ/viewform",
  },

  social: {
    instagram: {
      handle: "@guildfarm.dogo",
      url: "https://www.instagram.com/guildfarm.dogo/",
    },
    /**
     * 松井さんのnote（/owner/ の末尾からだけリンクしています）。
     * ⚠ Instagram のプロフィール経由のリダイレクトURLは使いません。
     * ⚠ noteの記事内容を /owner/ の本文・年表・思想へ持ち込まないでください。
     */
    note: {
      handle: "@guild853",
      url: "https://note.com/guild853",
    },
  },

  /** 相談CTAの文言（「入居」は使いません） */
  ctaLabel: "滞在について相談する",
  /** 画面が狭いとき（スマホのヘッダー・固定バー）に使う短縮版 */
  ctaLabelShort: "相談する",
  /**
   * 申し込みボタンの文言。
   * ヘッダー・スマホ固定バー・フッター・/plans/・/flow/ の主CTAが使います。
   * 行き先は applyHref（Googleフォーム・外部サイト）です。
   */
  applyCtaLabel: "滞在を申し込む",
  /** 申し込みボタンの短縮版（スマホのヘッダー） */
  applyCtaLabelShort: "申し込む",
  /** 外部フォームであることを示す補足。申し込みCTAの近くに小さく添えます */
  applyNote: "Googleフォームが開きます",
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

/**
 * 「滞在を申し込む」ボタンのリンク先＝GoogleフォームのURL（正式導線）。
 *
 * ⚠ 外部サイトです。http で始まるため CtaButton / TextLink が自動で
 *   target="_blank" rel="noopener noreferrer" を付けます（Instagram リンクと同じ設計）。
 *   文字の側の補足は siteConfig.applyNote を使ってください。
 */
export const applyHref: string = siteConfig.contact.applyFormUrl;

/** 「85,300円」のように、カンマ区切りの金額文字列を作ります */
export const monthlyPriceText = `${siteConfig.price.monthly.toLocaleString("ja-JP")}円`;

/**
 * ヘッダー・フッター共通のナビゲーション。順番を変えるとそのまま表示順が変わります。
 * ・label … 日本語ラベル（メニューの主役）
 * ・en    … 併記する英字ラベル（.label-en で小さく添える）
 * ・href  … next.config.ts の trailingSlash: true に合わせて末尾スラッシュ付きで書きます
 */
export const navItems = [
  { label: "GUILD Farmとは", en: "About", href: "/about/" },
  { label: "オーナー松井のご紹介", en: "Owner", href: "/owner/" },
  { label: "暮らし・過ごし方", en: "Life", href: "/life/" },
  { label: "プラン・料金", en: "Plans", href: "/plans/" },
  { label: "滞在までの流れ", en: "Flow", href: "/flow/" },
  /**
   * 滞在者の声（/voices/）。
   *
   * ■ なぜ末尾に置いているか（2026-09-16）
   *   ナビの並びは「GUILD Farmとは（何か）→ 松井（誰か）→ 暮らし（どう過ごすか）
   *   → 料金 → 申し込み方」という検討の順番になっています。
   *   「オーナー松井のご紹介」の直後に入れると読みの流れとしては自然ですが、
   *   /voices/ はいま確認済みの3つの言葉だけのページなので、
   *   検討の本線の途中に置くと、中身の少なさが目立ちます。
   *   補足として末尾に置き、体験ストーリーが増えた段階で
   *   「オーナー松井のご紹介」の後ろへ移すのが素直です（そのときはここの1行を動かすだけ）。
   *
   * ⚠ PCナビはこれで6項目になります。横並びで収まる下限が実測で約1160pxだったため、
   *   SiteHeader の切替は lg ではなく min-[1160px] にしてあります（2026-09-16 QA）。
   *   項目や文言を増やすときは、SiteHeader のその数値も合わせて見直してください。
   */
  { label: "滞在者の声", en: "Voices", href: "/voices/" },
] as const;
