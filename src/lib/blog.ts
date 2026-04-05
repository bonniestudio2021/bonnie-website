import { newPosts } from "./blog-mens-health";
import { batchA } from "./blog-batch-a";
import { batchB } from "./blog-batch-b";
import { batchC } from "./blog-batch-c";
import { batchD } from "./blog-batch-d";
import { batchE } from "./blog-batch-e";

export interface BlogCta {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: "line" | "instagram";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  headings: { id: string; text: string; level: number }[];
  cta: BlogCta;
}

// Internal link mapping: keyword -> slug
const internalLinks: [string, string][] = [
  ["抓龍筋是什麼", "what-is-zhua-long-jin"],
  ["第一次體驗抓龍筋", "first-time-zhua-long-jin"],
  ["抓龍筋會痛", "zhua-long-jin-pain"],
  ["抓龍筋多久做一次", "zhua-long-jin-frequency"],
  ["攝護腺按摩", "zhua-long-jin-vs-prostate-massage"],
  ["鼠蹊部緊繃", "groin-tightness"],
  ["下半身循環", "circulation-self-test"],
  ["骨盆底肌", "pelvic-floor-stiffness"],
  ["晨勃", "morning-erection-health"],
  ["男性更年期", "male-menopause"],
  ["久坐", "sitting-too-long-circulation"],
  ["瑪卡", "maca-guide"],
  ["鋅", "zinc-for-men"],
  ["精胺酸", "l-arginine-circulation"],
  ["南瓜籽油", "pumpkin-seed-oil"],
  ["茄紅素", "lycopene-prostate"],
  ["鋸棕櫚", "saw-palmetto-guide"],
  ["蠔精", "oyster-extract"],
  ["牡蠣精", "oyster-extract"],
  ["維生素 D", "vitamin-d-testosterone"],
  ["魚油", "fish-oil-circulation"],
  ["淫羊藿", "epimedium-herb"],
  ["葫蘆巴", "fenugreek-testosterone"],
  ["人蔘", "ginseng-cordyceps"],
  ["早洩", "premature-ejaculation"],
  ["遲射", "delayed-ejaculation"],
  ["硬度", "hardness-self-test"],
  ["持久度", "lasting-longer"],
  ["保健食品", "supplement-buying-guide"],
];

const LINE_URL = "https://lin.ee/M93vttj";

function addInternalLinks(content: string, currentSlug: string): string {
  let result = content;

  // Add LINE links: turn "加 LINE" / "LINE 預約" etc into clickable links (only in <p> text, not in existing <a>)
  result = result.replace(
    /(?<!<a[^>]*>)(加\s*LINE|LINE\s*預約|LINE\s*諮詢)(?![^<]*<\/a>)/g,
    `<a href="${LINE_URL}" target="_blank" rel="noopener noreferrer" style="color:#06C755;font-weight:600;">$1</a>`
  );

  // Add internal links: only first occurrence per keyword, skip if inside <a> or <h2>/<h3> tags
  for (const [keyword, slug] of internalLinks) {
    if (slug === currentSlug) continue; // don't link to self
    // Match keyword not already inside a tag
    const regex = new RegExp(`(?<!</?[a-z][^>]*>)(?<!<a[^>]*>)(${keyword})(?![^<]*</a>)(?![^<]*</h[23]>)`, "");
    if (regex.test(result)) {
      result = result.replace(regex, `<a href="/blog/${slug}" style="color:var(--primary);text-decoration:underline;text-underline-offset:2px;">$1</a>`);
    }
  }

  return result;
}

const rawPosts: BlogPost[] = [...newPosts, ...batchA, ...batchB, ...batchC, ...batchD, ...batchE];
const allPosts: BlogPost[] = rawPosts.map((p) => ({
  ...p,
  content: addInternalLinks(p.content, p.slug),
}));

export function getAllPosts(): BlogPost[] {
  return [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  for (const post of allPosts) {
    for (const tag of post.tags) {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    }
  }
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getAllSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

export const POSTS_PER_PAGE = 12;

export function getPaginatedPosts(page: number) {
  const all = getAllPosts();
  const totalPages = Math.ceil(all.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    totalPages,
    currentPage: page,
  };
}
