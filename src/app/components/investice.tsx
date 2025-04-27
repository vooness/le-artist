"use client"

import React, { useState, useEffect, useRef } from "react";
import { 
  RiRocketLine, 
  RiSearchEyeLine, 
  RiShieldLine, 
  RiUserVoiceLine, 
  RiCustomerService2Line, 
  RiLineChartLine,
  RiArrowRightLine
} from "react-icons/ri";

const investmentPoints = [
  { 
    id: "growth",
    icon: <RiRocketLine className="text-2xl" />, 
    title: "Web jako motor růstu", 
    description: "Profesionální řešení s robustní architekturou přinese skutečný nárůst konverzí a tržeb.",
    percentage: 100,
    color: "#F97316" // orange-500
  },
  { 
    id: "seo",
    icon: <RiSearchEyeLine className="text-2xl" />, 
    title: "SEO & viditelnost", 
    description: "On-page i off-page SEO strategie zajistí, že váš web bude dlouhodobě na předních pozicích.",
    percentage: 100,
    color: "#3B82F6" // blue-500
  },
  { 
    id: "roi",
    icon: <RiLineChartLine className="text-2xl" />, 
    title: "Měřitelná návratnost", 
    description: "S pokročilou analytikou sledujeme chování uživatelů a optimalizujeme návratnost investice.",
    percentage: 100,
    color: "#FACC15" // yellow-500
  },
  { 
    id: "security",
    icon: <RiShieldLine className="text-2xl" />, 
    title: "Bezpečnost & spolehlivost", 
    description: "Ochrana proti útokům, zálohování a enterprise hosting zamezí výpadkům a chrání data.",
    percentage: 100,
    color: "#818CF8" // indigo-400
  },
  { 
    id: "ux",
    icon: <RiUserVoiceLine className="text-2xl" />, 
    title: "Špičkový UX design", 
    description: "Intuitivní rozhraní a uživatelské testy znamenají spokojené návštěvníky a vyšší konverze.",
    percentage: 100,
    color: "#F97316" // orange-500
  },
  { 
    id: "support",
    icon: <RiCustomerService2Line className="text-2xl" />, 
    title: "24/7 podpora & údržba", 
    description: "Pravidelné aktualizace, monitoring a rychlé řešení problémů bez jakýchkoliv starostí.",
    percentage: 100,
    color: "#D946EF" // fuchsia-500
  }
];

const InvestmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Detekce mobilního zařízení
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Počáteční detekce
    checkMobile();
    
    // Listener pro změnu velikosti okna
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation for section visibility - upravený threshold pro dřívější zobrazení
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        // Na mobilu nižší threshold pro dřívější zobrazení
        threshold: isMobile ? 0.05 : 0.2,
        // Přidáno rootMargin pro dřívější detekci
        rootMargin: isMobile ? "50px 0px" : "0px"
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMobile]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0a0e1c] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements - optimalizováno pro mobilní zařízení */}
      <div className="absolute inset-0">
        {/* Dark tech grid - statická verze */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
        
        {/* Zmenšený počet particles na mobilu */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#3B82F6' : '#D946EF',
                opacity: Math.random() * 0.5 + 0.3,
                // Na mobilu vypnuto plování pro lepší výkon
                animation: isMobile ? 'none' : `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: isMobile ? '0s' : `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - rychlejší animace */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-white">
            Investice do <span className="text-orange-500">budoucnosti</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-8 bg-orange-500/30"></div>
            <div className="mx-2 md:mx-4 text-orange-400 font-mono text-xs tracking-widest">{'//'}— TECHNOLOGIE —{'//'}</div>
            <div className="h-[1px] w-8 bg-orange-500/30"></div>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Proč se vyplatí investovat do profesionálních webových řešení
          </p>
        </div>

        {/* Card grid - rychlejší animace */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {investmentPoints.map((point, idx) => (
            <div 
              key={idx}
              className="relative group rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:z-20"
              onMouseEnter={() => !isMobile && setActivePoint(idx)}
              onMouseLeave={() => !isMobile && setActivePoint(null)}
            >
              {/* Card background with subtle glow */}
              <div className="absolute inset-0 bg-[#0f1629] opacity-90"></div>
              <div className="absolute inset-0 opacity-30 overflow-hidden">
                <div 
                  className="absolute -inset-[100%] blur-3xl" 
                  style={{
                    background: `radial-gradient(circle at center, ${point.color}20 0%, transparent 70%)`,
                    opacity: (isMobile || activePoint === idx) ? 0.7 : 0.2,
                    transition: 'opacity 0.5s ease-out'
                  }}
                ></div>
              </div>
              
              {/* Card border - statické na mobilu */}
              <div 
                className="absolute inset-0 rounded-md border border-white/10 overflow-hidden"
                style={{ 
                  boxShadow: (isMobile || activePoint === idx) ? `0 0 20px ${point.color}30` : 'none',
                  transition: 'box-shadow 0.5s ease-out'
                }}
              >
                {/* Scan efekt - jen na desktopu */}
                {!isMobile && (
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Horizontal scan lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-scan-line-x" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-white to-transparent animate-scan-line-x" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Vertical scan lines */}
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-scan-line-y" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-t from-transparent via-white to-transparent animate-scan-line-y" style={{ animationDelay: '2s' }}></div>
                  </div>
                )}
              </div>
              
              {/* Tech efekt - jen na desktopu */}
              {!isMobile && (
                <div className="absolute inset-0 bg-grid-pattern-fine opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              )}
              
              {/* Tech corner elements - zjednodušené na mobilu */}
              <div className="absolute top-0 left-0 w-6 h-6">
                <div className="absolute top-0 left-0 w-px h-3 bg-white/30"></div>
                <div className="absolute top-0 left-0 h-px w-3 bg-white/30"></div>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6">
                <div className="absolute top-0 right-0 w-px h-3 bg-white/30"></div>
                <div className="absolute top-0 right-0 h-px w-3 bg-white/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-6 h-6">
                <div className="absolute bottom-0 left-0 w-px h-3 bg-white/30"></div>
                <div className="absolute bottom-0 left-0 h-px w-3 bg-white/30"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6">
                <div className="absolute bottom-0 right-0 w-px h-3 bg-white/30"></div>
                <div className="absolute bottom-0 right-0 h-px w-3 bg-white/30"></div>
              </div>
              
              {/* Percentage indicator at top right */}
              <div 
                className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded"
                style={{ 
                  backgroundColor: (isMobile || activePoint === idx) ? `${point.color}30` : `${point.color}20`,
                  color: point.color,
                  boxShadow: (isMobile || activePoint === idx) ? `0 0 10px ${point.color}40` : 'none',
                }}
              >
                {point.percentage}%
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-5 md:p-6">
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 mb-4 flex items-center justify-center rounded-md"
                  style={{ 
                    color: point.color,
                    backgroundColor: (isMobile || activePoint === idx) ? `${point.color}20` : `${point.color}10`,
                    boxShadow: (isMobile || activePoint === idx) ? `0 0 15px ${point.color}30` : `0 0 10px ${point.color}20`,
                  }}
                >
                  {point.icon}
                  
                  {/* Pulsing efekt - jen na desktopu */}
                  {!isMobile && activePoint === idx && (
                    <div className="absolute inset-0 rounded-md opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-md border border-current animate-ping-slow opacity-40"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                  {point.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-5">{point.description}</p>
                
                {/* Progress bar - vždy 100% na mobilu, animované na desktopu */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full"
                    style={{ 
                      width: isMobile ? '100%' : (activePoint === idx ? `${point.percentage}%` : '5%'),
                      backgroundColor: point.color,
                      boxShadow: `0 0 8px ${point.color}`,
                      transition: isMobile ? 'none' : 'width 1.5s ease-out'
                    }}
                  ></div>
                </div>
                
                {/* Data points - na mobilu vždy viditelné */}
                <div className="relative h-1 mt-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-0 w-0.5 h-0.5 bg-white rounded-full"
                      style={{
                        left: `${i * 10 + 5}%`,
                        opacity: isMobile ? 0.7 : (activePoint === idx && i < Math.floor(point.percentage / 10) ? 0.7 : 0),
                        transform: isMobile ? 'scale(1)' : (activePoint === idx ? 'scale(1)' : 'scale(0)'),
                        transition: isMobile ? 'none' : 'transform 0.3s, opacity 0.3s',
                        transitionDelay: isMobile ? '0s' : `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA and reasons section - rychlejší animace */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left side - Why cheap websites aren't enough */}
          <div className="relative rounded-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-[#0f1629] opacity-90"></div>
            <div className="absolute inset-0 border border-white/10 overflow-hidden">
              {/* Scan efekt - jen na desktopu */}
              {!isMobile && (
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan-line-x"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-orange-500 to-transparent animate-scan-line-x" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-scan-line-y" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-t from-transparent via-orange-500 to-transparent animate-scan-line-y" style={{ animationDelay: '2s' }}></div>
                </div>
              )}
            </div>
            
            {/* Tech corner elements - zjednodušené na mobilu */}
            <div className="absolute top-0 left-0 w-8 h-8">
              <div className="absolute top-0 left-0 w-px h-4 bg-orange-500/70"></div>
              <div className="absolute top-0 left-0 h-px w-4 bg-orange-500/70"></div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8">
              <div className="absolute top-0 right-0 w-px h-4 bg-orange-500/70"></div>
              <div className="absolute top-0 right-0 h-px w-4 bg-orange-500/70"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-px h-4 bg-orange-500/70"></div>
              <div className="absolute bottom-0 left-0 h-px w-4 bg-orange-500/70"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-px h-4 bg-orange-500/70"></div>
              <div className="absolute bottom-0 right-0 h-px w-4 bg-orange-500/70"></div>
            </div>
            
            <div className="relative z-10 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Proč levný web nestačí?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4">
                    <div className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex items-center justify-center">✓</div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Levný web za 5 000 Kč je pouze <span className="text-white font-medium">digitální vizitka</span>, ne nástroj růstu</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4">
                    <div className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex items-center justify-center">✓</div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base"><span className="text-white font-medium">Profesionální řešení</span> přináší měřitelné výsledky a skutečnou návratnost</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4">
                    <div className="w-4 h-4 md:w-5 md:h-5 text-orange-500 flex items-center justify-center">✓</div>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Investice do <span className="text-white font-medium">kvalitního webu</span> znamená více zákazníků a vyšší zisky</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats and CTA */}
          <div className="space-y-6">
            {/* Stats section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "87%", label: "Zákazníků hlásí nárůst konverzí" },
                { value: "3.4×", label: "Vyšší návratnost investice" },
                { value: "24/7", label: "Technická podpora & údržba" }
              ].map((stat, idx) => (
                <div key={idx} className="relative rounded-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#0f1629] opacity-90"></div>
                  <div className="absolute inset-0 border border-white/10"></div>
                  
                  {/* Tech corner - jen na desktopu */}
                  {!isMobile && (
                    <div className="absolute top-0 right-0 w-6 h-6">
                      <div className="absolute top-0 right-0 w-0.5 h-0 group-hover:h-3 bg-orange-500/70 transition-all duration-500 delay-100"></div>
                      <div className="absolute top-0 right-0 h-0.5 w-0 group-hover:w-3 bg-orange-500/70 transition-all duration-500"></div>
                    </div>
                  )}
                  
                  <div className="relative z-10 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA button - optimalizované pro mobilní zařízení */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-md blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <a 
                href="/kontakt" 
                className="relative block text-center py-3 md:py-4 px-6 md:px-8 bg-orange-500 hover:bg-orange-600 text-black font-medium rounded-md transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center font-bold">
                  Konzultace zdarma
                  <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* Zjednodušené efekty na mobilu */}
                {!isMobile && (
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Scanning line */}
                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        .bg-grid-pattern-fine {
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 10px); }
          50% { transform: translate(0, 20px); }
          75% { transform: translate(-10px, 10px); }
        }
        @keyframes scan-line-x {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes scan-line-y {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default InvestmentSection;