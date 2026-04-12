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
  "加入好友即可查看完整方案",
  "個人化療程推薦",
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
            加入好友查看完整價目表
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">預約泰式古法抓龍筋</h2>
          <p className="text-muted mb-5">
            加入 LINE 好友即可查看詳細方案與費用，Bonnie 會根據你的狀況親自推薦最適合的療程
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
            style={{ "--cta-color": "#06C755", paddingLeft: "0.5rem" } as React.CSSProperties}
          >
            <span className="cta-label flex items-center gap-2">
              <img
                src="/bonnie-avatar.jpg"
                alt="Bonnie"
                className="w-10 h-10 rounded-full object-cover border border-white/50 flex-shrink-0"
              />
              加入 LINE 查看完整價目表
            </span>
            <span className="cta-icon"><LineIcon size={17} /></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
