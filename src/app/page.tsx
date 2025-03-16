import HeroSection from "@/components/home/hero-section";
import ExperienceSection from "@/components/home/experience-section";
import ProductsSection from "@/components/home/products-section";
import GroceryExperience from "../components/home/GroceryExperience";
import HeroBanner from "@/components/home/HeroBanner";
import ProductShowcase from "@/components/home/ProductShowcase";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <GroceryExperience />

      <ProductsSection />
      <HeroBanner />
      <ProductShowcase />
      <TestimonialSection />
    </>
  );
}
