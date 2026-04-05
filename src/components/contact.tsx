"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { LineIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              準備好了嗎？
              <br />
              讓身體開始改變
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              不確定哪個方案適合你？沒關係，透過 LINE
              告訴我你的身體狀況，我會為你推薦最適合的療程。首次體驗可享優惠價格！
            </p>

            <div className="space-y-4">
              <a
                href="https://line.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-expand"
                style={{ "--cta-color": "#06C755" } as React.CSSProperties}
              >
                <span className="cta-label">LINE 立即諮詢</span>
                <span className="cta-icon">
                  <LineIcon size={18} />
                </span>
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MessageCircle size={14} />
                通常 30 分鐘內回覆
              </span>
            </div>
          </motion.div>

          {/* Right: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">服務地點</h4>
                  <p className="text-muted text-sm">
                    詳細地址請透過 LINE 諮詢
                  </p>
                  <p className="text-muted text-xs mt-1">
                    提供舒適、乾淨、私密的獨立空間
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">營業時間</h4>
                  <p className="text-muted text-sm">
                    週一至週六 10:00 - 21:00
                  </p>
                  <p className="text-muted text-xs mt-1">
                    採預約制，請提前 1 天預約
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold text-sm mb-3">預約前須知</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  療程前請避免飽食，建議飯後 1 小時再進行
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  請穿著寬鬆舒適的衣物前來
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  療程後建議多喝水，促進代謝
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  如有特殊病史請提前告知
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
