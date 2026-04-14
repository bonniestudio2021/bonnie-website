import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TableOfContents from "@/components/table-of-contents";
import RelatedArticles from "@/components/related-articles";
import BlogCtaSection from "@/components/blog-cta";
import ArticleSchema from "@/components/article-schema";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Clock, Tag } from "lucide-react";

function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const regex = /<h3[^>]*>Q[^:：]*[:：]\s*(.+?)<\/h3>\s*<p>(.+?)<\/p>/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    faqs.push({
      question: match[1].replace(/<[^>]+>/g, "").trim(),
      answer: match[2].replace(/<[^>]+>/g, "").trim(),
    });
  }
  return faqs;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bonnie Studio`,
    description: post.description,
    keywords: [...post.tags, "抓龍筋", "Bonnie Studio", "男士保健", "泰式按摩"],
    alternates: {
      canonical: `https://bonniestudio.tw/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "zh_TW",
      url: `https://bonniestudio.tw/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faqs = extractFaqs(post.content);

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={post.slug}
        date={post.date}
        faqs={faqs}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <h1 className="font-display text-3xl sm:text-5xl font-bold mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted/70 text-sm leading-relaxed mb-4">{post.description}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Tag size={10} />
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Content + TOC */}
          <div className="flex gap-24">
            <article
              className="prose prose-stone max-w-2xl flex-1
                prose-headings:font-display prose-headings:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Sidebar TOC */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents headings={post.headings} />
            </aside>
          </div>

          {/* Related articles */}
          <RelatedArticles currentSlug={post.slug} tags={post.tags} />

          {/* CTA */}
          <BlogCtaSection cta={post.cta} />
        </div>
      </main>
      <Footer />
    </>
  );
}
