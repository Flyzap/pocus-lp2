import HeroSection from "@/components/HeroSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import InstructorSection from "@/components/InstructorSection";
import SocialProofSection from "@/components/SocialProofSection";
import BenefitsSection from "@/components/BenefitsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import TransformationSection from "@/components/TransformationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LeadMagnetSection />
      <InstructorSection />
      <SocialProofSection />
      <BenefitsSection />
      <ObjectionsSection />
      <TransformationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
