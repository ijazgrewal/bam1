"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

const facebookUrl = "https://www.facebook.com/profile.php?id=61572543783897&mibextid=wwXIfr&rdid=tzJ0M1fOfTShW03z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DFy8FG5xy%2F%3Fmibextid%3DwwXIfr";
const instagramUrl = "https://www.instagram.com/barakah.al.madinah?srtk=MXZkZm85cGRsaGZwcQ%3D%3D";

export function BamFooter() {
  const pathname = usePathname();
  const isPartnerPage = pathname === "/partner-with-bam";
  const isAboutPage = pathname === "/about-us";
  const cta = isPartnerPage
    ? {
        eyebrow: "Plan with confidence",
        title: "Let's Coordinate Better Journeys Together",
        description: "Tell BAM about your agency or group transport needs and start a practical partnership conversation.",
        href: "/partner-with-bam#partner-enquiry",
        label: "Become a BAM Partner",
      }
    : isAboutPage
    ? {
        eyebrow: "Private Umrah mobility",
        title: "Plan Your Private Umrah Journey With BAM",
        description: "Share your route, travel dates, passengers and practical requirements for a considered private transport quotation.",
        href: "/contact",
        label: "Request a Private Transport Quote",
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
      <section className="bam-footer-brand">
        <div className="bam-footer-identity">
          <Link className="bam-footer-logo" href="/" aria-label="BAM Transport home"><Image src="/bam-logo.png" alt="BAM Transport" width={68} height={68} /></Link>
          <b>BAM Transport</b>
        </div>
        <p>Private Umrah transport for airport transfers, intercity journeys and ziyarat across Saudi Arabia.</p>
        <address className="bam-footer-contact">{siteConfig.email && <span>{siteConfig.email}</span>}{siteConfig.address && <span>{siteConfig.address}</span>}{siteConfig.licenceNumber && <span>Licence: {siteConfig.licenceNumber}</span>}</address>{/* TODO(BAM): add email, address, licence and accepted payment methods. */}
        <div className="bam-footer-socials" aria-label="Connect with BAM Transport">
          <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Chat with BAM Transport on WhatsApp"><svg aria-hidden="true" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.5-138c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></a>
          <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Follow BAM Transport on Facebook"><svg aria-hidden="true" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.2-92.7h-88.9V135.2c0-25.4 12.4-50.1 52.2-50.1H297V6.3S260.4 0 225.4 0c-73.2 0-121.1 44.4-121.1 124.7v70.6H22.9V288h81.4v224h100.2V288z" /></svg></a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Follow BAM Transport on Instagram"><svg aria-hidden="true" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a>
        </div>
      </section>
      <section><h3>Umrah Transport</h3><Link href="/family-umrah-transport-packages">Family packages</Link><Link href="/elderly-friendly-umrah-transport">Elder-friendly journeys</Link><Link href="/vip-umrah-family-transport">VIP family transport</Link><Link href="/custom-journey-planning">Custom journey planning</Link></section>
      <section><h3>Services</h3><Link href="/airport-transfers">Airport transfers</Link><Link href="/intercity-transfers">Intercity transfers</Link><Link href="/ziyarat-transport">Private transportation</Link></section>
      <section><h3>Popular Routes</h3><Link href="/jeddah-airport-to-makkah-transfer">Jeddah to Makkah</Link><Link href="/makkah-to-madinah-private-transfer">Makkah to Madinah</Link><Link href="/madinah-airport-transfers">Madinah Airport</Link></section>
      <section><h3>Company</h3><Link href="/about-us">About BAM</Link><Link href="/partner-with-bam">Partner With BAM</Link><Link href="/contact">Contact</Link><Link href="/faqs">FAQs</Link></section>
    </section>
    <div className="mx-auto mt-4 flex w-full max-w-[1130px] flex-col items-center gap-2 border-t border-[#e5c378]/35 pt-4 text-center text-[13px] leading-5 text-[#f4f0e4]">
      <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
      <a className="w-fit underline underline-offset-2 transition-colors hover:text-[#e5c378] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5c378]" href="https://digiaura360.com" target="_blank" rel="noopener nofollow">Designed by DigiAura360</a>
    </div>
  </footer>;
}
