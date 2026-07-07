import Link from "next/link";

const majorAirlineSlugs = new Set([
  "united",
  "delta",
  "american",
  "alaska",
  "jetblue",
  "southwest",
]);

const internationalAirlineSlugs = new Set([
  "klm",
  "lufthansa",
  "qatar",
  "etihad",
  "emirates",
  "air-france",
  "air-canada",
  "singapore-airlines",
  "swiss",
  "british-airways",
  "cathay-pacific",
]);

const LinkGroup = ({ activeSlug, pages, title }) => {
  if (!pages.length) return null;

  return (
    <div>
      <h3 className="mb-3 text-sm font-[700] uppercase tracking-[0.08em] text-accent-strong">
        {title}
      </h3>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              className={`block rounded-[8px] border px-4 py-3 text-sm transition-colors ${
                page.slug === activeSlug
                  ? "border-[var(--brand-green)] bg-[var(--brand-green)] font-[700] text-accent-contrast"
                  : "border-[var(--brand-blue)]/15 text-[var(--brand-blue)] hover:border-[var(--brand-green)] hover:bg-[var(--brand-blue)]/5"
              }`}
              href={page.href}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AirlineLinksDirectory = ({ activeSlug, pages }) => {
  const popularAirlines = pages.filter(
    (page) =>
      !majorAirlineSlugs.has(page.slug) &&
      !internationalAirlineSlugs.has(page.slug),
  );
  const majorAirlines = pages.filter((page) =>
    majorAirlineSlugs.has(page.slug),
  );
  const internationalAirlines = pages.filter((page) =>
    internationalAirlineSlugs.has(page.slug),
  );

  return (
    <section className="bg-white pb-8 sm:pb-10 lg:pb-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="border-t border-[var(--brand-blue)]/12">
          <details className="group border-b border-[var(--brand-blue)]/12" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <h2 className="min-w-0 text-lg font-[700] leading-tight text-[var(--brand-blue)] sm:text-xl">
                More airline information pages
              </h2>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--brand-blue)]/20 text-lg leading-none text-[var(--brand-blue)]">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:block">-</span>
              </span>
            </summary>

            <div className="grid gap-6 pb-4">
              <LinkGroup
                activeSlug={activeSlug}
                pages={popularAirlines}
                title="Popular Airlines"
              />
              <LinkGroup
                activeSlug={activeSlug}
                pages={internationalAirlines}
                title="International Airlines"
              />
              <LinkGroup
                activeSlug={activeSlug}
                pages={majorAirlines}
                title="Major Airlines"
              />
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default AirlineLinksDirectory;
