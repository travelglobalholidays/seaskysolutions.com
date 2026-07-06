import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata({
  title: "Flight Search Results",
  description:
    "Personalized Sea Sky Solutions flight search results. Results can change based on availability, dates, passenger details, and supplier rules.",
  path: "/flights/result",
});

export default function ResultLayout({ children }) {
  return children;
}
