"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { LineIcon } from "./icons";
import { staggerBlurChild, textStaggerContainer } from "@/lib/animations";
import BlurText from "./blur-text";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0EB] via-[#F5F0EB] to-background -z-10" />

      {/* Gentle floating warm glow */}
      <motion.div
        className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#FCEBD3]/40 blur-[120px] -z-10"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[#F5DEB3]/35 blur-[120px] -z-10"
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            variants={textStaggerContainer}
            initial="hidden"
            animate="visible"
            className="order-1"
          >
            <motion.div
              variants={staggerBlurChild}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-3"
            >
              <Sparkles size={14} />
              泰式古法抓龍筋 · 男士保健
            </motion.div>

            <div className="mb-6">
              <BlurText
                text="台北台南抓龍筋推薦"
                as="h1"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                animate
                delay={0.2}
              />
              <BlurText
                text="喚醒男人的力量"
                as="span"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#bf6a2f]"
                animate
                delay={0.5}
              />
            </div>

            <motion.p
              variants={staggerBlurChild}
              className="text-muted text-lg leading-relaxed mb-8 max-w-lg"
            >
              我是 Bonnie，護理師出身，已累計服務超過數千位客人。以正統泰式古法抓龍筋手法，深入鼠蹊部與下肢筋絡，疏通血液循環、釋放深層緊繃，幫助你找回充沛精力與自信狀態。
            </motion.p>

            <motion.div variants={staggerBlurChild} className="flex flex-wrap gap-4">
              <a
                href="https://lin.ee/M93vttj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05B34D] text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <LineIcon size={18} />
                LINE 線上預約
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 font-medium transition-colors"
              >
                了解抓龍筋服務
                <ArrowDown size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border mt-4 md:mt-0">
              <img
                src="/hero-bonnie.jpg"
                alt="Bonnie 泰國按摩學校認證"
                className="w-full h-auto block"
              />

              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-xs text-muted">泰國認證</p>
                <p className="font-display font-bold text-primary text-sm">
                  Jap Sen 專業技師
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
