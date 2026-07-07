import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiCompass } from "react-icons/fi";

const InnerPageHero = ({ title, eyebrow, description }) => (
  <section className="relative isolate overflow-hidden bg-[var(--brand-blue)] py-16 sm:py-20 lg:py-24">
    <Image src="/images/working-bg.jpg" alt="" fill priority className="object-cover object-center opacity-75" aria-hidden="true" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,89,139,0.55),rgba(7,89,139,0.28)_58%,rgba(6,70,111,0.42))]" aria-hidden="true" />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,50,82,0.22),rgba(4,50,82,0.08)_45%,rgba(4,50,82,0.26))]" aria-hidden="true" />
    <div className="site-container relative z-10 mx-auto px-5 text-center text-white sm:px-8 lg:px-12">
      <p className="flex items-center justify-center gap-2 text-[13px] font-[800] uppercase tracking-[0.18em] text-accent-on-dark drop-shadow"><FiCompass aria-hidden="true" />{eyebrow}</p>
      <h1 className="mx-auto mt-3 max-w-4xl text-[36px] font-[800] leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(4,50,82,0.38)] sm:text-[50px] lg:text-[56px]">{title}</h1>
      {description ? <p className="mx-auto mt-4 max-w-2xl text-[16px] font-[500] leading-7 text-white sm:text-[17px]">{description}</p> : null}
      <nav className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[15px] font-[600] text-white/90" aria-label="Breadcrumb"><Link href="/" className="transition hover:text-accent-on-dark">Home</Link><FiChevronRight aria-hidden="true" /><span aria-current="page">{title}</span></nav>
    </div>
  </section>
);

export default InnerPageHero;
