import { NextResponse } from "next/server";
import { notifyEnquiry, saveEnquiry } from "@/lib/enquiries";
import { enquirySchema } from "@/lib/schemas/enquiry";

const requestCounts = new Map<string, { count: number; resetAt: number }>();
const limit = 10;
const windowMs = 10 * 60 * 1000;

function rateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = requestCounts.get(key);
  const entry = !current || current.resetAt < now ? { count: 0, resetAt: now + windowMs } : current;
  entry.count += 1;
  requestCounts.set(key, entry);
  return entry.count > limit;
}

export async function POST(request: Request) {
  if (rateLimited(request)) return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  const parsed = enquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Please complete the required fields." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ received: true }, { status: 201 });

  try {
    await saveEnquiry(parsed.data);
  } catch (error) {
    console.error("Unable to save enquiry", error instanceof Error ? error.name : "unknown error");
    return NextResponse.json({ error: "We could not submit the enquiry. Please try again." }, { status: 503 });
  }

  notifyEnquiry(parsed.data).catch((error) => console.error("Enquiry notification failed", error instanceof Error ? error.name : "unknown error"));
  return NextResponse.json({ received: true }, { status: 201 });
}
