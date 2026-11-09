import Link from "next/link";

export function BamFooter() {
  return <footer className="bam-footer">
    <section className="bam-footer-cta"><p>Plan with confidence</p><h2>Let Us Take Care of Your Journey.</h2><span>Your family deserves a carefully planned Umrah experience. Share your itinerary with BAM Transport and receive personalised transportation assistance.</span><Link href="/custom-journey-planning">Request Your Family Transport Plan</Link></section>
    <section className="bam-footer-links">
      <section><b>BAM Transport</b><p>Private Umrah transport coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.</p></section>
      <section><h3>Umrah Transport</h3><Link href="/family-umrah-transport-packages">Family packages</Link><Link href="/elderly-friendly-umrah-transport">Elder-friendly journeys</Link><Link href="/vip-umrah-family-transport">VIP family transport</Link><Link href="/custom-journey-planning">Custom journey planning</Link></section>
      <section><h3>Services</h3><Link href="/airport-transfers">Airport transfers</Link><Link href="/intercity-transfers">Intercity transfers</Link><Link href="/ziyarat-transport">Private transportation</Link></section>
      <section><h3>Popular Routes</h3><Link href="/jeddah-airport-to-makkah-transfer">Jeddah to Makkah</Link><Link href="/makkah-to-madinah-private-transfer">Makkah to Madinah</Link><Link href="/madinah-airport-transfers">Madinah Airport</Link></section>
      <section><h3>Company</h3><Link href="/about-us">About BAM</Link><Link href="/why-bam">Why BAM</Link><Link href="/travel-partners">Travel Partners</Link><Link href="/contact">Contact</Link><Link href="/faqs">FAQs</Link></section>
    </section>
  </footer>;
}
