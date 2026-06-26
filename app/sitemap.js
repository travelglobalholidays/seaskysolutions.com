import { siteUrl } from "@/config/siteMetadata";

const routes = [
  "",
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
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
