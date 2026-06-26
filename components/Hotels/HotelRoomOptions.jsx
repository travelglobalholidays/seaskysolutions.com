import { serviceContacts } from "@/config/siteContact";
import Link from "next/link";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

const hotelContact = serviceContacts.hotels;

const roomOptions = [
  {
    name: "Luxury Hotels",
    description: "Premium stays with refined rooms, service, and comfort",
    price: "99",
    image: "/images/hotels/hotel-1.png",
  },
  {
    name: "Budget Hotels",
    description: "Affordable stays for quick trips and value travel",
    price: "39",
    image: "/images/hotels/hotel-2.png",
  },
  {
    name: "Airport Hotels",
    description: "Convenient stays near terminals for early or late flights",
    price: "55",
    image: "/images/hotels/hotel-3.png",
  },
  {
    name: "Family Hotels",
    description: "Roomy options for parents, kids, luggage, and longer stays",
    price: "65",
    image: "/images/hotels/hotel-4.png",
  },
  {
    name: "Business Hotels",
    description: "Work-friendly stays near offices, venues, and city centers",
    price: "59",
    image: "/images/hotels/hotel-5.png",
  },
  {
    name: "Beach & Resort Hotels",
    description: "Relaxed stays close to beaches, pools, and vacation spots",
    price: "75",
    image: "/images/hotels/hotel-6.png",
  },
  {
    name: "Last Minute Hotel Deals",
    description: "Quick hotel choices for sudden plans and same-week stays",
    price: "49",
    image: "/images/hotels/hotel-7.png",
  },
  {
    name: "Pet Friendly Hotels",
    description: "Welcoming hotel options for travelers with pets",
    price: "58",
    image: "/images/hotels/hotel-8.png",
  },
];

const HotelRoomOptions = () => {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[13px] font-[800] uppercase tracking-[0.14em] text-[var(--brand-green)]">
              Room categories
            </p>
            <h2 className="mt-2 text-[30px] font-[800] leading-tight text-[var(--brand-blue)] sm:text-[36px]">
              Choose the Stay That Matches Your Trip
            </h2>
          </div>

          <Link
            className="inline-flex h-12 w-fit items-center gap-3 rounded-[6px] border border-[var(--brand-blue)]/35 px-6 text-[14px] font-[700] text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-green)] hover:text-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
            href="/contact-us/"
          >
            Request Hotel Help
            <FiArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roomOptions.map((room) => (
            <article
              key={room.name}
              className="flex min-h-[320px] flex-col rounded-[7px] border-2 border-gray-200 bg-white px-6 py-4 text-center transition duration-200 hover:-translate-y-0.5 hover:border-[var(--brand-green)]/70 hover:shadow-[0_18px_45px_rgba(7,89,139,0.12)]"
            >
              <div className="flex flex-1 items-center justify-center py-3">
                <div
                  className="h-[142px] w-full rounded-md bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                  role="img"
                  aria-label={`${room.name} hotel option`}
                />
              </div>

              <h3 className="text-[18px] font-[800] uppercase leading-tight text-[var(--brand-blue)]">
                {room.name}
              </h3>
              <p className="mt-2 min-h-[40px] text-[12px] font-[700] leading-5 text-slate-600">
                {room.description}
              </p>

              <div className="mt-3 leading-none">
                <span className="text-[15px] font-[800] text-[var(--brand-blue)]">
                  From{" "}
                </span>
                <span className="text-[24px] font-[700] text-[var(--brand-green)]">
                  $
                </span>
                <span className="text-[28px] font-[900] text-[var(--brand-blue)]">
                  {room.price}
                </span>
                <span className="text-[14px] font-[800] text-[var(--brand-blue)]">
                  {" "}
                  /night
                </span>
              </div>

              <p className="mt-1 text-[10px] font-[800] text-[var(--brand-blue)]">
                Estimated starting rate
              </p>

              <a
                href={hotelContact.phone.href}
                aria-label={`Call now to check hotel options for ${room.name}`}
                className="mt-4 flex h-9 items-center justify-center gap-2 rounded-[4px] bg-[var(--brand-blue)] text-[12px] font-[800] uppercase text-white transition-colors hover:bg-[var(--brand-green)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-green)]"
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                Get a Quote
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelRoomOptions;
