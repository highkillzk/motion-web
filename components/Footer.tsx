import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#06000F]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden">
                <Image src="/logo.png" alt="Motion" width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <span
                className="font-syne font-bold text-xl"
                style={{
                  background: "linear-gradient(135deg, #9B59F5, #BF7FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Motion
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Stop being bored. One tap picks tonight&apos;s move, your crew votes, and the night begins.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: "TikTok",
                  href: "https://tiktok.com/@getmotionapp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.82a8.18 8.18 0 004.78 1.52V6.89a4.85 4.85 0 01-1.01-.2z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/getmotionapp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/getmotionapp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-purple-500/50 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">App</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Download", href: "#download" },
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how" },
                { label: "Screenshots", href: "#screenshots" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Legal</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Support", href: "/support" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <a
                href="mailto:getmotionapp@gmail.com"
                className="text-sm text-white/40 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {year} Brian Goodman. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Made with ⚡ for the crew that&apos;s always down.
          </p>
        </div>
      </div>
    </footer>
  );
}
