import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { BlogListing } from "@/components/BlogListing";
import { publishedArticles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Umrah Travel Tips & Transport Guides",
  description: "Practical BAM Transport guidance for Umrah airport transfers, intercity transport, family journeys and ziyarat planning in Saudi Arabia.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Umrah Travel Tips & Transport Guides", description: "Practical planning guidance for airport transfers, intercity travel, family Umrah journeys and ziyarat.", url: "/blog" },
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "Blog", name: "BAM Transport Travel Guides", description: "Practical Umrah transport and journey planning guidance.", url: "/blog" };
  return <main className="blog-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <section className="blog-hero">
      <div><p className="blog-eyebrow">BAM Transport resource library</p><h1>Umrah Travel Tips &amp; Transport Guides.</h1><p>Practical guidance for airport transfers, intercity transportation, family Umrah journeys and ziyarat planning across Saudi Arabia.</p><Link href="#travel-guides">Explore Travel Guides <ArrowDown aria-hidden="true" /></Link></div>
    </section>
    <BlogListing articles={publishedArticles} />
  </main>;
}
