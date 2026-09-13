import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { siteConfig } from "@/config/site";
import "./globals.css";

/**
 * 日本語の書体（Zen Kaku Gothic New / Shippori Mincho）は
 * Google Fonts の CSS リンクで読み込んでいます（下の <link> を参照）。
 *
 * next/font/google を使わない理由:
 *   next/font は subsets を指定して必要な文字だけ自己ホストする仕組みですが、
 *   日本語（subset "japanese"）は数千グリフあるため実用的なサイズになりません。
 *   subsets:["latin"] のままだと日本語グリフが配信されず、
 *   端末のフォールバック書体（Windowsならゴシック体）で表示されてしまい、
 *   明朝の見出しが再現できませんでした。
 *   Google Fonts の CSS は unicode-range でファイルが細かく分割されていて、
 *   ページに実際に出てくる文字のぶんだけがダウンロードされます。
 *
 * 書体を差し替えるときは、下の <link> のURLと
 * src/app/globals.css の --font-zen-kaku / --font-shippori を合わせて直してください。
 */
const GOOGLE_FONTS_CSS =
  "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500&family=Zen+Kaku+Gothic+New:wght@400;500&display=swap";

/** 英字の見出し・ラベル：雑誌的な印象のセリフ体（英字のみなので next/font で自己ホスト） */
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}｜畑のあるシェアハウス（愛媛・松山）`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#223327",
  width: "device-width",
  initialScale: 1,
};

/** 検索エンジン向けの構造化データ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "道後今市1-27",
    addressLocality: "松山市",
    addressRegion: "愛媛県",
    addressCountry: "JP",
  },
  sameAs: [siteConfig.social.instagram.url],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={fraunces.variable}>
      <head>
        {/* 日本語フォントの配信元へ、先に接続を開いておきます */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={GOOGLE_FONTS_CSS} />
      </head>
      <body className="antialiased">
        {/* ヘッダー・フッター・スマホ固定CTAバーは全ページ共通です。
            各ページ（page.tsx）はセクションの並びだけを持ちます。 */}
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyCtaBar />
        <script
          type="application/ld+json"
          // 構造化データは静的な定数のみを埋め込んでいます
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
