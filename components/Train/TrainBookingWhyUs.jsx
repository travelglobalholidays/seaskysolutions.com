import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const benefits = [
  "Route choices shaped around departure time, arrival time, station access, and connections",
  "Clear comparison between economy, standard, business, first class, and sleeper options",
  "Better planning for luggage, family seating, overnight journeys, and scenic rail routes",
  "A simpler way to ask questions before committing to your train itinerary",
];

const TrainBookingWhyUs = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[4px] bg-white shadow-card lg:grid-cols-2">
          <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[330px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/images/train-bg.png)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,89,139,0.18),rgba(7,89,139,0))]"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center bg-white px-5 py-7 sm:px-8 lg:px-10">
            <div className="max-w-[540px]">
              <p className="text-[11px] font-[900] uppercase tracking-[0.1em] text-accent-strong">
                Why book train travel with us?
              </p>
              <h2 className="mt-2 max-w-[500px] text-[26px] font-[900] leading-[1.08] tracking-normal text-[var(--brand-blue)] sm:text-[32px] lg:text-[36px]">
                Rail Plans That Feel Clear Before You Board.
              </h2>
              <p className="mt-3 text-[14px] font-[500] leading-6 text-slate-700 sm:text-[15px]">
                Sea Sky Solutions LLC helps travelers sort through routes, timings,
                classes, and station details so train booking feels organized
                instead of overwhelming.
              </p>

              <ul className="mt-4 space-y-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-[13px] font-[700] leading-5 text-[var(--brand-blue)]"
                  >
                    <FiCheckCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                className="mt-5 inline-flex h-10 items-center justify-center rounded-[5px] bg-[var(--brand-green)] px-6 text-[12px] font-[800] uppercase text-accent-contrast shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-blue)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
                href="/about-us/"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainBookingWhyUs;
