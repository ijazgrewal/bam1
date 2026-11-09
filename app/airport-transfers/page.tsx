import type { Metadata } from "next";
import { PremiumContentPage } from "../../components/PremiumContentPage";
import { premiumPages } from "../../lib/premium-pages";
export const metadata: Metadata = { title: "Private Airport Transfers for Umrah Families | BAM", description: premiumPages["airport-transfers"].intro, alternates: { canonical: "/airport-transfers" } };
export default function AirportTransfers() { return <PremiumContentPage data={premiumPages["airport-transfers"]} />; }
