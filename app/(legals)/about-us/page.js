import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import InnerPageHero from "@/components/common/InnerPageHero";
import AboutUs from "@/components/Legals/AboutUs";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about Sea Sky Solutions LLC and our personal approach to planning memorable travel experiences.",
  path: "/about-us",
  keywords: ["about Sea Sky Solutions LLC", "travel planning experts"],
});

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main>
        <InnerPageHero title="About Sea Sky Solutions LLC" eyebrow="Travel made personal" description="Helpful travel planning for the trips you have been dreaming about." />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
