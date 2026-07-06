import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata({
  title: "Booking",
  description: "Private Sea Sky Solutions booking pages.",
  path: "/booking",
});

export default function BookingLayout({ children }) {
  return children;
}
