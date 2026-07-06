import AirlineSeoContent from "@/components/AirlineSeo/AirlineSeoContent";
import AirlineSeoCustomerService from "@/components/AirlineSeo/AirlineSeoCustomerService";
import AirlineSeoHero from "@/components/AirlineSeo/AirlineSeoHero";
import AirlineSeoMobileHelp from "@/components/AirlineSeo/AirlineSeoMobileHelp";
import AirlineLinksDirectory from "@/components/AirlineSeo/AirlineLinksDirectory";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { createPageMetadata, siteUrl } from "@/config/siteMetadata";
import { airlineSeoPages, getAirlineSeoPage } from "@/lib/airlineSeoPages";
import { notFound } from "next/navigation";

export const generateStaticParams = () =>
  airlineSeoPages.map((page) => ({
    slug: page.slug,
  }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const page = getAirlineSeoPage(slug);

  if (!page) {
    return createPageMetadata({
      title: "Airline Flight Booking Assistance",
      description:
        "Airline flight booking assistance from Sea Sky Solutions LLC.",
      path: "/airline/lcc",
    });
  }

  return createPageMetadata({
    title: page.metaTitle,
    description: page.description,
    path: page.href,
    keywords: page.keywords,
  });
};

const AirlinePage = async ({ params }) => {
  const { slug } = await params;
  const page = getAirlineSeoPage(slug);

  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${siteUrl}${page.href}`,
    provider: {
      "@type": "TravelAgency",
      name: "Sea Sky Solutions LLC",
      url: siteUrl,
    },
    about: {
      "@type": "Thing",
      name: page.label,
    },
  };

  return (
    <>
      <Header />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <AirlineSeoHero page={page} />
      <AirlineSeoMobileHelp page={page} />
      <AirlineSeoCustomerService />
      <AirlineSeoContent page={page} />
      <AirlineLinksDirectory activeSlug={page.slug} pages={airlineSeoPages} />
      <Footer />
    </>
  );
};

export default AirlinePage;
