"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBakckground";

// Definice typů
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
  invertLayout: boolean;
  achievements?: string[]; // Přidány úspěchy projektu
  stats?: { value: string; label: string }[]; // Přidány statistiky projektu
}

interface FuturisticSectionTitleProps {
  children: React.ReactNode;
}

interface TechBadgeProps {
  tech: string;
  index: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Veterinární Ordinace",
    description:
      "Webová aplikace vytvořená na míru pro veterinární ordinaci, která umožňuje snadnou správu klientů a plánování schůzek.",
    technologies: ".NET Core, C#, HTML, CSS, JavaScript",
    image: "/imgs/veterina.png",
    link: "https://veterinagottwaldova.cz",
    invertLayout: false,
    achievements: [
      "Zvýšení online rezervací o 45%",
      "Automatizace správy pacientů",
      "Jednoduchý systém notifikací pro klienty"
    ],
    stats: [
      { value: "45%", label: "Nárůst rezervací" },
      { value: "98%", label: "Spokojenost klientů" },
      { value: "32%", label: "Úspora času personálu" }
    ]
  },
  {
    id: 2,
    title: "Portfolio AI Konzultanta",
    description:
      "Moderní portfolio, které kombinuje čistý design s interaktivními prvky a ukázkami AI projektů.",
    technologies: "React, Next.js, Tailwind CSS, Three.js",
    image: "/imgs/ai-andrt.png",
    link: "https://www.ai-andrt.cz",
    invertLayout: true,
    achievements: [
      "Intuitivní prezentace AI projektů",
      "Interaktivní 3D vizualizace",
      "Komplexní integrované API pro správu obsahu"
    ],
    stats: [
      { value: "3D", label: "Vizualizace projektů" },
      { value: "85%", label: "Konverzní míra" },
      { value: "<2s", label: "Čas načtení" }
    ]
  },
  {
    id: 3,
    title: "Filmová Databáze",
    description:
      "Aplikace umožňující vyhledávání, filtrování a sledování informací o filmech pomocí API.",
    technologies: "React, Tailwind CSS, REST API",
    image: "/imgs/movie.png",
    link: "https://movieapp-mu-gilt.vercel.app",
    invertLayout: false,
    achievements: [
      "Integrace s The Movie Database API",
      "Pokročilé filtry a vyhledávání",
      "Responsivní design pro všechna zařízení"
    ],
    stats: [
      { value: "10k+", label: "Filmů v databázi" },
      { value: "4ms", label: "Odezva vyhledávání" },
      { value: "99%", label: "Přesnost výsledků" }
    ]
  },
  {
    id: 4,
    title: "Poslední Vzkaz",
    description:
      "Osobní projekt zaměřený na uchování vzpomínek a vztahů prostřednictvím vzkazů pro vaše blízké.",
    technologies: "React, Node.js, MongoDB, Tailwind CSS",
    image: "/imgs/last-message.png",
    link: "https://last-message-liard.vercel.app",
    invertLayout: true,
    achievements: [
      "Šifrování end-to-end pro maximální soukromí",
      "Časově řízený systém doručování zpráv",
      "Multimédia a uchování digitálního odkazu"
    ],
    stats: [
      { value: "E2E", label: "Šifrování" },
      { value: "∞", label: "Dlouhodobá archivace" },
      { value: "100%", label: "Soukromí" }
    ]
  },
  {
    id: 5,
    title: "Království zdraví",
    description:
      "Chcete vlastní eshop, ale nevíte jak na to? Pomůžu vám vytvořit pomocí Shoptetu váš první eshop. Navíc umím kódovat úpravy vzhledu i funkcí!",
    technologies: "Shoptet programátor",
    image: "/imgs/kz.png",
    link: "https://www.kralostvizdravi.cz",
    invertLayout: false,
    achievements: [
      "Komplexní optimalizace UX designu",
      "Automatizace procesů objednávek",
      "Návrh a implementace mobilního rozhraní"
    ],
    stats: [
      { value: "120%", label: "Nárůst konverzí" },
      { value: "18k+", label: "Aktivních uživatelů" },
      { value: "-35%", label: "Snížení míry opuštění" }
    ]
  },
];

// Komponenta pro futuristický nadpis sekce
const FuturisticSectionTitle: React.FC<FuturisticSectionTitleProps> = ({ children }) => {
  return (
    <div className="relative inline-flex flex-col items-center">
      <motion.div 
        className="absolute -top-4 -left-8 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div 
        className="absolute -bottom-4 -right-8 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.4 }}
      />
      
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white relative inline-block">
        {children}
        <motion.div 
          className="absolute left-0 bottom-[-10px] h-[6px] bg-gradient-to-r from-orange-500 to-orange-400/40 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </h2>
      
      <motion.div 
        className="mt-2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-px w-8 bg-orange-500/40"></div>
        <div className="mx-2 text-xs text-orange-500/70 font-mono">PORTFOLIO</div>
        <div className="h-px w-8 bg-orange-500/40"></div>
      </motion.div>
    </div>
  );
};

// Komponenta pro tech badge
const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => {
  return (
    <motion.span
      className="inline-block px-2 py-1 bg-slate-800/80 text-orange-400 text-xs rounded-md mr-2 mb-2 border border-orange-500/20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
    >
      {tech}
    </motion.span>
  );
};

// Komponenta pro statistiku projektu
const ProjectStat = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className="flex flex-col items-center bg-slate-800/40 border border-orange-500/10 px-3 py-2 rounded-lg">
      <span className="text-orange-400 text-2xl font-bold">{value}</span>
      <span className="text-slate-400 text-xs">{label}</span>
    </div>
  );
};

// Komponenta pro úspěch projektu
const ProjectAchievement = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="mr-2 text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-slate-300">{text}</span>
    </div>
  );
};

// Komponenta pro projekt
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const technologies = project.technologies.split(", ");
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 relative">
      {/* Futuristická dekorativní linie */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      
      {!project.invertLayout ? (
        <>
          {/* Image on the left */}
          <div 
            className="relative overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            
            {/* Project number */}
            <div className="absolute top-4 left-4 bg-slate-800/80 border border-orange-500/30 text-orange-400 text-sm font-mono px-3 py-1 rounded-md z-20 backdrop-blur-sm flex items-center">
              <span className="mr-1 opacity-70">PROJECT</span>
              <span className="font-bold">{String(project.id).padStart(2, '0')}</span>
            </div>
            
            {/* Futuristické rohy */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            
            {/* Skenující efekt - pouze na desktopu */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10 hidden lg:block"
              initial={{ top: "-10%" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 0.5,
                ease: "linear"
              }}
            />
            
            {/* Obrázek */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg lg:max-h-[600px] pointer-events-none relative transition-transform duration-1000 scale-100 group-hover:scale-105"
            />
            
            {/* Overlay efekt s odkazem */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 transition-opacity duration-300 flex flex-col items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold border border-orange-500/30 px-4 py-2 rounded-md bg-slate-900/40 backdrop-blur-sm hover:bg-orange-500/20 transition-colors"
              >
                <div className="flex items-center">
                  <span>Navštívit projekt</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Text on the right */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-extrabold text-white relative inline-block">
                {project.title}
                <div className="absolute left-0 bottom-[-6px] h-[3px] w-1/3 bg-gradient-to-r from-orange-500 to-transparent" />
              </h3>
              
              {/* Projekt statistiky */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {project.stats?.map((stat, index) => (
                  <ProjectStat key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed border-l-2 border-orange-500/30 pl-4">
              {project.description}
            </p>
            
            {/* Klíčové úspěchy */}
            <div className="space-y-2">
              <div className="text-sm text-orange-400 font-semibold flex items-center">
                <div className="w-4 h-px bg-orange-500 mr-2"></div>
                KLÍČOVÉ ÚSPĚCHY
              </div>
              <div className="pl-2">
                {project.achievements?.map((achievement, index) => (
                  <ProjectAchievement key={index} text={achievement} />
                ))}
              </div>
            </div>
            
            {/* Technologie */}
            <div>
              <div className="text-sm text-orange-400 font-semibold flex items-center mb-2">
                <div className="w-4 h-px bg-orange-500 mr-2"></div>
                TECHNOLOGIE
              </div>
              <div className="flex flex-wrap">
                {technologies.map((tech, techIndex) => (
                  <TechBadge key={techIndex} tech={tech} index={techIndex} />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text on the left */}
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <h3 className="text-4xl font-extrabold text-white relative inline-block">
                {project.title}
                <div className="absolute left-0 bottom-[-6px] h-[3px] w-1/3 bg-gradient-to-r from-orange-500 to-transparent" />
              </h3>
              
              {/* Projekt statistiky */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {project.stats?.map((stat, index) => (
                  <ProjectStat key={index} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed border-l-2 border-orange-500/30 pl-4">
              {project.description}
            </p>
            
            {/* Klíčové úspěchy */}
            <div className="space-y-2">
              <div className="text-sm text-orange-400 font-semibold flex items-center">
                <div className="w-4 h-px bg-orange-500 mr-2"></div>
                KLÍČOVÉ ÚSPĚCHY
              </div>
              <div className="pl-2">
                {project.achievements?.map((achievement, index) => (
                  <ProjectAchievement key={index} text={achievement} />
                ))}
              </div>
            </div>
            
            {/* Technologie */}
            <div>
              <div className="text-sm text-orange-400 font-semibold flex items-center mb-2">
                <div className="w-4 h-px bg-orange-500 mr-2"></div>
                TECHNOLOGIE
              </div>
              <div className="flex flex-wrap">
                {technologies.map((tech, techIndex) => (
                  <TechBadge key={techIndex} tech={tech} index={techIndex} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Image on the right */}
          <div 
            className="order-1 lg:order-2 relative overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* HexaFrame kolem projektu */}
            <div className="absolute inset-0 z-10">
              
            </div>
            
            {/* Project number */}
            <div className="absolute top-4 left-4 bg-slate-800/80 border border-orange-500/30 text-orange-400 text-sm font-mono px-3 py-1 rounded-md z-20 backdrop-blur-sm flex items-center">
              <span className="mr-1 opacity-70">PROJECT</span>
              <span className="font-bold">{String(project.id).padStart(2, '0')}</span>
            </div>
            
            {/* Futuristické rohy */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            
            {/* Skenující efekt - pouze na desktopu */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10 hidden lg:block"
              initial={{ top: "-10%" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 0.5,
                ease: "linear"
              }}
            />
            
            {/* Obrázek */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg lg:max-h-[600px] pointer-events-none relative transition-transform duration-1000 scale-100 group-hover:scale-105"
            />
            
            {/* Overlay efekt s odkazem */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 transition-opacity duration-300 flex flex-col items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold border border-orange-500/30 px-4 py-2 rounded-md bg-slate-900/40 backdrop-blur-sm hover:bg-orange-500/20 transition-colors"
              >
                <div className="flex items-center">
                  <span>Navštívit projekt</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </>
      )}
      
      {/* Futuristická dekorativní linie */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0F172A] py-24 px-8 text-orange-600"
    >
      {/* Přidejte komponentu s částicemi */}
      <ParticlesBackground />
      
      {/* Cyberpunk grid - futuristická mřížka na pozadí */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-70"></div>
        
        {/* Horizontální linky */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`h-line-${i}`} 
            className="absolute left-0 right-0 h-px bg-orange-500/5"
            style={{ top: `${10 * i}%` }}
          />
        ))}
        
        {/* Vertikální linky */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={`v-line-${i}`} 
            className="absolute top-0 bottom-0 w-px bg-orange-500/5"
            style={{ left: `${10 * i}%` }}
          />
        ))}
        
        {/* Dekorativní kruhy */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        
        {/* Futuristické nody */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full"
            style={{ 
              top: `${20 + Math.random() * 60}%`, 
              left: `${20 + Math.random() * 60}%`,
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.3)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FuturisticSectionTitle>Moje Projekty</FuturisticSectionTitle>
          <motion.p 
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-loose mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Vybral jsem ukázky projektů, které kombinují moderní technologie, optimalizovaný design a přívětivé uživatelské rozhraní.
            Každý projekt přináší unikátní hodnotu klientovi i koncovým uživatelům.
          </motion.p>
        </div>

        {/* Projects List - odstraněny on-scroll efekty */}
        <motion.div 
          className="space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {/* Final CTA - vylepšený */}
        <div className="relative mt-32 bg-slate-900/50 border border-orange-500/10 rounded-xl p-8 backdrop-blur-sm">
          {/* Dekorativní prvky */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500/60"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500/60"></div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="relative inline-block mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Máte vlastní nápad na projekt?</h3>
              <div className="absolute top-0 -left-3 w-1 h-full bg-orange-500"></div>
            </div>
            <p className="text-gray-400 mb-8">
              Specializuji se na komplexní webové aplikace, e-shopy a interaktivní prezentace. 
              Společně můžeme váš nápad proměnit v digitální realitu. První konzultace je zdarma.
            </p>
            <a 
              href="/kontakt" 
              className="relative inline-flex items-center px-6 py-3 bg-slate-800 text-orange-400 font-medium rounded-md overflow-hidden border border-orange-500/30 hover:bg-slate-700/80 transition-colors group"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-2">Konzultace zdarma</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;