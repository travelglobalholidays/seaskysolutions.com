import Image from "next/image";
import Link from "next/link";
import { siteContact } from "@/config/siteContact";
import {
  BsApple,
  BsFacebook,
  BsGooglePlay,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import {
  FiArrowRight,
  FiChevronRight,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

const topPicks = [
  { label: "About Sea Sky", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Travel FAQs", href: "/faqs" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];
const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Find Your Tour", href: "/#find-your-tour" },
  { label: "Tour Categories", href: "/#tour-categories" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Traveler Favorites", href: "/#traveler-favorites" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const FooterLinkList = ({ items }) => (
  <ul className="mt-5 space-y-3">
    {items.map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="group inline-flex items-center gap-2 text-[16px] text-[var(--brand-blue)]/65 transition-colors hover:text-[var(--brand-green)]"
        >
          <FiChevronRight
            className="text-[18px] text-[var(--brand-blue)]/45 transition-transform group-hover:translate-x-1 group-hover:text-[var(--brand-green)]"
            aria-hidden="true"
          />
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

const contactItems = [
  {
    label: "Talk to Us",
    value: siteContact.phone.display,
    href: siteContact.phone.href,
    icon: FiPhoneCall,
  },
  {
    label: "Message Us",
    value: siteContact.email.address,
    href: siteContact.email.href,
    icon: FiMail,
  },
  {
    label: "Locate Us",
    value: siteContact.address.display,
    href: siteContact.address.href,
    icon: FiMapPin,
  },
];

const socialLinks = [
  { label: "Instagram", icon: BsInstagram },
  { label: "YouTube", icon: BsYoutube },
  { label: "Facebook", icon: BsFacebook },
  { label: "X", icon: BsTwitterX },
  { label: "WhatsApp", icon: BsWhatsapp },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--brand-blue)]/15 bg-white text-[var(--brand-blue)]">
      <div className="site-container mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-10 xl:gap-14">
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="Sea Sky Solutions home"
            >
              <Image
                src="/images/logo.png"
                alt="Sea Sky Solutions"
                width={600}
                height={161}
                className="h-auto w-[255px] max-w-full"
              />
            </Link>
            <p className="mt-6 max-w-[280px] text-[16px] leading-7 text-[var(--brand-blue)]/65">
              Discover, plan and go—your next remarkable journey starts here.
            </p>
            <div className="mt-6 grid max-w-[276px] gap-3">
              <a
                href="#"
                className="group flex min-h-[52px] items-center justify-between rounded-full border border-[var(--brand-blue)]/15 bg-white/35 py-1 pl-5 pr-1 text-[16px] font-[700] transition hover:border-[var(--brand-green)] hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <BsGooglePlay
                    className="text-[19px] text-[var(--brand-green)]"
                    aria-hidden="true"
                  />
                  Google Play
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/8 text-[19px] text-[var(--brand-green)] transition group-hover:bg-[var(--brand-green)] group-hover:text-white">
                  <FiArrowRight aria-hidden="true" />
                </span>
              </a>
              <a
                href="#"
                className="group flex min-h-[52px] items-center justify-between rounded-full border border-[var(--brand-blue)]/15 bg-white/35 py-1 pl-5 pr-1 text-[16px] font-[700] transition hover:border-[var(--brand-green)] hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <BsApple
                    className="text-[20px] text-[var(--brand-blue)]"
                    aria-hidden="true"
                  />
                  App Store
                </span>
                <span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/8 text-[19px] text-[var(--brand-green)] transition group-hover:bg-[var(--brand-green)] group-hover:text-white">
                  <FiArrowRight aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[21px] font-[700] text-[var(--brand-blue)]">
              Top Picks
            </h2>
            <FooterLinkList items={topPicks} />
          </div>

          <div>
            <h2 className="text-[21px] font-[700] text-[var(--brand-blue)]">
              Useful Links
            </h2>
            <FooterLinkList items={usefulLinks} />
          </div>

          <div>
            <h2 className="text-[21px] font-[700] text-[var(--brand-blue)]">
              Newsletter
            </h2>
            <p className="mt-5 max-w-[290px] text-[16px] leading-7 text-[var(--brand-blue)]/65">
              Subscribe for travel inspiration, exclusive offers and planning
              tips from Sea Sky Solutions.
            </p>
            <form className="mt-6 max-w-[310px]" action="#newsletter">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Email address"
                className="h-[58px] w-full rounded-md border border-[var(--brand-blue)]/15 bg-white/40 px-5 text-[16px] text-[var(--brand-blue)] outline-none placeholder:text-[var(--brand-blue)]/40 focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15"
              />
              <button
                type="submit"
                className="mt-5 inline-flex min-h-[54px] items-center gap-4 rounded-full bg-[var(--brand-green)] py-2 pl-5 pr-2 text-[16px] font-[700] text-white transition hover:bg-[var(--brand-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/30"
              >
                Subscribe Us
                <span className="flex size-10 items-center justify-center rounded-r-full rounded-l-[12px] bg-white text-[20px] text-[var(--brand-green)]">
                  <FiArrowRight aria-hidden="true" />
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-2">
          {contactItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex min-h-[108px] items-center justify-between gap-4 rounded-[21px] bg-[var(--brand-blue)]/8 px-6 py-5 transition hover:bg-[var(--brand-blue)]/12 sm:px-7"
            >
              <span>
                <span className="block text-[16px] font-[500] text-[var(--brand-blue)]">
                  {label}
                </span>
                <span className="mt-2 block text-[16px] text-[var(--brand-blue)]/65">
                  {value}
                </span>
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[23px] text-[var(--brand-green)]">
                <Icon aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-6 border-t border-[var(--brand-blue)]/10 pt-8 text-[16px] text-[var(--brand-blue)] sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <p>© 2026 Sea Sky Solutions. All Rights Reserved.</p>
          <nav
            className="order-first flex items-center gap-2 sm:order-none"
            aria-label="Social media links"
          >
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-12 items-center justify-center rounded-full border border-[var(--brand-blue)]/15 text-[19px] text-[var(--brand-blue)]/50 transition hover:border-[var(--brand-green)] hover:bg-[var(--brand-green)] hover:text-white"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
          <a
            href={siteContact.phone.href}
            className="font-[500] transition hover:text-[var(--brand-green)]"
          >
            Have a trip in mind? {siteContact.phone.display}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
