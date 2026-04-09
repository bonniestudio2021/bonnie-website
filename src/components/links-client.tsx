"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Droplets,
  Flame,
  Ear,
  MapPin,
  BookOpen,
  Home,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { LineIcon } from "./icons";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    icon: <LineIcon size={20} />,
    label: "LINE",
    href: "https://lin.ee/M93vttj",
    color: "#06C755",
  },
  {
    icon: <XIcon size={18} />,
    label: "X (Twitter)",
    href: "https://x.com/bonniemassage3",
    color: "#000000",
  },
];

const mainLinks = [
  {
    icon: <LineIcon size={18} />,
    label: "LINE 線上預約",
    href: "https://lin.ee/M93vttj",
    highlight: true,
  },
  { icon: <Zap size={18} />, label: "龍筋精油按摩（60 分鐘）", href: "/#services" },
  { icon: <Droplets size={18} />, label: "龍筋 + 頭部按摩（90 分鐘）", href: "/#services" },
  { icon: <Ear size={18} />, label: "龍筋 + 耳燭除濕（75 分鐘）", href: "/#services" },
  { icon: <Flame size={18} />, label: "龍筋 + 頭部 + 耳燭（90 分鐘）", href: "/#services" },
  { icon: <BookOpen size={18} />, label: "男性保健專欄", href: "/blog" },
  { icon: <HelpCircle size={18} />, label: "常見問題", href: "/#faq" },
  { icon: <Home size={18} />, label: "官方網站", href: "/" },
];

const skillTags = ["泰式古法", "抓龍筋", "男士保健", "護理師背景", "服務數千人次"];

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
          <img
            src="/bonnie-avatar.jpg"
            alt="Bonnie"
            className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-border mb-4"
          />
          <h1 className="font-display text-2xl font-bold">Bonnie Studio</h1>
          <p className="text-muted text-sm mt-1">
            泰式古法抓龍筋 · 男士保健
          </p>
          <p className="text-muted text-xs mt-1">
            營業時間 13:00–21:30 · 預約制
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

        {/* Locations */}
        <div className="mt-8 space-y-2 text-sm text-muted">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p>台北店：近天成大飯店，捷運北車 M3 出口步行約 3 分鐘</p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p>台南店：近北門路圓環，東菜市場步行約 5 分鐘</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Bonnie Studio</p>
        </div>
      </div>
    </div>
  );
}
