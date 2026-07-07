import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CircleDollarSign,
  PlaneTakeoff,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const helpCards = [
  {
    title: "New bookings",
    description:
      "Call for help comparing travel dates, cabin classes, route options, and passenger details.",
    Icon: PlaneTakeoff,
  },
  {
    title: "Flight changes",
    description:
      "Review schedule changes, date changes, and route adjustments with a travel specialist.",
    Icon: CalendarClock,
  },
  {
    title: "Cancellations",
    description:
      "Understand airline rules, possible fees, and available options before cancelling.",
    Icon: ShieldCheck,
  },
  {
    title: "Refund questions",
    description:
      "Get guidance on refund eligibility, airline timelines, and next steps for your itinerary.",
    Icon: CircleDollarSign,
  },
  {
    title: "Booking confirmation",
    description:
      "Check reservation details and receive support with itinerary information.",
    Icon: BadgeCheck,
  },
  {
    title: "Travel support",
    description:
      "Speak with Sea Sky Solutions for route planning, fare review, and booking details.",
    Icon: RefreshCw,
  },
];

const AirlineSeoMobileHelp = ({ page }) => {
  const phoneDisplay = getPhoneDisplay();
  const phoneHref = getPhoneHref();

  return (
    <section className="block bg-blue-soft px-4 py-6 md:hidden">
      <div className="mx-auto max-w-md">
        <div className="mb-4">
          <p className="text-xs font-[650] uppercase tracking-wide text-[var(--brand-blue)]">
            {page.label} details
          </p>
          <h2 className="mt-1 text-2xl font-[700] leading-tight text-[var(--brand-blue)]">
            Review your flight before booking
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Tap any option to discuss route, fare, and itinerary details at{" "}
            <span className="font-[700] text-[var(--brand-blue)]">
              {phoneDisplay}
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {helpCards.map(({ title, description, Icon }) => (
            <a
              aria-label={`Call Sea Sky Solutions at ${phoneDisplay} for ${title}`}
              className="group flex min-h-28 items-center gap-3 rounded-[8px] border border-[var(--brand-blue)]/10 bg-white p-4 shadow-card transition active:scale-[0.99]"
              href={phoneHref}
              key={title}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-base font-[700] leading-snug text-[var(--brand-blue)]">
                  {title}
                </span>
                <span className="mt-1 block text-sm leading-5 text-slate-700">
                  {description}
                </span>
              </span>

              <ArrowRight
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-accent-strong transition group-active:translate-x-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlineSeoMobileHelp;
