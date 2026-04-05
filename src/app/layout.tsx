import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import MobileCta from "@/components/mobile-cta";
import HashScroll from "@/components/hash-scroll";

const BASE_URL = "https://bonniestudio.tw";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bonnie Studio | 台北台南泰式古法抓龍筋 · 男士保健按摩",
    template: "%s | Bonnie Studio",
  },
  description:
    "Bonnie Studio 提供正統泰式古法抓龍筋（Jap Sen）男士保健按摩。護理師出身，累計服務數千人次。台北近北車、台南近北門路圓環。預約制，LINE 線上預約。",
  keywords: [
    "抓龍筋",
    "抓龍筋推薦",
    "台北抓龍筋",
    "台南抓龍筋",
    "Jap Sen",
    "泰式按摩",
    "男士保健按摩",
    "深層筋絡按摩",
    "龍筋按摩",
    "Bonnie Studio",
    "男性按摩",
    "鼠蹊部按摩",
  ],
  authors: [{ name: "Bonnie Studio" }],
  creator: "Bonnie Studio",
  openGraph: {
    title: "Bonnie Studio | 泰式古法抓龍筋 · 男士保健",
    description:
      "護理師出身，累計服務數千人次。正統泰式古法抓龍筋，疏通血液循環、釋放深層緊繃。台北台南兩店，LINE 線上預約。",
    type: "website",
    locale: "zh_TW",
    url: BASE_URL,
    siteName: "Bonnie Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonnie Studio | 泰式古法抓龍筋 · 男士保健",
    description:
      "護理師出身，累計服務數千人次。正統泰式古法抓龍筋，台北台南兩店。",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${inter.variable} ${playfair.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <HashScroll />
        {children}
        <MobileCta />
      </body>
    </html>
  );
}
