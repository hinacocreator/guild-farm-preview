import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { OwnerChapters } from "@/components/sections/owner/OwnerChapters";
import { OwnerInvitation } from "@/components/sections/owner/OwnerInvitation";
import { OwnerTimeline } from "@/components/sections/owner/OwnerTimeline";
import { OwnerVoices } from "@/components/sections/owner/OwnerVoices";
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
};

/**
 * /owner/ 松井について。
 *
 * ■ ページの役割
 *   プロフィールページではなく、一人の人間の経験からGUILD Farmが生まれるまでの読み物です。
 *   成功談ではなく、行き詰まったこと・凹んだことも書きます（そこが信頼になります）。
 *   脚色はしません。資料にない事実は作りません。
 *
 * ■ 並び（設計書 content-design.md 第4章 O-01〜O-12 に対応）
 *   O-01     PageHeader       この場所を、はじめた人。／松井 真弥（GUILD Farm オーナー）
 *   —        OwnerTimeline    年表ナビ（2011 → 今）＋写真
 *   O-02〜09 OwnerChapters    時系列の本文9章（各章に id。年表からここへ飛びます）
 *   O-10     OwnerInvitation  どんな人に来てほしいか。
 *   O-11     OwnerVoices      滞在した人の言葉（3つ・属性なし）
 *   O-12     ClosingCta       共通CTA …… 問い合わせ（＋次に読む: /plans/）
 *
 * ⚠ 松井さん本人の写真は素材にありません。
 *   ★ 松井本人写真差し替え推奨 … 米・田んぼ・畑・作業の写真で構成しています。
 *     代わりに別の人物写真をあてると「この人が松井さん」と誤解されるため、
 *     人物が主役の写真は使っていません（OwnerTimeline のコメントも参照）。
 *
 * ⚠ 肩書は「GUILD Farm オーナー」だけです。氏名の表記・ふりがなは※要確認です。
 * ⚠ 引用は matsui-story.txt の原文です。方言（「ええけど」「〜せな」「やば」「最高やん！」）を
 *   標準語に直さないでください。
 *
 * ■ このページに置かないもの（他ページの担当）
 *   後継者・相場などの社会課題の説明の全文（→ /about/）
 *   ／「畳1畳の畑」「半径2kmの農的社会コミュニティ」（→ /about/#future）
 *   ／料金・設備（→ /plans/）
 *   ※ Phase 2 の旧セクション Story は、このページの本文に置き換えました
 *     （元のコピーは src/content/copy.ts の story に残しています）。
 *
 * ■ 文章 … src/content/owner.ts（このページの文字はすべてここ）
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
      <ClosingCta
        title={owner.closing.title}
        body={owner.closing.body}
        cta={owner.closing.cta}
        note={owner.closing.note}
        next={owner.closing.next}
      />
    </>
  );
}
