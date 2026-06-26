import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using Sea Sky Solutions LLC travel planning and booking services.",
  path: "/terms-conditions",
  keywords: ["travel terms and conditions", "booking terms"],
});

const TermsPage = () => (
  <LegalPageLayout title="Terms & Conditions" eyebrow="Booking with confidence">
    <p><strong>Last updated:</strong> June 20, 2026</p>
    <p>These Terms & Conditions govern your use of the Sea Sky Solutions LLC website and the travel planning or booking support we provide. By using this website or requesting travel services, you agree to these terms.</p>
    <h2>1. Travel bookings</h2>
    <p>Flights, accommodation, cruises, transfers, tours and other travel products may be supplied by independent travel providers. Their terms, fare rules, availability, cancellation conditions and eligibility requirements apply in addition to these Terms.</p>
    <h2>2. Prices and availability</h2>
    <p>Prices and availability can change until a reservation is confirmed and payment is accepted. Taxes, carrier charges, resort fees, baggage fees, visa fees and other third-party costs may not be included unless expressly stated in your itinerary.</p>
    <h2>3. Traveller responsibilities</h2>
    <ul><li>Provide complete and accurate traveller, payment and contact details.</li><li>Review all names, dates, destinations and travel documents before confirmation.</li><li>Meet passport, visa, health, entry, transit and insurance requirements for every destination.</li><li>Follow supplier rules, local laws and all transport-provider requirements.</li></ul>
    <h2>4. Changes, cancellations and refunds</h2>
    <p>Any change or cancellation request is subject to the relevant supplier rules and the Refund Policy. Charges may apply, and some bookings may be non-refundable or non-changeable.</p>
    <h2>5. Website use</h2>
    <p>You may use this website for lawful, personal travel-planning purposes. You must not misuse the website, submit false information, interfere with its operation or use its content without permission.</p>
    <h2>6. Offers, advertising and disclosures</h2>
    <p>Any fare, discount, package price, availability statement or promotional benefit shown on this website or in an advertisement is subject to the specific offer terms, supplier availability and the information provided at the time of booking. An offer is not guaranteed until it is confirmed in writing. We aim to present material restrictions, eligibility requirements, booking deadlines and applicable fees clearly before you complete a booking.</p>
    <h2>7. Complaints and service concerns</h2>
    <p>If you have a concern about a quotation, booking or website content, contact us promptly with your booking reference and a clear description of the issue. We will review the information and, where appropriate, work with the relevant supplier to provide an update or available next steps.</p>
    <h2>8. Changes to these Terms</h2>
    <p>We may update these Terms when our services, suppliers, legal obligations or website features change. The revised version will be posted on this page with an updated effective date.</p>
    <h2>9. Contact</h2>
    <p>For questions about these Terms, contact Sea Sky Solutions LLC at <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default TermsPage;
