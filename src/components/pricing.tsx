"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">預約泰式古法抓龍筋</h2>
          <p className="text-muted mb-8">
            詳細價格歡迎 LINE 諮詢，Bonnie 會根據你的狀況推薦最適合的方案
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left">
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
            className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05B34D] text-white font-bold py-4 px-12 rounded-full transition-colors text-lg"
          >
            <LineIcon size={22} />
            LINE 線上預約
          </a>
        </motion.div>
      </div>
    </section>
  );
}
