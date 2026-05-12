import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Motion",
  description: "Terms of Service for the Motion app.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#06000F]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3">Legal</p>
          <h1 className="font-syne font-extrabold text-5xl tracking-tight mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: May 12, 2026</p>
        </div>

        <div className="h-px bg-white/5 mb-12" />

        <div className="space-y-10 text-white/60 leading-relaxed text-sm">

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Motion (&quot;the App&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the App.
              These Terms constitute a legally binding agreement between you and Brian Goodman
              (&quot;Developer,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Motion. By using the App, you represent
              that you meet this age requirement. If you are under 18, you represent that your
              parent or guardian has reviewed and agreed to these Terms on your behalf.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">3. Your Account</h2>
            <p className="mb-3">
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activity that occurs under your account. You agree to:
            </p>
            <ul className="space-y-2">
              {[
                "Provide accurate and complete registration information",
                "Notify us immediately of any unauthorized use of your account",
                "Not share your account with others or use another user's account",
                "Choose a username that does not impersonate another person or entity",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">4. Subscriptions & Billing</h2>
            <p className="mb-3">
              Motion offers premium subscriptions processed through Apple&apos;s App Store. By purchasing
              a subscription, you agree to the following:
            </p>
            <div className="space-y-3">
              {[
                { title: "Auto-Renewal", desc: "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period." },
                { title: "Billing", desc: "Payment is charged to your Apple ID at the time of purchase confirmation." },
                { title: "Price Changes", desc: "We may change subscription prices with reasonable notice. Continued use after a price change constitutes acceptance." },
                { title: "Cancellation", desc: "You may cancel your subscription at any time through your Apple ID Account Settings. Cancellation takes effect at the end of the current billing period." },
                { title: "Refunds", desc: "All purchases are subject to Apple's refund policy. We do not process refunds directly." },
                { title: "Squad Pass", desc: "Squad Pass invite codes are for personal use. Reselling codes is prohibited." },
              ].map((item) => (
                <div key={item.title} className="rounded-lg p-4 bg-white/[0.03] border border-white/5">
                  <p className="font-medium text-white/80 mb-1">{item.title}</p>
                  <p className="text-xs text-white/45">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to use Motion to:</p>
            <ul className="space-y-2">
              {[
                "Violate any applicable laws or regulations",
                "Harass, bully, or threaten other users",
                "Post or share content that is illegal, offensive, or harmful",
                "Attempt to reverse-engineer, hack, or disrupt the App",
                "Create fake accounts or impersonate other users",
                "Use automated tools to interact with the App",
                "Share or resell invite codes for commercial gain",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">6. User Content</h2>
            <p>
              You retain ownership of any content you submit to Motion (photos, memories, notes).
              By submitting content, you grant us a limited, non-exclusive license to store and
              display that content within the App solely for the purpose of providing the service
              to you. We do not use your personal content for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">7. Intellectual Property</h2>
            <p>
              All content within Motion — including the app design, mascot, logo, move content,
              and software — is owned by or licensed to Brian Goodman. You may not copy,
              reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">8. Disclaimers</h2>
            <p>
              Motion is provided &quot;as is&quot; without warranties of any kind. We do not guarantee
              that the App will be uninterrupted, error-free, or that any activity suggestions
              will be suitable or safe for your specific circumstances. You are solely responsible
              for your safety when participating in any suggested activities.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Brian Goodman shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of Motion. Our total liability shall not exceed the amount you paid us in the
              12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account at our discretion if you
              violate these Terms. You may delete your account at any time by contacting us.
              Upon termination, your access to premium features will cease at the end of your
              current billing period.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">12. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes
              by updating the &quot;Last updated&quot; date. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-syne font-bold text-xl text-white mb-3">13. Contact</h2>
            <div
              className="rounded-xl p-6"
              style={{ background: "rgba(155,89,245,0.06)", border: "1px solid rgba(155,89,245,0.15)" }}
            >
              <p className="mb-1"><span className="text-white/60">Developer:</span> <span className="text-white">Brian Goodman</span></p>
              <p>
                <span className="text-white/60">Email: </span>
                <a href="mailto:getmotionapp@gmail.com" className="text-purple-400 hover:text-purple-300">
                  getmotionapp@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
