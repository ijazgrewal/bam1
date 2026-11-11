import Image from "next/image";
import Link from "next/link";
import { Accessibility, CalendarClock, Check, Luggage, MessageCircle } from "lucide-react";
import { CardButton } from "./ui/CardButton";

const considerations = [
  ["Comfortable Vehicle Access", "Consider seating height, door access and ease of entering or exiting when discussing vehicle requirements.", "/our-fleet", Accessibility],
  ["Luggage and Mobility Planning", "Share walking aids, foldable wheelchairs and luggage requirements so available space can be reviewed before booking.", "/our-fleet", Luggage],
  ["Flexible Rest Stops", "Request reasonable comfort stops and preferred travel timings when planning longer intercity journeys.", "/intercity-transfers", CalendarClock],
  ["Dedicated Family Communication", "Keep one clear family point of contact for pickup details, itinerary updates and agreed transport arrangements.", "/contact", MessageCircle],
] as const;

const vehicles = [
  ["GMC Yukon XL", "A premium private vehicle option reviewed around passenger, seating and luggage needs.", "/fleet-gmc-yukon-xl.webp"],
  ["Hyundai Staria", "A flexible family vehicle option whose suitability is confirmed for each group.", "/fleet-hyundai-staria.webp"],
  ["Toyota Hiace", "A spacious group option reviewed around journey length, boarding preferences and luggage.", "/fleet-toyota-hiace.webp"],
  ["Sprinter", "Spacious private transport reviewed for larger groups, luggage and connected journeys.", "/fleet-sprinter.webp"],
] as const;

const checklist = ["Arrival date and airport", "Main destinations", "Passenger count", "Luggage requirements", "Walking aids or mobility equipment", "Preferred travel schedule", "Rest-stop preferences", "Practical boarding considerations"];
const pricingFactors = ["Requested route and journey length", "Passenger group and luggage requirements", "Suitable vehicle and travel schedule", "Requested comfort stops and practical arrangements"] as const;
const faqs = [
  ["Can elderly pilgrims request rest stops?", "Yes. Add preferred comfort stops to your enquiry. BAM reviews the route and reasonable timing before confirming the transport plan."],
  ["Can we bring a foldable wheelchair?", "Tell BAM the folded dimensions and other luggage requirements so available vehicle space can be reviewed. Wheelchair accessibility is not assumed."],
  ["Which BAM vehicle is suitable for elderly parents?", "Suitability depends on passenger count, boarding preferences, mobility aids, luggage, seating requirements and journey length. BAM reviews these details before recommending a vehicle."],
  ["Can family members travel together?", "Yes, where an available vehicle is suitable for the complete passenger group and luggage requirements."],
  ["How are airport pickups coordinated?", "Share the airport, arrival date, flight details and destination. BAM then communicates the agreed pickup instructions before travel."],
] as const;

export function ElderlyTransportPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Elderly-Friendly Umrah Transport", description: "Private Umrah transport planning for elderly family members in Saudi Arabia.", provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Elderly-Friendly Umrah Transport", item: "/elderly-friendly-umrah-transport" }] };
  return <main className="stitch-page elderly-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="elderly-hero"><div className="elderly-hero-copy"><p>Elderly-friendly Umrah mobility</p><h1>Elderly-Friendly Umrah Transport in Saudi Arabia</h1><span>Travel with your elderly family members through thoughtfully planned private transportation. BAM reviews boarding preferences, luggage arrangements, suitable vehicle options and journey requirements to help families travel with greater comfort and confidence.</span><div><Link className="gold-button" href="/contact">Discuss Your Family&apos;s Travel Needs <b>→</b></Link><Link className="elderly-outline" href="/our-fleet">Explore Suitable Vehicles <b>→</b></Link></div><small>BAM provides private transportation planning, not medical transport or trained medical assistance.</small></div><div className="elderly-hero-image"><Image src="/fleet-hyundai-staria.webp" alt="Approved BAM Hyundai Staria vehicle considered for elderly-friendly family Umrah transport" fill priority sizes="(max-width: 900px) 100vw, 45vw" /></div></section>
    <section className="elderly-section"><header><p>Practical comfort considerations</p><h2>What Makes an Umrah Journey More Comfortable for Elderly Family Members?</h2></header><div className="elderly-consideration-grid">{considerations.map(([title, text, href, Icon]) => <article key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><CardButton href={href}>Explore option <span aria-hidden="true">→</span></CardButton></article>)}</div></section>
    <section className="elderly-vehicle-section"><div className="elderly-section-heading"><p>Vehicle suitability</p><h2>Choosing a Suitable Vehicle for Elderly Pilgrims</h2><span>A suitable vehicle depends on passenger numbers, boarding preferences, mobility aids, luggage size, seating requirements and journey length. No vehicle is universally suitable for every elderly traveller.</span></div><div className="elderly-vehicle-grid">{vehicles.map(([name, text, image]) => <article key={name}><Image src={image} alt={`${name} approved BAM private transport vehicle`} width={900} height={640} /><div><h3>{name}</h3><p>{text}</p><CardButton href="/our-fleet">View fleet details <span aria-hidden="true">→</span></CardButton></div></article>)}</div><div className="elderly-vehicle-action"><Link className="gold-button" href="/contact">Discuss Vehicle Requirements <b>→</b></Link></div></section>
    <section className="elderly-checklist"><div><p>Prepare before requesting</p><h2>What Should Families Share Before Booking?</h2><span>Share practical transport information only. BAM does not need unnecessary medical diagnoses or sensitive health details.</span></div><ul>{checklist.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></section>
    <section className="elderly-process"><header><p>Clear coordination</p><h2>How BAM Plans Elderly-Friendly Transportation</h2></header><ol>{["Share family and mobility preferences.", "Review suitable vehicle and route options.", "Confirm timing and pickup arrangements.", "Travel with communication and assistance according to agreed arrangements."].map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></section>
    <section className="elderly-section elderly-pricing"><div className="elderly-pricing-copy"><p>Quotation guidance</p><h2>How Much Does Elderly-Friendly Umrah Transport Cost?</h2><span>BAM prepares a tailored quotation after reviewing the actual journey. Pricing depends on practical travel requirements, rather than assumed elderly-care charges or unverified complimentary services.</span><ul>{pricingFactors.map((factor) => <li key={factor}><Check aria-hidden="true" />{factor}</li>)}</ul></div><aside className="elderly-quote-card"><p>Personalized transport review</p><h3>Discuss Your Family&apos;s Requirements</h3><span>Share the route, travel dates, family group and any practical boarding or luggage considerations.</span><Link className="gold-button" href="/contact">Request an Elderly-Friendly Transport Quote <b>→</b></Link></aside></section>
    <section className="elderly-section elderly-faq"><header><p>Practical answers</p><h2>Elderly-Friendly Transport FAQs</h2></header>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </main>;
}
