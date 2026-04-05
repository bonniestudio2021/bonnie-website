"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LineIcon } from "./icons";
import type { BlogCta } from "@/lib/blog";

interface BlogCtaProps {
  cta: BlogCta;
}

export default function BlogCtaSection({ cta }: BlogCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#F5F0EB] rounded-2xl p-8 md:p-12 mt-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/bonnie-avatar.jpg"
          alt="Bonnie"
          className="w-24 h-24 rounded-full object-cover border-2 border-border flex-shrink-0"
        />

        <div className="text-center md:text-left flex-1">
          <h3 className="font-display text-xl font-bold mb-2">
            {cta.headline}
          </h3>
          <p className="text-muted text-sm mb-4">{cta.description}</p>
          <a
            href={cta.buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-expand text-sm"
            style={
              {
                "--cta-color":
                  cta.variant === "line" ? "#06C755" : "#7C6A56",
              } as React.CSSProperties
            }
          >
            <span className="cta-label">{cta.buttonText}</span>
            <span className="cta-icon">
              {cta.variant === "line" ? (
                <LineIcon size={16} />
              ) : (
                <ArrowRight size={16} />
              )}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
