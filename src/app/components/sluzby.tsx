"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Globe, 
  ShoppingCart, 
  PenTool, 
  Video, 
  ActivitySquare, 
  BookOpen,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

// Definice typu pro kategorii služby
interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  hoverColor: string;
  link: string;
}

// Definice kategorií služeb
const serviceCategories: ServiceCategory[] = [
  {
    id: "websites",
    title: "Webové stránky",
    description: "Moderní, responzivní a přehledné webové stránky navržené na míru.",
    icon: Globe,
    color: "#F97316", // oranžová
    hoverColor: "#FB923C",
    link: "/sluzby/web"
  },
  {
    id: "shoptet",
    title: "Shoptet e-shop",
    description: "Kompletní řešení e-shopu na platformě Shoptet, včetně úprav šablon na míru.",
    icon: ShoppingCart,
    color: "#F97316", // oranžová
    hoverColor: "#FB923C",
    link: "/sluzby/shoptet"
  },
  {
    id: "graphics",
    title: "Grafický design",
    description: "Tvorba log, tiskovin a kompletní vizuální identity.",
    icon: PenTool,
    color: "#38BDF8", // modrá
    hoverColor: "#7DD3FC",
    link: "/sluzby/Grafika"
  },
  {
    id: "video",
    title: "Video tvorba",
    description: "Střih spotů, reklam a videí pro sociální sítě.",
    icon: Video,
    color: "#EC4899", // růžová
    hoverColor: "#F472B6",
    link: "/sluzby/videa"
  },
  {
    id: "interactive",
    title: "Interaktivní cvičení",
    description: "E‑learningové moduly pro ZŠ a SŠ: kvízy, úlohy a SCORM export.",
    icon: ActivitySquare,
    color: "#818CF8", // indigo
    hoverColor: "#A5B4FC",
    link: "/sluzby/interaktivnicviceni"
  },
  {
    id: "online",
    title: "Online kurzy",
    description: "Interaktivní online kurzy pro rozvoj vašich dovedností v webdesignu, programování a grafice.",
    icon: BookOpen,
    color: "#0EA5E9", // světle modrá
    hoverColor: "#38BDF8",
    link: "/sluzby/onlinekurzy"
  }
];

// FIXNÍ HODNOTY MÍSTO MATH.RANDOM
const particleSettings = [
  { left: 25, leftOffset: 5, delay: 1.2, duration: 9, color: "#F97316" },
  { left: 40, leftOffset: -3, delay: 2.5, duration: 10, color: "#38BDF8" },
  { left: 65, leftOffset: 4, delay: 3.8, duration: 11, color: "#F97316" },
  { left: 80, leftOffset: -2, delay: 1.9, duration: 8, color: "#38BDF8" },
  { left: 35, leftOffset: 3, delay: 4.2, duration: 12, color: "#F97316" },
  { left: 55, leftOffset: -4, delay: 2.1, duration: 9, color: "#38BDF8" },
  { left: 90, leftOffset: 2, delay: 3.4, duration: 10, color: "#F97316" },
  { left: 20, leftOffset: -3, delay: 1.8, duration: 11, color: "#38BDF8" },
  { left: 70, leftOffset: 5, delay: 2.7, duration: 9, color: "#F97316" },
  { left: 45, leftOffset: -2, delay: 3.3, duration: 10, color: "#38BDF8" },
  { left: 85, leftOffset: 4, delay: 1.5, duration: 12, color: "#F97316" },
  { left: 30, leftOffset: -5, delay: 2.9, duration: 8, color: "#38BDF8" },
  { left: 60, leftOffset: 3, delay: 3.7, duration: 11, color: "#F97316" },
  { left: 15, leftOffset: -4, delay: 1.4, duration: 9, color: "#38BDF8" },
  { left: 50, leftOffset: 2, delay: 2.6, duration: 10, color: "#F97316" }
];

// FIXNÍ HODNOTY PRO SVĚTELNÉ PRUHY
const beamSettings = [
  { width: 130, height: 1.2, color: "#F97316" },
  { width: 125, height: 1.5, color: "#38BDF8" },
  { width: 120, height: 1.3, color: "#F97316" },
  { width: 135, height: 1.1, color: "#38BDF8" },
  { width: 128, height: 1.4, color: "#F97316" }
];

// Komponenta pro futuristické animované pozadí - výraznější animace
const FuturisticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Jemná mřížka na pozadí */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />
      
      {/* Výraznější pulsující kruhy v pozadí */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Rotující velký hexagon */}
      <motion.div 
        className="absolute"
        style={{
          width: '1000px',
          height: '1000px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(249, 115, 22, 0.1)',
          opacity: 0.15
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute"
        style={{
          width: '800px',
          height: '800px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(56, 189, 248, 0.1)',
          opacity: 0.15
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Výraznější létající částice - POUŽITÍ FIXNÍCH HODNOT */}
      {particleSettings.map((particle, i) => (
        <motion.div
          key={`bright-particle-${i}`}
          className="absolute w-1 h-1 rounded-full z-10"
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            left: `${particle.left}%`,
            top: '100%',
          }}
          animate={{
            top: [null, '-10%'],
            left: [null, `${particle.left + particle.leftOffset}%`],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
            times: [0, 0.6, 1]
          }}
        />
      ))}
      
      {/* Pohyblivé světelné pruhy - POUŽITÍ FIXNÍCH HODNOT */}
      {beamSettings.map((beam, i) => {
        const topPosition = 20 + i * 15;
        const delay = i * 2;
        
        return (
          <motion.div
            key={`light-beam-${i}`}
            className="absolute"
            style={{
              width: `${beam.width}%`,
              height: `${beam.height}px`,
              left: '-50%',
              top: `${topPosition}%`,
              background: `linear-gradient(90deg, transparent, ${beam.color}50, transparent)`,
              opacity: 0.15,
              filter: 'blur(2px)'
            }}
            animate={{
              left: ['-50%', '100%'],
              opacity: [0, 0.15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
          />
        );
      })}
      
      {/* Futuristické světelné kruhy - více viditelné */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`light-circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            border: `1px solid ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.2)' : 'rgba(56, 189, 248, 0.2)'}`,
            opacity: 0.1,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Definice propů pro ServiceCategoryCard
interface ServiceCategoryCardProps {
  category: ServiceCategory;
  index: number;
}

// Futuristická karta služby - bez procent a progress baru
const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      className="relative z-10 h-full"
    >
      <Link 
        href={category.link}
        className="block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 } 
          }}
          className="relative overflow-hidden rounded-lg h-full flex flex-col"
          style={{
            boxShadow: isHovered ? `0 0 15px ${category.color}40` : 'none',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          {/* Tenký border */}
          <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
          
          {/* Tenké rohy v barvě kategorie */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: category.color }}></div>
          
          {/* Barevná linie na spodku karty - nahrazuje progress bar */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 z-10 opacity-70"
            style={{ 
              background: `linear-gradient(to right, ${category.color}, ${category.color}50, transparent)` 
            }}
          ></div>
          
          {/* Hlavní pozadí */}
          <div 
            className="relative p-6 h-full flex flex-col rounded-lg z-0 bg-[#111827]/70 backdrop-blur-sm transition-all duration-300"
          >
            {/* Barevný gradient na pozadí při hoveru */}
            <motion.div 
              className="absolute inset-0 opacity-0 pointer-events-none rounded-lg"
              style={{ 
                background: `radial-gradient(circle at center, ${category.color}15 0%, transparent 70%)` 
              }}
              animate={{ 
                opacity: isHovered ? 0.8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Ikona s podsvícením */}
            <div className="flex justify-center mb-5">
              <motion.div 
                className="relative p-3 rounded-full"
                style={{ 
                  color: category.color,
                  filter: `drop-shadow(0 0 8px ${category.color}70)`,
                  backgroundColor: `${category.color}15`
                }}
                animate={{
                  boxShadow: isHovered ? `0 0 15px ${category.color}40` : `0 0 5px ${category.color}20`,
                }}
                transition={{
                  duration: 0.3
                }}
              >
                <category.icon className="w-8 h-8" />
              </motion.div>
            </div>
            
            {/* Obsah karty */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{category.description}</p>
            </div>
            
            {/* CTA button - přímo pod textem */}
            <div className="flex justify-center mt-auto">
              <motion.div 
                className="flex items-center px-4 py-2 rounded text-sm font-medium transition-colors relative overflow-hidden"
                style={{ 
                  borderColor: category.color, 
                  border: '1px solid',
                  color: isHovered ? category.hoverColor : 'white',
                  backgroundColor: isHovered ? `${category.color}15` : 'transparent'
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span>Více informací</span>
                <ChevronRight className="ml-2 w-4 h-4" />
                
                {/* Animovaný světelný efekt při hoveru */}
                {isHovered && (
                  <motion.div 
                    className="absolute inset-0 overflow-hidden rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div 
                      className="absolute h-full w-5 bg-white/20 blur-sm"
                      initial={{ left: '-20%' }}
                      animate={{ left: '120%' }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// Hlavní komponenta
const ServiceCategoriesSection: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Futuristické animované pozadí */}
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tlačítko zpět na hlavní stránku */}
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na hlavní stránku</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center relative mb-16">
          {/* Dekorativní linie před a za nadpisem */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-orange-500/60"></div>
            <div className="text-orange-500 text-xl">[ ]</div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-orange-500/60"></div>
          </div>
          
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight relative inline-block">
            Služby a ceník
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute right-1/5 -translate-x-2/3 bottom-[-10px] h-[3px] w-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full origin-center"
            />
          </h2>
          
          {/* Futuristické značky pod nadpisem */}
          <div className="flex justify-center mt-4">
            <motion.div 
              className="flex items-center space-x-2 text-xs font-mono text-orange-500/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>//</span>
              <motion.div 
                className="h-px w-8 bg-orange-500/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              />
              <span className="tracking-wider">VŠECHNY KATEGORIE</span>
              <motion.div 
                className="h-px w-8 bg-orange-500/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              />
              <span>//</span>
            </motion.div>
          </div>
        </div>
        
        {/* Grid karet služeb - zajišťuje stejnou výšku */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {serviceCategories.map((category, index) => (
            <ServiceCategoryCard 
              key={category.id} // Změněno - odstraněn index z klíče pro lepší stabilitu
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;