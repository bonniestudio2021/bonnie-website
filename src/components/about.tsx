"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart } from "lucide-react";
import { textStaggerContainer, staggerBlurChild } from "@/lib/animations";

const credentials = [
  {
    icon: Award,
    title: "泰國認證技師",
    description: "泰國正統按摩學校結業，Jap Sen 專項訓練",
  },
  {
    icon: Clock,
    title: "累計服務數千人次",
    description: "豐富實務經驗，深受客戶信賴與回訪",
  },
  {
    icon: Heart,
    title: "用心對待每位客人",
    description: "根據個人狀況量身調整手法與力道",
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-[#F5F0EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 -mt-4 md:mt-0 gap-0 md:gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 md:order-1"
          >
            <div
              className="overflow-hidden border border-border"
              style={{
                clipPath: "inset(90px 0 30px 0 round 24px)",
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={textStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <motion.p variants={staggerBlurChild} className="text-primary font-medium text-sm tracking-widest uppercase mb-3">About</motion.p>
            <motion.h2 variants={staggerBlurChild} className="font-display text-3xl sm:text-4xl font-bold mb-6">關於 Bonnie 抓龍筋</motion.h2>
            <motion.p variants={staggerBlurChild} className="text-muted leading-relaxed mb-4">
              嗨，我是 Bonnie！曾經是一名護理師，對人體結構與健康照護有深厚的專業背景。從接觸泰式按摩開始，就深深被這門傳統技藝所吸引，後來專程前往泰國，在正統按摩學校完成系統化的訓練，取得
              Jap Sen（抓龍筋）專項認證。
            </motion.p>
            <motion.p variants={staggerBlurChild} className="text-muted leading-relaxed mb-4">
              護理師的訓練讓我對身體有更細膩的觀察力——每個人的工作姿勢、運動習慣、生活壓力，都會反映在筋絡的狀態上。我的工作就是用雙手讀懂你的身體，找到那些深層的結節與沾黏，一一為你解開。
            </motion.p>
            <motion.p variants={staggerBlurChild} className="text-muted leading-relaxed mb-8">
              在 Bonnie Studio，我堅持專業、安全、用心的服務。每一次療程前都會詳細了解你的身體狀況，調整最適合你的手法與力道，讓你在安心的環境中，找回身體的輕盈與舒暢。
            </motion.p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((c) => (
                <div key={c.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{c.title}</h4>
                    <p className="text-muted text-base">{c.description}</p>
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
