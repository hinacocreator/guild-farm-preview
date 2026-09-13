import type { Metadata, Viewport } from "next";
import { Fraunces, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

/** 本文・見出しの日本語：読みやすいゴシック体 */
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
});

/** 日本語の大見出し（h1 / h2）：温かみのある明朝体 */
const shippori = Shippori_Mincho({
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori",
});

/** 英字の見出し・ラベル：雑誌的な印象のセリフ体 */
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
    <html
      lang="ja"
      className={`${zenKaku.variable} ${shippori.variable} ${fraunces.variable}`}
    >
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          // 構造化データは静的な定数のみを埋め込んでいます
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
