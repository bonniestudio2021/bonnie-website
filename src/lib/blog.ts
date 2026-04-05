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

const defaultCta: BlogCta = {
  headline: "身體的痠痛，交給專業來處理",
  description:
    "不確定自己適不適合抓龍筋？歡迎透過 LINE 諮詢，Bonnie 會根據你的狀況給予建議。",
  buttonText: "LINE 線上預約",
  buttonHref: "https://lin.ee/M93vttj",
  variant: "line",
};

const _oldPosts = [
  {
    slug: "what-is-jap-sen",
    title: "抓龍筋是什麼？完整認識泰式 Jap Sen 深層筋絡按摩",
    description:
      "深入了解抓龍筋（Jap Sen）的起源、原理、手法與功效，幫助你判斷是否適合這項傳統泰式療法。",
    date: "2026-04-01",
    readTime: "8 分鐘",
    tags: ["抓龍筋知識", "泰式按摩"],
    content: `
      <h2 id="origin">抓龍筋的起源與歷史</h2>
      <p>抓龍筋，泰文稱為 <strong>Jap Sen（จับเส้น）</strong>，是泰國傳統醫學中一項歷史悠久的深層筋絡按摩技法。「Jap」意為抓、捏，「Sen」則指筋、經絡線。這項技法源自泰國北方清邁的 Lanna 傳統醫學體系，與一般泰式按摩同根同源，但著重於更深層的筋膜與肌腱處理。</p>
      <p>泰醫認為人體有 <strong>Sen Sib（十大經絡線）</strong>，這些經絡是維持身體能量流動的通道。當經絡因為壓力、姿勢不良或運動傷害而堵塞時，就會導致痠痛、僵硬甚至更嚴重的身體問題。抓龍筋的目的，就是沿著這些經絡線進行深層的撥筋與提捏，打通堵塞、恢復流動。</p>

      <h2 id="how-it-works">抓龍筋的原理與手法</h2>
      <p>不同於一般泰式按摩以壓、踩、拉伸為主，抓龍筋的核心手法是：</p>
      <ul>
        <li><strong>深壓</strong>：以拇指、指節沿經絡線施加深層壓力</li>
        <li><strong>撥筋</strong>：橫向撥動肌腱與筋膜，解除沾黏</li>
        <li><strong>提捏</strong>：將深層筋絡提起、揉捏，促進血液循環</li>
        <li><strong>點按</strong>：在經絡交匯的穴位上進行定點深壓</li>
      </ul>
      <p>這些手法搭配使用，能夠有效地鬆解深層的肌肉結節與筋膜沾黏，許多人形容為「痛但舒服」——過程中會有明顯的痠脹感，但結束後會感受到前所未有的輕鬆。</p>

      <h2 id="benefits">抓龍筋的常見功效</h2>
      <p>根據泰國傳統醫學的理論與實務經驗，抓龍筋可以幫助：</p>
      <ul>
        <li>緩解深層肌肉緊繃與慢性痠痛</li>
        <li>改善筋膜沾黏，恢復肌肉彈性</li>
        <li>促進血液與淋巴循環</li>
        <li>舒緩神經壓迫造成的不適</li>
        <li>提升關節活動度與靈活性</li>
        <li>幫助運動傷害後的恢復</li>
      </ul>

      <h2 id="who-is-it-for">誰適合抓龍筋？</h2>
      <p>抓龍筋特別適合以下族群：</p>
      <ul>
        <li><strong>久坐上班族</strong>：長期坐在電腦前，肩頸、腰背容易僵硬痠痛</li>
        <li><strong>運動愛好者</strong>：健身、跑步、重訓後的肌肉恢復</li>
        <li><strong>勞力工作者</strong>：長期使用特定肌群導致的疲勞累積</li>
        <li><strong>慢性痠痛困擾者</strong>：試過一般按摩但效果不持久的人</li>
      </ul>
      <p>不過，如果有嚴重的皮膚疾病、急性發炎、骨折、懷孕等狀況，建議先諮詢醫師後再考慮是否進行。</p>

      <h2 id="vs-thai-massage">抓龍筋 vs 一般泰式按摩</h2>
      <p>很多人會問：抓龍筋跟一般泰式按摩有什麼不同？簡單來說：</p>
      <ul>
        <li>泰式按摩著重<strong>全身放鬆與伸展</strong>，力道中等</li>
        <li>抓龍筋著重<strong>深層筋絡的針對性處理</strong>，力道較強</li>
        <li>泰式按摩適合日常放鬆，抓龍筋適合處理特定痠痛問題</li>
        <li>抓龍筋建議間隔 1-2 週進行，不宜過於頻繁</li>
      </ul>
    `,
    headings: [
      { id: "origin", text: "抓龍筋的起源與歷史", level: 2 },
      { id: "how-it-works", text: "抓龍筋的原理與手法", level: 2 },
      { id: "benefits", text: "抓龍筋的常見功效", level: 2 },
      { id: "who-is-it-for", text: "誰適合抓龍筋？", level: 2 },
      { id: "vs-thai-massage", text: "抓龍筋 vs 一般泰式按摩", level: 2 },
    ],
    cta: defaultCta,
  },
  {
    slug: "office-worker-shoulder-neck-pain",
    title: "上班族肩頸痠痛怎麼辦？深層筋絡調理完整指南",
    description:
      "久坐辦公室導致的肩頸僵硬不是忍一忍就會好。了解痠痛根源，以及深層筋絡按摩如何幫助你真正解決問題。",
    date: "2026-03-25",
    readTime: "6 分鐘",
    tags: ["痠痛保健", "上班族"],
    content: `
      <h2 id="why-pain">為什麼上班族容易肩頸痠痛？</h2>
      <p>長時間維持固定姿勢使用電腦，是現代上班族肩頸痠痛的主要原因。當我們低頭看螢幕、駝背打字時，頸部和肩膀的肌肉需要持續出力來支撐頭部重量，久而久之就會形成肌肉緊繃、筋膜沾黏，甚至壓迫到神經。</p>
      <p>更糟的是，很多人的應對方式是「忍」——覺得按一按、動一動就好了。但表層的按摩只能暫時舒緩，深層的筋膜沾黏和肌肉結節如果不處理，痠痛只會反覆出現。</p>

      <h2 id="deep-tissue">深層筋絡調理的解決之道</h2>
      <p>抓龍筋的手法能夠深入到一般按摩觸及不到的深層筋膜，沿著肩頸部位的經絡線進行撥筋與提捏，有效解除筋膜沾黏。許多長期受肩頸痠痛困擾的上班族，在接受抓龍筋療程後都感受到明顯的改善。</p>

      <h2 id="daily-care">日常保養建議</h2>
      <p>除了定期接受深層筋絡調理，以下的日常習慣也很重要：</p>
      <ul>
        <li>每工作 50 分鐘，起身活動 10 分鐘</li>
        <li>調整螢幕高度，讓視線自然平視</li>
        <li>適度進行肩頸伸展運動</li>
        <li>注意睡眠姿勢與枕頭高度</li>
        <li>規律運動，強化肩頸周圍肌群</li>
      </ul>

      <h2 id="when-to-seek-help">什麼時候該尋求專業幫助？</h2>
      <p>如果你的肩頸痠痛已經影響到日常生活品質，或者伴隨手臂麻木、頭痛等症狀，建議先就醫檢查排除嚴重問題後，再搭配深層筋絡調理進行保養。</p>
    `,
    headings: [
      { id: "why-pain", text: "為什麼上班族容易肩頸痠痛？", level: 2 },
      { id: "deep-tissue", text: "深層筋絡調理的解決之道", level: 2 },
      { id: "daily-care", text: "日常保養建議", level: 2 },
      { id: "when-to-seek-help", text: "什麼時候該尋求專業幫助？", level: 2 },
    ],
    cta: defaultCta,
  },
  {
    slug: "after-workout-recovery",
    title: "運動後肌肉恢復：為什麼你需要深層筋絡按摩？",
    description:
      "健身、跑步、重訓後的肌肉痠痛不只是拉伸就能解決。了解深層筋絡按摩如何加速你的運動恢復。",
    date: "2026-03-18",
    readTime: "7 分鐘",
    tags: ["運動恢復", "健身"],
    content: `
      <h2 id="why-sore">運動後為什麼會痠痛？</h2>
      <p>運動後的肌肉痠痛（DOMS）是因為運動過程中肌肉纖維產生微小損傷，加上代謝廢物堆積所導致。適度的痠痛是正常的，代表肌肉正在修復與成長。但如果痠痛持續過久，或者某些部位反覆緊繃，可能就是深層筋膜沾黏的問題了。</p>

      <h2 id="how-jap-sen-helps">抓龍筋如何幫助運動恢復？</h2>
      <p>抓龍筋的深層撥筋手法能夠：</p>
      <ul>
        <li>加速代謝廢物的排出</li>
        <li>解除運動造成的筋膜沾黏</li>
        <li>改善肌肉血液循環，促進營養輸送</li>
        <li>恢復肌肉彈性與關節活動度</li>
        <li>預防因長期緊繃導致的運動傷害</li>
      </ul>

      <h2 id="when-to-do">什麼時候做最有效？</h2>
      <p>建議在高強度訓練後的 <strong>24-48 小時</strong>進行深層筋絡按摩，此時肌肉已度過最初的發炎期，深層調理的效果最好。如果是比賽或大量訓練期間，建議每 1-2 週安排一次療程。</p>

      <h2 id="athlete-tips">運動族群的保養建議</h2>
      <ul>
        <li>訓練後充分補水與營養</li>
        <li>搭配泡沫滾筒進行日常筋膜放鬆</li>
        <li>定期安排深層筋絡調理，不要等到很痛才處理</li>
        <li>注意訓練與恢復的平衡，避免過度訓練</li>
      </ul>
    `,
    headings: [
      { id: "why-sore", text: "運動後為什麼會痠痛？", level: 2 },
      { id: "how-jap-sen-helps", text: "抓龍筋如何幫助運動恢復？", level: 2 },
      { id: "when-to-do", text: "什麼時候做最有效？", level: 2 },
      { id: "athlete-tips", text: "運動族群的保養建議", level: 2 },
    ],
    cta: defaultCta,
  },
];

import { newPosts } from "./blog-mens-health";
const allPosts = [...newPosts];

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
