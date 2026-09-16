import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PlansCompare } from "@/components/sections/plans/PlansCompare";
import { PlansCosts } from "@/components/sections/plans/PlansCosts";
import { PlansDecide } from "@/components/sections/plans/PlansDecide";
import { PlansFaq } from "@/components/sections/plans/PlansFaq";
import { PlansIncluded } from "@/components/sections/plans/PlansIncluded";
import { PlansPlan } from "@/components/sections/plans/PlansPlan";
import { PlansStays } from "@/components/sections/plans/PlansStays";
import { plans } from "@/content/plans";

export const metadata: Metadata = {
  title: { absolute: plans.meta.metaTitle },
  description: plans.meta.description,
  alternates: { canonical: plans.meta.path },
  openGraph: {
    title: plans.meta.metaTitle,
    description: plans.meta.description,
    url: plans.meta.path,
  },
};

/**
 * /plans/ プラン・料金。
 *
 * ■ 役割（2026-09-16 ブランド編集で確定）
 *   HOME / ABOUT / OWNER / LIFE を読んで興味を持った人が、
 *   「1週間と1ヶ月のどちらが合うか」「どこに泊まりどんな生活になるか」
 *   「何が含まれていくら必要か」を判断できるページです。
 *   サイト内で最も比較・検討の情報を具体的に伝えます。
 *
 *   料金の数字を表示してよいのは、サイト内でこのページだけです
 *   （金額そのものは src/config/site.ts の price.plans が正の値です）。
 *
 * ■ 並び（docs/plans-inventory.md の 12章に対応）
 *   —      PageHeader     プラン・料金（H1）
 *   01     PlansCompare   1週間プランと、1ヶ月プラン。（上部で2プラン比較）
 *   02     PlansPlan      1週間プラン（5泊6日）      id="week"
 *   03     PlansPlan      1ヶ月プラン                id="month"
 *   04     PlansStays     暮らす場所。（今市シェアハウス／三津浜エリアの宿）
 *   05     PlansIncluded  料金に含まれるもの、含まれないもの。（＋使える設備）
 *   06     PlansCosts     滞在にかかる、その他の費用。
 *   07     PlansFaq       プランを決める前に、よくある質問
 *   08     PlansDecide    どちらにするか迷ったら。
 *   —      ClosingCta     次に読む → /flow/
 *
 *   02 と 03 は同じ部品（PlansPlan）に、内容だけを渡して出しています。
 *   背景は paper / cream が交互になるように tone を指定しています。
 *
 * ■ 文章 … src/content/plans.ts（このページの文字はすべてここ）
 *   ※ 旧セクション（Value / Plans / House / Faq）のコピーは
 *     src/content/copy.ts にそのまま残しています（データは消していません）。
 *
 * ■ このページに書かないもの
 *   思想・考え方（→ /about/ ・/owner/）／1日・1週間・1ヶ月の過ごし方の全文と
 *   曜日別のスケジュール（→ /life/）／持ち物・申し込みの手順・料金以外のFAQ（→ /flow/）
 *   ／三津浜の宿の写真・部屋・設備・周辺（確認待ち。docs/pending-facts.md の C 章）
 */
export default function PlansPage() {
  return (
    <>
      <PageHeader
        label={plans.header.label}
        title={plans.header.title}
        sub={plans.header.sub}
        lead={plans.header.lead}
      />
      <PlansCompare />
      <PlansPlan id="week" content={plans.week} tone="paper" />
      <PlansPlan id="month" content={plans.month} tone="cream" />
      <PlansStays />
      <PlansIncluded />
      <PlansCosts />
      <PlansFaq />
      <PlansDecide />
      <ClosingCta
        title={plans.closing.title}
        body={plans.closing.body}
        cta={plans.closing.cta}
        note={plans.closing.note}
        next={plans.closing.next}
      />
    </>
  );
}
