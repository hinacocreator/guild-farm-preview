import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";

/**
 * H-05 松井について。HOME専用の短縮版（3行＋引用1つ）。
 *
 * ⚠ 松井さん本人の写真は、まだ素材がありません。
 *   代わりに人物写真をあてると「この人が松井さん」と誤解されるため、
 *   風景写真（田植えを終えた田んぼ）で構成し、写真が本人ではないことを
 *   キャプション（home.ts の owner.photoNote）で明記しています。
 *   ★ 松井本人写真差し替え推奨 … 撮影できたら images.ts に追加して、
 *     下の <Photo> の image と photoNote を差し替えてください。
 *
 * ⚠ 肩書は「GUILD Farm オーナー」だけを使います
 *   （協議会の代表という肩書は誤りのため、サイトのどこにも書きません）。
 * ⚠ 後継者や相場などの社会課題の中身は、ここには書きません（/owner/ と /about/ の担当）。
 *
 * ■ 文章 … src/content/home.ts の owner
 * ■ 写真 … src/config/images.ts の expSeason（手のひらの玄米。人物の顔が写らない写真を選択）
 */
export function HomeOwner() {
  return (
    <section id="owner" className="bg-cream py-20 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:gap-14">
          {/* ★ 松井本人写真差し替え推奨（いまは風景写真です） */}
          <figure className="reveal md:col-span-5 md:mt-16">
            <Photo
              image={images.expSeason}
              ratio="1 / 1"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <figcaption className="mt-4 text-[0.72rem] leading-[1.9] text-ink-faint">
              {home.owner.photoNote}
            </figcaption>
          </figure>

          <div className="md:col-span-6 md:col-start-7">
            <SectionHeading
              index={home.owner.index}
              label={home.owner.label}
              title={home.owner.title}
            />

            {/* 名前と、唯一使う肩書 */}
            <div className="reveal mt-8 flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-sand pb-6">
              <p className="heading-jp text-[1.45rem] text-ink md:text-[1.75rem]">
                {home.owner.name}
              </p>
              <p className="text-[0.78rem] leading-[1.9] tracking-[0.04em] text-ink-faint">
                {home.owner.role}
              </p>
            </div>

            <div className="reveal mt-8 space-y-5 text-[0.95rem] leading-[2.1] text-ink-soft">
              {home.owner.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* 本人の言葉（原文）。文言は変えないでください */}
            <blockquote className="reveal mt-8 border-l border-moss/40 pl-6 md:mt-10 md:pl-8">
              <LeafIcon size={20} className="text-moss/70" />
              <p className="pull-quote mt-4 text-[1.05rem] text-soil md:text-[1.2rem]">
                {home.owner.quote}
              </p>
            </blockquote>

            <div className="reveal mt-10 md:mt-12">
              <TextLink href={home.owner.link.href} size="lg">
                {home.owner.link.label}
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
