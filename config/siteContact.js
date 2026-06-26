export const serviceContacts = {
  default: {
    label: "Sea Sky Solutions LLC",
    phone: {
      display: "+1 (888) 237-6451",
      href: "tel:+18882376451",
    },
  },
  carRental: {
    label: "Car Rental",
    phone: {
      display: "+1 (888) 385-0753",
      href: "tel:+18883850753",
    },
  },
  trainBooking: {
    label: "Train Booking",
    phone: {
      display: "+1 (888) 353-1702",
      href: "tel:+18883531702",
    },
  },
  hotels: {
    label: "Hotels",
    phone: {
      display: "+1 (888) 383-3261",
      href: "tel:+18883833261",
    },
  },
  flights: {
    label: "Flights",
    phone: {
      display: "+1 (888) 237-6451",
      href: "tel:+18882376451",
    },
  },
};

export const getServiceContactByPathname = (pathname = "") => {
  if (pathname.startsWith("/car-rental")) {
    return serviceContacts.carRental;
  }

  if (pathname.startsWith("/train-booking")) {
    return serviceContacts.trainBooking;
  }

  if (pathname.startsWith("/hotels")) {
    return serviceContacts.hotels;
  }

  if (pathname.startsWith("/flights")) {
    return serviceContacts.flights;
  }

  return serviceContacts.default;
};

export const siteContact = {
  businessName: "Sea Sky Solutions LLC",
  phone: serviceContacts.default.phone,
  email: {
    address: "info@seaskysolutions.com",
    href: "mailto:info@seaskysolutions.com",
  },
  address: {
    display: "212 N. 2nd St. STE 100, Richmond, KY 40475",
    href: "#",
  },
};
