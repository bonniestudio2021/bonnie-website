import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

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
  title: "Bonnie Bunny | 專業抓龍筋 · 泰式深層筋絡按摩",
  description:
    "Bonnie Bunny 提供正統泰式抓龍筋（Jap Sen）深層筋絡按摩服務。專業手法、舒適環境，幫助你釋放深層痠痛、恢復身體活力。",
  keywords: [
    "抓龍筋",
    "Jap Sen",
    "泰式按摩",
    "深層筋絡按摩",
    "撥筋",
    "Bonnie Bunny",
  ],
  openGraph: {
    title: "Bonnie Bunny | 專業抓龍筋",
    description: "正統泰式深層筋絡按摩，釋放你的痠痛與疲勞",
    type: "website",
    locale: "zh_TW",
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
        {children}
      </body>
    </html>
  );
}
