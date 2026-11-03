import Link from "next/link";
import type { ReactNode } from "react";

export function Header() {
  return <header className="nav-shell"><Link className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></Link><nav><Link href="/services">Services</Link><Link href="/routes">Routes</Link><Link href="/fleet">Fleet</Link><Link href="/packages">Packages</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></nav><Link className="button button-dark nav-cta" href="/contact#enquiry">Book your ride <span>↗</span></Link></header>;
}

export function Footer() {
  return <footer><Link className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></Link><p>Private transport for Umrah, Ziyarat and journeys across the Kingdom.</p><div><Link href="/booking-policy">Booking policy</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div><small>© 2026 Barakah Al Madinah. Business contact details, policies and support hours must be verified before launch.</small></footer>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><div>{children}</div></section>;
}

export function Shell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }
