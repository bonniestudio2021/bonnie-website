"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { LineIcon } from "./icons";

const navLinks = [
  { href: "#services", label: "服務項目" },
  { href: "#about", label: "關於 Bunny" },
  { href: "#testimonials", label: "客戶好評" },
  { href: "#pricing", label: "價格方案" },
  { href: "/blog", label: "筋絡知識" },
  { href: "#contact", label: "預約諮詢" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-wide text-primary">
            Bonnie Bunny
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://line.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-expand text-xs"
            style={{ "--cta-color": "#06C755" } as React.CSSProperties}
          >
            <span className="cta-label">LINE 預約</span>
            <span className="cta-icon">
              <LineIcon size={16} />
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                href="https://line.me/"
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
