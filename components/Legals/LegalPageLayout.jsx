import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCalendar,
  FiChevronRight,
  FiCompass,
  FiHeadphones,
} from "react-icons/fi";

export const LegalInfoBox = ({ title = "Important notice", children }) => (
  <aside className="rounded-[18px] border border-[var(--brand-green)]/35 bg-[var(--accent-soft)]/70 p-5 text-[var(--brand-blue)] sm:p-6">
    <div className="flex gap-3">
      <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[20px] text-accent-strong">
        <FiAlertCircle aria-hidden="true" />
      </span>
      <div>
        <h2 className="!mt-0 !text-[20px] !font-[700] !text-[var(--brand-blue)]">
          {title}
        </h2>
        <div className="mt-2 text-[15px] leading-6 text-[var(--brand-blue)]/75">
          {children}
        </div>
      </div>
    </div>
  </aside>
);

export const LegalSupportCard = ({
  title = "Need help with a booking or policy question?",
  text,
}) => (
  <section className="rounded-[22px] bg-[var(--brand-blue)] p-6 text-white shadow-card sm:p-7">
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="flex items-center gap-2 text-[14px] font-[700] uppercase tracking-[0.16em] text-accent-on-dark">
          <FiHeadphones aria-hidden="true" />
          Support
        </p>
        <h2 className="mt-2 text-[24px] font-[700] leading-tight text-white sm:text-[30px]">
          {title}
        </h2>
        {text ? (
          <p className="mt-3 text-[15px] leading-6 text-white/82">{text}</p>
        ) : null}
      </div>
      <Link
        href="/contact-us"
        className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--brand-green)] px-6 text-[15px] font-[800] text-accent-contrast transition hover:bg-white hover:text-[var(--brand-blue)]"
      >
        Contact support
        <FiArrowRight aria-hidden="true" />
      </Link>
    </div>
  </section>
);

const LegalPageLayout = ({
  title,
  eyebrow = "Sea Sky Solutions LLC",
  description,
  lastUpdated,
  summary = [],
  quickLinks = [],
  notice,
  faqs = [],
  supportText = "Our team can review the details available to us, explain supplier rules, and help you understand the next steps for your request.",
  children,
}) => {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[var(--brand-blue)] py-16 sm:py-20 lg:py-24">
          <Image
            src="/images/working-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-75"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,89,139,0.55),rgba(7,89,139,0.28)_58%,rgba(6,70,111,0.42))]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,50,82,0.22),rgba(4,50,82,0.08)_45%,rgba(4,50,82,0.26))]"
            aria-hidden="true"
          />
          <div className="site-container relative z-10 mx-auto px-5 text-center text-white sm:px-8 lg:px-12">
            <p className="flex items-center justify-center gap-2 text-[13px] font-[800] uppercase tracking-[0.18em] text-accent-on-dark drop-shadow">
              <FiCompass aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mx-auto mt-3 max-w-4xl text-[36px] font-[800] leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(4,50,82,0.38)] sm:text-[50px] lg:text-[56px]">
              {title}
            </h1>
            {description ? (
              <p className="mx-auto mt-4 max-w-3xl text-[16px] font-[500] leading-7 text-white sm:text-[18px]">
                {description}
              </p>
            ) : null}
            <nav
              className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[15px] font-[600] text-white/90"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition hover:text-accent-on-dark"
              >
                Home
              </Link>
              <FiChevronRight aria-hidden="true" />
              <span aria-current="page">{title}</span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12 lg:py-16">
          <div className="site-container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-start">
              <article className="min-w-0 space-y-7 text-[var(--brand-blue)]">
                <div className="rounded-[22px] border border-[var(--brand-blue)]/12 bg-section-muted p-5 shadow-card sm:p-7">
                  {lastUpdated ? (
                    <p className="flex items-center gap-2 text-[14px] font-[700] uppercase tracking-[0.14em] text-accent-strong">
                      <FiCalendar aria-hidden="true" />
                      Last updated: {lastUpdated}
                    </p>
                  ) : null}
                  {description ? (
                    <p className="mt-3 text-[17px] leading-7 text-[var(--brand-blue)]/75">
                      {description}
                    </p>
                  ) : null}
                  {summary.length ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {summary.map(({ title: itemTitle, text }) => (
                        <section
                          key={itemTitle}
                          className="rounded-[16px] border border-[var(--brand-blue)]/10 bg-white p-5"
                        >
                          <h2 className="text-[17px] font-[800] leading-6 text-[var(--brand-blue)]">
                            {itemTitle}
                          </h2>
                          <p className="mt-2 text-[14px] leading-6 text-[var(--brand-blue)]/70">
                            {text}
                          </p>
                        </section>
                      ))}
                    </div>
                  ) : null}
                </div>

                {notice ? (
                  <LegalInfoBox title={notice.title}>{notice.text}</LegalInfoBox>
                ) : null}

                <div className="rounded-[22px] border border-[var(--brand-blue)]/12 bg-white p-5 shadow-card sm:p-7">
                  <div className="[&_a]:font-[700] [&_a]:text-accent-strong [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:mt-8 [&_h2]:text-[24px] [&_h2]:font-[800] [&_h2]:leading-8 [&_h2]:text-[var(--brand-blue)] [&_h2:first-child]:mt-0 [&_h3]:mt-5 [&_h3]:text-[19px] [&_h3]:font-[800] [&_h3]:leading-6 [&_h3]:text-[var(--brand-blue)] [&_li]:mt-2 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[var(--brand-blue)]/72 [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[var(--brand-blue)]/72 [&_strong]:font-[800] [&_strong]:text-[var(--brand-blue)] [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
                    {children}
                  </div>
                </div>

                {faqs.length ? (
                  <section className="rounded-[22px] border border-[var(--brand-blue)]/12 bg-section-muted p-5 sm:p-7">
                    <h2 className="text-[24px] font-[800] text-[var(--brand-blue)]">
                      Common Questions
                    </h2>
                    <div className="mt-5 space-y-3">
                      {faqs.map(({ question, answer }) => (
                        <details
                          key={question}
                          className="group rounded-[16px] border border-[var(--brand-blue)]/12 bg-white px-5 py-1"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[16px] font-[800] text-[var(--brand-blue)] marker:content-none">
                            {question}
                            <span className="text-[24px] font-[500] text-accent-strong transition-transform group-open:rotate-45" aria-hidden="true">
                              +
                            </span>
                          </summary>
                          <p className="border-t border-[var(--brand-blue)]/10 py-4 text-[15px] leading-7 text-[var(--brand-blue)]/72">
                            {answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  </section>
                ) : null}

                <LegalSupportCard text={supportText} />
              </article>

              {quickLinks.length ? (
                <aside className="rounded-[20px] border border-[var(--brand-blue)]/12 bg-white p-5 shadow-card lg:sticky lg:top-6">
                  <h2 className="text-[18px] font-[800] text-[var(--brand-blue)]">
                    Quick links
                  </h2>
                  <nav className="mt-4 grid gap-2" aria-label={`${title} quick links`}>
                    {quickLinks.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        className="flex items-center justify-between gap-3 rounded-[12px] bg-section-muted px-4 py-3 text-[14px] font-[700] text-[var(--brand-blue)] transition hover:bg-[var(--brand-blue)] hover:text-white"
                      >
                        {label}
                        <FiChevronRight aria-hidden="true" />
                      </a>
                    ))}
                  </nav>
                </aside>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LegalPageLayout;
