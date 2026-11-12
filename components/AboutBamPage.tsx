import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CarFront, Compass, HeartHandshake, MapPin, MessagesSquare, Plane, Route, Users } from "lucide-react";
import { approvedFleet } from "@/lib/fleet-data";
import { siteConfig } from "@/lib/site-config";
import { siteUrl } from "@/lib/site-url";

const serviceLinks = [
  { title: "Airport Transfers", text: "Private arrival and departure coordination around confirmed flights, hotels, luggage and onward plans.", href: "/airport-transfers", icon: Plane },
  { title: "Intercity Transportation", text: "Private travel between Makkah Mukarramah, Madinah Munawwarah and other agreed Saudi destinations.", href: "/intercity-transfers", icon: Route },
  { title: "Ziyarat Transportation", text: "Considered private transport for preferred Ziyarat places, route order and practical timings.", href: "/ziyarat-transport", icon: MapPin },
  { title: "Family & Group Transport", text: "Journey planning for families and groups with passenger, luggage and practical needs reviewed together.", href: "/family-group-transportation", icon: Users },
] as const;

const commitments = [
  { title: "Advance planning", text: "Share confirmed journey details early so pickup locations, routes, timings and transport needs can be reviewed before travel.", icon: CalendarCheck },
  { title: "Clear communication", text: "BAM keeps the practical information at the centre of each request, from pickup instructions to agreed journey details.", icon: MessagesSquare },
  { title: "Support for agreed arrangements", text: "When an agreed journey needs practical attention, BAM provides a clear route for customers to raise the relevant transport detail.", icon: HeartHandshake },
] as const;

export function AboutBamPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteUrl,
        telephone: siteConfig.phone,
        description: "Private Umrah transportation coordination for families, elderly pilgrims, groups and travel partners across Saudi Arabia.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "About BAM Transport", item: `${siteUrl}/about-us` },
        ],
      },
    ],
  };

  return <main className="overflow-hidden bg-[#FAF7F0] text-[#00291D]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

    <section className="bg-[#063629] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_.92fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#E5C378]">About BAM Transport</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-[#FAF7F0] sm:text-5xl lg:text-6xl">About BAM Transport — Your Private Umrah Mobility Partner</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#DDE8E2] sm:text-lg">BAM coordinates private transport around the real moments of an Umrah itinerary: arrivals, hotel journeys, intercity travel, Ziyarat visits and return departures across Saudi Arabia.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#E5C378] px-6 py-3 text-[15px] font-bold text-[#00291D] transition hover:-translate-y-0.5 hover:bg-[#FAF7F0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E5C378]" href="/contact">Request a Private Transport Quote</Link>
            <Link className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#1A725B] px-6 py-3 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#315E50] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E5C378]" href="/our-fleet">Explore the Fleet</Link>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-[#E5C378]/45 bg-[#00291D] shadow-2xl shadow-black/20">
          <Image src="/package-vip.webp" alt="BAM Transport private fleet supporting an Umrah family journey" width={1440} height={900} className="aspect-[1.16] w-full object-cover" priority />
          <figcaption className="flex items-start gap-3 p-6 text-sm leading-6 text-[#DDE8E2]"><CarFront className="mt-0.5 size-5 shrink-0 text-[#E5C378]" aria-hidden="true" />Private transport requests are reviewed around the people, route and practical arrangements involved.</figcaption>
        </figure>
      </div>
    </section>

    <section className="px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Who we are</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Private Umrah mobility, planned around people.</h2></div>
        <div className="border-l-2 border-[#E5C378] pl-6 text-base leading-7 text-[#52675E] sm:pl-8"><p>BAM Transport focuses on private Umrah transportation for families, elderly pilgrims, travel groups and travel professionals. Instead of treating a journey as a generic vehicle request, BAM begins with the actual itinerary, passenger needs, luggage and confirmed locations.</p><p className="mt-4">Planning conversations can cover Jeddah, Makkah Mukarramah, Madinah Munawwarah and Taif, with connected journey requirements reviewed before arrangements are confirmed.</p></div>
      </div>
    </section>

    <section className="bg-[#F3EEE3] px-6 py-16 sm:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">What guides BAM</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">The details that matter before a journey begins.</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="border-t-2 border-[#D2A343] pt-6"><Users className="size-9 text-[#A87808]" aria-hidden="true" /><h3 className="mt-5 font-serif text-3xl">Family-First Coordination</h3><p className="mt-3 text-sm leading-6 text-[#52675E]">Family groups can have different arrival times, luggage needs and walking rhythms. BAM asks for those practical details so the requested arrangement reflects the people travelling.</p></article>
          <article className="border-t-2 border-[#D2A343] pt-6"><MessagesSquare className="size-9 text-[#A87808]" aria-hidden="true" /><h3 className="mt-5 font-serif text-3xl">Clear Communication</h3><p className="mt-3 text-sm leading-6 text-[#52675E]">Pickup locations, destination details and operational questions are clearer when they are discussed before travel—not guessed from a generic booking form.</p></article>
          <article className="border-t-2 border-[#D2A343] pt-6"><Compass className="size-9 text-[#A87808]" aria-hidden="true" /><h3 className="mt-5 font-serif text-3xl">Responsible Journey Support</h3><p className="mt-3 text-sm leading-6 text-[#52675E]">BAM reviews available options and practical timing before confirmation, then keeps a clear route open for attention to agreed transport arrangements.</p></article>
        </div>
      </div>
    </section>

    <section className="px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-2xl bg-[#0A4938]"><Image src="/benefit-family-coordinator.webp" alt="BAM coordinator assisting a family Umrah transport plan" width={1200} height={900} className="aspect-[4/3] w-full object-cover" /></div>
        <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Our purpose and approach</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Calmer transport planning around a meaningful journey.</h2><p className="mt-5 text-base leading-7 text-[#52675E]">Umrah travel often includes airport arrivals, hotel check-ins, sacred-site visits and journeys between cities. BAM exists to help bring those transport moments into one clear, private plan.</p><p className="mt-4 text-base leading-7 text-[#52675E]">Our approach is simple: listen to the journey details, review practical vehicle and routing requirements, and communicate the arrangement directly before travel. A request is not treated as an automatic confirmation.</p><Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#755A17] underline decoration-[#D2A343] underline-offset-8 transition hover:text-[#00291D]" href="/custom-journey-planning">Explore custom journey planning <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="bg-[#063629] px-6 py-16 text-[#FAF7F0] sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl"><div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#E5C378]">Private transport services</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Useful support across an Umrah itinerary.</h2></div><p className="max-w-2xl text-base leading-7 text-[#DDE8E2]">Explore the existing BAM services to understand the planning information that is useful for each type of journey.</p></div>
        <div className="mt-10 grid gap-x-10 divide-y divide-[#E5C378]/25 border-y border-[#E5C378]/25 md:grid-cols-2 md:divide-y-0">
          {serviceLinks.map(({ title, text, href, icon: Icon }) => <article className="group py-6 md:border-b md:border-[#E5C378]/25 md:[&:nth-last-child(-n+2)]:border-b-0" key={title}><div className="flex gap-4"><span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#E5C378]/60 text-[#E5C378]"><Icon size={20} aria-hidden="true" /></span><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#DDE8E2]">{text}</p><Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#E5C378] transition group-hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E5C378]" href={href}>Explore service <span aria-hidden="true">→</span></Link></div></div></article>)}
        </div>
      </div>
    </section>

    <section className="px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Approved fleet and coverage</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Vehicle options reviewed for the journey in front of you.</h2><p className="mt-5 text-base leading-7 text-[#52675E]">BAM does not publish assumed capacity claims. The appropriate available vehicle is reviewed against the confirmed group, luggage, route and practical journey requirements.</p></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{approvedFleet.map((vehicle) => <Link className="group overflow-hidden rounded-xl border border-[#E1D5BC] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#C99B2D] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#A87808]" href={`/fleet/${vehicle.slug}`} key={vehicle.slug}><Image src={vehicle.image} alt={`${vehicle.name} in the BAM approved private transport fleet`} width={900} height={640} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /><div className="p-5"><h3 className="font-serif text-2xl">{vehicle.name}</h3><p className="mt-2 text-sm leading-6 text-[#52675E]">{vehicle.use}</p><span className="mt-4 inline-flex text-sm font-bold text-[#755A17]">View fleet details <span className="ml-2" aria-hidden="true">→</span></span></div></Link>)}</div>
        <div className="mt-10 grid gap-6 rounded-2xl bg-[#F3EEE3] p-7 sm:p-9 lg:grid-cols-[.75fr_1.25fr] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Saudi Arabia coverage</p><h3 className="mt-3 font-serif text-3xl">Journeys centred around the Holy Cities.</h3></div><div className="flex flex-wrap gap-3">{["Jeddah", "Makkah Mukarramah", "Madinah Munawwarah", "Taif"].map((place) => <span className="rounded-full border border-[#D4B66B] bg-white px-4 py-2 text-sm font-semibold text-[#254B3E]" key={place}>{place}</span>)}</div></div>
      </div>
    </section>

    <section className="bg-[#F3EEE3] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Our commitment to every journey</p><h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Thoughtful planning before, and clear communication throughout.</h2><p className="mt-5 text-base leading-7 text-[#52675E]">BAM does not make unsupported guarantees or publish invented testimonials. The commitment is a practical one: review the details that affect a journey and communicate the agreed arrangement clearly.</p></div><div className="divide-y divide-[#D9CFBC] border-y border-[#D9CFBC]">{commitments.map(({ title, text, icon: Icon }) => <article className="grid gap-4 py-5 sm:grid-cols-[52px_1fr]" key={title}><span className="flex size-11 items-center justify-center rounded-full bg-[#E5C378] text-[#063629]"><Icon size={21} aria-hidden="true" /></span><div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#52675E]">{text}</p></div></article>)}</div></div>
    </section>
  </main>;
}
