"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const menus = [
  { label: "Our Services", links: [["Airport Transfers", "/airport-transfers"], ["Intercity Transfers", "/intercity-transfers"], ["Private Ziyarat Transportation", "/ziyarat-transport"], ["Family & Group Transportation", "/family-group-transportation"]] },
  { label: "Routes", links: [["Jeddah Airport to Makkah", "/jeddah-airport-to-makkah-transfer"], ["Makkah to Madinah", "/makkah-to-madinah-private-transfer"], ["Madinah to Makkah", "/madinah-to-makkah-private-transfer"], ["Madinah Airport Transfers", "/madinah-airport-transfers"], ["Taif Transportation", "/taif-private-transport"]] },
  { label: "Ziyarat", links: [["Makkah Ziyarat", "/makkah-ziyarat-transport"], ["Madinah Ziyarat", "/madinah-ziyarat-transport"], ["Taif Ziyarat", "/taif-ziyarat"]] },
  { label: "Umrah Transport", links: [["Family Umrah Transport Packages", "/family-umrah-transport-packages"], ["Elderly-Friendly Umrah Transport", "/elderly-friendly-umrah-transport"], ["VIP Family Umrah Transport", "/vip-umrah-family-transport"], ["Custom Journey Planning", "/custom-journey-planning"]] },
];

export function BamNavigation() {
  const pathname = usePathname();
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDesktopDropdown = (label: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
    setOpenDesktopMenu(label);
  };

  const scheduleDesktopClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDesktopMenu(null), 180);
  };

  const closeMenus = () => {
    setOpenDesktopMenu(null);
    setOpenMobileMenu(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!headerRef.current?.contains(target) && !mobileMenuRef.current?.contains(target)) {
        closeMenus();
        setMobile(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleMobileToggle = () => {
    setMobile((isOpen) => {
      if (isOpen) setOpenMobileMenu(null);
      return !isOpen;
    });
    setOpenDesktopMenu(null);
  };

  const handleNavigation = () => {
    closeMenus();
    setMobile(false);
  };

  const isActivePath = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <div className="stitch-topbar">
        <div>✺ Spiritual Peace of Mind • Dedicated Chauffeurs • 24/7 Dispatch</div>
        <div className="topbar-extra">International WhatsApp contact available on request</div>
      </div>
      <header ref={headerRef} className="stitch-nav bam-nav">
        <Link className="stitch-brand" href="/" onClick={handleNavigation}>
          <Image className="brand-logo" src="/bam-logo.png" alt="Barakah Al Madinah" width={42} height={42} priority />
          <span><b>BAM Transport</b><small>SAUDI ARABIA • VIP PILGRIM MOBILITY</small></span>
        </Link>
        <button className="mobile-toggle" type="button" aria-label={mobile ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobile} aria-controls="bam-mobile-menu" onClick={handleMobileToggle}>
          {mobile ? <X aria-hidden="true" size={21} strokeWidth={2.25} /> : <Menu aria-hidden="true" size={21} strokeWidth={2.25} />}
        </button>
        <nav aria-label="Primary navigation" className="desktop-menu">
          <Link className={isActivePath("/") ? "active" : undefined} href="/" onClick={handleNavigation}>Home</Link>
          {menus.map((menu) => (
            <div
              className="nav-menu"
              key={menu.label}
              onMouseEnter={() => openDesktopDropdown(menu.label)}
              onMouseLeave={scheduleDesktopClose}
              onFocus={() => openDesktopDropdown(menu.label)}
            >
              <button className={`nav-menu-trigger${menu.links.some(([, href]) => isActivePath(href)) ? " active" : ""}`} aria-expanded={openDesktopMenu === menu.label} onClick={() => setOpenDesktopMenu(openDesktopMenu === menu.label ? null : menu.label)}>
                <span>{menu.label}</span><ChevronDown className="nav-chevron" aria-hidden="true" size={15} strokeWidth={2.25} />
              </button>
              {openDesktopMenu === menu.label && (
                <div className="nav-popover">
                  {menu.links.map(([label, href]) => <Link className={isActivePath(href) ? "active" : undefined} key={href} href={href} onClick={handleNavigation}>{label}</Link>)}
                </div>
              )}
            </div>
          ))}
          <Link className={isActivePath("/our-fleet") ? "active" : undefined} href="/our-fleet" onClick={handleNavigation}>Our Fleet</Link>
          <Link className={isActivePath("/partner-with-bam") ? "active" : undefined} href="/partner-with-bam" onClick={handleNavigation}>Partner With BAM</Link>
          <Link className={isActivePath("/contact") ? "active" : undefined} href="/contact" onClick={handleNavigation}>Contact</Link>
        </nav>
        <Link className="nav-button desktop-cta" href="/contact#enquiry" onClick={handleNavigation}>Book Your Transport</Link>
      </header>
      <nav ref={mobileMenuRef} id="bam-mobile-menu" aria-label="Mobile navigation" className={`bam-mobile-menu ${mobile ? "open" : ""}`}>
        {menus.map((menu) => (
          <details className={menu.links.some(([, href]) => isActivePath(href)) ? "active" : undefined} key={menu.label} open={openMobileMenu === menu.label} onToggle={(event) => setOpenMobileMenu(event.currentTarget.open ? menu.label : null)}>
            <summary>{menu.label}</summary>
            {menu.links.map(([label, href]) => <Link className={isActivePath(href) ? "active" : undefined} key={href} href={href} onClick={handleNavigation}>{label}</Link>)}
          </details>
        ))}
        <Link className={isActivePath("/") ? "active" : undefined} href="/" onClick={handleNavigation}>Home</Link>
        <Link className={isActivePath("/our-fleet") ? "active" : undefined} href="/our-fleet" onClick={handleNavigation}>Our Fleet</Link>
        <Link className={isActivePath("/partner-with-bam") ? "active" : undefined} href="/partner-with-bam" onClick={handleNavigation}>Partner With BAM</Link>
        <Link className={isActivePath("/contact") ? "active" : undefined} href="/contact" onClick={handleNavigation}>Contact</Link>
        <Link className="nav-button" href="/contact#enquiry" onClick={handleNavigation}>Book Your Transport</Link>
      </nav>
      <a className="floating-whatsapp" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label={`Chat with ${siteConfig.name} on WhatsApp at ${siteConfig.phone}`}>
        <svg aria-hidden="true" viewBox="0 0 448 512" focusable="false"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.5-138c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg><span className="floating-whatsapp-label">WhatsApp</span>
      </a>
    </>
  );
}
