"use client";

import { useEffect, useState, useRef, Suspense, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar";
import  HeroSection  from "./components/HeroSection";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Skeleton loader for lazy components
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

// Lazy-loading wrapper with optimized IntersectionObserver
interface LazyComponentProps {
  children: React.ReactNode;
  height?: number;
  priority?: boolean;
}

const LazyComponent = ({ children, height = 400, priority = false }: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsVisible(true);
      return;
    }
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use rAF for next-paint scheduling
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin: '600px', threshold: 0.01 }
    );

    observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [priority]);

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

// Preload lowest-priority components after mount
function usePreloadComponents() {
  useEffect(() => {
    const timer = setTimeout(() => {
      import('./components/WhatIDo');
      import('./components/ModernBenefitsSection');
      import('./components/WordPressVsCustomSection');
      import('./components/ServiceGrid');
      import('./components/Comparison'); // Preload nové komponenty
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
}

// Dynamic imports with ssr:false to shrink SSR payload, plus skeleton fallback
const WhatIDo = dynamic(() => import('./components/WhatIDo'), {
  ssr: false,
  loading: () => <Skeleton height={400} />,
});

const ModernBenefitsSection = dynamic(() => import('./components/ModernBenefitsSection'), {
  ssr: false,
  loading: () => <Skeleton height={600} />,
});

const WordPressVsCustomSection = dynamic(() => import('./components/WordPressVsCustomSection'), {
  ssr: false,
  loading: () => <Skeleton height={500} />,
});

const ServicesGrid = dynamic(() => import('./components/ServiceGrid'), {
  ssr: false,
  loading: () => <Skeleton height={400} />,
});

const ProjectsSection = dynamic(() => import('./components/Project'), {
  ssr: false,
  loading: () => <Skeleton height={400} />,
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => <Skeleton height={200} />,
});

export default function Home() {
  usePreloadComponents();

  // Smooth-scroll styling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Only run SpeedInsights in dev for profiling */}
      {process.env.NODE_ENV !== 'production' && <SpeedInsights />}
      <Navbar />
      <HeroSection />

      {/* Eagerly load first two sections */}
      <LazyComponent priority height={500}>
        <WhatIDo />
      </LazyComponent>

      {/* Nová Benefits sekce hned pod WhatIDo */}
      <LazyComponent height={600}>
        <ModernBenefitsSection />
      </LazyComponent>

      {/* WordPress vs Custom React/Next.js comparison */}
      <LazyComponent height={500}>
        <WordPressVsCustomSection />
      </LazyComponent>

      {/* Remaining sections lazy-load on scroll */}
      <LazyComponent height={500}>
        <ServicesGrid />
      </LazyComponent>

      {/* Přidání nové komponenty Comparison hned po WhyTrustMe */}
      
      <LazyComponent height={500}>
        <ProjectsSection />
      </LazyComponent>

      <LazyComponent height={200}>
        <Footer />
      </LazyComponent>
    </>
  );
}