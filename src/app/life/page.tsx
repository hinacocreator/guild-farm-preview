import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { LifeChapters } from "@/components/sections/life/LifeChapters";
import { LifeDay } from "@/components/sections/life/LifeDay";
import { LifeFarm } from "@/components/sections/life/LifeFarm";
import { LifeMonth } from "@/components/sections/life/LifeMonth";
import { LifeWeek } from "@/components/sections/life/LifeWeek";
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
};

/**
 * /life/ 暮らし・過ごし方（Phase 3-B 本実装）。
 *
 * このページの役割は「ここで暮らしたら自分の1日はどうなるか」を想像できるようにすること。
 * 時間割の表ではなく、1日 → 1週間 → 1ヶ月 → 畑 → 畑のほかの時間、という順の読み物です。
 *
 * ■ 文章 … src/content/life.ts（このページに出る文字は全部ここにあります）
 * ■ セクション … src/components/sections/life/
 *
 * ▼ Phase 3-A からの変更
 *   ・PageOutline（見出しの一覧）を外しました。本文が入ったので不要です。
 *   ・旧 ADay / Schedule / Places / Experience は使っていません。
 *     7列の曜日グリッドは廃止し、曜日は縦に並べた軽い一覧にしています。
 *     旧セクションの文章は src/content/copy.ts にデータとして残っています。
 *
 * ⚠ このページに書かないもの
 *   料金の数字・受け入れ時期・部屋の広さ・設備の一覧 → /plans/
 *   持ち物・申し込みの手順 → /flow/
 *   具体的な時刻（出典にないため）／個人名（「地域の農家さん」等と書きます）
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

      <LifeDay />
      <LifeWeek />
      <LifeMonth />
      <LifeFarm />
      <LifeChapters />

      <ClosingCta
        title={life.closing.title}
        body={life.closing.body}
        cta={life.closing.cta}
        note={life.closing.note}
        next={life.closing.next}
      />
    </>
  );
}
