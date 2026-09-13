import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageOutline } from "@/components/PageOutline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Flow } from "@/components/sections/Flow";
import { pages } from "@/content/pages";

const page = pages.flow;

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
 * /flow/ 入居までの流れ。
 * ※ ページ名だけは「入居」を使います。ボタン・本文では使いません。
 *
 * Phase 3-A（骨組み）の状態です。
 * ・ページヘッダーと、扱うセクションの一覧（見出し＋1行要約）まで。
 * ・既存セクション Flow（5ステップと持ちもの）は、
 *   コピーを失わないためそのまま置いています。
 *   本実装では設計書 content-design.md 第7章（F-01〜F-05）に沿って組み直します。
 *
 * ⚠ 既存の Faq セクションは、このページではなく /plans/ に置いています。
 *   既存のFAQに「1ヶ月滞在（85,300円）…」という金額入りの回答が含まれていて、
 *   料金の数字をPLANS以外に出さないという方針に反するためです（コピーは消していません）。
 *   F-05「よくある質問」を本実装するときは、設計書 第7章 F-05 の6問
 *   （金額を含まない設問）でこのページのFAQを作り、PLANSには P-11 の4問を置いてください。
 *
 * ■ 文章 … src/content/pages.ts の flow
 */
export default function FlowPage() {
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
      <Flow />
      <ClosingCta />
    </>
  );
}
