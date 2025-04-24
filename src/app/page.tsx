"use client";

import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import WhatIDo from "./components/WhatIDo";
import ProjectsSection from "./components/Project";
import WhyTrustMe from "./components/WhyTrustMe";
import SkillsSection from "./components/SkillSection";
import Footer from "./components/Footer";
import ServicesGrid from "./components/ServiceGrid";
import { ThreeDMarqueeDemo } from "./components/3d"
import InvestmentSection from "./components/investice"

export default function Home() {
  return (
    <>
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
