import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PremiumContentPage } from "../../../components/PremiumContentPage";
import { routePageData } from "../../../lib/premium-pages";
import { routes, routeSlug } from "../../../lib/site-data";
const routeItems=routes.map(route=>({...route,slug:routeSlug(route.origin,route.destination)}));
export const dynamicParams = false;
const imageFor=(origin:string)=>origin.includes("Madinah")?"/route-madinah.webp":origin.includes("Makkah")?"/route-makkah.webp":"/route-jeddah.webp";
export function generateStaticParams(){return routeItems.map(route=>({slug:route.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const route=routeItems.find(item=>item.slug===slug);if(!route)return{};const title=`Private ${route.origin} to ${route.destination} Transport`;return{title:`${title} | BAM`,description:`Request private family transportation from ${route.origin} to ${route.destination}, reviewed around passengers, luggage and timing.`,alternates:{canonical:`/routes/${slug}`}};}
export default async function RouteDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const route=routeItems.find(item=>item.slug===slug);if(!route)notFound();const title=`Private ${route.origin} to ${route.destination} Transport`;const data=routePageData(title,`Request private family transportation from ${route.origin} to ${route.destination}, reviewed around your pickup, passengers, luggage and timing.`,imageFor(route.origin));return <PremiumContentPage data={data} canonicalPath={`/routes/${slug}`}/>;}
