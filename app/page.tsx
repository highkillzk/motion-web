"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Moves data ──────────────────────────────────────────────────────────────
const MOVES = [
  { name: "Midnight Rooftop Run",   category: "Late Night", emoji: "🌙", tags: ["Views", "Vibes"],       color: "#6366F1" },
  { name: "24hr Diner Crawl",        category: "Chaos",      emoji: "🍳", tags: ["Food", "Random"],       color: "#F59E0B" },
  { name: "Thrift Flip Challenge",   category: "Broke",      emoji: "🛍️", tags: ["$0", "Creative"],       color: "#22C55E" },
  { name: "Speakeasy Night",         category: "Luxury",     emoji: "🥂", tags: ["Exclusive", "Dress up"], color: "#BF7FFF" },
  { name: "Sunset Hike & Snacks",    category: "Outdoors",   emoji: "🌅", tags: ["Fresh air", "Views"],   color: "#F97316" },
  { name: "Karaoke Battle",          category: "Social",     emoji: "🎤", tags: ["Loud", "Hilarious"],    color: "#EC4899" },
  { name: "Escape Room Sprint",      category: "Chaos",      emoji: "🔐", tags: ["Competitive", "Fast"],  color: "#F59E0B" },
  { name: "Rooftop Bar Hop",         category: "Late Night", emoji: "🍸", tags: ["Views", "Social"],      color: "#6366F1" },
  { name: "Night Market Dig",        category: "Broke",      emoji: "🏮", tags: ["Cheap", "Food"],        color: "#22C55E" },
  { name: "Midnight Bowling",        category: "Chaos",      emoji: "🎳", tags: ["Competitive", "Late"],  color: "#F59E0B" },
  { name: "Silent Disco",            category: "Social",     emoji: "🎧", tags: ["Dancing", "Wild"],      color: "#EC4899" },
  { name: "3am Food Run",            category: "Late Night", emoji: "🌮", tags: ["Hungry", "Go"],         color: "#6366F1" },
  { name: "Arcade Battle Night",     category: "Chaos",      emoji: "🕹️", tags: ["Competitive", "Retro"], color: "#F59E0B" },
  { name: "Drive-in Movie Night",    category: "Late Night", emoji: "🎬", tags: ["Chill", "Classic"],     color: "#6366F1" },
  { name: "Street Food Tour",        category: "Broke",      emoji: "🥙", tags: ["$15", "Delicious"],     color: "#22C55E" },
  { name: "Comedy Show Night",       category: "Social",     emoji: "😂", tags: ["Laughs", "Easy"],       color: "#EC4899" },
  { name: "Sunrise Beach Run",       category: "Outdoors",   emoji: "🏃", tags: ["Early", "Worth it"],    color: "#F97316" },
  { name: "Yacht Rental Split",      category: "Luxury",     emoji: "⛵", tags: ["Water", "Premium"],     color: "#BF7FFF" },
  { name: "Haunted City Walk",       category: "Chaos",      emoji: "👻", tags: ["Creepy", "Funny"],      color: "#F59E0B" },
  { name: "Rooftop Yoga Sunrise",    category: "Outdoors",   emoji: "🧘", tags: ["Peaceful", "Views"],    color: "#F97316" },
];

// ─── Scroll fade-in hook ──────────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// ─── Phone mockup with image fallback ────────────────────────────────────────
function PhoneScreen({ src, alt, label, gradient }: { src: string; alt: string; label: string; gradient: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-3">
      <div className="phone-mockup" style={{ width: 170, boxShadow: "0 20px 60px rgba(0,0,0,0.5),0 0 30px rgba(123,47,190,0.15)" }}>
        {!err ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} onError={() => setErr(true)}
            style={{ width: "100%", aspectRatio: "9/19.5", display: "block", objectFit: "cover" }} />
        ) : (
          <div style={{ width: "100%", aspectRatio: "9/19.5", background: gradient, display: "flex",
            flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 28 }}>⚡</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-white/30 tracking-wide">{label}</span>
    </div>
  );
}

// ─── Interactive Motion Demo ──────────────────────────────────────────────────
function MotionDemo() {
  const [phase, setPhase] = useState<"idle" | "spinning" | "revealed">("idle");
  const [move, setMove] = useState(MOVES[0]);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [hasRerolled, setHasRerolled] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const runSpin = () => {
    setPhase("spinning");
    let count = 0;
    let delay = 55;
    const tick = () => {
      setDisplayIdx(Math.floor(Math.random() * MOVES.length));
      count++;
      if (count > 15) delay = 130;
      if (count > 19) delay = 220;
      if (count < 22) {
        timerRef.current = setTimeout(tick, delay);
      } else {
        const picked = MOVES[Math.floor(Math.random() * MOVES.length)];
        setMove(picked);
        setPhase("revealed");
      }
    };
    timerRef.current = setTimeout(tick, delay);
  };

  const handleReroll = () => {
    if (hasRerolled) return;
    setHasRerolled(true);
    setPhase("idle");
    setTimeout(runSpin, 120);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div className="max-w-sm mx-auto text-center px-4">
      {phase === "idle" && (
        <div className="flex flex-col items-center gap-6">
          {/* Outer rings */}
          <div className="relative flex items-center justify-center">
            {/* Ring 3 — outermost */}
            <div className="absolute w-72 h-72 rounded-full border border-purple-500/10 animate-ping" style={{ animationDuration: "3s" }} />
            {/* Ring 2 */}
            <div className="absolute w-64 h-64 rounded-full border border-purple-500/15" />
            {/* Ring 1 */}
            <div className="absolute w-56 h-56 rounded-full border border-purple-400/20" />

            {/* Main button */}
            <button
              onClick={runSpin}
              className="motion-btn-pulse relative w-48 h-48 rounded-full flex flex-col items-center justify-center gap-3 cursor-pointer select-none transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(160deg, #4A1590 0%, #7B2FBE 45%, #9B59F5 80%, #BF7FFF 100%)" }}
            >
              {/* Inner ring shine */}
              <div className="absolute inset-2 rounded-full border border-white/10" />
              {/* Logo */}
              <Image src="/logo.png" alt="Motion" width={52} height={52}
                className="relative z-10"
                style={{ filter: "brightness(10) saturate(0)", objectFit: "contain" }} />
              <span className="font-syne font-extrabold text-xl text-white tracking-wider relative z-10">HIT MOTION</span>
            </button>
          </div>
          <span className="text-white/35 text-xs font-semibold tracking-widest uppercase">tap to get your move</span>
        </div>
      )}

      {phase === "spinning" && (
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: "3s" }} />
            <div
              className="w-48 h-48 rounded-full mx-auto flex flex-col items-center justify-center gap-2"
              style={{ background: "linear-gradient(160deg, #4A1590, #7B2FBE, #9B59F5)",
                boxShadow: "0 0 80px rgba(123,47,190,0.7), 0 0 160px rgba(123,47,190,0.3)" }}
            >
              <span style={{ fontSize: 32 }}>{MOVES[displayIdx].emoji}</span>
              <span className="font-syne font-bold text-xs text-white text-center px-5 leading-tight">
                {MOVES[displayIdx].name}
              </span>
            </div>
          </div>
          <span className="text-white/35 text-xs font-semibold tracking-widest uppercase">finding your move...</span>
        </div>
      )}

      {phase === "revealed" && (
        <div className="move-reveal">
          <div className="rounded-3xl p-6 mb-5 text-center"
            style={{ background: `linear-gradient(135deg, ${move.color}18, rgba(10,10,20,0.95))`,
              border: `1px solid ${move.color}40`, boxShadow: `0 0 50px ${move.color}18` }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: `${move.color}18`, color: move.color, border: `1px solid ${move.color}35` }}>
              🎯 {move.category}
            </div>
            <div style={{ fontSize: 64 }} className="mb-3">{move.emoji}</div>
            <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-white mb-4 leading-tight">{move.name}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {move.tags.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold text-white/55"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {!hasRerolled ? (
              <button onClick={handleReroll}
                className="py-3.5 rounded-2xl font-semibold text-white/65 border border-white/12 text-sm hover:border-white/25 hover:text-white transition-all">
                🎲 Reroll once (1 free left)
              </button>
            ) : (
              <p className="text-sm text-white/35 py-2">Want unlimited moves? Get the app. 🔥</p>
            )}
            <a href="https://apps.apple.com/us/app/motion-your-night-starts-here/id6767748988" target="_blank" rel="noopener noreferrer"
              className="py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)", boxShadow: "0 0 30px rgba(123,47,190,0.45)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get Unlimited Moves Free
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── App Store button ────────────────────────────────────────────────────────
function AppStoreBtn({ size = "md", full = false }: { size?: "sm" | "md" | "lg"; full?: boolean }) {
  const pad = size === "lg" ? "px-10 py-5 text-lg gap-4" : size === "sm" ? "px-5 py-3 text-sm gap-2" : "px-8 py-4 text-base gap-3";
  return (
    <a href="https://apps.apple.com/us/app/motion-your-night-starts-here/id6767748988" target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold text-white rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 glow-purple ${pad} ${full ? "w-full" : ""}`}
      style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}>
      <svg width={size === "lg" ? 24 : 20} height={size === "lg" ? 24 : 20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      Download on the App Store
    </a>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Curated Moves" },
  { value: "14",   label: "Categories"    },
  { value: "∞",    label: "Nights Saved"  },
  { value: "4",    label: "Crew Members"  },
];

const FEATURES = [
  { emoji: "⚡", title: "Hit Motion",        desc: "One tap. Motion reads your vibe and drops the perfect move. No scrolling. No arguing.",        accent: "#9B59F5", bg: "rgba(155,89,245,0.08)",  border: "rgba(155,89,245,0.2)"  },
  { emoji: "👥", title: "Move With Your Crew", desc: "Build a Squad, invite your people, let everyone vote. No more 'I don't care, you pick.'",  accent: "#EC4899", bg: "rgba(236,72,153,0.08)",  border: "rgba(236,72,153,0.2)"  },
  { emoji: "📖", title: "Build Your Lore",   desc: "Every move you complete gets logged. Add photos, write the funniest moment, track your streak.", accent: "#22C55E", bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)"   },
  { emoji: "🔥", title: "Level Up",          desc: "Earn XP, climb from Bronze to Legend, unlock badges for going out. The more you move, the more legendary you get.", accent: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)"  },
  { emoji: "🎯", title: "500+ Moves",        desc: "From 24hr diner crawls to rooftop sessions, broke nights to luxury experiences. 14 categories.",  accent: "#6366F1", bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.2)"  },
  { emoji: "🎟️", title: "Squad Pass",        desc: "One plan, four people. Buy the Squad Pass and get 3 invite codes — bring your whole crew in.",  accent: "#BF7FFF", bg: "rgba(191,127,255,0.08)", border: "rgba(191,127,255,0.2)" },
];

const SS_ROW1 = [
  { src: "/ss1.png", label: "Hit Motion",   gradient: "linear-gradient(135deg,#3B1C8C,#7B2FBE)" },
  { src: "/ss2.png", label: "Your Crew",    gradient: "linear-gradient(135deg,#1C3B8C,#2F7BBE)" },
  { src: "/ss3.png", label: "Leaderboard",  gradient: "linear-gradient(135deg,#8C1C3B,#BE2F7B)" },
  { src: "/ss4.png", label: "The Archive",  gradient: "linear-gradient(135deg,#1C8C3B,#2FBE7B)" },
  { src: "/ss5.png", label: "Your Profile", gradient: "linear-gradient(135deg,#8C6B1C,#BE9B2F)" },
];
const SS_ROW2 = [
  { src: "/ss6.png", label: "Memory Detail", gradient: "linear-gradient(135deg,#4B1C8C,#8B2FBE)" },
  { src: "/ss7.png", label: "Move Reveal",   gradient: "linear-gradient(135deg,#8C1C1C,#BE2F2F)" },
  { src: "/ss8.png", label: "Quest Proof",   gradient: "linear-gradient(135deg,#1C5C8C,#2F8CBE)" },
  { src: "/ss3.png", label: "Leaderboard",   gradient: "linear-gradient(135deg,#8C1C3B,#BE2F7B)" },
  { src: "/ss1.png", label: "Hit Motion",    gradient: "linear-gradient(135deg,#3B1C8C,#7B2FBE)" },
];

export default function Home() {
  const heroRef     = useFadeIn(0.05);
  const demoRef     = useFadeIn(0.08);
  const statsRef    = useFadeIn();
  const featuresRef = useFadeIn();
  const ssRef       = useFadeIn(0.05);
  const crewRef     = useFadeIn();
  const loreRef     = useFadeIn();
  const socialRef   = useFadeIn();
  const howRef      = useFadeIn();
  const downloadRef = useFadeIn();
  const heroSectionRef = useRef<HTMLElement>(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = heroSectionRef.current;
      if (!hero) return;
      setStickyVisible(window.scrollY > hero.offsetHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#06000F] overflow-x-hidden">
      <Navbar />

      {/* ── STICKY MOBILE CTA — only after scrolling past hero ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        stickyVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`} style={{ background: "linear-gradient(to top, #06000F 70%, transparent)", padding: "12px 16px 20px" }}>
        <AppStoreBtn size="md" full />
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section ref={heroSectionRef} className="relative min-h-[100svh] flex items-center pt-20 pb-28 md:pb-20">
        {/* BG */}
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[150px] opacity-12 pointer-events-none"
          style={{ background: "radial-gradient(ellipse,#7B2FBE,transparent)" }} />

        <div className="max-w-6xl mx-auto px-5 w-full">
          <div ref={heroRef} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* ── Copy (always first on mobile) ── */}
            <div className="text-center lg:text-left order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/25 bg-purple-500/8 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">Now on the App Store</span>
              </div>

              <h1 className="font-syne font-extrabold text-[clamp(52px,10vw,88px)] leading-[0.9] tracking-tight mb-6">
                <span className="text-white">Stop<br />Being</span><br />
                <span style={{ background: "linear-gradient(135deg,#9B59F5 0%,#BF7FFF 55%,#fff 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Bored.</span>
              </h1>

              <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                One tap picks tonight&apos;s move. Your crew votes. The night begins.
              </p>

              {/* CTA — always visible above fold on all devices */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <AppStoreBtn size="lg" />
                <a href="#demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-white/55 border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-200">
                  Try It Free &darr;
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["#9B59F5","#EC4899","#F59E0B","#22C55E","#6366F1"].map((c,i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#06000F] flex items-center justify-center text-xs"
                      style={{ background: c }}>⚡</div>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  <span className="text-white font-semibold">Squads</span> moving right now
                </p>
              </div>
            </div>

            {/* ── Phone + bored mascot ── */}
            <div className="relative flex justify-center items-end order-2 min-h-[340px] md:min-h-[480px]">
              <div className="absolute w-72 h-72 rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(#7B2FBE,transparent)" }} />

              {/* Phone */}
              <div className="relative animate-float" style={{ animationDuration: "5s" }}>
                <div className="phone-mockup" style={{ width: 248, borderRadius: 40, border: "2px solid rgba(155,89,245,0.35)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(123,47,190,0.3)" }}>
                  {/* Notch */}
                  <div style={{ position: "absolute", top: 13, left: "50%", transform: "translateX(-50%)",
                    width: 72, height: 6, background: "rgba(255,255,255,0.18)", borderRadius: 3, zIndex: 10 }} />
                  {/* Screen */}
                  <Image src="/ss1.png" alt="Motion app screen" width={248} height={537}
                    className="w-full block" priority
                    style={{ display: "block", borderRadius: 38, objectFit: "cover", objectPosition: "top" }} />
                </div>
                {/* Floating pills */}
                <div className="absolute -left-14 top-1/4 glass rounded-2xl px-3 py-2.5 flex items-center gap-2.5 shadow-xl hidden sm:flex"
                  style={{ border: "1px solid rgba(155,89,245,0.25)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div><p className="text-xs font-bold text-white">47 squads moving</p><p className="text-[10px] text-white/40">right now</p></div>
                </div>
                <div className="absolute -right-10 bottom-1/3 glass rounded-2xl px-3 py-2.5 shadow-xl hidden sm:block"
                  style={{ border: "1px solid rgba(245,158,11,0.3)" }}>
                  <p className="text-xs font-bold" style={{ color: "#F59E0B" }}>+250 XP ⚡</p>
                  <p className="text-[10px] text-white/40">Move completed</p>
                </div>
              </div>

              {/* Bored mascot — peeking bottom-left */}
              <div className="absolute bottom-0 -left-4 lg:-left-10 w-36 md:w-44 animate-float"
                style={{ animationDelay: "0.8s", animationDuration: "7s" }}>
                <Image src="/mascot-bored.png" alt="Bored mascot" width={176} height={176}
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(123,47,190,0.4))" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEMO ────────────────────────────────── */}
      <section id="demo" className="py-20 px-5 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(123,47,190,0.08) 0%, transparent 70%)" }} />
        <div ref={demoRef} className="section-fade max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4">Feel It Before You Download</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight mb-3">
            What&apos;s the move <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>tonight?</span>
          </h2>
          <p className="text-white/40 text-base mb-12">Tap the button. Get your move. One free reroll included.</p>
          <MotionDemo />
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <div ref={statsRef} className="section-fade border-y border-white/5 bg-white/[0.015] py-8">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-syne font-extrabold text-4xl mb-1"
                  style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  {s.value}
                </p>
                <p className="text-sm text-white/40 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROBLEM SECTION ─────────────────────────────────── */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Bored mascot large */}
            <div className="flex justify-center relative order-2 lg:order-1">
              <div className="absolute w-64 h-64 rounded-full blur-[80px] opacity-20" style={{ background: "#7B2FBE" }} />
              <div className="relative animate-float" style={{ animationDuration: "6s" }}>
                <Image src="/mascot-bored.png" alt="Bored" width={360} height={360} className="relative"
                  style={{ filter: "drop-shadow(0 0 40px rgba(123,47,190,0.3))" }} />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-5">Sound Familiar?</p>
              <h2 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-8">
                It&apos;s 9pm.<br />
                <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  Nobody picks.
                </span>
              </h2>

              <div className="space-y-3 mb-8">
                {[
                  { quote: '"what are we doing tonight"', sub: "— every group chat, every weekend" },
                  { quote: '"idc you pick"', sub: "— said by 4 people simultaneously" },
                  { quote: `"i'm bored"`, sub: "— you, at 10pm, still at home" },
                ].map((q) => (
                  <div key={q.quote} className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xl mt-0.5">💬</span>
                    <div>
                      <p className="text-white font-semibold italic text-sm">{q.quote}</p>
                      <p className="text-white/35 text-xs mt-0.5">{q.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl"
                style={{ background: "linear-gradient(135deg,rgba(123,47,190,0.15),rgba(155,89,245,0.08))", border: "1px solid rgba(155,89,245,0.2)" }}>
                <p className="font-syne font-bold text-xl text-white mb-1">Motion fixes this in one tap.</p>
                <p className="text-white/45 text-sm">No more decision paralysis. No more boring Fridays. Just tap and go.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS MARQUEE ─────────────────────────────── */}
      <section id="screenshots" className="py-20 overflow-hidden">
        <div ref={ssRef} className="section-fade">
          <div className="max-w-6xl mx-auto px-5 text-center mb-14">
            <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4">See It In Action</p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">
              Your nights,{" "}
              <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>elevated.</span>
            </h2>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="relative mb-5 overflow-hidden">
            <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
              {[...SS_ROW1, ...SS_ROW1].map((s, i) => (
                <PhoneScreen key={i} src={s.src} alt={s.label} label={s.label} gradient={s.gradient} />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to right,#06000F,transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to left,#06000F,transparent)" }} />
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
              {[...SS_ROW2, ...SS_ROW2].map((s, i) => (
                <PhoneScreen key={i} src={s.src} alt={s.label} label={s.label} gradient={s.gradient} />
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to right,#06000F,transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to left,#06000F,transparent)" }} />
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ───────────────────────────────────── */}
      <section id="features" className="py-20 px-5">
        <div ref={featuresRef} className="section-fade max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4">Everything You Need</p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
              Built for the{" "}
              <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>crew</span>
            </h2>
            <p className="text-white/40 text-base max-w-md mx-auto">Every feature designed to get you off the couch and into your next story.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}>
                  {f.emoji}
                </div>
                <h3 className="font-syne font-bold text-lg mb-2 text-white">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREW SECTION ────────────────────────────────────── */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#EC4899" }} />
        <div ref={crewRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-pink-400 tracking-widest uppercase mb-5">Move Together</p>
              <h2 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-6">
                Your crew<br />
                <span style={{ background: "linear-gradient(135deg,#EC4899,#F59E0B)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  decides together.
                </span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8 max-w-md">
                Build a Squad, drop a move suggestion, and let everyone vote. No more dead group chats. The whole crew is locked in before you leave the couch.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "✅", label: "Create your Squad in seconds" },
                  { icon: "🗳️", label: "Everyone votes on tonight&apos;s move" },
                  { icon: "🏆", label: "Crew leaderboard tracks who goes hardest" },
                  { icon: "🎟️", label: "Squad Pass — one plan, four people" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/70 font-medium text-sm"
                      dangerouslySetInnerHTML={{ __html: item.label }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="absolute w-56 h-56 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: "#EC4899" }} />
              <div className="relative animate-float" style={{ animationDuration: "5s" }}>
                <Image src="/mascot-crew.png" alt="Squad celebrating" width={400} height={400} className="relative"
                  style={{ filter: "drop-shadow(0 0 40px rgba(236,72,153,0.25))" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LORE SECTION ────────────────────────────────────── */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#22C55E" }} />
        <div ref={loreRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Memories mascot */}
            <div className="flex justify-center relative order-2 lg:order-1">
              <div className="absolute w-56 h-56 rounded-full blur-[80px] opacity-15 pointer-events-none" style={{ background: "#22C55E" }} />
              <div className="relative animate-float" style={{ animationDuration: "6s", animationDelay: "0.5s" }}>
                <Image src="/mascot-memories.png" alt="Making memories" width={400} height={400} className="relative"
                  style={{ filter: "drop-shadow(0 0 30px rgba(34,197,94,0.2))" }} />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold text-green-400 tracking-widest uppercase mb-5">The Archive</p>
              <h2 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-6">
                Your best nights,<br />
                <span style={{ background: "linear-gradient(135deg,#22C55E,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  forever.
                </span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8 max-w-md">
                Every move you complete gets logged in your Lore archive. Add photos, write the funniest moment, drop a quote of the night. The best part of a great night is reliving it.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "📸", label: "Photo memories", desc: "Add photos from the night" },
                  { icon: "🏅", label: "Vibes & ratings", desc: "Tag the energy of every night" },
                  { icon: "🔥", label: "Streak tracking", desc: "Keep the momentum going" },
                  { icon: "📅", label: "Full history", desc: "Every night, searchable" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl"
                    style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
                    <span className="text-2xl block mb-2">{item.icon}</span>
                    <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
                    <p className="text-white/35 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ────────────────────────────────────── */}
      <section className="py-24 px-5 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full blur-[120px] opacity-12 pointer-events-none"
          style={{ background: "radial-gradient(#7B2FBE,transparent)" }} />
        <div ref={socialRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-5">Social Currency</p>
              <h2 className="font-syne font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] mb-6">
                <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  &quot;He&apos;s using<br />Motion!&quot;
                </span><br />
                <span className="text-white text-3xl md:text-4xl">&quot;The cool guy.&quot;</span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-8 max-w-md">
                The person who always knows what to do tonight is just using Motion. One app. Every answer. Every time.
              </p>
              <div className="space-y-3">
                {[
                  { text: '"Where can I get that?"', color: "#9B59F5" },
                  { text: '"This is literally so smart"', color: "#22C55E" },
                  { text: '"That\'s the kind of night you talk about for years."', color: "#F59E0B" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${b.color}20` }}>
                    <span className="text-lg">💬</span>
                    <p className="italic font-semibold text-sm" style={{ color: b.color }}>{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="absolute w-56 h-56 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: "#7B2FBE" }} />
              <div className="relative animate-float" style={{ animationDuration: "5.5s", animationDelay: "0.3s" }}>
                <Image src="/mascot-motion.png" alt="Motion mascot showing the app" width={420} height={420} className="relative"
                  style={{ filter: "drop-shadow(0 0 40px rgba(123,47,190,0.3))" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section id="how" className="py-24 px-5">
        <div ref={howRef} className="section-fade max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-4">Simple by Design</p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight">
              How Motion{" "}
              <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step:"01", icon:"🎯", title:"Pick your vibe", desc:"Chaos, late night, broke, luxury, outdoors — pick your energy or let Motion decide." },
              { step:"02", icon:"⚡", title:"Get your move", desc:"Tap once. Your perfect activity drops instantly. Crew can vote to keep it or reroll." },
              { step:"03", icon:"📖", title:"Build your lore", desc:"Log the memory, add photos, earn XP. Every great night gets archived forever." },
            ].map((s, i) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative"
                  style={{ background: "linear-gradient(135deg,rgba(123,47,190,0.2),rgba(155,89,245,0.1))",
                    border: "1px solid rgba(155,89,245,0.25)", boxShadow: "0 0 30px rgba(123,47,190,0.2)" }}>
                  {s.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#7B2FBE,#9B59F5)" }}>{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ────────────────────────────────────── */}
      <section id="download" className="py-24 px-5 pb-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center,#7B2FBE 0%,transparent 65%)" }} />
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div ref={downloadRef} className="section-fade relative z-10 max-w-2xl mx-auto text-center">
          <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,rgba(123,47,190,0.18) 0%,rgba(14,14,26,0.9) 100%)",
              border: "1px solid rgba(155,89,245,0.2)", backdropFilter: "blur(20px)" }}>

            {/* Waving mascot */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-40" style={{ background: "#7B2FBE" }} />
                <Image src="/mascot.png" alt="Motion mascot waving" width={120} height={120}
                  className="relative animate-float"
                  style={{ filter: "drop-shadow(0 0 24px rgba(155,89,245,0.5))", animationDuration: "4s" }} />
              </div>
            </div>

            <h2 className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
              Your next great night<br />
              <span style={{ background: "linear-gradient(135deg,#9B59F5,#BF7FFF,#ffffff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                starts here.
              </span>
            </h2>
            <p className="text-white/45 text-base mb-8">Free trial. Your crew will thank you.</p>

            {/* Desktop button — mobile uses sticky bar */}
            <div className="hidden md:block">
              <AppStoreBtn size="lg" />
            </div>
            <div className="md:hidden">
              <AppStoreBtn size="md" full />
            </div>

            <p className="mt-5 text-xs text-white/25">iOS only · Requires iOS 15.0 or later · Free trial available</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
