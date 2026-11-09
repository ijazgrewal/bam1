export type LeadPayload = Record<string, unknown>;

export async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = (await response.json().catch(() => null)) as { error?: string } | null;
  if (!response.ok) throw new Error(result?.error || "Request could not be submitted.");
}
