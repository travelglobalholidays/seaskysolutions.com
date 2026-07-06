"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FlightContext = createContext();

const readSessionJson = (key) => {
  if (typeof window === "undefined") return null;

  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

export const FlightProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(() =>
    readSessionJson("searchData"),
  );
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedFlight, setSelectedFlight] = useState(() =>
    readSessionJson("selectedFlight"),
  );

  useEffect(() => {
    if (searchData) {
      sessionStorage.setItem("searchData", JSON.stringify(searchData));
    }
  }, [searchData]);

  useEffect(() => {
    if (selectedFlight) {
      const minimalFlight = {
        id: selectedFlight.id,
        total_amount: selectedFlight.total_amount,
        total_currency: selectedFlight.total_currency,
      };

      sessionStorage.setItem("selectedFlight", JSON.stringify(minimalFlight));
    }
  }, [selectedFlight]);

  const clearFlightData = () => {
    sessionStorage.removeItem("searchData");
    sessionStorage.removeItem("selectedFlight");

    setSearchData(null);
    setResults([]);
    setFilteredResults([]);
    setSelectedFlight(null);
    setError("");
  };

  return (
    <FlightContext.Provider
      value={{
        searchData,
        setSearchData,
        results,
        setResults,
        filteredResults,
        setFilteredResults,
        loading,
        setLoading,
        error,
        setError,
        selectedFlight,
        setSelectedFlight,
        clearFlightData,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlight = () => useContext(FlightContext);
