"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart, Sparkles } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "泰國認證技師",
    description: "泰國正統按摩學校結業，Jap Sen 專項訓練",
  },
  {
    icon: Clock,
    title: "豐富實務經驗",
    description: "累計服務數千人次，深受客戶信賴",
  },
  {
    icon: Heart,
    title: "用心對待每位客人",
    description: "根據個人狀況量身調整手法與力道",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/10 border border-border">
              {/* Placeholder for about image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted/40">
                <div className="text-center">
                  <Sparkles
                    size={48}
                    className="mx-auto mb-3 text-primary/30"
                  />
                  <p className="text-sm">About Image</p>
                  <p className="text-xs mt-1">建議尺寸: 600x800</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              關於 Bunny
            </h2>
            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                嗨，我是 Bunny！從接觸泰式按摩開始，就深深被這門傳統技藝所吸引。後來專程前往泰國，在正統按摩學校完成系統化的訓練，取得
                Jap Sen（抓龍筋）專項認證。
              </p>
              <p>
                我相信每個人的身體都有自己的故事——長期的工作姿勢、運動習慣、生活壓力，都會反映在筋絡的狀態上。我的工作就是用雙手讀懂你的身體，找到那些深層的結節與沾黏，一一為你解開。
              </p>
              <p>
                在 Bonnie Bunny，我堅持正規、專業、安全的服務。每一次療程前都會詳細了解你的身體狀況，調整最適合你的手法與力道，讓你在安心的環境中，找回身體的輕盈與舒暢。
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{c.title}</h4>
                    <p className="text-muted text-sm">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
