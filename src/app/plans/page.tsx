import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PlansConditions } from "@/components/sections/plans/PlansConditions";
import { PlansEnvironment } from "@/components/sections/plans/PlansEnvironment";
import { PlansFaq } from "@/components/sections/plans/PlansFaq";
import { PlansFields } from "@/components/sections/plans/PlansFields";
import { PlansHouse } from "@/components/sections/plans/PlansHouse";
import { PlansIncluded } from "@/components/sections/plans/PlansIncluded";
import { PlansOptions } from "@/components/sections/plans/PlansOptions";
import { PlansUpgrade } from "@/components/sections/plans/PlansUpgrade";
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
 * ■ 役割
 *   検討に必要な実務情報を一か所に集めるページです。
 *   料金の数字を表示してよいのは、サイト内でこのページだけです
 *   （金額そのものは src/config/site.ts の price が正の値です）。
 *   金額の隣には必ず「その料金でどんな暮らしができるのか」を置いています。
 *
 * ■ 並び（設計書 content-design.md 第6章 P-01〜P-12 に対応）
 *   P-01        PageHeader        この料金で、できる暮らし。
 *   P-02/03 01  PlansOptions      2つの滞在プラン（金額＋その期間の過ごし方）
 *   P-04    02  PlansIncluded     この料金に、含まれるもの。
 *   P-05    03  PlansUpgrade      部屋を、変えることもできます。（三津浜）
 *   P-06    04  PlansConditions   両方のプランに共通すること。
 *   P-07    05  PlansHouse        住むのは、こんな家です。（写真6枚・設備・所在地）
 *   P-08    06  PlansFields       通う畑は、3か所。
 *   P-09/10 07  PlansEnvironment  働きながら、住む。／車がなくても、暮らせます。
 *   P-11    08  PlansFaq          料金と設備について、よくある質問
 *   P-12        ClosingCta        次に読む → /flow/
 *
 * ■ 文章 … src/content/plans.ts（このページの文字はすべてここ）
 *   ※ 旧セクション（Value / Plans / House / Faq）のコピーは
 *     src/content/copy.ts にそのまま残しています（データは消していません）。
 *
 * ■ このページに書かないもの
 *   思想・考え方（→ /about/ ・/owner/）／1日・1週間・1ヶ月の過ごし方の全文（→ /life/）
 *   ／持ち物・アクセス・料金以外のFAQ（→ /flow/）
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
      <PlansOptions />
      <PlansIncluded />
      <PlansUpgrade />
      <PlansConditions />
      <PlansHouse />
      <PlansFields />
      <PlansEnvironment />
      <PlansFaq />
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
