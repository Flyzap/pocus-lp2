import Navbar from "@/components/Navbar";
import SalesHeroSection from "@/components/sales/SalesHeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import SalesBenefitsSection from "@/components/sales/SalesBenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import SalesObjectionsSection from "@/components/sales/SalesObjectionsSection";
import SalesTransformationSection from "@/components/sales/SalesTransformationSection";
import SalesFAQSection from "@/components/sales/SalesFAQSection";
import Footer from "@/components/Footer";
import SalesStickyForm from "@/components/sales/SalesStickyForm";

const Sales = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SalesHeroSection />
      <SocialProofSection />
      <SalesBenefitsSection />
      <InstructorSection />
      <SalesObjectionsSection />
      <SalesTransformationSection />
      <SalesFAQSection />
      <Footer />
      <SalesStickyForm />
    </div>
  );
};

export default Sales;