import SearchForm from "@/components/Flights/SearchForm";

const AirlineSeoHero = ({ page }) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#eef8ff]">
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
        <p className="mb-5 w-full rounded-[6px] border-l-4 border-[var(--brand-green)] bg-white/90 px-4 py-3 text-[12px] font-[800] leading-5 text-[var(--brand-blue)] shadow-[0_8px_24px_rgba(7,89,139,0.08)] sm:text-[13px]">
          Important: We are an Independent Travel Assistance Platform and are
          not associated with any airline or any company.
        </p>

        <div className="max-w-[780px]">
          <p className="mb-5 inline-flex rounded-full bg-[var(--brand-blue)]/10 px-4 py-2 text-[12px] font-[800] uppercase tracking-[0.12em] text-[var(--brand-blue)]">
            {page.badge}
          </p>
          <h1 className="text-[40px] font-[900] uppercase leading-[1] text-[var(--brand-blue)] sm:text-[54px] lg:text-[64px]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] font-[600] leading-8 text-slate-700 sm:text-[19px]">
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
