import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import TransformationSection from "@/components/TransformationSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import StickyFormMobile from "@/components/StickyFormMobile";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <InstructorSection />
      <TransformationSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <StickyFormMobile />
    </div>
  );
};

export default Index;