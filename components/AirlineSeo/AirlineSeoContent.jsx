import { getPhoneDisplay, getPhoneHref } from "@/config/ContactInfo";
import Link from "next/link";

const bookingChecklist = [
  "Confirm whether one-way or round-trip travel fits your plans.",
  "Compare nearby travel dates when your schedule is flexible.",
  "Review baggage, seat, change, cancellation, and refund rules before payment.",
  "Check airport location, transfer time, and terminal details before departure.",
  "Confirm the final total price, including taxes and fees, before completing a booking.",
];

const AirlineSeoContent = ({ page }) => {
  const phoneDisplay = getPhoneDisplay();
  const phoneHref = getPhoneHref();
  const optionHeading = page.fareTitle;
  const optionIntro = page.fareIntro;
  const routeHeading = page.scenarioTitle;
  const routeIntro = page.scenarioIntro;
  const localHeading = page.planningTitle;
  const searchHeading = page.searchTitle;
  const helpHeading = page.ctaTitle;

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="site-container px-5 sm:px-8 lg:px-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-[750] leading-tight text-[var(--brand-blue)] md:text-4xl">
              {page.contentTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              {page.overview}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Use the search form above to enter your departure city, select
              dates, choose the number of travelers, and review cabin class
              options. Before purchasing, always confirm final availability,
              taxes, fees, baggage details, and airline rules.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-blue-soft p-5">
              <h2 className="text-2xl font-[750] leading-tight text-[var(--brand-blue)] md:text-3xl">
                {optionHeading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                {optionIntro}
              </p>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                {page.fareReviewPoints.map((point) => (
                  <li className="flex gap-2" key={point}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-white p-5 shadow-card">
              <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)]">
                Common trip types
              </h3>
              <div className="mt-4 grid gap-2">
                {page.bestFor.map((item) => (
                  <span
                    className="rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/5 px-4 py-2 text-sm font-[600] text-[var(--brand-blue)]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                These examples are for planning context only. Actual
                availability depends on airline schedules, dates, selected
                services, and booking conditions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-[750] leading-tight text-[var(--brand-blue)] md:text-3xl">
              {routeHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              {routeIntro}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.travelerScenarios.map((scenario) => (
                <Link
                  className="rounded-[8px] border border-[var(--brand-blue)]/15 bg-white px-4 py-4 text-sm font-[650] text-[var(--brand-blue)] shadow-card transition hover:border-[var(--brand-green)] hover:bg-[var(--brand-blue)]/5"
                  href="/flights#flight-search"
                  key={scenario}
                >
                  {scenario}
                </Link>
              ))}
            </div>
          </div>

          {(page.popularRoutes?.length || page.popularDestinations?.length) && (
            <div className="grid gap-5 lg:grid-cols-2">
              {page.popularRoutes?.length ? (
                <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-white p-5 shadow-card">
                  <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)] md:text-2xl">
                    {page.popularRouteTitle ?? "Popular route ideas"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    Route examples can help you compare airport choices,
                    connection points, trip duration, and fare conditions before
                    selecting flights.
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700">
                    {page.popularRoutes.map((route) => (
                      <li className="flex gap-2" key={route}>
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                        <span>{route}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {page.popularDestinations?.length ? (
                <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-blue-soft p-5">
                  <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)] md:text-2xl">
                    {page.popularDestinationTitle ??
                      "Popular destination ideas"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                    Destination ideas are for planning context. Availability,
                    frequency, and prices can change by season, airport, and
                    travel date.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {page.popularDestinations.map((destination) => (
                      <Link
                        className="rounded-full border border-[var(--brand-blue)]/15 bg-white px-4 py-2 text-sm font-[600] text-[var(--brand-blue)] transition hover:border-[var(--brand-green)] hover:bg-[var(--brand-blue)]/5"
                        href="/flights#flight-search"
                        key={destination}
                      >
                        {destination}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}

          <div>
            <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)] md:text-2xl">
              {localHeading}
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 md:text-base">
              {page.planningTips.map((tip) => (
                <li className="flex gap-2" key={tip}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-green)]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)] md:text-2xl">
              {searchHeading}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Visit{" "}
              <Link
                className="font-[700] text-[var(--brand-blue)]"
                href="/flights"
              >
                Sea Sky Solutions
              </Link>
              , {page.searchIntro}
            </p>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2 md:text-base">
              {bookingChecklist.map((item) => (
                <li className="flex gap-2" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-[750] leading-tight text-[var(--brand-blue)] md:text-2xl">
              Transparent booking information
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 md:text-base">
              {page.policyNotes.map((note) => (
                <li key={note}>
                  <strong className="text-[var(--brand-blue)]">Note:</strong>{" "}
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center rounded-[8px] border border-[var(--brand-blue)]/10 bg-[linear-gradient(135deg,var(--surface-blue),var(--card-bg),var(--accent-soft))] p-6 text-center">
            <h3 className="text-2xl font-[750] text-[var(--brand-blue)]">
              {helpHeading}
            </h3>
            <p className="mx-auto mt-2 w-full max-w-2xl text-center text-sm leading-6 text-slate-700">
              {page.ctaText}
            </p>
            <a
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 font-[700] text-white transition hover:bg-[var(--brand-green)] hover:text-accent-contrast"
              href={phoneHref}
            >
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirlineSeoContent;
