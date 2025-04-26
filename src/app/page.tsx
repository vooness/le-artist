"use client";
import { useEffect, useState, useRef } from 'react';
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from 'next/dynamic';

// Import essential components normally
// Lazy load other components
const WhatIDo = dynamic(() => import('./components/WhatIDo'));
const InvestmentSection = dynamic(() => import('./components/investice'));
const ServicesGrid = dynamic(() => import('./components/ServiceGrid'));
const WhyTrustMe = dynamic(() => import('./components/WhyTrustMe'));
const ProjectsSection = dynamic(() => import('./components/Project'));
const SkillsSection = dynamic(() => import('./components/SkillSection'));
const Footer = dynamic(() => import('./components/Footer'));

// Define interface for the LazyComponent props
interface LazyComponentProps {
  children: React.ReactNode;
  placeholder?: string | React.ReactNode;
}

// Component for intersection observer with fixed types
const LazyComponent = ({ children, placeholder = "Loading..." }: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <div className="min-h-[400px] bg-slate-100/5">{placeholder}</div>}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <SpeedInsights />
      <Navbar />
      <HeroSection />
      
      <LazyComponent>
        <WhatIDo />
      </LazyComponent>
      
      <LazyComponent>
        <InvestmentSection/>
      </LazyComponent>
      
      <LazyComponent>
        <ServicesGrid />
      </LazyComponent>
      
      <LazyComponent>
        <WhyTrustMe />
      </LazyComponent>
      
      <LazyComponent>
        <ProjectsSection />
      </LazyComponent>
      
      <LazyComponent>
        <SkillsSection />
      </LazyComponent>
      
      <LazyComponent placeholder="Loading footer...">
        <Footer />
      </LazyComponent>
    </>
  );
}