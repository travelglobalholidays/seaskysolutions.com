import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description:
    "Read the Sea Sky Solutions LLC website, airline identification and travel support disclaimer.",
  path: "/disclaimer",
  keywords: ["travel disclaimer", "independent travel agency disclaimer"],
});

const DisclaimerPage = () => (
  <LegalPageLayout
    title="Disclaimer"
    eyebrow="Important travel information"
    description="This Disclaimer explains the limits of the information on our website, our independent travel support role, and why travelers should verify provider rules before booking or traveling."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Independent assistance",
        text: "Sea Sky Solutions LLC provides travel assistance and support. We are not the official website of any airline or travel provider.",
      },
      {
        title: "Information can change",
        text: "Routes, prices, schedules, policies, documents, and destination rules may change without notice.",
      },
      {
        title: "Provider decisions control",
        text: "Airlines, hotels, and travel providers control final booking rules, changes, refunds, credits, and availability.",
      },
      {
        title: "Traveler verification",
        text: "Travelers should verify names, dates, documents, entry rules, and provider terms before confirmation and travel.",
      },
    ]}
    quickLinks={[
      { href: "#independent-disclosure", label: "Independent disclosure" },
      { href: "#verify-requirements", label: "Verify requirements" },
      { href: "#third-party-services", label: "Third-party services" },
      { href: "#promotional-content", label: "Promotional content" },
      { href: "#responsibility-limits", label: "Responsibility limits" },
      { href: "#disclaimer-contact", label: "Contact" },
    ]}
    notice={{
      title: "Not an airline or official provider website",
      text: "Airline, hotel, and travel provider names are used for identification only. Sea Sky Solutions LLC does not claim official airline status, exclusive partnership, guaranteed fares, or guaranteed refund approval.",
    }}
    faqs={[
      {
        question: "Why do airline names appear on this website?",
        answer:
          "They may be used to identify routes, policies, support topics, or provider services that travelers ask about. This does not mean we are the airline.",
      },
      {
        question: "Can website prices or availability change?",
        answer:
          "Yes. Prices, availability, schedules, and provider rules can change until a booking is confirmed in writing.",
      },
      {
        question: "Should I verify travel documents myself?",
        answer:
          "Yes. Travelers are responsible for verifying passport, visa, transit, health, and destination entry requirements from official sources.",
      },
    ]}
  >
    <h2 id="independent-disclosure">1. Independent travel support disclosure</h2>
    <p>Sea Sky Solutions LLC is an independent travel assistance agency. We provide website information, planning support, booking assistance, and customer service guidance for travel-related requests. We are not an airline, hotel, rail operator, airport, government authority, embassy, cruise line, or official provider website.</p>
    <p>Names, trademarks, logos, routes, and provider references may appear only to identify travel services, airlines, hotels, policies, or customer support topics. Their use does not imply endorsement, ownership, affiliation, sponsorship, or partnership unless expressly stated in writing.</p>

    <h2 id="verify-requirements">2. Verify travel requirements</h2>
    <p>Travelers are responsible for verifying passport validity, visas, transit permissions, health requirements, vaccination rules, entry forms, minor travel documents, destination restrictions, local laws, safety notices, and carrier conditions before booking and before travel.</p>
    <p>Official government, embassy, consulate, airline, airport, and destination sources should be checked for the most current information. Our team may help locate or explain general information, but we do not provide legal, immigration, medical, or government advice.</p>

    <h2 id="third-party-services">3. Third-party services and provider policies</h2>
    <p>Flights, hotels, car rentals, trains, cruises, tours, insurance, payment processing, and other travel services may be supplied by independent third parties. Sea Sky Solutions LLC does not control their operations, schedules, inventory, pricing systems, customer records, refund decisions, safety practices, baggage handling, overbooking decisions, or policy updates.</p>
    <p>Provider descriptions, images, star ratings, amenities, aircraft details, schedules, route maps, inclusions, exclusions, and prices may change without notice. Always review the final itinerary, invoice, and provider terms before payment.</p>

    <h2>4. Accuracy of website information</h2>
    <p>We aim to keep website content clear, useful, and accurate. However, travel information changes quickly and may not be complete for every traveler, route, provider, fare, destination, or date. We may correct website errors, update content, or remove outdated offers at any time.</p>

    <h2 id="promotional-content">5. Advertising and promotional content</h2>
    <p>Promotional content is intended to describe available travel opportunities and support services. Images may be illustrative. Prices, inclusions, exclusions, routes, dates, room types, baggage rules, provider fees, taxes, and availability can change. A promotional statement is not a guarantee of official airline status, lowest fare, refund approval, or final booking price.</p>

    <h2>6. No professional advice</h2>
    <p>Website content is not legal, medical, immigration, tax, financial, insurance, or security advice. Seek qualified professional advice for decisions that require it. Travel insurance policy questions should be directed to the insurance provider.</p>

    <h2 id="responsibility-limits">7. Limitation of responsibility</h2>
    <p>To the extent permitted by applicable law, Sea Sky Solutions LLC is not responsible for losses caused by inaccurate third-party information, traveler error, provider actions, schedule changes, cancellations, denied boarding, documentation problems, payment processor decisions, weather, government action, strikes, public health events, security events, or circumstances outside our reasonable control.</p>

    <h2 id="disclaimer-contact">8. Contact</h2>
    <p>If you believe website information needs review or correction, contact <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default DisclaimerPage;
