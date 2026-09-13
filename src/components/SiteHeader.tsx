"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { contactHref, navItems, siteConfig } from "@/config/site";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/** window のスクロールを購読します（useSyncExternalStore 用・関数は使い回します） */
function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** いま少しでもスクロールしているか（HEROの写真から外れたか） */
function getScrolled(): boolean {
  return window.scrollY > 40;
}

/** サーバー側＝まだスクロールしていない状態として描画します */
function getScrolledOnServer(): boolean {
  return false;
}

/** 末尾スラッシュの有無を無視してパスを比べるための正規化 */
function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/**
 * 画面上部に固定されるヘッダー（全ページ共通・layout.tsx から呼ばれます）。
 *
 * ■ 背景
 *   ・HOME（/）だけは、HERO写真の上に透明で重なり、少しスクロールすると生成りになります。
 *   ・下層ページはHERO写真がないため、最初から生成りの背景です。
 * ■ ナビ
 *   ・PC（lg以上）は5項目を横に並べ、右端にCTAボタン。
 *   ・スマホはハンバーガー。開くと深緑の面に、明朝の大きな日本語ラベルが並びます。
 * ■ 項目 … src/config/site.ts の navItems
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = normalize(pathname) === "";

  // スクロール量は「外部の状態」なので、useSyncExternalStore で読みます。
  // （useEffect で setState すると余分な再描画が起きるため）
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    getScrolled,
    getScrolledOnServer,
  );

  /**
   * ハンバーガーメニューの開閉。
   * 「どのページで開いたか」を覚えておき、ページが変わったら自動的に閉じます。
   */
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;

  // メニューを開いているあいだは、背面のページがスクロールしないようにします。
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Escキーで閉じられるようにします。
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedOn(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  /** 生成りの背景（＝写真の上ではない状態）かどうか */
  const solid = scrolled || !isHome;
  /** ハンバーガーを開いているあいだは、ロゴとボタンを生成り側の色で出します */
  const onDark = !solid || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        menuOpen
          ? "border-b border-transparent bg-forest"
          : solid
            ? "border-b border-sand bg-paper/92 backdrop-blur-md"
            : "border-b border-transparent",
      )}
    >
      {/* HERO写真の上にいるあいだ、ロゴとナビを読ませるための薄い影。
          空が明るい写真だと文字が飛んでしまうため敷いています。
          ヘッダーが生成りになったら消えます。 */}
      {!solid && !menuOpen ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/55 to-transparent"
        />
      ) : null}

      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <Link
          href="/"
          className={cn(
            "font-display shrink-0 text-[1.05rem] tracking-[0.16em] transition-colors duration-500 md:text-[1.15rem]",
            onDark ? "text-paper" : "text-ink",
          )}
        >
          {siteConfig.name.toUpperCase()}
        </Link>

        {/* PCの横並びナビ */}
        <nav aria-label="メインメニュー" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const current = normalize(pathname) === normalize(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "block text-center transition-opacity duration-300 hover:opacity-60",
                      // 現在のページだけテラコッタ。
                      // ※ text-ink-soft と text-clay を両方渡すと、あとに出てくる方
                      //   （text-ink-soft）が勝ってしまい色が変わりませんでした。
                      //   どちらか一方だけを渡すように分けています。
                      solid
                        ? current
                          ? "text-clay"
                          : "text-ink-soft"
                        : "text-paper/90",
                    )}
                  >
                    <span className="label-en block text-[0.55rem] opacity-70">
                      {item.en}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block whitespace-nowrap text-[0.78rem] tracking-[0.06em]",
                        current &&
                          "underline decoration-1 underline-offset-[6px]",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <a
            href={contactHref}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-[0.75rem] tracking-[0.05em] transition-colors duration-300 md:px-6 md:py-2.5 md:text-[0.82rem]",
              onDark
                ? "border border-paper/60 text-paper hover:bg-paper hover:text-clay"
                : "bg-clay text-paper hover:bg-clay-deep",
            )}
          >
            {/* 狭い画面では「相談する」に短縮します（「入居」は使いません） */}
            <span className="sm:hidden">{siteConfig.ctaLabelShort}</span>
            <span className="hidden sm:inline">{siteConfig.ctaLabel}</span>
          </a>

          {/* ハンバーガー（スマホ・タブレット） */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpenedOn(menuOpen ? null : pathname)}
            className={cn(
              "-mr-1 flex h-10 w-10 items-center justify-center lg:hidden",
              onDark ? "text-paper" : "text-ink",
            )}
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                  menuOpen ? "top-2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2 block h-px w-6 bg-current transition-opacity duration-300",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-px w-6 bg-current transition-transform duration-300",
                  menuOpen ? "top-2 -rotate-45" : "top-4",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* 開いたメニュー。深緑の面に、生成りの明朝で大きく項目を並べます。 */}
      <div
        id="site-menu"
        hidden={!menuOpen}
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-forest text-paper md:top-20 lg:hidden",
          !menuOpen && "hidden",
        )}
      >
        <nav
          aria-label="メニュー"
          className="mx-auto flex min-h-full max-w-[1400px] flex-col px-5 pb-16 pt-8 md:px-10"
        >
          <ul className="space-y-1">
            {navItems.map((item) => {
              const current = normalize(pathname) === normalize(item.href);
              return (
                <li key={item.href} className="border-b border-paper/15">
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpenedOn(null)}
                    className="flex items-baseline justify-between gap-4 py-5"
                  >
                    <span
                      className={cn(
                        "heading-jp text-[1.3rem]",
                        current ? "text-sun" : "text-paper",
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="label-en text-[0.6rem] text-paper/50">
                      {item.en}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 space-y-4">
            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[0.85rem] text-paper/75"
            >
              {copy.footer.instagramLabel}{" "}
              <span className="numeral">
                {siteConfig.social.instagram.handle}
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block break-all text-[0.85rem] text-paper/75"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <a
            href={contactHref}
            className="mt-10 flex items-center justify-center gap-3 rounded-full bg-paper px-8 py-4 text-[0.95rem] tracking-[0.06em] text-clay"
          >
            {siteConfig.ctaLabel}
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
