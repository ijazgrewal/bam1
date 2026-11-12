import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getArticle, getCategoryName, publishedArticles } from "@/lib/blog";
import { siteUrl } from "@/lib/site-url";

export const dynamicParams = false;
export function generateStaticParams() { return publishedArticles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt, url: `/blog/${article.slug}`, publishedTime: `${article.publishedAt}T00:00:00.000Z`, modifiedTime: article.updatedAt ? `${article.updatedAt}T00:00:00.000Z` : undefined, images: [{ url: article.image, alt: article.imageAlt }] } };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = publishedArticles.filter((item) => article.relatedSlugs?.includes(item.slug));
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.excerpt, image: `${siteUrl}${article.image}`, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, mainEntityOfPage: `${siteUrl}/blog/${article.slug}`, publisher: { "@type": "Organization", name: "BAM Transport" } };
  return <main className="blog-article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <article>
      <nav className="blog-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight aria-hidden="true" /><Link href="/blog">Travel guides</Link><ChevronRight aria-hidden="true" /><span aria-current="page">{article.title}</span></nav>
      <header className="blog-article-header"><p className="blog-card-category">{getCategoryName(article.category)}</p><h1>{article.title}</h1><p>{article.excerpt}</p><time dateTime={article.publishedAt}>Published {new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${article.publishedAt}T00:00:00`))}</time></header>
      <div className="blog-article-image"><Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1100px) 100vw, 1040px" className="object-cover" /></div>
      <div className="blog-article-body">{article.sections.map((section, index) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 0 && article.serviceHref && <Link className="blog-inline-cta" href={article.serviceHref}>{article.serviceLabel ?? "Explore BAM transport services"} <ArrowRight aria-hidden="true" /></Link>}</section>)}</div>
      {article.faqs?.length ? <section className="blog-article-faqs" aria-labelledby="article-faqs"><h2 id="article-faqs">Frequently asked questions</h2>{article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section> : null}
      {related.length ? <section className="blog-related"><h2>Related travel guides</h2>{related.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.title}<ArrowRight aria-hidden="true" /></Link>)}</section> : null}
      <section className="blog-service-cta"><p className="blog-eyebrow">Plan with BAM Transport</p><h2>Ready to discuss your journey?</h2><p>Share your route, dates, passengers and luggage so BAM can review a suitable private transport request.</p><Link href="/contact#enquiry">Request a transport quote <ArrowRight aria-hidden="true" /></Link></section>
    </article>
  </main>;
}
