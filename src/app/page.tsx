"use client";
import { useEffect, useState, useRef, Suspense } from 'react';
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dynamic from 'next/dynamic';

// Import essential components normally
// Lazy load other components with preload option
const WhatIDo = dynamic(() => import('./components/WhatIDo'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const InvestmentSection = dynamic(() => import('./components/investice'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const ServicesGrid = dynamic(() => import('./components/ServiceGrid'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const WhyTrustMe = dynamic(() => import('./components/WhyTrustMe'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const ProjectsSection = dynamic(() => import('./components/Project'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const SkillsSection = dynamic(() => import('./components/SkillSection'), { 
  ssr: true,
  loading: () => <Skeleton height={400} />
});
const Footer = dynamic(() => import('./components/Footer'), { 
  ssr: true,
  loading: () => <Skeleton height={200} />
});

// Skeleton component pro lepší vizuální zážitek během načítání
const Skeleton = ({ height = 400 }: { height?: number }) => (
  <div 
    className="animate-pulse bg-gradient-to-b from-slate-900/40 to-slate-800/40 rounded-md"
    style={{ height: `${height}px` }}
  >
    <div className="h-full flex items-center justify-center">
      <div className="w-12 h-12 border-t-2 border-b-2 border-orange-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Define interface for the LazyComponent props
interface LazyComponentProps {
  children: React.ReactNode;
  height?: number;
  priority?: boolean;
}

// Component for intersection observer with fixed types and improved preloading
const LazyComponent = ({ children, height = 400, priority = false }: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Předem načteme komponenty s vysokou prioritou
    if (priority) {
      setIsVisible(true);
      return;
    }

    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Přidáme malé zpoždění, aby se obsah načetl plynuleji
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '400px', // Zvětšíme rootMargin pro dřívější načítání
        threshold: 0.1 
      }
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [priority]);

  // Použíjeme Suspense pro lepší UX
  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={<Skeleton height={height} />}>
          {children}
        </Suspense>
      ) : (
        <Skeleton height={height} />
      )}
    </div>
  );
};

// Přidáme preloading hook pro nejdůležitější komponenty
function usePreloadComponents() {
  useEffect(() => {
    // Předem načteme komponenty po načtení stránky
    const timer = setTimeout(() => {
      // Toto spustí předběžné načtení komponent v pozadí
      import('./components/WhatIDo');
      import('./components/investice');
      import('./components/ServiceGrid');
    }, 1000); // Počkat 1 vteřinu po načtení stránky
    
    return () => clearTimeout(timer);
  }, []);
}

export default function Home() {
  // Použijeme preloading hook
  usePreloadComponents();
  
  // Přidáme smooth scroll
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
      
      {/* První komponenty mají priority true pro okamžité načtení */}
      <LazyComponent priority height={500}>
        <WhatIDo />
      </LazyComponent>
      
      <LazyComponent priority height={400}>
        <InvestmentSection/>
      </LazyComponent>
      
      <LazyComponent height={500}>
        <ServicesGrid />
      </LazyComponent>
      
      <LazyComponent height={400}>
        <WhyTrustMe />
      </LazyComponent>
      
      <LazyComponent height={500}>
        <ProjectsSection />
      </LazyComponent>
      
      <LazyComponent height={400}>
        <SkillsSection />
      </LazyComponent>
      
      <LazyComponent height={200}>
        <Footer />
      </LazyComponent>
    </>
  );
}