"use client";

import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import WhatIDo from './components/WhatIDo';
import ServicesGrid from './components/ServiceGrid';
import ComparisonSection from './components/Comparison';
import ProjectsSection from './components/Project';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  // Smooth-scroll styling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <SpeedInsights />
      <Navbar />
      <HeroSection />
      <WhatIDo />
      <ServicesGrid />
      <ComparisonSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}