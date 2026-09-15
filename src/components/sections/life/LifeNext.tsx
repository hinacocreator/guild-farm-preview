import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { life } from "@/content/life";

/**
 * /life/ 08 プラン・料金への導線。
 *
 * ページを読み終えた人が、次に知りたいのは「で、どちらで来るのか」「いくらか」です。
 * 本文中に散らばっていた /plans/ へのリンク（1週間・1ヶ月の各セクションにありました）を、
 * この1か所にまとめています。
 *
 * ⚠ 料金の数字はここには書きません（/plans/ の担当。数字の正は src/config/site.ts）。
 * ⚠ /plans/ の本文は編集しません。
 *
 * ■ 文章 … src/content/life.ts の next
 * ■ 写真 … 使いません（直後の ClosingCta が写真の面なので、ここは紙の面で受けます）
 */
export function LifeNext() {
  return (
    <section
      id="next"
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-28"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-14">
          <div className="md:col-span-5">
            <SectionHeading
              index={life.next.index}
              label={life.next.label}
              title={life.next.title}
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="reveal space-y-4 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {life.next.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="reveal mt-8">
              <TextLink href={life.next.link.href} size="lg">
                {life.next.link.label}
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
