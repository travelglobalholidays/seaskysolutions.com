import Image from "next/image";
import { FiCompass } from "react-icons/fi";

const bookingSteps = [
  {
    number: "01",
    title: "Choose Your Destination",
    description:
      "Browse our curated flights, stays, cruises and packages to find a trip that inspires you.",
    icon: "/images/icons/world.png",
    iconAlt: "Globe with location pins",
  },
  {
    number: "02",
    title: "Select Your Package",
    description:
      "Pick your travel dates, number of travelers and the package options that suit you.",
    icon: "/images/icons/package.png",
    iconAlt: "Travel package",
  },
  {
    number: "03",
    title: "Confirm & Pay",
    description:
      "Secure your spot with clear, convenient payment options and helpful guidance.",
    icon: "/images/icons/pay.png",
    iconAlt: "Payment card",
  },
  {
    number: "04",
    title: "Get Ready to Explore",
    description:
      "Receive your trip details, pack your bags and get ready for a seamless getaway.",
    icon: "/images/icons/expolore.png",
    iconAlt: "Travel suitcase",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[var(--brand-blue)] py-12 sm:py-16 lg:py-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 lg:bg-fixed"
        style={{ backgroundImage: "url('/images/working-bg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[rgba(4,77,120,0.9)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(0deg,rgba(3,52,85,0.35),transparent)]"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="flex items-center justify-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">
            <FiCompass className="text-[17px]" aria-hidden="true" />
            Let&apos;s Get Started
          </p>
          <h2 className="mt-2 text-[26px] font-[500] leading-[1.1] tracking-tight text-white sm:text-[36px] lg:text-[34px]">
            How to Book Your Adventure
          </h2>
          <p className="mt-3 text-[14px] font-[500] leading-6 text-white/80 sm:text-[15px]">
            From the first idea to your final itinerary, planning your escape is
            simple.
          </p>
        </div>

        <div className="relative mx-auto mt-9 max-w-[1460px] lg:mt-12">
          <Image
            src="/images/shapes/curve_line.png"
            alt=""
            width={1920}
            height={225}
            className="pointer-events-none absolute -top-7 left-1/2 z-0 hidden h-[250px] w-[135%] max-w-none -translate-x-1/2 object-fill opacity-45 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-4 lg:hidden">
            {bookingSteps.map((step) => (
              <article
                key={step.number}
                className="grid grid-cols-[58px_minmax(0,1fr)] items-center gap-4 rounded-[20px] border border-white/20 bg-white/8 p-4 backdrop-blur-sm sm:p-5"
              >
                <span className="flex size-[54px] items-center justify-center rounded-full border-2 border-dashed border-[var(--brand-green)] text-[21px] font-[500] text-[var(--brand-green)]">
                  {step.number}
                </span>
                <div className="relative hidden size-[64px] items-center justify-center sm:size-[78px]">
                  <Image
                    src="/images/icons/drop.png"
                    alt=""
                    width={78}
                    height={101}
                    className="absolute inset-0 h-full w-full object-contain "
                    aria-hidden="true"
                  />
                  <Image
                    src={step.icon}
                    alt={step.iconAlt}
                    width={36}
                    height={36}
                    className="relative z-10 size-9 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[16px] font-[500] leading-6 text-white sm:text-[16px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/85 sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative z-10 hidden grid-cols-4 gap-6 lg:grid xl:gap-9">
            {bookingSteps.map((step, index) => {
              const detailsOnTop = index % 2 === 0;

              return (
                <article
                  key={step.number}
                  className="group relative min-h-[278px]"
                >
                  <div
                    className={`absolute left-0 right-0 ${detailsOnTop ? "top-0" : "bottom-0"}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[var(--brand-green)] text-[25px] font-[500] text-[var(--brand-green)]">
                        {step.number}
                      </span>
                      <div className="max-w-[245px] pt-1 xl:max-w-[265px]">
                        <h3 className="text-[20px] font-[700] leading-6 text-white xl:text-[22px]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-6 text-white/85 xl:text-[16px]">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute left-1/2 flex size-[92px] -translate-x-1/2 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 ${detailsOnTop ? "bottom-0" : "top-0"}`}
                  >
                    <Image
                      src="/images/icons/drop.png"
                      alt=""
                      width={78}
                      height={101}
                      className="absolute h-[92px] w-[72px] object-contain"
                      aria-hidden="true"
                    />
                    <Image
                      src={step.icon}
                      alt={step.iconAlt}
                      width={38}
                      height={38}
                      className="relative z-10 size-[38px] object-contain"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
