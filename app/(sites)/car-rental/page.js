import CarBanner from "@/components/CarRental/CarBanner";
import CarRentalCallExperts from "@/components/CarRental/CarRentalCallExperts";
import CarRentalFeatures from "@/components/CarRental/CarRentalFeatures";
import CarRentalHowItWorks from "@/components/CarRental/CarRentalHowItWorks";
import CarRentalLocations from "@/components/CarRental/CarRentalLocations";
import CarRentalTestimonials from "@/components/CarRental/CarRentalTestimonials";
import CarRentalWhyUs from "@/components/CarRental/CarRentalWhyUs";
import CarRideOptions from "@/components/CarRental/CarRideOptions";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Car Rental Assistance | Airport, City & Road Trip Rentals",
  description:
    "Compare car rental options with Sea Sky Solutions LLC for airport pickups, city rides, SUVs, vans, luxury cars, business travel and family road trips.",
  path: "/car-rental",
  keywords: [
    "car rental assistance",
    "airport car rental",
    "city car rental",
    "SUV rental",
    "van rental",
    "luxury car rental",
    "business car rental",
    "family car rental",
    "rental car support",
  ],
});

const CarRentalPage = () => {
  return (
    <div className="">
      <Header />
      <CarBanner />
      <CarRideOptions />
      <CarRentalFeatures />
      <CarRentalWhyUs />
      <CarRentalLocations />
      <CarRentalHowItWorks />
      <CarRentalCallExperts />
      <CarRentalTestimonials />
      <Footer />
    </div>
  );
};

export default CarRentalPage;
