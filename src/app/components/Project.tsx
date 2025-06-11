"use client"

import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"

/// Příklady projektů
const projects = [
  {
    title: "EdukoPlatform",
    description: "Zabezpečená vzdělávací platforma s interaktivními cvičeními a animacemi propojenými s odkazy v učebnicích. Přístup je umožněn pouze přes zabezpečené odkazy s tokeny.",
    category: "Vzdělávací software",
    technologies: ["React", "Node.js", "JWT", "MongoDB", "GSAP Animations"],
    image: "/imgs/web3.png",
    result: "87% studentů hodnotí platformu jako velmi užitečnou, 34% zlepšení studijních výsledků"
  },
  {
    title: "Království zdraví e-shop",
    description: "Komplexní úprava Shoptet šablony, rozšíření funkcionalit a stylů pro e-shop Království zdraví. Vytvořeno několik vlastních modulů a přizpůsobení pro zlepšení uživatelského zážitku.",
    category: "E-commerce úpravy",
    technologies: ["Shoptet", "CSS/SCSS", "JavaScript", "HTML5"],
    image: "/imgs/kz.png",
    result: "43% nárůst objednávek, 28% prodloužení času stráveného na stránce"
  },
  {
    title: "Filmová databáze",
    description: "Aplikace pro vyhledávání filmů s využitím externího API. Umožňuje filtrování podle žánrů, hodnocení a roku vydání, ukládání oblíbených filmů a vytváření vlastních seznamů.",
    category: "Webová aplikace",
    technologies: ["React", "Tailwind CSS", "REST API", "LocalStorage"],
    image: "/imgs/movie.png",
    result: "Přes 5,000 aktivních uživatelů během prvního měsíce"
  }
];

// Čisté pozadí bez gradientních prvků (stejné jako ServicesGrid)
const BackgroundAnimation: React.FC<{ isDesktop: boolean }> = ({ isDesktop }) => {
  if (!isDesktop) {
    // Pro mobilní zařízení - bez pozadí
    return null;
  }
  
  // Pro desktop - pouze jemná mřížka a kódový vzor
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Jemný overlay kódového vzoru */}
      <div className="absolute inset-0 opacity-[0.015] font-mono text-[0.6rem] text-white overflow-hidden select-none">
        <div className="absolute -left-20 top-10 transform -rotate-3 opacity-50">
          {`// Project showcase
const projects = [...data];
export const renderProjects = () => {
  return projects.map(project => (
    <ProjectCard data={project} />
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

const ProjectsSection = () => {
  // State pro postupné zobrazení prvků
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);  
  // Nastavíme prvky jako viditelné po montáži komponenty a detekce desktop
  useEffect(() => {
    setIsVisible(true);
    setIsDesktop(window.innerWidth >= 1024);
    setVisibleCards(new Array(projects.length).fill(false));
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Reveal animations pro desktop
  useEffect(() => {
    if (!isDesktop) return;

    // Observer pro karty
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observer pro header
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            // Description se zobrazí s delayem
            setTimeout(() => setDescriptionVisible(true), 600);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Registrace observers
    cardsRef.current.forEach((card) => {
      if (card) cardsObserver.observe(card);
    });

    if (headerRef.current) headerObserver.observe(headerRef.current);

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) cardsObserver.unobserve(card);
      });
      if (headerRef.current) headerObserver.unobserve(headerRef.current);
    };
  }, [isDesktop]);

  return (
    <section className="relative bg-[#0f172a] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Čisté pozadí bez gradientních prvků */}
      <BackgroundAnimation isDesktop={isDesktop} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centrovaný nadpis sekce - s animacemi */}
        <div 
          ref={headerRef}
          className="relative py-6 flex flex-col items-center justify-center text-center mb-8"
        >
          {/* Ozdobné prvky kolem nadpisu */}
          <div className={`relative inline-flex flex-col items-center transition-all duration-1000 ${
            isDesktop 
              ? `${headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`
              : `${isVisible ? 'opacity-100' : 'opacity-0'}`
          }`}>
            {/* Horní dekorační linka s animací */}
            <div className={`mb-3 flex items-center transition-all duration-800 delay-200 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`
                : 'opacity-100'
            }`}>
              <div className="h-[1px] w-16 bg-gray-700"></div>
              <div className="mx-3 text-orange-500 font-bold">[]</div>
              <div className="h-[1px] w-16 bg-gray-700"></div>
            </div>
            
            {/* Hlavní nadpis s rozšířenými animacemi */}
            <h2 className={`text-5xl font-extrabold tracking-tight text-white relative inline-block mb-2 transition-all duration-1200 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-1'}`
                : 'opacity-100'
            }`} style={{ transitionDelay: isDesktop ? '400ms' : '0ms' }}>
              Mé Projekty
            </h2>
            
            {/* Oranžová podtržení s plynulou animací */}
            <div className={`h-[3px] w-[320px] bg-orange-500 rounded-full transition-all duration-1500 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`
                : `${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`
            }`} style={{ transitionDelay: isDesktop ? '600ms' : '1000ms' }}></div>
            
            {/* Spodní dekorační text s fade in efektem */}
            <div className={`mt-2 flex items-center transition-all duration-800 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
                : 'opacity-100'
            }`} style={{ transitionDelay: isDesktop ? '800ms' : '0ms' }}>
              <div className="text-orange-500 opacity-70">{'//'}</div>
              <div className="mx-3 text-gray-400 uppercase text-sm tracking-widest">REFERENCE A UKÁZKY</div>
              <div className="text-orange-500 opacity-70">{'//'}</div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto text-center leading-relaxed">
          Prohlédněte si výběr z mých nejúspěšnějších projektů. 
          Každý projekt je navržen s důrazem na <span className="text-orange-400 font-semibold">funkčnost, estetiku a výsledky</span>. 
          Ať už jde o e-shop, firemní web nebo mobilní aplikaci, vždy se zaměřuji na to, 
          aby finální řešení přineslo <span className="text-white font-medium">měřitelnou hodnotu</span>.
        </p>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              data-index={index}
              className={`relative group transition-all duration-700 ${
                isDesktop 
                  ? `hover:-translate-y-4 ${visibleCards[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`
                  : `${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }`}
              style={{ 
                transitionDelay: isDesktop 
                  ? `${visibleCards[index] ? index * 200 : 0}ms`
                  : `${500 + index * 200}ms` 
              }}
            >
              {/* Holografický outer glow - pouze na desktop při hover */}
              {isDesktop && (
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              )}
              
              {/* Hlavní futuristická karta */}
              <div className={`relative bg-slate-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 shadow-lg h-full flex flex-col ${
                isDesktop ? 'group-hover:border-cyan-400/50' : ''
              }`}>
                
                {/* Animovaný tech border - pouze na desktop */}
                {isDesktop && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-transparent to-purple-500/30" 
                         style={{ animation: 'border-pulse 3s ease-in-out infinite' }}></div>
                  </div>
                )}
                
                {/* Horní tech panel */}
                <div className="relative p-4 bg-slate-800/50 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    {/* Status indikátory */}
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                    
                    {/* Kategorie chip */}
                    <div className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-400/30 text-xs text-cyan-300 font-mono tracking-wider">
                      {project.category.toUpperCase()}
                    </div>
                  </div>
                </div>
                
                {/* Obrázek container */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  {/* Čistý projekt obrázek */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Hlavní content area */}
                <div className="p-6 relative flex-grow flex flex-col">
                  {/* Project Title s cyber efektem - pouze na desktop */}
                  <h3 className={`text-xl font-bold mb-3 text-white transition-colors duration-300 relative ${
                    isDesktop ? 'group-hover:text-cyan-300' : ''
                  }`}>
                    <span className="relative z-10">{project.title}</span>
                    {isDesktop && (
                      <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                    )}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech stack s chip designem - hover pouze na desktop */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-md border border-slate-500/30 font-mono transition-all duration-300 ${
                          isDesktop ? 'hover:border-cyan-400/50 hover:text-cyan-300' : ''
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-orange-600/30 text-orange-300 rounded-md border border-orange-400/50 font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results panel s console stylem */}
                  <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400 tracking-wider">SYSTEM.OUTPUT</span>
                    </div>
                    <div className="text-green-300 text-sm font-medium font-mono">
                      {project.result}
                    </div>
                  </div>
                </div>
                
                {/* Dolní tech footer */}
                <div className="px-6 py-3 bg-slate-800/30 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>PROJECT_ID: {String(index + 1).padStart(3, '0')}</span>
                    <span className="text-cyan-400">STATUS: ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modernější CTA sekce */}
        <div className={`text-center mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '900ms' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Pojďme spolupracovat na vašem projektu!
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Máte nápad? Proměňmo ho společně v realitu.
            </p>
            
            <Link href="/kontakt">
              <button className="relative bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl px-8 py-4 overflow-hidden group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center font-bold text-white text-lg">
                  <span>Kontaktujte Mě</span>
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* CSS pro animace a efekty */}
      <style jsx>{`
        @keyframes border-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection