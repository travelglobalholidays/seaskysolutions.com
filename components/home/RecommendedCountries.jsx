"use client";

import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { siteContact } from "@/config/siteContact";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const countries = [
  {
    name: "Egypt",
    tours: "30+ Tours",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Maldives",
    tours: "10+ Tours",
    price: "$479",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Brazil",
    tours: "05+ Tours",
    price: "$289",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Island",
    tours: "04+ Tours",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Greece",
    tours: "18+ Tours",
    price: "$359",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=85",
  },
];

const RecommendedCountries = () => {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-10 lg:pb-18">
      <div
        className="pointer-events-none absolute -left-20 -top-24 h-64 w-[430px] rotate-[-12deg] bg-[url('/images/shapes/bg_shape_1.png')] bg-contain bg-no-repeat opacity-[0.14]"
        aria-hidden="true"
      />
      <div className="site-container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="flex items-center justify-center gap-2 text-[14px] font-[500] uppercase tracking-[0.22em] text-accent-strong">
            <FiMapPin aria-hidden="true" />
            Recommended Countries
          </p>
          <h2 className="text-[28px] font-[500] leading-[1.08] tracking-tight text-[var(--brand-blue)] sm:text-[52px] lg:text-[50px]">
            Favorites for Every Explorer
          </h2>
          <p className="mt-3 text-[16px] font-[400] leading-7 text-[var(--brand-blue)]/65 sm:text-[17px]">
            Plan your journey to our most sought-after spots.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={countries.length > 4}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={22}
          slidesPerView={1.08}
          className="mt-8 !overflow-visible sm:mt-10"
          breakpoints={{
            560: { slidesPerView: 2, spaceBetween: 22 },
            900: { slidesPerView: 3, spaceBetween: 26 },
            1200: { slidesPerView: 4, spaceBetween: 28 },
          }}
        >
          {countries.map((country) => (
            <SwiperSlide key={country.name} className="!h-auto">
              <article className="group flex h-full flex-col">
                <a
                  href={siteContact.phone.href}
                  className="relative block h-[340px] overflow-hidden rounded-[21px] sm:h-[370px] lg:h-[300px]"
                  aria-label={`Explore tours in ${country.name}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${country.image})` }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent"
                    aria-hidden="true"
                  />
                  <p className="absolute bottom-5 left-5 flex items-center gap-3 text-[20px] font-[600] text-white">
                    <span className="flex size-9 items-center justify-center rounded-full bg-white/20 text-[21px] backdrop-blur-sm">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    {country.name}
                  </p>
                </a>

                <div className="mt-3 flex min-h-[66px] items-center justify-between gap-3 rounded-full border border-[var(--brand-blue)]/10 bg-white py-1 pl-5 pr-1 shadow-card">
                  <p className="text-[16px] font-[500] text-[var(--brand-blue)]/65 sm:text-[17px]">
                    {country.tours} -{" "}
                    <span className="font-[700] text-accent-strong">
                      From {country.price}
                    </span>
                  </p>
                  <a
                    href="#find-your-tour"
                    className="flex size-[54px] shrink-0 items-center justify-center rounded-r-full rounded-l-[13px] bg-[var(--brand-blue)]/10 text-[23px] text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-green)] hover:text-accent-contrast focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
                    aria-label={`View ${country.name} tours`}
                  >
                    <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecommendedCountries;
