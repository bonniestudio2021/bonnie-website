import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getAllTags } from "@/lib/blog";
import { Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "所有標籤 | Bonnie Studio",
  description: "瀏覽 Bonnie Studio 部落格所有文章標籤",
  robots: { index: false, follow: true },
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-3xl font-bold mb-4">所有標籤</h1>
            <p className="text-muted">點選標籤瀏覽相關文章</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tags.map(({ tag, count }) => (
              <a
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-primary/5 hover:border-primary/30 transition-colors"
              >
                <Tag size={14} className="text-primary" />
                <span className="text-sm font-medium">{tag}</span>
                <span className="text-xs text-muted bg-background px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
