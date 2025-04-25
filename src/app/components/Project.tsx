"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

// Příklady projektů
const projects = [
  {
    title: "E-shop pro módní značku",
    description: "Kompletní řešení e-commerce platformy s automatizovaným zpracováním objednávek a personalizací pro zákazníky.",
    category: "E-commerce",
    technologies: ["React", "Next.js", "Stripe", "MongoDB"],
    image: "/api/placeholder/600/400",
    result: "42% nárůst konverzí, 68% snížení míry opuštění košíku"
  },
  {
    title: "Rezervační systém pro restauraci",
    description: "Intuitivní rezervační systém s automatickými upomínkami, integrací s POS a správou stolu v reálném čase.",
    category: "Webová aplikace",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Twilio API"],
    image: "/api/placeholder/600/400",
    result: "32% méně nevyužitých rezervací, 27% nárůst obsazenosti"
  },
  {
    title: "Firemní intranet",
    description: "Komplexní intranetový systém s moduly pro HR, správu dokumentů a interní komunikaci.",
    category: "Podnikový software",
    technologies: ["React", "GraphQL", "AWS", "Firebase Auth"],
    image: "/api/placeholder/600/400",
    result: "45% úspora času při administrativních procesech"
  }
]

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
        
        {/* Digitální kruhy a dekorace */}
        <div className="absolute top-1/4 left-0 w-[200px] h-[200px] border border-blue-500/10 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] border border-orange-500/10 rounded-full opacity-20"></div>
        
        {/* Světelné spoty - subtilnější */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 blur-[180px] rounded-full"></div>
        
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
        {/* Centrovaný nadpis sekce */}
        <div className="relative py-8 flex flex-col items-center justify-center text-center mb-16">
          {/* Ozdobné prvky kolem nadpisu */}
          <div className={`relative inline-flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Horní dekorační linka */}
            <div className="mb-4 flex items-center">
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
            <div className="mt-3 flex items-center">
              <div className="text-orange-500 opacity-70">//</div>
              <div className="mx-3 text-gray-400 uppercase text-sm tracking-widest">REFERENCE A UKÁZKY</div>
              <div className="text-orange-500 opacity-70">//</div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto text-center leading-relaxed">
          Prohlédněte si výběr z mých nejúspěšnějších projektů. 
          Každý projekt je navržen s důrazem na <span className="text-orange-400 font-semibold">funkčnost, estetiku a výsledky</span>. 
          Ať už jde o e-shop, firemní web nebo mobilní aplikaci, vždy se zaměřuji na to, 
          aby finální řešení přineslo <span className="text-white font-medium">měřitelnou hodnotu</span>.
        </p>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group bg-[#0F172A] shadow-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Technologický rámeček při hover */}
              <div className="absolute -inset-[0.5px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
                <div 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(249, 115, 22, 0.2), transparent)',
                    animation: 'border-flow 3s linear infinite'
                  }}
                ></div>
              </div>
              
              {/* Projekt obrázek */}
              <div className="overflow-hidden h-48 relative">
                {/* Tech overlay pro obrázek */}
                <div className="absolute inset-0 z-10 opacity-30">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-orange-500/30"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-orange-500/30"></div>
                </div>
                
                {/* Digital grid overlay pro obrázek */}
                <div 
                  className="absolute inset-0 z-10 opacity-[0.05]" 
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.2) 0.5px, transparent 0.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0.5px, transparent 0.5px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>
                
                {/* Barevný overlay pro obrázek */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-orange-500/10 mix-blend-overlay z-10"></div>
                
                {/* Obrázek projektu */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Skenující efekt při hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-20"
                ></div>
                
                {/* Technologie badge */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 p-3 bg-gradient-to-t from-[#0F172A]/95 to-transparent z-30">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs rounded-md bg-[#0F172A]/80 text-orange-100 backdrop-blur-sm border border-orange-500/30 hover:border-orange-500/60 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Obsah */}
              <div className="p-6 relative">
                {/* Corner decorators */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500/20 z-10"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/20 z-10"></div>
                
                {/* Kategorie s futuristickým designem */}
                <div className="relative inline-block px-3 py-1 rounded-md bg-gradient-to-r from-orange-600/20 to-orange-500/10 border border-orange-500/30 text-sm text-orange-400 mb-4 font-medium tracking-wide">
                  {project.category}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-md"
                  ></div>
                </div>
                
                {/* Nadpis */}
                <h3 className="text-xl font-bold mb-4 text-white">
                  <div className="relative inline-flex">
                    {project.title}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-orange-500/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    ></div>
                  </div>
                </h3>
                
                {/* Popis */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{project.description}</p>
                
                {/* Výsledky s futuristickým designem */}
                <div className="mt-auto relative">
                  {/* Svislá čára s pulzujícím efektem */}
                  <div className="absolute -left-3 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-green-500/30 via-green-500 to-green-500/30"></div>
                  
                  <div className="pl-4 relative">
                    {/* Tech dot */}
                    <div className="absolute -left-[5px] top-[10px] w-2 h-2 bg-green-500 rounded-full"></div>
                    
                    <div className="text-xs tracking-wider text-gray-400 mb-2 font-mono">VÝSLEDKY PROJEKTU</div>
                    <div className="text-green-400 font-medium">
                      {project.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Futuristické CTA */}
        <div className={`text-center mt-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
             style={{ transitionDelay: '900ms' }}>
          <h3 className="text-2xl font-bold mb-8">
            Pojďme <span className="text-orange-500">spolupracovat</span> na vašem projektu!
          </h3>
          
          <Link href="/kontakt">
            <div className="relative inline-block transition-transform hover:scale-105 active:scale-95">
              {/* Futuristický rámeček kolem tlačítka */}
              <div className="absolute -inset-1 rounded-full opacity-80 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-orange-500/50 to-orange-600/30 rounded-full"
                  style={{
                    animation: 'border-flow 2s linear infinite'
                  }}
                ></div>
              </div>
              
              {/* Záře za tlačítkem */}
              <div 
                className="absolute -inset-3 bg-orange-500/20 blur-xl rounded-full"
                style={{
                  animation: 'pulse-glow 3s ease-in-out infinite'
                }}
              ></div>
              
              {/* Tlačítko s futuristickým designem */}
              <button className="relative px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden rounded-full group shadow-lg">
                {/* Zaoblené rohy tlačítka */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-full"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-full"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-full"></div>
                
                {/* Efekt světla při hoveru */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"
                  ></div>
                </div>
                
                {/* Text tlačítka */}
                <span className="relative z-10 text-white font-bold flex items-center">
                  Kontaktujte Mě
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{
                      animation: 'arrow-move 2s infinite ease-in-out'
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </Link>
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
        
        @keyframes border-flow {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
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