"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// Definice typů pro service
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  checkmarks: string[];
  color: string;
}

// Opravené ikony jako SVG komponenty
const Monitor = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const Edit = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="m18 2 4 4-12 12H6v-4L18 2z"/>
  </svg>
);

const Video = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const ShoppingBag = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="m16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const GraduationCap = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
  </svg>
);

const BookOpen = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const CheckCircle2 = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const ArrowLeft = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
);

// Rozšířená data pro 6 služeb
const services: Service[] = [
  {
    title: "Webovky",
    description: "Moderní, rychlé a responzivní webové stránky pro lepší prezentaci. Web, který prodává a roste s vámi.",
    icon: <Monitor />,
    checkmarks: [
      "Moderní React nebo .NET technologie",
      "SEO optimalizace pro lepší pozice",
      "Responzivní design pro všechna zařízení", 
      "Rychlost načítání pod 3 sekundy",
      "Integrace s analytickými nástroji",
    ],
    color: "#F97316" // Oranžová
  },
  {
    title: "Grafika",
    description: "Od loga po kompletní firemní identitu. Jsem schopný navrhnout cokoliv – včetně marketingových materiálů.",
    icon: <Edit />,
    checkmarks: [
      "Unikátní design přesně na míru",
      "Neomezené revize až do spokojenosti",
      "Všechny formáty pro tisk i web",
      "Firemní identita v jednotném stylu",
      "Rychlé dodání do 3-5 dnů",
    ],
    color: "#38BDF8" // Modrá
  },
  {
    title: "Střih Videa",
    description: "Profesionální střih videí pro sociální sítě, YouTube nebo firemní prezentace. Moderní efekty v ceně.",
    icon: <Video />,
    checkmarks: [
      "Profesionální střih a color grading",
      "Motion grafika a animace v ceně",
      "Optimalizace pro všechny platformy",
      "Vlastní hudba bez autorských poplatků",
      "Express dodání do 48 hodin",
    ],
    color: "#EC4899" // Růžová
  },
  {
    title: "E-shopy",
    description: "Kompletní e-commerce řešení s integrovanými platbami, správou skladů a pokročilou analytikou prodejů.",
    icon: <ShoppingBag />,
    checkmarks: [
      "Integrované online platby",
      "Správa produktů a skladů",
      "Pokročilá analytika prodejů",
      "Multi-měnové podpory",
      "Optimalizace pro konverze",
    ],
    color: "#10B981" // Zelená
  },
  {
    title: "Online Kurzy",
    description: "Interaktivní vzdělávací platformy s kvízy, certifikáty a pokročilým sledováním pokroku studentů.",
    icon: <GraduationCap />,
    checkmarks: [
      "LMS platforma na míru",
      "Interaktivní kvízy a testy",
      "Systém certifikátů",
      "Sledování pokroku studentů",
      "SCORM kompatibilita",
    ],
    color: "#8B5CF6" // Fialová
  },
  {
    title: "E-learning",
    description: "Profesionální e-learningové moduly na platformě H5P a Adobe Articulate 360 pro efektivní vzdělávání.",
    icon: <BookOpen />,
    checkmarks: [
      "H5P interaktivní prvky",
      "Adobe Articulate 360 moduly",
      "SCORM 1.2/2004 export",
      "Gamifikační mechaniky",
      "Pokročilé simulace a scénáře",
    ],
    color: "#EF4444" // Červená
  },
];

// ServiceCard komponenta s plynulými přechody
const ServiceCard: React.FC<{ 
  service: Service, 
  index: number, 
  isVisible: boolean, 
  animationDelay: number,
  isRevealed: boolean,
  cardPosition?: 'prev' | 'current' | 'next',
  isMobile?: boolean
}> = ({ service, index, isVisible, animationDelay, isRevealed, cardPosition = 'current', isMobile = false }) => {
  const router = useRouter();
  
  // Určení opacity, scale a efektů na základě pozice
  const getCardStyles = () => {
    if (cardPosition === 'current') {
      return 'opacity-100 z-20 shadow-2xl';
    } else if (cardPosition === 'prev' || cardPosition === 'next') {
      return 'opacity-60 z-10 hover:opacity-80 transition-opacity duration-300';
    }
    return 'opacity-100';
  };
  
  return (
    <div 
      className={`w-full max-w-sm relative overflow-visible ${
        // Na mobilu úplně prostý div bez group efektů
        isMobile 
          ? '' 
          : `group transition-all duration-700 ease-in-out ${
              isRevealed 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            } ${getCardStyles()}`
      }`}
      style={isMobile ? {} : {
        transitionDelay: `${animationDelay}ms`,
        filter: cardPosition === 'current' ? 'brightness(1.1)' : 'brightness(0.9)',
      }}
    >
      {/* Glow efekt pro střední kartu */}
      {cardPosition === 'current' && (
        <div 
          className="absolute -inset-4 rounded-2xl opacity-30 blur-xl transition-opacity duration-700"
          style={{ 
            background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
          }}
        />
      )}
      {/* Kódový tag nad kartou */}
      <div 
        className="absolute top-[-20px] left-4 text-xs font-mono opacity-30 z-20"
        style={{ color: service.color }}
      >
        {`<${service.title.toLowerCase().replace(/[\s-]/g, '')} />`}
      </div>
      
      {/* Základní kontejner */}
      <div 
        className={`relative rounded-xl border overflow-hidden ${
          isMobile 
            ? 'bg-slate-800 border-white/10 shadow-md' 
            : 'bg-slate-800/60 backdrop-blur-lg border-white/10 shadow-lg transition-all duration-500 hover:shadow-xl'
        }`}
        style={isMobile ? {} : {
          boxShadow: `0 6px 20px ${service.color}15`,
        }}
      >
        {/* Vnitřní ohraničení s gradientem */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div 
            className={`absolute inset-0 ${
              isMobile 
                ? 'opacity-0' 
                : `transition-opacity duration-500 ${
                    cardPosition === 'current' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`
            }`}
            style={{
              background: isMobile ? 'none' : `linear-gradient(120deg, transparent, ${service.color}10, transparent)`,
            }}
          />
        </div>
        
        {/* Animované ohraničení */}
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-px ${
            isMobile 
              ? 'opacity-0' 
              : `bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-700 ${
                  cardPosition === 'current' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`
          }`}/>
          <div className={`absolute bottom-0 left-0 w-full h-px ${
            isMobile 
              ? 'opacity-0' 
              : `bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-700 ${
                  cardPosition === 'current' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`
          }`}/>
          
          <div className={`absolute inset-0 rounded-xl border ${
            isMobile 
              ? 'border-white/10' 
              : `transition-colors duration-500 ${
                  cardPosition === 'current' ? 'border-white/20' : 'border-white/0 group-hover:border-white/20'
                }`
          }`}></div>
          
          {/* Rohové akcenty */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div 
              className={`absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr-lg origin-top-right transition-transform duration-500 ${
                cardPosition === 'current' ? 'scale-100' : 'scale-0 group-hover:scale-100'
              }`}
              style={{ borderColor: service.color, transitionDelay: '200ms' }}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
            <div 
              className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl-lg origin-bottom-left transition-transform duration-500 ${
                cardPosition === 'current' ? 'scale-100' : 'scale-0 group-hover:scale-100'
              }`}
              style={{ borderColor: service.color, transitionDelay: '200ms' }}
            />
          </div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div 
            className={`absolute top-0 w-full h-full bg-gradient-to-l from-transparent via-white/5 to-transparent ${
              isMobile 
                ? 'opacity-0' 
                : `transition-all duration-1000 ${
                    cardPosition === 'current' ? 'right-0 opacity-100' : '-right-full opacity-0 group-hover:right-0 group-hover:opacity-100'
                  }`
            }`}
            style={{ 
              transition: isMobile ? 'none' : 'right 1s ease-in-out, opacity 1s ease-in-out',
            }}
          />
        </div>
        
        {/* Obsah */}
        <div className="p-6 sm:p-8 relative z-10">
          {/* Ikona a nadpis */}
          <div className="flex justify-center items-center mb-6">
            <div 
              className={`relative mr-4 ${
                isMobile 
                  ? '' 
                  : `transition-transform duration-500 ${
                      cardPosition === 'current' ? 'scale-110 rotate-3' : 'group-hover:scale-110 group-hover:rotate-3'
                    }`
              }`}
              style={{ color: service.color }}
            >
              {service.icon}
              
              <div 
                className={`absolute inset-0 -m-1 rounded-full ${
                  isMobile 
                    ? 'opacity-0' 
                    : `transition-opacity duration-500 ${
                        cardPosition === 'current' ? 'opacity-50' : 'opacity-0 group-hover:opacity-50'
                      }`
                }`}
                style={{ 
                  background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)`,
                  transform: 'scale(1.5)',
                }}
              />
            </div>
            <h3 
              className={`text-2xl sm:text-3xl font-bold relative ${
                isMobile ? '' : 'transition-all duration-500'
              }`} 
              style={{ color: service.color }}
            >
              {service.title}
              
              <div 
                className={`absolute -bottom-1 left-0 h-[2px] ${
                  isMobile 
                    ? 'w-full' 
                    : `transition-all duration-500 ease-out ${
                        cardPosition === 'current' ? 'w-full' : 'w-0 group-hover:w-full'
                      }`
                }`}
                style={{ 
                  background: `linear-gradient(to right, ${service.color}, transparent)`,
                }}
              />
            </h3>
          </div>
          
          {/* Popis */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            <div 
              className={`mt-4 h-[1px] mx-auto ${
                isMobile 
                  ? 'w-2/3' 
                  : `transition-all duration-700 ease-in-out ${
                      cardPosition === 'current' ? 'w-2/3' : 'w-1/3 group-hover:w-2/3'
                    }`
              }`}
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
                className={`flex items-start text-gray-300 text-sm ${
                  isMobile ? '' : 'transition-all duration-300'
                }`}
                style={isMobile ? {} : { 
                  transitionDelay: `${idx * 50}ms`, 
                  transitionDuration: '300ms' 
                }}
              >
                <div className="flex-shrink-0 mr-3 text-green-500">
                  <CheckCircle2 />
                </div>
                <span className={isMobile ? 'text-white' : `transition-colors duration-300 ${
                  cardPosition === 'current' ? 'text-white' : 'group-hover:text-white'
                }`}>
                  {check}
                </span>
              </li>
            ))}
          </ul>
          
          {/* CTA tlačítko */}
          <button
            onClick={() => router.push("/kontakt")}
            className={`w-full relative group/btn overflow-hidden rounded-xl ${
              isMobile ? '' : 'transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]'
            }`}
            style={{
              background: `linear-gradient(135deg, ${service.color}15, ${service.color}10)`,
              border: `1px solid ${service.color}30`,
            }}
          >
            <div 
              className={`absolute inset-0 ${
                isMobile 
                  ? 'opacity-0' 
                  : 'opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300'
              }`}
              style={{
                background: `linear-gradient(135deg, ${service.color}25, ${service.color}15)`,
              }}
            />
            
            <div 
              className={`absolute inset-0 ${
                isMobile 
                  ? 'opacity-0' 
                  : '-translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out'
              }`}
              style={{
                background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
              }}
            />
            
            <div className="relative z-10 flex items-center justify-center px-6 py-4">
              <span 
                className="font-semibold text-white mr-3 transition-colors duration-300"
                style={{
                  textShadow: `0 0 10px ${service.color}40`,
                }}
              >
                Začněme spolupráci
              </span>
              <div 
                className={`${
                  isMobile 
                    ? '' 
                    : 'transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110'
                }`}
                style={{ color: service.color }}
              >
                <ArrowRight />
              </div>
            </div>
            
            <div 
              className={`absolute bottom-0 left-0 h-[2px] ${
                isMobile 
                  ? 'w-0' 
                  : 'w-0 group-hover/btn:w-full transition-all duration-500 ease-out'
              }`}
              style={{ background: service.color }}
            />
          </button>
        </div>
      </div>
      
      {/* Vylepšený stínový efekt pod kartou */}
      <div 
        className={`absolute -z-10 bottom-0 left-1/2 w-4/5 h-1 -translate-x-1/2 rounded-full blur-md transition-opacity duration-500 ${
          cardPosition === 'current' 
            ? 'opacity-100' 
            : 'opacity-0 group-hover:opacity-60'
        }`}
        style={{ 
          background: service.color,
          boxShadow: cardPosition === 'current' 
            ? `0 8px 30px 8px ${service.color}60` 
            : `0 5px 20px 5px ${service.color}50`,
        }}
      />
    </div>
  );
};

// Pozadí
const BackgroundAnimation: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  if (!isDesktop) return null;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.015] font-mono text-[0.6rem] text-white overflow-hidden select-none">
        <div className="absolute -left-20 top-10 transform -rotate-3 opacity-50">
          {`// Tech Services Carousel
const services = [...allServices];
const autoSlide = setInterval(() => {
  nextSlide();
}, 4000);`}
        </div>
      </div>
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

// Nadpis
const CodeDesignerTitle: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className={`flex flex-col items-start text-left mb-12 relative transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="flex items-center text-xs font-mono text-orange-500/60 mb-1">
        <span className="tracking-wider opacity-70">{'<>'} TECH SLUŽBY {'</>'}</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white relative">
        Rychlý přehled
        <div 
          className="absolute -bottom-2 left-0 h-1 w-1/2 bg-gradient-to-r from-[#F97316] to-transparent"
          style={{ borderRadius: '0 2px 2px 0' }}
        />
      </h2>
      
      <div className="flex items-center space-x-3 mt-4 ml-1">
        <div className="flex items-center text-xs font-mono text-orange-500/70">
          <span>//</span>
          <span className="ml-1 tracking-wider">AUTO</span>
        </div>
        <div className="h-px w-4 bg-orange-500/40" />
        <div className="flex items-center text-xs font-mono text-blue-400/70">
          <span>&</span>
        </div>
        <div className="h-px w-4 bg-orange-500/40" />
        <div className="flex items-center text-xs font-mono text-orange-500/70">
          <span className="tracking-wider">CAROUSEL</span>
          <span className="ml-1">//</span>
        </div>
      </div>
      
      <div className="absolute -bottom-8 right-0 font-mono text-[0.6rem] opacity-20 text-orange-500/30">
        {`// ${new Date().getFullYear()}`}
      </div>
    </div>
  );
};

// Hlavní komponenta s opraveným carouselem a plynulými animacemi
const TechCarouselServices: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState<boolean[]>(new Array(services.length).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>(new Array(services.length).fill(null));
  
  // Detekce desktop zařízení
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => {
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);
  
  // Funkce pro navigaci šipkami
  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    changeIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % services.length;
    changeIndex(newIndex);
  };

  // Funkce pro změnu indexu s animací
  const changeIndex = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  
  // Auto-slide každých 4 sekund (pouze desktop)
  useEffect(() => {
    if (!isDesktop) return;
    
    const interval = setInterval(() => {
      changeIndex((currentIndex + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isDesktop, currentIndex]);

  // Podpora pro klávesové zkratky (pouze desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDesktop, isTransitioning]);
  
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
  
  // Observer pro reveal animace karet (pouze desktop)
  useEffect(() => {
    if (isDesktop) {
      // Na desktopu se rovnou zobrazí
      setCardsRevealed(new Array(services.length).fill(true));
      return;
    }
    
    // Na mobilu už žádný observer - karty jsou vždy viditelné
    setCardsRevealed(new Array(services.length).fill(true));
  }, [isDesktop]);
  
  // Funkce pro získání všech karet s jejich pozicemi
  const getAllCardsWithPositions = () => {
    return services.map((service, index) => {
      let position: 'prev' | 'current' | 'next' | 'hidden';
      
      const prevIndex = (currentIndex - 1 + services.length) % services.length;
      const nextIndex = (currentIndex + 1) % services.length;
      
      if (index === currentIndex) {
        position = 'current';
      } else if (index === prevIndex) {
        position = 'prev';
      } else if (index === nextIndex) {
        position = 'next';
      } else {
        position = 'hidden';
      }
      
      return {
        service,
        index,
        position,
        isCenter: position === 'current'
      };
    });
  };

  // Funkce pro transform podle pozice
  const getTransformByPosition = (position: 'prev' | 'current' | 'next') => {
    switch (position) {
      case 'prev':
        return 'translateX(-400px) scale(0.85)';
      case 'current':
        return 'translateX(0) scale(1)';
      case 'next':
        return 'translateX(400px) scale(0.85)';
      default:
        return 'translateX(0)';
    }
  };
  
  return (
    <section className="relative py-16 lg:py-24 bg-[#0f172a] text-white overflow-hidden">
      <BackgroundAnimation isDesktop={isDesktop} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative z-10">
          {/* Nadpis */}
          <div ref={titleRef} className="mb-12">
            <CodeDesignerTitle isVisible={titleVisible} />
          </div>
          
          {/* Carousel kontejner s dostatečnou výškou */}
          <div className="relative min-h-[700px] lg:min-h-[650px]">
            {/* Desktop carousel s plynulými přechody a všemi kartami */}
            {isDesktop ? (
              <div className="relative flex items-center justify-center min-h-[600px]">
                {/* Levá šipka - úplně mimo karty */}
                <button
                  onClick={goToPrevious}
                  disabled={isTransitioning}
                  className={`w-12 h-12 rounded-full border border-white/20 bg-slate-800/80 backdrop-blur-lg text-white hover:bg-slate-700/80 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center group mr-8 ${
                    isTransitioning ? 'pointer-events-none opacity-50' : 'hover:scale-110 active:scale-95'
                  }`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  <ArrowLeft />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {/* Carousel kontejner */}
                <div className="relative w-[1100px] h-[550px] flex items-center justify-center">
                  {getAllCardsWithPositions()
                    .filter(card => card.position !== 'hidden') // Skryj karty s pozicí 'hidden'
                    .map((card) => (
                    <div 
                      key={card.index}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out w-[380px] ${
                        (card.position === 'prev' || card.position === 'next') 
                          ? 'cursor-pointer hover:scale-105' 
                          : card.position === 'current' 
                          ? 'cursor-default' 
                          : 'cursor-default'
                      }`}
                      onClick={() => {
                        if (card.position === 'prev' || card.position === 'next') {
                          changeIndex(card.index);
                        }
                      }}
                      style={{
                        transform: `translate(-50%, -50%) ${getTransformByPosition(card.position as 'prev' | 'current' | 'next')}`,
                        zIndex: card.position === 'current' ? 30 : card.position === 'prev' || card.position === 'next' ? 20 : 10,
                      }}
                    >
                      <ServiceCard 
                        service={card.service} 
                        index={card.index} 
                        isVisible={card.isCenter}
                        animationDelay={0}
                        isRevealed={true}
                        cardPosition={card.position as 'prev' | 'current' | 'next'}
                        isMobile={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Pravá šipka - úplně mimo karty */}
                <button
                  onClick={goToNext}
                  disabled={isTransitioning}
                  className={`w-12 h-12 rounded-full border border-white/20 bg-slate-800/80 backdrop-blur-lg text-white hover:bg-slate-700/80 hover:border-orange-500/50 transition-all duration-300 flex items-center justify-center group ml-8 ${
                    isTransitioning ? 'pointer-events-none opacity-50' : 'hover:scale-110 active:scale-95'
                  }`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  <ChevronRight />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-l from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            ) : (
              /* Mobilní flexbox - bez grid efektů */
              <div className="flex flex-col items-center space-y-12 mb-16 px-4">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="w-full max-w-sm"
                  >
                    <ServiceCard 
                      service={service} 
                      index={i} 
                      isVisible={true}
                      animationDelay={0}
                      isRevealed={true}
                      cardPosition="current"
                      isMobile={true}
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Progress indikátory pro desktop s lepším stylingem */}
            {isDesktop && (
              <div className="flex justify-center space-x-3 mb-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeIndex(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-orange-500 scale-125 shadow-lg'
                        : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                    } ${isTransitioning ? 'pointer-events-none' : ''}`}
                    style={{
                      boxShadow: index === currentIndex ? '0 0 10px rgba(249, 115, 22, 0.5)' : 'none'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Spodní dekorativní prvek */}
          <div className="flex justify-between items-center mt-8 sm:mt-10">
            {isDesktop && (
              <div className="flex items-center text-xs font-mono text-gray-500/50 opacity-70">
                <span>// OVLÁDÁNÍ: ŠIPKY ←→ NEBO KLIK</span>
              </div>
            )}
            <div className="flex items-center text-xs font-mono text-orange-500/30 opacity-100 ml-auto">
              <span>// SMOOTH AUTO-ROTATING CAROUSEL</span>
              <div className="h-px w-10 bg-orange-500/20 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCarouselServices;