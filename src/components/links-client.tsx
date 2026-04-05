"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Waves,
  Flower2,
  MapPin,
  BookOpen,
  Home,
  ExternalLink,
} from "lucide-react";
import { LineIcon } from "./icons";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

interface MainLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  highlight?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    icon: <LineIcon size={20} />,
    label: "LINE",
    href: "https://line.me/",
    color: "#06C755",
  },
];

const mainLinks: MainLink[] = [
  { icon: <Zap size={18} />, label: "抓龍筋 Jap Sen", href: "/#services" },
  { icon: <Waves size={18} />, label: "泰式全身舒壓", href: "/#services" },
  { icon: <Flower2 size={18} />, label: "局部加強調理", href: "/#services" },
  {
    icon: <LineIcon size={18} />,
    label: "LINE 立即預約",
    href: "https://line.me/",
    highlight: true,
  },
  { icon: <BookOpen size={18} />, label: "筋絡知識部落格", href: "/blog" },
  { icon: <Home size={18} />, label: "官方網站", href: "/" },
  {
    icon: <MapPin size={18} />,
    label: "服務地點",
    href: "https://maps.google.com/",
  },
];

const skillTags = ["抓龍筋", "Jap Sen", "泰式按摩", "深層筋絡", "撥筋"];

export default function LinksClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0EB] to-background">
      <div className="max-w-md mx-auto px-4 py-12">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 border-2 border-border flex items-center justify-center mb-4">
            <span className="text-xs text-muted">Photo</span>
          </div>
          <h1 className="font-display text-2xl font-bold">Bonnie Bunny</h1>
          <p className="text-muted text-sm mt-1">
            專業抓龍筋 · 泰式深層筋絡按摩
          </p>
        </motion.div>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-3 mb-8"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ backgroundColor: s.color }}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        {/* Main links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          {mainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`flex items-center gap-3 px-5 py-3.5 rounded-xl border text-sm font-medium transition-all hover:scale-[1.02] ${
                link.highlight
                  ? "bg-[#06C755] text-white border-[#06C755] hover:bg-[#05B34D]"
                  : "bg-card border-border hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {link.icon}
              <span className="flex-1">{link.label}</span>
              <ExternalLink size={14} className="opacity-40" />
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-10 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Bonnie Bunny</p>
        </div>
      </div>
    </div>
  );
}
