import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TrainBanner from "@/components/Train/TrainBanner";
import TrainBookingFeatures from "@/components/Train/TrainBookingFeatures";
import TrainBookingWhyUs from "@/components/Train/TrainBookingWhyUs";
import TrainCallExperts from "@/components/Train/TrainCallExperts";
import TrainHowItWorks from "@/components/Train/TrainHowItWorks";
import TrainPopularRoutes from "@/components/Train/TrainPopularRoutes";
import TrainTestimonials from "@/components/Train/TrainTestimonials";
import TrainTicketOptions from "@/components/Train/TrainTicketOptions";
import { createPageMetadata } from "@/config/siteMetadata";

export const metadata = createPageMetadata({
  title: "Train Booking Assistance | Rail Tickets, Passes & Routes",
  description:
    "Get train booking assistance from Sea Sky Solutions LLC for regional trains, express trains, business class, student and senior discounts, rail passes and multi-city routes.",
  path: "/train-booking",
  keywords: [
    "train booking assistance",
    "rail ticket booking",
    "regional trains",
    "express trains",
    "business class train",
    "student train discount",
    "senior train discount",
    "round trip train tickets",
    "rail passes",
    "multi city train travel",
  ],
});

const TrainPage = () => {
  return (
    <div className="">
      <Header />
      <TrainBanner />
      <TrainTicketOptions />
      <TrainBookingFeatures />
      <TrainBookingWhyUs />
      <TrainPopularRoutes />
      <TrainHowItWorks />
      <TrainCallExperts />
      <TrainTestimonials />
      <Footer />
    </div>
  );
};

export default TrainPage;
