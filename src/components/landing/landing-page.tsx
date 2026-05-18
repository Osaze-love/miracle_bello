"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { SiteNav } from "./site-nav";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { ServicesSection } from "./services-section";
import { WorkSection } from "./work-section";
import { ProcessSection } from "./process-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";

export function LandingPage() {
  return (
    <ParallaxProvider>
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </ParallaxProvider>
  );
}
