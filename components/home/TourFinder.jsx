"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";

const destinations = [
  "Caribbean",
  "Europe",
  "Dubai",
  "Hawaii",
  "Mexico",
  "Alaska",
];

const durations = ["3–5 days", "6–8 days", "9–12 days", "13+ days"];

const travellerOptions = [
  "1 traveler",
  "2 travelers",
  "3 travelers",
  "4 travelers",
  "5+ travelers",
];

function TourPackageCard({ className = "" }) {
  return (
    <aside
      className={`relative overflow-hidden rounded-[22px] bg-[var(--brand-blue)] px-7 py-8 text-center text-white shadow-card ${className}`}
    >
      <span
        className="absolute -right-8 -top-9 size-28 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <p className="text-[45px] font-[700] leading-none tracking-tight italic">
        80+
      </p>
      <div className="mx-auto mt-6 flex w-fit items-center rounded-full border border-white/25 bg-white/10 p-1">
        <span className="flex size-11 items-center justify-center rounded-full bg-white/20 text-[21px]">
          <FiMapPin aria-hidden="true" />
        </span>
        <span className="mx-2 h-1.5 w-9 rounded-full bg-[var(--brand-green)]" />
        <span className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-green)] text-[22px]">
          <FiCheckCircle aria-hidden="true" />
        </span>
      </div>
      <p className="mt-5 text-[16px] font-[500] leading-7">
        Handpicked tour packages
      </p>
    </aside>
  );
}

const TourFinder = () => {
  const [search, setSearch] = useState({
    destination: "",
    date: "",
    duration: "",
    travellers: "2 travelers",
  });
  const [confirmation, setConfirmation] = useState("");

  const updateSearch = (event) => {
    const { name, value } = event.target;
    setSearch((current) => ({ ...current, [name]: value }));
    setConfirmation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    Object.entries(search).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    window.history.pushState(null, "", `?${params.toString()}#find-your-tour`);
    setConfirmation(
      `Showing available ${search.destination || "all"} tours for ${search.travellers}.`,
    );
  };

  return (
    <section
      id="find-your-tour"
      className="relative isolate overflow-hidden bg-white bg-cover bg-center py-6 sm:py-10 lg:py-18"
      style={{ backgroundImage: "url('/images/shapes/bg_shape_1.png')" }}
    >
      <div className="site-container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[14px] font-[500] uppercase tracking-[0.22em] text-accent-strong">
            Plan your escape
          </p>
          <h2 className=" text-[28px] font-[500] leading-[1.08] tracking-tight text-[var(--brand-blue)] sm:text-[52px] lg:text-[50px]">
            Find the right tour for you
          </h2>
        </div>

        <div className="mx-auto mt-4 grid items-center gap-8 lg:grid-cols-[290px_minmax(0,1fr)_290px] lg:gap-12">
          <TourPackageCard className="hidden lg:block" />

          <form
            className="rounded-[26px] border-[10px] border-[var(--brand-blue)]/8 bg-white p-5 shadow-card sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
          >
            <label
              className="block text-[14px] font-[500] "
              htmlFor="destination"
            >
              Where do you want to go?
            </label>
            <div className="relative mt-2">
              <FiMapPin
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[20px] text-accent-strong"
                aria-hidden="true"
              />
              <select
                id="destination"
                name="destination"
                value={search.destination}
                onChange={updateSearch}
                className="h-[62px] w-full appearance-none rounded-xl border border-[var(--brand-blue)]/15 bg-white px-12 pr-5 text-[14px] font-[600]  outline-none transition focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15"
                required
              >
                <option value="" disabled>
                  Choose a destination
                </option>
                {destinations.map((destination) => (
                  <option key={destination} value={destination}>
                    {destination}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-[14px] font-[500] " htmlFor="date">
                  When would you like to travel?
                </label>
                <div className="relative mt-2">
                  <FiCalendar
                    className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[20px] text-accent-strong"
                    aria-hidden="true"
                  />
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={search.date}
                    onChange={updateSearch}
                    className="h-[62px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-12 pr-4 text-[14px] font-[600]  outline-none transition focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-[14px] font-[500] "
                  htmlFor="duration"
                >
                  How long is your trip?
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={search.duration}
                  onChange={updateSearch}
                  className="mt-2 h-[62px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-5 text-[14px] font-[600]  outline-none transition focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15"
                >
                  <option value="">Any duration</option>
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label
              className="mt-6 block text-[14px] font-[500] "
              htmlFor="travellers"
            >
              Number of travelers
            </label>
            <div className="relative mt-2">
              <FiUsers
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[20px] text-accent-strong"
                aria-hidden="true"
              />
              <select
                id="travellers"
                name="travellers"
                value={search.travellers}
                onChange={updateSearch}
                className="h-[62px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-12 pr-5 text-[14px] font-[600]  outline-none transition focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15"
              >
                {travellerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex min-h-[58px] items-center gap-4 rounded-full bg-[var(--brand-green)] py-2 pl-6 pr-2 text-[17px] font-[500] text-accent-contrast transition  hover:bg-[var(--brand-blue)] hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/30"
              >
                Search tours
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-[21px] text-accent-strong">
                  <FiArrowRight aria-hidden="true" />
                </span>
              </button>
              <p
                className="max-w-xs text-[14px] font-[650] leading-5 text-[var(--brand-blue)]/70"
                aria-live="polite"
              >
                {confirmation}
              </p>
            </div>
          </form>

          <Image
            src="/images/travel-1.png"
            alt="Tour finder"
            width={600}
            height={600}
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default TourFinder;
