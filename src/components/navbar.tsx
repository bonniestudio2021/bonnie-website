"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LineIcon } from "./icons";

const navLinksLeft = [
  { href: "/#services", label: "服務項目" },
  { href: "/#about", label: "關於 Bonnie 抓龍筋" },
  { href: "/#testimonials", label: "客戶好評" },
];

const navLinksRight = [
  { href: "/blog", label: "男性保健專欄" },
  { href: "/#faq", label: "常見問題" },
  { href: "/#contact", label: "聯絡我們" },
];

const navLinks = [...navLinksLeft, ...navLinksRight];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="w-full px-10 sm:px-16 h-16 flex items-center">

          {/* Desktop: 左側選單 */}
          <div className="hidden md:flex items-center justify-evenly flex-1">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo 置中（僅桌面版） */}
          <a href="/" className="hidden md:flex items-center flex-shrink-0 mx-8">
            <img src="/logo.png" alt="Bonnie Studio" className="h-12" />
          </a>

          {/* Desktop: 右側選單 */}
          <div className="hidden md:flex items-center justify-evenly flex-1">
            {navLinksRight.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lin.ee/M93vttj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#06C755] hover:bg-[#05B34D] text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              <LineIcon size={14} />
              LINE 預約
            </a>
          </div>

          {/* Mobile: Logo 左 + 漢堡右 */}
          <div className="flex md:hidden items-center justify-between w-full">
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Bonnie Studio" className="h-12" />
            </a>
            <button
              className="p-2 text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile 選單 — 移出 nav 避免透明度與 z-index 問題 */}
      <AnimatePresence>
        {open && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* 右側面板 */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 h-[100dvh] w-72 z-[100] flex flex-col md:hidden"
              style={{ backgroundColor: "#FDFBF8" }}
            >
              {/* 頂部：Logo + 關閉 */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E0D8] flex-shrink-0">
                <img src="/logo.png" alt="Bonnie Studio" className="h-10" />
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* 選單連結 */}
              <div className="flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-3 text-base font-medium text-foreground/70 hover:text-primary border-b border-[#EDE8E2] last:border-0 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* 底部：LINE 按鈕（含 iOS 安全區域） */}
              <div className="px-6 pt-4 pb-8 flex-shrink-0 border-t border-[#E8E0D8]"
                style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
              >
                <a
                  href="https://lin.ee/M93vttj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05B34D] text-white px-5 py-3.5 rounded-full text-sm font-bold w-full transition-colors shadow-md"
                >
                  <LineIcon size={18} />
                  LINE 線上預約
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
