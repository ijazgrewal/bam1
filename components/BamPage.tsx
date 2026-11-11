import Image from "next/image";
import Link from "next/link";
import { CardButton } from "./ui/CardButton";

export type BamPageData = {
  eyebrow: string;
  title: string;
  intro: string;
  highlights: string[];
  sections: Array<{ title: string; text: string }>;
};

const fleetVehicles = [
  { name: "GMC Yukon XL", description: "Luxury comfort for private family journeys.", image: "/fleet-gmc-yukon-xl.webp", details: ["Private family travel", "Luggage reviewed", "Premium comfort"] },
  { name: "Hyundai Staria", description: "Flexible family space for comfortable travel.", image: "/fleet-hyundai-staria.webp", details: ["Family space", "Luggage reviewed", "Comfort focused"] },
  { name: "Toyota Hiace", description: "A spacious choice for larger groups.", image: "/fleet-toyota-hiace.webp", details: ["Larger groups", "Luggage reviewed", "Route support"] },
  { name: "Sprinter", description: "Spacious private transport for larger families and connected journeys.", image: "/fleet-sprinter.webp", details: ["Larger groups", "Luggage reviewed", "Multi-stop support"] },
];

export function BamPage({ data }: { data: BamPageData }) {
  const isFleetPage = data.eyebrow === "Our fleet";

  return (
    <main className="stitch-page inner-bam-page">
      <section className="inner-hero">
        <p>{data.eyebrow}</p><h1>{data.title}</h1><span>{data.intro}</span>
        <div><Link className="gold-button" href="/contact">Request an itinerary　→</Link><Link className="dark-button" href="/contact">Speak to dispatch</Link></div>
      </section>
      <section className="inner-content">
        {isFleetPage && <div className="fleet-gallery" aria-label="Our vehicles">
          {fleetVehicles.map((vehicle) => <article key={vehicle.name}>
            <Image src={vehicle.image} alt={vehicle.name} width={1120} height={1400} />
            <div><div className="vehicle-card-meta">{vehicle.details.map((detail) => <span key={detail}>✦ {detail}</span>)}</div><p>{vehicle.name}</p><span>{vehicle.description}</span><CardButton href="#enquiry">See details <span aria-hidden="true">→</span></CardButton></div>
          </article>)}
        </div>}
        <div className="section-heading"><p>Travel with confidence</p><h2>Thoughtfully arranged around your journey.</h2></div>
        <div className="highlight-grid">{data.highlights.map((item, index) => <article key={item}><b>0{index + 1}</b><h3>{item}</h3><p>Our team reviews every detail with care before confirming arrangements.</p></article>)}</div>
        <div className="detail-grid">{data.sections.map((section) => <article key={section.title}><h2>{section.title}</h2><p>{section.text}</p></article>)}</div>
      </section>
    </main>
  );
}
