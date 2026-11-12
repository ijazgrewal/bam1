const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();

// A manually configured canonical domain takes priority. Vercel deployments can
// build without manual environment setup by falling back to VERCEL_URL.
export const siteUrl = (configuredUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")).replace(/\/$/, "");
