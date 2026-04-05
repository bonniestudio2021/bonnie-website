import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";
import { getPaginatedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "男性保健專欄 | Bonnie Studio",
  description:
    "抓龍筋知識、男性保健、血液循環——Bonnie 分享專業的男性筋絡保健知識，幫助你更了解自己的身體。",
};

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Blog
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              男性保健專欄
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              了解抓龍筋、認識你的身體，專業的男性保健知識都在這裡
            </p>
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
