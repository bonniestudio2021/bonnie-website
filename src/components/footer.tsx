import { LineIcon } from "./icons";

const footerLinks = [
  { href: "/#services", label: "服務項目" },
  { href: "/#about", label: "關於 Bonnie 抓龍筋" },
  { href: "/#testimonials", label: "客戶好評" },
  { href: "/blog", label: "男性保健專欄" },
  { href: "/tags", label: "文章標籤" },
  { href: "/#faq", label: "常見問題" },
  { href: "/#contact", label: "聯絡我們" },
  { href: "/links", label: "所有連結" },
];

export default function Footer() {
  return (
    <footer className="bg-[#5E4F3D] text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <a href="/">
              <img
                src="/logo.png"
                alt="Bonnie Studio"
                className="h-12 brightness-0 invert mb-2"
              />
            </a>
            <p className="text-sm">泰式古法抓龍筋 · 男士保健</p>
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
              href="https://lin.ee/M93vttj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#06C755] flex items-center justify-center transition-colors"
              aria-label="LINE"
            >
              <LineIcon size={20} />
            </a>
            <a
              href="https://x.com/bonniemassage3"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-colors"
              aria-label="X"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Bonnie Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
