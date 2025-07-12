"use client"

import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Veterinární Ordinace",
    description: "Webová aplikace pro veterinární ordinaci s rezervačním systémem a správou klientů.",
    category: "Web Development",
    technologies: [".NET Core", "C#", "HTML", "CSS", "JavaScript"],
    image: "/imgs/veterina.jpg",
    link: "https://veterinagottwaldova.cz",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio AI Konzultanta",
    description: "Moderní portfolio kombinující čistý design s interaktivními prvky a 3D vizualizací.",
    category: "Web Design",
    technologies: ["React", "Next.js", "Tailwind CSS", "Three.js"],
    image: "/imgs/ai-andrt.jpg",
    link: "https://www.ai-andrt.cz",
    featured: false
  },
  {
    id: 3,
    title: "Filmová Databáze",
    description: "Aplikace pro vyhledávání filmů s využitím externího API a pokročilými filtry.",
    category: "Web App",
    technologies: ["React", "Tailwind CSS", "REST API"],
    image: "/imgs/film.jpg",
    link: "https://movieapp-mu-gilt.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Království Zdraví",
    description: "Komplexní e-shop řešení na platformě Shoptet s custom úpravami designu a funkcionalit.",
    category: "E-commerce",
    technologies: ["Shoptet", "HTML", "CSS", "JavaScript"],
    image: "/imgs/eshop.jpg",
    link: "https://www.kralostvizdravi.cz",
    featured: true
  },
  {
    id: 5,
    title: "Účetní Systém Pro",
    description: "Komplexní účetní software pro malé a střední firmy s automatizací fakturace a reporting.",
    category: "Business App",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    image: "/imgs/ucet.jpg",
    link: "https://accounting-pro-demo.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Last Message",
    description: "Osobní projekt zaměřený na uchování vzpomínek a vztahů prostřednictvím vzkazů pro vaše blízké.",
    category: "Personal Project",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/imgs/last.jpg",
    link: "https://lastmessage-personal.vercel.app",
    featured: false
  }
];

// Futuristické pozadí
interface BackgroundAnimationProps {
  isDesktop: boolean;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ isDesktop }) => {
  if (!isDesktop) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Floating tech elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Subtle code overlay */}
      <div className="absolute inset-0 opacity-[0.015] font-mono text-[0.6rem] text-orange-400 overflow-hidden select-none">
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
    </div>
  );
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [headerVisible, setHeaderVisible] = useState<boolean>(false);
  const cardsRef = useRef<(HTMLDivElement | null)[]>(new Array(projects.length).fill(null));
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsDesktop(window.innerWidth >= 1024);
    setVisibleCards(new Array(projects.length).fill(false) as boolean[]);
    
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

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev: boolean[]) => {
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

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '50px 0px -50px 0px'
      }
    );

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
    <section className="relative bg-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Futuristické pozadí */}
      <BackgroundAnimation isDesktop={isDesktop} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header sekce */}
        <div 
          ref={headerRef}
          className="relative py-6 flex flex-col items-center justify-center text-center mb-8"
        >
          <div className={`relative inline-flex flex-col items-center transition-all duration-1000 ${
            isDesktop 
              ? `${headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`
              : `${isVisible ? 'opacity-100' : 'opacity-0'}`
          }`}>
            {/* Horní dekorační linka s animací */}
            <div className={`mb-3 flex items-center transition-all duration-800 delay-200 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`
                : 'opacity-100'
            }`}>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
              <div className="mx-3 text-orange-500 font-bold">[]</div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </div>
            
            {/* Hlavní nadpis */}
            <h2 className={`text-5xl font-extrabold tracking-tight text-white relative inline-block mb-2 transition-all duration-1200 ${
              isDesktop 
                ? `${headerVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-1'}`
                : 'opacity-100'
            }`} style={{ transitionDelay: isDesktop ? '400ms' : '0ms' }}>
              Mé Projekty
            </h2>
            
            {/* Oranžová podtržení s plynulou animací */}
            <div className={`h-[3px] w-[320px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 rounded-full transition-all duration-1500 ${
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
              <div className="mx-3 text-gray-400 uppercase text-sm tracking-widest">PORTFOLIO</div>
              <div className="text-orange-500 opacity-70">{'//'}</div>
            </div>
          </div>
        </div>
        
        {/* Popis sekce */}
        <p className={`text-gray-300 text-lg mb-8 max-w-3xl mx-auto text-center leading-relaxed transition-all duration-700 ${
          isDesktop 
            ? `${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`
            : `${isVisible ? 'opacity-100' : 'opacity-0'}`
        }`} style={{ transitionDelay: isDesktop ? '1000ms' : '500ms' }}>
          Vybral jsem ukázky projektů, které kombinují moderní technologie s optimalizovaným designem a přívětivým uživatelským rozhraním.
        </p>

        {/* Grid projektů - 2x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => { cardsRef.current[index] = el; }}
              data-index={index}
              className={`transition-all duration-700 ${
                isDesktop 
                  ? `${visibleCards[index] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`
                  : `${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
              }`}
              style={{ 
                transitionDelay: isDesktop 
                  ? `${visibleCards[index] ? index * 150 : 0}ms`
                  : `${500 + index * 200}ms` 
              }}
            >
              {/* Futuristická projekt karta */}
              <div className="relative h-full group">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-cyan-500/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Main card */}
                <div className="relative bg-slate-900/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700/50 h-full flex flex-col group-hover:border-orange-500/50 transition-all duration-500">
                  
                  {/* Scanning line animation */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-10"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Obrázek sekce s 16:9 aspect ratio */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900/80">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                    
                    {/* Tech overlay - bez hover efektu */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-slate-900/10"></div>
                    
                    {/* Project number with futuristic design */}
                    <div className="absolute bottom-4 left-4">
                      <div className="relative">
                        <div className="bg-slate-900/80 backdrop-blur-md border border-orange-500/30 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-lg group-hover:border-orange-400 group-hover:text-orange-300 transition-all duration-300">
                          <span className="font-mono">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="absolute inset-0 bg-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content sekce */}
                  <div className="p-6 flex-1 flex flex-col bg-slate-900/60 backdrop-blur-sm relative">
                    {/* Tech pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div 
                        style={{
                          backgroundImage: 'linear-gradient(45deg, rgba(249,115,22,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(249,115,22,0.1) 25%, transparent 25%)',
                          backgroundSize: '20px 20px'
                        }}
                        className="w-full h-full"
                      />
                    </div>
                    
                    {/* Kategorie */}
                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <p className="text-orange-400 text-xs font-medium uppercase tracking-wider flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                        {project.category}
                      </p>
                      
                      {/* Status indicator */}
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                        <span className="text-green-400 text-xs font-mono">LIVE</span>
                      </div>
                    </div>
                    
                    {/* Název projektu */}
                    <h3 className="relative z-10 text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Popis */}
                    <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-4 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Technologie */}
                    <div className="relative z-10 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-slate-800/60 border border-slate-600/30 text-slate-300 px-3 py-1.5 rounded-lg font-mono group-hover:border-orange-500/20 group-hover:bg-slate-800/80 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-orange-900/30 border border-orange-500/30 text-orange-300 px-3 py-1.5 rounded-lg font-mono group-hover:bg-orange-900/50 transition-all duration-300">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA sekce */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '1200ms' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Pojďme spolupracovat na vašem projektu!
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Máte nápad? Proměňmo ho společně v realitu.
            </p>
            
            <a href="/kontakt">
              <button className="relative bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl px-8 py-4 overflow-hidden group transition-all duration-300 shadow-lg border border-orange-500/20 hover:border-orange-400">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Tech scanning effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                
                {/* Corner tech accents */}
                <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-orange-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-orange-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-orange-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-orange-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <div className="relative z-10 flex items-center justify-center font-bold text-white text-lg">
                  <span>Kontaktujte Mě</span>
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;