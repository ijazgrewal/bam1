"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/lead-submit";
import { getRiyadhDate } from "@/lib/schemas/enquiry";

type Status = "idle" | "submitting" | "sent" | "error";
const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-[#DCD2BE] bg-white px-3.5 text-[15px] text-[#203B30] shadow-sm outline-none transition focus:border-[#A87808] focus:ring-2 focus:ring-[#E5C378]/45";

export function AirportTransferEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const error = (name: string) => errors[name] && <p className="mt-1 text-xs font-medium text-[#9A3229]" role="alert">{errors[name]}</p>;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (status === "submitting") return;
    const form = event.currentTarget; const data = new FormData(form); const next: Record<string, string> = {};
    for (const name of ["name", "phone", "airport", "destination", "travelDate", "passengers"]) if (!String(data.get(name) ?? "").trim()) next[name] = "This field is required.";
    const phone = String(data.get("phone") ?? "").trim(); if (phone && !/^\+?[0-9][0-9 ()-]{6,29}$/.test(phone)) next.phone = "Enter a valid WhatsApp number.";
    if (!data.get("consent")) next.consent = "Please confirm that BAM may review your enquiry.";
    setErrors(next); setMessage(""); if (Object.keys(next).length) { setStatus("error"); setMessage("Please review the highlighted fields."); return; }
    setStatus("submitting");
    try {
      await submitLead({ tripType: "Airport Transfer", pickup: String(data.get("airport") ?? "").trim(), destination: String(data.get("destination") ?? "").trim(), passengers: String(data.get("passengers") ?? "").trim(), name: String(data.get("name") ?? "").trim(), phone, travelDate: String(data.get("travelDate") ?? ""), source: "enquiry" as const, consent: true, website: String(data.get("website") ?? "") });
      form.reset(); setErrors({}); setStatus("sent"); setMessage("Thank you. BAM has received your airport transfer enquiry and will review the journey details before responding.");
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again shortly."); }
  }
  return <form className="rounded-2xl border border-[#E1D5BC] bg-[#FAF7F0] p-5 shadow-sm sm:p-7" onSubmit={submit} noValidate>
    <p className="text-sm leading-6 text-[#596A63]">Airport Transfer is selected for this request. A submitted enquiry is not a booking.</p>
    <div className="mt-5 grid gap-x-4 gap-y-4 sm:grid-cols-2">
      <label className="text-sm font-bold text-[#29483B]" htmlFor="airport-name">Full name *<input className={fieldClass} id="airport-name" name="name" autoComplete="name" />{error("name")}</label><label className="text-sm font-bold text-[#29483B]" htmlFor="airport-phone">WhatsApp *<input className={fieldClass} id="airport-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+966 5X XXX XXXX" />{error("phone")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="airport">Airport *<select className={fieldClass} id="airport" name="airport" defaultValue=""><option value="" disabled>Select airport</option><option value="Jeddah Airport">Jeddah Airport</option><option value="Madinah Airport">Madinah Airport</option></select>{error("airport")}</label><label className="text-sm font-bold text-[#29483B]" htmlFor="airport-destination">Destination *<input className={fieldClass} id="airport-destination" name="destination" placeholder="Hotel, city or address" />{error("destination")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="airport-date">Date *<input className={fieldClass} id="airport-date" name="travelDate" type="date" min={getRiyadhDate()} />{error("travelDate")}</label><label className="text-sm font-bold text-[#29483B]" htmlFor="airport-passengers">Passengers *<input className={fieldClass} id="airport-passengers" name="passengers" inputMode="numeric" placeholder="For example, 4" />{error("passengers")}</label>
    </div>
    <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#40584D]" htmlFor="airport-consent"><input id="airport-consent" name="consent" type="checkbox" className="mt-1 size-4 shrink-0 accent-[#00291D]" /><span>I agree that BAM may use these details to review my airport transfer enquiry and contact me about it. See the <Link className="font-semibold text-[#705516] underline underline-offset-2" href="/privacy-policy">Privacy Policy</Link>. *</span></label>{error("consent")}<input className="sr-only" tabIndex={-1} name="website" autoComplete="off" aria-hidden="true" />
    <button className="mt-5 flex min-h-14 w-full items-center justify-center rounded-lg bg-[#E5C378] px-5 py-3 text-sm font-bold text-[#00291D] transition hover:bg-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your enquiry…" : "Request Airport Transfer Quote"}</button>{status === "sent" && <p className="mt-4 rounded-lg bg-[#E7F2EA] p-4 text-sm leading-6 text-[#176044]" role="status">{message}</p>}{status === "error" && <p className="mt-4 rounded-lg bg-[#FBE9E6] p-4 text-sm leading-6 text-[#9A3229]" role="alert">{message}</p>}
  </form>;
}
