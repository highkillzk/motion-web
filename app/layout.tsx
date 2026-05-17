import type { Metadata } from "next";
import "./globals.css";
import InAppBrowserBanner from "../components/InAppBrowserBanner";

export const metadata: Metadata = {
  title: "Motion — Find Things To Do With Friends",
  description:
    "Stop being bored. Motion picks tonight's move, your crew votes, and the night begins. 500+ curated activities for every vibe.",
  metadataBase: new URL("https://getmotionapp.quest"),
  openGraph: {
    title: "Motion — Find Things To Do With Friends",
    description:
      "One tap picks tonight's move. Your crew votes. The night begins.",
    url: "https://getmotionapp.quest",
    siteName: "Motion",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion — Find Things To Do With Friends",
    description: "One tap picks tonight's move. Your crew votes. The night begins.",
    creator: "@getmotionapp",
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
        <InAppBrowserBanner />
        {children}
      </body>
    </html>
  );
}
