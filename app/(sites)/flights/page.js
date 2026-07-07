import AirlineLinksDirectory from "@/components/AirlineSeo/AirlineLinksDirectory";
import FareOffersGrid from "@/components/Flights/FareOffersGrid";
import FlightBanner from "@/components/Flights/FlightBanner";
import FlightBookingContent from "@/components/Flights/FlightBookingContent";
import FlightBookingFeatures from "@/components/Flights/FlightBookingFeatures";
import FlightBookingWhyUs from "@/components/Flights/FlightBookingWhyUs";
import FlightCallExperts from "@/components/Flights/FlightCallExperts";
import FlightHowItWorks from "@/components/Flights/FlightHowItWorks";
import FlightPopularDestinations from "@/components/Flights/FlightPopularDestinations";
import FlightTestimonials from "@/components/Flights/FlightTestimonials";
import RecommendedTripsCarousel from "@/components/Flights/RecommendedTripsCarousel";
import SearchForm from "@/components/Flights/SearchForm";
import TopDestinationsCarousel from "@/components/Flights/TopDestinationsCarousel";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { createPageMetadata } from "@/config/siteMetadata";
import { airlineSeoPages } from "@/lib/airlineSeoPages";

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
      <section className="relative z-20 -mt-16 px-4 pb-10 sm:px-6 lg:px-8">
        <SearchForm />
      </section>
      <FlightHowItWorks />
      <RecommendedTripsCarousel />
      <TopDestinationsCarousel />
      <FareOffersGrid />
      <FlightBookingFeatures />
      <FlightBookingWhyUs />
      <FlightPopularDestinations />
      <FlightBookingContent />
      <AirlineLinksDirectory pages={airlineSeoPages} />
      <FlightCallExperts />
      <FlightTestimonials />
      <Footer />
    </div>
  );
};

export default FlightsPage;
