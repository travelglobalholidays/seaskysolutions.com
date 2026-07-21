"use client";

import SearchForm from "@/components/Flights/SearchForm";
import { useFlight } from "@/context/FlightContext";

const ResultBanner = () => {
  const { searchData } = useFlight();
  const formKey = searchData
    ? `${searchData.origin}-${searchData.destination}-${searchData.departureDate}-${searchData.returnDate || "oneway"}`
    : "empty-search";

  return (
    <section className="relative isolate overflow-hidden bg-blue px-4 py-7 sm:py-8">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(7,89,139,0.98),rgba(6,70,111,0.94),rgba(168,201,70,0.34))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-white/20" />
      <div className="container">
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
