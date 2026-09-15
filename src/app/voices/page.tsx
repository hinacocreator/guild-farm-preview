import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { VoicesNext } from "@/components/sections/voices/VoicesNext";
import { VoicesQuotes } from "@/components/sections/voices/VoicesQuotes";
import { VoicesStories } from "@/components/sections/voices/VoicesStories";
import { pages } from "@/content/pages";
import { voices } from "@/content/voices";

/** <title> と説明文は src/content/pages.ts の値をそのまま使っています */
const page = pages.voices;

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
 * /voices/ 滞在者の声。
 *
 * ■ ページの役割
 *   実際にGUILD Farmで過ごした人が、どんな時間を過ごし、何を感じたかを知るページです。
 *   これから体験ストーリー（1人ずつの滞在記）を足していく器として作っています。
 *   以前 docs/stories-plan.md に書いていた /stories/ の構想は、このページに統合しました。
 *
 * ■ いま置いているもの
 *   確認済みの3つの言葉だけです（matsui-story.txt の原文）。
 *   同じ3つが HOME（H-08）と /owner/（10 滞在した人の言葉）にもあります。
 *   いまサイトにある滞在者の声がこの3つしかないためで、意図した重複です。
 *   ストーリーが増えたら、HOME と /owner/ は抜粋のまま、
 *   このページを「全部が載っている場所」にしていく想定です。
 *
 * ■ 並び
 *   —  PageHeader     滞在者の声 ／ リード2行（事実のみ）
 *   01 VoicesQuotes   3つの言葉（原文・明朝・1つずつ余白）＋注記＋写真1枚
 *   -- VoicesStories  体験ストーリー。0件のあいだは、見出しごと出しません
 *   02 VoicesNext     /life/ と /owner/ への戻り導線
 *   —  ClosingCta     共通CTA（次に読む: /life/）
 *
 * ⚠ このページで絶対にやらないこと（クライアント確定）
 *   ・3つの言葉を整える／増やす（原文どおり・3つだけ）
 *   ・名前・年齢・職業・居住地・滞在期間・理由・行動・感情・Before/After の補完
 *   ・「人生観が変わった」「本当の豊かさに気づいた」等の、言葉への意味づけ
 *   ・「準備中」「今後追加予定」のような空欄表示
 *   ・料金の数字（→ /plans/）／滞在中の過ごし方の詳細（→ /life/）
 *   ・人物の顔が大きく写る写真（掲載許諾の状況が未確認のため）
 *
 * ■ 文章 … src/content/voices.ts（このページに出る文字は全部ここにあります）
 * ■ 将来の滞在記の扱い … docs/stories-plan.md
 */
export default function VoicesPage() {
  return (
    <>
      <PageHeader
        label={voices.header.label}
        title={voices.header.title}
        lead={voices.header.lead}
      />

      <VoicesQuotes />
      {/* stories が0件のあいだは、このコンポーネントが null を返します */}
      <VoicesStories />
      <VoicesNext />

      <ClosingCta
        title={voices.closing.title}
        body={voices.closing.body}
        cta={voices.closing.cta}
        note={voices.closing.note}
        next={voices.closing.next}
      />
    </>
  );
}
