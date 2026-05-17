"use client";
import { useEffect, useState } from "react";

/**
 * Detects when the user is viewing the site inside an in-app browser
 * (TikTok, Instagram, Facebook, Snapchat, Twitter, LinkedIn).
 *
 * In-app browsers cannot reliably open the App Store via `https://apps.apple.com/...`
 * — Apple's redirect to the native App Store app gets blocked or silently fails.
 *
 * Solution:
 * 1. Detect the in-app browser via user agent
 * 2. Show a sticky banner at the top explaining the problem
 * 3. Try to force-open in Safari via `x-safari-https://` (works in some cases on iOS)
 * 4. Provide explicit "Open in Safari" instructions
 */

type InAppType = "tiktok" | "instagram" | "facebook" | "snapchat" | "twitter" | "linkedin" | "other" | null;

function detectInApp(): InAppType {
  if (typeof window === "undefined") return null;
  const ua = navigator.userAgent || (navigator as any).vendor || "";

  // TikTok in-app browser
  if (/TikTok|musical_ly|Bytedance|BytedanceWebview|ByteLocale/i.test(ua)) return "tiktok";
  // Instagram (also covers Threads since Threads uses Instagram's webview)
  if (/Instagram/i.test(ua)) return "instagram";
  // Facebook (FBAN = FB App Name, FBAV = FB App Version)
  if (/FBAN|FBAV|FB_IAB|FBIOS/i.test(ua)) return "facebook";
  // Snapchat
  if (/Snapchat/i.test(ua)) return "snapchat";
  // Twitter / X
  if (/Twitter/i.test(ua)) return "twitter";
  // LinkedIn
  if (/LinkedIn/i.test(ua)) return "linkedin";
  // Generic webview catches (instagram on Android, etc.)
  if (/; wv\)|WebView/i.test(ua)) return "other";

  return null;
}

const APP_NAME_MAP: Record<Exclude<InAppType, null>, string> = {
  tiktok:    "TikTok",
  instagram: "Instagram",
  facebook:  "Facebook",
  snapchat:  "Snapchat",
  twitter:   "X",
  linkedin:  "LinkedIn",
  other:     "this app",
};

export default function InAppBrowserBanner() {
  const [inApp, setInApp] = useState<InAppType>(null);
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInApp(detectInApp());
    // Honor a dismissal stored for the session
    if (sessionStorage.getItem("motion-banner-dismissed") === "1") {
      setDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try { sessionStorage.setItem("motion-banner-dismissed", "1"); } catch {}
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText("https://getmotionapp.quest");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  // Try to force-open in Safari (iOS only — works in TikTok sometimes via redirect intent)
  const tryOpenInSafari = () => {
    // iOS Safari deeplink — works in some in-app browsers
    const url = "https://getmotionapp.quest";
    window.location.href = `x-safari-${url}`;
    // Fallback: copy link after a short delay if user is still here
    setTimeout(handleCopyLink, 600);
  };

  if (!inApp || dismissed) return null;

  const appName = APP_NAME_MAP[inApp];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #7B2FBE 0%, #9B59F5 100%)",
        boxShadow: "0 8px 30px rgba(123,47,190,0.5)",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "14px 18px 16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          {/* Icon */}
          <div
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              marginTop: 2,
            }}
          >
            ⚠️
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, marginBottom: 4 }}>
              The download button won&apos;t work inside {appName}
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
              {inApp === "tiktok" && (
                <>Tap the <strong>&quot;...&quot;</strong> in the top-right → select <strong>&quot;Open in browser&quot;</strong> to download Motion.</>
              )}
              {inApp === "instagram" && (
                <>Tap the <strong>&quot;...&quot;</strong> in the top-right → select <strong>&quot;Open in browser&quot;</strong> to download Motion.</>
              )}
              {inApp === "facebook" && (
                <>Tap the <strong>&quot;...&quot;</strong> at the bottom → select <strong>&quot;Open in browser&quot;</strong> to download Motion.</>
              )}
              {inApp === "snapchat" && (
                <>Tap the <strong>&quot;...&quot;</strong> menu → select <strong>&quot;Open in Safari&quot;</strong> to download Motion.</>
              )}
              {(inApp === "twitter" || inApp === "linkedin" || inApp === "other") && (
                <>Tap the menu (usually <strong>&quot;...&quot;</strong>) → select <strong>&quot;Open in Browser&quot;</strong> to download Motion.</>
              )}
            </p>

            {/* Actions */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button
                onClick={handleCopyLink}
                style={{
                  background: "white",
                  color: "#7B2FBE",
                  fontWeight: 700,
                  fontSize: 12.5,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {copied ? "✓ Link copied — paste in Safari" : "📋 Copy link"}
              </button>
              <button
                onClick={tryOpenInSafari}
                style={{
                  background: "rgba(255,255,255,0.18)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 12.5,
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                }}
              >
                Try open in Safari
              </button>
            </div>
          </div>

          {/* Dismiss */}
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            style={{
              flexShrink: 0,
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "white",
              fontSize: 16,
              lineHeight: 1,
              cursor: "pointer",
              marginTop: 2,
            }}
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
