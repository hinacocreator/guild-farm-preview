"use client";

import { useSyncExternalStore } from "react";
import { applyHref, contactHref } from "@/config/site";
import { common } from "@/content/common";
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
 * ・文言は src/content/common.ts の stickyBar を見ています。
 * ・主「滞在を申し込む」（Googleフォーム・外部サイト）と
 *   副「相談する」（メール）の2導線を1本のバーに置いています（2026-09-16）。
 *   375px に収まるよう、副は塗らないテキストリンクにしています。
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
      <div className="flex items-stretch bg-clay pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2">
        <a
          href={applyHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="flex flex-1 items-center justify-center gap-1.5 py-2 pl-4 pr-3 text-[0.9rem] tracking-[0.04em] text-paper"
        >
          {common.stickyBar.apply}
          <span aria-hidden="true">↗</span>
        </a>

        <span aria-hidden="true" className="my-2 w-px bg-paper/30" />

        <a
          href={contactHref}
          tabIndex={visible ? undefined : -1}
          className="flex shrink-0 items-center justify-center gap-1.5 py-2 pl-3 pr-4 text-[0.8rem] tracking-[0.04em] text-paper/85"
        >
          {common.stickyBar.consult}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
