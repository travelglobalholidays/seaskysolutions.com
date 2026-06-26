"use client";

import { useEffect, useState } from "react";
import { FiArrowUp, FiPhoneCall } from "react-icons/fi";
import { useCurrentServiceContact } from "./useCurrentServiceContact";

const SCROLL_OFFSET = 360;

const FixedActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentContact = useCurrentServiceContact();

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_OFFSET);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href={currentContact.phone.href}
        className={`group fixed bottom-4 left-1/2 z-50 inline-flex min-h-12 -translate-x-1/2 items-center gap-2 rounded-full bg-[var(--brand-green)] py-1.5 pl-2 pr-4 text-[14px] font-[800] text-white shadow-[0_12px_28px_rgba(4,50,82,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/35 sm:bottom-6 sm:min-h-14 sm:gap-3 sm:pl-2.5 sm:pr-5 sm:text-[16px] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
        aria-label={`Call Sea Sky Solutions LLC at ${currentContact.phone.display}`}
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-white text-[18px] text-[var(--brand-green)] transition-colors group-hover:text-[var(--brand-blue)] sm:size-10 sm:text-[20px]">
          <FiPhoneCall aria-hidden="true" />
        </span>
        <span className="whitespace-nowrap">
          Toll Free: {currentContact.phone.display}
        </span>
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-20 right-4 z-50 flex size-12 items-center justify-center rounded-full border border-white/30 bg-[var(--brand-blue)] text-[22px] text-white shadow-[0_12px_28px_rgba(4,50,82,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-green)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-blue)]/25 sm:bottom-6 sm:right-6 sm:size-14 sm:text-[24px] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }`}
        aria-label="Back to top"
        tabIndex={isVisible ? 0 : -1}
      >
        <FiArrowUp aria-hidden="true" />
      </button>
    </>
  );
};

export default FixedActions;
