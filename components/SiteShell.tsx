import type { ReactNode } from "react";
import Link from "next/link";
import { routes, routeSlug } from "../lib/site-data";
import { BamFooter } from "./BamFooter";
import { BamNavigation } from "./BamNavigation";

export function Header() {
  const links = [["Home", "/"], ["Services", "/services"], ["Airport", "/airport-transfers"], ["Intercity", "/intercity-transfers"], ["Ziyarat", "/ziyarat-tours"], ["Packages", "/packages"], ["Groups", "/group-transport"], ["Routes", "/routes"], ["Fleet", "/fleet"], ["About", "/about"], ["Contact", "/contact"], ["FAQ", "/faq"], ["Policy", "/booking-policy"]] as const;
  const routeLinks = routes.map(({ origin, destination, menuLabel }) => [menuLabel, `/routes/${routeSlug(origin, destination)}`] as const);
  const routeMenu = <details className="route-menu"><summary>Routes</summary><div>{routeLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link className="all-routes" href="/routes">All route information →</Link></div></details>;
  return <><header className="nav-shell"><Link className="brand" href="/"><span className="brand-mark">B</span><span>BARAKAH <em>AL MADINAH</em></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => label === "Routes" ? <span key={href}>{routeMenu}</span> : <Link href={href} key={href}>{label}</Link>)}</nav><Link className="button button-dark nav-cta" href="/contact#enquiry">Book your ride <span>↗</span></Link></header><nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}{routeLinks.map(([label, href]) => <Link className="route-link" href={href} key={href}>{label}</Link>)}</nav></>;
}

export function Footer() { return <BamFooter />; }

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-hero"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><div>{children}</div></section>;
}

export function Shell({ children }: { children: ReactNode }) { return <><BamNavigation />{children}<Footer /></>; }
