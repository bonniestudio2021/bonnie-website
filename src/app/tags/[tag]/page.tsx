import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";
import { getPostsByTag, getAllTags } from "@/lib/blog";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: rawTag } = await params;
  const tag = decodeURIComponent(rawTag);
  return {
    title: `${tag} | Bonnie Studio`,
    description: `瀏覽「${tag}」相關的男性保健文章`,
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: rawTag } = await params;
  const tag = decodeURIComponent(rawTag);
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm mb-2">標籤</p>
            <h1 className="font-display text-3xl font-bold mb-4">{tag}</h1>
            <p className="text-muted">
              共 {posts.length} 篇相關文章
            </p>
          </div>
          <BlogList
            posts={posts}
            currentPage={1}
            totalPages={1}
            currentTag={tag}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
