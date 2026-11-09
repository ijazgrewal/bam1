const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = (configuredUrl || "http://localhost:5173").replace(/\/$/, "");
