import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, PageHero } from "../../../components/SiteShell";
import { fleet } from "../../../lib/site-data";

const slugify = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export function generateStaticParams() { return fleet.map(vehicle => ({ slug: slugify(vehicle.name) })); }
export default async function FleetDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const vehicle = fleet.find(item => slugify(item.name) === slug); if (!vehicle) notFound(); return <Shell><PageHero eyebrow="Fleet detail" title={vehicle.name}><p>{vehicle.use}. Final availability, capacity and luggage suitability are confirmed by the business for every journey.</p></PageHero><section className="detail-section split-detail"><article><div className="approved-image">Approved business photo gallery required</div><h2>Business-approved specifications</h2><p><b>Vehicle category:</b> To be confirmed by the business.</p><p><b>Seats after driver:</b> To be confirmed by the business.</p><p><b>Luggage guidance:</b> {vehicle.luggage}.</p></article><article><h2>Suitability & facilities</h2><p>The page is prepared for approved amenities, exact seating, realistic luggage photographs and a vehicle gallery. These must not be inferred from generic vehicle information.</p><h2>Request this vehicle</h2><Link className="button button-dark" href="/contact#enquiry">Request a quote →</Link></article></section></Shell> }
