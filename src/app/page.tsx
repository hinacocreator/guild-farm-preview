import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "@/components/sections/Hero";
import { HomeDay } from "@/components/sections/home/HomeDay";
import { HomeFuture } from "@/components/sections/home/HomeFuture";
import { HomeIntro } from "@/components/sections/home/HomeIntro";
import { HomeOwner } from "@/components/sections/home/HomeOwner";
import { HomeStays } from "@/components/sections/home/HomeStays";
import { HomeValues } from "@/components/sections/home/HomeValues";
import { HomeVoices } from "@/components/sections/home/HomeVoices";
import { home } from "@/content/home";

/**
 * HOME（/）。
 * ヘッダー・フッター・スマホ固定CTAバーは src/app/layout.tsx にあります。
 * このファイルはセクションの並び順だけを持ちます。
 *
 * ■ 役割
 *   HOMEは「説明するページ」ではなく「入口」です。
 *   3〜5秒で何の場所かを伝え、興味の方向（暮らし／人／考え方）に応じて
 *   下層ページへ送り出します。ここで説明を完結させません。
 *
 * ■ 各ブロックのリズム
 *   写真 → 短いコピー → 次のページへのリンク。この順を崩さないでください。
 *
 * ■ 並び（設計書 content-design.md 第2章 H-01〜H-09 に対応）
 *   H-01 Hero        HERO ………………… /life/ ・/about/
 *   H-02 HomeIntro   旅行ではなく、暮らしてみる。…… /about/
 *   H-03 HomeValues  この1週間、この1ヶ月に、起きること。…… /life/
 *   H-04 HomeDay     ここでの、1日。……… /life/
 *   H-05 HomeOwner   この場所を、はじめた人。…… /owner/
 *   H-06 HomeFuture  畳1畳の畑から。…… /about/#future
 *   H-07 HomeStays   1週間か、1ヶ月か。…… /plans/
 *   H-08 HomeVoices  この場所で生まれた言葉 …… /owner/
 *   H-09 ClosingCta  最終CTA …………… 問い合わせ（＋/plans/）
 *
 * ■ 置いていない任意ブロック
 *   H-08b「ここでの毎日」（Instagram写真6枚／Journal.tsx）は載せていません。
 *   設計書で任意とされているブロックで、HOMEをスマホで短く保つ方針を優先しました
 *   （これを足すと約800px 伸びます）。Instagramへの出口はヘッダーのメニューと
 *   フッターにあります。載せたくなったら
 *   `import { Journal } from "@/components/sections/Journal";` を足して
 *   <HomeVoices /> の下に <Journal /> を置いてください（部品はそのまま残しています）。
 *
 * ■ HOMEに置かないもの（下層ページの担当）
 *   料金の数字・含まれるもの（→ /plans/）／部屋・設備・住所（→ /plans/）
 *   ／スケジュール表と具体的な時刻（→ /life/）／持ち物・FAQ（→ /flow/）
 *   ／社会課題の中身（→ /about/・/owner/）
 *   ※ これらのコピーは src/content/copy.ts に残してあります（削除していません）。
 *
 * ■ 文章 … src/content/home.ts（HOMEの文字はすべてここ）
 *
 * 問い合わせ導線：
 *   1. ヘッダー（常時表示）
 *   2. スマホの画面下に出る固定バー（StickyCtaBar）
 *   3. ページ末尾の ClosingCta のボタン
 *   4. フッターのリンク
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeValues />
      <HomeDay />
      <HomeOwner />
      <HomeFuture />
      <HomeStays />
      <HomeVoices />
      <ClosingCta
        title={home.closing.title}
        body={home.closing.body}
        cta={home.closing.cta}
        note={home.closing.note}
        next={home.closing.next}
      />
    </>
  );
}
