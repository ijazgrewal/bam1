import Image from "next/image";
import Link from "next/link";
import { CalendarRange, CarFront, Crown, MapPinned, MessageCircle, Route, ShieldCheck, Users } from "lucide-react";

const features = [
  ["Private Premium Vehicles", "Explore suitable premium vehicles available for your confirmed itinerary and family requirements.", "/our-fleet", Crown, "/fleet-gmc-yukon-xl.webp", "BAM GMC Yukon XL premium private transport vehicle"],
  ["Personalized Journey Planning", "Discuss travel timings, destinations and pickup preferences before any arrangement is confirmed.", "/custom-journey-planning", CalendarRange, "/package-vip.webp", "BAM private VIP journey planning"],
  ["Family Privacy and Comfort", "Travel with your own family group in the private vehicle agreed for your journey.", "/family-group-transportation", Users, "/package-family.webp", "Private BAM family transport for an Umrah journey"],
  ["Dedicated Journey Communication", "Receive clear contact, pickup and itinerary information for the arranged journey.", "/contact", MessageCircle, "/benefit-family-coordinator.webp", "BAM family journey coordination"],
] as const;

const applications = [
  ["VIP Airport Transfers", "Arrange a private airport collection or departure around confirmed flight, hotel and luggage details.", "/airport-transfers", CarFront, "/route-jeddah.webp", "Private BAM airport transfer in Jeddah"],
  ["Private Makkah and Madinah Transfers", "Coordinate a premium private intercity journey around your family and preferred schedule.", "/intercity-transfers", Route, "/route-madinah.webp", "Private transport for the Makkah and Madinah journey"],
  ["Personalized Family Ziyarat Transportation", "Request private transport around preferred Ziyarat locations and practical timing.", "/ziyarat-transport", MapPinned, "/ziyarat-badr.webp", "Private BAM transport for a Ziyarat visit"],
  ["Multi-Day VIP Journey Planning", "Bring several transfers, stops and dates into one detailed transport request.", "/custom-journey-planning", CalendarRange, "/package-vip.webp", "BAM VIP private transport for a multi-day Umrah journey"],
] as const;

const trustPoints = [
  ["Advance communication", "Receive the agreed pickup and journey information before travel.", "/airport-transfers"],
  ["Vehicle matching", "Vehicle choice is reviewed against passengers, luggage, routes and preferences.", "/our-fleet"],
  ["Private journey coordination", "Your confirmed vehicle is arranged for your family group and agreed itinerary.", "/custom-journey-planning"],
  ["Family-focused scheduling", "Share dates, hotel information and preferred timings for practical review.", "/family-umrah-transport-packages"],
  ["Transport issue support", "Use the agreed contact route if an arranged transport detail needs attention.", "/contact"],
] as const;

const faqs = [
  ["What is included in VIP Family Umrah Transport?", "The confirmed scope may include selected airport transfers, hotel pickups, intercity journeys, private Ziyarat transport and multi-day coordination. Your quotation states the exact arrangements."],
  ["Which premium vehicles does BAM offer?", "The GMC Yukon XL is an approved BAM premium fleet option. Other vehicles may be reviewed depending on passenger, luggage and journey requirements."],
  ["Can we book a private vehicle for multiple days?", "Yes, you can request multi-day transport. Availability, daily routes, waiting requirements and the complete scope are reviewed before quotation."],
  ["Can VIP transport include airport and hotel transfers?", "Yes. Share your flight and hotel details so BAM can review suitable private pickup and transfer arrangements."],
  ["Can our family request additional stops?", "Yes. Include preferred stops in the enquiry. BAM reviews routing, timing and any quotation changes before confirmation."],
] as const;

export function VipTransportPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "VIP Family Umrah Transport", description: "Premium private family Umrah transport and personalized journey coordination in Saudi Arabia.", provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "VIP Family Umrah Transport", item: "/vip-umrah-family-transport" }] };
  return <main className="stitch-page vip-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="vip-hero"><div className="vip-hero-copy"><p>VIP family Umrah transport</p><h1>VIP Family Umrah Transport in Saudi Arabia</h1><span>Experience private Umrah transportation with a focus on comfort, privacy and personalized coordination. BAM helps families arrange premium vehicles and carefully planned transfers across Saudi Arabia according to their travel needs.</span><div><Link className="vip-gold-button" href="/contact">Request VIP Transport <b>→</b></Link><Link className="vip-outline-button" href="/our-fleet">Explore Premium Vehicles <b>→</b></Link></div></div><div className="vip-hero-image"><Image src="/fleet-gmc-yukon-xl.webp" alt="Approved BAM GMC Yukon XL for VIP family Umrah transport" fill priority sizes="(max-width: 900px) 100vw, 48vw" /><span>Approved BAM premium fleet</span></div></section>
    <section className="vip-section"><header><p>Practical premium value</p><h2>What Makes BAM VIP Family Transportation Different?</h2></header><div className="vip-feature-grid">{features.map(([title, text, href, Icon, image, imageAlt]) => <article key={title}><Image className="vip-feature-image" src={image} alt={imageAlt} fill sizes="(max-width: 950px) 50vw, 25vw" /><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><Link className="vip-feature-button" href={href}>Explore option <b>→</b></Link></article>)}</div></section>
    <section className="vip-fleet"><div className="vip-fleet-image"><Image src="/fleet-gmc-yukon-xl.webp" alt="GMC Yukon XL premium private BAM transport vehicle" fill sizes="(max-width: 900px) 100vw, 56vw" /></div><div className="vip-fleet-copy"><p>Signature vehicle option</p><h2>Discover Your VIP Transport Options</h2><h3>GMC Yukon XL</h3><span>Suitable for premium private family travel where the confirmed group, luggage and route match the vehicle. Passenger capacity and luggage allowance are confirmed directly for each journey rather than assumed online.</span><div><Link className="vip-outline-dark" href="/our-fleet">View Vehicle Details <b>→</b></Link><Link className="vip-gold-button" href="/contact">Request This Vehicle <b>→</b></Link></div></div></section>
    <section className="vip-section"><header><p>Across your Umrah itinerary</p><h2>Premium Private Transfers for Your Umrah Journey</h2></header><div className="vip-application-grid">{applications.map(([title, text, href, Icon, image, imageAlt]) => <article key={title}><Image className="vip-application-image" src={image} alt={imageAlt} fill sizes="(max-width: 950px) 50vw, 25vw" /><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Link className="vip-application-button" href={href}>Explore transport option</Link></article>)}</div></section>
    <section className="vip-process"><header><p>A refined booking experience</p><h2>Your Private Journey, Carefully Coordinated</h2></header><ol>{["Share your itinerary and preferred vehicle.", "Receive a personalized transport proposal.", "Confirm vehicle, pickup and travel arrangements.", "Travel with agreed coordination and journey support."].map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></section>
    <section className="vip-section vip-pricing"><div><p>Clear quotation scope</p><h2>How Much Does VIP Umrah Transportation Cost?</h2><span>Quotations depend on premium vehicle selection, journey dates, routes and destinations, passenger and luggage requirements, number of stops, and duration of transport arrangements. BAM does not publish invented prices or fixed inclusions.</span></div><Link className="vip-gold-button" href="/contact">Request Your Personalized VIP Quote <b>→</b></Link></section>
    <section className="vip-trust"><div><p>Credible coordination</p><h2>Why Families Choose BAM for VIP Umrah Transport</h2><span>Premium value comes from clear, practical arrangements—not unsupported extras or invented testimonials.</span></div><div>{trustPoints.map(([title, text, href]) => <article key={title}><ShieldCheck aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Link href={href}>Explore option <b>→</b></Link></article>)}</div></section>
    <section className="vip-section vip-faq"><header><p>Helpful answers</p><h2>VIP Family Transport FAQs</h2></header>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </main>;
}
