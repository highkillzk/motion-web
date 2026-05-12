"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function useFadeIn(threshold = 0.12) {
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

const HOW_STEPS = [
  { step: "01", icon: "🎯", title: "Pick your vibe", desc: "Chaos, late night, broke, luxury, outdoors, social — pick your energy or let Motion decide." },
  { step: "02", icon: "⚡", title: "Get your move", desc: "Tap once. Your perfect activity drops instantly. Crew can vote to keep it or reroll." },
  { step: "03", icon: "📖", title: "Build your lore", desc: "Log the memory, add photos, earn XP. Every great night gets archived forever." },
];

const STATS = [
  { value: "500+", label: "Curated Moves" },
  { value: "14", label: "Categories" },
  { value: "∞", label: "Nights Saved" },
  { value: "4", label: "Crew Members" },
];

export default function Home() {
  const heroRef      = useFadeIn(0.05);
  const statsRef     = useFadeIn();
  const problemRef   = useFadeIn();
  const featuresRef  = useFadeIn();
  const ssRef        = useFadeIn(0.05);
  const crewRef      = useFadeIn();
  const loreRef      = useFadeIn();
  const socialRef    = useFadeIn();
  const howRef       = useFadeIn();
  const downloadRef  = useFadeIn();

  return (
    <main className="min-h-screen bg-[#06000F] overflow-hidden">
      <Navbar />

      {/* ──────────────────────────────────────────────────
          HERO — bored mascot + big headline
      ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #7B2FBE, transparent)" }} />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div ref={heroRef} className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Copy */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/25 bg-purple-500/8 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">Now on the App Store</span>
              </div>

              <h1 className="font-syne font-extrabold text-6xl lg:text-7xl xl:text-[84px] leading-[0.92] tracking-tight mb-7">
                <span className="text-white">Stop</span><br />
                <span className="text-white">Being</span><br />
                <span style={{ background: "linear-gradient(135deg, #9B59F5 0%, #BF7FFF 60%, #fff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Bored.
                </span>
              </h1>

              <p className="text-white/50 text-xl leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                One tap picks tonight&apos;s move. Your crew votes.
                The night begins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 glow-purple"
                  style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                <a href="#how" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/60 border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-200">
                  See How It Works
                </a>
              </div>

              {/* Social proof avatars */}
              <div className="mt-10 flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["#9B59F5","#EC4899","#F59E0B","#22C55E","#6366F1"].map((c,i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#06000F] flex items-center justify-center text-xs" style={{ background: c }}>⚡</div>
                  ))}
                </div>
                <p className="text-sm text-white/40"><span className="text-white font-semibold">Squads</span> moving right now</p>
              </div>
            </div>

            {/* Bored mascot → Phone */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 min-h-[480px]">
              {/* Glow */}
              <div className="absolute w-80 h-80 rounded-full blur-[100px] opacity-25 pointer-events-none"
                style={{ background: "radial-gradient(#7B2FBE, transparent)" }} />

              {/* Phone */}
              <div className="relative animate-float" style={{ animationDuration: "5s" }}>
                <div className="phone-mockup" style={{ width: 260 }}>
                  <Image src="/ss1.png" alt="Motion app" width={260} height={563} className="w-full" priority />
                </div>
                {/* Floating pills */}
                <div className="absolute -left-16 top-1/4 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl" style={{ border: "1px solid rgba(155,89,245,0.25)" }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div><p className="text-xs font-bold text-white">47 squads moving</p><p className="text-[10px] text-white/40">right now</p></div>
                </div>
                <div className="absolute -right-12 bottom-1/3 glass rounded-2xl px-4 py-3 shadow-xl" style={{ border: "1px solid rgba(245,158,11,0.3)" }}>
                  <p className="text-xs font-bold" style={{ color: "#F59E0B" }}>+250 XP ⚡</p>
                  <p className="text-[10px] text-white/40">Move completed</p>
                </div>
              </div>

              {/* Bored mascot — bottom left, "before" state */}
              <div className="absolute -bottom-6 -left-2 lg:-left-8 w-40 h-40 animate-float" style={{ animationDelay: "0.8s", animationDuration: "7s" }}>
                <Image src="/mascot-bored.png" alt="Bored mascot" width={160} height={160} className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(123,47,190,0.35))" }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          STATS STRIP
      ────────────────────────────────────────────────── */}
      <div ref={statsRef} className="section-fade border-y border-white/5 bg-white/[0.015] py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-syne font-extrabold text-4xl mb-1"
                  style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {s.value}
                </p>
                <p className="text-sm text-white/40 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────
          PROBLEM SECTION — bored mascot large
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div ref={problemRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Mascot — sad/bored, large */}
            <div className="flex justify-center relative">
              <div className="absolute w-72 h-72 rounded-full blur-[80px] opacity-20" style={{ background: "#7B2FBE" }} />
              <div className="relative animate-float" style={{ animationDuration: "6s" }}>
                <Image src="/mascot-bored.png" alt="Bored" width={380} height={380}
                  className="relative drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 0 40px rgba(123,47,190,0.3))" }} />
              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-5">Sound Familiar?</p>
              <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.0] mb-8">
                It&apos;s{" "}
                <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>9pm.</span>
                <br />
                Group chat&apos;s dead.<br />
                Nobody picks.
              </h2>

              <div className="space-y-4 mb-10">
                {[
                  { quote: '"what are we doing tonight"', sub: "— every group chat, every weekend" },
                  { quote: '"idc you pick"', sub: "— said by 4 people simultaneously" },
                  { quote: `"i'm bored"`, sub: "— you, at 10pm, still at home" },
                ].map((q) => (
                  <div key={q.quote} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-2xl mt-0.5">💬</span>
                    <div>
                      <p className="text-white font-semibold italic">{q.quote}</p>
                      <p className="text-white/35 text-xs mt-1">{q.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.15), rgba(155,89,245,0.08))", border: "1px solid rgba(155,89,245,0.2)" }}>
                <p className="font-syne font-bold text-xl text-white mb-1">Motion fixes this in one tap.</p>
                <p className="text-white/45 text-sm">No more decision paralysis. No more boring Fridays. Just tap and go.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          FEATURES — 6 cards
      ────────────────────────────────────────────────── */}
      <section id="features" className="py-20 px-6">
        <div ref={featuresRef} className="section-fade max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">Everything You Need</p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight mb-5">
              Built for the{" "}
              <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>crew</span>
            </h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">Every feature designed to get you off the couch and into your next story.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "⚡", title: "Hit Motion", desc: "One tap. Motion reads your vibe and drops the perfect move instantly. No scrolling. No arguing.", accent: "#9B59F5", bg: "rgba(155,89,245,0.08)", border: "rgba(155,89,245,0.2)" },
              { emoji: "👥", title: "Move With Your Crew", desc: "Build a Squad, invite your people, and let everyone vote on the move. No more 'I don't care, you pick.'", accent: "#EC4899", bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)" },
              { emoji: "📖", title: "Build Your Lore", desc: "Every move you complete becomes part of your story. Log memories, add photos, track your streak.", accent: "#22C55E", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
              { emoji: "🔥", title: "Level Up", desc: "Earn XP, climb from Bronze to Legend, and unlock badges for going out. The more you move, the more legendary you get.", accent: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
              { emoji: "🎯", title: "500+ Curated Moves", desc: "From 24hr diner crawls to rooftop sessions, broke nights to luxury experiences. 14 categories, endless nights.", accent: "#6366F1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
              { emoji: "🎟️", title: "Squad Pass", desc: "One plan, four people. Buy the Squad Pass and get 3 invite codes to bring your crew in for free.", accent: "#BF7FFF", bg: "rgba(191,127,255,0.08)", border: "rgba(191,127,255,0.2)" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] group" style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ background: `${f.accent}18`, border: `1px solid ${f.accent}30` }}>
                  {f.emoji}
                </div>
                <h3 className="font-syne font-bold text-xl mb-3 text-white">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          SCREENSHOTS — dual marquee
      ────────────────────────────────────────────────── */}
      <section id="screenshots" className="py-20 overflow-hidden">
        <div ref={ssRef} className="section-fade">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">See It In Action</p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight">
              Your nights,{" "}
              <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>elevated.</span>
            </h2>
            <p className="text-white/40 text-lg mt-4 max-w-lg mx-auto">Every screen built to get you moving faster and remember it longer.</p>
          </div>

          {/* Row 1 — scrolls left */}
          <div className="relative mb-5 overflow-hidden">
            <div className="flex gap-5 marquee-left" style={{ width: "max-content" }}>
              {[...Array(2)].flatMap(() => [
                { src: "/ss1.png", label: "Hit Motion" },
                { src: "/ss2.png", label: "Your Crew" },
                { src: "/ss3.png", label: "Leaderboard" },
                { src: "/ss4.png", label: "The Archive" },
                { src: "/ss5.png", label: "Your Profile" },
              ]).map((ss, i) => (
                <div key={i} className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="phone-mockup" style={{ width: 200, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(123,47,190,0.15)" }}>
                    <Image src={ss.src} alt={ss.label} width={200} height={433} className="w-full" />
                  </div>
                  <span className="text-xs font-medium text-white/35 tracking-wide">{ss.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #06000F, transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #06000F, transparent)" }} />
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-5 marquee-right" style={{ width: "max-content" }}>
              {[...Array(2)].flatMap(() => [
                { src: "/ss6.png", label: "Memory Detail" },
                { src: "/ss7.png", label: "Move Reveal" },
                { src: "/ss8.png", label: "Quest Proof" },
                { src: "/ss3.png", label: "Leaderboard" },
                { src: "/ss1.png", label: "Hit Motion" },
              ]).map((ss, i) => (
                <div key={i} className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="phone-mockup" style={{ width: 200, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(123,47,190,0.15)" }}>
                    <Image src={ss.src} alt={ss.label} width={200} height={433} className="w-full" />
                  </div>
                  <span className="text-xs font-medium text-white/35 tracking-wide">{ss.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to right, #06000F, transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" style={{ background: "linear-gradient(to left, #06000F, transparent)" }} />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          CREW SECTION — squad mascot
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#EC4899" }} />
        <div ref={crewRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div>
              <p className="text-xs font-semibold text-pink-400 tracking-widest uppercase mb-5">Move Together</p>
              <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.0] mb-7">
                Your crew<br />
                <span style={{ background: "linear-gradient(135deg, #EC4899, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  decides together.
                </span>
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-md">
                Build a Squad, drop a move suggestion, and let everyone vote. No more dead group chats. The whole crew is locked in before you leave the couch.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "✅", label: "Create your Squad in seconds" },
                  { icon: "🗳️", label: "Everyone votes on tonight's move" },
                  { icon: "🏆", label: "Crew leaderboard tracks who goes hardest" },
                  { icon: "🎟️", label: "Squad Pass — one plan, four people" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/70 font-medium text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Squad mascot */}
            <div className="flex justify-center relative">
              <div className="absolute w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: "#EC4899" }} />
              <div className="relative animate-float" style={{ animationDuration: "5s" }}>
                <Image src="/mascot-crew.png" alt="Squad celebrating" width={420} height={420}
                  className="relative drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 0 40px rgba(236,72,153,0.25))" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          LORE SECTION — memories mascot
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none" style={{ background: "#22C55E" }} />
        <div ref={loreRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Memories mascot */}
            <div className="flex justify-center relative order-2 lg:order-1">
              <div className="absolute w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none" style={{ background: "#22C55E" }} />
              <div className="relative animate-float" style={{ animationDuration: "6s", animationDelay: "0.5s" }}>
                <Image src="/mascot-memories.png" alt="Making memories" width={420} height={420}
                  className="relative"
                  style={{ filter: "drop-shadow(0 0 30px rgba(34,197,94,0.2))" }} />
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold text-green-400 tracking-widest uppercase mb-5">The Archive</p>
              <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.0] mb-7">
                Your best nights,<br />
                <span style={{ background: "linear-gradient(135deg, #22C55E, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  remembered forever.
                </span>
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-md">
                Every move you complete gets logged in your Lore archive. Add photos, write the funniest moment, drop a quote of the night. The best part of a great night is reliving it.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "📸", label: "Photo memories", desc: "Add photos from the night" },
                  { icon: "🏅", label: "Vibes & ratings", desc: "Tag the energy of every night" },
                  { icon: "🔥", label: "Streak tracking", desc: "Keep the momentum going" },
                  { icon: "📅", label: "Full history", desc: "Every night, searchable" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.12)" }}>
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

      {/* ──────────────────────────────────────────────────
          SOCIAL PROOF — hoodie mascot
      ────────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(#7B2FBE, transparent)" }} />

        <div ref={socialRef} className="section-fade max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div>
              <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-5">Social Currency</p>
              <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight leading-[1.0] mb-7">
                <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  &quot;He&apos;s using<br />Motion!&quot;
                </span><br />
                <span className="text-white text-4xl">&quot;The cool guy.&quot;</span>
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-md">
                The person who always knows what to do tonight is just using Motion. One app. Every answer. Every time.
              </p>

              {/* Speech bubble callouts */}
              <div className="space-y-3">
                {[
                  { text: "\"Where can I get that?\"", color: "#9B59F5" },
                  { text: "\"That's so smart!\"", color: "#22C55E" },
                  { text: "\"This is the kind of night you talk about for years.\"", color: "#F59E0B" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${b.color}22` }}>
                    <span className="text-lg">💬</span>
                    <p className="italic font-medium" style={{ color: b.color }}>{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hoodie mascot */}
            <div className="flex justify-center relative">
              <div className="absolute w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none" style={{ background: "#7B2FBE" }} />
              <div className="relative animate-float" style={{ animationDuration: "5.5s", animationDelay: "0.3s" }}>
                <Image src="/mascot-motion.png" alt="Motion mascot showing the app" width={440} height={440}
                  className="relative"
                  style={{ filter: "drop-shadow(0 0 40px rgba(123,47,190,0.3))" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          HOW IT WORKS
      ────────────────────────────────────────────────── */}
      <section id="how" className="py-28 px-6">
        <div ref={howRef} className="section-fade max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-4">Simple by Design</p>
            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight">
              How Motion{" "}
              <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_STEPS.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center gap-5">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative"
                  style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.2), rgba(155,89,245,0.1))", border: "1px solid rgba(155,89,245,0.25)", boxShadow: "0 0 30px rgba(123,47,190,0.2)" }}>
                  {s.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}>{i + 1}</span>
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

      {/* ──────────────────────────────────────────────────
          DOWNLOAD CTA — waving mascot
      ────────────────────────────────────────────────── */}
      <section id="download" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #7B2FBE 0%, transparent 65%)" }} />
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

        <div ref={downloadRef} className="section-fade relative z-10 max-w-4xl mx-auto">
          <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(123,47,190,0.18) 0%, rgba(14,14,26,0.85) 100%)", border: "1px solid rgba(155,89,245,0.2)", backdropFilter: "blur(20px)" }}>

            {/* Waving mascot */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-40" style={{ background: "#7B2FBE" }} />
                <Image src="/mascot.png" alt="Motion mascot waving" width={130} height={130}
                  className="relative animate-float"
                  style={{ filter: "drop-shadow(0 0 24px rgba(155,89,245,0.5))", animationDuration: "4s" }} />
              </div>
            </div>

            <h2 className="font-syne font-extrabold text-5xl md:text-6xl tracking-tight mb-5">
              Your next great<br />
              <span style={{ background: "linear-gradient(135deg, #9B59F5, #BF7FFF, #ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                night starts here.
              </span>
            </h2>

            <p className="text-white/45 text-lg mb-10 max-w-md mx-auto">Free to try. Your crew will thank you.</p>

            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105 glow-purple"
              style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>

            <p className="mt-6 text-xs text-white/25">iOS only · Requires iOS 15.0 or later · Free trial available</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
