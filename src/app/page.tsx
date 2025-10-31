import HeroSection from "../components/HeroSection";
import FeaturedTourCategories from "../components/FeaturedTourCategories";
import FeaturedTourPackages from "../components/FeaturedTourPackages";
import PhotoAlbum from "../components/PhotoAlbum";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedTourCategories />
      <FeaturedTourPackages />
      <PhotoAlbum />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
