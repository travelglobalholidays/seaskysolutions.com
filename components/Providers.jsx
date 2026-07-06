"use client";

import { AuthProvider } from "@/context/AuthContext";
import { FlightProvider } from "@/context/FlightContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <FlightProvider>{children}</FlightProvider>
    </AuthProvider>
  );
};

export default Providers;
