import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProcessOverview } from "./ProcessOverview";
import { ServiceGrid } from "./ServiceGrid";
import { PlatformFeatures } from "./PlatformFeatures";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { ComparisonSection } from "./ComparisonSection";
import { FinalCTA } from "./FinalCTA";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

const Divider: React.FC = () => (
  <div className="max-w-full border border-solid bg-stone-900 border-stone-900 min-h-px w-[1200px]" />
);

export const LandingPage: React.FC = () => {
  return (
    <div className="px-16 max-md:pl-5">
      <div className="flex overflow-hidden flex-col items-center bg-neutral-900 w-[1440px] max-md:max-w-full">
        <Header />
        <Divider />
        <Hero />
        <Divider />
        <ProcessOverview />
        <Divider />
        <ServiceGrid />
        <Divider />
        <PlatformFeatures />
        <Divider />
        <TestimonialsCarousel />
        <Divider />
        <ComparisonSection />
        <Divider />
        <FinalCTA />
        <Divider />
        <FAQSection />
        <Divider />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
