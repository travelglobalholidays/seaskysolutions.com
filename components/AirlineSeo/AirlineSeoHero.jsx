import SearchForm from "@/components/Flights/SearchForm";

const AirlineSeoHero = ({ page }) => {
  return (
    <section className="relative isolate overflow-hidden bg-blue-soft">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2200&q=85)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.9)_42%,rgba(255,255,255,0.62)_68%,rgba(255,255,255,0.18)_100%)]"
      />
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[var(--brand-green)]" />

      <div className="site-container px-5 pb-12 pt-12 sm:px-8 lg:px-12 lg:pb-16 lg:pt-16">
        <p className="mb-5 w-full rounded-[6px] border-l-4 border-[var(--brand-green)] bg-white/90 px-4 py-3 text-[12px] font-[600] leading-5 text-[var(--brand-blue)] shadow-card sm:text-[13px]">
          Important: Sea Sky Solutions LLC is an independent travel platform and
          is not affiliated with or endorsed by any airline.
        </p>

        <div className="max-w-[780px]">
          {/* <p className="mb-5  inline-flex rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[12px] font-[650] uppercase tracking-[0.08em] text-[var(--brand-blue)]">
            {page.badge}
          </p> */}
          <h1 className="text-[34px] font-[700] leading-[1.08] text-[var(--brand-blue)] sm:text-[46px] lg:text-[56px]">
            {page.heroTitle ?? page.title}
          </h1>
          <p className="mt-5 max-w-[680px] text-[16px] font-[450] leading-8 text-slate-700 sm:text-[18px]">
            {page.heroText}
          </p>
        </div>

        <div className="relative z-20 mt-8">
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default AirlineSeoHero;
