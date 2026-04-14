import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";
import { getPaginatedPostsByTag, getPostsByTag, getAllTags, POSTS_PER_PAGE } from "@/lib/blog";

export function generateStaticParams() {
  const params: { tag: string; page: string }[] = [];
  for (const { tag } of getAllTags()) {
    const total = getPostsByTag(tag).length;
    const totalPages = Math.ceil(total / POSTS_PER_PAGE);
    for (let i = 1; i <= totalPages; i++) {
      params.push({ tag, page: String(i) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string; page: string }>;
}): Promise<Metadata> {
  const { tag: rawTag, page } = await params;
  const tag = decodeURIComponent(rawTag);
  return {
    title: `${tag} - 第 ${page} 頁 | Bonnie Studio`,
    robots: { index: false, follow: true },
  };
}

export default async function TagPaginatedPage({
  params,
}: {
  params: Promise<{ tag: string; page: string }>;
}) {
  const { tag: rawTag, page: pageStr } = await params;
  const tag = decodeURIComponent(rawTag);
  const page = parseInt(pageStr, 10);
  if (isNaN(page) || page < 1) notFound();

  const { posts, totalPages, currentPage } = getPaginatedPostsByTag(tag, page);
  if (posts.length === 0) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm mb-2">標籤</p>
            <h1 className="font-display text-3xl font-bold mb-4">{tag}</h1>
            <p className="text-muted">第 {currentPage} 頁</p>
          </div>
          <BlogList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
            currentTag={tag}
            tagPagination
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
