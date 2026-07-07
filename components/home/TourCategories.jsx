import { FiArrowRight, FiCompass } from "react-icons/fi";
import { siteContact } from "@/config/siteContact";

const categories = [
  {
    title: "Adventure Lite",
    destinations: "10+ Destinations",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Island Vibes",
    destinations: "15+ Destinations",
    price: "$249",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "City Breaks",
    destinations: "25+ Destinations",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Wildlife Trails",
    destinations: "40+ Destinations",
    price: "$549",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85",
  },
];

const TourCategories = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-6 sm:py-10 lg:py-18">
      <div
        className="absolute inset-x-0 top-0 h-[510px] bg-[var(--brand-blue)] bg-cover bg-center [clip-path:polygon(0_0,100%_0,100%_82%,84%_88%,66%_96%,50%_100%,33%_95%,16%_87%,0_78%)] sm:h-[480px] lg:h-[410px]"
        style={{ backgroundImage: "url('/images/shapes/categories-bg.jpg')" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1125px] px-5 sm:px-8 lg:px-0">
        <div className="flex flex-col gap-5 text-white sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="flex items-center gap-2 text-[14px] font-[500] uppercase tracking-[0.22em] text-accent-on-dark">
              <FiCompass className="text-[17px]" aria-hidden="true" />
              Tour categories
            </p>
            <h2 className="text-[28px] font-[500] leading-[1.08] tracking-tight text-white sm:text-[52px] lg:text-[50px]">
              Choose Your Travel Style
            </h2>
            <p className="mt-3 max-w-xl text-[16px] font-[400] leading-7 text-white/70 sm:text-[17px]">
              Adventure, luxury, culture — your choice, your way.
            </p>
          </div>
        </div>

        <div
          id="tour-categories"
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-7"
        >
          {categories.map((category) => (
            <article
              key={category.title}
              className="group relative rounded-[20px] border border-white/25 bg-transparent transition-colors duration-300 hover:border-white hover:bg-white"
            >
              <div>
                <h3 className="px-5 py-5 text-center text-[19px] font-[700] leading-6 text-[var(--brand-blue)] md:text-white transition-colors duration-300 group-hover:text-[var(--brand-blue)] lg:py-[19px] lg:text-[20px]">
                  {category.title}
                </h3>
              </div>
              <div className="h-[245px] overflow-hidden rounded-[20px] sm:h-[255px] lg:h-[251px]">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                  role="img"
                  aria-label={category.title}
                />
              </div>
              <div className="relative z-10 -mt-7 flex min-h-[90px] items-center justify-between gap-4 rounded-t-[30px] rounded-b-[20px] bg-section-muted px-5 py-4 text-[var(--brand-blue)] shadow-card">
                <div>
                  <p className="text-[15px] font-[500] leading-5 text-[var(--brand-blue)]/65">
                    {category.destinations}
                  </p>
                  <p className="mt-1 text-[16px] font-[700] text-accent-strong">
                    From {category.price}
                  </p>
                </div>
                <a
                  href={siteContact.phone.href}
                  className="flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-[var(--brand-blue)]/8 text-[22px] text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-green)] hover:text-accent-contrast focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)]"
                  aria-label={`Explore ${category.title}`}
                >
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;
