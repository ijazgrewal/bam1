export const blogCategories = [
  { slug: "airport-transfer-guides", name: "Airport Transfer Guides", description: "Planning information for airport arrivals and departures." },
  { slug: "intercity-travel", name: "Intercity Travel", description: "Guidance for journeys between the Holy Cities." },
  { slug: "family-umrah-travel", name: "Family Umrah Travel", description: "Practical considerations for families travelling together." },
  { slug: "ziyarat-destinations", name: "Ziyarat & Destinations", description: "Helpful context for destination-led journey planning." },
] as const;

export type BlogCategory = (typeof blogCategories)[number]["slug"];

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  updatedAt?: string;
  image: string;
  imageAlt: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  faqs?: Array<{ question: string; answer: string }>;
  relatedSlugs?: string[];
  serviceHref?: string;
  serviceLabel?: string;
};

// Add records here only after their copy, date, featured image and publishing approval are final.
// There are intentionally no entries yet: the previous /blog page did not contain published articles.
export const publishedArticles: readonly BlogArticle[] = [];

export function getArticle(slug: string) {
  return publishedArticles.find((article) => article.slug === slug);
}

export function getCategoryName(category: BlogCategory) {
  return blogCategories.find((item) => item.slug === category)?.name ?? category;
}
