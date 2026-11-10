"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/lead-submit";

type Status = "idle" | "submitting" | "sent" | "error";

const inputClass = "mt-2 min-h-12 w-full rounded-lg border border-[#DCD2BE] bg-white px-3.5 text-[15px] text-[#203B30] shadow-sm outline-none transition focus:border-[#A87808] focus:ring-2 focus:ring-[#E5C378]/45";

export function PartnerEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const error = (name: string) => errors[name] && <p className="mt-1 text-xs font-medium text-[#9A3229]" role="alert">{errors[name]}</p>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const name of ["agencyName", "name", "phone", "email", "partnershipType", "monthlyRequests"]) if (!String(data.get(name) ?? "").trim()) next[name] = "This field is required.";
    const phone = String(data.get("phone") ?? "").trim();
    if (phone && !/^\+[1-9][0-9 ()-]{6,29}$/.test(phone)) next.phone = "Enter an international WhatsApp number starting with +.";
    if (!data.get("consent")) next.consent = "Please confirm that BAM may review your enquiry.";
    setErrors(next);
    setMessage("");
    if (Object.keys(next).length) { setStatus("error"); setMessage("Please review the highlighted fields."); return; }

    setStatus("submitting");
    try {
      await submitLead({
        tripType: "B2B partnership enquiry",
        pickup: "Partner service coverage",
        destination: String(data.get("businessRequirements") ?? "") || "To be discussed",
        passengers: String(data.get("monthlyRequests") ?? ""),
        name: String(data.get("name") ?? "").trim(),
        phone,
        email: String(data.get("email") ?? "").trim(),
        partnershipType: String(data.get("partnershipType") ?? ""),
        monthlyRequests: String(data.get("monthlyRequests") ?? ""),
        agencyName: String(data.get("agencyName") ?? "").trim(),
        businessRequirements: String(data.get("businessRequirements") ?? "").trim(),
        notes: String(data.get("businessRequirements") ?? "").trim(),
        source: "partner" as const,
        consent: true,
        website: String(data.get("website") ?? ""),
      });
      form.reset();
      setErrors({});
      setStatus("sent");
      setMessage("Thank you. BAM has received your partnership enquiry and will review the details with your organisation.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again shortly.");
    }
  }

  return <form className="rounded-2xl border border-[#E1D5BC] bg-[#FAF7F0] p-6 shadow-sm sm:p-8" onSubmit={submit} noValidate>
    <p className="text-sm leading-6 text-[#596A63]">Fields marked * are required. BAM reviews every partnership enquiry before responding.</p>
    <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <label className="text-sm font-bold text-[#29483B]" htmlFor="agencyName">Agency or organisation name *<input className={inputClass} id="agencyName" name="agencyName" autoComplete="organization" />{error("agencyName")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="name">Contact person *<input className={inputClass} id="name" name="name" autoComplete="name" />{error("name")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="phone">WhatsApp number *<input className={inputClass} id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+966 5X XXX XXXX" />{error("phone")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="email">Business email *<input className={inputClass} id="email" name="email" type="email" autoComplete="email" placeholder="name@agency.com" />{error("email")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="partnershipType">Partnership type *<select className={inputClass} id="partnershipType" name="partnershipType" defaultValue=""><option value="" disabled>Select an option</option><option>Umrah travel agency</option><option>Tour operator</option><option>Group leader or organiser</option><option>Hotel or accommodation partner</option><option>Other travel business</option></select>{error("partnershipType")}</label>
      <label className="text-sm font-bold text-[#29483B]" htmlFor="monthlyRequests">Estimated monthly transport requests *<select className={inputClass} id="monthlyRequests" name="monthlyRequests" defaultValue=""><option value="" disabled>Select an estimate</option><option>1–5</option><option>6–15</option><option>16–30</option><option>31+</option></select>{error("monthlyRequests")}</label>
      <label className="text-sm font-bold text-[#29483B] sm:col-span-2" htmlFor="businessRequirements">Business requirements <span className="font-normal text-[#596A63]">(optional)</span><textarea className={`${inputClass} min-h-28 py-3`} id="businessRequirements" name="businessRequirements" rows={4} placeholder="Share routes, group needs, travel periods or operational requirements. Do not include passport, ID or payment-card details." /></label>
    </div>
    <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#40584D]" htmlFor="consent"><input id="consent" name="consent" type="checkbox" className="mt-1 size-4 shrink-0 accent-[#00291D]" /><span>I agree that BAM may use these details to review my partnership enquiry and contact me about it. See the <Link className="font-semibold text-[#705516] underline underline-offset-2" href="/privacy-policy">Privacy Policy</Link>. *</span></label>{error("consent")}<input className="sr-only" tabIndex={-1} name="website" autoComplete="off" aria-hidden="true" />
    <button className="mt-6 flex min-h-14 w-full items-center justify-center rounded-lg bg-[#E5C378] px-5 py-3 text-sm font-bold text-[#00291D] transition hover:bg-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your enquiry…" : "Discuss a Partnership"}</button>
    {status === "sent" && <p className="mt-4 rounded-lg bg-[#E7F2EA] p-4 text-sm leading-6 text-[#176044]" role="status">{message}</p>}{status === "error" && <p className="mt-4 rounded-lg bg-[#FBE9E6] p-4 text-sm leading-6 text-[#9A3229]" role="alert">{message}</p>}
  </form>;
}
