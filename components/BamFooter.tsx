"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const dropdownPaths = new Set([
  "/family-umrah-transport-packages",
  "/elderly-friendly-umrah-transport",
  "/vip-umrah-family-transport",
  "/custom-journey-planning",
  "/airport-transfers",
  "/intercity-transfers",
  "/ziyarat-transport",
  "/family-group-transportation",
  "/jeddah-airport-to-makkah-transfer",
  "/makkah-to-madinah-private-transfer",
  "/madinah-to-makkah-private-transfer",
  "/madinah-airport-transfers",
  "/jeddah-airport-to-madinah-transfer",
  "/taif-private-transport",
  "/makkah-ziyarat-transport",
  "/madinah-ziyarat-transport",
  "/taif-ziyarat",
]);

export function BamFooter() {
  const pathname = usePathname();
  const showFooterCta = !dropdownPaths.has(pathname);

  return <footer className="bam-footer">
    {showFooterCta && <section className="bam-footer-cta"><p>Plan with confidence</p><h2>Let Us Take Care of Your Journey.</h2><span>Your family deserves a carefully planned Umrah experience. Share your itinerary with BAM Transport and receive personalised transportation assistance.</span><Link href="/custom-journey-planning">Request Your Family Transport Plan</Link></section>}
    <section className="bam-footer-links">
      <section><b>BAM Transport</b><p>Private Umrah transport coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.</p></section>
      <section><h3>Umrah Transport</h3><Link href="/family-umrah-transport-packages">Family packages</Link><Link href="/elderly-friendly-umrah-transport">Elder-friendly journeys</Link><Link href="/vip-umrah-family-transport">VIP family transport</Link><Link href="/custom-journey-planning">Custom journey planning</Link></section>
      <section><h3>Services</h3><Link href="/airport-transfers">Airport transfers</Link><Link href="/intercity-transfers">Intercity transfers</Link><Link href="/ziyarat-transport">Private transportation</Link></section>
      <section><h3>Popular Routes</h3><Link href="/jeddah-airport-to-makkah-transfer">Jeddah to Makkah</Link><Link href="/makkah-to-madinah-private-transfer">Makkah to Madinah</Link><Link href="/madinah-airport-transfers">Madinah Airport</Link></section>
      <section><h3>Company</h3><Link href="/about-us">About BAM</Link><Link href="/why-bam">Why BAM</Link><Link href="/travel-partners">Travel Partners</Link><Link href="/contact">Contact</Link><Link href="/faqs">FAQs</Link></section>
    </section>
    <div className="mx-auto mt-8 flex w-full max-w-[1130px] flex-col gap-3 border-t border-[#e5c378]/35 pt-5 text-[13px] leading-5 text-[#f4f0e4] sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
      <a className="w-fit underline underline-offset-2 transition-colors hover:text-[#e5c378] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c378]" href="https://digiaura360.com" target="_blank" rel="noopener nofollow">Designed by DigiAura360</a>
    </div>
  </footer>;
}
