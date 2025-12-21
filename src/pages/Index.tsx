import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import CalculatorSection from "@/components/CalculatorSection";
import PreflightSection from "@/components/PreflightSection";
import LevelsSection from "@/components/LevelsSection";
import TechSection from "@/components/TechSection";
import AppShowcase from "@/components/AppShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <CalculatorSection />
      <PreflightSection />
      <LevelsSection />
      <TechSection />
      <AppShowcase />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
