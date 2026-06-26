import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "I needed a car right after landing, and the pickup guidance made the whole arrival feel much easier.",
    name: "John D.",
    location: "New York, USA",
  },
  {
    quote:
      "They helped me choose a compact car for a short city stay without pushing me into something bigger.",
    name: "Sarah M.",
    location: "Los Angeles, USA",
  },
  {
    quote:
      "For our family road trip, the SUV recommendation had the right space for passengers and bags.",
    name: "Michael T.",
    location: "Chicago, USA",
  },
  {
    quote:
      "I liked that the pricing conversation was clear before I moved forward with the rental request.",
    name: "Emily R.",
    location: "Miami, USA",
  },
];

const Rating = () => {
  return (
    <div className="mb-3 flex items-center gap-1 text-[var(--brand-green)]">
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

const CarRentalTestimonials = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 text-center">
          <h2 className="text-[24px] font-[900] uppercase leading-none tracking-normal text-[var(--brand-blue)] sm:text-[30px]">
            Customer Road Notes
          </h2>
          <p className="mt-2 text-[13px] font-[700] text-slate-600 sm:text-[14px]">
            Different trips, different cars, same goal: a smoother drive.
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

export default CarRentalTestimonials;
