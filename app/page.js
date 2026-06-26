import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HeroBanner from "@/components/home/HeroBanner";
import HowItWorks from "@/components/home/HowItWorks";
import RecommendedCountries from "@/components/home/RecommendedCountries";
import TourCategories from "@/components/home/TourCategories";
import TourFinder from "@/components/home/TourFinder";
import TravelerFavorites from "@/components/home/TravelerFavorites";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Travel Made Simple",
  description:
    "Compare flights, hotels, cruises and travel packages with Sea Sky Solutions LLC. Start planning your next trip today.",
  keywords: ["vacation planning", "holiday deals", "book travel online"],
});

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <TourFinder />
      <TourCategories />
      <RecommendedCountries />
      <TravelerFavorites />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default HomePage;
