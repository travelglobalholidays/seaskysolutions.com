import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import HotelBanner from "@/components/Hotels/HotelBanner";
import HotelBookingFeatures from "@/components/Hotels/HotelBookingFeatures";
import HotelBookingWhyUs from "@/components/Hotels/HotelBookingWhyUs";
import HotelCallExperts from "@/components/Hotels/HotelCallExperts";
import HotelHowItWorks from "@/components/Hotels/HotelHowItWorks";
import HotelPopularDestinations from "@/components/Hotels/HotelPopularDestinations";
import HotelRoomOptions from "@/components/Hotels/HotelRoomOptions";
import HotelTestimonials from "@/components/Hotels/HotelTestimonials";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Hotel Booking Assistance | Budget, Luxury & Family Hotels",
  description:
    "Find hotel booking assistance with Sea Sky Solutions LLC for budget hotels, luxury hotels, airport hotels, family hotels, business stays, beach resorts and last-minute deals.",
  path: "/hotels",
  keywords: [
    "hotel booking assistance",
    "budget hotels",
    "luxury hotels",
    "airport hotels",
    "family hotels",
    "business hotels",
    "beach resort hotels",
    "last minute hotel deals",
    "pet friendly hotels",
    "hotel reservation support",
  ],
});

const HotelsPage = () => {
  return (
    <div className="">
      <Header />
      <HotelBanner />
      <HotelRoomOptions />
      <HotelBookingFeatures />
      <HotelBookingWhyUs />
      <HotelPopularDestinations />
      <HotelHowItWorks />
      <HotelCallExperts />
      <HotelTestimonials />
      <Footer />
    </div>
  );
};

export default HotelsPage;
