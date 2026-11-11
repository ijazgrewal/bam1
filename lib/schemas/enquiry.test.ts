import { describe, expect, it } from "vitest";
import { createEnquirySchema, getRiyadhDate } from "./enquiry";

const validEnquiry = {
  tripType: "Airport transfer",
  pickup: "Jeddah Airport",
  destination: "Makkah Mukarramah",
  passengers: "4–6",
  name: "Amina Khan",
  phone: "+966 50 713 5765",
  email: "amina@example.com",
  travelDate: "2026-11-10",
  departureDate: "",
  pickupTime: "",
  flight: "",
  luggage: "",
  vehicle: "",
  notes: "",
  source: "enquiry" as const,
  consent: true,
  website: "",
};

describe("enquiry schema", () => {
  const riyadhMidnight = new Date("2026-11-09T21:30:00.000Z");
  const schema = createEnquirySchema(riyadhMidnight);

  it("uses the Asia/Riyadh calendar date", () => {
    expect(getRiyadhDate(riyadhMidnight)).toBe("2026-11-10");
    expect(schema.safeParse(validEnquiry).success).toBe(true);
  });

  it("rejects malformed phone numbers", () => {
    expect(schema.safeParse({ ...validEnquiry, phone: "call me" }).success).toBe(false);
  });

  it("requires consent", () => {
    expect(schema.safeParse({ ...validEnquiry, consent: false }).success).toBe(false);
  });

  it("rejects past dates in Saudi Arabia", () => {
    const result = schema.safeParse({ ...validEnquiry, travelDate: "2026-11-09" });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot submissions", () => {
    expect(schema.safeParse({ ...validEnquiry, website: "spam" }).success).toBe(false);
  });

  const validPartnerEnquiry = {
    agencyName: "Example Umrah Travel",
    name: "Amina Khan",
    phone: "+966 50 713 5765",
    email: "amina@example.com",
    partnershipType: "Travel agency",
    monthlyRequests: "1–5",
    businessRequirements: "Group airport and intercity transport requirements.",
    source: "partner" as const,
    consent: true,
    website: "",
  };

  it("accepts a valid partner enquiry without trip fields", () => {
    expect(schema.safeParse(validPartnerEnquiry).success).toBe(true);
  });

  it("requires an agency name for partner enquiries", () => {
    expect(schema.safeParse({ ...validPartnerEnquiry, agencyName: "" }).success).toBe(false);
  });

  it("accepts 2,000-character partner requirements and rejects missing consent", () => {
    expect(schema.safeParse({ ...validPartnerEnquiry, businessRequirements: "a".repeat(2000) }).success).toBe(true);
    expect(schema.safeParse({ ...validPartnerEnquiry, consent: false }).success).toBe(false);
  });

  it("rejects a partner honeypot submission", () => {
    expect(schema.safeParse({ ...validPartnerEnquiry, website: "spam" }).success).toBe(false);
  });
});
