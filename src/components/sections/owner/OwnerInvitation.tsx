import { Container } from "@/components/ui/Container";
import { LeafIcon } from "@/components/ui/LeafIcon";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/config/images";
import { owner } from "@/content/owner";

/**
 * 「松井について」の「どんな人に来てほしいか。」
 *
 * ほとんど松井さんの原文です。引用を主役にして、地の文は補足だけにしています。
 *
 * ⚠ 引用は matsui-story.txt の原文です。文言を変えないでください
 *   （「〜を描いているので笑」の「笑」も残します）。
 * ⚠「快適さを重視する方には合いません」のような、人を選別する語調は使いません。
 *   設備についての正直な注意は /plans/ の担当です。
 *
 * ■ 文章 … src/content/owner.ts の invitation
 * ■ 写真 … src/config/images.ts の expFood（採れた野菜をつかった食事）
 *   ⚠ 以前使っていた dayMorning は人物の顔が大きく写っており、
 *     「この人が松井さん」と誤解されうるため使いません（owner-brand-edit.md 12.）。
 */
export function OwnerInvitation() {
  return (
    <section
      id={owner.invitation.id}
      className="scroll-mt-16 bg-cream py-20 md:scroll-mt-20 md:py-32"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <figure className="reveal md:col-span-5 md:mt-14">
            <Photo
              image={images.expFood}
              ratio="4 / 5"
              sizes="(min-width: 768px) 38vw, 100vw"
              objectPosition="object-center"
            />
          </figure>

          <div className="md:col-span-6 md:col-start-7">
            <p className="label-en reveal flex items-center gap-3 text-[0.7rem] text-ink-faint">
              <span className="numeral">{owner.invitation.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink-faint/50" />
              <span>{owner.invitation.label}</span>
            </p>

            <h2 className="heading-jp heading-section reveal mt-5 text-ink">
              {owner.invitation.title}
            </h2>

            {/* 本人の言葉（原文）。2つ続けて置いています */}
            <div className="reveal mt-9 space-y-7 md:mt-12">
              <LeafIcon size={22} className="text-moss/70" />
              {owner.invitation.quotes.map((quote) => (
                <blockquote key={quote}>
                  <p className="pull-quote text-[1.08rem] leading-[1.95] text-soil md:text-[1.3rem]">
                    {quote}
                  </p>
                </blockquote>
              ))}
            </div>

            <div className="reveal mt-9 space-y-5 border-t border-sand pt-8 text-[0.95rem] leading-[2.1] text-ink-soft md:text-[1rem]">
              {owner.invitation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
