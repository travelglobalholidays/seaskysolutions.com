import FlightBanner from "@/components/Flights/FlightBanner";
import FlightBookingFeatures from "@/components/Flights/FlightBookingFeatures";
import FlightBookingWhyUs from "@/components/Flights/FlightBookingWhyUs";
import FlightCallExperts from "@/components/Flights/FlightCallExperts";
import FlightHowItWorks from "@/components/Flights/FlightHowItWorks";
import FlightOptions from "@/components/Flights/FlightOptions";
import FlightPopularDestinations from "@/components/Flights/FlightPopularDestinations";
import FlightTestimonials from "@/components/Flights/FlightTestimonials";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Flight Booking Assistance | One Way, Round Trip & Multi City",
  description:
    "Get flight booking assistance from Sea Sky Solutions LLC for one way flights, round trips, multi city routes, domestic and international flights, business class and last-minute fares.",
  path: "/flights",
  keywords: [
    "flight booking assistance",
    "one way flights",
    "round trip flights",
    "multi city flights",
    "domestic flights",
    "international flights",
    "business class flights",
    "last minute flights",
    "student flights",
    "airfare support",
  ],
});

const FlightsPage = () => {
  return (
    <div className="">
      <Header />
      <FlightBanner />
      <FlightOptions />
      <FlightBookingFeatures />
      <FlightBookingWhyUs />
      <FlightPopularDestinations />
      <FlightHowItWorks />
      <FlightCallExperts />
      <FlightTestimonials />
      <Footer />
    </div>
  );
};

export default FlightsPage;
