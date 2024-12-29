import React from "react";
import HeroSection from "./landing/HeroSection";
import BenefitsSection from "./landing/BenefitsSection";
import AuthoritySection from "./landing/AuthoritySection";
import TestimonialsSection from "./landing/TestimonialsSection";
import FAQSection from "./landing/FAQSection";
import CTASection from "./landing/CTASection";
import Footer from "./landing/Footer";

interface HomeProps {
  onTrainClick?: () => void;
  onBookClick?: () => void;
}

const Home = ({
  onTrainClick = () => console.log("Train clicked"),
  onBookClick = () => console.log("Book clicked"),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-[#0B0F16] text-white">
      <HeroSection onTrainClick={onTrainClick} onBookClick={onBookClick} />
      <BenefitsSection />
      <AuthoritySection />
      <TestimonialsSection />
      <CTASection onTrainClick={onTrainClick} onBookClick={onBookClick} />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
