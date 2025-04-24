"use client";

import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBakckground"; // Importujte vaši komponentu s částicemi

// Definice typů
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  image: string;
  link: string;
  invertLayout: boolean;
}

interface FuturisticSectionTitleProps {
  children: React.ReactNode;
}

interface TechBadgeProps {
  tech: string;
  index: number;
}

interface FuturisticButtonProps {
  href: string;
  children: React.ReactNode;
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
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute -bottom-4 -right-8 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white relative inline-block">
        {children}
        <motion.div 
          className="absolute left-0 bottom-[-10px] h-[6px] bg-orange-500 w-full rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
      </h2>
      
      <motion.div 
        className="mt-2 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
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

// Komponenta pro futuristické tlačítko
const FuturisticButton: React.FC<FuturisticButtonProps> = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Světelný efekt při hover */}
      <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
      </span>
      <span className="relative z-10 flex items-center">
        {children}
        <motion.svg 
          className="ml-2 w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          initial={{ x: 0 }}
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </span>
    </motion.a>
  );
};

// Komponenta pro projekt
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const technologies = project.technologies.split(", ");
  
  // Varianty pro animace
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-10"
    >
      {!project.invertLayout ? (
        <>
          {/* Image on the left */}
          <motion.div 
            className="relative overflow-hidden rounded-lg group"
            variants={itemVariants}
          >
            {/* Project number */}
            <div className="absolute top-4 left-4 bg-orange-500 bg-opacity-75 text-white text-sm font-bold px-3 py-1 rounded-full z-20 backdrop-blur-sm">
              #{project.id}
            </div>
            
            {/* Futuristické rohy */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            
            {/* Skenující efekt */}
            <motion.div
              className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
              initial={{ top: "-10%" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 1,
                ease: "linear"
              }}
            />
            
            {/* Obrázek */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg lg:max-h-[800px] pointer-events-none relative transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Overlay efekt při hoveru */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          {/* Text on the right */}
          <div className="space-y-8">
            <motion.h3 
              className="text-4xl font-extrabold text-white relative inline-block"
              variants={itemVariants}
            >
              {project.title}
              <motion.div 
                className="absolute left-0 bottom-[-6px] h-[3px] w-1/3 bg-gradient-to-r from-orange-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap"
              variants={itemVariants}
            >
              {technologies.map((tech, techIndex) => (
                <TechBadge key={techIndex} tech={tech} index={techIndex} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticButton href={project.link}>
                Mrknout na web
              </FuturisticButton>
            </motion.div>
          </div>
        </>
      ) : (
        <>
          {/* Text on the left */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.h3 
              className="text-4xl font-extrabold text-white relative inline-block"
              variants={itemVariants}
            >
              {project.title}
              <motion.div 
                className="absolute left-0 bottom-[-6px] h-[3px] w-1/3 bg-gradient-to-r from-orange-500 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {project.description}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap"
              variants={itemVariants}
            >
              {technologies.map((tech, techIndex) => (
                <TechBadge key={techIndex} tech={tech} index={techIndex} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FuturisticButton href={project.link}>
                Mrknout na web
              </FuturisticButton>
            </motion.div>
          </div>
          
          {/* Image on the right */}
          <motion.div 
            className="order-1 lg:order-2 relative overflow-hidden rounded-lg group"
            variants={itemVariants}
          >
            {/* Project number */}
            <div className="absolute top-4 left-4 bg-orange-500 bg-opacity-75 text-white text-sm font-bold px-3 py-1 rounded-full z-20 backdrop-blur-sm">
              #{project.id}
            </div>
            
            {/* Futuristické rohy */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
            
            {/* Skenující efekt */}
            <motion.div
              className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
              initial={{ top: "-10%" }}
              animate={{ top: ["0%", "100%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 1,
                ease: "linear"
              }}
            />
            
            {/* Obrázek */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg lg:max-h-[800px] pointer-events-none relative transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Overlay efekt při hoveru */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </>
      )}
    </motion.div>
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
      
      {/* Dark blurred gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-70 blur-lg"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-t from-transparent via-gray-700 to-transparent opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-50 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FuturisticSectionTitle>Moje Projekty</FuturisticSectionTitle>
          <motion.p 
            className="text-gray-400 text-xl max-w-2xl mx-auto leading-loose mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Vybrané ukázky práce, v nichž kombinuji webdesign, moderní technologie a
            uživatelskou přívětivost. Můžete mít svůj projekt také!
          </motion.p>
        </div>

        {/* Spojovací linie mezi projekty - vertikální časová osa */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[470px] bottom-40 w-px bg-gradient-to-b from-orange-500/20 via-orange-500/50 to-orange-500/20 hidden lg:block"></div>

        {/* Projects List */}
        <div className="space-y-28">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Final CTA */}
        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Máte nápad na projekt?</h3>
            <motion.div 
              className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-orange-500/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-orange-500/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </div>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Potřebujete webové stránky, e-shop nebo úpravu stávajícího webu? Nezávazně si popovídáme o vašich představách.
          </p>
          <FuturisticButton href="/kontakt">
            Pojďme na to!
          </FuturisticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;