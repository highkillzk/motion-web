import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Motion",
  description: "Privacy Policy for the Motion app.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#06000F]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3">Legal</p>
          <h1 className="font-syne font-extrabold text-5xl tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: May 12, 2026</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-12" />

        {/* Content */}
        <div className="prose-custom space-y-10 text-white/60 leading-relaxed">

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Overview</h2>
            <p>
              Motion (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is operated by Brian Goodman. This Privacy Policy
              explains how we collect, use, and protect your information when you use the Motion
              mobile application. By using Motion, you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Information We Collect</h2>
            <div className="space-y-4">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.12)" }}
              >
                <h3 className="font-semibold text-white/80 mb-2">Account Information</h3>
                <p className="text-sm">Email address and username when you create an account or sign in with Apple.</p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.12)" }}
              >
                <h3 className="font-semibold text-white/80 mb-2">Usage Data</h3>
                <p className="text-sm">Moves completed, categories selected, app preferences, streak data, and in-app activity to improve your experience.</p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.12)" }}
              >
                <h3 className="font-semibold text-white/80 mb-2">Device Information</h3>
                <p className="text-sm">Device type, operating system version, and push notification tokens to deliver notifications you have opted into.</p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.12)" }}
              >
                <h3 className="font-semibold text-white/80 mb-2">Purchase Information</h3>
                <p className="text-sm">Subscription status processed securely through Apple and RevenueCat. We do not store payment card numbers.</p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.12)" }}
              >
                <h3 className="font-semibold text-white/80 mb-2">User-Generated Content</h3>
                <p className="text-sm">Photos, memory notes, and titles you choose to save to your lore archive within the app.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">How We Use Your Information</h2>
            <ul className="space-y-2 text-sm list-none">
              {[
                "To operate, maintain, and improve the Motion app",
                "To personalize move suggestions based on your vibe preferences",
                "To send push notifications you have opted into",
                "To process and manage your subscription through Apple and RevenueCat",
                "To calculate XP, streaks, and leaderboard rankings",
                "To provide customer support",
                "To detect and prevent fraud or abuse",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Data Storage & Security</h2>
            <p className="text-sm">
              Your data is stored securely using Supabase, a trusted database infrastructure provider.
              We use industry-standard encryption for data in transit (TLS) and at rest.
              We do not sell your personal information to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Third-Party Services</h2>
            <p className="text-sm mb-4">We use the following third-party services to operate Motion:</p>
            <div className="space-y-3">
              {[
                { name: "Supabase", desc: "Database and authentication", url: "https://supabase.com/privacy" },
                { name: "RevenueCat", desc: "Subscription management and billing", url: "https://www.revenuecat.com/privacy" },
                { name: "Apple", desc: "Payments, Sign in with Apple, and push notifications", url: "https://www.apple.com/legal/privacy" },
                { name: "PostHog", desc: "Anonymous usage analytics (no PII)", url: "https://posthog.com/privacy" },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-lg p-4 bg-white/[0.03] border border-white/5">
                  <div>
                    <p className="text-sm font-medium text-white/80">{s.name}</p>
                    <p className="text-xs text-white/35">{s.desc}</p>
                  </div>
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                    Privacy Policy
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Push Notifications</h2>
            <p className="text-sm">
              Motion may send push notifications to remind you about moves, streaks, and crew activity.
              You can opt out of notifications at any time through your device&apos;s Settings app under
              Notifications &gt; Motion.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Children&apos;s Privacy</h2>
            <p className="text-sm">
              Motion is not directed at children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe a child under 13 has
              provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Your Rights & Data Deletion</h2>
            <p className="text-sm mb-3">You may request at any time:</p>
            <ul className="space-y-2 text-sm">
              {[
                "Access to the personal data we hold about you",
                "Correction of inaccurate personal data",
                "Deletion of your account and all associated data",
                "Export of your data in a portable format",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:getmotionapp@gmail.com" className="text-purple-400 hover:text-purple-300">
                getmotionapp@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by updating the &quot;Last updated&quot; date at the top of this page.
              Continued use of Motion after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">Contact Us</h2>
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.15)" }}
            >
              <p className="text-sm mb-1"><span className="text-white/60">Developer:</span> <span className="text-white">Brian Goodman</span></p>
              <p className="text-sm mb-1">
                <span className="text-white/60">Email: </span>
                <a href="mailto:getmotionapp@gmail.com" className="text-purple-400 hover:text-purple-300">
                  getmotionapp@gmail.com
                </a>
              </p>
              <p className="text-sm"><span className="text-white/60">App: </span><span className="text-white">Motion — Find Things To Do With Friends</span></p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
