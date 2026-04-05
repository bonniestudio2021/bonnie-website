"use client";

import { motion } from "framer-motion";
import { Zap, Droplets, Flame, Ear, ArrowRight, Leaf, TreePine, Flower } from "lucide-react";
import { LineIcon } from "./icons";
import { blurIn, blurInTransition, textStaggerContainer, staggerContainer, staggerBlurChild } from "@/lib/animations";
import BlurText from "./blur-text";

const mainService = {
  icon: Zap,
  title: "龍筋精油按摩",
  duration: "60 分鐘",
  description:
    "使用天然冷壓初榨分餾椰子油，以專業古法手法按揉經絡，放鬆骨盆底肌群，舒緩壓力達到放鬆，促進良好血液循環。",
  features: [
    "天然冷壓初榨分餾椰子油",
    "專業古法筋絡調理",
    "放鬆骨盆底肌群",
    "促進良好血液循環",
  ],
};

const combos = [
  {
    label: "A",
    icon: Droplets,
    title: "龍筋 + 頭部按摩",
    duration: "90 分鐘",
    description:
      "龍筋調理後，使用含有依蘭精油按摩頭部，釋放壓力促進血循。",
  },
  {
    label: "B",
    icon: Ear,
    title: "龍筋 + 耳燭除濕",
    duration: "90 分鐘",
    description:
      "龍筋調理後，再加上耳燭移除耳內濕氣，保持耳內清爽。",
  },
  {
    label: "C",
    icon: Flame,
    title: "龍筋 + 頭部按摩 + 耳燭",
    duration: "90 分鐘",
    description:
      "最完整的組合！龍筋調理後，依蘭精油按摩頭部，再加上耳燭移除耳內濕氣，徹底解放頭部顱內壓力及淋巴循環。",
    popular: true,
  },
];

const oils = [
  {
    icon: Flame,
    name: "暖循經典按摩油",
    blend: "含 4 種精油",
    ingredients: ["黑胡椒", "完全依蘭", "肉桂葉", "泰國蔘薑"],
    benefit: "促進血液循環",
  },
  {
    icon: Droplets,
    name: "暖循淨淋按摩油",
    blend: "含 5 種精油",
    ingredients: ["杜松漿果", "黑胡椒", "肉桂葉", "泰國蔘薑", "完全依蘭"],
    benefit: "促進泌尿道健康與淨化淋巴",
  },
  {
    icon: TreePine,
    name: "賦活全效按摩油",
    blend: "含 6 種精油",
    ingredients: ["雪松", "完全依蘭", "杜松漿果", "黑胡椒", "肉桂葉", "泰國蔘薑"],
    benefit: "全方位調理與身心平衡",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-2 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={textStaggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.p variants={staggerBlurChild} className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Services</motion.p>
          <motion.h2 variants={staggerBlurChild} className="font-display text-3xl sm:text-4xl font-bold mb-4">服務項目</motion.h2>
          <motion.p variants={staggerBlurChild} className="text-muted max-w-2xl mx-auto">
            源自泰國傳統醫學的正統手法，為你量身調配最適合的筋絡保養方案
          </motion.p>
        </motion.div>

        {/* Main service */}
        <motion.div
          initial={blurIn.initial}
          whileInView={blurIn.whileInView}
          viewport={{ once: true }}
          transition={blurInTransition}
          className="bg-card rounded-2xl border border-border p-8 md:p-10 mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <mainService.icon size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-display text-2xl font-bold">
                  {mainService.title}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-accent/15 text-accent font-medium">
                  {mainService.duration}
                </span>
              </div>
              <p className="text-muted leading-relaxed mb-5">
                {mainService.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {mainService.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Combo packages */}
        <motion.div
          initial={blurIn.initial}
          whileInView={blurIn.whileInView}
          viewport={{ once: true }}
          transition={blurInTransition}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-accent" />
            <h3 className="font-display text-xl font-bold">附加按摩項目套餐</h3>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {combos.map((c) => (
              <motion.div
                key={c.label}
                variants={staggerBlurChild}
                className={`rounded-2xl border p-6 relative ${
                  c.popular
                    ? "bg-gradient-to-br from-[#FDFBF8] to-[#F7F2EC] border-accent/30 shadow-md"
                    : "bg-card border-border"
                }`}
              >
                {c.popular && (
                  <span className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-primary text-white font-medium">
                    最完整
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center text-accent font-bold text-sm">
                    {c.label}
                  </span>
                  <c.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-xl mb-1">
                  {c.title}
                </h4>
                <span className="text-xs text-accent font-medium">
                  {c.duration}
                </span>
                <p className="text-muted text-sm leading-relaxed mt-3">
                  {c.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Essential oils add-on */}
        <motion.div
          initial={blurIn.initial}
          whileInView={blurIn.whileInView}
          viewport={{ once: true }}
          transition={blurInTransition}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-0.5 bg-accent" />
            <h3 className="font-display text-xl font-bold">男性保健芳療精油加購</h3>
          </div>
          <p className="text-muted mb-6">
            特選德國及美國品牌，按摩效果再升級，可視需求加購不同功效的精油
          </p>

          {/* Oil image with bottom fade */}
          <div className="relative rounded-t-2xl overflow-hidden mb-4">
            <img
              src="/essential-oils.jpg"
              alt="專業芳療精油"
              className="w-full h-[calc(12rem+90px)] sm:h-[calc(16rem+90px)] object-cover"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {oils.map((o) => (
              <div
                key={o.name}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <o.icon size={20} className="text-accent" />
                </div>
                <h4 className="font-display font-bold text-xl mb-1">{o.name}</h4>
                <p className="text-sm text-accent mb-2">{o.blend}</p>
                <p className="text-muted text-sm leading-relaxed mb-3">
                  {o.benefit}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {o.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#F5F0EB] text-foreground/70"
                    >
                      <Leaf size={10} className="text-accent" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted/60 mt-4">
            ※ 敏感族群（低血壓、肝腎病、皮膚極度敏感者）不建議加購芳療精油
          </p>
        </motion.div>

      </div>
    </section>
  );
}
