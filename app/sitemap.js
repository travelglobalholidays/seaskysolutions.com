import { siteUrl } from "@/config/siteMetadata";
import { airlineSeoPages } from "@/lib/airlineSeoPages";

const routes = [
  "",
  "/airline",
  "/flights",
  "/car-rental",
  "/train-booking",
  "/hotels",
  "/about-us",
  "/contact-us",
  "/faqs",
  "/terms-conditions",
  "/privacy-policy",
  "/refund-policy",
  "/disclaimer",
];

export default function sitemap() {
  const staticRoutes = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const airlineRoutes = airlineSeoPages.map((page) => ({
    url: `${siteUrl}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...airlineRoutes];
}
