import { z } from "zod";

const optionalText = (maximum: number) =>
  z.string().trim().max(maximum).optional().or(z.literal(""));

export const enquirySources = ["hero", "enquiry", "journey-planner"] as const;

export const enquirySchema = z.object({
  tripType: z.string().trim().min(1, "Please complete the required fields.").max(120),
  pickup: z.string().trim().min(1, "Please complete the required fields.").max(200),
  destination: z.string().trim().min(1, "Please complete the required fields.").max(200),
  passengers: z.string().trim().min(1, "Please complete the required fields.").max(40),
  name: z.string().trim().min(1, "Please complete the required fields.").max(120),
  phone: z.string().trim().regex(/^\+?[0-9][0-9 ()-]{6,29}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  travelDate: optionalText(32),
  departureDate: optionalText(32),
  pickupTime: optionalText(64),
  flight: optionalText(80),
  luggage: optionalText(120),
  vehicle: optionalText(120),
  notes: optionalText(2000),
  source: z.enum(enquirySources),
  consent: z.union([z.literal(true), z.literal("true"), z.literal("on"), z.literal("1")]).transform(() => true),
  website: z.string().max(0).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
