import type { Metadata } from "next";
import "./globals.css";
import "./bam-pages.css";
import "./premium-pages.css";
import "./fleet-pages.css";
import "./fleet-placeholder.css";
import "./contact-pages.css";
import "./dropdown-fix.css";
import "./bam-commercial.css";
import { siteUrl } from "../lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BAM Transport | Private Family Umrah Transport", template: "%s | BAM Transport" },
  description: "Private Umrah transport coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.",
  openGraph: { type: "website", siteName: "BAM Transport", title: "BAM Transport | Private Family Umrah Transport", description: "Thoughtfully coordinated private Umrah journeys for families and groups." },
  icons: {
    icon: "/bam-logo.png",
    shortcut: "/bam-logo.png",
    apple: "/bam-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
