"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { LineIcon } from "./icons";
import { blurIn, blurInTransition } from "@/lib/animations";

const includes = [
  "療程前身體狀況諮詢",
  "天然精油與專業用品",
  "乾淨舒適獨立空間",
  "力道隨時可調整",
  "療程後保養建議",
  "全程安心專業服務",
];

const perks = [
  "LINE 好友限定優惠",
  "新客首次專屬方案",
  "不定期優惠先知道",
];

export default function Pricing() {
  return (
    <section id="pricing" className="pb-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={blurIn.initial}
          whileInView={blurIn.whileInView}
          viewport={{ once: true }}
          transition={blurInTransition}
          className="bg-gradient-to-br from-[#F7F4F0] to-[#F0EBE4] text-foreground rounded-2xl border border-border p-8 md:p-12 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-accent/15 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide">
            <Sparkles size={12} />
            LINE 好友限定優惠價
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">加入好友，解鎖完整價目表</h2>
          <p className="text-muted mb-5">
            加入 LINE 即可查看詳細方案價格，並享有好友限定優惠——Bonnie 也會根據你的狀況推薦最適合的療程
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {perks.map((p) => (
              <span
                key={p}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/60 border border-border text-foreground/70"
              >
                <Check size={11} className="text-accent flex-shrink-0" />
                {p}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-left">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                <Check size={15} className="text-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <a
            href="https://lin.ee/M93vttj"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-expand text-base"
            style={{ "--cta-color": "#06C755" } as React.CSSProperties}
          >
            <span className="cta-label">加入 LINE 查看優惠價目表</span>
            <span className="cta-icon"><LineIcon size={17} /></span>
          </a>
          <p className="text-xs text-muted/40 mt-4">加入後即可查詢詳細方案與費用</p>
        </motion.div>
      </div>
    </section>
  );
}
