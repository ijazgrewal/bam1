"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/lead-submit";
import { whatsappUrl } from "@/lib/site-config";

export function HeroLeadForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const openDatePicker = (input: HTMLInputElement) => {
    const picker = input as HTMLInputElement & { showPicker?: () => void };
    try { picker.showPicker?.(); } catch { /* Native picker is not available in every browser. */ }
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      tripType: String(data.get("tripType") ?? "Airport transfer"),
      pickup: String(data.get("pickup") ?? ""),
      destination: String(data.get("destination") ?? ""),
      passengers: String(data.get("passengers") ?? ""),
      name: String(data.get("fullName") ?? "").trim(),
      phone: String(data.get("phone") ?? ""),
      travelDate: String(data.get("travelDate") ?? ""),
      vehicle: String(data.get("vehicle") ?? ""),
      source: "hero" as const,
      consent: data.get("consent") === "on",
    };

    try {
      await submitLead(payload);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <aside className="hero-lead-card">
      <p>Private transport support</p>
      <h2>Get a Free Quote</h2>
      <span>Share your journey details and BAM will reply on WhatsApp.</span>{/* TODO(BAM): add confirmed WhatsApp response-time SLA. */}
      <form onSubmit={submit}>
        <div className="hero-lead-grid">
          <label className="hero-lead-full"><span>Transport type</span><select name="tripType" defaultValue="Airport transfer"><option>Airport transfer</option><option>Intercity transfer</option><option>Ziyarat transport</option></select></label>
          <label className="hero-lead-full"><span>Full name</span><input id="hero-full-name" name="fullName" required autoComplete="name" placeholder="Full name" /></label>
          <label><span>Pick-up location</span><input id="hero-pickup" name="pickup" required placeholder="Pick-up location" /></label>
          <label><span>Drop-off location</span><input id="hero-destination" name="destination" required placeholder="Drop-off location" /></label>
          <label><span>Travel date</span><input id="hero-travel-date" name="travelDate" required type="date" onClick={(event) => openDatePicker(event.currentTarget)} /></label>
          <label><span>Passengers</span><select id="hero-passengers" name="passengers" required defaultValue=""><option value="" disabled>Passengers</option><option>1–3</option><option>4–6</option><option>7–11</option><option>12+</option></select></label>
          <label><span>WhatsApp number</span><input id="hero-phone" name="phone" required inputMode="tel" autoComplete="tel" placeholder="WhatsApp number" /></label>
          <label><span>Vehicle preference <em>(optional)</em></span><select name="vehicle" defaultValue=""><option value="">Let BAM recommend</option><option>GMC Yukon XL</option><option>Hyundai Staria</option><option>Toyota Hiace</option><option>Mercedes-Benz Sprinter</option></select></label>
        </div>
        <input className="sr-only" tabIndex={-1} name="website" autoComplete="off" aria-hidden="true" />
        <label className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#d6e0da]"><input className="mt-1 size-3.5 shrink-0 accent-[#e5c378]" name="consent" type="checkbox" required /><span>I agree that BAM may review my enquiry and contact me about it. See the <Link className="font-bold text-[#e5c378] underline underline-offset-2" href="/privacy-policy">Privacy Policy</Link>.</span></label>
        <button className="mt-5" type="submit">Request Your Quote</button>
        {status === "sent" && <p className="hero-form-success" role="status">Thank you. BAM will review your request. <a href={whatsappUrl} target="_blank" rel="noreferrer">Continue on WhatsApp</a>.</p>}
        {status === "error" && <p className="hero-form-error" role="alert">We could not send your request. <a href={whatsappUrl} target="_blank" rel="noreferrer">Send it on WhatsApp instead</a>.</p>}
      </form>
      <a className="hero-whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer">Prefer WhatsApp? Start a chat →</a>
    </aside>
  );
}
