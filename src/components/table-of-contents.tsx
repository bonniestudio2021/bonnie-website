"use client";

import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TOCProps {
  headings: { id: string; text: string; level: number }[];
}

export default function TableOfContents({ headings }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24">
      <div className="flex items-center gap-2 mb-4 text-sm font-bold text-foreground">
        <List size={16} />
        文章目錄
      </div>
      <ul className="space-y-2 border-l-2 border-border pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm transition-colors ${
                activeId === h.id
                  ? "text-[#bf6a2f] font-medium"
                  : "text-muted hover:text-foreground"
              }`}
              style={{ paddingLeft: h.level > 2 ? `${(h.level - 2) * 12}px` : undefined }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
