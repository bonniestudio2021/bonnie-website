import { getAllPosts, getAllTags } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const content = `# Bonnie Bunny
> 專業抓龍筋（Jap Sen）泰式深層筋絡按摩

## 關於
Bonnie Bunny 提供正統泰式抓龍筋深層筋絡按摩服務。技師擁有泰國正規按摩學校認證，專精 Jap Sen 手法，以專業、安全、舒適的環境，幫助客戶釋放深層痠痛、恢復身體活力。

## 服務項目
- 抓龍筋 Jap Sen：深層筋絡調理，沿十大經絡線操作
- 泰式全身舒壓：經典泰式按摩，全身放鬆
- 局部加強調理：針對肩頸、腰背、腿部重點處理

## 文章
${posts.map((p) => `- [${p.title}](https://bonniebunny.com/blog/${p.slug}): ${p.description}`).join("\n")}

## 標籤
${tags.map(({ tag, count }) => `- ${tag} (${count})`).join("\n")}

## 聯絡
- LINE 預約諮詢
- 營業時間：週一至週六 10:00-21:00（預約制）
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
