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
  title: "台南抓龍筋推薦｜北門路附近｜Bonnie Studio 護理師出身泰式古法",
  description:
    "台南抓龍筋推薦首選，Bonnie Studio，近北門路圓環。護理師出身 × 泰國正統認證 Jap Sen，累計服務數千人次。專業鼠蹊部調理，改善男性血液循環。LINE 立即預約。",
  alternates: {
    canonical: "https://bonniestudio.tw/tainan",
  },
  keywords: [
    "台南抓龍筋",
    "台南抓龍筋推薦",
    "台南抓龍筋哪裡好",
    "台南龍筋",
    "北門路抓龍筋",
    "台南男性保健按摩",
    "台南鼠蹊部按摩",
    "Bonnie Studio台南",
  ],
  openGraph: {
    title: "台南抓龍筋推薦｜Bonnie Studio 北門路附近",
    description:
      "護理師出身 × 泰國正統認證，台南抓龍筋推薦首選。近北門路圓環，累計服務數千人次，LINE 立即預約。",
    url: "https://bonniestudio.tw/tainan",
  },
};

const tainanSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Bonnie Studio 抓龍筋 台南",
  description:
    "台南抓龍筋推薦。護理師出身，泰國正統認證 Jap Sen，位於台南市近北門路圓環，累計服務數千人次。",
  url: "https://bonniestudio.tw/tainan",
  image: "https://bonniestudio.tw/hero-bonnie.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "台南市",
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

export default function TainanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tainanSchema) }}
      />
      <Navbar />
      <main>
        <CityHero
          cityName="台南"
          h1="台南抓龍筋推薦"
          location="台南市・近北門路圓環"
          tagline="台南 抓龍筋推薦 · 男士保健"
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
