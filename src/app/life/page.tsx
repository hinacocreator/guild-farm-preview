import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { LifeDay } from "@/components/sections/life/LifeDay";
import { LifeFirstWeek } from "@/components/sections/life/LifeFirstWeek";
import { LifeLiving } from "@/components/sections/life/LifeLiving";
import { LifeMonth } from "@/components/sections/life/LifeMonth";
import { LifeNext } from "@/components/sections/life/LifeNext";
import { LifePlaces } from "@/components/sections/life/LifePlaces";
import { applyHref, siteConfig } from "@/config/site";
import { life } from "@/content/life";
import { pages } from "@/content/pages";

/** <title> と説明文は src/content/pages.ts の値をそのまま使っています */
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
  /* twitter を省くと layout.tsx のHOMEの値が全ページに出てしまうため、
     ページごとに上書きしています（2026-09-16 最終回遊QA） */
  twitter: {
    title: page.metaTitle,
    description: page.description,
  },
};

/**
 * /life/ 暮らし・過ごし方。
 *
 * このページの役割は「自分がここに滞在したら、どこで暮らして、どこへ行って、
 * どんな1日・1週間・1ヶ月を過ごすのか」を具体的に想像できるようにすることです。
 * HOME / ABOUT / OWNER で書いた考え方は、ここでは繰り返しません。
 *
 * ■ 文章 … src/content/life.ts（このページに出る文字は全部ここにあります）
 * ■ セクション … src/components/sections/life/
 * ■ 棚卸し（どの文がどの出典か・何を削ったか）… docs/life-inventory.md
 *
 * ▼ セクションの順番（2026-09-16 ブランド編集）
 *   01 最初の1週間        LifeFirstWeek
 *   02 畑に行く日の、1日。  LifeDay
 *   03 場所について        LifePlaces  ← 02 の直後であることが重要
 *   04 1ヶ月で滞在するなら  LifeMonth
 *   05 仕事 / 06 食 / 07 地域・人   LifeLiving（3つの section を出力します）
 *   08 プラン・料金への導線  LifeNext
 *
 * ▼ 以前の構成からの変更
 *   ・「1週間滞在の6日間」と「1ヶ月の1週目」を 01 最初の1週間 に統合しました。
 *     どちらも「GUILD Farm側が予定を用意する」という同じ趣旨だからです。
 *   ・「農」セクションを解体し、畑での作業の話は 02（1日の続き）へ、
 *     体験の場所3か所と位置関係の模式図は 03 場所について へ移しました。
 *   ・「畑のほかの時間」の5章のうち、自由時間は 04 へ、地域は 03 へ統合し、
 *     残りを 仕事 / 食 / 地域・人 の独立したセクションにしました。
 *
 * ⚠ このページに書かないもの
 *   料金の数字・受け入れ時期・部屋の広さ・設備の一覧 → /plans/
 *   持ち物・申し込みの手順 → /flow/
 *   具体的な時刻（出典にないため）／個人名（「地域の農家さん」等と書きます）
 *   「ワーケーション」／三津浜の部屋・設備・立地の魅力（未整備。pending-facts.md 参照）
 */
export default function LifePage() {
  return (
    <>
      <PageHeader
        label={life.header.label}
        title={life.header.title}
        sub={life.header.sub}
        lead={life.header.lead}
      />

      <LifeFirstWeek />
      <LifeDay />
      <LifePlaces />
      <LifeMonth />
      <LifeLiving />
      <LifeNext />

      {/* 主＝相談（既定の contactHref）／副＝申し込み（Googleフォーム）。
          どのページの末尾でも、申し込みと相談の両方に進めるようにしています */}
      <ClosingCta
        title={life.closing.title}
        body={life.closing.body}
        cta={life.closing.cta}
        secondary={{
          label: life.closing.secondary,
          href: applyHref,
          note: siteConfig.applyNote,
        }}
        note={life.closing.note}
        next={life.closing.next}
      />
    </>
  );
}
