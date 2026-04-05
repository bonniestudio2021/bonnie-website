import { LineIcon } from "./icons";

const footerLinks = [
  { href: "#services", label: "服務項目" },
  { href: "#about", label: "關於 Bunny" },
  { href: "#pricing", label: "價格方案" },
  { href: "/blog", label: "筋絡知識" },
  { href: "#contact", label: "預約諮詢" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold text-white mb-2">
              Bonnie Bunny
            </p>
            <p className="text-sm">專業抓龍筋 · 泰式深層筋絡按摩</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://line.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#06C755] flex items-center justify-center transition-colors"
              aria-label="LINE"
            >
              <LineIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Bonnie Bunny. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
