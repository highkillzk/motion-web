import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Support — Motion",
  description: "Get help with the Motion app. Contact support, FAQs, and more.",
};

const FAQS = [
  {
    q: "How do I cancel my subscription?",
    a: "Go to your iPhone Settings > Apple ID > Subscriptions > Motion, then tap Cancel Subscription. Your access continues until the end of the current billing period.",
  },
  {
    q: "My purchase didn't unlock premium. What do I do?",
    a: "Go to Profile > Settings and tap 'Restore Purchases'. If that doesn't work, email us and we'll sort it within 24 hours.",
  },
  {
    q: "How do Squad Pass invite codes work?",
    a: "When you purchase the Squad Pass, you receive 3 unique invite codes. Share each code with a friend — they enter it on the paywall to unlock premium for free. Codes are single-use.",
  },
  {
    q: "Can I use Motion for free?",
    a: "Motion requires a premium subscription to access moves and features. New users can start with a free trial before subscribing.",
  },
  {
    q: "How do I delete my account and data?",
    a: "Email us at getmotionapp@gmail.com with the subject 'Account Deletion' and we'll permanently delete your account and all associated data within 7 business days.",
  },
  {
    q: "I forgot my password. How do I reset it?",
    a: "On the login screen, tap 'Forgot password?' and enter your email. You'll receive a reset link within a few minutes. Check your spam folder if it doesn't arrive.",
  },
  {
    q: "The app crashed or isn't working. What should I do?",
    a: "First, try closing and reopening the app, or restarting your device. If the issue persists, email us with your device model and iOS version and we'll investigate.",
  },
  {
    q: "How do I turn off push notifications?",
    a: "Go to your iPhone Settings > Notifications > Motion and toggle off Allow Notifications. You can also adjust notification types from within the app under Profile > Settings.",
  },
];

export default function Support() {
  return (
    <main className="min-h-screen bg-[#06000F]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3">We&apos;ve Got You</p>
          <h1 className="font-syne font-extrabold text-5xl tracking-tight mb-4">Support</h1>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Something not working? Question about your subscription? We respond to every message.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="rounded-2xl p-8 mb-14 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(123,47,190,0.15), rgba(14,14,26,0.8))",
            border: "1px solid rgba(155,89,245,0.2)",
          }}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5"
            style={{ background: "rgba(155,89,245,0.12)", border: "1px solid rgba(155,89,245,0.25)" }}>
            ✉️
          </div>
          <h2 className="font-syne font-bold text-2xl mb-2">Email Support</h2>
          <p className="text-white/45 text-sm mb-6">
            We typically respond within 24 hours, Monday through Friday.
          </p>
          <a
            href="mailto:getmotionapp@gmail.com?subject=Motion App Support"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7B2FBE, #9B59F5)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            getmotionapp@gmail.com
          </a>

          <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-8">
            {[
              { label: "TikTok", href: "https://tiktok.com/@getmotionapp", handle: "@getmotionapp" },
              { label: "Instagram", href: "https://instagram.com/getmotionapp", handle: "@getmotionapp" },
              { label: "Twitter", href: "https://twitter.com/getmotionapp", handle: "@getmotionapp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <p className="text-xs text-white/30 mb-1">{s.label}</p>
                <p className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">{s.handle}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/5 mb-14" />

        {/* FAQs */}
        <div>
          <h2 className="font-syne font-bold text-3xl mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 list-none select-none">
                  <span className="font-medium text-white/80 text-sm pr-4">{faq.q}</span>
                  <span className="text-purple-400 flex-shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-white/45 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/5 my-14" />

        {/* Legal links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <a href="/privacy" className="text-sm text-white/40 hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
          <span className="hidden sm:block text-white/15">·</span>
          <a href="/terms" className="text-sm text-white/40 hover:text-purple-400 transition-colors">
            Terms of Service
          </a>
          <span className="hidden sm:block text-white/15">·</span>
          <a href="mailto:getmotionapp@gmail.com?subject=Account Deletion Request"
            className="text-sm text-white/40 hover:text-purple-400 transition-colors">
            Delete My Account
          </a>
        </div>

      </div>
      <Footer />
    </main>
  );
}
