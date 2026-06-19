export const siteUrl = "https://seaskysolutions.com";

const defaultKeywords = [
  "Sea Sky Solutions",
  "travel agency",
  "flight booking",
  "hotel booking",
  "cruise holidays",
  "travel packages",
];

export const createPageMetadata = ({ title, description, path = "/", keywords = [] }) => ({
  title,
  description,
  keywords: [...defaultKeywords, ...keywords],
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: `${title} | Sea Sky Solutions`,
    description,
    url: path,
    siteName: "Sea Sky Solutions",
    type: "website",
  },
});
