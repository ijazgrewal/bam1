import type { Metadata } from "next";
import { PremiumContentPage } from "../../components/PremiumContentPage";
import { premiumPages } from "../../lib/premium-pages";
export const metadata: Metadata = { title: "Private Umrah Transport Services Saudi Arabia | BAM", description: premiumPages.services.intro, alternates: { canonical: "/services" } };
export default function Services() { return <PremiumContentPage data={premiumPages.services} />; }
