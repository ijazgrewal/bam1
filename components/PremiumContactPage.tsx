import Link from "next/link";
import { CheckCircle2, Minus, Plus, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { EnquiryForm } from "./EnquiryForm";

const faqs = [
  ["When is my transport confirmed?", "An enquiry is reviewed first. BAM confirms practical availability, vehicle suitability and agreed details directly."],
  ["What should I include in my enquiry?", "Share your pickup, destination, travel date, passenger count and any luggage or family requirements."],
  ["Can BAM help with airport and intercity journeys?", "Yes. Explore BAM's airport, intercity, Ziyarat and family transport services before sending your request."],
  ["Do I need to know the right vehicle?", "No. Leave the vehicle preference as Let BAM Recommend and the team will review suitable options around your group and route."],
];

export function PremiumContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
  const schema = { "@context": "https://schema.org", "@type": "ContactPage", name: `Contact ${siteConfig.name}`, description: "Request private Umrah transport in Saudi Arabia.", mainEntity: { "@type": "LocalBusiness", name: siteConfig.name, telephone: siteConfig.phone, contactPoint: { "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "customer service", availableLanguage: "English" } } };

  return <main className="contact-premium">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="contact-hero !px-6 !py-12 sm:!py-16">
      <p>Contact BAM Transport</p>
      <h1>Let&apos;s Plan Your Private Journey</h1>
      <span>Whether you need an airport transfer, intercity transportation, Ziyarat, or a complete family transport plan, share your details with BAM and our team will review your request.</span>
      <div><a className="gold-button !inline-flex !min-w-[205px] !justify-center !text-sm !font-bold" href={whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp →</a><a className="contact-outline !min-w-[205px] !justify-center !text-sm !font-bold" href="#enquiry">Request a Quote</a></div>
    </section>
    <section className="contact-form-section !pt-12 sm:!pt-14" id="enquiry" aria-labelledby="enquiry-heading">
      <aside className="max-[850px]:order-2 rounded-2xl border border-[#E1D5BC] bg-[#FFFDF8] p-6 shadow-sm sm:p-8">
        <p>Before you send your enquiry</p>
        <h2 id="enquiry-heading">What We Need to Plan Your Journey</h2>
        <span>Share a few essential details to help BAM review suitable transport arrangements for your family.</span>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#40584D]">{["Your pickup and destination", "Travel date and passenger count", "Luggage or mobility needs", "Airport arrival information, where relevant"].map((item) => <li className="flex gap-3" key={item}><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#A87808]" aria-hidden="true" />{item}</li>)}</ul>
        <div className="mt-6 border-t border-[#E7DDCA] pt-5"><ShieldCheck className="size-6 text-[#A87808]" aria-hidden="true" /><h3 className="mt-3 font-serif text-xl text-[#00291D]">Your details, handled carefully</h3><p className="mt-2 text-sm leading-6 text-[#596A63]">Do not include passport, ID or payment-card details in your enquiry.</p></div>
        <nav aria-label="Explore BAM services"><Link href="/services">Explore services →</Link><Link href="/routes">Explore private routes →</Link><Link href="/fleet">View approved fleet →</Link></nav>
      </aside>
      <EnquiryForm />
    </section>
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:pb-24">
      <div className="rounded-2xl bg-[#F7F2E8] p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#A87808]">Contact FAQs</p><h2 className="mt-3 font-serif text-4xl leading-tight text-[#00291D]">Helpful answers before you enquire.</h2><div className="mt-7 grid gap-3 xl:grid-cols-2">{faqs.map(([question, answer]) => <details className="group rounded-xl border border-[#E1D5BC] bg-white p-5" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-[#00291D]"><span>{question}</span><Plus className="size-5 shrink-0 text-[#A87808] group-open:hidden" aria-hidden="true" /><Minus className="hidden size-5 shrink-0 text-[#A87808] group-open:block" aria-hidden="true" /></summary><p className="mt-3 text-sm leading-6 text-[#596A63]">{answer}</p></details>)}</div></div>
    </section>
  </main>;
}
