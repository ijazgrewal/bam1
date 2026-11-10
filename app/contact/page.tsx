import type { Metadata } from "next";
import { PremiumContactPage } from "../../components/PremiumContactPage";
export const metadata: Metadata = { title: "Contact BAM Transport | Private Umrah Transport", description: "Request a private Umrah transport quote from BAM for airport transfers, intercity travel, Ziyarat and family journeys in Saudi Arabia.", alternates: { canonical: "/contact" }, openGraph: { title: "Contact BAM Transport", description: "Request a reviewed private Umrah transport plan for your family journey in Saudi Arabia." }, twitter: { card: "summary_large_image", title: "Contact BAM Transport", description: "Request a reviewed private Umrah transport plan for your family journey in Saudi Arabia." } };
export default function Contact(){return <PremiumContactPage/>;}
