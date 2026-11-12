"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogCategories, type BlogArticle, type BlogCategory } from "@/lib/blog";

type Filter = "all" | BlogCategory;

export function BlogListing({ articles }: { articles: readonly BlogArticle[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filteredArticles = useMemo(
    () => filter === "all" ? articles : articles.filter((article) => article.category === filter),
    [articles, filter],
  );
  const featured = filter === "all" ? filteredArticles[0] : undefined;
  const remainingArticles = featured ? filteredArticles.slice(1) : filteredArticles;

  return <section className="blog-listing" id="travel-guides" aria-labelledby="travel-guides-heading">
    <div className="blog-listing-heading">
      <div><p className="blog-eyebrow">BAM resource library</p><h2 id="travel-guides-heading">Travel guides for a considered journey.</h2></div>
      <p>Browse by the stage of your Umrah journey that you are planning.</p>
    </div>

    <div className="blog-filters" aria-label="Filter travel guides by category">
      <button type="button" aria-pressed={filter === "all"} className={filter === "all" ? "is-active" : undefined} onClick={() => setFilter("all")}>All guides <span>{articles.length}</span></button>
      {blogCategories.map((category) => {
        const count = articles.filter((article) => article.category === category.slug).length;
        return <button type="button" key={category.slug} aria-pressed={filter === category.slug} className={filter === category.slug ? "is-active" : undefined} onClick={() => setFilter(category.slug)}>{category.name} <span>{count}</span></button>;
      })}
    </div>

    {featured && <article className="blog-featured">
      <div className="blog-featured-image"><Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" /></div>
      <div className="blog-featured-content"><p className="blog-card-category">{blogCategories.find((category) => category.slug === featured.category)?.name}</p><h3>{featured.title}</h3><p>{featured.excerpt}</p><time dateTime={featured.publishedAt}>Published {new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${featured.publishedAt}T00:00:00`))}</time><Link href={`/blog/${featured.slug}`}>Read guide <ArrowRight aria-hidden="true" /></Link></div>
    </article>}

    {remainingArticles.length > 0 && <div className="blog-article-grid">
      {remainingArticles.map((article) => <article className="blog-card" key={article.slug}>
        <div className="blog-card-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" className="object-cover" /></div>
        <div className="blog-card-content"><p className="blog-card-category">{blogCategories.find((category) => category.slug === article.category)?.name}</p><h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><time dateTime={article.publishedAt}>Published {new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${article.publishedAt}T00:00:00`))}</time><Link className="blog-read-link" href={`/blog/${article.slug}`}>Read guide <ArrowRight aria-hidden="true" /></Link></div>
      </article>)}
    </div>}

    {filteredArticles.length === 0 && <div className="blog-empty-state" role="status">
      <span><BookOpen aria-hidden="true" /></span><div><h3>{filter === "all" ? "Travel guides are being prepared." : "No published guides in this category yet."}</h3><p>We will add practical, reviewed guidance here once it is ready to publish. In the meantime, BAM can help you plan an airport, intercity, family or ziyarat transport request directly.</p><Link href="/contact#enquiry">Discuss your journey <ArrowRight aria-hidden="true" /></Link></div>
    </div>}
  </section>;
}
