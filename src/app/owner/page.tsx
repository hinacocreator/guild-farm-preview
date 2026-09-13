import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageOutline } from "@/components/PageOutline";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Story } from "@/components/sections/Story";
import { pages } from "@/content/pages";

const page = pages.owner;

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
 * /owner/ 松井について。
 *
 * Phase 3-A（骨組み）の状態です。
 * ・ページヘッダーと、扱うセクションの一覧（見出し＋1行要約）まで。
 * ・既存セクション Story は、コピーを失わないためそのまま置いています。
 *   本実装では設計書 content-design.md 第4章（O-01〜O-11）に沿って
 *   時系列の読み物に組み直します。
 *
 * ⚠ 松井さん本人の写真は素材にありません（Story の写真は仮です）。
 *   本人写真への差し替えを推奨します。
 *
 * ■ 文章 … src/content/pages.ts の owner
 */
export default function OwnerPage() {
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
      <Story />
      <ClosingCta />
    </>
  );
}
