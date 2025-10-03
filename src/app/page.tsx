import HeroSection from "../components/HeroSection";
import FeaturedTourCategories from "../components/FeaturedTourCategories";
import FeaturedTourPackages from "../components/FeaturedTourPackages";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import ClientLogos from "../components/ClientLogos";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <FeaturedTourCategories />
      <FeaturedTourPackages />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
