"use client";

import { motion } from "framer-motion";
import { Zap, Waves, Flower2 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "抓龍筋 Jap Sen",
    subtitle: "深層筋絡調理",
    description:
      "以拇指、指節沿著人體十大經絡線深壓、撥筋、提捏，針對深層肌腱與筋膜進行調理，有效緩解慢性痠痛與肌肉緊繃。",
    features: [
      "沿 Sen Sib 十大經絡線操作",
      "深層撥筋解除筋膜沾黏",
      "針對痠痛問題部位集中處理",
      "適合運動族群、久坐上班族",
    ],
  },
  {
    icon: Waves,
    title: "泰式全身舒壓",
    subtitle: "經典泰式按摩",
    description:
      "結合傳統泰式按壓、拉伸與經絡推揉，從頭到腳全方位放鬆。適合想要全身舒緩、紓解壓力的你。",
    features: [
      "全身經絡推揉與拉伸",
      "溫和至中度力道",
      "促進血液與淋巴循環",
      "適合一般大眾放鬆保養",
    ],
  },
  {
    icon: Flower2,
    title: "局部加強調理",
    subtitle: "重點部位深層處理",
    description:
      "針對肩頸、腰背、腿部等特定痠痛部位，結合抓龍筋手法進行集中深層處理，快速緩解不適。",
    features: [
      "肩頸僵硬深層放鬆",
      "腰背痠痛重點調理",
      "腿部筋絡疏通",
      "可搭配熱敷加強效果",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            服務項目
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            源自泰國傳統醫學的正統手法，為你量身調配最適合的筋絡保養方案
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <s.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">
                {s.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-3">
                {s.subtitle}
              </p>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
