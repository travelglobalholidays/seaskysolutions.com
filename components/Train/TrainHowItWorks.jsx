const steps = [
  {
    title: "Choose the Journey",
    description:
      "Share departure city, arrival station, travel date, passengers, and preferred timing.",
  },
  {
    title: "Compare Train Options",
    description:
      "Review fare class, trip duration, departure time, stops, and onboard comfort.",
  },
  {
    title: "Check the Details",
    description:
      "Confirm station notes, baggage needs, traveler names, and ticket conditions.",
  },
  {
    title: "Board Prepared",
    description:
      "Arrive with your route plan clear and your rail journey ready to begin.",
  },
];

const TrainHowItWorks = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-[900] uppercase leading-none tracking-normal text-[var(--brand-blue)] sm:text-[30px]">
            How Train Booking Works
          </h2>
          <p className="mt-2 text-[13px] font-[700] text-slate-600 sm:text-[14px]">
            A clearer route from travel idea to confirmed rail plan.
          </p>
        </div>

        <div className="mx-auto flex max-w-[1180px] flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex items-start gap-4 lg:w-[23%]"
            >
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-blue)]/25 bg-white text-[26px] font-[900] text-[var(--brand-blue)]">
                {index + 1}
              </div>
              <div className="pt-1">
                <h3 className="text-[15px] font-[900] leading-tight text-[var(--brand-blue)]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-[12px] font-[700] leading-5 text-slate-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 ? (
                <div
                  className="absolute right-[-28px] top-[26px] hidden w-[50px] items-center lg:flex xl:right-[-42px] xl:w-[70px]"
                  aria-hidden="true"
                >
                  <span className="h-px flex-1 border-t border-dashed border-[var(--brand-blue)]/45" />
                  <span className="-ml-1 h-1.5 w-1.5 rotate-45 border-r border-t border-[var(--brand-blue)]/45" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainHowItWorks;
