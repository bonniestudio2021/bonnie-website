import { getAllPosts, type BlogPost } from "@/lib/blog";
import { Calendar } from "lucide-react";

interface RelatedArticlesProps {
  currentSlug: string;
  tags: string[];
}

export default function RelatedArticles({
  currentSlug,
  tags,
}: RelatedArticlesProps) {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);

  const scored = all
    .map((post) => ({
      post,
      score: post.tags.filter((t) => tags.includes(t)).length,
    }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="font-display text-xl font-bold mb-6">相關文章</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {scored.map(({ post }) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
          >
            <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-muted text-xs line-clamp-2 mb-3">
              {post.description}
            </p>
            <span className="flex items-center gap-1 text-xs text-muted">
              <Calendar size={11} />
              {post.date}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
