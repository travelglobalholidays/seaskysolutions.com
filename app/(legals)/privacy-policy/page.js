import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Sea Sky Solutions LLC collects, uses, shares and protects travel support information.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "travel website privacy", "booking support privacy"],
});

const PrivacyPage = () => (
  <LegalPageLayout
    title="Privacy Policy"
    eyebrow="Your privacy matters"
    description="This Privacy Policy explains how Sea Sky Solutions LLC handles information when you browse our website, request travel support, ask about airline or provider rules, or communicate with our team."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Travel support data",
        text: "We collect information needed to respond to inquiries, review displayed booking details, and support travel requests.",
      },
      {
        title: "Provider sharing",
        text: "When needed, limited information may be shared with airlines, hotels, payment processors, or travel service providers.",
      },
      {
        title: "User control",
        text: "You may contact us to request access, correction, deletion, or marketing opt-out where applicable law allows.",
      },
      {
        title: "No sale of bookings",
        text: "We do not sell your booking details. We use information to provide support, comply with law, and improve service quality.",
      },
    ]}
    quickLinks={[
      { href: "#information-we-collect", label: "Information we collect" },
      { href: "#how-we-use-information", label: "How we use it" },
      { href: "#sharing-information", label: "When we share it" },
      { href: "#cookies-and-ads", label: "Cookies and ads" },
      { href: "#your-choices", label: "Your choices" },
      { href: "#privacy-contact", label: "Privacy contact" },
    ]}
    notice={{
      title: "Travel provider disclosure",
      text: "Sea Sky Solutions LLC is an independent travel assistance agency. Airline, hotel, and travel provider names may be used only to identify the services or policies a traveler is asking about.",
    }}
    faqs={[
      {
        question: "Do you share my information with airlines or travel providers?",
        answer:
          "Only when it is reasonably needed to prepare, support, verify, change, or service a travel request, or when required by law or provider procedures.",
      },
      {
        question: "Can I ask for my information to be corrected?",
        answer:
          "Yes. Contact us with the details that need review. Some booking records may also be controlled by the airline, hotel, or third-party provider.",
      },
      {
        question: "Do third-party sites follow this Privacy Policy?",
        answer:
          "No. Third-party airline, hotel, payment, insurance, or travel provider websites are governed by their own privacy policies.",
      },
    ]}
  >
    <h2 id="information-we-collect">1. Information we may collect</h2>
    <p>We collect information that helps us operate the website, respond to travel inquiries, and support booking-related requests. This may include:</p>
    <ul>
      <li>Contact details such as name, email address, phone number, billing address, and preferred method of contact.</li>
      <li>Trip details such as destination, travel dates, route, airline or provider name, passenger count, travel preferences, and special request notes.</li>
      <li>Passenger and booking details that you choose to provide, including names as shown on travel documents, date of birth where required by a provider, booking reference, ticket number, or itinerary details.</li>
      <li>Payment and billing information needed to process or support a transaction. Complete card details may be handled by payment processors or booking providers, depending on the transaction flow.</li>
      <li>Website information such as device type, browser, pages viewed, referral source, approximate location, cookie preferences, and interactions with forms or advertisements.</li>
    </ul>

    <h2 id="how-we-use-information">2. How we use information</h2>
    <p>We use personal information to answer questions, review displayed booking details, prepare travel options, communicate support steps, process service requests, and maintain records of customer communications. We may also use information to improve website performance, prevent misuse, meet legal obligations, and send service-related updates.</p>
    <p>Before confirming any travel arrangement, you are responsible for checking passenger names, dates, routes, passport or visa requirements, contact details, baggage rules, and payment information. Our team can help review the information available to us, but final accuracy remains the traveler responsibility.</p>

    <h2 id="sharing-information">3. When information may be shared</h2>
    <p>Travel services often require coordination with third parties. We may share only the information reasonably needed with airlines, hotels, car rental companies, train operators, tour providers, insurance providers, booking platforms, payment processors, fraud-prevention tools, technology vendors, and professional advisors.</p>
    <p>We may also disclose information if required by law, court order, government request, payment dispute, fraud review, or to protect the rights, safety, and security of Sea Sky Solutions LLC, travelers, suppliers, or the public.</p>

    <h2 id="cookies-and-ads">4. Cookies, analytics, and advertising</h2>
    <p>Our website may use cookies, pixels, tags, or similar technologies to keep the site functional, remember preferences, measure performance, understand traffic sources, and evaluate advertising effectiveness. Where required, we provide consent options for non-essential cookies.</p>
    <p>If Google services or other advertising platforms are used, those providers may process data under their own policies. You can manage browser cookies through your browser settings and may also use platform-level opt-out tools where available.</p>

    <h2>5. Third-party links and provider privacy rules</h2>
    <p>Our website may link to airline, hotel, payment, map, insurance, or travel provider websites. Those third parties control their own websites, privacy practices, booking systems, and customer records. Please review their policies before submitting information directly to them.</p>

    <h2 id="your-choices">6. Retention, security, and your choices</h2>
    <p>We keep information only as long as reasonably needed for the purposes described in this policy, including customer support, booking records, accounting, legal compliance, fraud prevention, dispute handling, and service improvement. Retention periods may vary based on provider requirements and applicable law.</p>
    <p>We use reasonable administrative, technical, and physical safeguards to protect information. No website, email, phone communication, or data transmission can be guaranteed completely secure. You may request access, correction, deletion, restriction, or marketing opt-out, subject to legal and operational limits.</p>

    <h2 id="privacy-contact">7. Policy updates and contact</h2>
    <p>We may update this Privacy Policy when our services, technology, suppliers, or legal obligations change. The updated version will be posted on this page with a revised date.</p>
    <p>To make a privacy request or ask a question, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default PrivacyPage;
