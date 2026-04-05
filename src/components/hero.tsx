"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0EB] via-background to-[#EDE8E3] -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              正統泰式 Jap Sen 深層筋絡按摩
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              釋放深層痠痛
              <br />
              <span className="text-primary">喚醒身體活力</span>
            </h1>

            <p className="text-muted text-lg leading-relaxed mb-8 max-w-lg">
              Bonnie Bunny 以正統泰式抓龍筋手法，沿著人體十大經絡線（Sen
              Sib）深層調理，幫助你解開筋膜沾黏、舒緩慢性痠痛，找回輕盈舒暢的身體感受。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="cta-expand"
                style={{ "--cta-color": "#7C6A56" } as React.CSSProperties}
              >
                <span className="cta-label">立即預約體驗</span>
                <span className="cta-icon">
                  <ArrowRight size={18} />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-muted hover:text-primary font-medium transition-colors"
              >
                了解服務項目
              </a>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/10 border border-border">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted/40">
                <div className="text-center">
                  <Sparkles size={48} className="mx-auto mb-3 text-primary/30" />
                  <p className="text-sm">Hero Image</p>
                  <p className="text-xs mt-1">建議尺寸: 800x1000</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
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
