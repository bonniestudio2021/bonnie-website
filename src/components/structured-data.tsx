const BASE_URL = "https://bonniestudio.com";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Bonnie Studio",
  description:
    "正統泰式古法抓龍筋（Jap Sen）男士保健按摩。護理師出身，累計服務數千人次。",
  url: BASE_URL,
  telephone: "",
  priceRange: "$$",
  image: `${BASE_URL}/hero-bonnie.jpg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "61",
    bestRating: "5",
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "台北市",
      addressRegion: "中正區",
      streetAddress: "忠孝西路一段41號",
      addressCountry: "TW",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "台南市",
      addressCountry: "TW",
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "13:00",
    closes: "21:30",
  },
  sameAs: ["https://lin.ee/M93vttj", "https://x.com/bonniemassage3"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "抓龍筋是什麼？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "以專業手法按摩大腿、鼠蹊部、會陰部等部位，促進血液循環。這是專門促進男性私密處血流的專業保健純按摩。",
      },
    },
    {
      "@type": "Question",
      name: "誰適合抓龍筋？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "適合每一位希望自己私密處血流通暢的男性，尤其久坐、肌肉緊繃、下肢血循差的人更適合。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋會痛嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "按摩過程都可以調整力道，過程也不是越痛越好！Bonnie 會隨時確認你的感受，調整到最適合的力道。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋會射精嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不會。這是專門促進男性私密處血流的專業保健純按摩，故不會導致射精，請放心。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋有什麼效果？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "常見反饋有：大腿變鬆不緊繃、尿尿或射精更順暢、按完後晨勃回來了、整體循環改善等。效果因人而異。",
      },
    },
    {
      "@type": "Question",
      name: "建議多久做一次？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建議每個月按一次保持血流暢通。但主要還是建議您生活作息要正常，多喝水，勿太勞累才是最主要的。",
      },
    },
    {
      "@type": "Question",
      name: "哪些人不適合做抓龍筋？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "以下狀況不建議進行此按摩：心臟病無規則服藥者、肝腎肺疾病無規則服藥者、高血壓糖尿病無規則服藥者、半年內大腿至腹部區手術、大面積的皮膚潰瘍、發燒38度以上、關節腫痛或骨折、皮膚脆弱摩擦易破皮者。",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "泰式古法抓龍筋按摩",
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Bonnie Studio",
    url: BASE_URL,
  },
  areaServed: [
    { "@type": "City", name: "台北市" },
    { "@type": "City", name: "台南市" },
  ],
  description:
    "使用天然冷壓初榨分餾椰子油，以專業古法手法按揉經絡，放鬆骨盆底肌群，舒緩壓力達到放鬆，促進良好血液循環。",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "TWD",
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
