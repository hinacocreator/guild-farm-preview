"use client";

import { useEffect, useState } from "react";
import { contactHref } from "@/config/site";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/**
 * スマホ用の、画面下に固定される細いCTAバー。
 * HERO（#top）が画面から出たタイミングで現れます。
 * ・PC（md以上）では表示しません。ヘッダーのCTAがあるためです。
 * ・文言は src/content/copy.ts の stickyBar を見ています。
 */
export function StickyCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [overContact, setOverContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // #contact（最後のCTAセクション）が画面に入っている間は、
  // ボタンやフッターに重ならないようバーを隠します。
  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverContact(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !overContact;

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={contactHref}
        tabIndex={visible ? undefined : -1}
        className="flex items-center justify-between gap-3 bg-clay px-5 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] text-paper"
      >
        <span className="flex items-baseline gap-1.5 leading-none">
          <span className="numeral text-[1.05rem]">
            {copy.stickyBar.price}
          </span>
          <span className="text-[0.65rem] text-paper">
            {copy.stickyBar.priceNote}
          </span>
        </span>
        <span className="flex items-center gap-2 whitespace-nowrap text-[0.85rem] tracking-[0.05em]">
          {copy.stickyBar.cta}
          <span aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  );
}
