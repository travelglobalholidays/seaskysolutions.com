import { FiMapPin } from "react-icons/fi";
import { serviceContacts } from "@/config/siteContact";

const trainContact = serviceContacts.trainBooking;

const routes = [
  {
    city: "New York",
    label: "Northeast rail hub",
    price: "29",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Washington DC",
    label: "Capital connections",
    price: "35",
    image:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Chicago",
    label: "Midwest departures",
    price: "42",
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    city: "Los Angeles",
    label: "West Coast routes",
    price: "49",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1000&q=80",
  },
];

const TrainPopularRoutes = () => {
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
              Popular Train Travel Hubs
            </h2>
            <p className="mt-2 text-[14px] font-[500] leading-6 text-slate-700 sm:text-[15px]">
              Explore rail journeys from major city stations for business
              travel, family visits, weekend breaks, and cross-country routes.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <a
              key={route.city}
              href={trainContact.phone.href}
              aria-label={`Call for train booking from ${route.city}`}
              className="group relative block aspect-[16/10] overflow-hidden rounded-[7px] bg-[var(--brand-blue)] shadow-[0_10px_24px_rgba(7,89,139,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110 group-focus-visible:scale-110"
                style={{ backgroundImage: `url(${route.image})` }}
                role="img"
                aria-label={`${route.city} train route`}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,89,139,0)_32%,rgba(7,89,139,0.94)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-3 text-white">
                <div>
                  <h3 className="text-[20px] font-[700] leading-none">
                    {route.city}
                  </h3>
                  <p className="mt-1 text-[11px] font-[700] text-white/80">
                    {route.label}
                  </p>
                </div>
                <p className="shrink-0 text-[14px] font-[800] leading-none">
                  from{" "}
                  <span className="text-[18px] font-[800] text-[var(--brand-green)]">
                    ${route.price}
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

export default TrainPopularRoutes;
