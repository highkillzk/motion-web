import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motion — Find Things To Do With Friends",
  description:
    "Stop being bored. Motion picks tonight's move, your crew votes, and the night begins. 500+ curated activities for every vibe.",
  metadataBase: new URL("https://getmotionapp.com"),
  openGraph: {
    title: "Motion — Find Things To Do With Friends",
    description:
      "One tap picks tonight's move. Your crew votes. The night begins.",
    url: "https://getmotionapp.com",
    siteName: "Motion",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion — Find Things To Do With Friends",
    description: "One tap picks tonight's move. Your crew votes. The night begins.",
    creator: "@getmotionapp",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: [
    "things to do with friends",
    "nightlife app",
    "hangout ideas",
    "bored app",
    "social plans",
    "crew app",
    "night out planner",
    "activity finder",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#06000F] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
