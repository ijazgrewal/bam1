import { Handshake, Users, CalendarCheck, Car, ArrowRight, ShieldCheck } from "lucide-react";

const services = [
  ["01", "Private Airport Arrivals & Departures", "Serving Jeddah and Madinah airports with arrival coordination, luggage assistance and calm hotel transfers.", ["Flight-aware dispatch", "Terminal meet & greet", "Luggage assistance"]],
  ["02", "Intercity Sacred Corridor", "A composed, private journey between Makkah, Madinah, Jeddah and Taif, planned around your family’s pace.", ["Door-to-door chauffeur", "Prayer-time flexibility", "Comfort stops on request"]],
  ["03", "Makkah & Madinah Ziyarat", "Thoughtful half-day and full-day visits to sacred landmarks with a dedicated chauffeur at your family’s pace.", ["Private itinerary", "Elder-friendly boarding", "Flexible duration"]],
  ["04", "Taif & Meeqat Excursions", "A serene mountain excursion arranged around the moments that matter to your pilgrimage.", ["Scenic mountain route", "Meeqat planning", "Private return journey"]],
  ["05", "Family & Delegation Mobility", "Multi-vehicle coordination for extended families, group leaders and travel partners.", ["Vehicle matching", "Group coordination", "24/7 dispatch desk"]],
];

const routes = [["JED", "Makkah", "Jeddah Airport → Makkah hotel", "A seamless arrival transfer from terminal to sanctuary."], ["Makkah", "Madinah", "Makkah → Madinah", "Private long-distance comfort for the sacred corridor."], ["MED", "Madinah", "Madinah Airport → Madinah hotel", "A warm, coordinated welcome at Prince Mohammad Airport."], ["Makkah", "Taif", "Makkah → Taif & Meeqat", "A tailored mountain day with deliberate timing."]];

export default function Home() {
  return <main className="stitch-page">
    <div className="stitch-topbar"><div><span>✺</span> Spiritual Peace of Mind • Dedicated Chauffeurs • Operating Across Jeddah, Makkah, Madinah & Taif • 24/7 Dispatch</div><div className="topbar-extra">⌕ +966 12 550 8899　│　◷ Harmonized with Sacred Prayer Times</div></div>
    <header className="stitch-nav"><a className="stitch-brand" href="#top"><span className="brand-emblem">✦</span><span><b>BAM Transport</b><small>SAUDI ARABIA • VIP PILGRIM MOBILITY</small></span></a><nav><a href="#top">Home</a><a className="active" href="#services">Services & Routes</a><a href="#fleet">Premium Fleet</a><a href="#booking">Family Packages</a><a href="#partners">Travel Partners (B2B)</a><a href="#about">About BAM</a></nav><div className="nav-tools"><span className="support">▣ 24/7 Pilgrim Support</span><span className="language"><b>EN</b> | AR</span><a className="nav-button" href="#booking">Plan Family Journey</a></div></header>
    <section id="top" className="stitch-hero"><div className="hero-copy"><p className="stitch-pill">✦ Kingdom-Wide Chauffeur Fleet • GACA & MOT Licensed</p><h1>Pilgrimage Mobility Tailored to Every Sacred Milestone</h1><p>Comprehensive private transport services engineered for absolute punctuality, family ease, and spiritual tranquility across Jeddah, Makkah, Madinah, and Taif.</p><div className="hero-actions"><a href="#booking" className="gold-button">Reserve Itinerary　→</a><a href="#routes" className="dark-button">⌁　View Journey Matrix</a></div></div><aside className="quote-card"><h2>Ask for a Custom Quote</h2><form><input placeholder="Name" /><div className="tel"><select defaultValue="+92"><option>+92</option><option>+966</option><option>+44</option></select><input placeholder="Phone Number" /></div><input placeholder="Number of passengers" /><button type="button">SEND</button></form><p>Our fares below are fixed per vehicle. Use this form only for special requests, such as extra stops or very large groups.</p></aside></section>
    <section id="services" className="services-section"><div className="section-heading"><p>Sanctuary Fleet Standards</p><h2>Five Pillars of Sacred Mobility</h2><span>Bespoke itineraries engineered to ensure the dignity of elders, the security of infants, and unwavering focus on spiritual devotions.</span></div><div className="service-stack">{services.map(([number,title,text,points]) => <article className="service-row" key={number}><div className="service-number">{number}<span>Service Pillar</span></div><div><h3>{title}</h3><p>{text}</p><div className="service-points">{points.map(point => <span key={point}>✦ <b>{point}</b><small>Carefully coordinated for a more peaceful journey.</small></span>)}</div></div><a href="#booking">Explore service →</a></article>)}</div></section>
    <section id="routes" className="route-band"><div className="route-heading"><p>Journey Matrix</p><h2>Every route, mapped with care.</h2><span>Transparent private transport options for the essential journeys of Umrah and ziyarat.</span></div><div className="route-grid">{routes.map(([from,to,title,text]) => <article key={title}><div><b>{from}</b><i>→</i><b>{to}</b></div><h3>{title}</h3><p>{text}</p><a href="#booking">Request this route　→</a></article>)}</div></section>
    <section id="fleet" className="fleet-section"><div><p className="eyebrow-gold">Private fleet, thoughtful fit</p><h2>Space, comfort and dignity for every group.</h2><p>Our dispatch team matches your vehicle to passengers, luggage, mobility needs and route.</p></div><div className="fleet-cards"><article><span>01</span><h3>Executive Sedan</h3><p>Up to 3 pilgrims</p><small>Quiet and comfortable for couples or individual travellers.</small></article><article><span>02</span><h3>Premium SUV</h3><p>Up to 7 pilgrims</p><small>A spacious option for families with luggage.</small></article><article><span>03</span><h3>VIP Van</h3><p>Up to 12 pilgrims</p><small>Thoughtfully arranged for multi-generational groups.</small></article></div></section>
    <section id="booking" className="booking-section"><div className="section-heading"><p>Instant Itinerary Coordination</p><h2>Book Your Journey or Request Custom Itinerary</h2><span>Enter your travel milestones below. A dedicated BAM concierge will verify fleet availability and dispatch your formal confirmation.</span></div><form className="booking-form"><label>Lead Passenger Name *<input placeholder="e.g. Ibrahim Al-Mansoor" /></label><label>WhatsApp / Mobile Number *<input placeholder="+966 50 123 4567" /></label><label>Service Category *<select defaultValue=""><option value="" disabled>Select Service...</option><option>Private Airport Transfer</option><option>Intercity Transfer</option><option>Historical Ziyarat</option></select></label><label>Vehicle Preference *<select defaultValue="SUV"><option>SUV (Up to 7 PAX)</option><option>VIP Van (Up to 12 PAX)</option><option>Executive Sedan</option></select></label><label>Journey Date & Pickup Time *<input type="datetime-local" /></label><label>Flight No. or Hotel Pickup Details<input placeholder="e.g. SV123 or Fairmont Makkah" /></label><label className="full">Accessibility Needs / Special Notes<textarea rows={3} placeholder="Foldable wheelchairs, child seats, prayer stop preferences, or elder boarding support..." /></label><div className="booking-bottom"><span>▣ No upfront credit card required • Official dispatch confirmation sent via WhatsApp</span><button type="button">Confirm Route Request　➤</button></div></form></section>
    <section id="partners" className="partners-section">
      <div className="partners-card">
        <div className="partners-content">
          <p className="partners-eyebrow">
            <span>✦</span> FOR UMRAH AGENTS &amp; TRAVEL ORGANIZERS
          </p>
          <h2 className="partners-heading">
            Your Trusted Umrah Transport Partner in Saudi Arabia
          </h2>
          <p className="partners-desc">
            BAM Transport supports Umrah agents, group leaders, and travel organizers with coordinated private transportation across Jeddah, Makkah Mukarramah, Madinah Munawwarah, and Taif.
          </p>
          <div className="partners-benefits">
            <div className="partners-benefit-item">
              <div className="partners-benefit-icon">
                <Users size={17} />
              </div>
              <div className="partners-benefit-text">
                <strong>Dedicated group coordination</strong>
                <span>Direct fleet liaison for multi-vehicle pilgrim groups</span>
              </div>
            </div>
            <div className="partners-benefit-item">
              <div className="partners-benefit-icon">
                <CalendarCheck size={17} />
              </div>
              <div className="partners-benefit-text">
                <strong>Flexible itinerary planning</strong>
                <span>Schedules tailored to prayers, Meeqat &amp; Ziyarat</span>
              </div>
            </div>
            <div className="partners-benefit-item">
              <div className="partners-benefit-icon">
                <Car size={17} />
              </div>
              <div className="partners-benefit-text">
                <strong>Airport and intercity transfers</strong>
                <span>Jeddah, Makkah, Madinah &amp; Taif sacred corridor</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="partners-cta-card">
          <span className="partners-cta-badge">✦ B2B Partnership Desk</span>
          <div className="partners-handshake-icon">
            <Handshake size={28} />
          </div>
          <h3 className="partners-cta-title">Partner With BAM</h3>
          <p className="partners-cta-sub">
            Discuss transport arrangements for your Umrah groups
          </p>
          <a href="#booking" className="partners-cta-btn">
            Partner With BAM <ArrowRight size={15} />
          </a>
          <span className="partners-cta-guarantee">
            <ShieldCheck size={13} /> Priority B2B rates &amp; 24/7 dedicated dispatch
          </span>
        </aside>
      </div>
    </section>
    <footer id="about" className="stitch-footer"><div><b>BAM Transport</b><p>Refined, trustworthy chauffeur and family pilgrimage transit across the Holy Cities and Western Province.</p></div><div><h4>Sanctuary Desks</h4><p>King Abdulaziz Int&apos;l (JED)<br />Makkah Al-Mukarramah<br />Madinah Al-Munawwarah</p></div><div><h4>Sacred Routes</h4><p>Jeddah to Makkah<br />Makkah to Madinah<br />Historical Ziyarat Tours</p></div><div><h4>B2B & Enterprise</h4><p>Travel Agency Portal<br />Hotel Concierge Liaison<br />Fleet Specifications</p></div></footer>
  </main>;
}
