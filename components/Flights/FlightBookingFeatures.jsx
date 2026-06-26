import {
  FiCalendar,
  FiHeadphones,
  FiMapPin,
  FiTag,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  {
    title: "Route Planning",
    description:
      "Compare departure cities, arrival airports, stops, and connection timing.",
    icon: FiMapPin,
  },
  {
    title: "Fare Clarity",
    description:
      "Review cabin type, starting fare range, baggage notes, and route basics.",
    icon: FiTag,
  },
  {
    title: "Date Flexibility",
    description:
      "Check nearby dates when your schedule can shift for better flight options.",
    icon: FiCalendar,
  },
  {
    title: "Phone Flight Help",
    description:
      "Talk through routes, timing, passengers, cabin preferences, and changes.",
    icon: FiHeadphones,
  },
  {
    title: "Simple Requests",
    description:
      "Move from flight idea to enquiry with clearer choices and fewer steps.",
    icon: FiThumbsUp,
  },
];

const FlightBookingFeatures = () => {
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

export default FlightBookingFeatures;
