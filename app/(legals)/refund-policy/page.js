import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Refund Policy",
  description:
    "Review Sea Sky Solutions LLC refund request information for flights, hotels and travel provider services.",
  path: "/refund-policy",
  keywords: ["travel refund policy", "flight refund support", "travel cancellation policy"],
});

const RefundPage = () => (
  <LegalPageLayout
    title="Refund Policy"
    eyebrow="Clear booking support"
    description="This Refund Policy explains how refund requests are reviewed for travel services supported by Sea Sky Solutions LLC and why final eligibility depends on airline and travel provider rules."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Refunds are provider-controlled",
        text: "Airlines, hotels and other providers decide whether a booking qualifies for a refund, credit or waiver.",
      },
      {
        title: "Some products are non-refundable",
        text: "Discount fares, basic tickets, deposits, service fees, packages and promotional products may be restricted.",
      },
      {
        title: "Processing can take time",
        text: "Approved refunds depend on provider review, payment processor timing, card issuer rules and bank posting schedules.",
      },
      {
        title: "Support is available",
        text: "Our team can review displayed rules, gather booking details and help submit or track an eligible request.",
      },
    ]}
    quickLinks={[
      { href: "#refund-scope", label: "What this covers" },
      { href: "#provider-rules", label: "Provider rules" },
      { href: "#request-refund", label: "How to request" },
      { href: "#fees-timing", label: "Fees and timing" },
      { href: "#disruptions", label: "Disruptions" },
      { href: "#refund-contact", label: "Refund contact" },
    ]}
    notice={{
      title: "Refunds are not guaranteed",
      text: "Submitting a refund request does not mean the refund is approved. Eligibility depends on the ticket or booking type, provider rules, payment status, timing, and applicable law.",
    }}
    faqs={[
      {
        question: "Will I always receive money back if I cancel?",
        answer:
          "No. Some bookings are non-refundable or may only qualify for a credit, partial refund, or provider waiver.",
      },
      {
        question: "Can service fees be refunded?",
        answer:
          "Service, processing, consultation, or support fees may be separate from provider charges and may be non-refundable once the service has been performed.",
      },
      {
        question: "Where will an approved refund be sent?",
        answer:
          "Approved refunds are generally returned to the original payment method where permitted by the provider and payment processor.",
      },
    ]}
  >
    <h2 id="refund-scope">1. What this policy covers</h2>
    <p>This policy applies to refund requests for flights, hotels, train bookings, car rentals, tours, packages, and other travel services that Sea Sky Solutions LLC helps arrange or support. It also explains the limits of our role as an independent travel assistance agency.</p>
    <p>Sea Sky Solutions LLC is not an airline or travel provider. We may help review information, explain displayed rules, communicate next steps, and assist with support requests, but final refund decisions are controlled by the relevant provider and applicable law.</p>

    <h2 id="provider-rules">2. Supplier rules apply</h2>
    <p>Each airline, hotel, rail operator, car rental company, tour operator, cruise line, booking platform, and insurance provider has its own refund rules. Your confirmed itinerary, fare basis, room type, package terms, deposit rules, and provider conditions determine whether a refund, credit, waiver, or change is available.</p>
    <p>Some tickets and products are non-refundable after purchase. Others may allow cancellation for a fee, offer future travel credit, or permit partial refunds of taxes or unused provider charges. No-show situations may remove refund or credit eligibility.</p>

    <h2 id="request-refund">3. How to request a refund</h2>
    <p>Contact us as soon as possible at <a href={siteContact.email.href}>{siteContact.email.address}</a> or <a href={siteContact.phone.href}>{siteContact.phone.display}</a>. Include your booking reference, traveler name, contact information, travel date, and a clear explanation of the request.</p>
    <p>A request is not approved or confirmed until written confirmation is issued by Sea Sky Solutions LLC or the relevant provider. We may need to verify the booking holder identity before discussing or changing reservation details.</p>

    <h2 id="fees-timing">4. Fees, deductions, and processing time</h2>
    <p>Supplier penalties, fare differences, cancellation charges, payment processing costs, currency conversion differences, and non-refundable deposits may reduce the amount returned. Separate service or assistance fees may be non-refundable once the related service has been provided.</p>
    <p>When a provider approves a refund, the timeline for funds to appear depends on the provider, payment processor, original payment method, card issuer, and bank. Some providers review refunds in stages, especially during schedule disruptions, weather events, or high-volume periods.</p>

    <h2>5. Payment records and chargebacks</h2>
    <p>Please keep your confirmation, invoice, payment record, provider emails, and support correspondence. If you dispute a charge with your bank while a provider review is pending, the dispute process may affect the timing or handling of the refund request.</p>

    <h2 id="disruptions">6. Airline and travel disruptions</h2>
    <p>If a provider cancels, delays, reschedules, or materially changes a travel service, available remedies may include rebooking, credit, waiver, refund, or no remedy depending on provider rules and applicable law. Weather, government action, security issues, strikes, public health events, and other events outside our control may limit available options.</p>
    <p>Travel insurance may provide additional protection if purchased and if the reason qualifies under the policy. Insurance claims are handled by the insurance provider, not by Sea Sky Solutions LLC.</p>

    <h2>7. Before you pay</h2>
    <p>Before payment, review the cancellation and refund terms shown in the quotation, checkout, invoice, itinerary, or provider rules. Ask questions before confirming if any restriction is unclear. You should also verify traveler names, dates, routes, contact details, and required documents.</p>

    <h2 id="refund-contact">8. Contact for refund support</h2>
    <p>For refund questions, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>. Include the booking reference so our team can review the available details efficiently.</p>
  </LegalPageLayout>
);

export default RefundPage;
