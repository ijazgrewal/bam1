import type { Metadata } from "next";
import { PremiumContentPage } from "../../components/PremiumContentPage";
import { premiumPages } from "../../lib/premium-pages";
export const metadata: Metadata = { title: "Private Intercity Umrah Transport Saudi Arabia | BAM", description: premiumPages["intercity-transfers"].intro, alternates: { canonical: "/intercity-transfers" } };
export default function IntercityTransfers() { return <PremiumContentPage data={premiumPages["intercity-transfers"]} />; }
