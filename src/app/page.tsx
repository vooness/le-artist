"use client";

import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import WhatIDo from "./components/WhatIDo";
import ProjectsSection from "./components/Project";
import WhyTrustMe from "./components/WhyTrustMe";
import SkillsSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ServicesGrid from "./components/ServiceGrid";
import { SpeedInsights } from "@vercel/speed-insights/next"


import InvestmentSection from "./components/investice"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <SpeedInsights />
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      

      {/* What I Do */}
      <WhatIDo />

      <InvestmentSection/>

      {/* What I Do */}
      <ServicesGrid />

      {/* Why Trust Me */}
      <WhyTrustMe />

      {/* Why Trust Me */}
      <ProjectsSection />

      {/* Skills */}
      <SkillsSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
