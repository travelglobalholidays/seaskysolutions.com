import LegalPageLayout from "@/components/Legals/LegalPageLayout";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description: "Read the Sea Sky Solutions website and travel information disclaimer.",
  path: "/disclaimer",
  keywords: ["travel disclaimer"],
});

const DisclaimerPage = () => (
  <LegalPageLayout title="Disclaimer" eyebrow="Important travel information">
    <p><strong>Last updated:</strong> June 20, 2026</p>
    <p>The information on this website is provided for general travel-planning purposes. While Sea Sky Solutions aims to keep content helpful and current, travel information can change quickly and may not be complete for every traveller or destination.</p>
    <h2>1. Verify travel requirements</h2>
    <p>You are responsible for verifying passport validity, visas, entry rules, transit requirements, health guidance, local laws, safety notices and carrier conditions before travelling. Check official government, embassy, airline and destination sources for the most current information.</p>
    <h2>2. Third-party services</h2>
    <p>Travel products and links may be provided by independent suppliers. Sea Sky Solutions does not control their operations, content, availability or policies. Supplier descriptions, images, ratings and prices may change without notice.</p>
    <h2>3. No professional advice</h2>
    <p>Website content is not legal, medical, immigration, tax, financial or insurance advice. Seek qualified advice for decisions that require it.</p>
    <h2>4. Advertising and promotional content</h2>
    <p>Promotional content is intended to describe available travel opportunities and should be read together with the applicable offer terms. Images may be illustrative. Prices, inclusions, exclusions, dates, routes, room types and supplier availability can change. Do not rely on a promotional statement as a guarantee of availability or a final booking price.</p>
    <h2>5. Limitation of responsibility</h2>
    <p>To the extent permitted by applicable law, Sea Sky Solutions is not responsible for losses caused by inaccurate third-party information, supplier actions, travel disruptions or circumstances outside our reasonable control.</p>
  </LegalPageLayout>
);

export default DisclaimerPage;
