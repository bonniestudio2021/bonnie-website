import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CityHero from "@/components/city-hero";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "台北抓龍筋推薦｜中正區・近台北車站｜Bonnie Studio 護理師出身泰式古法",
  description:
    "台北抓龍筋推薦首選，Bonnie Studio，中正區近台北車站。護理師出身 × 泰國正統認證 Jap Sen，累計服務數千人次。專業鼠蹊部調理，改善男性血液循環。LINE 立即預約。",
  alternates: {
    canonical: "https://bonniestudio.tw/taipei",
  },
  keywords: [
    "台北抓龍筋",
    "台北抓龍筋推薦",
    "台北抓龍筋哪裡好",
    "台北龍筋",
    "中正區抓龍筋",
    "台北車站抓龍筋",
    "台北男性保健按摩",
    "台北鼠蹊部按摩",
    "Bonnie Studio台北",
  ],
  openGraph: {
    title: "台北抓龍筋推薦｜Bonnie Studio 中正區・近台北車站",
    description:
      "護理師出身 × 泰國正統認證，台北抓龍筋推薦首選。中正區近台北車站，累計服務數千人次，LINE 立即預約。",
    url: "https://bonniestudio.tw/taipei",
  },
};

const taipeiSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Bonnie Studio 抓龍筋 台北",
  description:
    "台北抓龍筋推薦。護理師出身，泰國正統認證 Jap Sen，位於中正區近台北車站，累計服務數千人次。",
  url: "https://bonniestudio.tw/taipei",
  image: "https://bonniestudio.tw/hero-bonnie.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "台北市",
    addressRegion: "中正區",
    streetAddress: "忠孝西路一段41號",
    addressCountry: "TW",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    opens: "13:00",
    closes: "21:30",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "61",
    bestRating: "5",
  },
  sameAs: ["https://bonniestudio.tw", "https://lin.ee/M93vttj"],
};

export default function TaipeiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taipeiSchema) }}
      />
      <Navbar />
      <main>
        <CityHero
          cityName="台北"
          h1="台北抓龍筋推薦"
          location="中正區・近台北車站（忠孝西路）"
          tagline="台北 抓龍筋推薦 · 男士保健"
        />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
