import type { Metadata } from "next";
import { siteUrl } from "../lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { Accessibility, BriefcaseBusiness, CarFront, Crown, Handshake, HeartHandshake, MapPin, MessageCircle, Route, ShieldCheck, Users } from "lucide-react";
import { BamNavigation } from "../components/BamNavigation";
import { HeroLeadForm } from "../components/HeroLeadForm";
import { BamFooter } from "../components/BamFooter";

export const metadata: Metadata = {
  title: "Premium Family Umrah Transport Saudi Arabia | BAM",
  description: "Private family Umrah transport across Saudi Arabia. Explore airport transfers, intercity journeys, Ziyarat and personalized travel arrangements with BAM.",
  alternates: { canonical: "/" },
};

const packages = [
  { title: "Family Umrah Transport Packages", label: "Private family transport", text: "Private transportation arrangements for families throughout their Umrah journey.", benefits: ["Arrival-to-departure planning", "Private family vehicle matching", "Clear itinerary coordination"], href: "/family-umrah-transport-packages", icon: CarFront, image: "/package-family.png", imageAlt: "Private family Umrah transport" },
  { title: "Elderly-Friendly Umrah Mobility", label: "Thoughtful mobility planning", text: "Thoughtful transportation planning for pilgrims travelling with elderly family members.", benefits: ["Comfort-focused pacing", "Mobility needs considered", "Family-first coordination"], href: "/elderly-friendly-umrah-transport", icon: HeartHandshake, image: "/package-elderly.png", imageAlt: "Comfortable elderly-friendly Umrah transport" },
  { title: "VIP Family Umrah Transport", label: "Premium private coordination", text: "Premium private transport arrangements with personalised journey coordination.", benefits: ["Private premium options", "Flexible journey planning", "Dedicated request review"], href: "/vip-umrah-family-transport", icon: Crown, image: "/package-vip.png", imageAlt: "Premium VIP family Umrah transport", featured: true },
];

const vehicles = [
  { name: "GMC Yukon XL", label: "Premium Family Travel", description: "Luxury comfort for private family journeys.", image: "/fleet-gmc-yukon-xl.png" },
  { name: "Hyundai Staria", label: "Comfortable Family Transport", description: "Flexible family space for comfortable travel.", image: "/fleet-hyundai-staria.png" },
  { name: "Toyota Hiace", label: "Larger Group Transportation", description: "A spacious choice for larger groups.", image: "/fleet-toyota-hiace.png" },
];

const privateRoutes = [
  { name: "Jeddah Airport to Makkah Mukarramah", text: "Private arrival transport reviewed around your flight, family and luggage.", href: "/jeddah-airport-to-makkah-transfer", image: "/route-jeddah.png", imageAlt: "Jeddah cityscape for airport transfer" },
  { name: "Makkah Mukarramah to Madinah Munawwarah", text: "A considered intercity transfer for your family’s onward journey.", href: "/makkah-to-madinah-private-transfer", image: "/route-makkah.png", imageAlt: "Makkah Mukarramah destination" },
  { name: "Madinah Munawwarah to Makkah Mukarramah", text: "Private hotel-to-hotel transport with clear journey coordination.", href: "/madinah-to-makkah-private-transfer", image: "/route-madinah.png", imageAlt: "Madinah Munawwarah destination" },
  { name: "Madinah Munawwarah Airport Transfers", text: "Arrival and departure transport planned around your flight details.", href: "/madinah-airport-transfers", image: "/route-madinah.png", imageAlt: "Madinah Munawwarah destination" },
  { name: "Jeddah Airport to Madinah Munawwarah", text: "An onward intercity journey from Jeddah to your Madinah destination.", href: "/jeddah-airport-to-madinah-transfer", image: "/route-jeddah.png", imageAlt: "Jeddah cityscape for airport transfer" },
  { name: "Taif Private Transportation", text: "Private Taif travel designed around your Makkah or Jeddah itinerary.", href: "/taif-private-transport", image: "/route-taif.png", imageAlt: "Taif mountain landscape" },
];

const ziyarat = [
  { name: "Makkah", text: "Private transport for a considered Makkah ziyarat itinerary, planned around your preferred places and timing.", href: "/makkah-ziyarat-transport", image: "/route-makkah.png", imageAlt: "Makkah Mukarramah destination" },
  { name: "Madinah", text: "A family-led Madinah ziyarat journey, coordinated around your preferred sacred-site visits.", href: "/madinah-ziyarat-transport", image: "/route-madinah.png", imageAlt: "Madinah Munawwarah destination" },
  { name: "Taif", text: "Thoughtful Taif ziyarat transport that fits naturally with your Makkah or Jeddah itinerary.", href: "/taif-ziyarat", image: "/route-taif.png", imageAlt: "Taif mountain destination" },
  { name: "Badr", text: "A private Badr ziyarat request reviewed around your family’s route, timing and travel needs.", href: "/badr-ziyarat", image: "/ziyarat-badr.png", imageAlt: "Badr valley destination" },
];

const familyBenefits = [
  { title: "One Family Coordinator", text: "A dedicated point of contact for your family’s transportation arrangements.", icon: Users },
  { title: "Pre-Arrival Communication", text: "Receive pickup instructions and confirmed travel details before your journey.", icon: MessageCircle },
  { title: "Family and Elderly Comfort", text: "Thoughtfully planned transportation for families travelling with children and elderly parents.", icon: Accessibility },
  { title: "Journey Support and Responsibility", text: "Clear communication and assistance when travel arrangements need attention.", icon: ShieldCheck },
];

const partnerBenefits = [
  { title: "Dedicated group coordination", icon: Handshake },
  { title: "Private transport options", icon: CarFront },
  { title: "Flexible itinerary planning", icon: Route },
  { title: "Airport and intercity transfers", icon: BriefcaseBusiness },
];

const faq = [
  ["How do I book private Umrah transportation in Saudi Arabia?", "Share your route, dates, passenger details and contact information through the journey planner or quote form. BAM reviews the request before confirming availability."],
  ["Does BAM provide Jeddah Airport transfers to Makkah Mukarramah?", "Yes. You can request private transport from Jeddah Airport to your Makkah destination. Include flight and luggage details for review."],
  ["Can I book transportation for my complete Umrah journey?", "Yes. Share your expected arrivals, hotels, intercity travel, ziyarat and departure details in one journey request."],
  ["What vehicles are available for families and elderly pilgrims?", "BAM can review options including the GMC Yukon XL, Hyundai Staria and Toyota Hiace. Vehicle suitability is confirmed for your group and luggage."],
  ["Will I receive pickup and driver details before arrival?", "BAM communicates confirmed pickup instructions and agreed journey details directly before travel."],
  ["What happens if my flight is delayed or my travel plans change?", "Contact BAM as soon as possible with the updated information so the team can review the practical next steps with you."],
];

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "BAM Transport", url: `${siteUrl}/`, description: metadata.description };
  return <main className="stitch-page commercial-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <BamNavigation />
    <section className="commercial-hero">
      <div><p>Private Umrah mobility • Saudi Arabia</p><h1>Premium Family Umrah Transport in Saudi Arabia</h1><h2>Your journey deserves more than a ride.</h2><span>Travel comfortably across Jeddah, Makkah Mukarramah, Madinah Munawwarah, and Taif with private family transportation, personalised coordination, and support throughout your journey.</span><div><Link className="gold-button" href="/contact">Plan Your Family Journey　→</Link><Link className="dark-button" href="#fleet">Explore Our Fleet</Link></div></div>
      <HeroLeadForm />
    </section>
    <section className="home-section why"><div className="section-heading"><p>Why families choose BAM</p><h2>Careful coordination at every stage.</h2><span>Private transport is only one part of the journey. Clear communication and thoughtful planning make the difference.</span></div><div className="four-grid why-grid">{familyBenefits.map((benefit, index) => { const Icon = benefit.icon; return <article className="why-card" key={benefit.title}><div className="why-card-top"><span className="why-card-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span><b>0{index + 1}</b></div><h3>{benefit.title}</h3><p>{benefit.text}</p></article>; })}</div></section>
    <section id="fleet" className="home-section fleet-showcase"><div className="section-heading"><p>Our fleet</p><h2>Choose the right space for your family.</h2><span>Vehicle selection is reviewed around your passenger count, luggage and route requirements.</span></div><div className="fleet-showcase-grid">{vehicles.map((vehicle) => <article key={vehicle.name}><Image src={vehicle.image} alt={`${vehicle.name} private transport vehicle`} width={1680} height={944} /><div><span className="vehicle-label">{vehicle.label}</span><h3>{vehicle.name}</h3><p>{vehicle.description}</p><Link href="/our-fleet">View Vehicle Details　→</Link></div></article>)}</div></section>
    <section id="packages" className="home-section packages"><div className="section-heading"><p>Choose your journey</p><h2>Private transport that follows your family’s plan.</h2></div><div className="three-grid package-grid">{packages.map((item) => { const Icon = item.icon; return <article className={item.featured ? "package-card package-card-featured" : "package-card"} key={item.title}><Image className="package-card-image" src={item.image} alt={item.imageAlt} width={960} height={540} /><div className="package-card-body"><div className="package-card-top"><span className="package-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span><span className="package-card-label">{item.label}</span></div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><Link className="package-card-cta" href={item.href}>Explore Package <span aria-hidden="true">→</span></Link></div></article>; })}</div></section>
    <section className="home-section route-section-home"><div className="section-heading"><p>Travel between the holy cities</p><h2>Popular Private Transport Routes</h2><span>Explore private airport and intercity transportation options for your family’s journey across Saudi Arabia.</span></div><div className="route-preview-grid">{privateRoutes.map((route) => <article key={route.name}><Image className="route-card-image" src={route.image} alt={route.imageAlt} width={960} height={540} /><div className="route-card-body"><span className="route-icon" aria-hidden="true"><MapPin size={18} strokeWidth={2} /></span><h3>{route.name}</h3><p>{route.text}</p><Link href={route.href}>Explore Route <span aria-hidden="true">→</span></Link></div></article>)}</div></section>
    <section className="ziyarat-section"><div className="home-section"><div className="section-heading"><p>Sacred-site journeys</p><h2>Explore Ziyarat Destinations</h2><span>Private transport requests for preferred ziyarat destinations, coordinated around your group and itinerary.</span></div><div className="ziyarat-grid">{ziyarat.map((destination) => <article key={destination.name}><Image className="ziyarat-card-image" src={destination.image} alt={destination.imageAlt} width={960} height={540} /><div className="ziyarat-card-body"><span className="ziyarat-card-accent" aria-hidden="true">✦</span><h3>{destination.name}</h3><p>{destination.text}</p><Link className="ziyarat-card-cta" href={destination.href}>Explore Ziyarat <span aria-hidden="true">→</span></Link></div></article>)}</div></div></section>
    <section className="travel-partners"><div className="travel-partners-content"><p>For Umrah agents &amp; travel organizers</p><h2>Your Trusted Umrah Transport Partner in Saudi Arabia</h2><span>BAM Transport supports Umrah agents, group leaders, and travel organizers with coordinated private transportation across Jeddah, Makkah Mukarramah, Madinah Munawwarah, and Taif.</span><div className="partner-benefits">{partnerBenefits.map((benefit) => { const Icon = benefit.icon; return <div key={benefit.title}><span><Icon aria-hidden="true" size={18} strokeWidth={1.9} /></span><b>{benefit.title}</b></div>; })}</div></div><Link className="partner-cta-card" href="/travel-partners"><strong>Partner With BAM <span aria-hidden="true">→</span></strong><small>Discuss transport arrangements for your Umrah groups</small></Link></section>
    <section className="responsibility"><p>Our responsibility to your family</p><h2>A Journey Planned With Your Family in Mind</h2><span>BAM considers family needs, advance pickup communication and practical changes to your travel plan. Each request is reviewed with care; availability and arrangements are confirmed directly.</span></section>
    <section className="home-section faq-home"><div className="section-heading"><p>Frequently asked questions</p><h2>Helpful answers before you travel.</h2></div>{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}<Link href="/faqs">Read all FAQs　→</Link></section>
    <BamFooter />
  </main>;
}
