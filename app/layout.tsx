import type { Metadata } from "next";
import Link from "next/link";
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
import "./blog.css";
import "./footer-fix.css";
import { siteUrl } from "../lib/site-url";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { BamNavigation } from "@/components/BamNavigation";
import { BamFooter } from "@/components/BamFooter";
import { BrandName } from "@/components/BrandName";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Barakah Al Madinah | Private Umrah Transport", template: `%s | Barakah Al Madinah` },
  description: "Private Umrah transport for airport transfers, intercity journeys and ziyarat across Saudi Arabia.",
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
  const localBusiness = { "@context": "https://schema.org", "@type": "TaxiService", name: siteConfig.name, url: siteUrl, telephone: siteConfig.phone, description: siteConfig.tagline, areaServed: "Saudi Arabia", identifier: siteConfig.licenceNumber };
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }} /><BrandName /><BamNavigation />{children}<BamFooter /><nav className="mobile-conversion-bar" aria-label="Quick actions"><Link href="/contact#enquiry">Get Quote</Link><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></nav></body>
    </html>
  );
}
