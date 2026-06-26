import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiCompass } from "react-icons/fi";

const LegalPageLayout = ({
  title,
  eyebrow = "Sea Sky Solutions LLC",
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
            className="object-cover object-center opacity-30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,50,82,0.94),rgba(7,89,139,0.82))]"
            aria-hidden="true"
          />
          <div className="site-container relative z-10 mx-auto px-5 text-center sm:px-8 lg:px-12">
            <p className="flex items-center justify-center gap-2 text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">
              <FiCompass aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-3 text-[36px] font-[500] leading-[1.08] tracking-tight text-white sm:text-[50px] lg:text-[56px]">
              {title}
            </h1>
            <nav
              className="mt-5 flex items-center justify-center gap-2 text-[15px] text-white/75"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="transition hover:text-[var(--brand-green)]"
              >
                Home
              </Link>
              <FiChevronRight aria-hidden="true" />
              <span aria-current="page">{title}</span>
            </nav>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12 lg:py-14">
          <div className="site-container mx-auto px-5 sm:px-8 lg:px-12">
            <article className="mx-auto max-w-[950px] text-[var(--brand-blue)] [&_h2]:mt-4 [&_h2]:text-[22px] [&_h2]:font-[500] [&_h2]:leading-7 [&_h2]:text-[var(--brand-blue)] [&_h2:first-child]:mt-0 [&_h3]:mt-5 [&_h3]:text-[18px] [&_h3]:font-[500] [&_h3]:leading-6 [&_h3]:text-[var(--brand-blue)] [&_li]:mt-1 [&_li]:text-[15px] [&_li]:leading-6 [&_li]:text-[var(--brand-blue)]/65 [&_p]:mt-3 [&_p]:text-[15px] [&_p]:leading-6 [&_p]:text-[var(--brand-blue)]/65 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LegalPageLayout;
