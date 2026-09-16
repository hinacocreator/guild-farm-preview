import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { OwnerChapters } from "@/components/sections/owner/OwnerChapters";
import { OwnerFuture } from "@/components/sections/owner/OwnerFuture";
import { OwnerInvitation } from "@/components/sections/owner/OwnerInvitation";
import { OwnerNote } from "@/components/sections/owner/OwnerNote";
import { OwnerTimeline } from "@/components/sections/owner/OwnerTimeline";
import { OwnerVoices } from "@/components/sections/owner/OwnerVoices";
import { applyHref, siteConfig } from "@/config/site";
import { owner } from "@/content/owner";
import { pages } from "@/content/pages";

/** metadata（title / description / canonical）は src/content/pages.ts の値のままです */
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
  /* twitter を省くと layout.tsx のHOMEの値が全ページに出てしまうため、
     ページごとに上書きしています（2026-09-16 最終回遊QA） */
  twitter: {
    title: page.metaTitle,
    description: page.description,
  },
};

/**
 * /owner/ 松井について。
 *
 * ■ ページの役割（2026-09-16 クライアント確定・owner-brand-edit.md）
 *   プロフィール紹介ではなく、松井さんがどんな経験をして何を考え、
 *   なぜGUILD Farmを始めるに至ったかを、本人の実体験と言葉で伝える読み物です。
 *   ABOUT＝GUILD Farmとは何か／このページ＝その背景にいる人。
 *   成功談にしません。行き詰まったこと・凹んだことも書きます。脚色はしません。
 *
 * ■ 並び（owner-brand-edit.md 2〜11）
 *   —  PageHeader       松井について／GUILD Farm オーナー　松井 真弥／簡潔な導入
 *   —  OwnerTimeline    年表ナビ（読む順。年代順ではありません）＋写真
 *   01 OwnerChapters    愛媛で農と出会う
 *   02                  肥料を使わない農業へ
 *   03                  うまくいかなかった、5年間。
 *   04                  農業そのものについて、考える。
 *   05                  東北と、19世帯の集落での暮らし。
 *   06                  2015年、そして2020年。
 *   07                  不安や危機感から、“心地イイ”へ。
 *   08                  GUILD Farmを始める。
 *   09 OwnerInvitation  どんな人に来てほしいか。
 *   10 OwnerVoices      滞在した人の言葉（3つ・属性なし）
 *   11 OwnerFuture      これから。
 *   —  OwnerNote        松井さんのnoteへ（外部リンク・2026-09-16）
 *   —  ClosingCta       共通CTA …… 主＝相談／副＝申し込み（＋次に読む: /plans/）
 *
 * ⚠ 松井さん本人の写真は素材にありません。
 *   ★ 松井本人写真差し替え推奨 … 柑橘・土・畑・米・竹林・収穫の写真で構成しています。
 *     人物の顔が大きく写り「この人が松井さん」と誤解されうる写真
 *     （dayMorning / dayDinner / journal[5] / expPeople / journal[3] / owner）は
 *     使っていません。
 *
 * ⚠ ページ名称は「松井について」です。プロフィール表記は
 *   「GUILD Farm オーナー　松井 真弥」（肩書＋氏名）。
 *   「オーナー松井」はページ名でもプロフィール名でもなく、文章中の人物表現です。
 *   ナビ・フッター・HOME/ABOUTからのリンク・metadata・OGP も「松井について」で揃えています。
 *   URL（/owner/）は変えません。氏名のふりがなは※要確認です。
 * ⚠ 引用は matsui-story.txt の原文です。方言（「ええけど」「〜せな」「やば」「最高やん！」）や
 *   「畳み1畳」を標準語・一般表記に直さないでください。
 * ⚠ 松井さんの人生を要約・意味づけする文を足さないでください
 *   （owner-brand-edit.md 1. 編集原則）。
 *
 * ■ このページに置かないもの（他ページの担当）
 *   料金・設備（→ /plans/）／滞在中の過ごし方の詳細（→ /life/）
 *   ※「畳み1畳の畑」「半径2kmの農的社会コミュニティ」は、本人の言葉としてこのページの
 *     「これから。」に置いています（GUILD Farmの構想としての説明は /about/#future）。
 *   ※ 後継者・相場などの問題意識と、無肥料を選んだ理由の引用は ABOUT からこのページへ
 *     移設済みです（CHANGELOG-phase3a.md「ABOUTブランド編集」2章）。
 *   ※ Phase 2 の旧セクション Story は、このページの本文に置き換えました
 *     （旧 src/content/copy.ts は削除済みです。履歴で参照してください）。
 *
 * ■ 文章 … src/content/owner.ts（このページの文字はすべてここ）
 * ■ 棚卸し … docs/owner-inventory.md
 */
export default function OwnerPage() {
  return (
    <>
      <PageHeader
        label={owner.header.label}
        title={owner.header.title}
        sub={owner.header.sub}
        lead={owner.header.lead}
      />
      <OwnerTimeline />
      <OwnerChapters />
      <OwnerInvitation />
      <OwnerVoices />
      <OwnerFuture />
      {/* 本文の後、ページ末尾のCTAの前。松井さんのnoteへの外部リンクだけの小さな章です */}
      <OwnerNote />
      {/* 主＝相談（既定の contactHref）／副＝申し込み（Googleフォーム）。
          どのページの末尾でも、申し込みと相談の両方に進めるようにしています */}
      <ClosingCta
        title={owner.closing.title}
        body={owner.closing.body}
        cta={owner.closing.cta}
        secondary={{
          label: owner.closing.secondary,
          href: applyHref,
          note: siteConfig.applyNote,
        }}
        note={owner.closing.note}
        next={owner.closing.next}
      />
    </>
  );
}
