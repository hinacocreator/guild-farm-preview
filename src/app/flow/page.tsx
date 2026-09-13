import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FlowAccess } from "@/components/sections/flow/FlowAccess";
import { FlowConcerns } from "@/components/sections/flow/FlowConcerns";
import { FlowFaq } from "@/components/sections/flow/FlowFaq";
import { FlowPacking } from "@/components/sections/flow/FlowPacking";
import { FlowSteps } from "@/components/sections/flow/FlowSteps";
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
};

/**
 * /flow/ 入居までの流れ。
 * ※ ページ名だけは「入居」を使います。本文・ボタンでは「滞在」に統一します。
 *
 * ■ 役割
 *   検討し始めた人の不安をなくすページです。
 *   「何から始めるか」「何を用意するか」「どこへ行くか」「来てから困らないか」に答えます。
 *
 * ■ 並び（設計書 content-design.md 第7章 F-01〜F-06 に対応）
 *   F-01     PageHeader     まず、話を聞くところから。
 *   F-02  01 FlowSteps      滞在がはじまるまでの、5つのこと。（＋確認中のことの脚注）
 *   F-03  02 FlowPacking    持ってくるもの。
 *   F-04  03 FlowAccess     場所のこと。（滞在先2か所・体験の場所3か所）
 *   　    04 FlowConcerns   知っておいてほしいこと。（雨・土日・受け入れ時期）
 *   F-05  05 FlowFaq        よくある質問（料金以外の6問）
 *   F-06     ClosingCta     問い合わせへ（「次に読む」は置きません）
 *
 * ■ 文章 … src/content/flow.ts（このページの文字はすべてここ）
 *   ※ 旧セクション Flow のコピーは src/content/copy.ts に残しています。
 *
 * ■ このページに書かないもの
 *   料金の数字（→ /plans/）。金額に関わる質問は /plans/ のFAQへリンクで送ります。
 *   部屋・設備の詳細（→ /plans/）／1日・1週間・1ヶ月の過ごし方（→ /life/）。
 *
 * ■ ClosingCta に next を渡していない理由
 *   このページが回遊の終点で、次に進む先が問い合わせそのものだからです
 *   （ボタンのリンク先は src/config/site.ts の contactHref）。
 */
export default function FlowPage() {
  return (
    <>
      <PageHeader
        label={flow.header.label}
        title={flow.header.title}
        sub={flow.header.sub}
        lead={flow.header.lead}
      />
      <FlowSteps />
      <FlowPacking />
      <FlowAccess />
      <FlowConcerns />
      <FlowFaq />
      <ClosingCta
        title={flow.closing.title}
        body={flow.closing.body}
        cta={flow.closing.cta}
        note={flow.closing.note}
      />
    </>
  );
}
