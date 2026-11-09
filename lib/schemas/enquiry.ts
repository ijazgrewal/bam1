import { z } from "zod";

const optionalText = (maximum: number) =>
  z.string().trim().max(maximum).optional().or(z.literal(""));

const isValidIsoDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
};

const optionalDate = z.string().trim().max(10).refine(
  (value) => value === "" || isValidIsoDate(value),
  "Enter a valid date in YYYY-MM-DD format.",
).optional().or(z.literal(""));

export const enquirySources = ["hero", "enquiry", "journey-planner"] as const;

export const enquirySchema = z.object({
  tripType: z.string().trim().min(1, "Please complete the required fields.").max(120),
  pickup: z.string().trim().min(1, "Please complete the required fields.").max(200),
  destination: z.string().trim().min(1, "Please complete the required fields.").max(200),
  passengers: z.string().trim().min(1, "Please complete the required fields.").max(40),
  name: z.string().trim().min(1, "Please complete the required fields.").max(120),
  phone: z.string().trim().regex(/^\+?[0-9][0-9 ()-]{6,29}$/, "Enter a valid phone number."),
  email: z.string().trim().email("Enter a valid email address.").optional().or(z.literal("")),
  travelDate: optionalDate,
  departureDate: optionalDate,
  pickupTime: optionalText(64),
  flight: optionalText(80),
  luggage: optionalText(120),
  vehicle: optionalText(120),
  notes: optionalText(2000),
  source: z.enum(enquirySources),
  consent: z.union([z.literal(true), z.literal("true"), z.literal("on"), z.literal("1")]).transform(() => true),
  website: z.string().max(0).optional(),
}).superRefine((data, context) => {
  const today = new Date().toISOString().slice(0, 10);
  for (const field of ["travelDate", "departureDate"] as const) {
    if (data[field] && data[field] < today) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: [field], message: "Travel dates cannot be in the past." });
    }
  }
  if (data.travelDate && data.departureDate && data.departureDate < data.travelDate) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["departureDate"], message: "Departure date must be on or after the travel date." });
  }
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
