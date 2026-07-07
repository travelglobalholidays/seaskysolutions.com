"use client";

import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  CreditCard,
  Headset,
  Phone,
  Plane,
  Shield,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Plane,
    title: "Extensive Airline Coverage",
    description:
      "Compare routes and fare options across major domestic and international airlines.",
  },
  {
    icon: Shield,
    title: "Trusted Fare Choices",
    description:
      "Review clear itinerary details, fare types, and supplier rules before you book.",
  },
  {
    icon: Headset,
    title: "24/7 Travel Support",
    description:
      "Call real travel experts for booking help, schedule changes, cancellations, and refund questions.",
  },
  {
    icon: CreditCard,
    title: "Secure Booking Flow",
    description:
      "Search and continue through a secure booking experience with transparent travel information.",
  },
];

const flightTypes = [
  {
    type: "One-Way Flights",
    description: "Useful for business trips, flexible plans, or relocation.",
  },
  {
    type: "Round-Trip Flights",
    description: "Ideal for vacations, family travel, and planned returns.",
  },
  {
    type: "Domestic Flights",
    description: "Search routes across major U.S. cities and regional airports.",
  },
  {
    type: "International Flights",
    description:
      "Explore global routes with support for more complex itineraries.",
  },
];

const whyChoose = [
  "Personalized phone support from real travel specialists",
  "Featured fare deals and popular route discovery",
  "Flexible one-way and round-trip search options",
  "Clear passenger and cabin class selection",
  "Encrypted search details on the results page",
  "Support for booking changes, cancellations, and refunds",
];

const FlightBookingContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = getPhoneDisplay();
  const phoneHref = getPhoneHref();

  return (
    <section className="bg-white py-8 sm:py-10" id="flight-booking-content">
      <div className="container">
        <article className="max-w-[1280px]">
          <h2 className="font-poppins-semibold text-3xl leading-tight text-heading">
            Flight booking support with Sea Sky Solutions
          </h2>

          <div
            className={`relative mt-5 space-y-6 text-sm leading-7 text-light-blue sm:text-base ${
              !isExpanded ? "max-h-[560px] overflow-hidden" : ""
            }`}
          >
            <div className="space-y-4">
              <h3 className="font-poppins-semibold text-2xl text-heading">
                Search flights and compare airline ticket options
              </h3>
              <p>
                Looking for affordable flights or an easier way to compare
                airline ticket options? Sea Sky Solutions helps travelers search fares,
                review popular routes, and connect with human support when
                booking questions come up.
              </p>
              <p>
                Whether you are planning a domestic trip, an international
                vacation, a family visit, or a business itinerary, our flight
                page brings search, fare inspiration, destination ideas, and
                support resources into one place.
              </p>
            </div>

            <div>
              <h3 className="font-poppins-semibold text-xl text-heading">
                Why choose Sea Sky Solutions for flight reservations?
              </h3>
              <p className="mt-2">
                Sea Sky Solutions is built around clear flight search and practical
                support. You can compare routes online, then call our travel
                experts for fare-rule review or itinerary guidance.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  className="rounded-xl border border-subtle bg-light-grey p-4"
                  key={title}
                >
                  <div className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-poppins-semibold text-heading">
                        {title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-light-blue">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-poppins-semibold text-xl text-heading">
                Your go-to page for cheap plane tickets
              </h3>
              <p className="mt-2">
                Use the Sea Sky Solutions flight search to compare travel dates,
                passenger counts, cabin classes, and route options. Featured
                fare sections below the search form help you discover popular
                routes before you decide.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {flightTypes.map((flight) => (
                <div className="flex items-start gap-3" key={flight.type}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue" />
                  <p>
                    <strong className="text-heading">{flight.type}:</strong>{" "}
                    {flight.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-poppins-semibold text-xl text-heading">
                What makes Sea Sky Solutions different?
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <li className="flex items-start gap-2" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-blue/10 bg-[linear-gradient(135deg,var(--surface-blue),var(--card-bg),var(--accent-soft))] p-6 text-center">
              <Clock className="mx-auto h-8 w-8 text-blue" />
              <h3 className="mt-3 font-poppins-semibold text-2xl text-heading">
                Ready to fly?
              </h3>
              <p className="mx-auto mt-2 w-full max-w-2xl text-center text-sm leading-6 text-light-blue">
                Call Sea Sky Solutions for help finding flights to the USA, Europe,
                Asia, and more.
              </p>
              <a
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 font-poppins-semibold text-white transition hover:bg-blue-dark"
                href={phoneHref}
              >
                <Phone className="h-4 w-4" />
                Call {phoneNumber}
              </a>
            </div>

            {!isExpanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-blue/5 px-6 py-2.5 font-poppins-semibold text-blue transition hover:bg-blue/10"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              type="button"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  See Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  See More
                </>
              )}
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FlightBookingContent;
