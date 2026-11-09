"use client";

import { FormEvent, useState } from "react";

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
    const payload = Object.fromEntries(data);
    payload.name = String(data.get("fullName") ?? "").trim();
    payload.tripType = "Private Umrah transport";
    payload.consent = "true";

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <aside className="hero-lead-card">
      <p>Personalised transport support</p>
      <h2>Get a Free Quote</h2>
      <span>Share your journey details and BAM will review your request.</span>
      <form onSubmit={submit}>
        <div className="hero-lead-grid">
          <label className="hero-lead-full"><span>Full name</span><input name="fullName" required autoComplete="name" placeholder="Full name" /></label>
          <label><span>Pick-up location</span><input name="pickup" required placeholder="Pick-up location" /></label>
          <label><span>Drop-off location</span><input name="destination" required placeholder="Drop-off location" /></label>
          <label><span>Travel date</span><input name="travelDate" required type="date" onClick={(event) => openDatePicker(event.currentTarget)} /></label>
          <label><span>Passengers</span><select name="passengers" required defaultValue=""><option value="" disabled>Passengers</option><option>1–3</option><option>4–6</option><option>7–11</option><option>12+</option></select></label>
          <label><span>WhatsApp number</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="WhatsApp number" /></label>
          <label><span>Vehicle preference</span><select name="vehicle" defaultValue=""><option value="" disabled>Select a vehicle</option><option>GMC Yukon XL</option><option>Hyundai Staria</option><option>Toyota Hiace</option><option>Sprinter</option><option>Recommend a suitable vehicle</option></select></label>
        </div>
        <button type="submit">Request Your Quote</button>
        {status === "sent" && <p className="hero-form-success" role="status">Thank you. BAM will review your request and contact you.</p>}
        {status === "error" && <p className="hero-form-error" role="alert">We could not send your request. Please try again.</p>}
      </form>
    </aside>
  );
}
