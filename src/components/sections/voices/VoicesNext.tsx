import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { voices } from "@/content/voices";

/**
 * /voices/ 02 他のページへの戻り導線。
 *
 * このページは短く読み終わるので、読んだあとの行き先を2つだけ置きます。
 * 「どう過ごすのか」＝ /life/ ／「この場所をはじめた人」＝ /owner/。
 *
 * ⚠ 写真は使いません（直後の ClosingCta が写真の面なので、ここは紙の面で受けます。
 *   LifeNext と同じ考え方です）。
 * ⚠ /life/ と /owner/ の本文は編集しません。ここからリンクするだけです。
 *
 * ■ 文章 … src/content/voices.ts の next
 */
export function VoicesNext() {
  return (
    <section
      id={voices.next.id}
      className="scroll-mt-16 bg-cream py-16 md:scroll-mt-20 md:py-28"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-14">
          <div className="md:col-span-5">
            <SectionHeading
              index={voices.next.index}
              label={voices.next.label}
              title={voices.next.title}
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="reveal space-y-4 text-[0.9rem] leading-[2.05] text-ink-soft md:text-[0.95rem]">
              {voices.next.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="reveal mt-8 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:gap-x-10">
              {voices.next.links.map((link) => (
                <TextLink key={link.href} href={link.href} size="lg">
                  {link.label}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
