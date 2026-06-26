import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Refund Policy",
  description:
    "Review Sea Sky Solutions LLC cancellation, change and refund request information.",
  path: "/refund-policy",
  keywords: ["travel refund policy", "travel cancellation policy"],
});

const RefundPage = () => (
  <LegalPageLayout title="Refund Policy" eyebrow="Clear booking support">
    <p><strong>Last updated:</strong> June 20, 2026</p>
    <p>This policy explains how cancellation and refund requests are handled for travel products arranged through Sea Sky Solutions LLC.</p>
    <h2>1. Supplier rules apply</h2>
    <p>Each airline, hotel, cruise line, tour operator and other supplier has its own cancellation, change and refund rules. Your confirmed itinerary and supplier terms determine whether a refund, credit or change is available.</p>
    <h2>2. How to request a cancellation</h2>
    <p>Send your request as soon as possible to <a href={siteContact.email.href}>{siteContact.email.address}</a> with your booking reference, traveller name and the requested change. A request is not confirmed until Sea Sky Solutions LLC responds in writing.</p>
    <h2>3. Fees and non-refundable products</h2>
    <p>Supplier penalties, fare differences, processing fees and non-refundable deposits may apply. Some promotional fares, tickets, packages and services cannot be refunded after purchase.</p>
    <h2>4. Processing time</h2>
    <p>When a supplier approves a refund, the time for funds to appear depends on that supplier, the original payment method and your bank or card provider. We will keep you informed of the status where possible.</p>
    <h2>5. Booking records and payment source</h2>
    <p>Approved refunds are generally returned to the original payment method where permitted. Please keep your confirmation, payment record and correspondence. We may need to verify the booking holder&apos;s identity before discussing or changing a reservation.</p>
    <h2>6. Travel disruptions</h2>
    <p>For cancellations or disruptions caused by a supplier, weather, government action or other events outside our control, available remedies are governed by the supplier&apos;s rules and applicable law. Travel insurance may provide additional protection depending on your policy.</p>
    <h2>7. Clear communication</h2>
    <p>Before payment, review the cancellation terms shown in your quotation or supplier booking conditions. If any term is unclear, ask for an explanation before you confirm the booking.</p>
  </LegalPageLayout>
);

export default RefundPage;
