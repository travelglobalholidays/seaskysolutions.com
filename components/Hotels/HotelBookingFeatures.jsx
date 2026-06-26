import {
  FiCalendar,
  FiHeadphones,
  FiMapPin,
  FiTag,
  FiThumbsUp,
} from "react-icons/fi";

const features = [
  {
    title: "Location-Led Stays",
    description:
      "Shortlist hotels near airports, business districts, landmarks, beaches, and event venues.",
    icon: FiMapPin,
  },
  {
    title: "Rate Range Clarity",
    description:
      "Compare estimated nightly rates by room type, hotel style, and travel season.",
    icon: FiTag,
  },
  {
    title: "Date Flexibility",
    description:
      "Check nearby dates when your schedule can shift for better hotel availability.",
    icon: FiCalendar,
  },
  {
    title: "Phone Stay Help",
    description:
      "Talk through room preferences, location questions, guest count, and arrival timing.",
    icon: FiHeadphones,
  },
  {
    title: "Easy Room Requests",
    description:
      "Move from destination idea to hotel enquiry with fewer steps and clearer choices.",
    icon: FiThumbsUp,
  },
];

const HotelBookingFeatures = () => {
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

export default HotelBookingFeatures;
