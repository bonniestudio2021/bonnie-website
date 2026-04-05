import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";
import { getPaginatedPosts, getAllPosts, POSTS_PER_PAGE } from "@/lib/blog";

export function generateStaticParams() {
  const totalPages = Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: String(i + 1),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { page: string };
}): Metadata {
  return {
    title: `男性保健專欄 - 第 ${params.page} 頁 | Bonnie Studio`,
  };
}

export default function BlogPaginatedPage({
  params,
}: {
  params: { page: string };
}) {
  const page = parseInt(params.page, 10);
  if (isNaN(page) || page < 1) notFound();

  const { posts, totalPages, currentPage } = getPaginatedPosts(page);
  if (posts.length === 0) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              男性保健專欄
            </h1>
            <p className="text-muted">第 {currentPage} 頁</p>
          </div>
          <BlogList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
