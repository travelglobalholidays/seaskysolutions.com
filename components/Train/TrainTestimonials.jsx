import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "The route options were explained clearly, and I felt confident choosing the better departure time.",
    name: "Amanda L.",
    location: "Boston, USA",
  },
  {
    quote:
      "I had questions about stations and baggage, and the team made the booking process much easier.",
    name: "Robert K.",
    location: "Washington DC, USA",
  },
  {
    quote:
      "They helped me compare standard and business class for a work trip without wasting time.",
    name: "Nina P.",
    location: "Chicago, USA",
  },
  {
    quote:
      "Our family rail journey felt simple once we knew the timing, seats, and route details.",
    name: "Carlos M.",
    location: "Los Angeles, USA",
  },
];

const Rating = () => {
  return (
    <div className="mb-3 flex items-center gap-1 text-accent-strong">
      {Array.from({ length: 5 }).map((_, index) => (
        <FiStar
          key={index}
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const TrainTestimonials = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 text-center">
          <h2 className="text-[24px] font-[900] uppercase leading-none tracking-normal text-[var(--brand-blue)] sm:text-[30px]">
            Passenger Notes
          </h2>
          <p className="mt-2 text-[13px] font-[700] text-slate-600 sm:text-[14px]">
            Train travelers planning routes, seats, and timing with more ease.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[10px] border border-subtle bg-white px-6 py-5 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/60 hover:shadow-card-hover"
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

export default TrainTestimonials;
