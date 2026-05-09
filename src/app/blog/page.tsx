import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogList from "@/components/blog-list";
import { getPaginatedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "男性保健專欄｜抓龍筋知識、循環健康、保健食品 | Bonnie Studio",
  description:
    "護理師 Bonnie 的男性保健專欄——抓龍筋知識、鼠蹊部循環、攝護腺保健、保健食品指南，專業實用的男性健康文章，幫助你更了解自己的身體。",
  alternates: {
    canonical: "https://bonniestudio.tw/blog",
  },
};

export default function BlogPage() {
  const { posts, totalPages, currentPage } = getPaginatedPosts(1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-xs tracking-[0.2em] uppercase mb-4">
              Blog
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
              男性保健專欄
            </h1>
            <p className="text-muted/70 text-sm max-w-xl mx-auto leading-relaxed">
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
