"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: ([delay, stagger]: [number, number]) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
};

const charVariants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 8 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

interface BlurTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number; // per-character stagger in seconds
  animate?: boolean; // true = animate on mount, false = whileInView
}

export default function BlurText({
  text,
  className = "",
  as = "span",
  delay = 0,
  stagger = 0.05,
  animate = false,
}: BlurTextProps) {
  const Tag = motion[as];

  // Split text preserving line breaks (split by \n or <br>)
  const chars = text.split("");

  return (
    <Tag
      variants={containerVariants}
      custom={[delay, stagger]}
      initial="hidden"
      {...(animate ? { animate: "visible" } : { whileInView: "visible" })}
      viewport={{ once: true }}
      className={className}
      style={{ display: "block" }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}
