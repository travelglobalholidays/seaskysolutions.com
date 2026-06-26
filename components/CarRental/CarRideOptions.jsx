import { serviceContacts } from "@/config/siteContact";
import Link from "next/link";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

const carRentalContact = serviceContacts.carRental;

const rideOptions = [
  {
    name: "Economy Cars",
    description: "Budget-friendly daily driving - 4 seats - 2 bags",
    price: "25",
    image: "/images/cars/car-1.webp",
  },
  {
    name: "Compact Cars",
    description: "Easy parking and light fuel use - 4 seats",
    price: "29",
    image: "/images/cars/car-2.png",
  },
  {
    name: "Midsize Cars",
    description: "Balanced comfort for longer routes - 5 seats",
    price: "35",
    image: "/images/cars/car-3.png",
  },
  {
    name: "Fullsize Cars",
    description: "More legroom for highway travel - 5 seats",
    price: "45",
    image: "/images/cars/car-4.png",
  },
  {
    name: "SUVs",
    description: "Room for families, luggage, and open roads",
    price: "55",
    image: "/images/cars/car-5.png",
  },
  {
    name: "Luxury Cars",
    description: "Premium interiors for polished arrivals",
    price: "75",
    image: "/images/cars/car-6.png",
  },
  {
    name: "Vans",
    description: "Group-friendly seating with extra luggage room",
    price: "65",
    image: "/images/cars/car-7.png",
  },
  {
    name: "Pickup Trucks",
    description: "Practical power for gear and heavier loads",
    price: "69",
    image: "/images/cars/car-8.webp",
  },
];

const CarRideOptions = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-[800] uppercase tracking-[0.14em] text-[var(--brand-green)]">
              Vehicle lineup
            </p>
            <h2 className="mt-2 text-[30px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[36px]">
              Pick a Car for the Way You Travel
            </h2>
          </div>

          <Link
            className="inline-flex h-12 w-fit items-center gap-3 rounded-[6px] border border-[var(--brand-blue)]/35 px-6 text-[14px] font-[700] text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            href="/contact-us/"
          >
            View All Deals
            <FiArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rideOptions.map((ride) => (
            <article
              key={ride.name}
              className="flex min-h-[320px] flex-col rounded-[7px] border-2 border-gray-200 bg-white px-6 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/70 hover:shadow-[0_18px_45px_rgba(7,89,139,0.12)]"
            >
              <div className="flex flex-1 items-center justify-center py-3">
                <div
                  className="h-[142px] w-full rounded-md bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${ride.image})` }}
                  role="img"
                  aria-label={`${ride.name} rental`}
                />
              </div>

              <h3 className="text-[18px] font-[800] uppercase leading-tight text-[var(--brand-blue)]">
                {ride.name}
              </h3>
              <p className="mt-2 min-h-[40px] text-[12px] font-[700] leading-5 text-slate-600">
                {ride.description}
              </p>

              <div className="mt-3 leading-none">
                <span className="text-[15px] font-[800] text-[var(--brand-blue)]">
                  From{" "}
                </span>
                <span className="text-[24px] font-[700] text-[var(--brand-green)]">
                  $
                </span>
                <span className="text-[28px] font-[900] text-[var(--brand-blue)]">
                  {ride.price}
                </span>
                <span className="text-[14px] font-[800] text-[var(--brand-blue)]">
                  {" "}
                  /day
                </span>
              </div>

              <p className="mt-1 text-[10px] font-[800] text-[var(--brand-blue)]">
                Incl. basic rental charges
              </p>

              <a
                href={carRentalContact.phone.href}
                aria-label={`Call now to request a quote for ${ride.name}`}
                className="mt-4 flex h-9 items-center justify-center gap-2 rounded-[4px] bg-[var(--brand-blue)] text-[12px] font-[800] uppercase text-white transition-colors hover:bg-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                Call to Check Availability
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarRideOptions;
