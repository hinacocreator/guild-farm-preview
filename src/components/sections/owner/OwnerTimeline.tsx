import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { owner } from "@/content/owner";

/**
 * 「松井について」の年表ナビ（ページ上部）。
 *
 * 長い読み物なので、先に「いつ・何があったか」を一覧で見せて、
 * 読みたいところへ飛べるようにしています。
 * リンク先は OwnerChapters の各章の id（#ehime など）です。
 * → id は src/content/owner.ts の chapters と timeline の両方にあります。
 *   変えるときは両方を直してください。
 *
 * ⚠ 並びは「読む順（章の順）」であって、年代順ではありません
 *   （owner-brand-edit.md の章立てに合わせています）。
 * ⚠「10年前」は相対表記のままです（資料の作成時点が不明なため）。西暦に直さないでください。
 *
 * ★ 松井本人写真差し替え推奨
 *   本人の写真が素材にないため、稲刈りの写真を置いています。
 *   人物の顔が大きく写る写真をあてると「この人が松井さん」と誤解されるので、
 *   そうした写真は使いません。撮影できたら images.ts に追加して、
 *   下の <Photo> の image と owner.timeline.photoNote を差し替えてください。
 *
 * ■ 文章 … src/content/owner.ts の timeline
 * ■ 写真 … src/config/images.ts の hero（秋の田んぼで稲刈り）
 *
 * ※ ページ内リンクなので next/link ではなく素の <a> を使っています
 *   （同一ページ内のアンカーは、そのままのほうが確実に動きます）。
 */
export function OwnerTimeline() {
  return (
    <section
      id="timeline"
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-28"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{owner.timeline.label}</span>
            </p>

            <h2 className="heading-jp heading-item reveal mt-5 text-ink">
              {owner.timeline.title}
            </h2>

            <ol className="mt-8 border-t border-sand md:mt-10">
              {owner.timeline.items.map((item) => (
                <li key={item.href} className="reveal border-b border-sand">
                  <a
                    href={item.href}
                    className="group flex items-baseline gap-4 py-5 transition-colors duration-300 hover:text-clay md:gap-8"
                  >
                    <span className="numeral w-[4.5em] shrink-0 text-[0.85rem] tracking-[0.06em] text-ink-faint md:w-[6em] md:text-[0.95rem]">
                      {item.year}
                    </span>
                    <span className="text-[0.85rem] leading-[1.9] text-ink md:text-[0.95rem]">
                      {item.text}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↓
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ★ 松井本人写真差し替え推奨（いまは稲刈りの写真です） */}
          <figure className="reveal md:col-span-4 md:col-start-9 md:mt-16">
            <Photo
              image={images.hero}
              ratio="4 / 5"
              sizes="(min-width: 768px) 30vw, 100vw"
              objectPosition="object-center"
            />
            <figcaption className="mt-4 text-[0.72rem] leading-[1.9] text-ink-faint">
              {owner.timeline.photoNote}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
