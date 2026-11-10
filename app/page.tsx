import type { Metadata } from "next";
import { siteUrl } from "../lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { Accessibility, ArrowRight, BriefcaseBusiness, CalendarCheck, CarFront, Crown, Handshake, Headphones, HeartHandshake, MapPin, MessageCircle, Route, ShieldCheck, Users } from "lucide-react";
import { HeroLeadForm } from "../components/HeroLeadForm";
import { HomeFaq } from "../components/HomeFaq";
import { CardButton } from "../components/ui/CardButton";

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
  { name: "GMC Yukon XL", label: "Premium Family Travel", description: "Luxury comfort for private family journeys.", image: "/fleet-gmc-yukon-xl.png", href: "/fleet/gmc-yukon-xl" },
  { name: "Hyundai Staria", label: "Comfortable Family Transport", description: "Flexible family space for comfortable travel.", image: "/fleet-hyundai-staria.png", href: "/fleet/hyundai-staria" },
  { name: "Toyota Hiace", label: "Larger Group Transportation", description: "A spacious choice for larger groups.", image: "/fleet-toyota-hiace.png", href: "/fleet/toyota-hiace" },
  { name: "Sprinter", label: "Spacious Group Travel", description: "Private space for larger families, groups and multi-stop journeys.", image: "/fleet-sprinter.png", href: "/fleet/sprinter" },
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
  { title: "One Family Coordinator", text: "A dedicated point of contact for your family’s transportation arrangements.", icon: Users, image: "/benefit-family-coordinator.png", imageAlt: "BAM coordinator welcoming a family for private transport" },
  { title: "Pre-Arrival Communication", text: "Receive pickup instructions and confirmed travel details before your journey.", icon: MessageCircle, image: "/benefit-pre-arrival.png", imageAlt: "BAM coordinator reviewing a family arrival itinerary" },
  { title: "Family and Elderly Comfort", text: "Thoughtfully planned transportation for families travelling with children and elderly parents.", icon: Accessibility, image: "/benefit-elderly-comfort.png", imageAlt: "Chauffeur assisting an elderly traveller into a premium vehicle" },
  { title: "Journey Support and Responsibility", text: "Clear communication and assistance when travel arrangements need attention.", icon: ShieldCheck, image: "/benefit-journey-support.png", imageAlt: "Chauffeur supporting a family beside a private transport vehicle" },
];

const partnerBenefits = [
  { title: "Dedicated group coordination", icon: Handshake },
  { title: "Private transport options", icon: CarFront },
  { title: "Flexible itinerary planning", icon: Route },
  { title: "Airport and intercity transfers", icon: BriefcaseBusiness },
];

const faq: ReadonlyArray<readonly [string, string]> = [
  ["How do I book private Umrah transportation in Saudi Arabia?", "Share your route, dates, passenger details and contact information through the journey planner or quote form. BAM reviews the request before confirming availability."],
  ["Does BAM provide Jeddah Airport transfers to Makkah Mukarramah?", "Yes. You can request private transport from Jeddah Airport to your Makkah destination. Include flight and luggage details for review."],
  ["Can I book transportation for my complete Umrah journey?", "Yes. Share your expected arrivals, hotels, intercity travel, ziyarat and departure details in one journey request."],
  ["What vehicles are available for families and elderly pilgrims?", "BAM can review options including the GMC Yukon XL, Hyundai Staria, Toyota Hiace and Sprinter. Vehicle suitability is confirmed for your group and luggage."],
  ["Will I receive pickup and driver details before arrival?", "BAM communicates confirmed pickup instructions and agreed journey details directly before travel."],
  ["What happens if my flight is delayed or my travel plans change?", "Contact BAM as soon as possible with the updated information so the team can review the practical next steps with you."],
];

const responsibilityCommitments = [
  { title: "Clear Communication", text: "We confirm the agreed journey details and give you a direct contact route for practical updates.", icon: MessageCircle },
  { title: "Advance Planning", text: "Pickup, passengers, luggage and timing are reviewed before an arrangement is confirmed.", icon: CalendarCheck },
  { title: "Journey Support", text: "If a travel detail changes, our team reviews the practical next steps with you.", icon: Headphones },
];

const bookingSteps = [
  { title: "Share your journey", text: "Tell us your pickup, destination, travel date and family requirements.", icon: MessageCircle },
  { title: "Review the details", text: "BAM reviews passengers, luggage, timing and suitable vehicle options.", icon: CalendarCheck },
  { title: "Confirm your plan", text: "You receive clear next steps once availability and practical arrangements are reviewed.", icon: ShieldCheck },
  { title: "Travel with confidence", text: "Your family journey is coordinated around the details you have agreed with BAM.", icon: CarFront },
];

export default function Home() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "BAM Transport", url: `${siteUrl}/`, description: metadata.description };
  return <main className="stitch-page commercial-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="commercial-hero">
      <div><p>Private Umrah mobility • Saudi Arabia</p><h1>Premium Family Umrah Transport in Saudi Arabia</h1><h2>Your journey deserves more than a ride.</h2><span>Travel comfortably across Jeddah, Makkah Mukarramah, Madinah Munawwarah, and Taif with private family transportation, personalised coordination, and support throughout your journey.</span><div><Link className="gold-button" href="/contact">Plan Your Family Journey　→</Link><Link className="dark-button" href="#fleet">Explore Our Fleet</Link></div></div>
      <HeroLeadForm />
    </section>
    <section className="home-section why"><div className="section-heading"><p>Why families choose BAM</p><h2>Careful coordination at every stage.</h2><span>Private transport is only one part of the journey. Clear communication and thoughtful planning make the difference.</span></div><div className="four-grid why-grid">{familyBenefits.map((benefit, index) => { const Icon = benefit.icon; return <article className="why-card flex flex-col" key={benefit.title}><Image className="mb-6 h-36 w-full rounded-lg object-cover" src={benefit.image} alt={benefit.imageAlt} width={960} height={540} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" /><div className="why-card-top"><span className="why-card-icon"><Icon aria-hidden="true" size={22} strokeWidth={1.8} /></span><b>0{index + 1}</b></div><h3>{benefit.title}</h3><p>{benefit.text}</p></article>; })}</div></section>
    <section className="booking-timeline" aria-labelledby="booking-steps-heading"><div className="booking-timeline-intro"><p>Plan with confidence</p><h2 id="booking-steps-heading">How your private Umrah transport is arranged.</h2><span>Share the details you know once. BAM reviews your route, passengers, luggage and timing before confirming a practical transport plan.</span><small>Every request is personally reviewed before availability is confirmed.</small><CardButton className="booking-timeline-cta" fullWidth={false} href="/contact#enquiry">Book Your Transport <ArrowRight aria-hidden="true" size={17} /></CardButton></div><ol>{bookingSteps.map((step, index) => { const Icon = step.icon; return <li key={step.title}><span className="booking-step-number">Step 0{index + 1}</span><span className="booking-step-icon"><Icon aria-hidden="true" size={19} strokeWidth={1.9} /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>; })}</ol></section>
    <section id="fleet" className="home-section fleet-showcase"><div className="section-heading"><p>Our fleet</p><h2>Choose the right space for your family.</h2><span>Vehicle selection is reviewed around your passenger count, luggage and route requirements.</span></div><div className="fleet-showcase-grid">{vehicles.map((vehicle) => <article className="flex h-full flex-col" key={vehicle.name}><Image sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" src={vehicle.image} alt={`${vehicle.name} private transport vehicle`} width={1680} height={944} /><div className="flex flex-1 flex-col"><span className="vehicle-label">{vehicle.label}</span><h3>{vehicle.name}</h3><p>{vehicle.description}</p><CardButton className="mt-auto" href={vehicle.href}>View Vehicle Details <span aria-hidden="true">→</span></CardButton></div></article>)}</div></section>
    <section id="packages" className="home-section packages"><div className="section-heading"><p>Choose your journey</p><h2>Private transport that follows your family’s plan.</h2></div><div className="three-grid package-grid">{packages.map((item) => { const Icon = item.icon; return <article className={item.featured ? "package-card package-card-featured" : "package-card"} key={item.title}><Image className="package-card-image" sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" src={item.image} alt={item.imageAlt} width={960} height={540} /><div className="package-card-body"><div className="package-card-top"><span className="package-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.8} /></span><span className="package-card-label">{item.label}</span></div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><CardButton className="package-card-cta mt-auto" href={item.href}>Explore Package <span aria-hidden="true">→</span></CardButton></div></article>; })}</div></section>
    <section className="home-section route-section-home"><div className="section-heading"><p>Travel between the holy cities</p><h2>Popular Private Transport Routes</h2><span>Explore private airport and intercity transportation options for your family’s journey across Saudi Arabia.</span></div><div className="route-preview-grid">{privateRoutes.map((route) => <article className="flex h-full flex-col" key={route.name}><Image className="route-card-image" sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" src={route.image} alt={route.imageAlt} width={960} height={540} /><div className="route-card-body flex flex-1 flex-col"><span className="route-icon" aria-hidden="true"><MapPin size={18} strokeWidth={2} /></span><h3>{route.name}</h3><p>{route.text}</p><CardButton className="mt-auto" href={route.href}>Explore Route <span aria-hidden="true">→</span></CardButton></div></article>)}</div></section>
    <section className="ziyarat-section"><div className="home-section"><div className="section-heading"><p>Sacred-site journeys</p><h2>Explore Ziyarat Destinations</h2><span>Private transport requests for preferred ziyarat destinations, coordinated around your group and itinerary.</span></div><div className="ziyarat-grid">{ziyarat.map((destination) => <article className="flex h-full flex-col" key={destination.name}><Image className="ziyarat-card-image" sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" src={destination.image} alt={destination.imageAlt} width={960} height={540} /><div className="ziyarat-card-body flex flex-1 flex-col"><span className="ziyarat-card-accent" aria-hidden="true">✦</span><h3>{destination.name}</h3><p>{destination.text}</p><CardButton className="mt-auto" href={destination.href}>Explore Ziyarat <span aria-hidden="true">→</span></CardButton></div></article>)}</div></div></section>
    <section className="travel-partners"><div className="travel-partners-content"><p>For Umrah agents &amp; travel organizers</p><h2>Your Trusted Umrah Transport Partner in Saudi Arabia</h2><span>BAM Transport supports Umrah agents, group leaders, and travel organizers with coordinated private transportation across Jeddah, Makkah Mukarramah, Madinah Munawwarah, and Taif.</span><div className="partner-benefits">{partnerBenefits.map((benefit) => { const Icon = benefit.icon; return <div key={benefit.title}><span><Icon aria-hidden="true" size={18} strokeWidth={1.9} /></span><b>{benefit.title}</b></div>; })}</div></div><Link className="partner-cta-card" href="/travel-partners"><strong>Partner With BAM <span aria-hidden="true">→</span></strong><small>Discuss transport arrangements for your Umrah groups</small></Link></section>
    <section className="responsibility !bg-[#063529] !px-6 !py-16 text-left sm:!px-10 lg:!py-24"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="!text-[#E5C378]">Our responsibility to your family</p><h2 className="!mt-4 !text-4xl !leading-tight !text-[#FFFDF8] sm:!text-5xl">A journey planned with your family in mind.</h2><span className="!mx-0 !mt-6 !max-w-xl !text-base !leading-7 !text-[#DDE8E2]">Every request starts with careful listening. BAM reviews the details that matter to your family so each journey can be planned with clarity, comfort and practical care.</span><Link className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#E5C378] px-5 py-3 text-sm font-bold text-[#00291D] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF37] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C378]" href="/why-bam">Discover Why BAM <ArrowRight aria-hidden="true" size={17} /></Link></div><div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">{responsibilityCommitments.map((commitment) => { const Icon = commitment.icon; return <article className="rounded-xl border border-[#E5C378]/35 bg-white/8 p-6 text-left" key={commitment.title}><span className="mb-5 inline-flex size-10 items-center justify-center rounded-full bg-[#E5C378] text-[#00291D]"><Icon aria-hidden="true" size={20} strokeWidth={1.9} /></span><h3 className="font-serif text-2xl text-[#FFFDF8]">{commitment.title}</h3><p className="mt-3 text-sm leading-6 text-[#DDE8E2]">{commitment.text}</p></article>; })}</div></div></section>
    <section className="bg-[#F7F2E8] px-6 py-16 sm:px-10 lg:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87808]">Frequently asked questions</p><h2 className="mt-3 font-serif text-4xl leading-tight text-[#00291D] sm:text-5xl">Helpful answers before you travel.</h2><p className="mt-4 text-base leading-7 text-[#52655D]">Clear guidance for planning a private Umrah journey with BAM.</p></div><HomeFaq faqs={faq} /><div className="mt-10 text-center"><CardButton className="px-6" fullWidth={false} href="/faqs">View All FAQs <ArrowRight aria-hidden="true" size={17} /></CardButton></div></div></section>
  </main>;
}
