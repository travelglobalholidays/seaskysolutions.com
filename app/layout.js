import localFont from "next/font/local";
import Script from "next/script";
import FixedActions from "@/components/common/FixedActions";
import { siteUrl } from "@/config/siteMetadata";
import "./globals.css";

const monaSans = localFont({
  src: "./fonts/MonaSansVF.woff2",
  variable: "--font-mona-sans",
  weight: "200 900",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sea Sky Solutions | Travel Made Simple",
    template: "%s | Sea Sky Solutions",
  },
  description:
    "Plan flights, hotels, cruises and tailored travel packages with Sea Sky Solutions.",
  keywords: [
    "Sea Sky Solutions",
    "travel agency",
    "flights",
    "hotels",
    "cruises",
    "travel packages",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Sea Sky Solutions",
    locale: "en_US",
  },
  icons: {
    icon: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
    shortcut: "/images/favicon.ico",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FixedActions />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18273435034"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18273435034');
        `}
      </Script>
    </html>
  );
}
