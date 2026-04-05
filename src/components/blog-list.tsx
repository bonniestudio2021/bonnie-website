import type { BlogPost } from "@/lib/blog";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogListProps {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
  currentTag?: string;
}

export default function BlogList({
  posts,
  currentPage,
  totalPages,
  currentTag,
}: BlogListProps) {
  return (
    <div>
      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      tag === currentTag
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted text-sm line-clamp-2 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          {currentPage > 1 && (
            <a
              href={currentPage === 2 ? "/blog" : `/blog/page/${currentPage - 1}`}
              className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-primary/5 transition-colors"
            >
              上一頁
            </a>
          )}
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            return (
              <a
                key={page}
                href={page === 1 ? "/blog" : `/blog/page/${page}`}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm ${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "border border-border hover:bg-primary/5"
                } transition-colors`}
              >
                {page}
              </a>
            );
          })}
          {currentPage < totalPages && (
            <a
              href={`/blog/page/${currentPage + 1}`}
              className="px-4 py-2 rounded-lg border border-border text-sm hover:bg-primary/5 transition-colors"
            >
              下一頁
            </a>
          )}
        </div>
      )}

      {/* Tags link */}
      <div className="text-center mt-8">
        <a
          href="/tags"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
        >
          <Tag size={14} />
          瀏覽所有標籤
        </a>
      </div>
    </div>
  );
}
