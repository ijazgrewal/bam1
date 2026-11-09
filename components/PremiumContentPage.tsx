import Image from "next/image";
import Link from "next/link";
import { CalendarClock, CarFront, Check, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { BamNavigation } from "./BamNavigation";
import { BamFooter } from "./BamFooter";
import { CardButton } from "./ui/CardButton";

export type PremiumPageCategory = "service" | "route" | "ziyarat" | "company";
export type PremiumPageData = {
  category: PremiumPageCategory; eyebrow: string; title: string; intro: string; image: string; imageAlt: string;
  overviewTitle: string; overview: string; cards: Array<{ title: string; text: string; href?: string }>;
  detailsTitle: string; details: string[]; process: string[]; faqs: Array<[string, string]>;
  related: Array<[string, string]>; ctaTitle: string; ctaText: string; ctaLabel?: string;
};

const icons = [CarFront, MapPin, CalendarClock, MessageCircle];

export function PremiumContentPage({ data }: { data: PremiumPageData }) {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.intro, provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  return <main className={`stitch-page premium-info-page premium-${data.category}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <BamNavigation />
    <section className="premium-info-hero"><div><p>{data.eyebrow}</p><h1>{data.title}</h1><span>{data.intro}</span><nav><Link className="gold-button" href="/contact">Request Transport <b>→</b></Link><Link className="premium-outline" href={data.category === "ziyarat" ? "/ziyarat-transport" : data.category === "route" ? "/intercity-transfers" : "/our-fleet"}>Explore Options</Link></nav></div><div className="premium-info-image"><Image src={data.image} alt={data.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div></section>
    <section className="premium-info-overview"><div><p>Clear service guidance</p><h2>{data.overviewTitle}</h2></div><div><p>{data.overview}</p><div className="premium-related">{data.related.map(([label, href]) => <Link key={href} href={href}>{label} <b>→</b></Link>)}</div></div></section>
    <section className="premium-info-section"><header><p>{data.category === "route" ? "Plan the route" : data.category === "ziyarat" ? "Plan meaningful visits" : "What BAM coordinates"}</p><h2>{data.category === "route" ? "Practical Planning for This Private Route" : data.category === "ziyarat" ? "A Ziyarat Journey Reviewed Around Your Family" : "Service Details That Matter to Your Journey"}</h2></header><div className="premium-card-grid">{data.cards.map((card, index) => { const Icon = icons[index % icons.length]; return <article key={card.title}><Icon aria-hidden="true" /><h3>{card.title}</h3><p>{card.text}</p>{card.href && <CardButton href={card.href}>Learn more <span aria-hidden="true">→</span></CardButton>}</article>; })}</div></section>
    <section className="premium-detail-band"><div><p>Before you request</p><h2>{data.detailsTitle}</h2><span>BAM confirms availability, vehicle suitability, timing and quotation details after reviewing your actual journey.</span></div><ul>{data.details.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></section>
    <section className="premium-process"><header><p>Simple human coordination</p><h2>How Your Transport Request Works</h2></header><ol>{data.process.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></section>
    <section className="premium-info-section premium-confidence"><div><ShieldCheck aria-hidden="true" /><p>Accurate expectations</p><h2>Private Transport With Clear Confirmation</h2><span>A website request is not an automatic booking. BAM reviews operational details and communicates the agreed vehicle, pickup arrangement and quotation directly.</span></div><div><CarFront aria-hidden="true" /><p>Vehicle matching</p><h2>Selected Around Your Group</h2><span>Passenger numbers, luggage, route length and practical family requirements are reviewed before a vehicle is confirmed.</span></div></section>
    <section className="premium-info-section premium-faq"><header><p>Helpful answers</p><h2>Frequently Asked Questions</h2></header>{data.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="premium-info-final"><p>{data.eyebrow}</p><h2>{data.ctaTitle}</h2><span>{data.ctaText}</span><Link className="gold-button" href="/contact">{data.ctaLabel || "Discuss Your Journey"} <b>→</b></Link></section>
    <BamFooter />
  </main>;
}
