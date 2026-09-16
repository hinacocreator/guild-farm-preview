import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FlowConsult } from "@/components/sections/flow/FlowConsult";
import { FlowEntries } from "@/components/sections/flow/FlowEntries";
import { FlowFaq } from "@/components/sections/flow/FlowFaq";
import { FlowPrepare } from "@/components/sections/flow/FlowPrepare";
import { FlowSteps } from "@/components/sections/flow/FlowSteps";
import { applyHref, contactHref, siteConfig } from "@/config/site";
import { flow } from "@/content/flow";

export const metadata: Metadata = {
  title: { absolute: flow.meta.metaTitle },
  description: flow.meta.description,
  alternates: { canonical: flow.meta.path },
  openGraph: {
    title: flow.meta.metaTitle,
    description: flow.meta.description,
    url: flow.meta.path,
  },
  /* twitter を省くと layout.tsx のHOMEの値が全ページに出てしまうため、
     ページごとに上書きしています（2026-09-16 最終回遊QA） */
  twitter: {
    title: flow.meta.metaTitle,
    description: flow.meta.description,
  },
};

/**
 * /flow/ 滞在までの流れ。
 *
 * ■ 役割（flow-brand-edit.md 指示書3）
 *   第一の目的は、滞在したい人を迷わせずに**申し込みまで**案内することです。
 *   副次的に、まだ決めきれない人が申し込み前に相談できることを伝えます。
 *
 * ⚠ 事前相談や面談は必須ではありません（クライアント確定・2026-09-16）。
 *   「問い合わせ → 相談・面談 → 申し込み」を必須のフローとして見せないでください。
 *   相談は STEP の中ではなく、STEP の後ろに独立した任意の導線として置いています。
 *
 * ■ 並び（指示書4の構成そのままです。順番を変えないでください）
 *   —     PageHeader    h1「滞在までの流れ」＋導入
 *   01    FlowEntries   2つの入口（主＝申し込む／副＝相談する）
 *   02    FlowSteps     申し込みから、滞在がはじまるまで。（STEP 01〜05）
 *   03    FlowConsult   申し込む前に相談したい方へ（任意）
 *   04    FlowPrepare   滞在前に確認しておきたいこと（用意されているもの／自分で用意するもの）
 *   05    FlowFaq       よくある質問
 *   —     ClosingCta    主「滞在を申し込む」／副「滞在について相談する」
 *
 * ■ 文章 … src/content/flow.ts（このページの文字はすべてここ）
 * ■ 棚卸し … docs/flow-inventory.md（KEEP/TUNE/MOVE/MERGE/CUT の判断）
 *
 * ■ このページに書かないもの
 *   料金の数字（→ /plans/）／部屋・設備の詳細・周辺環境（→ /plans/）／
 *   畑3か所の所要時間・位置関係（→ /plans/・/life/）／1日・1週間・1ヶ月の過ごし方（→ /life/）／
 *   「山岡 技術学びの日」（何を学ぶ日かが未確認のため、意味を補完しません）。
 *
 * ■ ClosingCta のリンク先（2026-09-16 最終回遊QA）
 *   このページと /plans/ は 主＝applyHref（申し込み・Googleフォーム）／
 *   副＝contactHref（相談・メール）です。
 *   HOME・ABOUT・OWNER・LIFE・VOICES は逆で、主＝相談／副＝申し込みにしています。
 *   どのページの末尾でも、申し込みと相談の両方に進めます。
 */
export default function FlowPage() {
  return (
    <>
      <PageHeader
        label={flow.header.label}
        title={flow.header.title}
        lead={flow.header.lead}
      />
      <FlowEntries />
      <FlowSteps />
      <FlowConsult />
      <FlowPrepare />
      <FlowFaq />
      <ClosingCta
        title={flow.closing.title}
        body={flow.closing.body}
        cta={flow.closing.cta}
        ctaHref={applyHref}
        ctaNote={siteConfig.applyNote}
        secondary={{ label: flow.closing.secondary, href: contactHref }}
        note={flow.closing.note}
      />
    </>
  );
}
