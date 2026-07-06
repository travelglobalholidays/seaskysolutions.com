import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { createPageMetadata, siteUrl } from "@/config/siteMetadata";
import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import { airlineSeoPages } from "@/lib/airlineSeoPages";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiInfo,
  FiPhoneCall,
  FiSearch,
} from "react-icons/fi";

export const metadata = createPageMetadata({
  title: "Airline Flight Booking Assistance",
  description:
    "Browse Sea Sky Solutions LLC airline assistance pages for LCC, Frontier, Spirit, Allegiant, and WestJet flight booking support, fare review, baggage guidance, and itinerary planning.",
  path: "/airline",
  keywords: [
    "airline booking assistance",
    "LCC airline assistance",
    "Frontier flight help",
    "Spirit flight help",
    "Allegiant flight help",
    "WestJet flight help",
  ],
});

const AirlineListingPage = () => {
  const phoneDisplay = getPhoneDisplay();
  const phoneHref = getPhoneHref();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Airline Flight Booking Assistance",
    description: metadata.description,
    url: `${siteUrl}/airline`,
    provider: {
      "@type": "TravelAgency",
      name: "Sea Sky Solutions LLC",
      url: siteUrl,
    },
    hasPart: airlineSeoPages.map((page) => ({
      "@type": "WebPage",
      name: page.title,
      url: `${siteUrl}${page.href}`,
    })),
  };

  return (
    <>
      <Header />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <main>
        <section className="relative isolate overflow-hidden bg-[#eef8ff]">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_44%,rgba(255,255,255,0.64)_72%,rgba(255,255,255,0.22)_100%)]"
          />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[var(--brand-green)]" />

          <div className="site-container px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="max-w-[820px]">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[12px] font-[900] uppercase tracking-[0.12em] text-[var(--brand-blue)]">
                <FiSearch aria-hidden="true" />
                Airline assistance directory
              </p>
              <h1 className="text-[42px] font-[900] uppercase leading-[1] text-[var(--brand-blue)] sm:text-[58px] lg:text-[68px]">
                Airline Flight Booking Assistance
              </h1>
              <p className="mt-5 max-w-[720px] text-[17px] font-[600] leading-8 text-slate-700 sm:text-[19px]">
                Browse airline assistance pages for low-cost and value-focused
                flight planning, fare review, baggage details, and booking
                support.
              </p>
              <p className="mt-5 rounded-[8px] border-l-4 border-[var(--brand-green)] bg-white/90 px-4 py-3 text-[13px] font-[750] leading-6 text-[var(--brand-blue)] shadow-[0_10px_28px_rgba(7,89,139,0.08)]">
                Sea Sky Solutions LLC is a travel assistance platform. We are
                not affiliated with, endorsed by, or acting as any airline
                listed on this page.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="site-container px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[820px]">
                <p className="flex items-center gap-2 text-[12px] font-[900] uppercase tracking-[0.14em] text-[var(--brand-green)]">
                  <span className="h-px w-9 bg-[var(--brand-green)]" />
                  All airline pages
                </p>
                <h2 className="mt-3 text-[32px] font-[900] leading-tight text-[var(--brand-blue)] sm:text-[42px]">
                  Choose an airline assistance page
                </h2>
                <p className="mt-4 text-[16px] font-[550] leading-8 text-slate-700">
                  Each page explains useful planning points, fare review topics,
                  baggage considerations, and booking notes for that airline or
                  airline category.
                </p>
              </div>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 text-[15px] font-[900] text-white transition hover:bg-[var(--brand-green)]"
                href={phoneHref}
              >
                <FiPhoneCall aria-hidden="true" />
                {phoneDisplay}
              </a>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {airlineSeoPages.map((page) => (
                <Link
                  className="group flex min-h-[300px] flex-col rounded-[8px] border border-[var(--brand-blue)]/12 bg-white p-6 shadow-[0_14px_32px_rgba(7,89,139,0.08)] transition hover:-translate-y-1 hover:border-[var(--brand-green)] hover:shadow-[0_20px_42px_rgba(7,89,139,0.14)]"
                  href={page.href}
                  key={page.slug}
                >
                  <span className="mb-5 inline-flex w-fit rounded-full bg-[var(--brand-blue)]/8 px-3 py-1.5 text-[11px] font-[900] uppercase tracking-[0.1em] text-[var(--brand-blue)]">
                    {page.badge}
                  </span>
                  <h3 className="text-[25px] font-[900] leading-tight text-[var(--brand-blue)]">
                    {page.label}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] font-[550] leading-7 text-slate-700">
                    {page.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-[900] text-[var(--brand-blue)] transition group-hover:text-[var(--brand-green)]">
                    View assistance page
                    <FiArrowRight
                      aria-hidden="true"
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eef8ff] py-14">
          <div className="site-container px-5 sm:px-8 lg:px-12">
            <div className="grid gap-5 lg:grid-cols-[1fr_.9fr]">
              <div className="rounded-[8px] border border-[var(--brand-blue)]/12 bg-white p-6 sm:p-8">
                <h2 className="flex items-center gap-2 text-[26px] font-[900] text-[var(--brand-blue)]">
                  <FiInfo className="text-[var(--brand-green)]" />
                  How these pages are intended to help
                </h2>
                <p className="mt-4 text-[16px] leading-8 text-slate-700">
                  Airline assistance pages are informational planning pages.
                  They help travelers understand what to review when comparing
                  routes, fares, baggage options, seats, changes, cancellations,
                  and final booking details.
                </p>
              </div>
              <div className="rounded-[8px] border border-[var(--brand-blue)]/12 bg-white p-6 sm:p-8">
                <h2 className="text-[26px] font-[900] text-[var(--brand-blue)]">
                  Transparent booking notes
                </h2>
                <ul className="mt-5 space-y-3 text-[15px] leading-7 text-slate-700">
                  {[
                    "Airline names are used only for identification.",
                    "Prices and availability can change before confirmation.",
                    "Final baggage, refund, and change rules are set by the airline.",
                    "Sea Sky Solutions LLC does not guarantee lowest fare or refund approval.",
                  ].map((item) => (
                    <li className="flex gap-2" key={item}>
                      <FiCheckCircle className="mt-1 shrink-0 text-[var(--brand-green)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AirlineListingPage;
