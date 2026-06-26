import Image from "next/image";
import { FiHeadphones, FiNavigation, FiShield } from "react-icons/fi";
import { serviceContacts } from "@/config/siteContact";

const carRentalContact = serviceContacts.carRental;

const supportPoints = [
  {
    label: "Live Travel Experts",
    icon: FiHeadphones,
  },
  {
    label: "Car Options by Trip Type",
    icon: FiNavigation,
  },
  {
    label: "Clear Rental Next Steps",
    icon: FiShield,
  },
];

const CarRentalCallExperts = () => {
  return (
    <section className="bg-white py-8 lg:pt-16">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="relative rounded-[7px] bg-[var(--brand-blue)] text-white shadow-[0_14px_30px_rgba(7,89,139,0.18)]">
          <div className="absolute inset-0 overflow-hidden rounded-[7px]">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_21%_8%,rgba(255,255,255,0.14),transparent_26%),linear-gradient(90deg,var(--brand-blue)_0%,#0b6ea8_52%,#06476f_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className="relative grid min-h-[260px] grid-cols-1 items-center gap-4 px-5 pb-7 pt-0 sm:min-h-[285px] sm:px-8 lg:min-h-[170px] lg:grid-cols-[280px_1fr_390px] lg:gap-8 lg:px-12 lg:py-0 xl:min-h-[185px]">
            <div className="relative mx-auto -mt-8 h-[190px] w-[230px] self-end sm:-mt-10 sm:h-[215px] sm:w-[260px] lg:absolute lg:bottom-0 lg:left-10 lg:mt-0 lg:h-[220px] lg:w-[290px] xl:h-[238px] xl:w-[315px]">
              <Image
                src="/images/travel-1.png"
                alt="Sea Sky Solutions LLC travel expert"
                fill
                sizes="(min-width: 1280px) 315px, (min-width: 1024px) 290px, 260px"
                className="object-contain object-bottom"
              />
            </div>

            <div className="text-center lg:col-start-2 lg:text-left">
              <p className="text-[18px] font-[400] leading-tight text-white/90 sm:text-[22px]">
                Need the right car for your route?
              </p>
              <a
                href={carRentalContact.phone.href}
                className="mt-2 block text-[32px] font-[900] leading-none tracking-normal text-[var(--brand-green)] sm:text-[36px]"
              >
                {carRentalContact.phone.display}
              </a>
              <p className="mt-2 text-[15px] font-[500] leading-tight text-white sm:text-[18px]">
                Speak with our team for pickup, vehicle, and timing guidance.
              </p>
            </div>

            <div className="border-white/25 pt-4 lg:border-l lg:pt-0 lg:pl-8">
              <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
                {supportPoints.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center justify-center gap-3 text-[15px] font-[500] text-white lg:justify-start lg:text-[18px]"
                  >
                    <span className="shrink-0 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalCallExperts;
