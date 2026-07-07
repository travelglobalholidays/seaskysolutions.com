import {
  FiCalendar,
  FiClock,
  FiHeadphones,
  FiMapPin,
  FiShield,
} from "react-icons/fi";

const highlights = [
  {
    label: "City",
    detail: "Hotel Stays",
    icon: FiMapPin,
  },
  {
    label: "Flexible",
    detail: "Check-In Dates",
    icon: FiCalendar,
  },
  {
    label: "Clear",
    detail: "Room Choices",
    icon: FiShield,
  },
  {
    label: "Live",
    detail: "Stay Help",
    icon: FiHeadphones,
  },
];

const HotelBanner = () => {
  return (
    <section className="relative isolate min-h-[520px] overflow-hidden bg-blue-soft">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hotel.webp)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0.58)_56%,rgba(255,255,255,0.08)_84%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[var(--brand-green)]"
        aria-hidden="true"
      />

      <div className="site-container flex min-h-[520px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
        <p className="mb-5 w-full rounded-[6px] border-l-4 border-[var(--brand-green)] bg-white/90 px-4 py-3 text-[12px] font-[800] leading-5 text-[var(--brand-blue)] shadow-card sm:text-[13px]">
          Important: We are an Independent Travel Assistance Platform and are
          not associated with any airline or any company.
        </p>

        <div className="w-full max-w-[710px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[13px] font-[800] uppercase tracking-[0.12em] text-[var(--brand-blue)]">
            <FiClock
              className="text-[16px] text-accent-strong"
              aria-hidden="true"
            />
            Hotel stays made easier
          </div>

          <h1 className="font-sans text-[44px] font-[900] uppercase leading-[0.98] tracking-normal text-[var(--brand-blue)] sm:text-[58px] lg:text-[64px] xl:text-[70px]">
            Stay Where
            <span className="block text-accent-strong">
              It Fits Best
            </span>
          </h1>

          <p className="mt-5 max-w-[560px] text-[17px] font-[600] leading-7 text-slate-700 sm:text-[19px]">
            Find hotel options for business trips, family vacations, airport
            stopovers, weekend breaks, and longer city stays.
          </p>

          <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-x-5 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
            {highlights.map(({ label, detail, icon: Icon }) => (
              <div
                key={label}
                className="flex min-w-[150px] items-center gap-2.5"
              >
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)] text-[var(--brand-blue)] shadow-button">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="leading-[1.08]">
                  <span className="block text-[12px] font-[900] text-[var(--brand-blue)]">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-[700] text-slate-600">
                    {detail}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelBanner;
