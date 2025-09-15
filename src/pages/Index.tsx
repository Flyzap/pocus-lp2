import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import TransformationSection from "@/components/TransformationSection";
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
      <Footer />
      <StickyFormMobile />
    </div>
  );
};

export default Index;
