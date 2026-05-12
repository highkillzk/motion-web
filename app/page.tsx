"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── Intersection observer hook for scroll animations ──────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// ── Feature card data ─────────────────────────────────────────────────────────
const FEATURES = [
  {
    emoji: "⚡",
    title: "Hit Motion",
    desc: "One tap. Motion reads your vibe — chaos, late night, broke, luxury — and drops the perfect move instantly. No scrolling. No arguing.",
    accent: "#9B59F5",
    bg: "rgba(155,89,245,0.08)",
    border: "rgba(155,89,245,0.2)",
  },
  {
    emoji: "👥",
    title: "Move With Your Crew",
    desc: "Build a Squad, invite your people, and let everyone vote on the move. No more 'I don't care, you pick.' The whole crew is in.",
    accent: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
  },
  {
    emoji: "📖",
    title: "Build Your Lore",
    desc: "Every move you complete becomes part of your story. Log memories, add photos, track your streak. Your wildest nights — archived forever.",
    accent: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
  {
    emoji: "🔥",
    title: "Level Up",
    desc: "Earn XP, climb the ranks, and unlock badges for going out. The more you move, the more legendary your profile becomes.",
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    emoji: "🎯",
    title: "500+ Curated Moves",
    desc: "From 24hr diner crawls to rooftop sessions, broke nights to luxury experiences. 14 categories, endless possibilities.",
    accent: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
  },
  {
    emoji: "🎟️",
    title: "Squad Pass",
    desc: "One plan, four people. Buy the Squad Pass and get 3 invite codes to bring your crew in for free. Move together, pay less.",
    accent: "#BF7FFF",
    bg: "rgba(191,127,255,0.08)",
    border: "rgba(191,127,255,0.2)",
  },
];

const HOW_STEPS = [
  {
    step: "01",
    title: "Pick your vibe",
    desc: "Choose your energy — chaos, late night, broke, luxury, outdoors, social, and more.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Get your move",
    desc: "Tap once. Motion drops the perfect activity for tonight. Your crew can vote to keep it or reroll.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Build your lore",
    desc: "Log the memory, add photos, earn XP. Every night becomes part of your story.",
    icon: "📖",
  },
];

const STATS = [
  { value: "500+", label: "Curated Moves" },
  { value: "14", label: "Categories" },
  { value: "∞", label: "Nights Saved" },
  { value: "4", label: "Crew Members" },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const featuresRef = useFadeIn();
  const screenshotsRef = useFadeIn();
  const howRef = useFadeIn();
  const statsRef = useFadeIn();
  const downloadRef = useFadeIn();

  return (
    <main className="min-h-screen bg-[#06000F] relative overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #7B2FBE 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none"
          style={{ background: "#9B59F5" }}
        />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
                  Now Available on iOS
                </span>
              </div>

              <h1
                className="font-syne font-extrabold text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-6"
              >
                <span className="text-white">Stop</span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #9B59F5 0%, #BF7FFF 60%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Being
                  <br />
                  Bored.
                </span>
              </h1>

              <p className="text-white/55 text-lg lg:text-xl leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                One tap picks tonight&apos;s move. Your crew votes.
                The night begins.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  id="download"
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 glow-purple"
                  style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>

                <a
                  href="#how"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white/70 border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-200"
                >
                  See How It Works
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Social proof */}
              <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["#9B59F5","#EC4899","#F59E0B","#22C55E"].map((c) => (
                    <div
                      key={c}
                      className="w-8 h-8 rounded-full border-2 border-[#06000F] flex items-center justify-center text-xs"
                      style={{ background: c }}
                    >⚡</div>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  <span className="text-white font-semibold">Squads</span> moving right now
                </p>
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="relative flex justify-center items-center">
              {/* Glow behind phone */}
              <div
                className="absolute w-72 h-72 rounded-full blur-[80px] opacity-30"
                style={{ background: "radial-gradient(#7B2FBE, transparent)" }}
              />

              {/* Phone */}
              <div className="relative animate-float" style={{ animationDuration: "5s" }}>
                <div
                  className="phone-mockup"
                  style={{ width: 270 }}
                >
                  <Image
                    src="/ss1.png"
                    alt="Motion app home screen"
                    width={270}
                    height={585}
                    className="w-full"
                    priority
                  />
                </div>

                {/* Floating pill — squads moving */}
                <div
                  className="absolute -left-14 top-1/4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
                  style={{ border: "1px solid rgba(155,89,245,0.25)" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">47 squads moving</p>
                    <p className="text-[10px] text-white/40">right now</p>
                  </div>
                </div>

                {/* Floating XP pill */}
                <div
                  className="absolute -right-10 bottom-1/3 glass rounded-2xl px-4 py-3 shadow-xl"
                  style={{ border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <p className="text-xs font-bold" style={{ color: "#F59E0B" }}>+250 XP</p>
                  <p className="text-[10px] text-white/40">Move completed</p>
                </div>
              </div>

              {/* Mascot */}
              <div
                className="absolute -bottom-8 -right-4 lg:right-0 w-36 h-36 animate-float"
                style={{ animationDelay: "1s", animationDuration: "6s" }}
              >
                <Image
                  src="/mascot.png"
                  alt="Motion mascot"
                  width={144}
                  height={144}
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 20px rgba(155,89,245,0.4))" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div ref={statsRef} className="section-fade">
        <div className="border-y border-white/5 bg-white/[0.02] py-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p
                    className="font-syne font-extrabold text-4xl mb-1"
                    style={{
                      background: "linear-gradient(135deg, #9B59F5, #BF7FFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm text-white/40 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="py-28 px-6">
        <div ref={featuresRef} className="section-fade max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">
              Everything You Need
            </p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight mb-5">
              Built for the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9B59F5, #BF7FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                crew
              </span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Every feature designed to get you off the couch and into your next story.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                style={{
                  background: f.bg,
                  border: `1px solid ${f.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}
                >
                  {f.emoji}
                </div>
                <h3 className="font-syne font-bold text-xl mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section id="screenshots" className="py-20 overflow-hidden">
        <div ref={screenshotsRef} className="section-fade">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">
              See It In Action
            </p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight">
              Your nights,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9B59F5, #BF7FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                elevated.
              </span>
            </h2>
          </div>

          {/* Three phones */}
          <div className="flex items-end justify-center gap-6 px-6">
            {[
              { src: "/ss1.png", label: "Hit Motion", offset: "translate-y-8", scale: "scale-90", opacity: "opacity-70" },
              { src: "/ss2.png", label: "Your Crew", offset: "translate-y-0", scale: "scale-100", opacity: "opacity-100" },
              { src: "/ss3.png", label: "Leaderboard", offset: "translate-y-8", scale: "scale-90", opacity: "opacity-70" },
            ].map((ss, i) => (
              <div
                key={ss.label}
                className={`relative flex flex-col items-center gap-4 ${ss.offset} ${ss.scale} ${ss.opacity} transition-all duration-300 hover:scale-100 hover:opacity-100 hover:translate-y-0`}
              >
                <div
                  className="phone-mockup"
                  style={{
                    width: 220,
                    boxShadow: i === 1
                      ? "0 0 60px rgba(123,47,190,0.4), 0 30px 80px rgba(0,0,0,0.6)"
                      : "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                >
                  <Image
                    src={ss.src}
                    alt={ss.label}
                    width={220}
                    height={477}
                    className="w-full"
                  />
                </div>
                <span className="text-sm font-medium text-white/50">{ss.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-28 px-6">
        <div ref={howRef} className="section-fade max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">
              Simple by Design
            </p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight">
              How Motion{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9B59F5, #BF7FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                works
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            {HOW_STEPS.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center gap-5">
                {/* Step icon */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative z-10"
                  style={{
                    background: "linear-gradient(135deg, rgba(123,47,190,0.2), rgba(155,89,245,0.1))",
                    border: "1px solid rgba(155,89,245,0.25)",
                    boxShadow: "0 0 30px rgba(123,47,190,0.2)",
                  }}
                >
                  {s.icon}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}
                  >
                    {i + 1}
                  </span>
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

      {/* ── DOWNLOAD CTA ── */}
      <section id="download" className="py-28 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, #7B2FBE 0%, transparent 65%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />

        <div ref={downloadRef} className="section-fade relative z-10 max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(123,47,190,0.15) 0%, rgba(14,14,26,0.8) 100%)",
              border: "1px solid rgba(155,89,245,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Mascot */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-50"
                  style={{ background: "#7B2FBE" }}
                />
                <Image
                  src="/mascot.png"
                  alt="Motion mascot"
                  width={120}
                  height={120}
                  className="relative animate-float"
                  style={{
                    filter: "drop-shadow(0 0 24px rgba(155,89,245,0.5))",
                    animationDuration: "4s",
                  }}
                />
              </div>
            </div>

            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight mb-5">
              Your next great
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #9B59F5, #BF7FFF, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                night starts here.
              </span>
            </h2>

            <p className="text-white/45 text-lg mb-10 max-w-md mx-auto">
              Free to try. Your crew will thank you.
            </p>

            {/* App Store button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 hover:scale-105 glow-purple"
                style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
            </div>

            <p className="mt-6 text-xs text-white/25">iOS only · Requires iOS 15.0 or later</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
