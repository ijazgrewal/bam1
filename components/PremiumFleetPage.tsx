import Image from "next/image";
import Link from "next/link";
import { CarFront, Check, Luggage, Users } from "lucide-react";
import { approvedFleet, type FleetVehicle } from "@/lib/fleet-data";
import { CardButton } from "./ui/CardButton";

export type { FleetVehicle } from "@/lib/fleet-data";

export function PremiumFleetPage() {
  return <main className="fleet-premium">
    <section className="fleet-premium-hero"><p>Approved BAM vehicles</p><h1>Private Vehicles Selected Around Your Journey</h1><span>Explore BAM&apos;s approved vehicle imagery. Final vehicle, passenger suitability, luggage space and availability are confirmed after your actual request is reviewed.</span><Link className="gold-button" href="/contact">Request a Vehicle Match →</Link></section>
    <section className="fleet-grid">{approvedFleet.map(vehicle => <article className="flex h-full flex-col" key={vehicle.slug}><div><Image src={vehicle.image} alt={`${vehicle.name} approved for BAM private Umrah transport`} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 25vw" /></div><section className="flex flex-1 flex-col"><p>Private transport vehicle</p><h2>{vehicle.name}</h2><span>{vehicle.use}</span><ul><li><Users />Passenger suitability reviewed</li><li><Luggage />Luggage requirements confirmed</li></ul><CardButton className="mt-auto" href={`/fleet/${vehicle.slug}`}>View Vehicle <span aria-hidden="true">→</span></CardButton></section></article>)}</section>
    <section className="fleet-selection"><div><CarFront /><p>Vehicle selection</p><h2>What BAM Reviews Before Confirmation</h2></div><ul>{["Passenger count and family composition","Number and size of luggage items","Airport, city or intercity route","Child, elderly or mobility considerations","Requested stops and journey duration","Current operational availability"].map(item=><li key={item}><Check />{item}</li>)}</ul></section>
  </main>;
}

export function PremiumVehiclePage({ vehicle }: { vehicle: FleetVehicle }) {
  const schema = { "@context":"https://schema.org", "@type":"Product", name: vehicle.name, description: vehicle.use, brand: { "@type":"Brand", name:"BAM Transport" } };
  return <main className="fleet-premium"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="vehicle-hero"><div><p>BAM private fleet</p><h1>{vehicle.name}</h1><span>{vehicle.use} Final suitability and availability are confirmed for every journey.</span><div><Link className="gold-button" href="/contact">Request This Vehicle →</Link><Link className="vehicle-outline" href="/fleet">View Full Fleet</Link></div></div>{vehicle.image ? <div className="vehicle-image"><Image src={vehicle.image} alt={`${vehicle.name} for BAM private family transport`} fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div> : <div className="vehicle-image vehicle-image-placeholder"><CarFront/><span>Approved BAM vehicle image pending</span></div>}</section>
    <section className="fleet-intro"><div><p>Suitability first</p><h2>A Vehicle Request, Not an Automatic Assignment</h2></div><p>BAM checks your group, luggage, pickup, destination and operational availability before confirming this vehicle or recommending a more suitable option.</p></section>
    <section className="fleet-selection"><div><CarFront/><p>Share accurate details</p><h2>Information Needed for Review</h2></div><ul>{["Passenger count","Luggage quantity","Pickup and destination","Local date and time","Child or elderly requirements","Additional stops"].map(item=><li key={item}><Check/>{item}</li>)}</ul></section>
    <section className="premium-info-final"><p>{vehicle.name}</p><h2>Ask BAM to Review This Vehicle for Your Route</h2><span>No unverified capacity, luggage specification or guarantee is published. Your proposal will state the agreed arrangement.</span><Link className="gold-button" href="/contact">Request a Quote →</Link></section>
  </main>;
}
