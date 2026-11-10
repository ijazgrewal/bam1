import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CarFront, Luggage, MapPin, MessageCircle, Route, Users } from "lucide-react";
import { BamNavigation } from "./BamNavigation";
import { BamFooter } from "./BamFooter";
import { CardButton } from "./ui/CardButton";

const inclusions = [
  ["Airport arrival and departure transfers", "Coordinate a suitable private collection or departure journey around your family, luggage and confirmed location.", "/airport-transfers", CarFront],
  ["Hotel and intercity transportation", "Link hotel pickups and journeys between Makkah Mukarramah and Madinah Munawwarah in one request.", "/intercity-transfers", Route],
  ["Private Ziyarat transportation", "Share preferred Ziyarat locations and BAM will review a practical private transport arrangement.", "/ziyarat-transport", MapPin],
  ["Multi-day family journey planning", "Bring multiple transfers, dates and travel requirements into one clear itinerary enquiry.", "/custom-journey-planning", CalendarDays],
] as const;

const benefits = [
  ["One family coordinator", "A clear point of communication to review the journeys that matter to your group.", MessageCircle],
  ["Luggage and vehicle planning", "Vehicle suitability is reviewed against passenger numbers and the luggage you expect to bring.", Luggage],
  ["Advance pickup communication", "Share flight, hotel and timing details so your requested pickup arrangements are clear.", CalendarDays],
  ["Family and elderly travel considerations", "Include children, elderly relatives and practical boarding preferences in your request.", Users],
] as const;

const fleet = [
  ["GMC Yukon XL", "Premium private comfort for family journeys.", "/fleet-gmc-yukon-xl.png"],
  ["Hyundai Staria", "Flexible space for a comfortable family journey.", "/fleet-hyundai-staria.png"],
  ["Toyota Hiace", "A spacious option for larger family groups.", "/fleet-toyota-hiace.png"],
  ["Sprinter", "Spacious private transport for larger families and connected journeys.", "/fleet-sprinter.png"],
] as const;

const faqs = [
  ["What is included in a family Umrah transport package?", "A package can include selected airport transfers, hotel pickups, intercity journeys and requested Ziyarat transport. BAM confirms the final scope in your quotation; flights, hotels and religious services are not included."],
  ["Can we arrange airport and hotel transfers together?", "Yes. Share your arrival details and hotel information in one enquiry so BAM can review the connected transport requirements."],
  ["Can our family travel together in one vehicle?", "BAM reviews the passenger count, luggage and route to recommend a suitable available vehicle for your family."],
  ["Can we include Ziyarat transportation?", "Yes. Add your preferred Ziyarat locations and dates to the request. Access, timing and final routing are confirmed after review."],
  ["Which vehicle is suitable for our family?", "The GMC Yukon XL, Hyundai Staria, Toyota Hiace and Sprinter are available fleet options. BAM confirms suitability around your actual group and luggage."],
  ["Can we change our itinerary after requesting a quotation?", "Tell BAM about any change as early as possible. Revised routing, timing and availability must be reviewed before arrangements are confirmed."],
] as const;

export function FamilyPackagePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Family Umrah Transport Packages", description: "Private family Umrah transportation coordination across Saudi Arabia.", provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Family Umrah Transport Packages", item: "/family-umrah-transport-packages" }] };
  return <main className="stitch-page family-package-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <BamNavigation />
    <section className="family-package-hero"><div><p>Family Umrah transport</p><h1>Family Umrah Transport Packages in Saudi Arabia</h1><span>Travel together with private transportation planned around your family&apos;s Umrah itinerary. From airport arrivals and hotel transfers to journeys between Makkah Mukarramah and Madinah Munawwarah, BAM helps coordinate your travel arrangements with clarity and care.</span><nav aria-label="Family package actions"><Link className="gold-button" href="/custom-journey-planning">Plan Your Family Journey <b>→</b></Link><Link className="family-outline-button" href="/our-fleet">Explore Our Fleet <b>→</b></Link></nav></div><div className="family-hero-image"><Image src="/fleet-hyundai-staria.png" alt="Approved BAM Hyundai Staria for private family Umrah transport" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div></section>
    <section className="family-section family-overview"><p>Private family coordination</p><h2>Private Umrah Transportation for the Whole Family</h2><span>BAM coordinates private family transportation covering suitable airport transfers, hotel pickups, intercity journeys and requested Ziyarat transportation. Your transport arrangement is planned around the family&apos;s itinerary, group size, luggage and preferred vehicle.</span><small>This is a transportation package only. Flights, hotel accommodation and religious services are not included.</small></section>
    <section className="family-section"><header><p>Flexible transport scope</p><h2>What Can Your Family Transport Package Include?</h2><span>Select the journeys that suit your itinerary. The final transport scope is clearly confirmed in your quotation.</span></header><div className="family-card-grid">{inclusions.map(([title, description, href, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p><CardButton href={href}>Explore service <span aria-hidden="true">→</span></CardButton></article>)}</div></section>
    <section className="family-section family-fleet"><header><p>Approved BAM fleet</p><h2>Choose the Right Vehicle for Your Family</h2><span>Only vehicle suitability verified against your group and luggage is confirmed. Explore the existing fleet details before making an enquiry.</span></header><div>{fleet.map(([name, description, image]) => <article key={name}><Image src={image} alt={`${name} BAM family transport vehicle`} width={900} height={640} /><div><h3>{name}</h3><p>{description}</p><CardButton href="/our-fleet">View Fleet Details <span aria-hidden="true">→</span></CardButton></div></article>)}</div></section>
    <section className="family-section"><header><p>Designed for your family</p><h2>Thoughtful Transport Planning for Family Umrah</h2></header><div className="family-benefit-grid">{benefits.map(([title, description, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="family-process"><div><p>Clear booking process</p><h2>How to Book Your Family Umrah Transportation</h2></div><ol>{["Share your travel dates and family requirements.", "Receive a proposed transport plan and quotation.", "Confirm your vehicle and pickup arrangements.", "Travel with clear communication and journey support."].map((step, index) => <li key={step}><b>0{index + 1}</b><span>{step}</span></li>)}</ol></section>
    <section className="family-section family-pricing"><div><p>Clear quotation guidance</p><h2>How Much Does Family Umrah Transport Cost in Saudi Arabia?</h2><span>There are no assumed package prices. BAM quotations depend on the routes and destinations, group size, vehicle type, travel dates, luggage requirements, and number of transfers or stops.</span></div><Link className="gold-button" href="/custom-journey-planning">Request a Family Transport Quote <b>→</b></Link></section>
    <section className="family-section family-faq"><header><p>Family transport FAQs</p><h2>Helpful answers before you travel</h2></header>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <section className="family-final"><p>Family Umrah transport</p><h2>Plan a Comfortable Umrah Journey for Your Family</h2><span>Share your journey details with BAM and explore private transportation arrangements tailored to your family.</span><Link className="gold-button" href="/custom-journey-planning">Plan Your Family Journey <b>→</b></Link></section>
    <BamFooter />
  </main>;
}
