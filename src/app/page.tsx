import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ProblemGrid } from "@/components/ProblemGrid";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { BrandGrid } from "@/components/BrandGrid";
import { TechnicalRepairGrid } from "@/components/TechnicalRepairGrid";
import { GallerySection } from "@/components/GallerySection";
import { DoorstepSection } from "@/components/DoorstepSection";
import { AreasSection } from "@/components/AreasSection";
import { QuoteCTA } from "@/components/QuoteCTA";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";

const Index = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemGrid />
      <ServiceGrid />
      <ProcessSection />
      <WhyChooseSection />
      <BrandGrid />
      <TechnicalRepairGrid />
      <GallerySection />
      <DoorstepSection />
      <AreasSection />
      <QuoteCTA />
      <FAQAccordion />
      <FinalCTA />
      <SiteFooter />
      <MobileActionBar />
    </>
  );
};

export default Index;