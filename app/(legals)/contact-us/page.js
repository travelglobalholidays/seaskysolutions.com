import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import InnerPageHero from "@/components/common/InnerPageHero";
import { siteContact } from "@/config/siteContact";
import { FiAlertCircle, FiCheckCircle, FiMail, FiMapPin, FiPhoneCall, FiShield } from "react-icons/fi";
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

const supportGuidelines = [
  "Include your booking reference, traveler name, travel date and the exact issue you want reviewed.",
  "Do not send full card numbers, passwords or unnecessary sensitive documents by email.",
  "Verify passenger names, dates, documents and contact details before confirming a booking.",
  "Airline, hotel and travel provider rules control final changes, cancellations, refunds and credits.",
];

const supportCards = [
  {
    title: "Independent travel support",
    text: "Sea Sky Solutions LLC can help review available booking details and explain known provider rules. We are not an airline or official provider website.",
    icon: FiShield,
  },
  {
    title: "Clear request process",
    text: "Send one clear message with your booking details and preferred contact method so our team can route the request efficiently.",
    icon: FiCheckCircle,
  },
  {
    title: "Important limitations",
    text: "Support does not guarantee fare availability, refund approval, waiver approval, seat assignment, schedule protection or provider response time.",
    icon: FiAlertCircle,
  },
];

const ContactUsPage = () => (
  <>
    <Header />
    <main>
      <InnerPageHero title="Contact Us" eyebrow="Let's plan your next trip" description="Tell us where you would like to go and we will help you take the next step." />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="site-container mx-auto grid gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
          <div>
            <p className="text-[14px] font-[500] uppercase tracking-[0.2em] text-accent-strong">Get in touch</p>
            <h2 className="mt-2 text-[31px] font-[500] leading-[1.1] tracking-tight text-[var(--brand-blue)] sm:text-[42px]">We are ready when you are.</h2>
            <p className="mt-4 max-w-lg text-[16px] leading-7 text-[var(--brand-blue)]/65">Whether you have a destination in mind or are looking for ideas, our team is here to help you plan with confidence.</p>
            <div className="mt-7 grid gap-4">
              {contactCards.map(({ title, value, href, icon: Icon }) => <a key={title} href={href} className="group flex items-center justify-between gap-4 rounded-[18px] border border-[var(--brand-blue)]/12 bg-section-muted p-5 transition hover:border-[var(--brand-green)] hover:bg-white"><span><span className="block text-[15px] font-[500] text-[var(--brand-blue)]">{title}</span><span className="mt-1 block text-[16px] text-[var(--brand-blue)]/65">{value}</span></span><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[21px] text-accent-strong"><Icon aria-hidden="true" /></span></a>)}
            </div>
          </div>
          <form action={siteContact.email.href} method="post" encType="text/plain" className="rounded-[24px] border border-[var(--brand-blue)]/12 bg-section-muted p-6 shadow-card sm:p-8">
            <h2 className="text-[24px] font-[500] text-[var(--brand-blue)]">Send us a message</h2>
            <p className="mt-2 text-[15px] leading-6 text-[var(--brand-blue)]/65">Submitting this form opens your email application with your message details.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2"><label className="text-[14px] font-[500] text-[var(--brand-blue)]">Full name<input name="name" required className="mt-2 h-[52px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label><label className="text-[14px] font-[500] text-[var(--brand-blue)]">Email address<input name="email" type="email" required className="mt-2 h-[52px] w-full rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label></div>
            <label className="mt-5 block text-[14px] font-[500] text-[var(--brand-blue)]">How can we help?<textarea name="message" required rows={5} className="mt-2 w-full resize-y rounded-xl border border-[var(--brand-blue)]/15 bg-white px-4 py-3 text-[16px] outline-none focus:border-[var(--brand-green)] focus:ring-4 focus:ring-[var(--brand-green)]/15" /></label>
            <button type="submit" className="mt-6 inline-flex min-h-[52px] items-center rounded-full bg-[var(--brand-green)] px-7 text-[16px] font-[700] text-accent-contrast transition hover:bg-[var(--brand-blue)] hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--brand-green)]/30">Send message</button>
          </form>
        </div>
      </section>
      <section className="bg-section-muted py-12 sm:py-16 lg:py-20">
        <div className="site-container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[14px] font-[800] uppercase tracking-[0.18em] text-accent-strong">Contact and support policy</p>
            <h2 className="mt-2 text-[30px] font-[800] leading-[1.1] text-[var(--brand-blue)] sm:text-[42px]">What to expect when you contact us.</h2>
            <p className="mt-4 text-[16px] leading-7 text-[var(--brand-blue)]/70">We provide travel planning and booking support in simple professional English. Our team can review information available to us, but final provider rules and decisions remain with the airline, hotel or travel service provider.</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {supportCards.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[20px] border border-[var(--brand-blue)]/12 bg-white p-6 shadow-card">
                <span className="flex size-12 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[23px] text-[var(--brand-blue)]"><Icon aria-hidden="true" /></span>
                <h3 className="mt-5 text-[20px] font-[800] leading-6 text-[var(--brand-blue)]">{title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[var(--brand-blue)]/70">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 rounded-[22px] border border-[var(--brand-blue)]/12 bg-white p-6 shadow-card lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div>
              <p className="text-[14px] font-[800] uppercase tracking-[0.16em] text-accent-strong">Before you send</p>
              <h2 className="mt-2 text-[26px] font-[800] leading-tight text-[var(--brand-blue)]">Help us review your request faster.</h2>
              <p className="mt-3 text-[15px] leading-7 text-[var(--brand-blue)]/70">A complete message helps reduce back-and-forth and gives our support team the right context for booking, refund, cancellation or general travel questions.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {supportGuidelines.map((item) => (
                <li key={item} className="flex gap-3 rounded-[16px] bg-section-muted p-4 text-[15px] leading-6 text-[var(--brand-blue)]/75">
                  <FiCheckCircle className="mt-1 shrink-0 text-[18px] text-accent-strong" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ContactUsPage;
