"use client";

import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import { PhoneCall } from "lucide-react";

const DealSearchOverlay = ({ deal }) => {
  if (!deal) return null;

  const phoneNumber = getPhoneDisplay();
  const phoneHref = getPhoneHref();

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue/15 border-t-blue" />

        <h3 className="font-poppins-semibold text-xl text-heading">
          Searching Flights
        </h3>

        <p className="mt-2 text-sm text-light-blue">
          Finding best available flights from{" "}
          <span className="font-poppins-semibold text-heading">
            {deal.origin}
          </span>{" "}
          to{" "}
          <span className="font-poppins-semibold text-heading">
            {deal.destination}
          </span>
        </p>

        <p className="mt-3 text-xs text-light-grey">
          Please wait, this may take a few seconds...
        </p>

        <a
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-blue px-4 py-2.5 text-sm font-poppins-semibold text-white transition hover:bg-blue-dark"
          href={phoneHref}
        >
          <PhoneCall className="h-4 w-4" />
          Call {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default DealSearchOverlay;
