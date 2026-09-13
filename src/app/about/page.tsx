import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { AboutAbundance } from "@/components/sections/about/AboutAbundance";
import { AboutAgrarian } from "@/components/sections/about/AboutAgrarian";
import { AboutDifference } from "@/components/sections/about/AboutDifference";
import { AboutFertilizer } from "@/components/sections/about/AboutFertilizer";
import { AboutFood } from "@/components/sections/about/AboutFood";
import { AboutFuture } from "@/components/sections/about/AboutFuture";
import { AboutPeople } from "@/components/sections/about/AboutPeople";
import { AboutWhy } from "@/components/sections/about/AboutWhy";
import { ClosingCta } from "@/components/sections/ClosingCta";
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
};

/**
 * /about/ GUILD Farmとは。
 *
 * ■ ページの役割
 *   施設の説明ではなく「GUILD Farmという考え方」を伝えるページです。
 *   農業問題から始めず、「どんな暮らしをつくりたいか」から始めます。
 *   社会課題（層2）に触れるのは AboutWhy の1セクションだけです。
 *
 * ■ 並び（設計書 content-design.md 第3章 A-01〜A-10 に対応）
 *   A-01 PageHeader       旅行ではなく、暮らしてみる。（＋どんな暮らしをつくりたいか）
 *   A-02 AboutDifference  見るのでも、体験するのでもなく。＋「実際にすることは、こうです」
 *   A-03 AboutAgrarian    農的暮らしと呼んでいるもの。
 *   A-04 AboutWhy         なぜ、農のある暮らしなのか。…… /owner/（層2はここだけ）
 *   A-05 AboutFertilizer  無肥料という、選び方。
 *   A-06 AboutFood        採れたものを、その日に食べる。
 *   A-07 AboutPeople      約束をしなくても、人と会う。
 *   A-08 AboutAbundance   豊かさと、心地よさ。
 *   A-09 AboutFuture      畳1畳の畑から、半径2kmへ。（id="future"）
 *   A-10 ClosingCta       共通CTA …… 問い合わせ（＋次に読む: /life/）
 *
 * ■ このページに置かないもの（他ページの担当）
 *   料金の数字・含まれるもの・部屋・設備・住所（→ /plans/）
 *   ／1日・1週間・1ヶ月の具体的な段取り（→ /life/）／持ち物・FAQ（→ /flow/）
 *   ／松井の経歴の詳細（→ /owner/）
 *   ※ Phase 2 の旧セクション WhyGuildFarm は AboutDifference に置き換えました。
 *     元のコピーは src/content/copy.ts の why に残しています（消していません）。
 *
 * ■ 文章 … src/content/about.ts（このページの文字はすべてここ）
 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        label={about.header.label}
        title={about.header.title}
        sub={about.header.sub}
        lead={about.header.lead}
      />
      <AboutDifference />
      <AboutAgrarian />
      <AboutWhy />
      <AboutFertilizer />
      <AboutFood />
      <AboutPeople />
      <AboutAbundance />
      {/* id="future" … HOMEの「目指している未来」からの着地点です */}
      <AboutFuture />
      <ClosingCta
        title={about.closing.title}
        body={about.closing.body}
        cta={about.closing.cta}
        note={about.closing.note}
        next={about.closing.next}
      />
    </>
  );
}
