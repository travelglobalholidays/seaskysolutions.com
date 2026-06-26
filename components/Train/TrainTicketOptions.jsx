import { serviceContacts } from "@/config/siteContact";
import Link from "next/link";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

const trainContact = serviceContacts.trainBooking;

const ticketOptions = [
  {
    name: "Senior Discount",
    description: "Reduced-fare rail options for eligible senior travelers",
    image: "/images/trains/train-1.png",
  },
  {
    name: "Regional Trains",
    description: "Short and mid-distance routes between nearby cities",
    image: "/images/trains/train-2.png",
  },
  {
    name: "Express Trains",
    description: "Faster rail journeys with fewer stops on select routes",
    image: "/images/trains/train-3.png",
  },
  {
    name: "Business Class",
    description: "Quiet, comfortable seating for work-focused travel",
    image: "/images/trains/train-4.png",
  },
  {
    name: "Student Discount",
    description: "Rail fare choices for eligible student passengers",
    image: "/images/trains/train-5.png",
  },
  {
    name: "One Way",
    description: "Simple point-to-point rail travel for single journeys",
    image: "/images/trains/train-6.png",
  },
  {
    name: "Round Trip",
    description: "Departure and return train options in one request",
    image: "/images/trains/train-7.png",
  },
  {
    name: "Multi City",
    description: "Plan multiple rail stops across one connected itinerary",
    image: "/images/trains/train-8.png",
  },
  {
    name: "Rail Passes",
    description: "Flexible pass options for travelers covering more ground",
    image: "/images/trains/train-9.png",
  },
  {
    name: "Auto Train",
    description: "Rail travel options that can include vehicle transport",
    image: "/images/trains/train-10.png",
  },
];

const TrainTicketOptions = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-[800] uppercase tracking-[0.14em] text-[var(--brand-green)]">
              Rail choices
            </p>
            <h2 className="mt-2 text-[30px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[36px]">
              Choose the Ticket Style That Fits
            </h2>
          </div>

          <Link
            className="inline-flex h-12 w-fit items-center gap-3 rounded-[6px] border border-[var(--brand-blue)]/35 px-6 text-[14px] font-[700] text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            href="/contact-us/"
          >
            Request Train Help
            <FiArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ticketOptions.map((ticket) => (
            <article
              key={ticket.name}
              className="flex min-h-[320px] flex-col rounded-[7px] border-2 border-gray-200 bg-white px-6 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/70 hover:shadow-[0_18px_45px_rgba(7,89,139,0.12)]"
            >
              <div className="flex flex-1 items-center justify-center py-3">
                <div
                  className="h-[142px] w-full rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${ticket.image})` }}
                  role="img"
                  aria-label={`${ticket.name} train booking option`}
                />
              </div>

              <h3 className="text-[18px] font-[800] uppercase leading-tight text-[var(--brand-blue)]">
                {ticket.name}
              </h3>
              <p className="mt-2 min-h-[40px] text-[12px] font-[700] leading-5 text-slate-600">
                {ticket.description}
              </p>

              <a
                href={trainContact.phone.href}
                aria-label={`Call now to check train options for ${ticket.name}`}
                className="mt-5 flex h-9 items-center justify-center gap-2 rounded-[4px] bg-[var(--brand-blue)] text-[12px] font-[800] uppercase text-white transition-colors hover:bg-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                Get a Quote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainTicketOptions;
