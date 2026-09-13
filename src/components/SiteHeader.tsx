"use client";

import { useEffect, useState } from "react";
import { contactHref, navItems, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * 画面上部のヘッダー。
 * ・最初はHERO写真の上に透明で重なり、少しスクロールすると紙色の背景になります。
 * ・スマホではナビゲーションを畳んで、ロゴと「入居について相談する」だけを残しています
 *   （ハンバーガーメニューは置きません）。
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-sand bg-paper/92 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      {/* HERO写真の上にいるあいだ、ロゴとナビを読ませるための薄い影。
          空が明るい写真だと文字が飛んでしまうため敷いています。
          スクロールしてヘッダーが紙色になったら消えます。 */}
      {!scrolled ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/55 to-transparent"
        />
      ) : null}

      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <a
          href="#top"
          className={cn(
            "font-display shrink-0 text-[1.05rem] tracking-[0.16em] transition-colors duration-500 md:text-[1.15rem]",
            scrolled ? "text-ink" : "text-paper",
          )}
        >
          {siteConfig.name.toUpperCase()}
        </a>

        <nav aria-label="セクション" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "label-en text-[0.66rem] transition-opacity duration-300 hover:opacity-60",
                    scrolled ? "text-ink-soft" : "text-paper/90",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={contactHref}
          className={cn(
            "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[0.75rem] tracking-[0.05em] transition-colors duration-300 md:px-6 md:py-2.5 md:text-[0.82rem]",
            scrolled
              ? "bg-clay text-paper hover:bg-clay-deep"
              : "border border-paper/60 text-paper hover:bg-paper hover:text-clay",
          )}
        >
          {siteConfig.ctaLabel}
        </a>
      </div>
    </header>
  );
}
