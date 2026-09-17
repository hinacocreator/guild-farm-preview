"use client";

import { useEffect } from "react";

/**
 * ページ内アンカー（#village など）で着地したときの「白紙」対策。
 *
 * .reveal はスクロール駆動（animation-timeline: view()）で opacity 0→1 になりますが、
 * ハッシュ遷移で一気にジャンプすると、ビューポート内の要素がアニメーション開始前の
 * 状態（透明）のまま止まることがあります。
 * そこで、ハッシュ付きの初期ロードと hashchange の直後だけ <html data-hash-landing> を立て、
 * globals.css 側で .reveal のアニメーションを一時的に無効化（即時表示）します。
 * 属性は利用者が実際にスクロールしたとき、または 2.5 秒後に外すので、通常のスクロール演出は保たれます。
 */
export function RevealOnHash() {
  useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;

    const clear = () => {
      root.removeAttribute("data-hash-landing");
      window.removeEventListener("wheel", clear);
      window.removeEventListener("touchmove", clear);
      window.removeEventListener("keydown", clear);
      if (timer) window.clearTimeout(timer);
    };

    const land = () => {
      if (!window.location.hash) return;
      root.setAttribute("data-hash-landing", "");
      window.addEventListener("wheel", clear, { passive: true });
      window.addEventListener("touchmove", clear, { passive: true });
      window.addEventListener("keydown", clear);
      timer = window.setTimeout(clear, 2500);
    };

    land();
    window.addEventListener("hashchange", land);
    return () => {
      window.removeEventListener("hashchange", land);
      clear();
    };
  }, []);

  return null;
}
