"use client";

import { FiCalendar, FiMapPin, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { siteContact } from "@/config/siteContact";

const favoriteTrips = [
  {
    location: "Bali, Indonesia",
    title: "Island Escape",
    price: "$199",
    duration: "7 Days - 6 Nights",
    description: "Beach stays | Temple visits | Sunset cruises",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=85",
  },
  {
    location: "Nepal",
    title: "Himalayan Adventure",
    price: "$299",
    duration: "6 Days - 5 Nights",
    description: "Mountain views | Local culture | Guided trails",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=85",
  },
  {
    location: "Paris, France",
    title: "European City Explorer",
    price: "$499",
    duration: "8 Days - 7 Nights",
    description: "City icons | Museums | Evening experiences",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=85",
  },
  {
    location: "Kenya & Tanzania",
    title: "African Safari Escape",
    price: "$799",
    duration: "3 Days - 2 Nights",
    description: "Big Five drives | Lodge stays | Savannah sunsets",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=700&q=85",
  },
  {
    location: "Santorini, Greece",
    title: "Aegean Summer Days",
    price: "$459",
    duration: "5 Days - 4 Nights",
    description: "Sea views | Island dining | Charming villages",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=700&q=85",
  },
  {
    location: "Dubai, UAE",
    title: "Desert & City Discovery",
    price: "$389",
    duration: "4 Days - 3 Nights",
    description: "City lights | Desert safari | Premium stays",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=700&q=85",
  },
];

const TravelerFavorites = () => {
  return (
    <section id="traveler-favorites" className="relative isolate  bg-[#f7fafb] py-12 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,250,251,0.98)_0%,rgba(247,250,251,0.88)_30%,rgba(7,89,139,0.18)_100%)]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">
            <FiStar className="text-[17px]" aria-hidden="true" />
            Traveler Favorites
          </p>
          <h2 className="mt-2 text-[30px] font-[500] leading-[1.08] tracking-tight text-[var(--brand-blue)] sm:text-[46px] lg:text-[50px]">
            Top Picks by Travelers
          </h2>
          <p className="mt-3 text-[16px] font-[400] leading-7 text-[var(--brand-blue)]/65 sm:text-[17px]">
            Explore the destinations our travelers keep coming back to.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Grid, Pagination]}
          grid={{ rows: 1, fill: "row" }}
          slidesPerView={1}
          spaceBetween={18}
          autoplay={{
            delay: 4600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="favorites-slider mt-8 pb-12 sm:mt-10 lg:pb-14"
          breakpoints={{
            720: {
              slidesPerView: 2,
              grid: { rows: 2, fill: "row" },
              spaceBetween: 22,
            },
          }}
        >
          {favoriteTrips.map((trip) => (
            <SwiperSlide key={trip.title} className="!h-auto">
              <a
                href={siteContact.phone.href}
                className="group relative mt-5 block h-[calc(100%-20px)] rounded-[22px] border border-[var(--brand-blue)]/15 bg-white p-4 shadow-[0_7px_0_rgba(5,54,85,0.14)] transition duration-300  hover:border-[var(--brand-green)]/60 hover:shadow-[0_16px_28px_rgba(5,54,85,0.18)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/20 sm:p-5"
                aria-label={`Explore ${trip.title} in ${trip.location}`}
              >
                <span className="absolute -top-5 left-5 z-10 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/15 bg-white px-4 py-2 text-[14px] font-[500] text-[var(--brand-blue)]/65 shadow-[0_4px_12px_rgba(5,54,85,0.06)]">
                  <FiMapPin
                    className="text-[18px] text-[var(--brand-green)]"
                    aria-hidden="true"
                  />
                  {trip.location}
                </span>
                <div className="mt-3 grid gap-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center">
                  <div className="h-[180px] overflow-hidden rounded-[14px] sm:h-[150px]">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${trip.image})` }}
                      role="img"
                      aria-label={trip.title}
                    />
                  </div>
                  <div className="min-w-0 pt-1 sm:pt-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[18px] font-[500] leading-7 text-[var(--brand-blue)]">
                        {trip.title}
                      </h3>
                      <span className="flex shrink-0 items-center gap-1 rounded-full bg-[var(--brand-blue)]/7 px-2 py-1 text-[14px] font-[500] text-[var(--brand-blue)]">
                        <FiStar
                          className="fill-[var(--brand-green)] text-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {trip.rating}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--brand-blue)]/15 pb-3">
                      <p className="text-[16px] text-[var(--brand-blue)]/65">
                        <span className="text-[22px] font-[700] text-[var(--brand-green)]">
                          {trip.price}
                        </span>{" "}
                        / Traveler
                      </p>
                      <p className="flex items-center gap-2 text-[14px] font-[500] text-[var(--brand-blue)]">
                        <FiCalendar
                          className="text-[15px] text-[var(--brand-green)]"
                          aria-hidden="true"
                        />
                        {trip.duration}
                      </p>
                    </div>
                    <p className="mt-3 truncate text-[15px] text-[var(--brand-blue)]/65">
                      {trip.description}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TravelerFavorites;
