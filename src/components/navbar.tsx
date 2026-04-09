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
          <img
            src="/logo.png"
            alt="Bonnie Studio"
            className="h-12"
          />
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
            <img
              src="/logo.png"
              alt="Bonnie Studio"
              className="h-12"
            />
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-muted hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://lin.ee/M93vttj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-full text-sm font-bold mt-2"
              >
                <LineIcon size={18} />
                LINE 預約
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
