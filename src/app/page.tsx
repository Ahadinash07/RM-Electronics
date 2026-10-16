import { SiteLayout } from "@/components/SiteLayout";
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

const Index = () => {
  return (
    <SiteLayout>
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
    </SiteLayout>
  );
};

export default Index;