import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import InnerPageHero from "@/components/common/InnerPageHero";
import { siteContact } from "@/config/siteContact";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Sea Sky Solutions LLC for help planning flights, hotels, cruises and travel packages.",
  path: "/contact-us",
  keywords: ["contact travel agent", "travel planning help"],
});

const contactCards = [
  { title: "Call us", value: siteContact.phone.display, href: siteContact.phone.href, icon: FiPhoneCall },
  { title: "Email us", value: siteContact.email.address, href: siteContact.email.href, icon: FiMail },
  { title: "Visit us", value: siteContact.address.display, href: siteContact.address.href, icon: FiMapPin },
];

const ContactUsPage = () => (
  <>
    <Header />
    <main>
      <InnerPageHero title="Contact Us" eyebrow="Let's plan your next trip" description="Tell us where you would like to go and we will help you take the next step." />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="site-container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-[14px] font-[500] uppercase tracking-[0.2em] text-[var(--brand-green)]">Get in touch</p>
            <h2 className="mt-2 text-[31px] font-[500] leading-[1.1] tracking-tight text-[var(--brand-blue)] sm:text-[42px]">We are ready when you are.</h2>
            <p className="mt-4 max-w-lg text-[16px] leading-7 text-[var(--brand-blue)]/65">Whether you have a destination in mind or are looking for ideas, our team is here to help you plan with confidence.</p>
            <div className="mt-7 grid gap-4">
              {contactCards.map(({ title, value, href, icon: Icon }) => <a key={title} href={href} className="group flex items-center justify-between gap-4 rounded-[18px] border border-[var(--brand-blue)]/12 bg-[#eef4f6] p-5 transition hover:border-[var(--brand-green)] hover:bg-white"><span><span className="block text-[15px] font-[500] text-[var(--brand-blue)]">{title}</span><span className="mt-1 block text-[16px] text-[var(--brand-blue)]/65">{value}</span></span><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[21px] text-[var(--brand-green)]"><Icon aria-hidden="true" /></span></a>)}
            </div>
          </div>
          <form action={siteContact.email.href} method="post" encType="text/plain" className="rounded-[24px] border border-[var(--brand-blue)]/12 bg-[#eef4f6] p-6 shadow-[0_16px_36px_rgba(7,89,139,0.08)] sm:p-8">
            <h2 className="text-[24px] font-[500] text-[var(--brand-blue)]">Send us a message</h2>
            <p className="mt-2 text-[15px] leading-6 text-[var(--brand-blue)]/65">Submitting this form opens your email application with your message details.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="text-[14px] font-[500] text-[var(--brand-blue)]">Full name<input name="name" required className="mt-2 h-[52px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label><label className="text-[14px] font-[500] text-[var(--brand-blue)]">Email address<input name="email" type="email" required className="mt-2 h-[52px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label></div>
            <label className="mt-5 block text-[14px] font-[500] text-[var(--brand-blue)]">How can we help?<textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 py-3 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label>
            <button type="submit" className="mt-6 inline-flex min-h-[52px] items-center rounded-full bg-[var(--brand-green)] px-7 text-[16px] font-[700] text-white transition hover:bg-[var(--brand-blue)] focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/30">Send message</button>
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactUsPage;
