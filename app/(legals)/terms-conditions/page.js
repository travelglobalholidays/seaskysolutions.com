import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms for using Sea Sky Solutions LLC travel planning, booking support and website services.",
  path: "/terms-conditions",
  keywords: ["travel terms and conditions", "booking terms", "airline support terms"],
});

const TermsPage = () => (
  <LegalPageLayout
    title="Terms & Conditions"
    eyebrow="Booking with confidence"
    description="These Terms & Conditions explain how you may use our website and travel support services, and how airline, hotel, tour, payment and other provider rules apply to bookings."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Independent agency",
        text: "Sea Sky Solutions LLC provides travel assistance and support. We are not an airline, hotel, or official provider website.",
      },
      {
        title: "Provider rules apply",
        text: "Fare rules, cancellation conditions, refund eligibility, baggage fees, and schedule changes are controlled by the relevant provider.",
      },
      {
        title: "Traveler review required",
        text: "Before payment, travelers must verify names, dates, routes, documents, contact details, and displayed booking rules.",
      },
      {
        title: "No guaranteed outcomes",
        text: "Prices, availability, refunds, credits, and changes are not guaranteed until confirmed under applicable provider terms.",
      },
    ]}
    quickLinks={[
      { href: "#independent-service", label: "Independent service" },
      { href: "#prices-availability", label: "Prices and availability" },
      { href: "#traveler-responsibilities", label: "Traveler responsibilities" },
      { href: "#payments-billing", label: "Payments and billing" },
      { href: "#changes-refunds", label: "Changes and refunds" },
      { href: "#contact-terms", label: "Contact" },
    ]}
    notice={{
      title: "Important booking disclosure",
      text: "Airline and travel provider names, logos, or trademarks may appear only for identification. Their final rules control the travel product, even when our team helps explain or submit a request.",
    }}
    faqs={[
      {
        question: "Is Sea Sky Solutions LLC the official airline website?",
        answer:
          "No. Sea Sky Solutions LLC is an independent travel assistance agency and is not the official website of any airline, hotel, or travel provider.",
      },
      {
        question: "When is a booking confirmed?",
        answer:
          "A booking is confirmed only when availability is verified, payment requirements are met, and written confirmation or a booking reference is issued.",
      },
      {
        question: "Can your team guarantee a fare, refund, or change?",
        answer:
          "No. Fares, availability, refund approvals, credits, and changes depend on provider rules, ticket type, payment status, and availability.",
      },
    ]}
  >
    <h2 id="independent-service">1. Who we are and what these Terms cover</h2>
    <p>Sea Sky Solutions LLC operates this website and provides travel planning, booking support, and customer assistance for flights, hotels, car rentals, trains, tours, packages, and related travel services. By using this website, contacting us, submitting information, or requesting travel support, you agree to these Terms.</p>
    <p>We are an independent travel assistance agency. We are not an airline, hotel, government authority, embassy, airport, cruise line, rail operator, or official travel provider website. Provider names are used to identify the service, route, policy, or booking a customer is asking about.</p>

    <h2>2. Travel providers and third-party rules</h2>
    <p>Travel products may be supplied by airlines, hotels, rail companies, car rental companies, tour operators, booking platforms, insurance providers, or other independent suppliers. Their terms apply in addition to these Terms and may control fare restrictions, baggage rules, check-in deadlines, room rules, deposit schedules, cancellation windows, refund eligibility, credits, rebooking options, no-show penalties, and passenger documentation requirements.</p>
    <p>We can help explain information that is available to us, but we do not control supplier inventory, schedules, seat assignments, aircraft changes, hotel operations, government entry rules, weather disruptions, or provider decisions.</p>

    <h2 id="prices-availability">3. Prices, availability, and displayed information</h2>
    <p>Prices and availability may change quickly and are not guaranteed until a reservation is confirmed and payment requirements are satisfied. Taxes, carrier-imposed charges, resort fees, baggage fees, seat fees, visa fees, insurance costs, exchange rate changes, and other third-party charges may apply unless expressly included in the final itinerary or invoice.</p>
    <p>We aim to present clear and accurate information. However, website content, advertisements, fare examples, package descriptions, schedules, room types, route details, images, and availability may contain errors or become outdated. We may correct errors before or after a request is submitted, subject to applicable law and provider rules.</p>

    <h2 id="traveler-responsibilities">4. Traveler responsibilities</h2>
    <p>Travelers are responsible for reviewing all booking details before payment and before travel. This includes:</p>
    <ul>
      <li>Passenger names exactly as shown on government-issued travel documents.</li>
      <li>Travel dates, airports, cities, times, layovers, hotel dates, room types, and destination details.</li>
      <li>Phone number, email address, billing information, and emergency contact details.</li>
      <li>Passport, visa, transit, health, vaccination, minor travel, and entry requirements.</li>
      <li>Baggage allowances, seat selection, check-in deadlines, fare rules, cancellation rules, and no-show conditions.</li>
    </ul>

    <h2 id="payments-billing">5. Payments, billing, and service fees</h2>
    <p>Payment may be required to hold or confirm certain travel services. Some transactions may include supplier charges and separate service, processing, consultation, or assistance fees. Fees and payment requirements should be reviewed before confirmation.</p>
    <p>Payment authorization does not always mean the requested fare or service is confirmed. If a provider rejects a transaction, changes availability, or identifies a pricing issue, we will explain the available next steps. Card issuer delays, bank reviews, fraud checks, currency conversion, and chargeback procedures are outside our control.</p>

    <h2 id="changes-refunds">6. Changes, cancellations, refunds, and credits</h2>
    <p>Change, cancellation, refund, and credit requests are governed by the relevant provider rules and the ticket, fare, room, package, or service type purchased. Some bookings are non-refundable, non-changeable, or subject to supplier penalties and fare differences.</p>
    <p>Submitting a request to us does not guarantee approval. We can help review available information, explain known rules, and assist with the support process, but final approval is controlled by the airline or travel provider. For more detail, review our <Link href="/refund-policy">Refund Policy</Link> and <Link href="/cancellation-policy">Cancellation Policy</Link>.</p>

    <h2>7. Website use and prohibited conduct</h2>
    <p>You may use this website for lawful personal travel planning and support purposes. You agree not to submit false information, impersonate another person, interfere with website operation, misuse forms or contact channels, copy website content without permission, attempt unauthorized access, or use the website for fraudulent or harmful activity.</p>

    <h2>8. Advertising, offers, and affiliate-style disclosures</h2>
    <p>Advertisements, promotional fares, package examples, and travel support content are intended to help users compare or request information. They are not guarantees of official status, lowest fare, refund approval, provider partnership, or final availability. Material restrictions, deadlines, eligibility requirements, and fees should be reviewed before payment.</p>

    <h2>9. Limitation of responsibility</h2>
    <p>To the extent permitted by law, Sea Sky Solutions LLC is not responsible for losses caused by third-party provider actions, schedule changes, cancellations, overbooking, denied boarding, government restrictions, weather, force majeure events, inaccurate information provided by a traveler, documentation issues, payment processor decisions, or circumstances outside our reasonable control.</p>

    <h2>10. Complaints and service concerns</h2>
    <p>If you have a concern about a quotation, booking, charge, cancellation, refund, or website statement, contact us promptly with your booking reference, traveler name, contact details, and a clear description of the issue. We will review the available records and respond with available next steps.</p>

    <h2>11. Changes to these Terms</h2>
    <p>We may update these Terms when our services, suppliers, legal obligations, payment practices, or website features change. The revised version will be posted on this page with an updated effective date.</p>

    <h2 id="contact-terms">12. Contact</h2>
    <p>For questions about these Terms, contact Sea Sky Solutions LLC at <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default TermsPage;
