import Link from "next/link";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import { serviceContacts } from "@/config/siteContact";

const flightContact = serviceContacts.flights;

const flightOptions = [
  {
    name: "One Way Flights",
    description: "Simple single-route flight options for direct travel plans",
    price: "79",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Round Trip Flights",
    description: "Outbound and return flight choices in one itinerary",
    price: "149",
    image:
      "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Multi City Flights",
    description: "Plan multiple destinations across one connected journey",
    price: "199",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Business Class",
    description: "Premium cabins for work trips and long-haul comfort",
    price: "399",
    image:
      "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "International Flights",
    description: "Cross-border flight options for vacations and visits",
    price: "249",
    image:
      "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Domestic Flights",
    description: "City-to-city flights across popular local routes",
    price: "89",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Student Flights",
    description: "Helpful flight choices for eligible student travelers",
    price: "69",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Last Minute Flights",
    description: "Flight options for urgent plans and near-date travel",
    price: "119",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=900&q=80",
  },
];

const FlightOptions = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-[800] uppercase tracking-[0.14em] text-[var(--brand-green)]">
              Flight categories
            </p>
            <h2 className="mt-2 text-[30px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[36px]">
              Choose the Flight Type That Fits
            </h2>
          </div>

          <Link
            className="inline-flex h-12 w-fit items-center gap-3 rounded-[6px] border border-[var(--brand-blue)]/35 px-6 text-[14px] font-[700] text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            href="/contact-us/"
          >
            Request Flight Help
            <FiArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flightOptions.map((flight) => (
            <article
              key={flight.name}
              className="flex min-h-[320px] flex-col rounded-[7px] border-2 border-gray-200 bg-white px-6 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/70 hover:shadow-[0_18px_45px_rgba(7,89,139,0.12)]"
            >
              <div className="flex flex-1 items-center justify-center py-3">
                <div
                  className="h-[142px] w-full rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${flight.image})` }}
                  role="img"
                  aria-label={`${flight.name} option`}
                />
              </div>

              <h3 className="text-[18px] font-[800] uppercase leading-tight text-[var(--brand-blue)]">
                {flight.name}
              </h3>
              <p className="mt-2 min-h-[40px] text-[12px] font-[700] leading-5 text-slate-600">
                {flight.description}
              </p>

              <div className="mt-3 leading-none">
                <span className="text-[15px] font-[800] text-[var(--brand-blue)]">
                  From{" "}
                </span>
                <span className="text-[24px] font-[700] text-[var(--brand-green)]">
                  $
                </span>
                <span className="text-[28px] font-[900] text-[var(--brand-blue)]">
                  {flight.price}
                </span>
              </div>

              <p className="mt-1 text-[10px] font-[800] text-[var(--brand-blue)]">
                Estimated starting fare
              </p>

              <a
                href={flightContact.phone.href}
                aria-label={`Call now to check options for ${flight.name}`}
                className="mt-4 flex h-9 items-center justify-center gap-2 rounded-[4px] bg-[var(--brand-blue)] text-[12px] font-[800] uppercase text-white transition-colors hover:bg-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                Call to Check Flights
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightOptions;
