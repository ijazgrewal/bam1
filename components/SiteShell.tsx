import type { ReactNode } from "react";

export function Header() {
  return <><header className="nav-shell"><a className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></a><nav><a href="/services">Services</a><a href="/routes">Routes</a><a href="/fleet">Fleet</a><a href="/packages">Packages</a><a href="/about">About</a><a href="/contact">Contact</a></nav><a className="button button-dark nav-cta" href="/contact#enquiry">Book your ride <span>↗</span></a></header><nav className="mobile-nav" aria-label="Mobile navigation"><a href="/services">Services</a><a href="/routes">Routes</a><a href="/fleet">Fleet</a><a href="/packages">Packages</a><a href="/about">About</a><a href="/contact">Contact</a></nav></>;
}

export function Footer() {
  return <footer><a className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></a><p>Private transport for Umrah, Ziyarat and journeys across the Kingdom.</p><div><a href="/booking-policy">Booking policy</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></div><small>© 2026 Barakah Al Madinah. Business contact details, policies and support hours must be verified before launch.</small></footer>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><div>{children}</div></section>;
}

export function Shell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }
