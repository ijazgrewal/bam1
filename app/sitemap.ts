import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site-url";
import { fleetDetails } from "../lib/fleet-data";
import { routes, routeSlug } from "../lib/site-data";
import { publishedArticles } from "../lib/blog";
const pages = ["/","/services","/routes","/fleet","/family-umrah-transport-packages","/elderly-friendly-umrah-transport","/vip-umrah-family-transport","/custom-journey-planning","/airport-transfers","/intercity-transfers","/ziyarat-transport","/family-group-transportation","/our-fleet","/about-us","/blog","/contact","/faqs","/partner-with-bam","/jeddah-airport-to-makkah-transfer","/makkah-to-madinah-private-transfer","/madinah-to-makkah-private-transfer","/madinah-airport-transfers","/jeddah-airport-to-madinah-transfer","/makkah-ziyarat-transport","/madinah-ziyarat-transport","/taif-ziyarat","/badr-ziyarat","/taif-private-transport",...fleetDetails.map(item=>`/fleet/${item.slug}`),...routes.map(item=>`/routes/${routeSlug(item.origin,item.destination)}`),...publishedArticles.map(article => `/blog/${article.slug}`)];
export default function sitemap(): MetadataRoute.Sitemap { return pages.map(path => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 })); }
