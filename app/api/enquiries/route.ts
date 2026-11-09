import { NextResponse } from "next/server";
import { canSubmitEnquiry, notifyEnquiry, saveEnquiry } from "@/lib/enquiries";
import { enquirySchema } from "@/lib/schemas/enquiry";

function clientAddress(request: Request) {
  return request.headers.get("x-vercel-forwarded-for")
    ?? request.headers.get("x-real-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "anonymous";
}

export async function POST(request: Request) {
  const parsed = enquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: parsed.error.issues[0]?.message || "Please complete the required fields." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ received: true }, { status: 201 });

  try {
    if (!(await canSubmitEnquiry(clientAddress(request)))) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }
    await saveEnquiry(parsed.data);
  } catch (error) {
    console.error("Unable to save enquiry", error instanceof Error ? error.name : "unknown error");
    return NextResponse.json({ error: "We could not submit the enquiry. Please try again." }, { status: 503 });
  }

  try {
    await notifyEnquiry(parsed.data);
  } catch (error) {
    console.error("Enquiry notification failed", error instanceof Error ? error.name : "unknown error");
  }

  return NextResponse.json({ received: true }, { status: 201 });
}
