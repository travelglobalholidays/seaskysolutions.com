"use client";

import DealSearchOverlay from "@/components/Flights/DealSearchOverlay";
import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import {
  getDisplayDate,
  getFutureDate,
  useFlightDealSearch,
} from "@/hooks/useFlightDealSearch";
import Image from "next/image";
import { useState } from "react";

const fareOffers = {
  "round-trip": [
    {
      airline: "Southwest",
      airlineLogo: "/images/airlines_logo/southwest-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(18)),
      destination: "LAX",
      destinationCity: "Los Angeles",
      origin: "SFO",
      originCity: "San Francisco",
      price: "178",
      travelDate: getDisplayDate(getFutureDate(14)),
    },
    {
      airline: "Frontier",
      airlineLogo: "/images/airlines_logo/frontier-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(28)),
      destination: "MIA",
      destinationCity: "Miami",
      origin: "ATL",
      originCity: "Atlanta",
      price: "154",
      travelDate: getDisplayDate(getFutureDate(23)),
    },
    {
      airline: "Avelo",
      airlineLogo: "/images/airlines_logo/avelo-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(36)),
      destination: "LAS",
      destinationCity: "Las Vegas",
      origin: "BUR",
      originCity: "Burbank",
      price: "139",
      travelDate: getDisplayDate(getFutureDate(31)),
    },
    {
      airline: "Southwest",
      airlineLogo: "/images/airlines_logo/southwest-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(50)),
      destination: "DEN",
      destinationCity: "Denver",
      origin: "DAL",
      originCity: "Dallas",
      price: "238",
      travelDate: getDisplayDate(getFutureDate(44)),
    },
    {
      airline: "Frontier",
      airlineLogo: "/images/airlines_logo/frontier-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(64)),
      destination: "MCO",
      destinationCity: "Orlando",
      origin: "PHL",
      originCity: "Philadelphia",
      price: "186",
      travelDate: getDisplayDate(getFutureDate(59)),
    },
    {
      airline: "Avelo",
      airlineLogo: "/images/airlines_logo/avelo-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(81)),
      destination: "RDU",
      destinationCity: "Raleigh",
      origin: "HVN",
      originCity: "New Haven",
      price: "158",
      travelDate: getDisplayDate(getFutureDate(75)),
    },
    {
      airline: "Southwest",
      airlineLogo: "/images/airlines_logo/southwest-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(97)),
      destination: "SEA",
      destinationCity: "Seattle",
      origin: "SJC",
      originCity: "San Jose",
      price: "214",
      travelDate: getDisplayDate(getFutureDate(91)),
    },
    {
      airline: "Frontier",
      airlineLogo: "/images/airlines_logo/frontier-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(112)),
      destination: "TPA",
      destinationCity: "Tampa",
      origin: "CLE",
      originCity: "Cleveland",
      price: "169",
      travelDate: getDisplayDate(getFutureDate(108)),
    },
    {
      airline: "Avelo",
      airlineLogo: "/images/airlines_logo/avelo-logo.png",
      arrivalDate: getDisplayDate(getFutureDate(128)),
      destination: "CHS",
      destinationCity: "Charleston",
      origin: "ILG",
      originCity: "Wilmington",
      price: "148",
      travelDate: getDisplayDate(getFutureDate(123)),
    },
  ],
  "one-way": [
    {
      airline: "Southwest",
      airlineLogo: "/images/airlines_logo/southwest-logo.png",
      destination: "SAN",
      destinationCity: "San Diego",
      origin: "SFO",
      originCity: "San Francisco",
      price: "92",
      travelDate: getDisplayDate(getFutureDate(16)),
    },
    {
      airline: "Frontier",
      airlineLogo: "/images/airlines_logo/frontier-logo.png",
      destination: "FLL",
      destinationCity: "Fort Lauderdale",
      origin: "ATL",
      originCity: "Atlanta",
      price: "77",
      travelDate: getDisplayDate(getFutureDate(25)),
    },
    {
      airline: "Avelo",
      airlineLogo: "/images/airlines_logo/avelo-logo.png",
      destination: "MCO",
      destinationCity: "Orlando",
      origin: "HVN",
      originCity: "New Haven",
      price: "83",
      travelDate: getDisplayDate(getFutureDate(39)),
    },
    {
      airline: "Southwest",
      airlineLogo: "/images/airlines_logo/southwest-logo.png",
      destination: "AUS",
      destinationCity: "Austin",
      origin: "DAL",
      originCity: "Dallas",
      price: "68",
      travelDate: getDisplayDate(getFutureDate(52)),
    },
    {
      airline: "Frontier",
      airlineLogo: "/images/airlines_logo/frontier-logo.png",
      destination: "LAS",
      destinationCity: "Las Vegas",
      origin: "DEN",
      originCity: "Denver",
      price: "72",
      travelDate: getDisplayDate(getFutureDate(69)),
    },
    {
      airline: "Avelo",
      airlineLogo: "/images/airlines_logo/avelo-logo.png",
      destination: "BNA",
      destinationCity: "Nashville",
      origin: "RDU",
      originCity: "Raleigh",
      price: "79",
      travelDate: getDisplayDate(getFutureDate(88)),
    },
  ],
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const PlaneIcon = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m21.2 4.8-1-1a2.07 2.07 0 0 0-2.91 0l-4.08 4.08-7.55-2.1-1.48 1.48 6.11 3.54-3.8 3.8-2.4-.38-1.13 1.13 3.18 2.52 2.52 3.18 1.13-1.13-.38-2.4 3.8-3.8 3.54 6.11 1.48-1.48-2.1-7.55L20.2 7.7a2.07 2.07 0 0 0 0-2.9Z" />
  </svg>
);

const RouteDetails = ({ code, city, date, isDestination }) => (
  <div className={isDestination ? "text-right" : ""}>
    <p className="font-poppins-semibold text-lg leading-none text-heading">
      {code}
    </p>
    <p className="mt-1 truncate text-xs text-light-grey">{city}</p>
    <p className="mt-1 text-xs font-poppins-medium text-heading">{date}</p>
  </div>
);

const FareCard = ({ disabled, offer, onSearch }) => (
  <article className="overflow-hidden rounded-[18px] border border-blue/10 bg-white shadow-[0_10px_24px_rgba(7,89,139,0.07)] transition-all duration-300 hover:border-blue/25 hover:shadow-[0_14px_28px_rgba(7,89,139,0.14)]">
    <div className="grid grid-cols-[52px_minmax(0,1fr)] gap-3 px-4 py-4 sm:px-5">
      <div className="flex size-12 items-center justify-center overflow-hidden rounded-xl bg-blue/5 p-1.5">
        <Image
          alt={`${offer.airline} logo`}
          className="h-full w-full object-contain"
          height={48}
          src={offer.airlineLogo}
          width={48}
        />
      </div>

      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] items-start gap-2">
        <RouteDetails
          city={offer.originCity}
          code={offer.origin}
          date={offer.travelDate}
        />

        <div className="mt-1 flex flex-col items-center text-blue">
          <div className="flex w-full items-center">
            <span className="h-px flex-1 bg-blue/20" />
            <PlaneIcon />
            <span className="h-px flex-1 bg-blue/20" />
          </div>
          <p className="mt-2 text-[10px] font-poppins-medium text-light-grey">
            {offer.arrivalDate ? "Round trip" : "One way"}
          </p>
        </div>

        <RouteDetails
          city={offer.destinationCity}
          code={offer.destination}
          date={offer.arrivalDate ?? "Direct fare"}
          isDestination
        />
      </div>
    </div>

    <div className="flex items-center justify-between gap-3 border-t border-subtle bg-blue/[0.025] px-4 py-3 sm:px-5">
      <p className="text-xs text-light-grey">
        <span className="block font-poppins-semibold text-sm text-heading">
          Route inspiration
        </span>
        <span className="text-[10px]">
          Final fares shown after live search
        </span>
      </p>

      <button
        aria-label={`Check availability for ${offer.origin} to ${offer.destination} flight`}
        className="flex shrink-0 items-center gap-1 rounded-full bg-blue px-4 py-2 text-xs font-poppins-semibold text-white transition-colors hover:bg-blue-dark disabled:pointer-events-none disabled:opacity-70"
        disabled={disabled}
        onClick={() => onSearch(offer)}
        type="button"
      >
        Check availability
        <ArrowIcon />
      </button>
    </div>
  </article>
);

const FareOffersGrid = () => {
  const [activeTab, setActiveTab] = useState("round-trip");
  const [isExpanded, setIsExpanded] = useState(false);
  const { searchingDeal, searchDeal } = useFlightDealSearch();
  const phoneNumber = getPhoneDisplay();
  const phoneHref = getPhoneHref();
  const offers = fareOffers[activeTab];
  const visibleOffers = (isExpanded ? offers : offers.slice(0, 6)).map(
    (offer) => ({
      ...offer,
      cabinClass: "economy",
      tripType: activeTab === "round-trip" ? "roundtrip" : "oneway",
    }),
  );

  const changeTab = (tab) => {
    setActiveTab(tab);
    setIsExpanded(false);
  };

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#eef8ff_100%)] py-12 sm:py-14"
      id="featured-fares"
    >
      <DealSearchOverlay deal={searchingDeal} />
      <div className="dot-field absolute -right-16 top-14 size-44 opacity-30" />

      <div className="container relative">
        <p className="flex items-center gap-2 text-xs font-poppins-semibold uppercase tracking-[0.18em] text-green">
          <span className="h-px w-8 bg-green" />
          More ways to save
        </p>
        <h2 className="mt-2 font-poppins-semibold text-[34px] leading-tight text-heading sm:text-[42px]">
          Explore popular flight routes
        </h2>
        <p className="mt-2 text-sm text-light-grey sm:text-base">
          Route examples are for travel planning. Search live availability or
          call Sea Sky Solutions at{" "}
          <a
            className="font-poppins-semibold text-green hover:underline"
            href={phoneHref}
          >
            {phoneNumber}
          </a>
          .
        </p>

        <div
          aria-label="Choose fare type"
          className="mt-5 flex border-b border-subtle"
          role="tablist"
        >
          {[
            ["round-trip", "Round trip"],
            ["one-way", "One way"],
          ].map(([tab, label]) => (
            <button
              aria-selected={activeTab === tab}
              className={`border-b-3 px-5 py-3 text-sm font-poppins-semibold transition-colors sm:text-base ${
                activeTab === tab
                  ? "border-blue text-blue"
                  : "border-transparent text-heading hover:text-blue"
              }`}
              key={tab}
              onClick={() => changeTab(tab)}
              role="tab"
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleOffers.map((offer) => (
            <FareCard
              key={`${activeTab}-${offer.origin}-${offer.destination}`}
              disabled={Boolean(searchingDeal)}
              offer={offer}
              onSearch={searchDeal}
            />
          ))}
        </div>

        {offers.length > 6 && (
          <button
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-blue/5 px-5 py-3 text-sm font-poppins-semibold text-blue transition-colors hover:bg-blue/10"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            type="button"
          >
            {isExpanded ? "Show fewer fares" : "Show more fares"}
          </button>
        )}
      </div>
    </section>
  );
};

export default FareOffersGrid;
