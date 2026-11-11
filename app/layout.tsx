import type { Metadata } from "next";
import "./globals.css";
import "./bam-hero.css";
import "./bam-pages.css";
import "./premium-pages.css";
import "./fleet-pages.css";
import "./fleet-card-consistency.css";
import "./fleet-placeholder.css";
import "./contact-pages.css";
import "./dropdown-fix.css";
import "./bam-commercial.css";
import "./umrah-transport-tweaks.css";
import { siteUrl } from "../lib/site-url";
import { siteConfig } from "@/lib/site-config";
import { BamNavigation } from "@/components/BamNavigation";
import { BamFooter } from "@/components/BamFooter";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "BAM Transport | Private Family Umrah Transport", template: `%s | ${siteConfig.name}` },
  description: "Private Umrah transport coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.",
  openGraph: { type: "website", siteName: siteConfig.name, title: "BAM Transport | Private Family Umrah Transport", description: "Thoughtfully coordinated private Umrah journeys for families and groups.", images: [{ url: "/bam-hero.webp", width: 1440, height: 900, alt: "BAM Transport private Umrah journeys" }] },
  twitter: { card: "summary_large_image", title: "BAM Transport | Private Family Umrah Transport", description: "Thoughtfully coordinated private Umrah journeys for families and groups.", images: ["/bam-hero.webp"] },
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
      <body className="antialiased" suppressHydrationWarning><BamNavigation />{children}<BamFooter /></body>
    </html>
  );
}
