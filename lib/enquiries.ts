import { getDatabase } from "@/lib/mongodb";
import type { EnquiryInput } from "@/lib/schemas/enquiry";

export async function saveEnquiry(input: EnquiryInput) {
  const database = await getDatabase();
  const now = new Date();
  const lead = Object.fromEntries(Object.entries(input).filter(([key]) => key !== "website"));

  await Promise.all([
    database.collection("leads").createIndex({ createdAt: -1 }),
    database.collection("leads").createIndex({ status: 1, createdAt: -1 }),
    database.collection("leads").createIndex({ name: "text", phone: "text" }),
  ]);

  return database.collection("leads").insertOne({
    ...lead,
    status: "new",
    notes: [],
    createdAt: now,
    updatedAt: now,
  });
}

export async function notifyEnquiry(input: EnquiryInput) {
  const webhook = process.env.LEAD_NOTIFICATION_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "lead.created", source: input.source, createdAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(5_000),
  });
}
