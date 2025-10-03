import HeroSection from "../components/HeroSection";
import FeaturedTourCategories from "../components/FeaturedTourCategories";
import FeaturedTourPackages from "../components/FeaturedTourPackages";
import PhotoAlbum from "../components/PhotoAlbum";
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
      <PhotoAlbum />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
