import { NextResponse } from "next/server";

const required = ["tripType", "pickup", "destination", "passengers", "name", "phone", "consent"];
export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  if (!data || required.some((key) => !String(data[key] ?? "").trim())) return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  const consent = String(data.consent).toLowerCase();
  if (!["true", "on", "1"].includes(consent)) return NextResponse.json({ error: "Please agree to the enquiry terms." }, { status: 400 });
  if (String(data.notes ?? "").length > 2000) return NextResponse.json({ error: "Notes are too long." }, { status: 400 });
  // Integration point: send validated lead to the approved CRM/email provider and log delivery failures.
  return NextResponse.json({ received: true }, { status: 201 });
}
