import type { Variants } from "framer-motion";

// Blur-in from bottom animation (single element)
export const blurIn = {
  initial: { opacity: 0, y: 30, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const blurInTransition = {
  duration: 0.7,
  ease: "easeOut" as const,
};

// Stagger container - wraps children that each blur in one by one
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// Stagger container with faster stagger for text lines
export const textStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Stagger child with blur
export const staggerBlurChild: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Card stagger (slightly slower)
export const cardStagger: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
