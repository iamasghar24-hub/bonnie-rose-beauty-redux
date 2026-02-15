import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProof from "@/components/home/SocialProof";
import SignatureServices from "@/components/home/SignatureServices";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import HowItWorks from "@/components/home/HowItWorks";
import PackagesTeaser from "@/components/home/PackagesTeaser";
import AboutTeaser from "@/components/home/AboutTeaser";
import HomeFAQ from "@/components/home/HomeFAQ";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  useEffect(() => {
    document.title =
      "Bonnie Rose Beauty | Bridal & Event Makeup Artist Hobart, Tasmania";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <SignatureServices />
        <PortfolioPreview />
        <HowItWorks />
        <PackagesTeaser />
        <AboutTeaser />
        <HomeFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
