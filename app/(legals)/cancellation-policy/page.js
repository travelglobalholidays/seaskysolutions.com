import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Cancellation Policy",
  description:
    "Review Sea Sky Solutions LLC cancellation support information for flights, hotels and travel provider bookings.",
  path: "/cancellation-policy",
  keywords: ["cancellation policy", "flight cancellation support", "travel change policy"],
});

const CancellationPolicyPage = () => (
  <LegalPageLayout
    title="Cancellation Policy"
    eyebrow="Clear cancellation guidance"
    description="This Cancellation Policy explains how cancellation and change requests are handled for travel services supported by Sea Sky Solutions LLC."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Provider rules decide",
        text: "Airlines, hotels and travel providers control cancellation windows, penalties, credits and refund eligibility.",
      },
      {
        title: "Act quickly",
        text: "Cancellation options may become more limited near departure, check-in, pickup, arrival, or the provider deadline.",
      },
      {
        title: "Fees may apply",
        text: "Supplier penalties, fare differences, no-show charges, service fees and non-refundable deposits may apply.",
      },
      {
        title: "Written confirmation matters",
        text: "A cancellation is not complete until written confirmation is issued by us or the relevant provider.",
      },
    ]}
    quickLinks={[
      { href: "#cancellation-scope", label: "What this covers" },
      { href: "#how-to-cancel", label: "How to cancel" },
      { href: "#fees-deadlines", label: "Fees and deadlines" },
      { href: "#no-show", label: "No-show rules" },
      { href: "#provider-disruptions", label: "Provider disruptions" },
      { href: "#cancellation-contact", label: "Contact" },
    ]}
    notice={{
      title: "Cancellation approval is not guaranteed",
      text: "Our team can help review available rules and submit eligible requests, but final approval depends on the ticket type, provider policy, timing, payment status, and availability.",
    }}
    faqs={[
      {
        question: "Can I cancel any booking?",
        answer:
          "You can ask to cancel, but eligibility, fees, credits and refunds depend on the provider rules and the type of booking purchased.",
      },
      {
        question: "Is calling or emailing enough to cancel?",
        answer:
          "No. A cancellation is not complete until written confirmation is issued by Sea Sky Solutions LLC or the relevant provider.",
      },
      {
        question: "What if I miss my flight or hotel check-in?",
        answer:
          "No-show rules may remove refund, credit, or change eligibility. Contact us and the provider immediately if a disruption may cause a missed service.",
      },
    ]}
  >
    <h2 id="cancellation-scope">1. What this policy covers</h2>
    <p>This policy applies to cancellation and change requests for flights, hotels, trains, car rentals, tours, packages, and other travel services that Sea Sky Solutions LLC helps arrange or support. It should be read together with our <Link href="/refund-policy">Refund Policy</Link> and <Link href="/terms-conditions">Terms & Conditions</Link>.</p>
    <p>Sea Sky Solutions LLC is an independent travel assistance agency. We are not an airline, hotel, rail operator, car rental company, tour provider, or official provider website. Provider rules control final cancellation outcomes.</p>

    <h2 id="how-to-cancel">2. How to request a cancellation or change</h2>
    <p>Contact us as soon as possible at <a href={siteContact.email.href}>{siteContact.email.address}</a> or <a href={siteContact.phone.href}>{siteContact.phone.display}</a>. Include your booking reference, traveler name, travel date, phone number, email address, and the specific cancellation or change you want reviewed.</p>
    <p>We may need to verify the booking holder before discussing reservation details. A request is not cancelled, changed, refunded, or credited until written confirmation is issued.</p>

    <h2 id="fees-deadlines">3. Fees, deadlines, and restrictions</h2>
    <p>Cancellation terms vary by provider and product. Some bookings allow free cancellation before a deadline, some allow cancellation with a penalty, some provide future credit, and some are fully non-refundable. Supplier penalties, fare differences, taxes, deposits, payment processing costs, and service fees may apply.</p>
    <p>Deadlines may be based on provider local time, departure time, hotel check-in time, pickup time, tour start time, or package terms. Late requests may be treated as no-show requests by the provider.</p>

    <h2 id="no-show">4. No-show and same-day situations</h2>
    <p>A no-show may occur when a traveler does not check in, board, arrive, pick up a vehicle, or use a reserved service within the provider rules. No-show status can cancel remaining itinerary segments and may remove refund or credit eligibility.</p>
    <p>If you may miss a flight, train, hotel arrival, car pickup, tour, or other service, contact us and the provider immediately. Available options may be limited and may involve additional charges.</p>

    <h2>5. Traveler responsibilities before cancellation</h2>
    <ul>
      <li>Review the itinerary, ticket type, room rules, package terms, and provider cancellation conditions.</li>
      <li>Confirm whether all travelers or only selected travelers need to cancel or change.</li>
      <li>Check whether cancelling one part of a package affects other travel services.</li>
      <li>Keep written records of cancellation requests, confirmations, and provider responses.</li>
      <li>Review travel insurance benefits if you purchased a policy.</li>
    </ul>

    <h2 id="provider-disruptions">6. Provider cancellations and disruptions</h2>
    <p>If an airline, hotel, or travel provider cancels or materially changes a service, available remedies may include rebooking, refund, credit, waiver, or another provider-controlled option. Weather, government action, strikes, security issues, public health events, and other disruptions may limit available remedies.</p>

    <h2 id="cancellation-contact">7. Contact for cancellation support</h2>
    <p>For cancellation support, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>. Include the booking reference and traveler details so our team can review the request efficiently.</p>
  </LegalPageLayout>
);

export default CancellationPolicyPage;
