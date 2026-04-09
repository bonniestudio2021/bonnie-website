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
    default: "抓龍筋推薦｜Bonnie Studio 台北台南泰式古法抓龍筋男士保健按摩",
    template: "%s | Bonnie Studio 抓龍筋",
  },
  description:
    "【台北・台南抓龍筋推薦】Bonnie Studio 護理師出身，正統泰式古法 Jap Sen 抓龍筋，累計服務數千人次。專業鼠蹊部按摩、骨盆底肌調理，改善男性血液循環。台北近北車站、台南近北門路。LINE 線上預約，歡迎諮詢。",
  keywords: [
    "抓龍筋",
    "抓龍筋推薦",
    "台北抓龍筋",
    "台南抓龍筋",
    "抓龍筋哪裡好",
    "抓龍筋費用",
    "抓龍筋多少錢",
    "抓龍筋效果",
    "抓龍筋安全嗎",
    "抓龍筋第一次",
    "Jap Sen",
    "泰式古法按摩",
    "男士保健按摩",
    "男性保健按摩推薦",
    "鼠蹊部按摩",
    "骨盆底肌按摩",
    "深層筋絡按摩",
    "龍筋按摩",
    "Bonnie Studio",
    "男性按摩",
    "久坐族按摩",
    "改善血液循環按摩",
    "台北男性按摩推薦",
    "台南男性按摩推薦",
    "男性私密保健",
    "龍筋保養",
    "泰式按摩台北",
    "泰式按摩台南",
  ],
  authors: [{ name: "Bonnie Studio" }],
  creator: "Bonnie Studio",
  openGraph: {
    title: "抓龍筋推薦｜Bonnie Studio 台北台南泰式古法抓龍筋",
    description:
      "護理師出身，正統泰式古法抓龍筋（Jap Sen），累計服務數千人次。專業鼠蹊部按摩，改善男性血液循環。台北台南兩店，LINE 線上預約。",
    type: "website",
    locale: "zh_TW",
    url: BASE_URL,
    siteName: "Bonnie Studio 抓龍筋",
  },
  twitter: {
    card: "summary_large_image",
    title: "抓龍筋推薦｜Bonnie Studio 台北台南泰式古法抓龍筋",
    description:
      "護理師出身，正統泰式古法抓龍筋，累計服務數千人次。台北台南兩店，LINE 線上預約。",
  },
  verification: {
    google: "kSTxCazLH4sw0dPNcDV35qzeTuexOUCtycnjzdHDpvw",
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
