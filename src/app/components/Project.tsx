"use client"

import React, { useEffect, useState } from "react"
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
    technologies: ["Shoptet", "CSS/SCSS", "JavaScript", "HTML5", ],
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

const ProjectsSection = () => {
  // State pro postupné zobrazení prvků
  const [isVisible, setIsVisible] = useState(false);
  
  // Nastavíme prvky jako viditelné po montáži komponenty
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#0A0F23] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Futuristické pozadí a efekty */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Digitální mřížka - jemnější a modernější */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        
        {/* Digitální kruhy a dekorace - hidden on mobile */}
        <div className="absolute top-1/4 left-0 w-[200px] h-[200px] border border-blue-500/10 rounded-full opacity-20 hidden md:block"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] border border-orange-500/10 rounded-full opacity-20 hidden md:block"></div>
        
        {/* Světelné spoty - subtilnější - hidden on mobile */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full hidden md:block"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 blur-[180px] rounded-full hidden md:block"></div>
        
        {/* Pohyblivá skenující linie */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              animation: 'scan 8s linear infinite',
              top: '0%'
            }}
          ></div>
        </div>
        
        {/* Tech dots - digitální částice */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`tech-dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-500/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
              animation: `pulse-fade ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centrovaný nadpis sekce - zmenšené mezery */}
        <div className="relative py-6 flex flex-col items-center justify-center text-center mb-8">
          {/* Ozdobné prvky kolem nadpisu */}
          <div className={`relative inline-flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Horní dekorační linka */}
            <div className="mb-3 flex items-center">
              <div className="h-[1px] w-16 bg-gray-700"></div>
              <div className="mx-3 text-orange-500 font-bold">[]</div>
              <div className="h-[1px] w-16 bg-gray-700"></div>
            </div>
            
            {/* Hlavní nadpis */}
            <h2 className="text-5xl font-extrabold tracking-tight text-white relative inline-block mb-2">
              Mé Projekty
            </h2>
            
            {/* Oranžová podtržení */}
            <div className={`h-[3px] w-[320px] bg-orange-500 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
            
            {/* Spodní dekorační text */}
            <div className="mt-2 flex items-center">
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
              className={`relative group transition-all duration-700 hover:-translate-y-4
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Holografický outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              {/* Hlavní futuristická karta */}
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-600/30 group-hover:border-cyan-400/50 transition-all duration-500 shadow-2xl h-full flex flex-col">
                
                {/* Animovaný tech border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-transparent to-purple-500/30" 
                       style={{ animation: 'border-pulse 3s ease-in-out infinite' }}></div>
                </div>
                
                {/* Horní tech panel */}
                <div className="relative p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-b border-slate-600/30">
                  <div className="flex items-center justify-between">
                    {/* Status indikátory */}
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                    
                    {/* Kategorie chip */}
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 text-xs text-cyan-300 font-mono tracking-wider">
                      {project.category.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Tech grid pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 52%)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                
                {/* Holografický obrázek container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                  {/* Hexagon overlay pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300bcd4' fill-opacity='0.1'%3E%3Cpolygon points='30,0 45,15 45,45 30,60 15,45 15,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}></div>
                  
                  {/* Skenující laser linky */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                         style={{ animation: 'scan-horizontal 4s linear infinite', top: '30%' }}></div>
                    <div className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                         style={{ animation: 'scan-vertical 4s linear infinite', left: '70%' }}></div>
                  </div>
                  
                  {/* Projekt obrázek s hologram efektem */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Hologram glitch overlay - removed for better image visibility */}
                  
                  {/* Tech corner brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60"></div>
                </div>
                
                {/* Hlavní content area */}
                <div className="p-6 relative flex-grow flex flex-col">
                  {/* Data stream efekt */}
                  <div className="absolute top-0 right-0 w-20 h-full opacity-10 overflow-hidden">
                    <div className="text-xs font-mono text-cyan-400 leading-3 transform rotate-90 origin-center whitespace-nowrap"
                         style={{ animation: 'data-stream 8s linear infinite' }}>
                      01001100 01101111 01110010 01100101 01101101
                    </div>
                  </div>
                  
                  {/* Project Title s cyber efektem */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 relative">
                    <span className="relative z-10">{project.title}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech stack s chip designem */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-gray-300 rounded-md border border-slate-500/30 font-mono hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-orange-600/30 to-orange-500/30 text-orange-300 rounded-md border border-orange-400/50 font-mono">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results panel s console stylem */}
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4 border-l-4 border-green-400">
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
                <div className="px-6 py-3 bg-gradient-to-r from-slate-800/30 to-slate-700/30 border-t border-slate-600/30">
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
              Máte nápad? Proměňme ho společně v realitu.
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes pulse-fade {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        
        @keyframes border-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        
        @keyframes border-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes data-stream {
          0% { transform: translateX(-100%) rotate(90deg); }
          100% { transform: translateX(100%) rotate(90deg); }
        }
        
        @keyframes arrow-move {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        .pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection