import type { Metadata } from "next";
import { PremiumContentPage } from "../../components/PremiumContentPage";
import { premiumPages } from "../../lib/premium-pages";
export const metadata: Metadata = { title: "Private Ziyarat Transport Saudi Arabia | BAM", description: premiumPages["ziyarat-transport"].intro, alternates: { canonical: "/ziyarat-transport" } };
export default function ZiyaratTransport() { return <PremiumContentPage data={premiumPages["ziyarat-transport"]} />; }
