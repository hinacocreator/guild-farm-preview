import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/config/images";
import { siteConfig } from "@/config/site";
import { common } from "@/content/common";
import { cn } from "@/lib/cn";

/**
 * JOURNAL / Instagram。
 * public/images/journal-01〜06.jpg の6枚を並べています。
 *
 * ■ 文章       … src/content/common.ts の journal
 * ■ 写真       … src/config/images.ts の journal（6枚）
 * ■ リンク先   … src/config/site.ts の social.instagram.url
 */
export function Journal() {
  return (
    <section
      id="journal"
      className="scroll-mt-16 bg-paper py-24 md:scroll-mt-20 md:py-36"
    >
      <Container>
        <div className="flex flex-col gap-9 md:flex-row md:items-end md:justify-between md:gap-14">
          <div className="max-w-xl">
            <SectionHeading
              index={common.journal.index}
              label={common.journal.label}
              title={common.journal.title}
            />
            <p className="reveal mt-8 text-[0.95rem] leading-[2.05] text-ink-soft">
              {common.journal.lead}
            </p>
          </div>

          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-sand px-6 py-3.5 text-[0.85rem] tracking-[0.05em] text-ink transition-colors duration-300 hover:border-clay hover:text-clay md:self-auto"
          >
            <span>{common.journal.cta}</span>
            <span className="numeral hidden text-[0.72rem] text-ink-faint transition-colors duration-300 group-hover:text-clay sm:inline">
              {siteConfig.social.instagram.handle}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* 6枚。1枚だけ大きさを変えて、整然としすぎないように */}
        <ul className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {images.journal.map((photo, i) => (
            <li
              key={photo.src}
              className={cn("reveal", i % 3 === 1 && "lg:mt-8")}
            >
              <Photo
                image={photo}
                ratio="1 / 1"
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
