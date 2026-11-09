import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumVehiclePage } from "../../../components/PremiumFleetPage";
import { fleetDetails } from "@/lib/fleet-data";
export const dynamicParams = false;
export function generateStaticParams() { return fleetDetails.map(vehicle => ({ slug: vehicle.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const vehicle=fleetDetails.find(item=>item.slug===slug); if(!vehicle)return{}; return {title:`${vehicle.name} Private Umrah Transport | BAM`,description:`Request the ${vehicle.name} for private BAM family transport. Suitability, luggage and availability are confirmed for each journey.`,alternates:{canonical:`/fleet/${slug}`}}; }
export default async function FleetDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const vehicle=fleetDetails.find(item=>item.slug===slug);if(!vehicle)notFound();return <PremiumVehiclePage vehicle={vehicle}/>;}
