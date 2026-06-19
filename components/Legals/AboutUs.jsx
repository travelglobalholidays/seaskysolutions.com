import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiCompass, FiHeadphones, FiMap, FiShield } from "react-icons/fi";

const values = [
  { title: "Thoughtful planning", text: "Travel options chosen around your dates, preferences and priorities.", icon: FiCompass },
  { title: "Helpful support", text: "Friendly guidance before booking and whenever your plans need attention.", icon: FiHeadphones },
  { title: "Clear choices", text: "Straightforward information so you can plan and book with confidence.", icon: FiShield },
];

const services = [
  { title: "Flights & stays", text: "Options that work together for a smoother itinerary.", icon: FiCompass },
  { title: "Cruises & packages", text: "Complete escapes designed around your travel style.", icon: FiMap },
  { title: "Guidance at every step", text: "A clearer way to compare, plan and prepare for travel.", icon: FiHeadphones },
];

const AboutUs = () => (
  <>
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="site-container mx-auto grid items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_430px] lg:gap-16 lg:px-12">
        <div>
          <p className="flex items-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]"><FiCompass aria-hidden="true" />About Sea Sky Solutions</p>
          <h2 className="mt-2 max-w-xl text-[31px] font-[500] leading-[1.1] tracking-tight text-[var(--brand-blue)] sm:text-[43px]">Travel should feel exciting, not complicated.</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[var(--brand-blue)]/65">Sea Sky Solutions helps travelers turn ideas into well-planned journeys. From flights and hotels to cruises, packages and destination experiences, we help you compare the details that matter and move forward with clarity.</p>
          <p className="mt-4 max-w-2xl text-[16px] leading-7 text-[var(--brand-blue)]/65">Our approach is personal: listen first, recommend thoughtfully and keep every step understandable. Whether you are planning a quick escape or a long-awaited celebration, we are here to make the path smoother.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {values.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-[18px] border border-[var(--brand-blue)]/12 bg-[#eef4f6] p-5"><span className="flex size-10 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[20px] text-[var(--brand-blue)]"><Icon aria-hidden="true" /></span><h3 className="mt-4 text-[17px] font-[500] text-[var(--brand-blue)]">{title}</h3><p className="mt-2 text-[14px] leading-6 text-[var(--brand-blue)]/65">{text}</p></article>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute inset-x-8 bottom-0 h-[88%] rounded-[32px] bg-[var(--brand-green)]/15" aria-hidden="true" />
          <Image src="/images/choose_img.png" alt="Traveler ready to discover a new destination" width={620} height={800} className="relative z-10 mx-auto h-auto w-full" />
          <div className="absolute bottom-8 left-0 z-20 rounded-2xl bg-white px-5 py-4 shadow-[0_15px_35px_rgba(7,89,139,0.16)]"><p className="flex items-center gap-2 text-[15px] font-[500] text-[var(--brand-blue)]"><FiCheckCircle className="text-[var(--brand-green)]" aria-hidden="true" />Your journey, considered.</p></div>
        </div>
      </div>
    </section>

    <section className="bg-[#eef4f6] py-12 sm:py-16 lg:py-20">
      <div className="site-container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center"><p className="text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">How we help</p><h2 className="mt-2 text-[30px] font-[500] leading-[1.1] text-[var(--brand-blue)] sm:text-[42px]">One place to start every journey.</h2><p className="mt-4 text-[16px] leading-7 text-[var(--brand-blue)]/65">Whatever your travel style, we help bring the moving parts together with clear options and personal attention.</p></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3 lg:mt-10">
          {services.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-[20px] border border-[var(--brand-blue)]/12 bg-white p-6"><span className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[23px] text-[var(--brand-blue)]"><Icon aria-hidden="true" /></span><h3 className="mt-5 text-[20px] font-[500] text-[var(--brand-blue)]">{title}</h3><p className="mt-2 text-[15px] leading-6 text-[var(--brand-blue)]/65">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-[var(--brand-blue)] py-12 sm:py-14">
      <div className="site-container mx-auto flex flex-col gap-6 px-5 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:text-left"><div><p className="text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">Start exploring</p><h2 className="mt-2 text-[29px] font-[500] leading-[1.1] text-white sm:text-[38px]">Ready to plan your next escape?</h2></div><Link href="/#find-your-tour" className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--brand-green)] px-6 text-[16px] font-[700] text-white transition hover:bg-white hover:text-[var(--brand-blue)]">Find your tour <FiArrowRight aria-hidden="true" /></Link></div>
    </section>
  </>
);

export default AboutUs;
