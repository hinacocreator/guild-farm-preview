"use client";

import { useSyncExternalStore } from "react";
import { contactHref } from "@/config/site";
import { copy } from "@/content/copy";
import { cn } from "@/lib/cn";

/** スクロールと画面サイズの変化を購読します（useSyncExternalStore 用） */
function subscribeViewport(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/**
 * バーを出すかどうかを、そのときの画面から判定します。
 *
 * ・HERO（#top）があるページ（HOME）… HEROが画面の上に抜けたら出す
 * ・HEROがないページ（下層ページ）… 先頭から出す
 * ・末尾のCTA（#contact）が見えているあいだは、ボタンに重ならないよう隠す
 * ・#contact がないページでは、隠さずに出し続ける
 */
function getVisible(): boolean {
  const hero = document.getElementById("top");
  if (hero && hero.getBoundingClientRect().bottom > 0) return false;

  const contact = document.getElementById("contact");
  if (contact) {
    const rect = contact.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
    if (onScreen) return false;
  }

  return true;
}

/** サーバー側では隠した状態で描画します（読み込み直後にちらつかせないため） */
function getVisibleOnServer(): boolean {
  return false;
}

/**
 * スマホ用の、画面下に固定される細いCTAバー（全ページ共通・layout.tsx から呼ばれます）。
 *
 * ・PC（md以上）では表示しません。ヘッダーのCTAがあるためです。
 * ・料金の数字は出しません（金額はPLANSページにだけ書く方針です）。
 * ・文言は src/content/copy.ts の stickyBar.cta を見ています。
 */
export function StickyCtaBar() {
  const visible = useSyncExternalStore(
    subscribeViewport,
    getVisible,
    getVisibleOnServer,
  );

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        "transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href={contactHref}
        tabIndex={visible ? undefined : -1}
        className="flex items-center justify-center gap-2 bg-clay px-5 py-3.5 pb-[max(0.875rem,env(safe-area-inset-bottom))] text-[0.9rem] tracking-[0.05em] text-paper"
      >
        {copy.stickyBar.cta}
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
