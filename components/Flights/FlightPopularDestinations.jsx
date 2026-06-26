import { FiMapPin } from "react-icons/fi";
import { serviceContacts } from "@/config/siteContact";

const flightContact = serviceContacts.flights;

const destinations = [
  {
    city: "New York",
    label: "Business & city breaks",
    price: "99",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Miami",
    label: "Beach trips & weekends",
    price: "89",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Los Angeles",
    label: "West Coast travel",
    price: "129",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "London",
    label: "International routes",
    price: "299",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80",
  },
];

const FlightPopularDestinations = () => {
  return (
    <section className="bg-white py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[760px]">
            <h2 className="flex items-center gap-3 text-start text-[24px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[26px]">
              <FiMapPin
                className="h-6 w-6 shrink-0 text-[var(--brand-green)]"
                aria-hidden="true"
              />
              Popular Flight Destinations
            </h2>
            <p className="mt-2 text-[14px] font-[500] leading-6 text-slate-700 sm:text-[15px]">
              Explore popular flight routes for business travel, vacations,
              family visits, international plans, and quick weekend escapes.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <a
              key={destination.city}
              href={flightContact.phone.href}
              aria-label={`Call for flight options to ${destination.city}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-[7px] bg-[var(--brand-blue)] shadow-[0_10px_24px_rgba(7,89,139,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
                role="img"
                aria-label={`${destination.city} flight destination`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,89,139,0)_32%,rgba(7,89,139,0.94)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-3 text-white">
                <div>
                  <h3 className="text-[20px] font-[700] leading-none">
                    {destination.city}
                  </h3>
                  <p className="mt-1 text-[11px] font-[700] text-white/80">
                    {destination.label}
                  </p>
                </div>
                <p className="shrink-0 text-[14px] font-[800] leading-none">
                  from{" "}
                  <span className="text-[18px] font-[800] text-[var(--brand-green)]">
                    ${destination.price}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightPopularDestinations;
