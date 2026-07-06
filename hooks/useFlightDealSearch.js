"use client";

import { useFlight } from "@/context/FlightContext";
import { encryptSearchParams } from "@/lib/encryption";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formatApiDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getFutureDate = (daysFromNow) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return formatApiDate(date);
};

export const getDisplayDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const normalizeTripType = (tripType) =>
  tripType === "oneway" || tripType === "one-way" ? "oneway" : "roundtrip";

const normalizeDate = (value, fallbackDays) => {
  if (!value) return getFutureDate(fallbackDays);
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;

  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime())
    ? getFutureDate(fallbackDays)
    : formatApiDate(parsedDate);
};

const getAirportDisplay = (code, city) =>
  city ? `${code} - ${city}` : `${code}`;

export const useFlightDealSearch = () => {
  const router = useRouter();
  const flightContext = useFlight();
  const [searchingDeal, setSearchingDeal] = useState(null);

  const {
    setResults = () => {},
    setFilteredResults = () => {},
    setSearchData = () => {},
    setLoading = () => {},
    setError = () => {},
  } = flightContext || {};

  const searchDeal = (deal) => {
    if (searchingDeal) return;

    const tripType = normalizeTripType(deal.tripType);
    const departureDate = normalizeDate(
      deal.departureDate || deal.travelDate,
      7,
    );
    const returnDate =
      tripType === "roundtrip"
        ? normalizeDate(deal.returnDate || deal.arrivalDate, 14)
        : null;

    const searchData = {
      origin: deal.origin,
      destination: deal.destination,
      departureDate,
      returnDate,
      tripType,
      passengers: deal.passengers || {
        adults: 1,
        children: 0,
        infants: 0,
      },
      cabinClass: deal.cabinClass || "economy",
      fromDisplay: getAirportDisplay(deal.origin, deal.originCity),
      toDisplay: getAirportDisplay(deal.destination, deal.destinationCity),
    };

    setSearchingDeal({
      ...deal,
      departureDate,
      returnDate,
      tripType,
    });
    setLoading(true);
    setError("");
    setResults([]);
    setFilteredResults([]);
    setSearchData(searchData);

    const encryptedQuery = encryptSearchParams(searchData);
    router.push(`/flights/result?q=${encryptedQuery}`);
  };

  return {
    searchingDeal,
    searchDeal,
  };
};
