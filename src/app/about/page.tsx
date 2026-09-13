import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageOutline } from "@/components/PageOutline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { WhyGuildFarm } from "@/components/sections/WhyGuildFarm";
import { pages } from "@/content/pages";

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
 * Phase 3-A（骨組み）の状態です。
 * ・ページヘッダーと、扱うセクションの一覧（見出し＋1行要約）まで。
 * ・既存セクション WhyGuildFarm は、コピーを失わないためそのまま置いています。
 *   本実装では設計書 content-design.md 第3章（A-01〜A-09）に沿って組み直します。
 *
 * ■ 文章 … src/content/pages.ts の about
 */
export default function AboutPage() {
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
      <WhyGuildFarm />
      <ClosingCta />
    </>
  );
}
