import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TableOfContents from "@/components/table-of-contents";
import RelatedArticles from "@/components/related-articles";
import BlogCtaSection from "@/components/blog-cta";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { Clock, Tag } from "lucide-react";

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "zh_TW",
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

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-muted mb-4">{post.description}</p>
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
