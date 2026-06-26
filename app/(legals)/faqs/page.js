import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { siteContact } from "@/config/siteContact";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Travel FAQs",
  description:
    "Find answers to common questions about planning, booking, changes and cancellations with Sea Sky Solutions LLC.",
  path: "/faqs",
  keywords: ["travel booking FAQs", "travel questions"],
});

const faqs = [
  ["How do I start planning a trip?", "Share your preferred destination, travel dates, number of travellers and budget. Sea Sky Solutions LLC can help narrow down options that suit your plans."],
  ["When is my booking confirmed?", "A booking is confirmed only after availability is verified, payment requirements are met and you receive written confirmation with your itinerary or reference number."],
  ["Can I change my travel dates?", "Changes depend on supplier availability and fare or booking rules. Contact us as soon as possible so we can review your options and any applicable charges."],
  ["What happens if I need to cancel?", "Cancellation and refund eligibility depends on the confirmed product and supplier rules. Please see our Refund Policy and contact us with your booking reference."],
  ["Are advertised prices guaranteed?", "No. Advertised prices, offers and availability can change until a booking is confirmed. Before payment, review the final itinerary, inclusions, exclusions, applicable taxes and supplier terms."],
  ["How can I contact Sea Sky Solutions LLC about a booking?", `Email ${siteContact.email.address} with your booking reference, traveller name and a concise description of your request. We will review the available options and respond with the next steps.`],
  ["Do I need travel insurance?", "Travel insurance is optional unless a supplier or destination requires it, but it may help protect eligible trip costs and emergencies. Review the policy details before buying."],
];

const FaqPage = () => (
  <LegalPageLayout title="Frequently Asked Questions" eyebrow="Helpful answers">
    <p>Find quick answers to common questions about planning, booking and managing travel with Sea Sky Solutions LLC.</p>
    <div className="mt-6 space-y-3">
      {faqs.map(([question, answer]) => (
        <details key={question} className="group rounded-[16px] border border-[var(--brand-blue)]/15 bg-[#eef4f6] px-5 py-1 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[17px] font-[500] text-[var(--brand-blue)] marker:content-none">
            {question}
            <span className="text-[24px] font-[400] text-[var(--brand-green)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="!mt-0 border-t border-[var(--brand-blue)]/10 py-4">{answer}</p>
        </details>
      ))}
    </div>
  </LegalPageLayout>
);

export default FaqPage;
