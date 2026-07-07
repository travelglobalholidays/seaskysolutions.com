"use client";

import { siteContact } from "@/config/siteContact";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiPhoneCall } from "react-icons/fi";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const heroSlides = [
  {
    eyebrow: "Flights",
    title: "Fly smarter to every horizon",
    description:
      "Compare flexible routes, premium cabins, and smooth connections for business trips, family visits, and dream vacations.",
    cta: "Book Flights",
    priceLabel: "Flights start at",
    price: "$299",
    unit: "Round trip",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85",
    accent: "Seamless air travel",
  },
  {
    eyebrow: "Hotels",
    title: "Stay close to what matters",
    description:
      "From city-view suites to relaxing beachfront resorts, find stays that match your schedule, budget, and style.",
    cta: "Find Hotels",
    priceLabel: "Rooms start at",
    price: "$89",
    unit: "Per night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=85",
    accent: "Handpicked comfort",
  },
  {
    eyebrow: "Cruise",
    title: "Set sail beyond the ordinary",
    description:
      "Discover ocean escapes with elegant cabins, curated excursions, and days designed around pure relaxation.",
    cta: "Explore Cruises",
    priceLabel: "Cruises start at",
    price: "$599",
    unit: "Per guest",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=2200&q=85",
    accent: "Blue-water escapes",
  },
  {
    eyebrow: "Packages",
    title: "One trip, perfectly arranged",
    description:
      "Bundle flights, hotels, cruises, transfers, and local experiences into a trip that feels effortless from day one.",
    cta: "View Packages",
    priceLabel: "Packages start at",
    price: "$799",
    unit: "Per person",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85",
    accent: "Complete getaways",
  },
];

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-blue)]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        speed={900}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".hero-slider-prev",
          nextEl: ".hero-slider-next",
        }}
        className="min-h-[620px] sm:min-h-[680px] lg:min-h-[660px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[660px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,50,82,0.94)_0%,rgba(4,50,82,0.78)_35%,rgba(4,50,82,0.34)_68%,rgba(4,50,82,0.1)_100%)]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_76%_25%,rgba(168,201,70,0.18),transparent_30%)]"
                aria-hidden="true"
              />

              <div className="site-container relative z-10 flex min-h-[620px] items-center px-5 py-8 sm:min-h-[680px] sm:px-8 lg:min-h-[560px] lg:px-12">
                <div className="max-w-[760px] pt-4 text-white sm:pt-8 lg:ml-[9%]">
                  <h1 className="max-w-[1024px] text-[48px] font-[700] leading-[1.05] tracking-normal sm:text-[64px] lg:text-[38px] xl:text-[86px]">
                    {slide.title}
                  </h1>

                  <div className="mt-8 grid max-w-[700px] gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:mt-2">
                    <div>
                      <p className="max-w-[470px] text-[16px] font-[400] leading-8 text-white/82 sm:text-[20px]">
                        {slide.description}
                      </p>

                      <a
                        href={siteContact.phone.href}
                        className="mt-7 inline-flex min-h-[54px] w-full max-w-[280px] items-center justify-center gap-3 rounded-full border border-[var(--brand-blue)]/10 bg-[var(--brand-green)] px-4 text-[15px] font-[700] text-accent-contrast transition-colors hover:border-[var(--brand-green)] hover:bg-white hover:text-[var(--brand-blue)] sm:mt-9 sm:w-[240px] sm:max-w-none sm:justify-start lg:min-h-[66px] lg:px-5 lg:text-[18px]"
                        aria-label={`Call toll free number ${siteContact.phone.display}`}
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[20px] text-white lg:size-11">
                          <FiPhoneCall aria-hidden="true" />
                        </span>
                        <span className="whitespace-nowrap leading-none">
                          {siteContact.phone.display}
                        </span>
                      </a>
                    </div>

                    <div className="relative hidden sm:block">
                      <Image
                        src="/images/shapes/arrow-shape.svg"
                        alt=""
                        width={150}
                        height={66}
                        className="absolute -left-40 top-20 w-[135px] max-w-none rotate-[-6deg] opacity-95 lg:-left-44 lg:top-24 lg:w-[150px]"
                        aria-hidden="true"
                      />
                      <div className="relative w-[240px] rounded-[14px] bg-white px-8 py-7 text-center text-[var(--brand-blue)] shadow-modal">
                        <span className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rounded-full border-[6px] border-white bg-[var(--brand-green)]" />
                        <p className="text-[20px] font-[700] leading-7">
                          {slide.priceLabel}
                        </p>
                        <p className="mt-3 text-[30px] font-[900] text-accent-strong">
                          {slide.price}
                        </p>
                        <div className="my-3 h-px bg-black/15" />
                        <p className="text-[18px] font-[500] text-black/65">
                          {slide.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="hero-slider-prev absolute left-4 top-1/2 z-20 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-[34px] text-white backdrop-blur transition-colors hover:bg-[var(--brand-green)] hover:text-accent-contrast focus:outline-none focus:ring-2 focus:ring-white md:flex xl:left-14 xl:size-10"
        aria-label="Previous hero slide"
      >
        <FiChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        className="hero-slider-next absolute right-4 top-1/2 z-20 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-[34px] text-white backdrop-blur transition-colors hover:bg-[var(--brand-green)] hover:text-accent-contrast focus:outline-none focus:ring-2 focus:ring-white md:flex xl:right-14 xl:size-10"
        aria-label="Next hero slide"
      >
        <FiChevronRight aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroBanner;
