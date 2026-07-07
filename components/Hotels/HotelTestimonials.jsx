import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "They helped me find a hotel close to my meeting area, which saved a lot of time during the trip.",
    name: "Rachel S.",
    location: "New York, USA",
  },
  {
    quote:
      "The room options were explained clearly, and the family stay recommendation worked perfectly.",
    name: "Daniel P.",
    location: "Orlando, USA",
  },
  {
    quote:
      "I needed an airport hotel for a late arrival, and the guidance made the overnight stop easy.",
    name: "Priya M.",
    location: "Miami, USA",
  },
  {
    quote:
      "The hotel enquiry was quick, and I understood the location, rate range, and room type before booking.",
    name: "Anthony G.",
    location: "Las Vegas, USA",
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

const HotelTestimonials = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 text-center">
          <h2 className="text-[24px] font-[900] uppercase leading-none tracking-normal text-[var(--brand-blue)] sm:text-[30px]">
            Guest Stay Notes
          </h2>
          <p className="mt-2 text-[13px] font-[700] text-slate-600 sm:text-[14px]">
            Hotel travelers finding better-fit stays with clearer choices.
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

export default HotelTestimonials;
