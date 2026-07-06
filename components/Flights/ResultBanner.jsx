"use client";

import SearchForm from "@/components/Flights/SearchForm";
import { useFlight } from "@/context/FlightContext";

const ResultBanner = () => {
  const { searchData } = useFlight();
  const formKey = searchData
    ? `${searchData.origin}-${searchData.destination}-${searchData.departureDate}-${searchData.returnDate || "oneway"}`
    : "empty-search";

  return (
    <section className="relative isolate bg-[var(--brand-blue)] px-4 py-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(105deg,rgba(7,89,139,0.96),rgba(7,89,139,0.86),rgba(168,201,70,0.42))]" />
      <div className="site-container">
        <SearchForm
          initialValues={searchData || {}}
          isResultsPage
          key={formKey}
        />
      </div>
    </section>
  );
};

export default ResultBanner;
