import Image from "next/image";
import { FiCompass, FiHeadphones, FiShield } from "react-icons/fi";

const benefits = [
  {
    title: "Curated Travel Plans",
    description:
      "Flights, stays, cruises and experiences selected around the way you want to travel.",
    icon: FiCompass,
  },
  {
    title: "Guidance You Can Trust",
    description:
      "Helpful advice and clear options from the first idea through your journey home.",
    icon: FiHeadphones,
  },
  {
    title: "Travel With Confidence",
    description:
      "Thoughtful planning and dependable support for a smooth, stress-free experience.",
    icon: FiShield,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef4f6] py-10 sm:py-12 lg:py-16">
      <div
        className="pointer-events-none absolute -left-16 bottom-20 h-56 w-56 rotate-[-16deg] bg-[url('/images/shapes/bg_shape_1.png')] bg-contain bg-no-repeat opacity-25"
        aria-hidden="true"
      />
      <div className="site-container relative mx-auto px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1180px] lg:pr-[270px] xl:pr-[285px]">
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">
              <FiCompass className="text-[18px]" aria-hidden="true" />
              Why Sea Sky Solutions LLC
            </p>
            <h2 className="mt-1 text-[30px] font-[500] leading-[1.08] tracking-tight text-[var(--brand-blue)] sm:text-[44px] lg:text-[38px]">
              Your Trusted Travel Partner
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] font-[400] leading-6 text-[var(--brand-blue)]/65 sm:text-[16px] sm:leading-7">
              Guiding you from the first travel idea to the moments you will
              remember long after you return.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:mt-8">
            {benefits.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="min-h-[225px] rounded-[21px] border border-[var(--brand-blue)]/15  bg-white p-5 sm:p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-blue)]/8 text-[22px] text-[var(--brand-green)]">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-2 text-[16px] font-[500] leading-6 text-[var(--brand-blue)]">
                  {title}
                </h3>
                <p className="mt-2 text-[12px] font-[400] leading-5 text-[var(--brand-blue)]">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <Image
            src="/images/choose_img.png"
            alt="Suitcase, camera, map and globes ready for travel"
            width={1024}
            height={1536}
            className="pointer-events-none absolute -right-14 bottom-[-38px] hidden w-[300px] max-w-none lg:block xl:-right-10 xl:bottom-[-62px] xl:w-[365px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
