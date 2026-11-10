"use client";

import { FormEvent, useMemo, useState } from "react";
import { submitLead } from "@/lib/lead-submit";

type Stop = { pickup: string; dropoff: string; date: string; ziyarat: string; notes: string };
type PlannerData = {
  journeyType: string; arrivalDate: string; departureDate: string; arrivalLocation: string;
  destinations: string; passengers: string; luggage: string; vehicle: string;
  fullName: string; whatsapp: string; email: string; notes: string; website: string; consent: boolean;
};

const emptyStop = (): Stop => ({ pickup: "", dropoff: "", date: "", ziyarat: "", notes: "" });
const steps = ["Journey type", "Travel details", "Routes & stops", "Vehicle", "Contact & review"];
const locations = ["Jeddah Airport", "Makkah Mukarramah", "Madinah Munawwarah", "Madinah Airport", "Taif", "Badr", "Hotel / custom address"];

export function CustomJourneyPlanner() {
  const [step, setStep] = useState(0);
  const [stops, setStops] = useState<Stop[]>([emptyStop()]);
  const [data, setData] = useState<PlannerData>({ journeyType: "", arrivalDate: "", departureDate: "", arrivalLocation: "", destinations: "", passengers: "", luggage: "", vehicle: "", fullName: "", whatsapp: "", email: "", notes: "", website: "", consent: false });
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const update = (field: keyof PlannerData, value: string | boolean) => setData((current) => ({ ...current, [field]: value }));
  const updateStop = (index: number, field: keyof Stop, value: string) => setStops((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, [field]: value } : item));
  const moveStop = (index: number, direction: -1 | 1) => setStops((current) => { const target = index + direction; if (target < 0 || target >= current.length) return current; const copy = [...current]; [copy[index], copy[target]] = [copy[target], copy[index]]; return copy; });

  function validate(currentStep: number) {
    if (currentStep === 0 && !data.journeyType) return "Please choose a journey type.";
    if (currentStep === 1) {
      if (!data.arrivalDate || !data.arrivalLocation || !data.destinations || !data.passengers || !data.luggage) return "Please complete all required travel details.";
      if (data.arrivalDate < today) return "Arrival date cannot be in the past.";
      if (data.departureDate && data.departureDate < data.arrivalDate) return "Departure date must be on or after the arrival date.";
    }
    if (currentStep === 2 && stops.some((item) => !item.pickup || !item.dropoff || !item.date)) return "Complete the pickup, drop-off and date for every transfer.";
    if (currentStep === 3 && !data.vehicle) return "Please select a vehicle preference.";
    if (currentStep === 4) {
      if (!data.fullName.trim() || !data.whatsapp.trim()) return "Please provide your full name and WhatsApp number.";
      if (data.whatsapp.replace(/\D/g, "").length < 7) return "Enter a WhatsApp number with international country code.";
      if (!data.consent) return "Please agree to the enquiry terms before submitting.";
    }
    return "";
  }

  function next() { const message = validate(step); if (message) { setError(message); return; } setError(""); setStep((current) => Math.min(current + 1, steps.length - 1)); }
  function back() { setError(""); setStep((current) => Math.max(current - 1, 0)); }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = validate(4); if (message) { setError(message); return; }
    setStatus("loading"); setError("");
    const stopSummary = stops.map((item, index) => `Transfer ${index + 1}: ${item.pickup} to ${item.dropoff} on ${item.date}${item.ziyarat ? `; Ziyarat: ${item.ziyarat}` : ""}${item.notes ? `; Notes: ${item.notes}` : ""}`).join("\n");
    const payload = { tripType: data.journeyType, pickup: data.arrivalLocation, destination: data.destinations, passengers: data.passengers, luggage: data.luggage, vehicle: data.vehicle, name: data.fullName.trim(), phone: data.whatsapp.trim(), email: data.email.trim(), travelDate: data.arrivalDate, departureDate: data.departureDate, notes: `${stopSummary}\nAdditional notes: ${data.notes}`.slice(0, 2000), source: "journey-planner" as const, consent: true, website: data.website };
    try {
      await submitLead(payload);
      setStatus("sent");
    } catch (submissionError) { setStatus("error"); setError(submissionError instanceof Error ? submissionError.message : "Request could not be submitted."); }
  }

  return <form className="journey-builder" onSubmit={submit} noValidate>
    <ol className="journey-progress" aria-label="Journey planner progress">{steps.map((label, index) => <li key={label} className={index === step ? "active" : index < step ? "complete" : ""} aria-current={index === step ? "step" : undefined}><span>{index + 1}</span><b>{label}</b></li>)}</ol>
    <div className="journey-step" aria-live="polite">
      {step === 0 && <fieldset><legend>Choose your journey type</legend><div className="journey-choice-grid">{["Family Umrah Transport", "Elderly-Friendly Transport", "VIP Family Transport", "Custom Multi-Stop Journey"].map((option) => <label key={option}><input type="radio" name="journeyType" checked={data.journeyType === option} onChange={() => update("journeyType", option)} /><span>{option}</span></label>)}</div></fieldset>}
      {step === 1 && <fieldset className="journey-fields"><legend>Share your travel details</legend><label>Arrival date *<input type="date" min={today} value={data.arrivalDate} onChange={(event) => update("arrivalDate", event.target.value)} /></label><label>Departure date <em>(optional)</em><input type="date" min={data.arrivalDate || today} value={data.departureDate} onChange={(event) => update("departureDate", event.target.value)} /></label><label>Arrival airport or city *<input list="bam-locations" placeholder="e.g. Jeddah Airport" value={data.arrivalLocation} onChange={(event) => update("arrivalLocation", event.target.value)} /></label><label>Main destinations *<input placeholder="e.g. Makkah and Madinah" value={data.destinations} onChange={(event) => update("destinations", event.target.value)} /></label><label>Number of passengers *<select value={data.passengers} onChange={(event) => update("passengers", event.target.value)}><option value="">Select count</option><option>1–3</option><option>4–6</option><option>7–11</option><option>12+</option></select></label><label>Luggage requirements *<select value={data.luggage} onChange={(event) => update("luggage", event.target.value)}><option value="">Select luggage</option><option>Light luggage</option><option>Standard family luggage</option><option>Multiple large bags</option><option>Walking aid or foldable wheelchair plus luggage</option></select></label></fieldset>}
      {step === 2 && <fieldset><legend>Add routes and stops</legend><p className="journey-helper">Add transfers in travel order. Use the arrow buttons to reorder them.</p><div className="journey-stop-list">{stops.map((item, index) => <article key={index}><header><b>Transfer {index + 1}</b><div><button type="button" onClick={() => moveStop(index, -1)} disabled={index === 0} aria-label={`Move transfer ${index + 1} up`}>↑</button><button type="button" onClick={() => moveStop(index, 1)} disabled={index === stops.length - 1} aria-label={`Move transfer ${index + 1} down`}>↓</button>{stops.length > 1 && <button type="button" onClick={() => setStops((current) => current.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>}</div></header><div className="journey-fields"><label>Pickup location *<input list="bam-locations" value={item.pickup} onChange={(event) => updateStop(index, "pickup", event.target.value)} placeholder="e.g. Jeddah Airport" /></label><label>Drop-off location *<input list="bam-locations" value={item.dropoff} onChange={(event) => updateStop(index, "dropoff", event.target.value)} placeholder="e.g. Makkah hotel" /></label><label>Preferred date *<input type="date" min={data.arrivalDate || today} value={item.date} onChange={(event) => updateStop(index, "date", event.target.value)} /></label><label>Ziyarat destinations <em>(optional)</em><input value={item.ziyarat} onChange={(event) => updateStop(index, "ziyarat", event.target.value)} placeholder="e.g. Makkah Ziyarat" /></label><label className="full">Optional stop or notes<input value={item.notes} onChange={(event) => updateStop(index, "notes", event.target.value)} placeholder="Hotel check-in, rest stop or meeting point" /></label></div></article>)}</div><button className="add-transfer" type="button" onClick={() => setStops((current) => [...current, emptyStop()])}>+ Add another transfer</button></fieldset>}
      {step === 3 && <fieldset><legend>Select a vehicle preference</legend><p className="journey-helper">Final availability and suitability are confirmed after BAM reviews passengers, luggage and routes.</p><div className="journey-choice-grid">{["GMC Yukon XL", "Hyundai Staria", "Toyota Hiace", "Sprinter", "Let BAM Recommend"].map((option) => <label key={option}><input type="radio" name="vehicle" checked={data.vehicle === option} onChange={() => update("vehicle", option)} /><span>{option}</span></label>)}</div></fieldset>}
      {step === 4 && <fieldset className="journey-review"><legend>Contact details and itinerary review</legend><div className="journey-fields"><label>Full name *<input autoComplete="name" value={data.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Your full name" /></label><label>WhatsApp number *<input type="tel" inputMode="tel" autoComplete="tel" value={data.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="+966 5X XXX XXXX" /></label><label>Email address <em>(optional)</em><input type="email" autoComplete="email" value={data.email} onChange={(event) => update("email", event.target.value)} placeholder="name@example.com" /></label><label className="full">Additional travel notes <em>(optional)</em><textarea rows={4} value={data.notes} onChange={(event) => update("notes", event.target.value)} placeholder="Share practical timing, luggage or family considerations. Do not include passport or payment-card details." /></label></div><section className="itinerary-summary"><h3>Your itinerary summary</h3><dl><div><dt>Journey</dt><dd>{data.journeyType}</dd></div><div><dt>Arrival</dt><dd>{data.arrivalDate} — {data.arrivalLocation}</dd></div><div><dt>Destinations</dt><dd>{data.destinations}</dd></div><div><dt>Passengers</dt><dd>{data.passengers}</dd></div><div><dt>Vehicle</dt><dd>{data.vehicle}</dd></div><div><dt>Transfers</dt><dd>{stops.length}</dd></div></dl>{stops.map((item, index) => <p key={index}><b>{index + 1}.</b> {item.pickup} → {item.dropoff} on {item.date}{item.ziyarat ? ` · ${item.ziyarat}` : ""}</p>)}</section><label className="journey-consent"><input type="checkbox" checked={data.consent} onChange={(event) => update("consent", event.target.checked)} /> I agree to submit these details for BAM&apos;s manual review. This is not an instant booking confirmation.</label></fieldset>}
      <datalist id="bam-locations">{locations.map((location) => <option key={location} value={location} />)}</datalist>
      <input className="sr-only" name="website" value={data.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p className="journey-error" role="alert">{error}</p>}
      {status === "sent" && <p className="journey-success" role="status">Your itinerary request was received for review. This is not a confirmed booking; BAM must review availability, scheduling and quotation details.</p>}
      <div className="journey-actions">{step > 0 && status !== "sent" && <button type="button" className="journey-back" onClick={back}>Back</button>}{step < 4 ? <button type="button" className="journey-next" onClick={next}>Continue <span>→</span></button> : status !== "sent" && <button type="submit" className="journey-next" disabled={status === "loading"}>{status === "loading" ? "Submitting…" : "Request My Transport Plan"}</button>}</div>
    </div>
  </form>;
}
