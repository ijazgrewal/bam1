import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CarFront, CheckCircle2, Luggage, MapPin, MessageCircle, Route, Users } from "lucide-react";
import { CardButton } from "./ui/CardButton";

const inclusions = [
  ["Airport arrival and departure transfers", "Coordinate a suitable private collection or departure journey around your family, luggage and confirmed location.", "/airport-transfers", CarFront, "/route-jeddah.webp", "Private airport transport arriving in Jeddah"],
  ["Hotel and intercity transportation", "Link hotel pickups and journeys between Makkah Mukarramah and Madinah Munawwarah in one request.", "/intercity-transfers", Route, "/route-makkah.webp", "Private transport near Makkah for an intercity journey"],
  ["Private Ziyarat transportation", "Share preferred Ziyarat locations and BAM will review a practical private transport arrangement.", "/ziyarat-transport", MapPin, "/ziyarat-badr.webp", "Private transport for a Ziyarat journey"],
  ["Multi-day family journey planning", "Bring multiple transfers, dates and travel requirements into one clear itinerary enquiry.", "/custom-journey-planning", CalendarDays, "/package-family.webp", "BAM private family transport for a multi-day Umrah journey"],
] as const;

const benefits = [
  ["One family coordinator", "A clear point of communication to review the journeys that matter to your group.", "/custom-journey-planning", MessageCircle],
  ["Luggage and vehicle planning", "Vehicle suitability is reviewed against passenger numbers and the luggage you expect to bring.", "/fleet", Luggage],
  ["Advance pickup communication", "Share flight, hotel and timing details so your requested pickup arrangements are clear.", "/airport-transfers", CalendarDays],
  ["Family and elderly travel considerations", "Include children, elderly relatives and practical boarding preferences in your request.", "/elderly-friendly-umrah-transport", Users],
] as const;

const fleet = [
  ["GMC Yukon XL", "Premium private comfort for family journeys.", "/fleet-gmc-yukon-xl.webp"],
  ["Hyundai Staria", "Flexible space for a comfortable family journey.", "/fleet-hyundai-staria.webp"],
  ["Toyota Hiace", "A spacious option for larger family groups.", "/fleet-toyota-hiace.webp"],
  ["Mercedes-Benz Sprinter", "Spacious private transport for larger families and connected journeys.", "/fleet-sprinter.webp", "/fleet/sprinter"],
] as const;

const bookingSteps = [
  ["01", "Share your journey details", "Tell BAM your dates, airport or hotel locations, passengers and family requirements.", CalendarDays],
  ["02", "Receive a reviewed quotation", "BAM reviews your routes, vehicle suitability and practical timing before replying.", MessageCircle],
  ["03", "Confirm the arrangements", "Agree the vehicle, pickup details and journey plan directly with the BAM team.", CarFront],
  ["04", "Travel with clear information", "Receive the agreed journey details before your confirmed transport arrangement.", CheckCircle2],
] as const;

const pricingFactors = [
  "Pickup and destination routes",
  "Passenger numbers and luggage",
  "Vehicle suitability and availability",
  "Travel dates and requested stops",
] as const;

const faqs = [
  ["What is included in a family Umrah transport package?", "A package can include selected airport transfers, hotel pickups, intercity journeys and requested Ziyarat transport. BAM confirms the final scope in your quotation; flights, hotels and religious services are not included."],
  ["Can we arrange airport and hotel transfers together?", "Yes. Share your arrival details and hotel information in one enquiry so BAM can review the connected transport requirements."],
  ["Can our family travel together in one vehicle?", "BAM reviews the passenger count, luggage and route to recommend a suitable available vehicle for your family."],
  ["Can we include Ziyarat transportation?", "Yes. Add your preferred Ziyarat locations and dates to the request. Access, timing and final routing are confirmed after review."],
  ["Which vehicle is suitable for our family?", "The GMC Yukon XL, Hyundai Staria, Toyota Hiace and Sprinter are available fleet options. BAM confirms suitability around your actual group and luggage."],
] as const;

export function FamilyPackagePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Family Umrah Transport Packages", description: "Private family Umrah transportation coordination across Saudi Arabia.", provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Family Umrah Transport Packages", item: "/family-umrah-transport-packages" }] };
  return <main className="stitch-page family-package-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="family-package-hero"><div><p>Family Umrah transport</p><h1>Family Umrah Transport Packages in Saudi Arabia</h1><span>Travel together with private transportation planned around your family&apos;s Umrah itinerary. From airport arrivals and hotel transfers to journeys between Makkah Mukarramah and Madinah Munawwarah, BAM helps coordinate your travel arrangements with clarity and care.</span><nav aria-label="Family package actions"><Link className="gold-button" href="/custom-journey-planning">Plan Your Family Journey <b>→</b></Link><Link className="family-outline-button" href="/fleet">Explore Our Fleet <b>→</b></Link></nav></div></section>
    <section className="family-section"><header><p>Flexible transport scope</p><h2>What Can Your Family Transport Package Include?</h2><span>Select the journeys that suit your itinerary. The final transport scope is clearly confirmed in your quotation.</span></header><div className="family-card-grid">{inclusions.map(([title, description, href, Icon, image, imageAlt]) => <article key={title}><Image className="family-card-image" src={image} alt={imageAlt} fill sizes="(max-width: 900px) 50vw, 25vw" /><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p><CardButton href={href}>Explore service <span aria-hidden="true">→</span></CardButton></article>)}</div></section>
    <section className="family-section family-fleet"><header><p>Private fleet</p><h2>Choose the Right Vehicle for Your Family</h2><span>Explore each vehicle and share your group and luggage details for the right match.</span></header><div>{fleet.map(([name, description, image, href]) => <article key={name}><Image src={image} alt={`${name} BAM family transport vehicle`} width={900} height={640} /><div><h3>{name}</h3><p>{description}</p><CardButton href={href ?? `/fleet/${name.toLowerCase().replaceAll(" ", "-")}`}>View Fleet Details <span aria-hidden="true">→</span></CardButton></div></article>)}</div></section>
    <section className="family-section"><header><p>Designed for your family</p><h2>Thoughtful Transport Planning for Family Umrah</h2></header><div className="family-benefit-grid">{benefits.map(([title, description, href, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p><CardButton href={href}>Explore option <span aria-hidden="true">→</span></CardButton></article>)}</div></section>
    <section className="family-process"><header><p>Simple human coordination</p><h2>How Your Transport Request Works</h2><span>Four clear steps from your first enquiry to agreed transport arrangements.</span></header><ol className="family-process-timeline">{bookingSteps.map(([number, title, description, Icon]) => <li key={number}><div className="family-step-marker"><span><Icon aria-hidden="true" /></span><b>{number}</b></div><div><h3>{description}</h3><p className="sr-only">{title}</p></div></li>)}</ol></section>
    <section className="family-section family-pricing"><div className="family-pricing-copy"><p>Transparent quotation process</p><h2>How Much Does Family Umrah Transport Cost in Saudi Arabia?</h2><span>BAM provides a personalized transport quotation based on your journey. The final quote depends on the route, suitable vehicle, travel dates, group size and additional requirements.</span><ul>{pricingFactors.map((factor) => <li key={factor}><CheckCircle2 aria-hidden="true" />{factor}</li>)}</ul></div><aside className="family-pricing-card"><h3>Get a Personalized Quote</h3><span>Share your travel requirements to receive a quotation reviewed by the BAM team.</span><Link className="gold-button" href="/custom-journey-planning">Request a Family Transport Quote <b>→</b></Link></aside></section>
    <section className="family-section family-faq"><header><p>Family transport FAQs</p><h2>Helpful answers before you travel</h2></header>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </main>;
}
