const BASE_URL = "https://bonniestudio.tw";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bonnie Studio 抓龍筋",
  url: BASE_URL,
  description: "台北台南抓龍筋推薦，正統泰式古法 Jap Sen 男士保健按摩",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Bonnie Studio 抓龍筋",
  alternateName: ["Bonnie Studio", "台北抓龍筋", "台南抓龍筋"],
  description:
    "台北台南抓龍筋推薦。正統泰式古法抓龍筋（Jap Sen）男士保健按摩，護理師出身，累計服務數千人次。專業鼠蹊部按摩、骨盆底肌調理，改善男性血液循環。",
  url: BASE_URL,
  telephone: "",
  priceRange: "$$",
  image: `${BASE_URL}/hero-bonnie.jpg`,
  keywords: "抓龍筋,抓龍筋推薦,台北抓龍筋,台南抓龍筋,鼠蹊部按摩,男性保健按摩,Jap Sen",
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
      name: "台北哪裡有抓龍筋推薦？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bonnie Studio 位於台北中正區，近台北車站，提供正統泰式古法抓龍筋（Jap Sen）男士保健按摩。護理師出身，專業安全，歡迎 LINE 預約諮詢。",
      },
    },
    {
      "@type": "Question",
      name: "台南哪裡有抓龍筋推薦？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bonnie Studio 在台南亦有服務據點，近北門路圓環，提供正統泰式古法抓龍筋男士保健按摩，歡迎 LINE 預約諮詢。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋費用多少錢？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "抓龍筋費用依療程時間而定，詳細價格歡迎 LINE 諮詢，Bonnie 會根據你的狀況推薦最適合的方案。",
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
      name: "誰適合抓龍筋？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "適合每一位希望自己私密處血流通暢的男性，尤其久坐、肌肉緊繃、下肢血循差的人更適合。久坐族、上班族、運動員皆適合定期保養。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋安全嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bonnie 護理師出身，具備專業醫療背景與泰國認證，按摩手法安全專業。按摩前會進行身體狀況諮詢，確保每位客人都能安全舒適地進行療程。",
      },
    },
    {
      "@type": "Question",
      name: "第一次做抓龍筋需要注意什麼？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "第一次體驗前建議：前一天可先自行清空、按摩前沐浴、著輕便衣物前來、當天不要吃太飽。按摩過程力道可隨時調整，Bonnie 會全程確認你的感受。",
      },
    },
    {
      "@type": "Question",
      name: "抓龍筋多久做一次比較好？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建議每個月做一次保持血流暢通。久坐族或循環較差者可考慮每兩週保養一次。規律保養比單次效果更佳。",
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
      name: "抓龍筋和一般按摩有什麼不同？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "抓龍筋（Jap Sen）是源自泰國的傳統醫學手法，專注於鼠蹊部、大腿內側的筋絡與血液循環，是針對男性私密處保健的專業療程，與一般全身放鬆按摩不同。",
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
    "台北台南抓龍筋推薦。使用天然冷壓初榨分餾椰子油，以泰式古法手法按揉鼠蹊部筋絡，放鬆骨盆底肌群，改善男性血液循環。",
  keywords: "抓龍筋,台北抓龍筋,台南抓龍筋,鼠蹊部按摩,Jap Sen,男性保健按摩",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
