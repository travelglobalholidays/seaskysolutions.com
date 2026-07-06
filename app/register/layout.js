import { createNoIndexMetadata } from "@/lib/seo";

export const metadata = createNoIndexMetadata({
  title: "Register",
  description: "Create an Sea Sky Solutions account.",
  path: "/register",
});

export default function RegisterLayout({ children }) {
  return children;
}
