import type { NextConfig } from "next";

const scriptSource = process.env.NODE_ENV === "production" ? "'self' 'unsafe-inline'" : "'self' 'unsafe-inline' 'unsafe-eval'";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: `default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; script-src ${scriptSource}; connect-src 'self'; font-src 'self' data:; frame-ancestors 'self'; base-uri 'self'; form-action 'self'` },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
      { source: "/group-transport", destination: "/family-group-transportation", permanent: true },
      { source: "/packages", destination: "/family-umrah-transport-packages", permanent: true },
      { source: "/ziyarat-tours", destination: "/ziyarat-transport", permanent: true },
      { source: "/travel-partners", destination: "/partner-with-bam", permanent: true },
    ];
  },
};

export default nextConfig;
