import { FiMapPin } from "react-icons/fi";
import { serviceContacts } from "@/config/siteContact";

const carRentalContact = serviceContacts.carRental;

const locations = [
  {
    city: "Orlando",
    price: "25",
    image:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Miami",
    price: "31",
    image:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "New York",
    price: "39",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Chicago",
    price: "34",
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1000&q=80",
  },
];

const CarRentalLocations = () => {
  return (
    <section className="bg-white py-8">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[760px]">
            <h2 className="flex items-center gap-3 text-start text-[24px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[26px]">
              <FiMapPin
                className="h-6 w-6 shrink-0 text-accent-strong"
                aria-hidden="true"
              />
              Popular USA Driving Hubs
            </h2>
            <p className="mt-2 text-[14px] font-[500] leading-6 text-slate-700 sm:text-[15px]">
              Start your trip in cities where travelers often need flexible
              wheels for theme parks, beaches, meetings, family visits, and
              cross-town movement.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <a
              key={location.city}
              href={carRentalContact.phone.href}
              aria-label={`Call for car rental in ${location.city}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-[7px] bg-[var(--brand-blue)] shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                style={{ backgroundImage: `url(${location.image})` }}
                role="img"
                aria-label={`${location.city} car rental location`}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,89,139,0)_35%,rgba(7,89,139,0.92)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-3 text-white">
                <h3 className="text-[20px] font-[700] leading-none">
                  {location.city}
                </h3>
                <p className="shrink-0 text-[14px] font-[800] leading-none">
                  from{" "}
                  <span className="text-[18px] font-[800] text-accent-on-dark">
                    ${location.price}
                  </span>
                  <span className="text-[12px] font-[800] text-white/90">
                    {" "}
                    /day
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

export default CarRentalLocations;
