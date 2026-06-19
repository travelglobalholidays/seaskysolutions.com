import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiCompass } from "react-icons/fi";

const InnerPageHero = ({ title, eyebrow, description }) => (
  <section className="relative isolate overflow-hidden bg-[var(--brand-blue)] py-16 sm:py-20 lg:py-24">
    <Image src="/images/working-bg.jpg" alt="" fill priority className="object-cover object-center opacity-30" aria-hidden="true" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,50,82,0.94),rgba(7,89,139,0.82))]" aria-hidden="true" />
    <div className="site-container relative z-10 mx-auto px-5 text-center sm:px-8 lg:px-12">
      <p className="flex items-center justify-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]"><FiCompass aria-hidden="true" />{eyebrow}</p>
      <h1 className="mt-3 text-[36px] font-[500] leading-[1.08] tracking-tight text-white sm:text-[50px] lg:text-[56px]">{title}</h1>
      {description ? <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7 text-white/80 sm:text-[17px]">{description}</p> : null}
      <nav className="mt-5 flex items-center justify-center gap-2 text-[15px] text-white/75" aria-label="Breadcrumb"><Link href="/" className="transition hover:text-[var(--brand-green)]">Home</Link><FiChevronRight aria-hidden="true" /><span aria-current="page">{title}</span></nav>
    </div>
  </section>
);

export default InnerPageHero;
