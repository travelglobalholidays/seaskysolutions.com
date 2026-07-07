import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Travel FAQs",
  description:
    "Find answers to common questions about planning, booking, changes and cancellations with Sea Sky Solutions LLC.",
  path: "/faqs",
  keywords: ["travel booking FAQs", "travel questions"],
});

const faqs = [
  {
    question: "How do I start planning a trip?",
    answer:
      "Share your preferred destination, travel dates, number of travelers, route, service type, and budget. Sea Sky Solutions LLC can help narrow down available options and explain important booking details.",
  },
  {
    question: "Is Sea Sky Solutions LLC an airline?",
    answer:
      "No. Sea Sky Solutions LLC is an independent travel assistance agency. Airline names may be used only to identify the route, provider, policy, or booking topic you are asking about.",
  },
  {
    question: "When is my booking confirmed?",
    answer:
      "A booking is confirmed only after availability is verified, payment requirements are met, and written confirmation with an itinerary, ticket number, or booking reference is issued.",
  },
  {
    question: "Can I change my travel dates?",
    answer:
      "Changes depend on supplier availability, ticket type, fare rules, and any applicable fees or fare differences. Contact us as soon as possible so we can review available options.",
  },
  {
    question: "What happens if I need to cancel?",
    answer:
      "Cancellation and refund eligibility depends on the confirmed product and supplier rules. Some bookings are non-refundable or may only qualify for credit. Please review our Refund Policy and Cancellation Policy.",
  },
  {
    question: "Are advertised prices guaranteed?",
    answer:
      "No. Advertised prices, offers, and availability can change until a booking is confirmed. Before payment, review the final itinerary, inclusions, exclusions, taxes, fees, and supplier terms.",
  },
  {
    question: "What details should I verify before payment?",
    answer:
      "Verify passenger names, travel dates, airports or cities, documents, phone number, email address, baggage rules, cancellation terms, and payment details before confirming a booking.",
  },
  {
    question: "How can I contact Sea Sky Solutions LLC about a booking?",
    answer: `Email ${siteContact.email.address} with your booking reference, traveler name, and a concise description of your request. We will review the available options and respond with next steps.`,
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Travel insurance is optional unless a supplier or destination requires it, but it may help protect eligible trip costs and emergencies. Review policy exclusions and claim rules before buying.",
  },
];

const FaqPage = () => (
  <LegalPageLayout
    title="Frequently Asked Questions"
    eyebrow="Helpful answers"
    description="Find clear answers about booking support, provider rules, prices, refunds, cancellations, traveler responsibilities, and how to contact Sea Sky Solutions LLC."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Independent support",
        text: "We help travelers understand and manage travel requests, but final rules are controlled by airlines and providers.",
      },
      {
        title: "Before payment",
        text: "Review names, dates, documents, contact details, itinerary details, fees, and supplier terms before confirming.",
      },
      {
        title: "Changes and refunds",
        text: "Eligibility depends on ticket type, provider policy, availability, payment status, and timing.",
      },
      {
        title: "Support process",
        text: "Provide your booking reference and request details so our team can review available next steps.",
      },
    ]}
    quickLinks={[
      { href: "#booking-support", label: "Booking support" },
      { href: "#traveler-checklist", label: "Traveler checklist" },
      { href: "#policy-links", label: "Policy links" },
      { href: "#support-contact", label: "Support contact" },
    ]}
    notice={{
      title: "Read before booking",
      text: "These FAQs are general guidance. Your final booking rules are shown in the applicable airline, hotel, travel provider, itinerary, invoice, or fare conditions.",
    }}
    faqs={faqs}
  >
    <h2 id="booking-support">Booking support in simple terms</h2>
    <p>Sea Sky Solutions LLC helps travelers compare travel options, ask questions, review displayed booking details, and understand the next steps for flights, hotels, trains, car rentals, tours, and related services. We are an independent travel assistance agency and not the official website of any airline or provider.</p>
    <p>Our team can help explain information available to us, but provider systems control final fares, availability, schedules, seating, hotel inventory, cancellation rules, refund eligibility, and credits.</p>

    <h2 id="traveler-checklist">Traveler checklist before confirmation</h2>
    <ul>
      <li>Confirm passenger names exactly match government-issued travel documents.</li>
      <li>Review routes, airports, cities, dates, times, layovers, rooms, services, and traveler count.</li>
      <li>Check passport, visa, transit, health, minor travel, and destination entry requirements.</li>
      <li>Review baggage rules, seat rules, cancellation conditions, refund limits, and no-show rules.</li>
      <li>Make sure your phone number, email address, billing details, and emergency contact information are correct.</li>
    </ul>

    <h2 id="policy-links">Related policy pages</h2>
    <p>For more detail, review our <Link href="/terms-conditions">Terms & Conditions</Link>, <Link href="/refund-policy">Refund Policy</Link>, <Link href="/cancellation-policy">Cancellation Policy</Link>, <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/cookie-policy">Cookie Policy</Link>, and <Link href="/disclaimer">Disclaimer</Link>.</p>

    <h2 id="support-contact">Contact support</h2>
    <p>For booking support, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>. Include your booking reference, traveler name, travel date, and the specific question you want reviewed.</p>
  </LegalPageLayout>
);

export default FaqPage;
