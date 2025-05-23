"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBakckground";
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
    title: "Interaktivní kvízy",
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
  { left: 35, leftOffset: 3, delay: 4.2, duration: 12, color: "#F97316" }
];

// FIXNÍ HODNOTY PRO SVĚTELNÉ PRUHY
const beamSettings = [
  { width: 130, height: 1.2, color: "#F97316" },
  { width: 125, height: 1.5, color: "#38BDF8" },
  { width: 120, height: 1.3, color: "#F97316" }
];

// Komponenta pro futuristické pozadí - STATICKÉ VERZE místo animací
const StaticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
       <ParticlesBackground/>
      {/* Mřížka na pozadí - ponecháno beze změn */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />
      
      {/* Statický kruh místo animovaného */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      {/* Statický hexagon místo animovaného */}
      <div 
        className="absolute"
        style={{
          width: '1000px',
          height: '1000px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(249, 115, 22, 0.1)',
          opacity: 0.15
        }}
      />
      
      {/* Statický vnitřní hexagon */}
      <div 
        className="absolute"
        style={{
          width: '800px',
          height: '800px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(56, 189, 248, 0.1)',
          opacity: 0.15
        }}
      />
      
      
      
      {/* Statické světelné pruhy místo pohyblivých */}
      {beamSettings.map((beam, i) => {
        const topPosition = 20 + i * 15;
        
        return (
          <div
            key={`static-beam-${i}`}
            className="absolute"
            style={{
              width: `${beam.width}%`,
              height: `${beam.height}px`,
              left: '25%',
              top: `${topPosition}%`,
              background: `linear-gradient(90deg, transparent, ${beam.color}50, transparent)`,
              opacity: 0.15,
              filter: 'blur(2px)'
            }}
          />
        );
      })}
      
      {/* Statické kruhy místo animovaných koncentrických kruhů */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`static-circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            border: `1px solid ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.2)' : 'rgba(56, 189, 248, 0.2)'}`,
            opacity: 0.1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
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

// Futuristická karta služby - OPRAVENO: odstranění blur a špatného scale efektu při hoveru
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
          // OPRAVENO: Odstranění scale efektu, který způsoboval nežádoucí změnu velikosti
          whileHover={{ 
            boxShadow: `0 0 15px ${category.color}40`,
            transition: { duration: 0.2 } 
          }}
          className="relative overflow-hidden rounded-lg h-full flex flex-col"
        >
        
          <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
          
          {/* Rohové akcenty */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: category.color }}></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: category.color }}></div>
          
          {/* Spodní gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 z-10 opacity-70"
            style={{ 
              background: `linear-gradient(to right, ${category.color}, ${category.color}50, transparent)` 
            }}
          ></div>
          
          {/* Hlavní obsah karty */}
          <div 
            className="relative p-6 h-full flex flex-col rounded-lg z-0 bg-[#111827]/70 backdrop-blur-sm transition-all duration-300"
          >
           
            
            {/* OPRAVENO: Upraveno pozadí při hoveru - bez blur efektu, pouze změna opacity */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-lg transition-opacity duration-300"
              style={{ 
                background: `radial-gradient(circle at center, ${category.color}15 0%, transparent 70%)`,
                opacity: isHovered ? 0.8 : 0
              }}
            />
            
            {/* Ikona */}
            <div className="flex justify-center mb-5">
              <div 
                className="relative p-3 rounded-full transition-all duration-300"
                style={{ 
                  color: category.color,
                  filter: `drop-shadow(0 0 8px ${category.color}70)`,
                  backgroundColor: `${category.color}15`,
                  boxShadow: isHovered ? `0 0 15px ${category.color}40` : `0 0 5px ${category.color}20`
                }}
              >
                <category.icon className="w-8 h-8" />
              </div>
            </div>
            
            {/* Název a popis */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-sm text-gray-300 line-clamp-3">{category.description}</p>
            </div>
            
            {/* Tlačítko */}
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
  const [mounted, setMounted] = useState(false);
  
  // Použijeme useEffect pro řešení hydratačních problémů
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      
      {/* Statické pozadí místo animovaného */}
      <StaticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-white hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na hlavní stránku</span>
          </Link>
        </div>
        
        {/* Nadpis sekce */}
        <div className="text-center relative mb-16">
        
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-orange-500/60"></div>
            <div className="text-orange-500 text-xl">[ ]</div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-orange-500/60"></div>
          </div>
          
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight relative inline-block">
            Služby a ceník
            {mounted && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute right-1/5 -translate-x-2/3 bottom-[-10px] h-[3px] w-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full origin-center"
              />
            )}
          </h2>
          
          
          <div className="flex justify-center mt-4">
            {mounted && (
              <motion.div 
                className="flex items-center space-x-2 text-xs font-mono text-orange-500/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span>{'//'}</span>
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
                <span>{'//'}</span>
              </motion.div>
            )}
          </div>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {serviceCategories.map((category, index) => (
            <ServiceCategoryCard 
              key={category.id}
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