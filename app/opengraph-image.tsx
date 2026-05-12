import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Motion — Stop Being Bored";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#06000F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow blob */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(123,47,190,0.45) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(155,89,245,0.18) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              borderRadius: 99,
              border: "1px solid rgba(155,89,245,0.35)",
              background: "rgba(155,89,245,0.12)",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4ade80",
              }}
            />
            <span
              style={{
                color: "#BF7FFF",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Now on the App Store
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              color: "white",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Stop Being{" "}
            <span style={{ color: "#9B59F5" }}>Bored.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            One tap picks tonight&apos;s move. Your crew votes. The night begins.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 20 }}>
            500+ moves · 14 categories · motionapp.co
          </span>
        </div>
      </div>
    ),
    size
  );
}
