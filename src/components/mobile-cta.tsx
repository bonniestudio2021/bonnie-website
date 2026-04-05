"use client";

import { motion } from "framer-motion";
import { LineIcon } from "./icons";

export default function MobileCta() {
  return (
    <motion.div
      initial={{ bottom: -80, opacity: 0 }}
      animate={{ bottom: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" as const }}
      className="fixed left-0 right-0 z-50 p-3 md:hidden"
    >
      <a
        href="https://lin.ee/M93vttj"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-[#887054] hover:bg-[#755F45] text-white font-bold py-3.5 rounded-full shadow-lg text-base"
      >
        <LineIcon size={20} />
        預約 Bonnie 抓龍筋
      </a>
    </motion.div>
  );
}
