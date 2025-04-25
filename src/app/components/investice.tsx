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
  const sectionRef = useRef<HTMLElement | null>(null);

  // Animation for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0a0e1c] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Dark tech grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-pattern"></div>
        </div>
        
        {/* Subtle particles */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
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
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-2">
            {/* Empty flex container */}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 text-white">
            Investice do <span className="text-orange-500">budoucnosti</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[1px] w-10 bg-orange-500/30"></div>
            <div className="mx-4 text-orange-400 font-mono text-xs tracking-widest">//———— TECHNOLOGIE &amp; EXPERTÍZA ————//</div>
            <div className="h-[1px] w-10 bg-orange-500/30"></div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proč se vyplatí investovat do profesionálních webových řešení
          </p>
        </div>

        {/* Card grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {investmentPoints.map((point, idx) => (
            <div 
              key={idx}
              className="relative group rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:z-20"
              onMouseEnter={() => setActivePoint(idx)}
              onMouseLeave={() => setActivePoint(null)}
            >
              {/* Card background with subtle glow */}
              <div className="absolute inset-0 bg-[#0f1629] opacity-90"></div>
              <div className="absolute inset-0 opacity-30 overflow-hidden">
                <div 
                  className="absolute -inset-[100%] blur-3xl" 
                  style={{
                    background: `radial-gradient(circle at center, ${point.color}20 0%, transparent 70%)`,
                    opacity: activePoint === idx ? 0.7 : 0.2,
                    transition: 'opacity 0.5s ease-out'
                  }}
                ></div>
              </div>
              
              {/* Card border with animation */}
              <div 
                className="absolute inset-0 rounded-md border border-white/10 overflow-hidden"
                style={{ 
                  boxShadow: activePoint === idx ? `0 0 30px ${point.color}30` : 'none',
                  transition: 'box-shadow 0.5s ease-out'
                }}
              >
                {/* Animated futuristic border scan effect */}
                <div 
                  className={`absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  {/* Horizontal scan lines */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent animate-scan-line-x" style={{ animationDelay: '0s' }}></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-white to-transparent animate-scan-line-x" style={{ animationDelay: '1.5s' }}></div>
                  
                  {/* Vertical scan lines */}
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent animate-scan-line-y" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-t from-transparent via-white to-transparent animate-scan-line-y" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
              
              {/* Holographic tech overlay effect on hover */}
              <div className={`absolute inset-0 bg-grid-pattern-fine opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Tech corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8">
                <div className="absolute top-0 left-0 w-px h-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                <div className="absolute top-0 left-0 h-px w-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-px h-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 h-px w-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8">
                <div className="absolute bottom-0 left-0 w-px h-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 h-px w-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-px h-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 h-px w-4 bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
              </div>
              
              {/* Percentage indicator at top right */}
              <div 
                className="absolute top-3 right-3 text-xs font-mono px-2 py-1 rounded transition-all duration-300"
                style={{ 
                  backgroundColor: activePoint === idx ? `${point.color}30` : `${point.color}20`,
                  color: point.color,
                  boxShadow: activePoint === idx ? `0 0 10px ${point.color}50` : 'none',
                }}
              >
                {point.percentage}%
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                <div 
                  className="w-12 h-12 mb-4 flex items-center justify-center rounded-md transition-all duration-300"
                  style={{ 
                    color: point.color,
                    backgroundColor: activePoint === idx ? `${point.color}20` : `${point.color}10`,
                    boxShadow: activePoint === idx ? `0 0 20px ${point.color}40` : `0 0 15px ${point.color}20`,
                  }}
                >
                  {point.icon}
                  
                  {/* Pulsing circles on hover */}
                  <div className={`absolute inset-0 rounded-md ${activePoint === idx ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 pointer-events-none`}>
                    <div className="absolute inset-0 rounded-md border border-current animate-ping-slow opacity-40"></div>
                    <div className="absolute inset-0 rounded-md border border-current animate-ping-slow opacity-20" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white transition-all duration-300 group-hover:text-white/90">
                  {point.title}
                  {/* Animated underline on hover */}
                  <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500"></div>
                </h3>
                
                <p className="text-gray-400 text-sm mb-5 transition-all duration-300 group-hover:text-gray-300">{point.description}</p>
                
                {/* Progress bar with animated filling effect */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 group-hover:duration-3000"
                    style={{ 
                      width: activePoint === idx ? `${point.percentage}%` : '5%',
                      backgroundColor: point.color,
                      boxShadow: `0 0 10px ${point.color}`
                    }}
                  ></div>
                </div>
                
                {/* Data points visualization (appears on hover) */}
                <div className="relative h-1 mt-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-0 w-0.5 h-0.5 bg-white rounded-full transition-all duration-300"
                      style={{
                        left: `${i * 10 + 5}%`,
                        opacity: activePoint === idx && i < Math.floor(point.percentage / 10) ? 0.7 : 0,
                        transform: activePoint === idx ? 'scale(1)' : 'scale(0)',
                        transitionDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA and reasons section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left side - Why cheap websites aren't enough */}
          <div className="relative rounded-md overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 bg-[#0f1629] opacity-90"></div>
            <div className="absolute inset-0 border border-white/10 overflow-hidden">
              {/* Animated border scan effect */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-scan-line-x"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-orange-500 to-transparent animate-scan-line-x" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-scan-line-y" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-t from-transparent via-orange-500 to-transparent animate-scan-line-y" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Tech corner elements */}
            <div className="absolute top-0 left-0 w-10 h-10">
              <div className="absolute top-0 left-0 w-px h-5 bg-orange-500/70"></div>
              <div className="absolute top-0 left-0 h-px w-5 bg-orange-500/70"></div>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10">
              <div className="absolute top-0 right-0 w-px h-5 bg-orange-500/70"></div>
              <div className="absolute top-0 right-0 h-px w-5 bg-orange-500/70"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-10 h-10">
              <div className="absolute bottom-0 left-0 w-px h-5 bg-orange-500/70"></div>
              <div className="absolute bottom-0 left-0 h-px w-5 bg-orange-500/70"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10">
              <div className="absolute bottom-0 right-0 w-px h-5 bg-orange-500/70"></div>
              <div className="absolute bottom-0 right-0 h-px w-5 bg-orange-500/70"></div>
            </div>
            
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Proč levný web nestačí?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4 group-hover:animate-pulse-slow">
                    <div className="w-5 h-5 text-orange-500">✓</div>
                  </div>
                  <p className="text-gray-300">Levný web za 5 000 Kč je pouze <span className="text-white font-medium">digitální vizitka</span>, ne nástroj růstu</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4 group-hover:animate-pulse-slow" style={{ animationDelay: '0.3s' }}>
                    <div className="w-5 h-5 text-orange-500">✓</div>
                  </div>
                  <p className="text-gray-300"><span className="text-white font-medium">Profesionální řešení</span> přináší měřitelné výsledky a skutečnou návratnost</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-orange-500/20 rounded-full p-2 mr-4 group-hover:animate-pulse-slow" style={{ animationDelay: '0.6s' }}>
                    <div className="w-5 h-5 text-orange-500">✓</div>
                  </div>
                  <p className="text-gray-300">Investice do <span className="text-white font-medium">kvalitního webu</span> znamená více zákazníků a vyšší zisky</p>
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
                  
                  {/* Tech corner data visualization */}
                  <div className="absolute top-0 right-0 w-6 h-6">
                    <div className="absolute top-0 right-0 w-0.5 h-0 group-hover:h-3 bg-orange-500/70 transition-all duration-500 delay-100"></div>
                    <div className="absolute top-0 right-0 h-0.5 w-0 group-hover:w-3 bg-orange-500/70 transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative z-10 p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-md blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <a href="#contact" className="relative block text-center py-4 px-8 bg-orange-500 hover:bg-orange-600 text-black font-medium rounded-md transition-all duration-300 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center font-bold">
                  Konzultace zdarma
                  <RiArrowRightLine className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                
                {/* High-tech button effect */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Scanning line effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
                  
                  {/* Digital data effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-px bg-white/70"
                        style={{
                          height: `${Math.random() * 10 + 5}px`,
                          left: `${i * 10 + Math.random() * 5}%`,
                          top: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.5 + 0.2,
                          transform: 'translateY(100%)',
                          animation: `data-flow ${Math.random() * 2 + 1}s linear infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
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
        @keyframes pulse-slow {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.6; transform: scale(1); }
        }
        @keyframes data-flow {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InvestmentSection;