import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { applyHref, contactHref, navItems, siteConfig } from "@/config/site";
import { common } from "@/content/common";

/**
 * フッター。
 * 表示している内容は、すべて設定ファイルから読んでいます。
 *
 * ■ ナビの項目   … src/config/site.ts の navItems（日本語ラベルを表示しています）
 * ■ 住所         … src/config/site.ts の location.address
 * ■ Instagram    … src/config/site.ts の social.instagram
 * ■ 見出しの文言 … src/content/common.ts の footer
 *
 * ■ Contact 欄は2導線です（2026-09-16 最終回遊QA）
 *   「滞在を申し込む」＝Googleフォーム（外部サイト・別タブ）／
 *   「滞在について相談する」＝メール。相談だけが最終行動に見えないようにしています。
 *
 * ※ スマホでは画面下に固定CTAバー（StickyCtaBar）が出るため、
 *   下側に余分な余白を取って、リンクが隠れないようにしています。
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-paper">
      <Container className="pb-28 pt-16 md:pb-24 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* ブランド */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-[0.18em] md:text-[1.75rem]">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="heading-jp mt-6 max-w-[14em] text-[1.15rem] leading-[1.8] text-paper/85 md:text-[1.3rem]">
              {common.footer.tagline}
            </p>
          </div>

          {/* メニュー */}
          <nav aria-label="フッター" className="md:col-span-3">
            <p className="label-en text-[0.65rem] text-paper/60">Menu</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.82rem] text-paper/80 transition-opacity duration-300 hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 連絡先・所在地 */}
          <div className="space-y-10 md:col-span-4">
            <div>
              <p className="label-en text-[0.65rem] text-paper/60">
                {common.footer.contactLabel}
              </p>
              <ul className="mt-5 space-y-3">
                <li>
                  {/* 主導線。Googleフォーム（外部サイト）なので別タブで開きます */}
                  <a
                    href={applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.875rem] text-paper/85 transition-opacity duration-300 hover:opacity-60"
                  >
                    {common.footer.applyLabel}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactHref}
                    className="text-[0.875rem] text-paper/85 transition-opacity duration-300 hover:opacity-60"
                  >
                    {common.footer.consultLabel}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all text-[0.85rem] text-paper/70 transition-opacity duration-300 hover:opacity-60"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.85rem] text-paper/70 transition-opacity duration-300 hover:opacity-60"
                  >
                    {common.footer.instagramLabel}{" "}
                    <span className="numeral">
                      {siteConfig.social.instagram.handle}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="label-en text-[0.65rem] text-paper/60">
                {common.footer.locationLabel}
              </p>
              <address className="mt-5 text-[0.875rem] leading-[1.95] not-italic text-paper/85">
                {siteConfig.location.address}
              </address>
              <p className="mt-3 max-w-[24em] text-[0.75rem] leading-[1.95] text-paper/60">
                {siteConfig.location.note}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-24">
          <p className="numeral text-[0.7rem] tracking-[0.08em] text-paper/60">
            © {year} {common.footer.copyright}
          </p>
          <p className="text-[0.7rem] tracking-[0.1em] text-paper/60">
            {siteConfig.location.region} — {siteConfig.location.area}
          </p>
        </div>
      </Container>
    </footer>
  );
}
