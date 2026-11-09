import { createHash } from "node:crypto";
import type { Db } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import type { EnquiryInput } from "@/lib/schemas/enquiry";

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaximum = 10;
let indexesPromise: Promise<void> | undefined;
type RateLimitRecord = { _id: string; count: number; expiresAt: Date };

function ensureIndexes(database: Db) {
  if (!indexesPromise) {
    indexesPromise = Promise.all([
      database.collection("leads").createIndex({ createdAt: -1 }),
      database.collection("leads").createIndex({ status: 1, createdAt: -1 }),
      database.collection("leads").createIndex({ name: "text", phone: "text" }),
      database.collection("enquiry_rate_limits").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    ]).then(() => undefined);
  }

  return indexesPromise;
}

export async function canSubmitEnquiry(clientAddress: string) {
  const database = await getDatabase();
  await ensureIndexes(database);

  const window = Math.floor(Date.now() / rateLimitWindowMs);
  const clientHash = createHash("sha256").update(clientAddress).digest("hex");
  try {
    const result = await database.collection<RateLimitRecord>("enquiry_rate_limits").updateOne(
      { _id: `${clientHash}:${window}`, count: { $lt: rateLimitMaximum } },
      {
        $inc: { count: 1 },
        $setOnInsert: { expiresAt: new Date((window + 1) * rateLimitWindowMs) },
      },
      { upsert: true },
    );

    return result.matchedCount > 0 || result.upsertedCount > 0;
  } catch (error) {
    // Concurrent requests at the limit can race to insert the same window key.
    if (typeof error === "object" && error !== null && "code" in error && error.code === 11000) return false;
    throw error;
  }
}

export async function saveEnquiry(input: EnquiryInput) {
  const database = await getDatabase();
  const now = new Date();
  const lead = Object.fromEntries(Object.entries(input).filter(([key]) => key !== "website"));

  await ensureIndexes(database);

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
