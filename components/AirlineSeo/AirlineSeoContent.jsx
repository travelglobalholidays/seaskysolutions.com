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
            <h2 className="text-2xl font-[900] leading-tight text-[var(--brand-blue)] md:text-4xl">
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
            <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-[#eef8ff] p-5">
              <h2 className="text-2xl font-[900] leading-tight text-[var(--brand-blue)] md:text-3xl">
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

            <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-white p-5 shadow-[0_12px_30px_rgba(7,89,139,0.08)]">
              <h3 className="text-xl font-[900] leading-tight text-[var(--brand-blue)]">
                Common trip types
              </h3>
              <div className="mt-4 grid gap-2">
                {page.bestFor.map((item) => (
                  <span
                    className="rounded-full border border-[var(--brand-blue)]/15 bg-[var(--brand-blue)]/5 px-4 py-2 text-sm font-[750] text-[var(--brand-blue)]"
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
            <h2 className="text-2xl font-[900] leading-tight text-[var(--brand-blue)] md:text-3xl">
              {routeHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              {routeIntro}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.travelerScenarios.map((scenario) => (
                <Link
                  className="rounded-[8px] border border-[var(--brand-blue)]/15 bg-white px-4 py-4 text-sm font-[800] text-[var(--brand-blue)] shadow-[0_10px_24px_rgba(7,89,139,0.06)] transition hover:border-[var(--brand-green)] hover:bg-[var(--brand-blue)]/5"
                  href="/flights#flight-search"
                  key={scenario}
                >
                  {scenario}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-[900] leading-tight text-[var(--brand-blue)] md:text-2xl">
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
            <h3 className="text-xl font-[900] leading-tight text-[var(--brand-blue)] md:text-2xl">
              {searchHeading}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base">
              Visit{" "}
              <Link
                className="font-[900] text-[var(--brand-blue)]"
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
            <h3 className="text-xl font-[900] leading-tight text-[var(--brand-blue)] md:text-2xl">
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

          <div className="rounded-[8px] border border-[var(--brand-blue)]/10 bg-[linear-gradient(135deg,#eef8ff,#ffffff,#f6fbec)] p-6 text-center">
            <h3 className="text-2xl font-[900] text-[var(--brand-blue)]">
              {helpHeading}
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              {page.ctaText}
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 font-[900] text-white transition hover:bg-[var(--brand-green)]"
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
