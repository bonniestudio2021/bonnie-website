"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "陳先生",
    tag: "上班族",
    text: "長期坐辦公室肩頸超級僵硬，試過很多按摩都只是暫時舒緩。Bunny 的抓龍筋真的不一樣，第一次就感覺到深層的結被打開了，隔天整個肩膀都鬆了。",
  },
  {
    name: "林小姐",
    tag: "健身愛好者",
    text: "重訓完大腿和背部常常很緊繃，Bunny 很精準地找到問題點，撥筋的手法超到位。現在固定每兩週來報到一次，恢復速度快很多。",
  },
  {
    name: "王先生",
    tag: "工程師",
    text: "朋友推薦來的，本來對抓龍筋有點害怕。Bunny 很細心地先問了我的狀況，過程中也會確認力道。雖然會痠，但那種痠完之後的舒暢感真的很值得！",
  },
  {
    name: "張小姐",
    tag: "瑜珈老師",
    text: "身為瑜珈老師，對身體的敏感度比較高。Bunny 的手法非常專業，能感覺到她真的理解筋絡走向，不是亂壓。環境也很乾淨舒適，完全放心。",
  },
  {
    name: "劉先生",
    tag: "馬拉松跑者",
    text: "跑馬拉松小腿和膝蓋周圍常常有緊繃感，Bunny 幫我做了腿部的深層筋絡調理，跑完步的恢復期明顯縮短了。非常推薦給運動族群！",
  },
  {
    name: "黃小姐",
    tag: "護理師",
    text: "工作需要久站，腰和腿每天都很痠。第一次體驗就覺得 Bunny 的手法跟一般泰式按摩很不同，更深層也更到位。現在是我每月必要的放鬆行程。",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-dark-bg text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            客戶真實好評
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            聽聽他們怎麼說，每一則都是真實的療程體驗分享
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-dark-card rounded-2xl p-6 border border-white/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">{t.tag}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
