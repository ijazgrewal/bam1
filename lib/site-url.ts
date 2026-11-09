const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
if (process.env.VERCEL && !configuredUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set for Vercel deployments.");
}
export const siteUrl = (configuredUrl || "http://localhost:3000").replace(/\/$/, "");
