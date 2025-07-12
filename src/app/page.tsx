"use client";

import { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Vylepšený skeleton loader s flexibilní výškou
const Skeleton = ({ 
  height = 'auto', 
  minHeight = 400,
  className = ''
}: { 
  height?: string | number; 
  minHeight?: number;
  className?: string;
}) => (
  <div
    className={`animate-pulse bg-gradient-to-b from-slate-900/40 to-slate-800/40 rounded-md ${className}`}
    style={{ 
      height: typeof height === 'number' ? `${height}px` : height,
      minHeight: `${minHeight}px`,
      contain: 'layout style' // Zabráníme layout shiftu
    }}
  >
    <div className="h-full flex items-center justify-center">
      <div className="w-12 h-12 border-t-2 border-b-2 border-orange-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Optimalizovaný lazy loading wrapper
interface LazyComponentProps {
  children: React.ReactNode;
  height?: string | number;
  minHeight?: number;
  priority?: boolean;
  preloadMargin?: string;
  className?: string;
}

const LazyComponent = ({ 
  children, 
  height = 'auto',
  minHeight = 400,
  priority = false,
  preloadMargin = '300px',
  className = ''
}: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(priority);
  const [hasStartedLoading, setHasStartedLoading] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsVisible(true);
      setHasStartedLoading(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedLoading) {
          setHasStartedLoading(true);
          // Rychlejší načtení bez rAF
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: preloadMargin,
        threshold: 0.01
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [priority, hasStartedLoading, preloadMargin]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ 
        contain: 'layout',
        minHeight: typeof minHeight === 'number' ? `${minHeight}px` : minHeight
      }}
    >
      {isVisible ? (
        <Suspense 
          fallback={
            <Skeleton 
              height={height} 
              minHeight={typeof minHeight === 'number' ? minHeight : 400}
            />
          }
        >
          {children}
        </Suspense>
      ) : (
        <Skeleton 
          height={height} 
          minHeight={typeof minHeight === 'number' ? minHeight : 400}
        />
      )}
    </div>
  );
};

// Vylepšená preload strategie
function usePreloadComponents() {
  useEffect(() => {
    // Preload po dokončení první fáze renderingu
    const timer = setTimeout(() => {
      // Preload v pořadí podle priority
      const preloadPromises = [
        import('./components/ServiceGrid'),
        import('./components/Project'),
        import('./components/Footer'),
      ];
      
      Promise.allSettled(preloadPromises).catch(() => {
        // Tichý fallback
      });
    }, 500); // Kratší delay

    return () => clearTimeout(timer);
  }, []);
}

// Dynamic imports s optimalizací
// WhatIDo necháme se SSR pro lepší above-the-fold loading
const WhatIDo = dynamic(() => import('./components/WhatIDo'), {
  ssr: true, // Změněno na true pro above-the-fold obsah
  loading: () => <Skeleton height="auto" minHeight={500} />,
});

const ServicesGrid = dynamic(() => import('./components/ServiceGrid'), {
  ssr: false,
  loading: () => <Skeleton height="auto" minHeight={600} />,
});

const ProjectsSection = dynamic(() => import('./components/Project'), {
  ssr: false,
  loading: () => <Skeleton height="auto" minHeight={800} />,
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => <Skeleton height="auto" minHeight={300} />,
});

export default function Home() {
  usePreloadComponents();

  // CSS optimalizace pro plynulé scrollování
  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = 'smooth';
    
    // Optimalizace pro webkit rendering
    document.body.style.transform = 'translateZ(0)';
    document.body.style.backfaceVisibility = 'hidden';
    
    return () => {
      root.style.scrollBehavior = 'auto';
      document.body.style.transform = '';
      document.body.style.backfaceVisibility = '';
    };
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'development' && <SpeedInsights />}
      
      {/* Above-the-fold obsah - vždy eagerly loaded */}
      <Navbar />
      <HeroSection />

      {/* První sekce - vysoká priorita, kratší preload margin */}
      <LazyComponent 
        priority 
        height="auto" 
        minHeight={500}
        className="will-change-transform"
      >
        <WhatIDo />
      </LazyComponent>

      {/* Zbývající sekce s optimalizovaným lazy loadingem */}
      <LazyComponent 
        height="auto" 
        minHeight={600}
        preloadMargin="200px"
        className="will-change-transform"
      >
        <ServicesGrid />
      </LazyComponent>

      <LazyComponent 
        height="auto" 
        minHeight={800}
        preloadMargin="150px"
        className="will-change-transform"
      >
        <ProjectsSection />
      </LazyComponent>

      <LazyComponent 
        height="auto" 
        minHeight={300}
        preloadMargin="100px"
      >
        <Footer />
      </LazyComponent>
    </>
  );
}