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

const destinationDeals = {
  international: [
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(14)),
      destination: "DXB",
      destinationCity: "Dubai",
      departureDate: getFutureDate(14),
      duration: "12h:40m",
      image: "/images/destinations/dubai.png",
      origin: "JFK",
      originCity: "New York",
      price: "529",
      returnDate: getFutureDate(21),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(30)),
      destination: "CDG",
      destinationCity: "Paris",
      departureDate: getFutureDate(30),
      duration: "07h:25m",
      image: "/images/destinations/paris.png",
      origin: "BOS",
      originCity: "Boston",
      price: "648",
      returnDate: getFutureDate(37),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(48)),
      destination: "IST",
      destinationCity: "Istanbul",
      departureDate: getFutureDate(48),
      duration: "10h:15m",
      image: "/images/destinations/istanbul.png",
      origin: "ORD",
      originCity: "Chicago",
      price: "719",
      returnDate: getFutureDate(56),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(66)),
      destination: "SIN",
      destinationCity: "Singapore",
      departureDate: getFutureDate(66),
      duration: "16h:50m",
      image: "/images/destinations/singapore.png",
      origin: "SFO",
      originCity: "San Francisco",
      price: "892",
      returnDate: getFutureDate(75),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(100)),
      destination: "DPS",
      destinationCity: "Bali",
      departureDate: getFutureDate(100),
      duration: "18h:30m",
      image: "/images/destinations/bali.png",
      origin: "LAX",
      originCity: "Los Angeles",
      price: "946",
      returnDate: getFutureDate(109),
      tripType: "roundtrip",
    },
  ],
  domestic: [
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(17)),
      destination: "MIA",
      destinationCity: "Miami",
      departureDate: getFutureDate(17),
      duration: "03h:10m",
      image: "/images/destinations/bali.png",
      origin: "JFK",
      originCity: "New York",
      price: "129",
      returnDate: getFutureDate(22),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(34)),
      destination: "LAS",
      destinationCity: "Las Vegas",
      departureDate: getFutureDate(34),
      duration: "01h:20m",
      image: "/images/destinations/dubai.png",
      origin: "LAX",
      originCity: "Los Angeles",
      price: "89",
      returnDate: getFutureDate(38),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(45)),
      destination: "SEA",
      destinationCity: "Seattle",
      departureDate: getFutureDate(45),
      duration: "02h:15m",
      image: "/images/destinations/singapore.png",
      origin: "SFO",
      originCity: "San Francisco",
      price: "114",
      returnDate: getFutureDate(50),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(59)),
      destination: "BOS",
      destinationCity: "Boston",
      departureDate: getFutureDate(59),
      duration: "02h:30m",
      image: "/images/destinations/paris.png",
      origin: "ORD",
      originCity: "Chicago",
      price: "138",
      returnDate: getFutureDate(64),
      tripType: "roundtrip",
    },
    {
      cabin: "Economy",
      date: getDisplayDate(getFutureDate(94)),
      destination: "DEN",
      destinationCity: "Denver",
      departureDate: getFutureDate(94),
      duration: "02h:05m",
      image: "/images/destinations/istanbul.png",
      origin: "DFW",
      originCity: "Dallas",
      price: "109",
      returnDate: getFutureDate(99),
      tripType: "roundtrip",
    },
  ],
};

const ArrowIcon = ({ direction }) => (
  <svg
    aria-hidden="true"
    className="size-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    viewBox="0 0 24 24"
  >
    <path
      d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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

const DestinationCard = ({ deal, disabled, onSearch }) => (
  <button
    aria-label={`Search ${deal.origin} to ${deal.destination} flights`}
    className="group relative block h-full min-h-[205px] w-full overflow-hidden rounded-[18px] border border-blue/10 bg-white px-4 pb-4 pt-5 text-left shadow-[0_10px_26px_rgba(7,89,139,0.07)] transition-all duration-300 hover:border-blue/30 hover:shadow-[0_16px_32px_rgba(7,89,139,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue disabled:pointer-events-none disabled:opacity-70"
    disabled={disabled}
    onClick={() => onSearch(deal)}
    type="button"
  >
    <div className="absolute -left-1 -top-1 size-22 overflow-hidden rounded-br-full border-b-2 border-r-2 border-blue bg-white p-1">
      <div className="relative size-full overflow-hidden rounded-br-full">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="88px"
          src={deal.image}
        />
      </div>
    </div>

    <div className="ml-22">
      <p className="font-poppins-semibold text-sm leading-tight text-heading">
        Route inspiration
        <span className="mt-1 block text-[10px] font-normal text-light-grey">
          Search live availability
        </span>
      </p>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <div>
        <p className="text-xs text-light-grey">From</p>
        <p className="mt-0.5 font-poppins-semibold text-base text-heading">
          {deal.origin}
        </p>
      </div>

      <div className="flex min-w-16 flex-1 flex-col items-center">
        <div className="flex w-full items-center text-blue">
          <span className="h-px flex-1 border-t border-dashed border-blue/30" />
          <PlaneIcon />
          <span className="h-px flex-1 border-t border-dashed border-blue/30" />
        </div>
        <p className="mt-1 text-[11px] text-light-grey">{deal.duration}</p>
      </div>

      <div className="text-right">
        <p className="text-xs text-light-grey">To</p>
        <p className="mt-0.5 font-poppins-semibold text-base text-heading">
          {deal.destination}
        </p>
      </div>
    </div>

    <div className="mt-3 border-t border-subtle pt-3">
      <p className="text-xs font-poppins-semibold text-blue">{deal.cabin}</p>
      <p className="mt-1 text-xs font-poppins-semibold text-heading">
        {deal.date}
      </p>
    </div>
  </button>
);

const TopDestinationsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("international");
  const [activeSlide, setActiveSlide] = useState(0);
  const [carousel, setCarousel] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const deals = destinationDeals[activeCategory];
  const { searchingDeal, searchDeal } = useFlightDealSearch();

  const syncCarouselState = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
    setActiveSlide(0);
    carousel?.slideTo(0);
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-12 sm:py-14"
      id="top-destinations"
    >
      <DealSearchOverlay deal={searchingDeal} />

      <div className="absolute right-0 top-0 h-full w-1/3 bg-[linear-gradient(135deg,transparent,rgba(168,201,70,0.12))]" />
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="flex items-center gap-2 text-xs font-poppins-semibold uppercase tracking-[0.18em] text-green">
              <span className="h-px w-8 bg-green" />
              Explore more
            </p>
            <h2 className="mt-2 font-poppins-semibold text-[34px] leading-tight text-heading sm:text-[42px]">
              Top destinations
            </h2>
            <p className="mt-2 text-sm text-light-grey sm:text-base">
              Discover popular routes and check live availability for your next
              journey.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Previous destination"
              className="flex size-11 items-center justify-center rounded-full border border-blue bg-white text-blue transition-colors hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:border-subtle disabled:text-light-grey disabled:hover:bg-white"
              disabled={isBeginning}
              onClick={() => carousel?.slidePrev()}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              aria-label="Next destination"
              className="flex size-11 items-center justify-center rounded-full border border-blue bg-white text-blue transition-colors hover:bg-blue hover:text-white disabled:cursor-not-allowed disabled:border-subtle disabled:text-light-grey disabled:hover:bg-white"
              disabled={isEnd}
              onClick={() => carousel?.slideNext()}
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          {[
            ["international", "International routes"],
            ["domestic", "Domestic routes"],
          ].map(([category, label]) => (
            <button
              aria-pressed={activeCategory === category}
              className={`rounded-full px-4 py-2 text-sm font-poppins-semibold transition-colors ${
                activeCategory === category
                  ? "bg-blue text-white"
                  : "bg-blue/5 text-blue hover:bg-blue/10"
              }`}
              key={category}
              onClick={() => changeCategory(category)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 overflow-hidden">
          <Swiper
            a11y={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 1.35, spaceBetween: 14 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 18 },
            }}
            key={activeCategory}
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
            {deals.map((deal) => (
              <SwiperSlide
                className="h-auto!"
                key={`${deal.origin}-${deal.destination}`}
              >
                <DestinationCard
                  deal={deal}
                  disabled={Boolean(searchingDeal)}
                  onSearch={searchDeal}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {deals.map((deal, index) => (
            <button
              aria-label={`Go to ${deal.origin} to ${deal.destination} deal`}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index ? "w-8 bg-blue" : "w-2.5 bg-blue/20"
              }`}
              key={`${deal.origin}-${deal.destination}`}
              onClick={() => carousel?.slideTo(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinationsCarousel;
