import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PageOutline } from "@/components/PageOutline";
import { ADay } from "@/components/sections/ADay";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Experience } from "@/components/sections/Experience";
import { Schedule } from "@/components/sections/Schedule";
import { pages } from "@/content/pages";

const page = pages.life;

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
 * /life/ 暮らし・過ごし方。
 *
 * Phase 3-A（骨組み）の状態です。
 * ・ページヘッダーと、扱うセクションの一覧（見出し＋1行要約）まで。
 * ・既存セクション ADay / Schedule（下部に Places を含む）/ Experience は、
 *   コピーを失わないためそのまま置いています。
 *   本実装では設計書 content-design.md 第5章（L-01〜L-09）に沿って、
 *   7列のスケジュール表ではなく「生活の物語」として組み直します。
 *
 * ■ 文章 … src/content/pages.ts の life
 */
export default function LifePage() {
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
      <ADay />
      <Schedule />
      <Experience />
      <ClosingCta />
    </>
  );
}
