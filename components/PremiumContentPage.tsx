import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CalendarClock, CarFront, Check, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { CardButton } from "./ui/CardButton";
import { siteUrl } from "@/lib/site-url";

export type PremiumPageCategory = "service" | "route" | "ziyarat" | "company";
export type PremiumPageData = {
  category: PremiumPageCategory; eyebrow: string; title: string; intro: string; image: string; imageAlt: string;
  overviewTitle: string; overview: string; showOverview?: boolean; cardsTitle?: string; cards: Array<{ title: string; text: string; href?: string; image?: string; imageAlt?: string; ctaLabel?: string }>;
  detailsTitle: string; details: string[]; process: string[]; faqs: Array<[string, string]>;
  related: Array<[string, string]>; ctaTitle: string; ctaText: string; ctaLabel?: string; showFinalCta?: boolean;
};

const icons = [CarFront, MapPin, CalendarClock, MessageCircle];

const heroImages: Record<string, string> = {
  "Private Airport Transfers for Umrah Families": "/hero-airport-transfers.png",
  "Private Intercity Umrah Transport in Saudi Arabia": "/route-makkah.webp",
  "Private Family and Group Umrah Transportation": "/hero-family-group-transport.png",
  "Private Ziyarat Transport in Saudi Arabia": "/ziyarat-badr.webp",
  "Private Jeddah Airport to Makkah Mukarramah Transfer": "/hero-jeddah-airport-to-makkah.png",
  "Private Makkah Mukarramah to Madinah Munawwarah Transfer": "/route-madinah.webp",
  "Private Madinah Munawwarah to Makkah Mukarramah Transfer": "/route-taif.webp",
  "Private Madinah Airport Transfers": "/benefit-pre-arrival.webp",
  "Private Jeddah Airport to Madinah Munawwarah Transfer": "/bam-hero.webp",
  "Private Taif Transportation": "/benefit-journey-support.webp",
  "Private Makkah Mukarramah Ziyarat Transport": "/package-family.webp",
  "Private Madinah Munawwarah Ziyarat Transport": "/package-elderly.webp",
  "Private Taif Ziyarat Transport for Families": "/package-vip.webp",
};

const canonicalPaths: Record<string, string> = {
  "Private Umrah Transport Services in Saudi Arabia": "/services",
  "Private Airport Transfers for Umrah Families": "/airport-transfers",
  "Private Intercity Umrah Transport in Saudi Arabia": "/intercity-transfers",
  "Private Family and Group Umrah Transportation": "/family-group-transportation",
  "Private Ziyarat Transport in Saudi Arabia": "/ziyarat-transport",
  "Private Makkah Mukarramah Ziyarat Transport": "/makkah-ziyarat-transport",
  "Private Madinah Munawwarah Ziyarat Transport": "/madinah-ziyarat-transport",
  "Private Taif Ziyarat Transport for Families": "/taif-ziyarat",
  "Private Jeddah Airport to Makkah Mukarramah Transfer": "/jeddah-airport-to-makkah-transfer",
  "Private Makkah Mukarramah to Madinah Munawwarah Transfer": "/makkah-to-madinah-private-transfer",
  "Private Madinah Munawwarah to Makkah Mukarramah Transfer": "/madinah-to-makkah-private-transfer",
  "Private Madinah Airport Transfers": "/madinah-airport-transfers",
  "Private Jeddah Airport to Madinah Munawwarah Transfer": "/jeddah-airport-to-madinah-transfer",
  "Private Taif Transportation": "/taif-private-transport",
};

export function PremiumContentPage({ data, canonicalPath }: { data: PremiumPageData; canonicalPath?: string }) {
  const path = canonicalPath || canonicalPaths[data.title] || "/";
  const pageUrl = `${siteUrl}${path}`;
  const isRouteOrZiyarat = data.category === "route" || data.category === "ziyarat";
  const structuredData = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", name: data.title, description: data.intro, url: pageUrl, serviceType: data.category === "ziyarat" ? "Private Ziyarat transportation" : data.category === "route" ? "Private intercity transportation" : "Private Umrah transportation", provider: { "@type": "Organization", name: "BAM Transport", url: siteUrl }, areaServed: [{ "@type": "Country", name: "Saudi Arabia" }, { "@type": "City", name: "Jeddah" }, { "@type": "City", name: "Makkah Mukarramah" }, { "@type": "City", name: "Madinah Munawwarah" }, { "@type": "City", name: "Taif" }] },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: data.eyebrow, item: pageUrl }] },
    { "@type": "FAQPage", mainEntity: data.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  ] };
  const heroImage = heroImages[data.title] || data.image;
  const heroStyle = { "--premium-hero-image": `linear-gradient(90deg, rgba(0, 41, 29, .94) 0%, rgba(0, 41, 29, .78) 48%, rgba(0, 41, 29, .38) 100%), url("${heroImage}")` } as CSSProperties;
  return <main className={`stitch-page premium-info-page premium-${data.category}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <section className="premium-info-hero" style={heroStyle}><div><p>{data.eyebrow}</p><h1>{data.title}</h1><span>{data.intro}</span><nav><Link className="gold-button" href="/contact">Request Transport <b>→</b></Link><Link className="premium-outline" href={data.category === "ziyarat" ? "/ziyarat-transport" : data.category === "route" ? "/intercity-transfers" : "/fleet"}>Explore Options</Link></nav></div></section>
    {data.showOverview !== false && <section className="premium-info-overview"><div><p>Clear service guidance</p><h2>{data.overviewTitle}</h2></div><div><p>{data.overview}</p><div className="premium-related">{data.related.map(([label, href]) => <Link key={href} href={href}>{label} <b>→</b></Link>)}</div></div></section>}
    <section className="premium-info-section"><header><p>{data.category === "route" ? "Plan the route" : data.category === "ziyarat" ? "Plan meaningful visits" : "What BAM coordinates"}</p><h2>{data.cardsTitle || (data.category === "route" ? "Practical Planning for This Private Route" : data.category === "ziyarat" ? "A Ziyarat Journey Reviewed Around Your Family" : "Service Details That Matter to Your Journey")}</h2></header><div className="premium-card-grid">{data.cards.map((card, index) => { const Icon = icons[index % icons.length]; return <article className={card.image ? "premium-route-card" : undefined} key={card.title}>{card.image && <><Image src={card.image} alt={card.imageAlt || card.title} fill sizes="(max-width: 620px) 100vw, (max-width: 950px) 50vw, 25vw" className="premium-route-card-image" /><span className="premium-route-card-overlay" /></>}<div className="premium-card-content"><Icon aria-hidden="true" /><h3>{card.title}</h3><p>{card.text}</p>{card.href && <CardButton href={card.href}>{card.ctaLabel || "Learn more"} <span aria-hidden="true">→</span></CardButton>}</div></article>; })}</div></section>
    <section className="premium-detail-band"><div><p>Before you request</p><h2>{data.detailsTitle}</h2><span>BAM confirms availability, vehicle suitability, timing and quotation details after reviewing your actual journey.</span></div><ul>{data.details.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></section>
    {!isRouteOrZiyarat && <section className="premium-process"><header><p>Simple human coordination</p><h2>How Your Transport Request Works</h2><span>Four clear steps from your first enquiry to agreed transport arrangements.</span></header><ol>{data.process.map((item, index) => <li key={item}><span className="process-step">0{index + 1}</span><p>{item}</p></li>)}</ol></section>}
    {!isRouteOrZiyarat && <section className="premium-info-section premium-confidence" aria-labelledby="confidence-heading"><header><p>Plan with confidence</p><h2 id="confidence-heading">Clear Planning Before Confirmation</h2><span>Every request is reviewed around your real journey details before BAM confirms the transport arrangement.</span></header><div className="premium-confidence-grid"><article><span className="premium-confidence-icon"><ShieldCheck aria-hidden="true" /></span><p>Accurate expectations</p><h3>Private Transport With Clear Confirmation</h3><span>A website request is not an automatic booking. BAM reviews operational details and communicates the agreed vehicle, pickup arrangement and quotation directly.</span></article><article><span className="premium-confidence-icon"><CarFront aria-hidden="true" /></span><p>Vehicle matching</p><h3>Selected Around Your Group</h3><span>Passenger numbers, luggage, route length and practical family requirements are reviewed before a vehicle is confirmed.</span></article></div></section>}
    <section className="premium-info-section premium-faq"><header><p>Helpful answers</p><h2>Frequently Asked Questions</h2></header>{data.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    {data.showFinalCta !== false && <section className="premium-info-final"><p>{data.eyebrow}</p><h2>{data.ctaTitle}</h2><span>{data.ctaText}</span><Link className="gold-button" href="/contact">{data.ctaLabel || "Discuss Your Journey"} <b>→</b></Link></section>}
  </main>;
}
