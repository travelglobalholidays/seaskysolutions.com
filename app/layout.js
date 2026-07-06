import localFont from "next/font/local";
import Script from "next/script";
import FixedActions from "@/components/common/FixedActions";
import Providers from "@/components/Providers";
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
    default: "Sea Sky Solutions LLC | Travel Made Simple",
    template: "%s | Sea Sky Solutions LLC",
  },
  description:
    "Plan flights, hotels, cruises and tailored travel packages with Sea Sky Solutions LLC.",
  keywords: [
    "Sea Sky Solutions LLC",
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
    siteName: "Sea Sky Solutions LLC",
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
        <Providers>{children}</Providers>
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
      <Script id="google-ads-click-to-call-conversion" strategy="afterInteractive">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-18273435034/MYZ_CLfNkMYcEJr7uYlE',
              'value': 1.0,
              'currency': 'USD',
              'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
    </html>
  );
}
