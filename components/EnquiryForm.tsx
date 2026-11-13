"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/lead-submit";

type Status = "idle" | "submitting" | "sent" | "error";
const locations = ["Jeddah Airport", "Makkah Mukarramah", "Madinah Munawwarah", "Madinah Airport", "Taif", "Badr", "Other location"];
const input = "!mt-2 !min-h-12 !rounded-lg !border-[#DCD2BE] !bg-white px-3.5 text-[15px] !text-[#203B30] shadow-sm outline-none transition focus:!border-[#A87808] focus:ring-2 focus:ring-[#E5C378]/45";
const guidance: Record<string, string> = { "Airport transfer": "Choose the airport and your confirmed hotel or destination.", "Intercity transfer": "Share your hotel or meeting point in each city.", "Ziyarat transport": "Include your preferred starting point and destination.", "Family transport package": "Tell BAM where your family journey begins and ends.", "Custom journey": "Start with your first pickup and final destination; use notes for additional stops." };

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const error = (name: string) => errors[name] && <p className="mt-1 text-xs font-medium text-[#9A3229]" role="alert">{errors[name]}</p>;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};
    for (const name of ["tripType", "passengers", "pickup", "destination", "travelDate", "name", "phone"]) if (!String(data.get(name) ?? "").trim()) next[name] = "This field is required.";
    const phone = String(data.get("phone") ?? "").trim();
    if (phone && !/^\+[1-9][0-9 ()-]{6,29}$/.test(phone)) next.phone = "Enter an international WhatsApp number starting with +.";
    if (!data.get("consent")) next.consent = "Please confirm that BAM may review your enquiry.";
    setErrors(next); setMessage("");
    if (Object.keys(next).length) { setStatus("error"); setMessage("Please review the highlighted fields."); return; }
    setStatus("submitting");
    try { await submitLead({ ...Object.fromEntries(data), source: "enquiry" as const }); form.reset(); setService(""); setErrors({}); setStatus("sent"); setMessage("Thank you for contacting BAM Transport. Your enquiry has been received and will be reviewed by our team. Transport arrangements are not confirmed until BAM contacts you."); }
    catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again shortly."); }
  }

  return <form className="enquiry-form max-[850px]:order-1 !p-6 sm:!p-8" onSubmit={submit} noValidate><p className="mb-7 text-sm leading-6 text-[#596A63]">Fields marked * are required. BAM reviews every request before confirming availability.</p><datalist id="bam-locations">{locations.map((location) => <option key={location} value={location} />)}</datalist>
    <h2 id="journey-details-heading" className="mb-4 font-serif text-2xl text-[#00291D]">Journey Details</h2><div className="form-grid mb-8 !gap-x-4 !gap-y-5"><label htmlFor="name">Full name *<input className={input} id="name" name="name" autoComplete="name" />{error("name")}</label><label htmlFor="phone">WhatsApp number *<input className={input} id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+966 5X XXX XXXX" />{error("phone")}</label></div>
    <fieldset aria-labelledby="journey-details-heading" className="border-0 p-0"><div className="form-grid !gap-x-4 !gap-y-5">
      <label htmlFor="tripType">Transport type *<select className={input} id="tripType" name="tripType" value={service} onChange={(event) => setService(event.target.value)}><option value="" disabled>Select a journey type</option>{Object.keys(guidance).map((item) => <option key={item}>{item}</option>)}</select>{error("tripType")}</label>
      <label htmlFor="passengers">Passengers *<select className={input} id="passengers" name="passengers" defaultValue=""><option value="" disabled>Select passenger count</option><option>1–3</option><option>4–6</option><option>7–11</option><option>12+</option></select>{error("passengers")}</label>
      {service && <p className="full -mt-1 rounded-lg bg-[#F7F2E8] px-4 py-3 text-sm leading-6 text-[#52655D]">{guidance[service]}</p>}
      <label htmlFor="pickup">Pickup location *<input className={input} id="pickup" name="pickup" list="bam-locations" placeholder="Search or enter pickup" />{error("pickup")}</label><label htmlFor="destination">Destination *<input className={input} id="destination" name="destination" list="bam-locations" placeholder="Search or enter destination" />{error("destination")}</label>
      <label htmlFor="travelDate">Travel date *<input className={input} id="travelDate" name="travelDate" type="date" min={new Date().toISOString().slice(0, 10)} />{error("travelDate")}</label><label htmlFor="vehicle">Vehicle preference <span className="font-normal text-[#596A63]">(optional)</span><select className={input} id="vehicle" name="vehicle" defaultValue={searchParams.get("vehicle") ?? "Let BAM Recommend"}><option>Let BAM Recommend</option><option>GMC Yukon XL</option><option>Hyundai Staria</option><option>Toyota Hiace</option><option>Mercedes-Benz Sprinter</option></select></label>
      <label htmlFor="notes" className="full">Additional notes <span className="font-normal text-[#596A63]">(optional)</span><textarea className={`${input} !min-h-28 py-3`} id="notes" name="notes" rows={4} placeholder="Add practical family requirements or requested stops. Do not include passport, ID, or payment-card details." /></label>
    </div></fieldset>
    <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-[#40584D]" htmlFor="consent"><input id="consent" name="consent" type="checkbox" className="mt-1 size-4 shrink-0 accent-[#00291D]" /><span>I agree that BAM may use these details to review my transport enquiry and contact me about it. See the <Link className="font-semibold text-[#705516] underline underline-offset-2" href="/privacy-policy">Privacy Policy</Link>. *</span></label>{error("consent")}<input className="sr-only" tabIndex={-1} name="website" autoComplete="off" aria-hidden="true" />
    <button className="mt-6 flex min-h-14 w-full items-center justify-center rounded-lg bg-[#E5C378] px-5 py-3 text-sm font-bold text-[#00291D] transition hover:bg-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending your enquiry…" : "Request My Transport Quote"}</button>{status === "sent" && <p className="mt-4 rounded-lg bg-[#E7F2EA] p-4 text-sm leading-6 text-[#176044]" role="status">{message}</p>}{status === "error" && <p className="mt-4 rounded-lg bg-[#FBE9E6] p-4 text-sm leading-6 text-[#9A3229]" role="alert">{message}</p>}
  </form>;
}
