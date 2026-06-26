export const siteUrl = "https://seaskysolutions.com";

const defaultKeywords = [
  "Sea Sky Solutions LLC",
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
    title: `${title} | Sea Sky Solutions LLC`,
    description,
    url: path,
    siteName: "Sea Sky Solutions LLC",
    type: "website",
  },
});
