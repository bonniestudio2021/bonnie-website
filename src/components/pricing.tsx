"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Crown } from "lucide-react";

const plans = [
  {
    name: "單次體驗",
    duration: "60 分鐘",
    price: "1,500",
    description: "第一次嘗試抓龍筋？先來體驗看看",
    features: [
      "療程前身體狀況諮詢",
      "60 分鐘深層筋絡按摩",
      "針對主要問題部位處理",
      "術後保養建議",
    ],
    popular: false,
    cta: "預約體驗",
  },
  {
    name: "深度調理",
    duration: "90 分鐘",
    price: "2,200",
    description: "最受歡迎的完整療程",
    features: [
      "詳細身體狀況評估",
      "90 分鐘全面深層調理",
      "涵蓋全身主要經絡線",
      "搭配局部熱敷舒緩",
      "客製化調理計畫建議",
    ],
    popular: true,
    cta: "立即預約",
  },
  {
    name: "極致放鬆",
    duration: "120 分鐘",
    price: "2,800",
    description: "給自己一段完整的身心修復時光",
    features: [
      "完整身體狀況評估",
      "120 分鐘深度全身調理",
      "十大經絡線逐一疏通",
      "搭配熱敷與舒緩手法",
      "個人化保養計畫",
      "優先預約時段",
    ],
    popular: false,
    cta: "預約諮詢",
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            價格方案
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            透明定價，依據療程時長選擇最適合你的方案
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`rounded-2xl border p-8 relative ${
                plan.popular
                  ? "bg-dark-bg text-white border-accent shadow-xl scale-105"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-dark-bg text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Crown size={12} />
                  最受歡迎
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p
                  className={`text-sm mt-1 ${plan.popular ? "text-white/60" : "text-muted"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-sm ${plan.popular ? "text-white/60" : "text-muted"}`}
                >
                  {plan.duration}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-sm">NT$</span>
                  <span className="font-display text-4xl font-bold">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`}
                    />
                    <span className={plan.popular ? "text-white/80" : ""}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="cta-expand w-full justify-center"
                style={
                  {
                    "--cta-color": plan.popular ? "#C9A96E" : "#7C6A56",
                  } as React.CSSProperties
                }
              >
                <span className="cta-label">{plan.cta}</span>
                <span className="cta-icon">
                  <ArrowRight size={16} />
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Package note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted text-sm mt-10"
        >
          套票優惠：5 堂 95 折 / 10 堂 9 折，歡迎 LINE 諮詢詳情
        </motion.p>
      </div>
    </section>
  );
}
