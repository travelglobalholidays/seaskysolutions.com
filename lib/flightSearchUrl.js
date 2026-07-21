import { decryptSearchParams } from "@/lib/encryption";

const normalizeTripType = (value) =>
  value === "roundtrip" || value === "round-trip" ? "roundtrip" : "oneway";

const toPositiveInt = (value, fallback) => {
  const number = Number.parseInt(value, 10);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
};

export const buildFlightResultUrl = (searchData) => {
  const params = new URLSearchParams();
  const passengers = searchData?.passengers || {};

  params.set("from", searchData.origin);
  params.set("to", searchData.destination);
  params.set("depart", searchData.departureDate);
  params.set("trip", normalizeTripType(searchData.tripType));
  params.set("adults", String(passengers.adults || 1));

  if (passengers.children) params.set("children", String(passengers.children));
  if (passengers.infants) params.set("infants", String(passengers.infants));
  if (searchData.returnDate) params.set("return", searchData.returnDate);
  if (searchData.cabinClass) params.set("cabin", searchData.cabinClass);

  return `/flights/result?${params.toString()}`;
};

export const parseFlightSearchParams = (searchParams) => {
  const params =
    searchParams instanceof URLSearchParams
      ? searchParams
      : new URLSearchParams(searchParams || "");

  const encryptedQuery = params.get("q");
  if (encryptedQuery) {
    return decryptSearchParams(encryptedQuery);
  }

  const origin = params.get("from")?.toUpperCase();
  const destination = params.get("to")?.toUpperCase();
  const departureDate = params.get("depart");

  if (!origin || !destination || !departureDate) {
    return null;
  }

  const tripType = normalizeTripType(params.get("trip"));
  const returnDate = tripType === "roundtrip" ? params.get("return") : null;

  return {
    origin,
    destination,
    departureDate,
    returnDate,
    tripType,
    passengers: {
      adults: toPositiveInt(params.get("adults"), 1) || 1,
      children: toPositiveInt(params.get("children"), 0),
      infants: toPositiveInt(params.get("infants"), 0),
    },
    cabinClass: params.get("cabin") || "economy",
  };
};
