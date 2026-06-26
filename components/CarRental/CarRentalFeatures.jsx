import {
  FiHeadphones,
  FiMapPin,
  FiShield,
  FiTag,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  {
    title: "Route-Friendly Pickup",
    description:
      "Plan rentals around airport arrivals, hotel stays, downtown meetings, or weekend departures.",
    icon: FiMapPin,
  },
  {
    title: "Upfront Daily Ranges",
    description:
      "See starting prices by category so you can shortlist vehicles before making a call.",
    icon: FiTag,
  },
  {
    title: "Right-Size Vehicles",
    description:
      "Choose around passenger count, luggage space, comfort needs, and the kind of trip ahead.",
    icon: FiShield,
  },
  {
    title: "Fast Phone Checks",
    description:
      "Confirm timing, availability, and location details quickly with a real person.",
    icon: FiHeadphones,
  },
  {
    title: "Less Guesswork",
    description:
      "Get clear next steps instead of sorting through confusing rental terms on your own.",
    icon: FiThumbsUp,
  },
];

const CarRentalFeatures = () => {
  return (
    <section className="bg-[var(--brand-blue)] py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex items-start gap-4 text-white">
              <span className="flex shrink-0 text-[var(--brand-green)]">
                <Icon className="h-[46px] w-[46px]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[12px] font-[800] uppercase leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[12px] font-[600] leading-5 text-white/90">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRentalFeatures;
