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

// Internal link mapping: keyword -> slug (longer phrases first to avoid partial matches)
const internalLinks: [string, string][] = [
  // 抓龍筋相關 (長詞優先)
  ["抓龍筋是什麼", "what-is-zhua-long-jin"],
  ["第一次體驗抓龍筋", "first-time-zhua-long-jin"],
  ["第一次抓龍筋", "first-time-zhua-long-jin"],
  ["抓龍筋會痛", "zhua-long-jin-pain"],
  ["抓龍筋多久做一次", "zhua-long-jin-frequency"],
  ["抓龍筋多少錢", "zhua-long-jin-price"],
  ["抓龍筋的歷史", "zhua-long-jin-history"],
  ["抓龍筋迷思", "zhua-long-jin-myths"],
  ["台北抓龍筋", "taipei-zhua-long-jin"],
  ["台南抓龍筋", "tainan-zhua-long-jin"],
  ["攝護腺按摩", "zhua-long-jin-vs-prostate-massage"],

  // 男性健康 (長詞優先)
  ["鼠蹊部緊繃", "groin-tightness"],
  ["鼠蹊部", "groin-tightness"],
  ["下半身循環自我檢測", "circulation-self-test"],
  ["下半身循環", "circulation-self-test"],
  ["骨盆底肌僵硬", "pelvic-floor-stiffness"],
  ["骨盆底肌", "pelvic-floor-stiffness"],
  ["晨勃消失", "morning-erection-health"],
  ["晨勃", "morning-erection-health"],
  ["男性更年期", "male-menopause"],

  // 久坐與運動
  ["久坐與攝護腺", "sitting-prostate-risk"],
  ["久坐", "sitting-too-long-circulation"],
  ["遠端工作", "remote-work-health"],
  ["重訓後鼠蹊部", "gym-groin-care"],
  ["深蹲", "squat-deadlift-groin"],
  ["硬舉", "squat-deadlift-groin"],
  ["跑步", "running-cycling-recovery"],
  ["騎車", "running-cycling-recovery"],
  ["筋絡保養", "athletes-fascia-care"],

  // 生活習慣
  ["熬夜", "staying-up-stress-male"],
  ["居家改善", "home-circulation-tips"],
  ["泡澡", "home-circulation-tips"],
  ["內褲", "underwear-male-health"],
  ["飲食與循環", "food-for-circulation"],

  // 性愛健康
  ["早洩", "premature-ejaculation"],
  ["遲射", "delayed-ejaculation"],
  ["硬度自我檢測", "hardness-self-test"],
  ["硬度量表", "hardness-self-test"],
  ["持久度", "lasting-longer"],
  ["房事後", "post-sex-fatigue"],
  ["慾望下降", "all-decline-circulation"],

  // 保健食品 — 單一成分
  ["瑪卡", "maca-guide"],
  ["鋅", "zinc-for-men"],
  ["精胺酸", "l-arginine-circulation"],
  ["一氧化氮", "l-arginine-circulation"],
  ["南瓜籽油", "pumpkin-seed-oil"],
  ["B群", "vitamin-b-energy"],
  ["B 群", "vitamin-b-energy"],
  ["茄紅素", "lycopene-prostate"],
  ["番茄紅素", "lycopene-prostate"],
  ["透納葉", "damiana-herb"],
  ["達米阿那", "damiana-herb"],
  ["鋸棕櫚", "saw-palmetto-guide"],
  ["蠔精", "oyster-extract"],
  ["牡蠣精", "oyster-extract"],
  ["維生素D", "vitamin-d-testosterone"],
  ["維生素 D", "vitamin-d-testosterone"],
  ["魚油", "fish-oil-circulation"],
  ["Omega-3", "fish-oil-circulation"],
  ["淫羊藿", "epimedium-herb"],
  ["葫蘆巴", "fenugreek-testosterone"],
  ["人蔘", "ginseng-cordyceps"],
  ["冬蟲夏草", "ginseng-cordyceps"],
  ["鹿茸", "ginseng-cordyceps"],
  ["蝦紅素", "astaxanthin-q10-dhea"],
  ["輔酶Q10", "astaxanthin-q10-dhea"],
  ["Q10", "astaxanthin-q10-dhea"],
  ["DHEA", "astaxanthin-q10-dhea"],

  // 保健食品 — 綜合指南
  ["保健食品怎麼挑", "supplement-buying-guide"],
  ["保健食品", "supplement-buying-guide"],
  ["鋸棕櫚.*南瓜籽油", "saw-palmetto-vs-pumpkin"],
  ["內服外調", "supplements-plus-massage"],
  ["定期保養", "men-need-maintenance"],
];

const LINE_URL = "https://lin.ee/M93vttj";

function addInternalLinks(content: string, currentSlug: string): string {
  let result = content;

  // Add LINE links
  result = result.replace(
    /(?<!<a[^>]*>)(加\s*LINE|LINE\s*預約|LINE\s*諮詢)(?![^<]*<\/a>)/g,
    `<a href="${LINE_URL}" target="_blank" rel="noopener noreferrer" style="color:#06C755;font-weight:600;">$1</a>`
  );

  // Track which slugs we've already linked to (max 1 link per target article)
  const linkedSlugs = new Set<string>();

  // Add internal links: first occurrence only, skip headings and existing links
  for (const [keyword, slug] of internalLinks) {
    if (slug === currentSlug) continue;
    if (linkedSlugs.has(slug)) continue;

    // Split content into segments: inside tags vs outside tags
    const parts = result.split(/(<[^>]+>)/);
    let found = false;
    let insideA = false;
    let insideHeading = false;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];

      // Track tag state
      if (part.startsWith("<")) {
        if (part.match(/^<a[\s>]/i)) insideA = true;
        if (part.match(/^<\/a>/i)) insideA = false;
        if (part.match(/^<h[23][\s>]/i)) insideHeading = true;
        if (part.match(/^<\/h[23]>/i)) insideHeading = false;
        continue;
      }

      // Skip if inside <a> or heading
      if (insideA || insideHeading) continue;

      // Try to match keyword in text node
      const regex = new RegExp(`(${keyword})`);
      if (regex.test(part)) {
        parts[i] = part.replace(regex, `<a href="/blog/${slug}" style="color:var(--primary);text-decoration:underline;text-underline-offset:2px;">$1</a>`);
        linkedSlugs.add(slug);
        found = true;
        break;
      }
    }

    if (found) {
      result = parts.join("");
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
