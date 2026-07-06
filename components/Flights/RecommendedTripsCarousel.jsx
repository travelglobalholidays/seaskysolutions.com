"use client";

import DealSearchOverlay from "@/components/Flights/DealSearchOverlay";
import {
  getDisplayDate,
  getFutureDate,
  useFlightDealSearch,
} from "@/hooks/useFlightDealSearch";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const currencySymbol = "$";
const recommendations = [
  {
    airline: "Southwest",
    airlineLogo: "/images/airlines_logo/southwest-logo.png",
    date: getDisplayDate(getFutureDate(20)),
    destination: "LAX",
    destinationCity: "Los Angeles",
    departureDate: getFutureDate(20),
    origin: "SFO",
    originCity: "San Francisco",
    price: "89",
    returnDate: getFutureDate(24),
    tripType: "roundtrip",
  },
  {
    airline: "Frontier",
    airlineLogo: "/images/airlines_logo/frontier-logo.png",
    date: getDisplayDate(getFutureDate(41)),
    destination: "MIA",
    destinationCity: "Miami",
    departureDate: getFutureDate(41),
    origin: "ATL",
    originCity: "Atlanta",
    price: "74",
    returnDate: getFutureDate(46),
    tripType: "roundtrip",
  },
  {
    airline: "Avelo",
    airlineLogo: "/images/airlines_logo/avelo-logo.png",
    date: getDisplayDate(getFutureDate(39)),
    destination: "LAS",
    destinationCity: "Las Vegas",
    departureDate: getFutureDate(39),
    origin: "BUR",
    originCity: "Burbank",
    price: "68",
    returnDate: getFutureDate(44),
    tripType: "roundtrip",
  },
  {
    airline: "Southwest",
    airlineLogo: "/images/airlines_logo/southwest-logo.png",
    date: getDisplayDate(getFutureDate(59)),
    destination: "DEN",
    destinationCity: "Denver",
    departureDate: getFutureDate(59),
    origin: "DAL",
    originCity: "Dallas",
    price: "119",
    returnDate: getFutureDate(65),
    tripType: "roundtrip",
  },
  {
    airline: "Frontier",
    airlineLogo: "/images/airlines_logo/frontier-logo.png",
    date: getDisplayDate(getFutureDate(75)),
    destination: "MCO",
    destinationCity: "Orlando",
    departureDate: getFutureDate(75),
    origin: "PHL",
    originCity: "Philadelphia",
    price: "93",
    returnDate: getFutureDate(80),
    tripType: "roundtrip",
  },
  {
    airline: "Avelo",
    airlineLogo: "/images/airlines_logo/avelo-logo.png",
    date: getDisplayDate(getFutureDate(93)),
    destination: "RDU",
    destinationCity: "Raleigh",
    departureDate: getFutureDate(93),
    origin: "HVN",
    originCity: "New Haven",
    price: "79",
    returnDate: getFutureDate(99),
    tripType: "roundtrip",
  },
];

const ArrowIcon = ({ direction }) => (
  <svg
    aria-hidden="true"
    className="size-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
    />
  </svg>
);

const PlaneIcon = () => (
  <svg
    aria-hidden="true"
    className="size-3"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="m21.2 4.8-1-1a2.07 2.07 0 0 0-2.91 0l-4.08 4.08-7.55-2.1-1.48 1.48 6.11 3.54-3.8 3.8-2.4-.38-1.13 1.13 3.18 2.52 2.52 3.18 1.13-1.13-.38-2.4 3.8-3.8 3.54 6.11 1.48-1.48-2.1-7.55L20.2 7.7a2.07 2.07 0 0 0 0-2.9Z" />
  </svg>
);

const AirlineBadge = ({ airline, airlineLogo }) => (
  <div className="flex shrink-0 items-center">
    <span className="flex size-18 items-center justify-center overflow-hidden rounded-xl  p-1.5">
      <Image
        alt={`${airline} logo`}
        className="h-full w-full object-contain"
        height={100}
        src={airlineLogo}
        width={100}
      />
    </span>
  </div>
);

const TripCard = ({ disabled, onSearch, trip }) => (
  <button
    aria-label={`Search ${trip.origin} to ${trip.destination} flights`}
    className="group flex h-full min-h-[150px] w-full items-center gap-4 rounded-[18px] border border-white/80 bg-white/95 px-4 py-3 text-left shadow-[0_10px_28px_rgba(7,89,139,0.08)] backdrop-blur transition-all duration-300 hover:border-blue/25 hover:shadow-[0_18px_34px_rgba(7,89,139,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue disabled:pointer-events-none disabled:opacity-70"
    disabled={disabled}
    onClick={() => onSearch(trip)}
    type="button"
  >
    <AirlineBadge airline={trip.airline} airlineLogo={trip.airlineLogo} />

    <div className="min-w-0 flex-1">
      <div className="flex items-start gap-3">
        <div>
          <p className="text-[11px] text-light-grey">From</p>
          <p className="mt-0.5 font-poppins-semibold text-lg text-blue">
            {trip.origin}
          </p>
        </div>

        <div className="relative mt-5 flex min-w-10 flex-1 items-center">
          <span className="size-2 shrink-0 rounded-full bg-[#d7d9dc]" />
          <span className="h-px flex-1 bg-[#d7d9dc]" />
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blue text-white">
            <PlaneIcon />
          </span>
          <span className="h-px flex-1 bg-[#d7d9dc]" />
          <span className="flex size-3 shrink-0 items-center justify-center rounded-full border border-[#8d9499]">
            <span className="size-1.5 rounded-full bg-[#8d9499]" />
          </span>
        </div>

        <div className="text-right">
          <p className="text-[11px] text-light-grey">To</p>
          <p className="mt-0.5 font-poppins-semibold text-lg text-blue">
            {trip.destination}
          </p>
        </div>
      </div>

      <div className="my-3 border-t border-dashed border-subtle" />

      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-[11px] text-light-grey">Date</p>
          <p className="mt-0.5 text-xs font-poppins-semibold text-heading">
            {trip.date}
          </p>
        </div>
        <div className="text-right">
          <p className="font-poppins-semibold text-2xl leading-none text-heading">
            {currencySymbol} {trip.price}
          </p>
          <p className="mt-1 text-[11px] text-light-grey">Per Person</p>
        </div>
      </div>
    </div>
  </button>
);

const RecommendedTripsCarousel = () => {
  const [carousel, setCarousel] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { searchingDeal, searchDeal } = useFlightDealSearch();

  const syncCarouselState = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      className="soft-grid relative overflow-hidden bg-[linear-gradient(135deg,#eef8ff_0%,#ffffff_58%,#f6fbec_100%)] py-12 sm:py-14"
      id="featured-fares"
    >
      <DealSearchOverlay deal={searchingDeal} />

      <div className="absolute -left-24 top-12 size-52 rounded-full bg-blue/5 blur-3xl" />
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="flex items-center gap-2 text-xs font-poppins-semibold uppercase tracking-[0.18em] text-green">
              <span className="h-px w-8 bg-green" />
              Featured flight ideas
            </p>
            <h2 className="mt-2 font-poppins-semibold text-[34px] leading-tight text-heading sm:text-[42px]">
              Popular fares to start your search
            </h2>
            <p className="mt-2 text-sm text-light-grey sm:text-base">
              Browse route examples and jump straight into live availability.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous recommended trip"
              className="flex size-11 items-center justify-center rounded-full border border-blue bg-white text-blue transition-colors hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:border-subtle disabled:text-light-grey disabled:hover:bg-white"
              disabled={isBeginning}
              onClick={() => carousel?.slidePrev()}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              aria-label="Next recommended trip"
              className="flex size-11 items-center justify-center rounded-full border border-blue bg-white text-blue transition-colors hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:border-subtle disabled:text-light-grey disabled:hover:bg-white"
              disabled={isEnd}
              onClick={() => carousel?.slideNext()}
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="mt-5 overflow-hidden">
          <Swiper
            a11y={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 1.35, spaceBetween: 14 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 18 },
            }}
            modules={[A11y]}
            onResize={syncCarouselState}
            onSlideChange={syncCarouselState}
            onSwiper={(swiper) => {
              setCarousel(swiper);
              syncCarouselState(swiper);
            }}
            slidesPerView={1.03}
            spaceBetween={12}
          >
            {recommendations.map((trip) => (
              <SwiperSlide
                className="h-auto!"
                key={`${trip.origin}-${trip.destination}`}
              >
                <TripCard
                  disabled={Boolean(searchingDeal)}
                  onSearch={searchDeal}
                  trip={trip}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {recommendations.map((trip, index) => (
            <button
              aria-label={`Go to ${trip.origin} to ${trip.destination} deal`}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? "w-8 bg-blue" : "w-2.5 bg-blue/20"
              }`}
              key={`${trip.origin}-${trip.destination}`}
              onClick={() => carousel?.slideTo(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedTripsCarousel;
