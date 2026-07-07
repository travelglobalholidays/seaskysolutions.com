import {
  FiCalendar,
  FiHeadphones,
  FiMapPin,
  FiTag,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  {
    title: "Station-to-Station Planning",
    description:
      "Compare rail choices around departure stations, arrival points, and connection windows.",
    icon: FiMapPin,
  },
  {
    title: "Fare Class Clarity",
    description:
      "Understand seat types, cabin comfort, starting fares, and travel timing before you decide.",
    icon: FiTag,
  },
  {
    title: "Flexible Travel Dates",
    description:
      "Check options across nearby dates when your schedule can shift for better route availability.",
    icon: FiCalendar,
  },
  {
    title: "Phone Booking Help",
    description:
      "Talk through route questions, luggage concerns, station timing, and trip preferences.",
    icon: FiHeadphones,
  },
  {
    title: "Simple Trip Flow",
    description:
      "Move from route idea to ticket request with fewer screens, fewer tabs, and clearer details.",
    icon: FiThumbsUp,
  },
];

const TrainBookingFeatures = () => {
  return (
    <section className="bg-[var(--brand-blue)] py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex items-start gap-4 text-white">
              <span className="flex shrink-0 text-accent-on-dark">
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

export default TrainBookingFeatures;
