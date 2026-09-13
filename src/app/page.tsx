import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { About } from "@/components/sections/About";
import { ADay } from "@/components/sections/ADay";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { Flow } from "@/components/sections/Flow";
import { Hero } from "@/components/sections/Hero";
import { House } from "@/components/sections/House";
import { Journal } from "@/components/sections/Journal";
import { Plans } from "@/components/sections/Plans";
import { Schedule } from "@/components/sections/Schedule";
import { Story } from "@/components/sections/Story";
import { Value } from "@/components/sections/Value";
import { WhyGuildFarm } from "@/components/sections/WhyGuildFarm";

/**
 * 1ページ完結のLP兼公式サイト。
 * 目的は「畑のあるシェアハウスへの入居相談」につなげること。
 * セクションの順番を変えたいときは、この並び順を入れ替えてください。
 *
 * 並び：
 *   HERO → INTRO → A DAY → VALUE（料金） → PLANS（2つの滞在プラン）
 *   → SCHEDULE（滞在中の流れ・体験の場所） → HOUSE（部屋） → LIFE
 *   → WHY → STORY → FAQ → FLOW（申し込みの流れ・持ちもの） → JOURNAL → CLOSING
 *
 * ※「体験の場所」（Places.tsx）は SCHEDULE の下部に入っています。
 *
 * 問い合わせ導線：
 *   1. ヘッダー（常時表示）
 *   2. HERO のボタン
 *   3. VALUE / PLANS / FLOW / ClosingCta の各ボタン
 *   4. スマホの画面下に出る固定バー（StickyCtaBar）
 *   5. フッターのリンク
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ADay />
        <Value />
        <Plans />
        <Schedule />
        <House />
        <Experience />
        <WhyGuildFarm />
        <Story />
        <Faq />
        <Flow />
        <Journal />
        <ClosingCta />
      </main>
      <SiteFooter />
      <StickyCtaBar />
    </>
  );
}
