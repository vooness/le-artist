"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Monitor, Edit, Video, CheckCircle2, ArrowRight } from "lucide-react";

// Definice typů pro service
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  checkmarks: string[];
  color: string;
}

// Data pro služby (ikony, tituly, popisy, checkmarky)
const services: Service[] = [
  {
    title: "Webovky",
    description:
      "Moderní, rychlé a responzivní webové stránky pro lepší prezentaci. Web, který prodává a roste s vámi.",
    icon: <Monitor className="w-8 h-8" />,
    checkmarks: [
      "Základní web již od 20 000 Kč",
      "React nebo .Net core řešení",
      "SEO optimalizace v ceně",
      "Responzivní design",
      "Úprava Shoptetu",
    ],
    color: "#F97316" // Oranžová
  },
  {
    title: "Grafika",
    description:
      "Od loga po kompletní firemní identitu. Jsem schopný navrhnout cokoliv – včetně marketingových materiálů.",
    icon: <Edit className="w-8 h-8" />,
    checkmarks: [
      "Logo design již od 3 000 Kč",
      "Vizitky a tiskoviny",
      "Sociální sítě a online grafika",
      "Loga a maskoti",
      "Design obalů",
    ],
    color: "#38BDF8" // Modrá
  },
  {
    title: "Střih Videa",
    description:
      "Profesionální střih videí pro sociální sítě, YouTube nebo firemní prezentace. Moderní efekty v ceně.",
    icon: <Video className="w-8 h-8" />,
    checkmarks: [
      "Střih videa od 3 000 Kč",
      "Dodání do 48 hodin",
      "Motion grafika v ceně",
      "Vlastní hudba a efekty",
      "Formáty pro všechny platformy",
    ],
    color: "#EC4899" // Růžová
  },
];

// ServiceCard s vylepšenými animacemi pro desktop a animací při scrollování
const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Detekce desktop zařízení
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Detekce když je karta v viewportu pro scrollovací animace
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Odebrat observer po zobrazení
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      { threshold: 0.15 } // Spustí se, když je 15% prvku viditelné
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`w-full max-w-sm group relative overflow-visible 
        ${isVisible ? 'animate-card-reveal' : 'opacity-0 translate-y-16'}`}
      style={{ 
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.8s',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* Kódový tag nad kartou (pouze na desktopu) */}
      {isDesktop && (
        <div 
          className="absolute top-[-20px] left-4 text-xs font-mono opacity-30 z-20"
          style={{ color: service.color }}
        >
          {`<${service.title.toLowerCase()} />`}
        </div>
      )}
      
      {/* Základní kontejner */}
      <div 
        className={`relative bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg
          transition-all duration-500 overflow-hidden
          ${isDesktop ? 'hover:shadow-xl' : ''}`}
        style={{
          boxShadow: isDesktop ? `0 6px 20px ${service.color}15` : 'none',
        }}
      >
        {/* Vnitřní ohraničení s gradientem */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          {isDesktop && (
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(120deg, transparent, ${service.color}10, transparent)`
              }}
            />
          )}
        </div>
        
        {/* Animované ohraničení pro desktop */}
        {isDesktop && (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
            
            {/* Animovaný border */}
            <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-colors duration-500"></div>
            
            {/* Rohové akcenty */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div 
                className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr-lg origin-top-right scale-0 group-hover:scale-100 transition-transform duration-500"
                style={{ borderColor: service.color, transitionDelay: '200ms' }}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
              <div 
                className="absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl-lg origin-bottom-left scale-0 group-hover:scale-100 transition-transform duration-500"
                style={{ borderColor: service.color, transitionDelay: '200ms' }}
              />
            </div>
          </div>
        )}
        
        {/* Gradient overlay pro desktop */}
        {isDesktop && (
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div 
              className="absolute -right-full top-0 w-full h-full bg-gradient-to-l from-transparent via-white/5 to-transparent group-hover:right-0 opacity-0 group-hover:opacity-100 transition-all duration-1000"
              style={{ 
                transition: 'right 1s ease-in-out, opacity 1s ease-in-out',
              }}
            />
          </div>
        )}
        
        {/* Obsah */}
        <div className="p-6 sm:p-8 relative z-10">
          {/* Ikona a nadpis */}
          <div className="flex justify-center items-center mb-6">
            <div 
              className={`relative mr-4 ${isDesktop ? 'group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500' : ''}`} 
              style={{ color: service.color }}
            >
              {service.icon}
              
              {/* Světelný kruh kolem ikony (pouze na desktopu) */}
              {isDesktop && (
                <div 
                  className="absolute inset-0 -m-1 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                    transform: 'scale(1.5)',
                  }}
                />
              )}
            </div>
            <h3 
              className={`text-2xl sm:text-3xl font-bold relative ${isDesktop ? 'transition-all duration-500' : ''}`} 
              style={{ 
                color: service.color,
              }}
            >
              {service.title}
              
              {/* Podtržení nadpisu (pouze na desktopu) */}
              {isDesktop && (
                <div 
                  className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ 
                    background: `linear-gradient(to right, ${service.color}, transparent)`,
                  }}
                />
              )}
            </h3>
          </div>
          
          {/* Popis */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            <div 
              className={`mt-4 h-[1px] mx-auto transition-all duration-700 ease-in-out ${isDesktop ? 'w-1/3 group-hover:w-2/3' : 'w-1/2'}`} 
              style={{ 
                background: `linear-gradient(to right, transparent, ${service.color}40, transparent)`,
              }}
            />
          </div>
          
          {/* Checklisty */}
          <ul className="space-y-3 mt-6 mb-8">
            {service.checkmarks.map((check, idx) => (
              <li 
                key={idx} 
                className={`flex items-start text-gray-300 text-sm transition-all ${
                  isDesktop ? 'duration-300' : ''
                }`}
                style={{ 
                  ...(isDesktop && { transitionDelay: `${idx * 50}ms`, transitionDuration: '300ms' })
                }}
              >
                <div className="flex-shrink-0 mr-3">
                  <CheckCircle2 
                    className={`w-5 h-5 text-green-500 ${
                      isDesktop ? 'group-hover:text-green-400 transition-all duration-300' : ''
                    }`} 
                    style={{
                      transform: isDesktop ? 'scale(1)' : 'none',
                      transition: isDesktop ? 'transform 0.3s ease' : 'none',
                    }}
                  />
                </div>
                <span className={isDesktop ? 'group-hover:text-white transition-colors duration-300' : ''}>
                  {check}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Nové vylepšené CTA tlačítko */}
          <button
            onClick={() => router.push("/sluzby")}
            className="w-full relative group/btn overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}10)`,
              border: `1px solid ${service.color}30`,
            }}
          >
            {/* Gradient pozadí při hoveru */}
            <div 
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${service.color}25, ${service.color}15)`,
              }}
            />
            
            {/* Shine efekt */}
            <div 
              className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"
              style={{
                background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
              }}
            />
            
            {/* Obsah tlačítka */}
            <div className="relative z-10 flex items-center justify-center px-6 py-4">
              <span 
                className="font-semibold text-white mr-3 transition-colors duration-300"
                style={{
                  textShadow: `0 0 10px ${service.color}40`,
                }}
              >
                Více informací
              </span>
              <ArrowRight 
                className="w-5 h-5 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110"
                style={{ color: service.color }}
              />
            </div>
            
            {/* Dolní accent linka */}
            <div 
              className="absolute bottom-0 left-0 h-[2px] w-0 group-hover/btn:w-full transition-all duration-500 ease-out"
              style={{ background: service.color }}
            />
          </button>
        </div>
      </div>
      
      {/* Stínový efekt pod kartou */}
      {isDesktop && (
        <div 
          className="absolute -z-10 bottom-0 left-1/2 w-4/5 h-1 -translate-x-1/2 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{ 
            background: service.color,
            boxShadow: `0 5px 20px 5px ${service.color}50`,
          }}
        />
      )}
    </div>
  );
};

// Vylepšené dynamické pozadí s opravenými gradienty
const BackgroundAnimation: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  if (!isDesktop) {
    // Pro mobilní zařízení - statické pozadí
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-slate-900/20"></div>
      </div>
    );
  }
  
  // Pro desktop - vylepšené pozadí s opravenými gradienty
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradienty v pozadí */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900/10 to-transparent opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/20 to-transparent opacity-30"></div>
      
      {/* Rozšířené a opravené světelné gradienty, které nebudou useknuté */}
      <div
        className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0) 70%)',
          transform: 'translate(-20%, -20%)',
        }}
      />
      
      <div
        className="absolute top-[30%] right-0 w-[70%] h-[70%] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(56,189,248,0) 70%)',
          transform: 'translate(20%, -30%)',
        }}
      />
      
      <div
        className="absolute bottom-0 right-[20%] w-[100%] h-[100%] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0) 70%)',
          transform: 'translate(0%, 20%)',
        }}
      />
      
      {/* Jemný overlay kódového vzoru */}
      <div className="absolute inset-0 opacity-[0.015] font-mono text-[0.6rem] text-white overflow-hidden select-none">
        <div className="absolute -left-20 top-10 transform -rotate-3 opacity-50">
          {`// Core functions
import { services } from './data';
export const renderServices = () => {
  return services.map(service => (
    <ServiceCard data={service} />
  ));
};`}
        </div>
      </div>
      
      {/* Jemná mřížka */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

// Modernější a jemnější nadpis - zarovnaný vlevo
const CodeDesignerTitle: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className={`flex flex-col items-start text-left mb-12 relative ${
      isVisible ? 'animate-title-reveal' : 'opacity-0'
    }`}>
      {/* Jemnější kódový element nad nadpisem */}
      <div className="flex items-center text-xs font-mono text-orange-500/60 mb-1">
        <span className="tracking-wider opacity-70">{'<>'} IMPORT SERVICES {'</>'}</span>
      </div>
      
      {/* Hlavní nadpis */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white relative">
        Rychlý přehled
        <div 
          className="absolute -bottom-2 left-0 h-1 w-1/2 bg-gradient-to-r from-[#F97316] to-transparent"
          style={{ 
            borderRadius: '0 2px 2px 0' 
          }}
        />
      </h2>
      
      {/* Stylizované tagy pod nadpisem */}
      <div className="flex items-center space-x-3 mt-4 ml-1">
        <div className="flex items-center text-xs font-mono text-orange-500/70">
          <span>//</span>
          <span className="ml-1 tracking-wider">SLUŽBY</span>
        </div>
        <div className="h-px w-4 bg-orange-500/40" />
        <div className="flex items-center text-xs font-mono text-blue-400/70">
          <span>&</span>
        </div>
        <div className="h-px w-4 bg-orange-500/40" />
        <div className="flex items-center text-xs font-mono text-orange-500/70">
          <span className="tracking-wider">MOŽNOSTI</span>
          <span className="ml-1">//</span>
        </div>
      </div>
      
      {/* Jemný kódový element v pozadí */}
      <div className="absolute -bottom-8 right-0 font-mono text-[0.6rem] opacity-20 text-orange-500/30">
        {`// ${new Date().getFullYear()}`}
      </div>
    </div>
  );
};

// Hlavní komponenta
const ServicesGrid: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  
  // Detekce desktop zařízení a nastavení
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    // Přidání animačních stylů
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes card-reveal {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes title-reveal {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .animate-card-reveal {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animate-title-reveal {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animate-fade-in {
        animation: fade-in 0.8s forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);
  
  // Observer pro nadpis
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          if (titleRef.current) {
            observer.unobserve(titleRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative">
      {/* Vylepšené pozadí s opravenými gradienty */}
      <BackgroundAnimation isDesktop={isDesktop} />
      
      {/* Kontejner s paddingem */}
      <div className="relative z-10">
        {/* Nadpis - zarovnaný vlevo */}
        <div ref={titleRef} className="mb-12">
          <CodeDesignerTitle isVisible={titleVisible} />
        </div>
        
        {/* Grid služeb */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service} 
              index={i} 
            />
          ))}
        </div>
        
        {/* Jemnější kódový dekorativní prvek */}
        <div className="flex justify-end mt-8 sm:mt-10">
          <div className="flex items-center text-xs font-mono text-orange-500/30 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <span>// END SERVICES</span>
            <div className="h-px w-10 bg-orange-500/20 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;