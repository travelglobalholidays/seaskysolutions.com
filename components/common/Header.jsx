"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi";
import TopBar from "./TopBar";
import { useCurrentServiceContact } from "./useCurrentServiceContact";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Flights", href: "/flights" },
  { label: "Car Rental", href: "/car-rental" },
  { label: "Trains", href: "/train-booking" },
  { label: "Hotels", href: "/hotels" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentContact = useCurrentServiceContact();

  return (
    <header className="relative z-30 bg-white">
      <TopBar />

      <div className="border-b border-black/5 bg-white px-2 sm:px-4">
        <div className="site-container mx-auto flex min-h-[76px] items-center justify-between gap-5 px-4 py-3 sm:px-8 lg:min-h-[96px] lg:px-12">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Sea Sky Solutions LLC home"
          >
            <Image
              src="/images/logo.png"
              alt="Sea Sky Solutions LLC"
              width={250}
              height={50}
              priority
              className="h-auto w-[176px] object-contain sm:w-[220px] lg:w-[250px]"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center justify-center gap-7 text-[16px] font-[600] text-[var(--brand-blue)] xl:flex 2xl:gap-12"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-accent-strong"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={currentContact.phone.href}
              className="hidden min-h-[58px] items-center justify-center gap-3 rounded-full border border-[var(--brand-blue)]/10 bg-[var(--brand-blue)]/5 px-4 text-[15px] font-[700] text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-green)] hover:text-accent-strong sm:flex lg:min-h-[66px] lg:px-5 lg:text-[18px]"
              aria-label={`Call toll free number ${currentContact.phone.display}`}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)] text-[20px] text-accent-contrast lg:size-11">
                <FiPhoneCall aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap leading-none">
                {currentContact.phone.display}
              </span>
            </a>

            <button
              type="button"
              className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-blue)] text-2xl text-white transition-colors hover:bg-[var(--brand-green)] hover:text-accent-contrast xl:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? (
                <FiX aria-hidden="true" />
              ) : (
                <FiMenu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`site-container mx-auto overflow-hidden px-4 transition-[max-height,opacity] duration-300 sm:px-8 lg:px-12 xl:hidden ${
            isMenuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="border-t border-black/10 py-4 text-[16px] font-[750] text-[var(--brand-blue)]"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between border-b border-black/10 py-3 transition-colors hover:text-accent-strong"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}

            <a
              href={currentContact.phone.href}
              className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/5 px-5 text-[17px] font-[800] text-[var(--brand-blue)]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)] text-[20px] text-accent-contrast">
                <FiPhoneCall aria-hidden="true" />
              </span>
              <span className="whitespace-nowrap">
                {currentContact.phone.display}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
