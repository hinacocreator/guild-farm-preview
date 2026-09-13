import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageOutline } from "@/components/PageOutline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Faq } from "@/components/sections/Faq";
import { House } from "@/components/sections/House";
import { Plans } from "@/components/sections/Plans";
import { Value } from "@/components/sections/Value";
import { pages } from "@/content/pages";

const page = pages.plans;

export const metadata: Metadata = {
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
 * /plans/ プラン・料金。
 *
 * Phase 3-A（骨組み）の状態です。
 * ・ページヘッダーと、扱うセクションの一覧（見出し＋1行要約）まで。
 * ・既存セクション Value（料金と含まれるもの）/ Plans（2プラン）/ House（部屋）/ Faq は、
 *   コピーを失わないためそのまま置いています。
 *   本実装では設計書 content-design.md 第6章（P-01〜P-11）に沿って組み直します。
 *
 * ※ Faq は本来 /flow/ に置く予定のセクションですが、既存のFAQに
 *   「1ヶ月滞在（85,300円）…」という金額入りの回答が含まれているため、
 *   料金の数字を出してよいこのページに置いています。
 *   本実装では P-11（料金・設備の4問）と F-05（それ以外の6問）に分けてください。
 *
 * ※ 料金の数字を表示してよいのは、サイト内でこのページだけです。
 *   金額そのものは src/config/site.ts の price が正の値です。
 *
 * ■ 文章 … src/content/pages.ts の plans
 */
export default function PlansPage() {
  return (
    <>
      <PageHeader
        label={page.label}
        title={page.title}
        sub={page.sub}
        lead={page.lead}
      />
      <PageOutline items={page.outline} />
      {/* 既存セクション（Phase 2 のコピーをそのまま残しています） */}
      <Value />
      <Plans />
      <House />
      <Faq />
      <ClosingCta />
    </>
  );
}
