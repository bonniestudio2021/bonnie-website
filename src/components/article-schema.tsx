interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  faqs: { question: string; answer: string }[];
}

export default function ArticleSchema({ title, description, slug, date, faqs }: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: { "@type": "Person", name: "Bonnie", jobTitle: "護理師 / 抓龍筋按摩師" },
    publisher: { "@type": "Organization", name: "Bonnie Studio" },
    url: `https://bonniestudio.tw/blog/${slug}`,
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}
