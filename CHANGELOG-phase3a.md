# Phase 3-A 変更履歴（サイト骨組み＋HOME本実装）

ベースライン: commit `dc1b58d`「v2.1 LP版」
対象: 1ページのLP → 6ページ構成のサイト＋HOMEの作り直し
この時点ではまだコミットしていません（レビュー後にコミット予定）。

**この文書の読み方**
「削除した」は本当に無くしたもの、「移動した」は別のページへ移したもの（＝サイトから消えていない）、
「データとして残した」は画面には出ないがファイルには残っているものです。
**コピー・価格・設備・FAQ などの原稿は、ひとつも削除していません。**

---

## 1. 残したもの（そのまま）

### デザイン資産
- 色（生成り paper / cream / sand、深緑 forest・moss、テラコッタ clay、土 soil、金 sun）
- 明朝の見出し（`.heading-jp`）、英字ラベル（`.label-en`）、通し番号（`.numeral`）、引用（`.pull-quote`）
- 紙の粒子（`body::after` のノイズ）、スクロールでのフェードイン（`.reveal`）
- 共通部品 `ui/Container` `ui/CtaButton` `ui/Photo` `ui/SectionHeading` `ui/LeafIcon`、`lib/jp.tsx` の `phrase()`
- 写真29枚（`public/images/`、`src/config/images.ts`）。**新しい写真は追加していません。**

### 原稿・設定
- `src/content/copy.ts` … Phase 2 のコピーを全文そのまま保持（下層ページが参照中）
- `src/config/site.ts` の `price`（85,300 / 58,300 / +25,000 / +35,000）、住所、最寄り駅、Instagram、`contactHref`
- 既存セクション部品（`sections/*.tsx`）はすべて残しています。HOMEから外したものも、下層ページで使うか、いつでも戻せる状態です。

---

## 2. 移動したもの（HOMEから外して、別のページへ）

| 内容 | 元（HOME） | 今の場所 | 備考 |
|---|---|---|---|
| 料金・含まれるもの | Value セクション | `/plans/` | 数字は `site.ts` の `price` が正 |
| 2つの滞在プランの詳細 | Plans セクション | `/plans/` | HOMEは「1週間 / 1ヶ月がある」ことだけ |
| 部屋・設備 | House セクション | `/plans/` | |
| 1日のスケジュール・体験の場所 | ADay / Schedule / Places | `/life/` | HOMEは朝昼夕夜の4場面だけ |
| 体験の詳細 | Experience セクション | `/life/` | |
| 考え方・目指す未来の全文 | WhyGuildFarm セクション | `/about/` | HOMEは大きな2行と引用だけ |
| 松井さんの話の全文 | Story セクション | `/owner/` | HOMEは2段落＋引用1つ |
| 申し込みの流れ・持ちもの | Flow セクション | `/flow/` | |
| FAQ | Faq セクション | `/plans/` | 金額を含む設問があるため、`/flow/` ではなく `/plans/` に置いています |

> いずれも「HOMEから外した」だけで、**サイトからは消えていません**。

---

## 3. 削除したもの（本当に画面から無くしたもの）

| 内容 | 理由 | 原稿の行方 |
|---|---|---|
| HERO下の「85,300円に含まれるもの →」リンク | HEROに金額を出さない方針 | `copy.hero.secondary` にデータとして残存（未使用） |
| スマホ固定CTAバーの価格表示「1ヶ月 85,300円」 | 料金は `/plans/` だけに出す方針 | `copy.stickyBar.price` に残存（未使用） |
| 肩書「まつやま瀬戸内農山漁村振興協議会 代表」 | **事実として誤り**のため、サイトから完全に削除 | 復活させないでください。肩書は「GUILD Farm オーナー」のみ |
| 「入居について相談する」という言い回し | 全て「滞在について相談する」に統一 | ページ名「入居までの流れ」だけは残しています |
| HOMEの `Journal`（H-08b ここでの毎日） | 設計書で任意のブロック。スマホでの総高さを優先（約800px 短縮） | 部品 `sections/Journal.tsx` はそのまま。`page.tsx` に1行足せば戻ります |
| HOMEの具体的な時刻（06:30 など） | 出典資料にない情報 | `copy.aDay` に残存（`/life/` で扱う） |

---

## 4. 新しく追加したもの

### ルート（下層ページ）
- `src/app/about/page.tsx` … GUILD Farmとは
- `src/app/owner/page.tsx` … 松井について
- `src/app/life/page.tsx` … 暮らし・過ごし方
- `src/app/plans/page.tsx` … プラン・料金
- `src/app/flow/page.tsx` … 入居までの流れ
（問い合わせページは作っていません。CTAは `contactHref` のメールへ）

### 共通の仕組み
- `src/app/layout.tsx` … ヘッダー / フッター / スマホ固定CTAバーを全ページ共通に。日本語フォントを Google Fonts の CSSリンク方式へ変更（`next/font` では日本語グリフが配信されず、明朝が再現できなかったため）。`preconnect` 付き。
- `src/components/SiteHeader.tsx` … 作り直し。スマホはハンバーガー、開いたメニューは深緑の面に生成りの明朝。`aria-expanded` / Esc で閉じる / 背面スクロールの固定。現在ページを強調。
- `src/components/SiteFooter.tsx` … 下層ページへのリンクを追加。
- `src/components/StickyCtaBar.tsx` … 価格表示を削除。`#top` が無いページは先頭から表示、`#contact` が無いページは出しっぱなし。
- `src/components/PageHeader.tsx` / `PageOutline.tsx` … 下層ページ共通のページ見出しと目次。
- `src/content/pages.ts` … 下層ページのタイトル・説明文・リード・見出し一覧。
- `src/config/site.ts` … `navItems`（下層URL）と `ctaLabel: "滞在について相談する"` を追加。`price` は保持。
- `src/app/globals.css` … 日本語フォントの変数定義を `:root` に移設（変数名 `--font-zen-kaku` / `--font-shippori` は据え置き）。

### HOME（②HOME本実装）
- `src/content/home.ts` … **HOMEの文字はすべてここ**。`copy.ts` とは別ファイルです（`copy.ts` は下層が参照中のため触っていません）。
- `src/components/ui/TextLink.tsx` … 「次のページへ送る」テキストリンク（下線＋矢印）。明・暗の2トーン。
- `src/components/sections/home/` … HOME専用の短縮版セクション。既存の About / ADay / Story などは下層で使うため**変更していません**。
  - `HomeIntro.tsx`（H-02）／`HomeValues.tsx`（H-03）／`HomeDay.tsx`（H-04）
  - `HomeOwner.tsx`（H-05）／`HomeFuture.tsx`（H-06）／`HomeStays.tsx`（H-07）／`HomeVoices.tsx`（H-08）

### 変更した既存ファイル（HOMEのため）
- `src/components/sections/Hero.tsx` … HOME専用のため作り替え。`home.ts` を参照。金額リンクを削除し、主CTAを `/life/`、副リンクを `/about/` に。`hero` / `heroMobile` の `<picture>` 出し分けと `id="top"` は維持。
- `src/components/sections/ClosingCta.tsx` … 見出し・本文・ボタン・注記を props で差し替えられるように（既定値は `copy.closing` のままなので、下層5ページの表示は変わりません）。「次に読む」副リンク用の `next` props を追加。`id="contact"` は維持。
- `src/app/page.tsx` … HOMEの並びを H-01〜H-09 に差し替え。

### どのページからも呼ばれていない部品（消していません）
Phase 2 のコピーを保持するため、ファイルは残してあります。使いたくなったら `import` して置くだけです。

| 部品 | 中身 | 今後 |
|---|---|---|
| `sections/About.tsx` | INTRO「住まい／畑／仕事」の3本柱 | `/about/` 本実装の材料 |
| `sections/Journal.tsx` | Instagram写真6枚（H-08b） | HOMEに戻すか、将来の `/journal/` で |
| `sections/CtaBand.tsx` | ページ途中のCTA | Phase 2 時点から未使用 |

---

## 5. HOMEの最終構成

| # | ブロック | 見出し | 写真 | 出口 |
|---|---|---|---|---|
| H-01 | Hero | 暮らしの中に、農がある。 | hero / heroMobile | `/life/`（主）・`/about/` |
| H-02 | HomeIntro | 旅行ではなく、暮らしてみる。 | aboutField | `/about/` |
| H-03 | HomeValues | この1週間、この1ヶ月に、起きること。 | expFarmwork / expFood / dayWork / expPeople / aboutSoil | `/life/` |
| H-04 | HomeDay | ここでの、1日。 | dayMorning / dayWork / dayEvening / dayDinner | `/life/` |
| H-05 | HomeOwner | この場所を、はじめた人。 | journal[5]（※本人写真ではありません） | `/owner/` |
| H-06 | HomeFuture | 畳1畳の畑から。／半径2kmの、農的社会コミュニティ。 | whyVisual | `/about/#future` |
| H-07 | HomeStays | 1週間か、1ヶ月か。 | expHarvest / house[0] | `/plans/` |
| H-08 | HomeVoices | （画面に出す見出しなし。読み上げ用に「この場所で生まれた言葉」） | （写真なし） | `/owner/` |
| H-09 | ClosingCta | 農のある暮らしを、少し体験してみる。 | cta | 問い合わせ（＋`/plans/`） |

- スマホ（375px幅）での総高さ **11,007px**（Phase 2 のLPは約20,000px）。※ QA後の実測値
- H-04 はスマホで横スクロール＋スナップ、PCで4列。
- H-03 は写真の大小を混ぜた編集的な並び（PCは12列で 7+5 / 5+4+3）。

---

## 6. 未確認・仮置きの箇所（推測で埋めていません）

| 箇所 | 内容 |
|---|---|
| `home.ts` の `owner.name`「松井 真弥」 | **氏名の正式表記とふりがなが未確認**。現サイトからの引き継ぎです |
| H-05 の写真 | **松井さん本人の写真がありません**。田んぼの風景写真で代用し、本人でないことをキャプションで明記。コード内に「★ 松井本人写真差し替え推奨」と記載 |
| `site.ts` の `contact.formUrl` | 空。Googleフォームの有無・問い合わせ運用が未確定のため、CTAはすべてメール（mailto）です |
| 見学の有無・固定された滞在日程 | 資料にないため書いていません（「最初の週」「最後の2日」等の表現も未使用） |
| H-08 の3つの言葉 | 原文のまま。属性は付けていません。**掲載許諾の状況は未確認**のため、人物写真は添えていません |
| `/about/` `/owner/` `/life/` `/plans/` `/flow/` の本文 | 骨組み（見出し＋1行要約）まで。本実装は Phase 3-B 以降 |
| `copy.story.paragraphs` | Phase 2 からの仮テキスト（本人の言葉ではありません）。`/owner/` の本実装時に差し替えが必要です |
| Faq の配置 | 金額を含む設問があるため `/plans/` 側に置いています。`/flow/` との振り分けは本実装時に再検討 |

---

## 7. 確認済み（静的チェック）

- `npm run lint` … エラーなし
- `npm run build` … 成功（9ページを静的書き出し）
- `out/index.html` に以下が **0件**: `85,300` / `58,300` / `25,000` / `35,000` / 「入居について」/ 「振興協議会」/ `06:30` 等の時刻表記／「◯◯円」の表記
- `out/index.html` に `/life/` `/about/` `/owner/` `/plans/` `/about/#future` へのリンクあり
- 横スクロール（意図しないはみ出し）なし：375px / 1440px の両方で確認
- 下層5ページの末尾CTAは、既定の文言（`copy.closing`）のまま変わっていないことを確認

---

## 8. ブラウザ検証（QA）で見つけた不具合と、その修正

実機に近い形（Chrome / スマホ375px・PC1280px）で全ページを開いて確認し、
見つかった不具合をその場で直しました。**文章の追加・事実の追加はしていません。**

| # | 症状 | 原因 | 直したファイル |
|---|---|---|---|
| 1 | HOMEの「GUILD Farmとは →」から `/about/#future` へ飛ぶと、**ページの先頭に着地して目的の見出しまで動かない** | `globals.css` の `html { scroll-behavior: smooth }`。これが付いていると Next.js のアンカー移動が効かなくなります。ページ内リンクは無いので、なめらかスクロール自体が不要でした | `src/app/globals.css` |
| 2 | アンカーで着地したとき、見出しが**画面上部の固定ヘッダーの裏に隠れる** | 一覧の項目に `scroll-mt`（着地位置の余白）が無かった | `src/components/PageOutline.tsx` |
| 3 | PCのナビで、**今いるページの色が変わらない**（下線だけ） | `text-ink-soft` と `text-clay` を同時に渡していて、あとに出てくる `text-ink-soft` が勝っていた。どちらか一方だけ渡すよう分岐を直した | `src/components/SiteHeader.tsx` |
| 4 | スマホで見出しが**1文字だけ次の行に落ちる**（「自分の暮らしを考え／る」「農的社会コミ／ュニティ。」） | 日本語の禁則処理と文節での折り返しを指定していなかった | `src/app/globals.css`（`body` に `line-break: strict`、`.heading-jp` に `line-break: strict` と `word-break: auto-phrase`） |
| 5 | 短い文が語の途中で割れる（「必要もありませ／ん。」「暮らしてみてく／ださい。」「滞在先は道後の家で／す。」） | 同上。短くて目立つ文のための `.wrap-phrase` クラスを追加し、CTAの本文と注記／HEROの説明文／各ブロックのリード一文／H-07のカード本文に適用しました。長い段落には付けていません（行末の余りが大きくなるため） | `src/app/globals.css` / `ClosingCta.tsx` / `Hero.tsx` / `PageHeader.tsx` / `home/HomeIntro.tsx` `HomeValues.tsx` `HomeDay.tsx` `HomeStays.tsx` |
| 6 | HEROで**同じことを二度言っていた**（「1週間から1ヶ月」のすぐ下に「1週間、または1ヶ月。」） | 重複していた1行を外しました（滞在の長さは上の一文で伝わります）。事実は減っていません | `src/content/home.ts` |
| 7 | H-08「この場所で生まれた言葉」に**見出しが無く**、読み上げソフトや目次で位置が分からない | 画面には出さない見出し（`sr-only`）を1つ置きました。文言は設計書のブロック名どおり | `src/components/sections/home/HomeVoices.tsx` |
| 8 | `CtaButton` のコメントに古い文言「入居について相談する」が残っていた | コメントのみ修正 | `src/components/ui/CtaButton.tsx` |

### 確認して「問題なし」だったもの
- 日本語フォント … 見出しは明朝（Shippori Mincho）、本文はゴシック（Zen Kaku Gothic New）で表示。Google Fonts の CSS も読み込めています
- ハンバーガー … 深緑の面・生成りの明朝、開閉、Escで閉じる、項目をタップすると遷移して閉じる、開いている間は背面がスクロールしない、現在ページが金色、`aria-expanded` あり
- スマホ固定CTAバー … HOMEはHEROを過ぎてから表示、最終CTAが見えると消える。下層ページは先頭から表示
- H-04 の横スクロール … スナップ付きで動作（4枚）
- 横スクロール（意図しないはみ出し）… 6ページすべて 375px / 1280px で 0
- 写真 … 全ページ読み込み成功・alt あり・切れや黒帯なし。スマホのHEROは `hero-mobile.jpg`
- 料金の数字 … `/plans/` 以外のページには 1つも出ていません
- 「入居について相談する」「振興協議会」等の誤肩書 … 全ページで 0件
- コンソールエラー … 6ページとも 0件
- 下層ページのヘッダー … 最初から生成り（HOMEだけ写真の上で透明）

### 直していない（判断が必要な点）
- `/life/` に **具体的な時刻（06:30 など）** が残っています。Phase 2 の `copy.aDay` / `copy.schedule` をそのまま置いているためです。「データを消さない」方針を優先して残しましたが、出典資料にない数字なので、Phase 3-B で**時刻を外すか、松井さんに確認して確定させる**必要があります
- `/flow/` に **「見学する」というステップ**が残っています。見学の有無は未確定です。同上の理由で残しています
- 下層ページで、**一覧（Contents）の見出しと、その下の既存セクションの見出しが重複**しています（例: `/about/` の「見るのでも、体験するのでもなく。」が2回）。骨組みとして既存セクションを残しているためで、本実装で一覧を実際のセクションに置き換えると解消します
- `/plans/`（16,047px）と `/life/`（13,961px）が **HOME（11,007px）より長い**状態です。既存セクションをそのまま積んでいるためで、本実装で整理が必要です
- `/about/` は写真2枚、`/flow/` は1枚と、**下層ページは写真が少なく文字中心**です。「写真主体」というサイトの性格に合わせるなら、本実装で既存29枚から配分し直すのが望ましいです
