import { siteUrl } from "@/config/siteMetadata";

export const createNoIndexMetadata = ({
  title,
  description,
  path = "/",
} = {}) => ({
  title,
  description,
  alternates: {
    canonical: path,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}${path}`,
    siteName: "Sea Sky Solutions LLC",
  },
});
