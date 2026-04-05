import { getAllPosts, getAllTags } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const content = `# Bonnie Studio
> 泰式古法抓龍筋 · 男士保健按摩

## 關於
Bonnie Studio 提供正統泰式古法抓龍筋（Jap Sen）男士保健按摩服務。Bonnie 老師護理師出身，擁有泰國正規按摩學校認證，累計服務超過數千位客人。以專業、安全、舒適的環境，幫助男性疏通血液循環、釋放深層緊繃。

## 服務項目
- 龍筋精油按摩（60 分鐘）：使用天然冷壓初榨分餾椰子油，專業古法筋絡調理
- 龍筋 + 頭部按摩（90 分鐘）：龍筋調理後，依蘭精油按摩頭部
- 龍筋 + 耳燭除濕（90 分鐘）：龍筋調理後，耳燭移除耳內濕氣
- 龍筋 + 頭部按摩 + 耳燭（90 分鐘）：最完整組合
- 芳療精油加購：暖循經典按摩油、暖循淨淋按摩油、賦活全效按摩油

## 服務地點
- 台北店：近天成大飯店，捷運北車 M3 出口步行約 3 分鐘
- 台南店：近北門路圓環，東菜市場步行約 5 分鐘

## 營業時間
13:00–21:30（預約制）
每次僅服務 1 位客人
每月 23 號 12:00 公告班表

## 文章
${posts.map((p) => `- [${p.title}](https://bonniestudio.com/blog/${p.slug}): ${p.description}`).join("\n")}

## 標籤
${tags.map(({ tag, count }) => `- ${tag} (${count})`).join("\n")}

## 評價
Google Maps 評價 4.8 星 / 61 則評論

## 聯絡
- LINE 線上預約：@bonniemassage
- 預約連結：https://lin.ee/M93vttj
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
