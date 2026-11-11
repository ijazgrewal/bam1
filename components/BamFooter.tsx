"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function BamFooter() {
  const pathname = usePathname();
  const isPartnerPage = pathname === "/partner-with-bam";
  const cta = isPartnerPage
    ? {
        eyebrow: "Plan with confidence",
        title: "Let's Coordinate Better Journeys Together",
        description: "Tell BAM about your agency or group transport needs and start a practical partnership conversation.",
        href: "/partner-with-bam#partner-enquiry",
        label: "Become a BAM Partner",
      }
    : {
        eyebrow: "Plan with confidence",
        title: "Let Us Take Care of Your Journey.",
        description: "Your family deserves a carefully planned Umrah experience. Share your itinerary with BAM Transport and receive personalised transportation assistance.",
        href: "/custom-journey-planning",
        label: "Request Your Family Transport Plan",
      };

  return <footer className="bam-footer">
    <section className="bam-footer-cta"><p>{cta.eyebrow}</p><h2>{cta.title}</h2><span>{cta.description}</span><Link href={cta.href}>{cta.label}</Link></section>
    <section className="bam-footer-links">
      <section><b>BAM Transport</b><p>Private Umrah transport coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.</p></section>
      <section><h3>Umrah Transport</h3><Link href="/family-umrah-transport-packages">Family packages</Link><Link href="/elderly-friendly-umrah-transport">Elder-friendly journeys</Link><Link href="/vip-umrah-family-transport">VIP family transport</Link><Link href="/custom-journey-planning">Custom journey planning</Link></section>
      <section><h3>Services</h3><Link href="/airport-transfers">Airport transfers</Link><Link href="/intercity-transfers">Intercity transfers</Link><Link href="/ziyarat-transport">Private transportation</Link></section>
      <section><h3>Popular Routes</h3><Link href="/jeddah-airport-to-makkah-transfer">Jeddah to Makkah</Link><Link href="/makkah-to-madinah-private-transfer">Makkah to Madinah</Link><Link href="/madinah-airport-transfers">Madinah Airport</Link></section>
      <section><h3>Company</h3><Link href="/about-us">About BAM</Link><Link href="/partner-with-bam">Partner With BAM</Link><Link href="/contact">Contact</Link><Link href="/faqs">FAQs</Link></section>
    </section>
    <div className="mx-auto mt-8 flex w-full max-w-[1130px] flex-col gap-3 border-t border-[#e5c378]/35 pt-5 text-[13px] leading-5 text-[#f4f0e4] sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
      <a className="w-fit underline underline-offset-2 transition-colors hover:text-[#e5c378] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c378]" href="https://digiaura360.com" target="_blank" rel="noopener nofollow">Designed by DigiAura360</a>
    </div>
  </footer>;
}
