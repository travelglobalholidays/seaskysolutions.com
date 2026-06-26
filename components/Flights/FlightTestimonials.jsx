import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "They helped me compare flight times and layovers so I could choose a route that made sense.",
    name: "Laura B.",
    location: "New York, USA",
  },
  {
    quote:
      "I needed a last-minute flight and the fare options were explained clearly before I moved ahead.",
    name: "Mark R.",
    location: "Miami, USA",
  },
  {
    quote:
      "The business class guidance saved time for my work trip and made the schedule easier.",
    name: "Sonia P.",
    location: "Chicago, USA",
  },
  {
    quote:
      "Our family trip had different dates and airports, and the route help made planning smoother.",
    name: "Kevin M.",
    location: "Los Angeles, USA",
  },
];

const Rating = () => (
  <div className="mb-3 flex items-center gap-1 text-[var(--brand-green)]">
    {Array.from({ length: 5 }).map((_, index) => (
      <FiStar key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
    ))}
  </div>
);

const FlightTestimonials = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 text-center">
          <h2 className="text-[24px] font-[900] uppercase leading-none tracking-normal text-[var(--brand-blue)] sm:text-[30px]">
            Traveler Flight Notes
          </h2>
          <p className="mt-2 text-[13px] font-[700] text-slate-600 sm:text-[14px]">
            Flight travelers finding better routes, timing, and fare clarity.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[10px] border border-[#d9e2ee] bg-white px-6 py-5 shadow-[0_8px_22px_rgba(7,89,139,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/60 hover:shadow-[0_18px_45px_rgba(7,89,139,0.12)]"
            >
              <Rating />
              <p className="text-[13px] font-[700] leading-6 text-[var(--brand-blue)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 text-[12px] font-[800] leading-5 text-[var(--brand-blue)]">
                <p>{testimonial.name}</p>
                <p className="text-slate-500">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightTestimonials;
