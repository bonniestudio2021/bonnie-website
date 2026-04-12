"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { LineIcon } from "./icons";
import { textStaggerContainer, staggerBlurChild } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: CTA */}
          <motion.div
            variants={textStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={staggerBlurChild} className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Contact</motion.p>
            <motion.div variants={staggerBlurChild} className="mb-6 space-y-3">
              <h2 className="font-display text-3xl sm:text-5xl font-bold">準備好了嗎？</h2>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#bf6a2f]">疏通血液循環</h2>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#bf6a2f]">釋放深層緊繃</h2>
            </motion.div>
            <motion.p variants={staggerBlurChild} className="text-muted leading-relaxed mb-8">
              想改善下半身循環、舒緩鼠蹊部緊繃、或是定期做龍筋保養？透過 LINE 預約，我會根據你的狀況安排最適合的療程，幫你找回充沛的精力與活力。
            </motion.p>

            <motion.div variants={staggerBlurChild}>
              <a
                href="https://lin.ee/M93vttj"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-expand"
                style={{ "--cta-color": "#06C755" } as React.CSSProperties}
              >
                <span className="cta-label flex items-center gap-2">
                  <img
                    src="/bonnie-avatar.jpg"
                    alt="Bonnie"
                    className="w-7 h-7 rounded-full object-cover border border-white/50 flex-shrink-0"
                  />
                  LINE 線上預約
                </span>
                <span className="cta-icon"><LineIcon size={17} /></span>
              </a>
            </motion.div>

            <motion.div variants={staggerBlurChild} className="flex items-center gap-6 mt-3 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MessageCircle size={14} />
                通常 30 分鐘內回覆
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4 md:pt-10"
          >
            {/* 台北 */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">台北店</h4>
                  <p className="text-muted text-sm">
                    近天成大飯店，捷運北車 M3 出口步行約 3 分鐘
                  </p>
                </div>
              </div>
            </div>

            {/* 台南 */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">台南店</h4>
                  <p className="text-muted text-sm">
                    近北門路圓環，東菜市場步行約 5 分鐘
                  </p>
                </div>
              </div>
            </div>

            {/* 營業時間 */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">營業時間</h4>
                  <p className="text-muted text-sm">13:00 – 21:30</p>
                  <p className="text-muted text-xs mt-2">每次僅服務 1 位客人</p>
                  <p className="text-muted text-xs">預約系統無時段可選 = 已額滿</p>
                  <p className="text-muted text-xs mt-2">歡迎加入 LINE 好友查看本月詳細營業日期。</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
