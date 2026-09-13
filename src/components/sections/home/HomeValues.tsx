import type { ImageAsset } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { images } from "@/config/images";
import { home } from "@/content/home";
import { cn } from "@/lib/cn";

/**
 * H-03 ここで得られること。HOME専用。
 *
 * 設備の一覧ではなく「体験価値」を5つ並べます。詳しくは /life/ へ。
 *
 * ■ 文章 … src/content/home.ts の values
 * ■ 写真 … src/config/images.ts（下の photos で home.ts の photo キーと対応づけています）
 *
 * ※ 均等なカードにせず、写真の大小を混ぜています（下の layout）。
 *   並びを変えたいときは layout の span と ratio だけを触ってください。
 *   PCは12列。1段目 7+5、2段目 5+4+3 で12列ぶんに収まる組み合わせにしています。
 */

/** home.ts の photo キー → 実際の写真。キーを増やすとTypeScriptが対応を要求します */
const photos: Record<(typeof home.values.items)[number]["photo"], ImageAsset> = {
  expFarmwork: images.expFarmwork,
  expFood: images.expFood,
  dayWork: images.dayWork,
  expPeople: images.expPeople,
  aboutSoil: images.aboutSoil,
};

/** 写真の大きさ・比率・段差。home.values.items と同じ順です */
const layout = [
  { span: "col-span-2 md:col-span-7", ratio: "3 / 2", offset: "" },
  { span: "col-span-1 md:col-span-5", ratio: "4 / 5", offset: "md:mt-16" },
  { span: "col-span-1 md:col-span-5", ratio: "4 / 5", offset: "" },
  { span: "col-span-1 md:col-span-4", ratio: "1 / 1", offset: "md:mt-20" },
  { span: "col-span-1 md:col-span-3", ratio: "1 / 1", offset: "md:mt-8" },
] as const;

export function HomeValues() {
  return (
    <section id="values" className="bg-cream py-20 md:py-36">
      <Container>
        <div className="max-w-2xl">
          <SectionHeading
            index={home.values.index}
            label={home.values.label}
            title={home.values.title}
          />
          <p className="wrap-phrase reveal mt-6 text-[0.9rem] leading-[2] text-ink-faint md:text-[0.95rem]">
            {home.values.sub}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 items-start gap-x-4 gap-y-10 md:mt-20 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
          {home.values.items.map((item, i) => (
            <li
              key={item.title}
              className={cn("reveal", layout[i].span, layout[i].offset)}
            >
              <Photo
                image={photos[item.photo]}
                ratio={layout[i].ratio}
                sizes="(min-width: 768px) 45vw, 48vw"
              />
              <h3 className="heading-jp mt-5 text-[1.05rem] text-ink md:text-[1.25rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.82rem] leading-[2] text-ink-soft md:text-[0.9rem]">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 md:mt-20">
          <TextLink href={home.values.link.href} size="lg">
            {home.values.link.label}
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
