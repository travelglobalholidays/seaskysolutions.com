import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read how Sea Sky Solutions collects, uses and protects personal information.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "travel website privacy"],
});

const PrivacyPage = () => (
  <LegalPageLayout title="Privacy Policy" eyebrow="Your privacy matters">
    <p><strong>Last updated:</strong> June 20, 2026</p>
    <p>This Privacy Policy explains how Sea Sky Solutions collects, uses and protects personal information when you use our website, contact us or request travel services.</p>
    <h2>1. Information we may collect</h2>
    <ul><li>Contact details, such as your name, email address, phone number and preferred method of contact.</li><li>Trip details, including destinations, dates, traveller information and travel preferences.</li><li>Booking and payment information where required to arrange a travel product.</li><li>Website and device information, such as pages viewed, approximate location, browser type and cookie preferences.</li></ul>
    <h2>2. How we use information</h2>
    <p>We use information to respond to enquiries, prepare itineraries, process or support bookings, communicate service updates, improve our website and meet legal or supplier requirements. We only use marketing communications where permitted and provide a way to opt out.</p>
    <h2>3. Sharing information</h2>
    <p>We may share only the information needed with travel suppliers and service providers that help deliver your requested travel services. We may also disclose information where required by law, to protect rights or safety, or as part of a business transaction permitted by law.</p>
    <h2>4. Cookies and Google services</h2>
    <p>Our website may use cookies or similar technologies to operate securely, remember preferences and understand site performance. If Google services such as Analytics, Maps or advertising tools are used, Google may process data under its own policies. Where required, we will request consent and provide controls for non-essential cookies.</p>
    <h2>5. Advertising choices and third-party links</h2>
    <p>Advertising or measurement technologies, where enabled, may use cookies or device identifiers as described in the relevant consent notice. You can manage browser cookies through your browser settings and use available opt-out or consent controls. Links to supplier, airline, hotel, insurer or other third-party websites are governed by those parties&apos; own privacy policies.</p>
    <h2>6. Retention, security and your choices</h2>
    <p>We keep information only for as long as needed for the purposes described above, including legal, accounting and booking obligations. We use reasonable safeguards, but no online service can guarantee absolute security. You may request access, correction, deletion or marketing opt-out, subject to applicable law.</p>
    <h2>7. Policy updates and contact</h2>
    <p>To make a privacy request or ask a question, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default PrivacyPage;
