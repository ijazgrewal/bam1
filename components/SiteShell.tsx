import type { ReactNode } from "react";

export function Header() {
  const links = [["Home", "/"], ["Services", "/services"], ["Airport", "/airport-transfers"], ["Intercity", "/intercity-transfers"], ["Ziyarat", "/ziyarat-tours"], ["Packages", "/packages"], ["Groups", "/group-transport"], ["Routes", "/routes"], ["Fleet", "/fleet"], ["About", "/about"], ["Contact", "/contact"], ["FAQ", "/faq"], ["Policy", "/booking-policy"]] as const;
  const routeLinks = [["Jeddah Airport to Makkah", "/routes/jeddah-airport-to-makkah-mukarramah"], ["Jeddah Airport to Madinah", "/routes/jeddah-airport-to-madinah-munawwarah"], ["Jeddah Airport to KAEC", "/routes/jeddah-airport-to-king-abdullah-economic-city-kaec"], ["Makkah to Madinah", "/routes/makkah-mukarramah-to-madinah-munawwarah"], ["Madinah to Makkah", "/routes/madinah-munawwarah-to-makkah-mukarramah"], ["Madinah Airport to Madinah Hotel", "/routes/madinah-airport-to-madinah-hotel"], ["Madinah to Jeddah Airport", "/routes/madinah-munawwarah-to-jeddah-airport"], ["Makkah to Jeddah Airport", "/routes/makkah-mukarramah-to-jeddah-airport"]] as const;
  const routeMenu = <details className="route-menu"><summary>Routes</summary><div>{routeLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}<a className="all-routes" href="/routes">All route information →</a></div></details>;
  return <><header className="nav-shell"><a className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></a><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => label === "Routes" ? <span key={href}>{routeMenu}</span> : <a href={href} key={href}>{label}</a>)}</nav><a className="button button-dark nav-cta" href="/contact#enquiry">Book your ride <span>↗</span></a></header><nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}{routeLinks.map(([label, href]) => <a className="route-link" href={href} key={href}>{label}</a>)}</nav></>;
}

export function Footer() {
  return <footer><a className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></a><p>Private transport for Umrah, Ziyarat and journeys across the Kingdom.</p><div><a href="/booking-policy">Booking policy</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></div><small>© 2026 Barakah Al Madinah. Business contact details, policies and support hours must be verified before launch.</small></footer>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><div>{children}</div></section>;
}

export function Shell({ children }: { children: ReactNode }) { return <><Header />{children}<Footer /></>; }
