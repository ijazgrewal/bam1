const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
// Vercel system variables need no manual setup. The production URL is stable across
// deployments, so canonical links and the sitemap do not point at one-off deploy URLs.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() || process.env.VERCEL_URL?.trim();

// A manually configured canonical domain always takes priority.
export const siteUrl = (configuredUrl || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")).replace(/\/$/, "");

// Preview deployments must not be indexed by search engines.
export const isIndexable = !process.env.VERCEL || Boolean(configuredUrl) || process.env.VERCEL_ENV === "production";
