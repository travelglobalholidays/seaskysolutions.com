import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import { BadgeCheck, Clock3, CreditCard, Headphones } from "lucide-react";

const services = [
  {
    title: "24/7 traveler support",
    Icon: Headphones,
  },
  {
    title: "Booking review assistance",
    Icon: BadgeCheck,
  },
  {
    title: "Secure payment guidance",
    Icon: CreditCard,
  },
  {
    title: "Expert trip planning help",
    Icon: Clock3,
  },
];

const AirlineSeoCustomerService = () => {
  const phoneDisplay = getPhoneDisplay();
  const phoneHref = getPhoneHref();

  return (
    <section className="block bg-white px-4 py-6 md:hidden">
      <div className="mx-auto max-w-md">
        <h2 className="mb-4 text-center text-2xl font-[900] text-[var(--brand-blue)]">
          Customer service
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {services.map(({ title, Icon }) => (
            <a
              aria-label={`Call Sea Sky Solutions at ${phoneDisplay} for ${title}`}
              className="relative flex aspect-square overflow-hidden rounded-[8px] border border-[var(--brand-blue)]/15 bg-white p-3 text-center shadow-[0_10px_28px_rgba(7,89,139,0.08)] transition active:scale-[0.98]"
              href={phoneHref}
              key={title}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-[var(--brand-green)]" />
              <span className="flex w-full flex-col items-center justify-center rounded-[6px] bg-gradient-to-b from-[#eef8ff] to-white px-2 py-3">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white shadow-[0_8px_18px_rgba(7,89,139,0.18)]">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span className="text-sm font-[900] leading-snug text-[var(--brand-blue)]">
                  {title}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlineSeoCustomerService;
