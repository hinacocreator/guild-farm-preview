import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AboutAgrarian } from "@/components/sections/about/AboutAgrarian";
import { AboutComfort } from "@/components/sections/about/AboutComfort";
import { AboutFit } from "@/components/sections/about/AboutFit";
import { AboutFood } from "@/components/sections/about/AboutFood";
import { AboutFuture } from "@/components/sections/about/AboutFuture";
import { AboutPeople } from "@/components/sections/about/AboutPeople";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { applyHref, siteConfig } from "@/config/site";
import { about } from "@/content/about";
import { pages } from "@/content/pages";

/** metadata（title / description / canonical）は src/content/pages.ts の値のままです */
const page = pages.about;

export const metadata: Metadata = {
  // title はテンプレート（%s｜GUILD Farm）を使わず、設計書の案をそのまま出します
  title: { absolute: page.metaTitle },
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: page.path,
  },
  /* twitter を省くと layout.tsx のHOMEの値が全ページに出てしまうため、
     ページごとに上書きしています（2026-09-16 最終回遊QA） */
  twitter: {
    title: page.metaTitle,
    description: page.description,
  },
};

/**
 * /about/ GUILD Farmとは。
 *
 * ■ ページの役割（2026-09-15 ブランド編集指示）
 *   読み終えた人が「GUILD Farmは何をする場所か」「農的暮らしとはどんな暮らしか」
 *   「なぜ“心地イイ”を大切にしているか」を具体的に理解できることを優先します。
 *   松井さん個人の人生・農業への問題意識・無肥料栽培を選んだ経緯は
 *   このページでは説明せず、すべて /owner/「松井について」に置いています。
 *
 * ■ 並び（ブランド編集指示 2.〜8.）
 *   2. PageHeader     GUILD Farmとは（＋導入4行）
 *   3. AboutAgrarian  「農的暮らし」って、どんな暮らし？（＋比較表・id="agrarian"）
 *   4. AboutFit        最初の1週間は、一緒に。／その先は、自分で組み立てる。（id="fit"）
 *   5. AboutComfort    農的暮らしを通じて、“心地イイ”を見つめ直す。（HEROと同じ2行組み）
 *   6. AboutFood       農と食が、少し近くなる。
 *   7. AboutPeople     地域の人と出会う。
 *   8. AboutFuture     この先につくりたいもの。（id="future" ＋「松井について」への導線）
 *   -  ClosingCta      共通CTA …… 問い合わせ（＋次に読む: /life/）
 *
 * ■ このページに置かないもの（他ページの担当）
 *   料金の数字・含まれるもの・部屋・設備・住所（→ /plans/）
 *   ／1日・1週間・1ヶ月の具体的な段取り（→ /life/）／持ち物・FAQ（→ /flow/）
 *   ／松井の経歴・無肥料を選んだ理由・農業の課題（→ /owner/）
 *   ※ 旧セクション AboutDifference / AboutWhy / AboutFertilizer / AboutAbundance は、
 *     ブランド編集で統合・移設したため削除しました（一次情報は /owner/ にあります）。
 *
 * ■ 文章 … src/content/about.ts（このページの文字はすべてここ）
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        label={about.header.label}
        title={about.header.title}
        lead={about.header.lead}
      />
      <AboutAgrarian />
      {/* id="fit" … /flow/ のFAQ「どんな人が向いていますか」からの着地点です */}
      <AboutFit />
      <AboutComfort />
      <AboutFood />
      <AboutPeople />
      {/* id="future" … HOMEの「目指している未来」からの着地点です */}
      <AboutFuture />
      {/* 主＝相談（既定の contactHref）／副＝申し込み（Googleフォーム）。
          どのページの末尾でも、申し込みと相談の両方に進めるようにしています */}
      <ClosingCta
        title={about.closing.title}
        body={about.closing.body}
        cta={about.closing.cta}
        secondary={{
          label: about.closing.secondary,
          href: applyHref,
          note: siteConfig.applyNote,
        }}
        note={about.closing.note}
        next={about.closing.next}
      />
    </>
  );
}
