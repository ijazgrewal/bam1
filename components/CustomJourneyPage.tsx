import Image from "next/image";
import Link from "next/link";
import { CalendarRange, CarFront, Check, MapPinned, Route } from "lucide-react";
import { CustomJourneyPlanner } from "./CustomJourneyPlanner";

const options = [
  ["Airport Arrival and Departure Transfers", "Coordinate airport collections and departures with hotel or onward destinations in the same request.", "/airport-transfers", CarFront, "/route-jeddah.webp", "Private BAM airport transport in Jeddah"],
  ["Hotel and Intercity Transportation", "Plan hotel pickups and private journeys between Makkah Mukarramah, Madinah Munawwarah and other destinations.", "/intercity-transfers", Route, "/route-madinah.webp", "Private intercity transport for a Madinah journey"],
  ["Private Ziyarat Journeys", "Add preferred Makkah, Madinah, Taif or Badr Ziyarat requests for practical route review.", "/ziyarat-transport", MapPinned, "/ziyarat-badr.webp", "BAM private transport for a Ziyarat visit"],
  ["Additional Stops and Multi-Day Travel", "Include family visits, check-in timing, extra stops and several travel dates in one itinerary.", "/family-umrah-transport-packages", CalendarRange, "/package-family.webp", "BAM private family transport for a multi-day Umrah itinerary"],
] as const;

const planningItems = ["Airport arrival times", "Hotel check-in and checkout", "Travel between Makkah Mukarramah and Madinah Munawwarah", "Family and elderly needs", "Luggage requirements", "Preferred Ziyarat visits", "Additional stops", "Arrival and departure coordination"];
const faqs = [
  ["Can I request several transfers in one booking?", "Yes. Add each transfer to the planner in travel order. BAM reviews the connected routes before providing a proposal."],
  ["Can I add Makkah Mukarramah and Madinah Munawwarah Ziyarat?", "Yes. Add preferred Ziyarat destinations to the relevant transfer. Access, timing and the final route remain subject to review."],
  ["Can I choose a different vehicle for each route?", "Use the notes to request different vehicles. BAM confirms each vehicle only after reviewing passenger, luggage and route requirements."],
  ["Can I change my dates after submitting an enquiry?", "Contact BAM as early as possible. Updated dates, availability, routes and quotation details must be reviewed again."],
  ["Can I arrange transportation for elderly family members?", "Yes. Select Elderly-Friendly Transport and share practical boarding, mobility-equipment, luggage and rest-stop preferences without unnecessary medical information."],
] as const;

export function CustomJourneyPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Custom Umrah Transport Itinerary Planning", description: "Custom multi-stop private Umrah transport itinerary planning across Saudi Arabia.", provider: { "@type": "Organization", name: "BAM Transport" }, areaServed: { "@type": "Country", name: "Saudi Arabia" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "/" }, { "@type": "ListItem", position: 2, name: "Custom Journey Planning", item: "/custom-journey-planning" }] };
  return <main className="stitch-page custom-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="custom-hero"><div><p>Custom Umrah journey planning</p><h1>Custom Umrah Transport Itinerary Planning in Saudi Arabia</h1><span>Bring together airport arrivals, hotel transfers, intercity journeys and private Ziyarat transportation in one coordinated request. Share your family&apos;s itinerary and let BAM review suitable transport arrangements for your journey.</span><nav aria-label="Custom journey actions"><Link className="custom-gold-button" href="#journey-planner">Build Your Transport Itinerary <b>→</b></Link><Link className="custom-outline-button" href="/contact">Speak to Our Team</Link></nav></div></section>
    <section className="custom-section"><header><p>Flexible itinerary scope</p><h2>What Can Your Custom Umrah Itinerary Include?</h2></header><div className="custom-option-grid">{options.map(([title, text, href, Icon, image, imageAlt]) => <article key={title}><Image className="custom-option-image" src={image} alt={imageAlt} fill sizes="(max-width: 900px) 50vw, 25vw" /><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p><Link className="custom-option-button" href={href}>Explore service</Link></article>)}</div></section>
    <section id="journey-planner" className="planner-area"><header><p>Detailed itinerary request</p><h2>Build Your Personalized Umrah Transport Itinerary</h2><span>Complete the five steps below. Your details remain in the form while you move between steps, and you can review the complete itinerary before submission.</span></header><CustomJourneyPlanner /></section>
    <section className="custom-process"><header><p>Human operational review</p><h2>How BAM Reviews Your Custom Journey</h2><span>All quotations and arrangements remain subject to route, vehicle and scheduling review.</span></header><ol>{["Submit your itinerary.", "BAM reviews routes, vehicle suitability and scheduling.", "Receive a transport proposal or clarification request.", "Confirm your arrangements with the team."].map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></section>
    <section className="custom-planning-info"><div><p>Plan the practical details</p><h2>What Should You Consider When Planning Multiple Transfers?</h2><span>A connected itinerary is easier to review when each timing, destination and family requirement is clearly stated.</span></div><ul>{planningItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></section>
    <section className="custom-section custom-quote"><div><p>Transparent quotation factors</p><h2>How Are Custom Umrah Transport Quotes Calculated?</h2><span>Pricing depends on route combinations, vehicle selection, travel dates, passenger count, luggage, number of journey segments, additional requested stops and availability. BAM does not publish invented fixed prices.</span></div><Link className="custom-gold-button" href="#journey-planner">Submit Your Journey for Review <b>→</b></Link></section>
    <section className="custom-section custom-faq"><header><p>Helpful planning answers</p><h2>Custom Journey Planning FAQs</h2></header>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
  </main>;
}
