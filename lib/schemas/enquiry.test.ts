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

  it("accepts a valid partner enquiry", () => {
    expect(schema.safeParse({ ...validEnquiry, source: "partner", agencyName: "Example Umrah Travel", partnershipType: "Travel agency", monthlyRequests: "1–5" }).success).toBe(true);
  });

  it("requires an agency name for partner enquiries", () => {
    expect(schema.safeParse({ ...validEnquiry, source: "partner", agencyName: "" }).success).toBe(false);
  });
});
