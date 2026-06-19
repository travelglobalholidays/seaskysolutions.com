import Image from "next/image";
import { siteContact } from "@/config/siteContact";
import { BsInstagram, BsTwitterX } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="hidden md:block px-2 text-[var(--text-color)] sm:px-4">
      <div className="relative mx-auto site-container flex min-h-10  items-center justify-center   px-4 py-3 sm:px-8 lg:px-12">
        <Image
          src="/images/top_mask.png"
          alt=""
          fill
          sizes="100vw"
          className="object-fill"
          aria-hidden="true"
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-2 text-center text-sm font-[400] leading-none sm:text-[13px] md:flex-row md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-start lg:gap-x-5 text-white">
            <span className="whitespace-nowrap">Ready to Plan?</span>

            <a
              href={siteContact.phone.href}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Image
                src="/images/icons/phone.png"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
                aria-hidden="true"
              />
              <span className="hover:text-brand-green">{siteContact.phone.display}</span>
            </a>

            <span className="hidden whitespace-nowrap text-xs text-[var(--text-muted)] lg:inline">
              ( MO - SA 10 AM - 7 PM)
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end lg:gap-x-5">
            <a
              href={siteContact.email.href}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <Image
                src="/images/icons/email.png"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
                aria-hidden="true"
              />
              <span className="hover:text-brand-green">{siteContact.email.address}</span>
            </a>

            <span className="hidden h-4 w-px bg-[var(--topbar-divider)] sm:block" />

            <nav
              aria-label="Social links"
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <a
                href="#"
                aria-label="X"
                className="text-base leading-none hover:text-brand-green"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-base leading-none hover:text-brand-green"
              >
                <BsInstagram />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
