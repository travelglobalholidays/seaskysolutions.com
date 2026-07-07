import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "Learn how Sea Sky Solutions LLC may use cookies, analytics and advertising technologies on its travel support website.",
  path: "/cookie-policy",
  keywords: ["cookie policy", "travel website cookies", "advertising cookies"],
});

const CookiePolicyPage = () => (
  <LegalPageLayout
    title="Cookie Policy"
    eyebrow="Transparent website data"
    description="This Cookie Policy explains how cookies and similar technologies may be used to operate, improve, secure and measure the Sea Sky Solutions LLC website."
    lastUpdated="June 20, 2026"
    summary={[
      {
        title: "Essential cookies",
        text: "Some cookies support site security, page loading, forms, preferences and basic website operation.",
      },
      {
        title: "Analytics cookies",
        text: "Measurement tools may help us understand visits, page performance and how users find our travel support pages.",
      },
      {
        title: "Advertising tools",
        text: "Where enabled, ad technologies may help measure campaigns and show more relevant travel support information.",
      },
      {
        title: "User controls",
        text: "You can manage cookies through browser settings and any available consent controls on the website.",
      },
    ]}
    quickLinks={[
      { href: "#what-cookies-are", label: "What cookies are" },
      { href: "#how-we-use-cookies", label: "How we use cookies" },
      { href: "#third-party-cookies", label: "Third-party tools" },
      { href: "#cookie-controls", label: "Your controls" },
      { href: "#cookie-contact", label: "Contact" },
    ]}
    notice={{
      title: "Cookie settings may affect site features",
      text: "Blocking certain cookies may affect forms, preferences, analytics, security features, or the way travel support pages load and perform.",
    }}
    faqs={[
      {
        question: "Do cookies confirm a booking?",
        answer:
          "No. Cookies support website functions and measurement. A booking is confirmed only through written booking confirmation or provider-issued reference details.",
      },
      {
        question: "Can I block cookies?",
        answer:
          "Yes. Most browsers allow you to block, delete, or limit cookies. Some website features may not work as expected if cookies are disabled.",
      },
      {
        question: "Do third-party platforms have their own policies?",
        answer:
          "Yes. Google, advertising platforms, analytics tools, payment processors, maps, and embedded services may process data under their own policies.",
      },
    ]}
  >
    <h2 id="what-cookies-are">1. What cookies and similar technologies are</h2>
    <p>Cookies are small files that websites place on a browser or device. Similar technologies may include pixels, tags, local storage, session storage, software development kits, and device identifiers. These tools help websites function, remember preferences, measure activity, improve security, and understand performance.</p>

    <h2 id="how-we-use-cookies">2. How we may use cookies</h2>
    <p>Sea Sky Solutions LLC may use cookies and similar technologies for the following purposes:</p>
    <ul>
      <li>Operate website pages, forms, navigation, consent choices, and security features.</li>
      <li>Remember basic preferences and reduce repeated entry where appropriate.</li>
      <li>Measure website traffic, page performance, referral sources, and user interactions.</li>
      <li>Understand which travel support pages, airline support topics, or service pages are useful to visitors.</li>
      <li>Evaluate advertising campaign performance and prevent repeated or irrelevant ad experiences where tools permit.</li>
      <li>Detect misuse, spam, fraud attempts, or abnormal website activity.</li>
    </ul>

    <h2>3. Types of cookies</h2>
    <p><strong>Essential cookies</strong> support basic site operation and security. <strong>Preference cookies</strong> may remember choices such as consent settings. <strong>Analytics cookies</strong> help us understand site usage and improve content. <strong>Advertising cookies</strong>, where enabled, may help measure or personalize ads on third-party platforms.</p>

    <h2 id="third-party-cookies">4. Third-party cookies and services</h2>
    <p>We may use or link to services from third-party providers such as analytics platforms, advertising networks, maps, payment processors, email tools, fraud-prevention tools, booking providers, airlines, hotels, or other travel service providers. These third parties may set or read cookies under their own policies.</p>
    <p>If Google services or advertising tools are used, Google may collect or process information according to its own privacy and advertising policies. Third-party provider websites are not controlled by this Cookie Policy.</p>

    <h2 id="cookie-controls">5. How to manage cookies</h2>
    <p>You can manage cookies through your browser settings, including deleting existing cookies, blocking future cookies, or receiving alerts when cookies are used. Some browsers also provide privacy controls for tracking technologies. If a cookie consent tool is available on our website, you may use it to manage non-essential cookie choices where required.</p>
    <p>Blocking cookies may affect forms, page behavior, security checks, saved preferences, analytics accuracy, or other website functions.</p>

    <h2>6. Relationship to our Privacy Policy</h2>
    <p>This Cookie Policy should be read with our <Link href="/privacy-policy">Privacy Policy</Link>, which explains how we collect, use, share, retain, and protect personal information related to website use and travel support requests.</p>

    <h2 id="cookie-contact">7. Contact</h2>
    <p>For cookie or privacy questions, email <a href={siteContact.email.href}>{siteContact.email.address}</a> or call <a href={siteContact.phone.href}>{siteContact.phone.display}</a>.</p>
  </LegalPageLayout>
);

export default CookiePolicyPage;
