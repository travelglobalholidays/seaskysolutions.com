import Link from "next/link";

const AirlineLinksDirectory = ({ activeSlug, pages }) => {
  return (
    <section className="bg-white pb-8 sm:pb-10 lg:pb-12">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="border-t border-[var(--brand-blue)]/12">
          <details className="group border-b border-[var(--brand-blue)]/12" open>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
              <h2 className="min-w-0 text-lg font-[900] leading-tight text-[var(--brand-blue)] sm:text-xl">
                More airline assistance pages
              </h2>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--brand-blue)]/20 text-lg leading-none text-[var(--brand-blue)]">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:block">-</span>
              </span>
            </summary>

            <ul className="grid gap-2 pb-4 sm:grid-cols-2 lg:grid-cols-5">
              {pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    className={`block rounded-[8px] border px-4 py-3 text-sm transition-colors ${
                      page.slug === activeSlug
                        ? "border-[var(--brand-green)] bg-[var(--brand-green)] font-[900] text-white"
                        : "border-[var(--brand-blue)]/15 text-[var(--brand-blue)] hover:border-[var(--brand-green)] hover:bg-[var(--brand-blue)]/5"
                    }`}
                    href={page.href}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default AirlineLinksDirectory;
