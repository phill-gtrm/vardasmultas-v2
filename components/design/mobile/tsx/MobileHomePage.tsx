import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProcessOverview } from "./ProcessOverview";
import { ServiceCards } from "./ServiceCards";
import { PlatformFeatures } from "./PlatformFeatures";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { ComparisonSection } from "./ComparisonSection";
import { FinalCTA } from "./FinalCTA";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

function Divider() {
  return (
    <div className="w-full border border-solid bg-stone-900 border-stone-900 min-h-px" />
  );
}

export default function MobileHomePage() {
  return (
    <div className="flex flex-col items-end px-20 max-w-[780px] max-md:pl-5">
      <main className="flex overflow-hidden flex-col max-w-full bg-neutral-900 w-[393px]">
        <Header />
        <HeroSection />
        <Divider />
        <ProcessOverview />
        <Divider />
        <ServiceCards />
        <Divider />
        <PlatformFeatures />
        <Divider />
        <Divider />
        <TestimonialsCarousel />
        <Divider />
        <ComparisonSection />
        <Divider />
        <FinalCTA />
        <Divider />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}
