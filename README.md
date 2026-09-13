# GUILD Farm 公式サイト

「暮らしの中に、農がある。」

愛媛県松山市の GUILD Farm の公式サイト（1ページ完結のLP兼公式サイト）です。
農業体験の紹介ではなく、**畑のあるシェアハウス（月額85,300円・目安）に「1ヶ月住んでみたい」と思ってもらい、入居の相談につなげる**ことを目的に構成しています。

---

## 目次

1. [作成したページ構成](#1-作成したページ構成)
2. [使用した技術](#2-使用した技術)
3. [写真を差し替える場所](#3-写真を差し替える場所)
4. [コピー（文章）を修正する場所](#4-コピー文章を修正する場所)
5. [問い合わせ導線の変更方法](#5-問い合わせ導線の変更方法)
6. [ローカルで確認する方法](#6-ローカルで確認する方法)
7. [無料で公開する方法](#7-無料で公開する方法)
8. [公開前に必ず確認してほしいこと](#8-公開前に必ず確認してほしいこと)

---

## 1. 作成したページ構成

上から順に、1ページで完結します。

| # | セクション | 内容 | ファイル |
|---|---|---|---|
| — | ヘッダー | ロゴ／ナビ／常時表示の「入居について相談する」 | `src/components/SiteHeader.tsx` |
| 1 | **HERO** | 全画面写真＋「暮らしの中に、農がある。」＋CTA① | `src/components/sections/Hero.tsx` |
| 2 | **INTRO** | 「旅行ではなく、暮らしてみる。」＋3本柱（住まい／畑／仕事） | `src/components/sections/About.tsx` |
| 3 | **A DAY** | ここでの1日（朝／昼／夕／夜の4場面） | `src/components/sections/ADay.tsx` |
| 4 | **VALUE** | 月額85,300円に含まれるもの（7項目）＋CTA② | `src/components/sections/Value.tsx` |
| 5 | **PLANS** | 1ヶ月滞在／1週間滞在の2プラン比較＋部屋のグレードアップ＋CTA③ | `src/components/sections/Plans.tsx` |
| 6 | **SCHEDULE** | 1ヶ月の流れ（1週目・2週目以降のリズム・最後の2日）＋1週間滞在の6日間＋「体験の場所」3か所 | `src/components/sections/Schedule.tsx`（内部で `Places.tsx` を表示） |
| 7 | **HOUSE** | シェアハウスの部屋・共用部・外観（写真6枚）＋設備・暮らしのルール | `src/components/sections/House.tsx` |
| 8 | **LIFE** | ここでできること（6項目）＋リモートワークの補足 | `src/components/sections/Experience.tsx` |
| 9 | **WHY** | 旅行／農業体験／GUILD Farm の違い | `src/components/sections/WhyGuildFarm.tsx` |
| 10 | **STORY** | 松井さんの紹介（※現在は仮テキスト・仮写真） | `src/components/sections/Story.tsx` |
| 11 | **FAQ** | よくある質問（9問・開閉するアコーディオン） | `src/components/sections/Faq.tsx` |
| 12 | **FLOW** | 入居までの流れ（4ステップ）＋「来る前に、準備するもの」＋CTA④ | `src/components/sections/Flow.tsx` |
| 13 | **JOURNAL** | 日常の写真6枚＋Instagramへの導線 | `src/components/sections/Journal.tsx` |
| 14 | **CTA** | 「少しだけ、違う暮らしをしてみる。」CTA⑤ | `src/components/sections/ClosingCta.tsx` |
| 15 | **FOOTER** | ロゴ／メニュー／Contact／Instagram／Location・CTA⑥ | `src/components/SiteFooter.tsx` |
| — | スマホ用固定CTAバー | スマホのみ、HEROを過ぎると画面下に出る（「1ヶ月 85,300円／2プランあり」表記） | `src/components/StickyCtaBar.tsx` |

> `CtaBand.tsx` は文章（`copy.ctaBand`）だけ用意されていますが、現在のページでは使っていません。

セクションの**順番を入れ替えたい**ときは [`src/app/page.tsx`](src/app/page.tsx) の並び順を変えるだけです。

問い合わせ導線は、ヘッダー（常時）＋本文中4か所（VALUE／PLANS／FLOW／CLOSING CTA）＋スマホの固定バー＋フッターの計7か所。
「押し売り」にならないよう、HERO → 料金・プランを見たあと → 最後、という流れで置いています。

### 時間割っぽくしていない理由

A DAY セクションは「08:00 起床」のような表を作らず、
**朝・昼・夕・夜の4つの場面**＋写真で見せています（時間は添え書き扱い）。
研修プログラムではなく生活として見せるためです。

---

## 2. 使用した技術

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 16（App Router） |
| 言語 | TypeScript |
| CSS | Tailwind CSS v4 |
| フォント | Zen Kaku Gothic New（本文ゴシック）／ Shippori Mincho（日本語の大見出し・明朝）／ Fraunces（英字ラベル） |
| 画像 | `next/image`（自動で最適化・遅延読み込み）。HEROのみ`<picture>`でスマホ／PCの写真を出し分け |
| デプロイ | Vercel（設定ファイル不要でそのまま動きます） |
| CMS・データベース | **なし**（文章と写真はコード内で管理。MVPのため意図的に入れていません） |

### SEO対応済みの項目

- `title` / `description` / キーワード
- OGP（`public/og.jpg`／Xカード対応）
- favicon（`src/app/icon.svg`）
- セマンティックHTML（`header` / `main` / `section` / `article` / `footer` / `address`、h1は1つだけ）
- 構造化データ（JSON-LD / LocalBusiness）
- `lang="ja"`・全画像に`alt`

### レスポンシブ

**スマホ最優先**で設計しています。
HEROはスマホでは縦長写真（9:16）、PCでは横長写真（16:9）に自動で切り替わります。

---

## 3. 写真を差し替える場所

写真はすべて **`public/images/`** に入っています。

### 差し替え方法（かんたんな順）

**A. ファイルを上書きする（おすすめ・コード不要）**

`public/images/` の中の**同じ名前**のファイルを、新しい写真で上書きするだけです。
例：`public/images/hero.jpg` を新しい写真に置き換える → それだけで反映されます。

**B. ファイル名を変えたい場合**

[`src/config/images.ts`](src/config/images.ts) の `src` を書き換えます。
このファイルに全部の写真の一覧があり、`alt`（画像の説明文／SEO用）もここで直せます。

### 写真の一覧と推奨サイズ

`images.ts` の中のキー名（英語）と、実際のファイル名・使い道の対応表です。

| `images.ts` のキー | ファイル名（`public/images/`） | 使われている場所 | 推奨サイズ |
|---|---|---|---|
| `hero` | `hero.jpg` | HERO（PC・タブレット） | 横長 16:9／2000px以上 |
| `heroMobile` | `hero-mobile.jpg` | HERO（スマホ） | 縦長 9:16／900×1600px前後 |
| `aboutField` / `aboutSoil` | `about-field.jpg` / `about-soil.jpg` | INTRO | 縦長 4:5／1200×1500px前後 |
| `dayMorning` / `dayEvening` | `day-morning.jpg` / `day-evening.jpg` | A DAY（朝・夕） | 縦長 4:5 |
| `dayWork` / `dayDinner` | `day-work.jpg` / `day-dinner.jpg` | A DAY（昼・夜） | 横長 3:2 |
| `expFarmwork` `expHarvest` `expFood` `expPeople` `expNature` `expSeason` | `exp-farmwork.jpg` 〜 `exp-season.jpg` | LIFE（大小混在のモザイク） | 正方形 1:1／1200×1200px前後 |
| `house[0]`〜`house[5]`（配列） | `house-01.jpg`〜`house-06.jpg` | HOUSE（個室・キッチン・洗面・廊下・外観・玄関） | `house-01`〜`04`・`06` は縦長 4:5／1280×1600px、外観の `house-05` のみ横長 3:2／1600×1067px |
| `whyVisual` | `why-visual.jpg` | WHY GUILD FARM | 横長 3:2 |
| `owner` | `owner.jpg` | STORY（松井さん） | 縦長 4:5 |
| `journal[0]`〜`journal[5]`（配列） | `journal-01.jpg`〜`journal-06.jpg` | JOURNAL | 正方形 1:1／900×900px前後 |
| `cta` | `cta.jpg` | 最後のCTA背景 | 横長 16:9 |
| （`images.ts`には無し） | `og.jpg`（`public/`直下） | SNSシェア画像 | 1200×630px |

> `house` と `journal` はキーが配列（複数枚）になっています。**並び順が意味を持つ**ので、
> 差し替えるときは何番目の写真かを崩さないよう注意してください（`house` は `copy.house.items` のキャプションと1対1対応）。
>
> サイズが多少違っても自動で中央トリミングされるので、まずは差し替えて見た目を確認すれば大丈夫です。
> 縦長の場所に横長写真を入れると、上下が大きく切れます。

### 現在使っている写真について

現在は、**GUILD Farm の実際の写真**（`Projects/guild-farm/sns/assets/` にあった素材）を
サイト用にトリミング・軽量化して配置しています。仮画像ではありません。

ただし以下は差し替え前提です。

- **`owner.jpg`（STORYの人物写真）** — 松井さんご本人かどうか未確認のまま配置しています。**必ずご本人の写真に差し替えてください。**
- `day-work.jpg` — 「PCで仕事をしている写真」が素材になかったため、滞在する部屋の写真を使っています。実際の仕事風景が撮れたら差し替えると訴求が強くなります。

写真に写っている方の**掲載許諾**は、公開前に必ず確認してください。

---

## 4. コピー（文章）を修正する場所

サイトに出る日本語は、原則すべて **[`src/content/copy.ts`](src/content/copy.ts) の1ファイル**にまとまっています。
このファイルの `"` で囲まれた部分を書き換えれば、そのまま画面に反映されます。

```
copy.hero        … HEROのキャッチコピー
copy.about       … INTRO（3本柱：住まい／畑／仕事）
copy.aDay        … 1日の流れ（朝・昼・夕・夜）
copy.value       … 月額85,300円に含まれるもの（7項目）
copy.plans       … PLANS（1ヶ月／1週間の2プラン・部屋のグレードアップ・共通の注意事項）
copy.schedule    … SCHEDULE（1週目の過ごし方／2週目以降の週間リズム／最後の2日／1週間滞在の6日間）
copy.places      … 体験の場所（3か所）※SCHEDULEセクションの下部に表示
copy.house       … 部屋・共用部・外観のキャプション＋設備・暮らしのルール（facilities）
copy.experience  … LIFE（できること6項目＋リモートワーク補足）※キー名は experience のまま
copy.why         … 旅行／農業体験／GUILD Farmの違い
copy.story       … 松井さんのストーリー（※現在は仮テキスト）
copy.faq         … よくある質問（9問）
copy.flow        … 入居までの流れ（4ステップ）＋prepare（来る前に準備するもの）
copy.journal     … Instagramセクション
copy.ctaBand     … ページ中盤のCTA（現在ページ未使用）
copy.closing     … 最後のCTA
copy.stickyBar   … スマホの固定CTAバー（価格表示とCTA文言）
copy.footer      … フッター
```

補足：

- `copy.plans.items` の金額・条件は `src/config/site.ts` の `price.plans` と揃えてください（片方だけ直すと表示がズレます）。
- `copy.house.facilities` は箇条書きの配列です。1行＝1項目なので、増やすときも同じ形式で追加してください。
- `copy.faq.items` は `{ q, a }` の配列が9問分並んでいます。質問を増減したいときはこの配列ごと足し引きしてください。
- `copy.flow.prepare` は「必ず必要（must）」「あると良いもの（nice）」の2グループです。

会社名・所在地・SNSアカウントなど「文章ではない情報」は [`src/config/site.ts`](src/config/site.ts) にあります。

> `[` `]` や `,` などの記号は消さないでください。文字の部分だけ書き換えれば安全です。

---

## 5. 問い合わせ導線の変更方法

サイト内のCTAボタンは**すべて同じリンク先**を見ています。
変更は [`src/config/site.ts`](src/config/site.ts) の1か所だけです。

### いまの状態：メールが開く

```ts
contact: {
  email: "guildfarm.dogo@gmail.com",
  subject: "GUILD Farmの入居について",
  formUrl: "",   // ← 空なのでメールが開きます
},
```

### Googleフォームに変えたい場合

`formUrl` にURLを入れるだけです。空でなくなった瞬間、全CTAがフォームに向きます。

```ts
formUrl: "https://forms.gle/xxxxxxxxxx",
```

### InstagramのDMに送りたい場合

`formUrl` にInstagramのプロフィールURLを入れてもOKです。

### Instagramアカウントの設定

```ts
social: {
  instagram: {
    handle: "@guildfarm.dogo",
    url: "https://www.instagram.com/guildfarm.dogo/",
  },
},
```

設定済みです（`@guildfarm.dogo`）。

### 料金の設定（`price.plans`）

2つの滞在プランの金額・条件は `src/config/site.ts` の `price.plans` で管理しています。

```ts
price: {
  monthly: 85300,       // 1ヶ月滞在（VALUEセクションの大きい金額表示）
  note: "目安",
  plans: {
    month: { label: "1ヶ月滞在", price: 85300, stay: "道後シェアハウス" },
    week: {
      label: "1週間滞在（5泊6日）",
      price: 58300,
      stay: "三津浜エリアの宿",
      capacity: "1〜5名",
      note: "各月の2〜4週目のみ",   // ← 1週目は受け入れていません
    },
    upgrade: {
      area: "三津浜地区",
      extra: [25000, 35000],       // 部屋による追加料金（安い順）
    },
  },
},
```

> 金額や条件を変えるときは、**この `site.ts` を直すだけでなく** `src/content/copy.ts` の
> `copy.plans` / `copy.value` / `copy.stickyBar` の文章（金額を書いた部分）も必ず合わせて直してください。
> 数字は2か所に分かれていて自動では連動しません。

### 所在地の設定（`location`）

```ts
location: {
  region: "愛媛県松山市",
  address: "愛媛県松山市道後今市1-27",   // チラシ記載の住所（掲載済み）
  area: "道後エリア",
  stationWalk: "駅まで徒歩5分",          // 確認済みの事実
  nearby: "徒歩圏内にスーパーや飲食店",   // 確認済みの事実
},
```

住所・最寄り駅までの徒歩時間・周辺情報は、いずれも確認済みの事実としてすでに掲載しています。
道後温泉や市街地までの距離・所要時間は未確認のため、あえて書いていません（載せる場合はここに追記してください）。

### ヘッダーのナビゲーション（`navItems`）

ページ内リンクのラベルと飛び先（アンカー）の一覧です。並び順を変えるとヘッダーの表示順もそのまま変わります。

```ts
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
```

---

## 6. ローカルで確認する方法

必要なもの：Node.js（18以上）

```bash
cd /Users/conadesignstudio/Projects/guild-farm-site
npm install
npm run dev
```

ブラウザで <http://localhost:3000> を開きます。
ファイルを保存すると自動で画面が更新されます。止めるときはターミナルで `Ctrl + C`。

本番と同じ状態を確認したいとき：

```bash
npm run build && npm start
```

---

## 7. 無料で公開する方法

このサイトはサーバー機能（動的ルート・API・Server Actions）を使っていないため、`next.config.ts` で `output: "export"` にして**静的サイトとして書き出し**、無料の静的ホストにそのまま置けます。

`npm run build` を実行すると `out/` フォルダにHTML/CSS/JS/画像一式が出力されます。あとはこの `out/` を配るだけです。

### (a) Cloudflare Pages（第一候補）

無料プランでも商用利用OK・独自ドメインOKです。

1. このフォルダをGitHubにリポジトリとして上げる（Privateで構いません）
2. <https://dash.cloudflare.com> → Workers & Pages → 「Create」→「Pages」→「Connect to Git」でそのリポジトリを選ぶ
3. Framework preset は **「Next.js (Static HTML Export)」**（無ければ「None」でも可）
4. Build command：`npm run build`
5. Build output directory：`out`
6. Deployをクリック → 数分で `https://＜プロジェクト名＞.pages.dev` が発行されます
7. 独自ドメインをつなぐ場合は Pages プロジェクト → Custom domains から追加

GitHubの対象ブランチにpushするたびに自動で再ビルド・再公開されます。

### (b) GitHub Pages（第二候補）

1. このフォルダをGitHubにリポジトリとして上げる
2. リポジトリの Settings → Pages → Source を **「GitHub Actions」** にする
3. このリポジトリに同梱済みの [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) が、`main` ブランチへのpushをきっかけに `npm run build` → `out/` を自動でPages公開します
4. 数分後、`https://＜ユーザー名＞.github.io/＜リポジトリ名＞/` で公開されます

> **注意**：リポジトリ名がそのままURLのサブパス（`/リポジトリ名/`）になる場合、`next.config.ts` に `basePath: "/リポジトリ名"` の追加が必要です（独自ドメインを直接つないでルート `/` で公開する場合は不要です）。

### (c) Vercelを使いたい場合の注意

Vercelでもこの静的書き出しは問題なく動きますが、**Vercelの無料（Hobby）プランは規約上「非商用」利用に限られます**。GUILD Farm（シェアハウスの入居募集）は商用利用にあたるため、無料で使うなら Cloudflare Pages か GitHub Pages を、Vercelを使いたい場合は有料プランを選んでください。

### 公開後にやること

公開したら、**忘れずに** [`src/config/site.ts`](src/config/site.ts) の `url` を本番URLに変更してください（OGP画像などの絶対URL生成に使っています）。

```ts
url: "https://guildfarm.jp",
```

---

## 8. 公開前に必ず確認してほしいこと

料金と住所は、すでにチラシ記載の内容をもとに**掲載済み**です。
サイトには、それでも**意図的に載せていない情報**が残っています。

| 項目 | 現状 | 対応 |
|---|---|---|
| **料金** | 1ヶ月滞在 85,300円／1週間滞在（5泊6日）58,300円を掲載済み（`src/config/site.ts` の `price.plans`） | チラシに印刷済みの金額です。**費用の内訳（光熱費・Wi-Fiなど）・初期費用・お支払い方法は未確定のため書いていません**（「お問い合わせください」としています） |
| **1週間プランの受け入れ時期** | 「各月の2〜4週目のみ」と掲載済み（1週目は1ヶ月滞在の方に集中するため休止） | 変更する場合は `copy.plans` / `copy.schedule` / `copy.faq` の該当箇所を直してください |
| **食事・現地交通費** | 「実費」と掲載済み（`copy.value` / `copy.plans.common` / `copy.faq`） | 金額の目安が決まったら追記してください |
| **所在地** | 愛媛県松山市道後今市1-27、駅まで徒歩5分、徒歩圏内にスーパー・飲食店ありを掲載済み（`src/config/site.ts` の `location`） | チラシ記載・確認済みの事実です。道後温泉や市街地までの距離・所要時間は未確認のため書いていません |
| **参加者・入居者の声** | 載せていません | 掲載許諾が取れてから追加してください |
| **就農・移住の約束** | していません | この方針は維持することを推奨します |

残っている未確認事項（公開前に必ず埋めてください）：

- [ ] 費用の内訳（光熱費・Wi-Fiが含まれるか）・初期費用・お支払い方法を確定し、`copy.value` / `copy.plans` / `copy.faq` の「お問い合わせください」箇所を更新する
- [ ] Googleフォーム（または問い合わせ先）のURLを決めて `src/config/site.ts` の `contact.formUrl` に入れる（空のままだとメールが開く仕様のままです）
- [ ] `owner.jpg` を松井さんご本人の写真に差し替える
- [ ] STORYの文章（`copy.story.paragraphs`）をご本人の言葉に差し替える（現在は仮テキスト）
- [ ] 写真に写っている方（松井さん含む）の掲載許諾を確認する
- [x] Instagramのアカウント名とURL（@guildfarm.dogo）を設定した
- [ ] `src/config/site.ts` の `url` を本番ドメインにした

---

## フォルダ構成

```
guild-farm-site/
├── .github/
│   └── workflows/
│       └── deploy.yml   ← GitHub Pages自動デプロイ設定（7章参照）
├── public/
│   ├── images/          ← 写真はすべてここ（差し替えはここ）
│   └── og.jpg           ← SNSシェア画像
├── src/
│   ├── app/
│   │   ├── layout.tsx   ← SEO設定・フォント読み込み
│   │   ├── page.tsx     ← セクションの並び順
│   │   ├── globals.css  ← 色・余白などのデザイン設定
│   │   └── icon.svg     ← favicon
│   ├── components/
│   │   ├── sections/    ← 各セクション（Hero / About / ADay / Value / Plans /
│   │   │                   Schedule / Places / House / Experience / WhyGuildFarm /
│   │   │                   Story / Faq / Flow / Journal / ClosingCta / CtaBand）
│   │   ├── ui/          ← ボタン・写真・見出しの共通部品
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   └── StickyCtaBar.tsx  ← スマホ用の固定CTAバー
│   ├── config/
│   │   ├── site.ts      ← 問い合わせ先・SNS・料金（price.plans）・所在地・公開URL
│   │   └── images.ts    ← 写真の一覧とalt
│   └── content/
│       └── copy.ts      ← サイトの文章はすべてここ
├── out/                 ← `npm run build` で書き出される静的サイト一式（7章参照・Git管理対象外）
└── README.md
```

### 色を変えたいとき

[`src/app/globals.css`](src/app/globals.css) の上部にある `@theme` の色コードを書き換えると、サイト全体に反映されます。

```css
--color-paper:     #faf6ee;  /* 紙・基本の背景 */
--color-cream:     #f3ebdd;  /* 生成り（セクション交互の背景） */
--color-sand:      #e4d7c2;  /* 罫線 */
--color-clay:      #a65733;  /* テラコッタ（CTAボタン・強調） */
--color-clay-deep: #8f4a2a;  /* 同・ホバー */
--color-soil:      #6b4f3a;  /* 土の色 */
--color-forest:    #223327;  /* 深いグリーン（WHY・フッターの背景） */
--color-moss:      #55684a;
--color-sun:       #e3b45c;  /* 金色。線や小さな装飾だけに */
--color-ink:       #2a2622;  /* 本文の文字 */
--color-ink-soft:  #5a544c;  /* 補足の文字 */
--color-ink-faint: #6f695e;  /* 注記・英字ラベル */
```

> `clay` と `ink-faint` は、文字が薄くて読みにくくならない濃さ（コントラスト比4.5:1以上）に
> 調整してあります。これより薄くすると、小さい文字が読みづらくなります。
