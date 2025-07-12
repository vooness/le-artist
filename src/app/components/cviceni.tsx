"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Clock,
  ChevronRight,
  ActivitySquare,
  Layers,
  Puzzle,
  FileQuestion,
  Briefcase,
  Monitor,
  Users,
  BarChart3,
  Settings,
  Zap,
  Shield
} from "lucide-react";

// Předem definované hodnoty pro částice
const particlePositions = [
  { left: "82.61%", color: "#818CF8" },
  { left: "69.45%", color: "#38BDF8" },
  { left: "37.82%", color: "#818CF8" },
  { left: "51.39%", color: "#38BDF8" },
  { left: "76.28%", color: "#818CF8" },
  { left: "63.91%", color: "#38BDF8" },
  { left: "42.57%", color: "#818CF8" },
  { left: "88.23%", color: "#38BDF8" },
  { left: "25.64%", color: "#818CF8" },
  { left: "75.39%", color: "#38BDF8" },
  { left: "59.74%", color: "#818CF8" },
  { left: "44.12%", color: "#38BDF8" },
  { left: "52.83%", color: "#818CF8" },
  { left: "79.68%", color: "#38BDF8" },
  { left: "21.57%", color: "#818CF8" }
];

// Předem definované hodnoty pro animace částic
const particleAnimations = [
  { leftEnd: "79.34%", delay: 0.5, duration: 11.2 },
  { leftEnd: "66.78%", delay: 1.7, duration: 9.8 },
  { leftEnd: "34.51%", delay: 0.9, duration: 10.5 },
  { leftEnd: "54.23%", delay: 2.1, duration: 12.1 },
  { leftEnd: "73.59%", delay: 0.3, duration: 9.3 },
  { leftEnd: "60.74%", delay: 1.5, duration: 11.7 },
  { leftEnd: "45.83%", delay: 0.7, duration: 10.2 },
  { leftEnd: "85.47%", delay: 2.3, duration: 9.5 },
  { leftEnd: "22.19%", delay: 1.1, duration: 11.9 },
  { leftEnd: "72.86%", delay: 0.4, duration: 10.7 },
  { leftEnd: "56.38%", delay: 1.9, duration: 9.1 },
  { leftEnd: "41.75%", delay: 0.8, duration: 12.3 },
  { leftEnd: "49.56%", delay: 2.5, duration: 10.9 },
  { leftEnd: "76.32%", delay: 1.3, duration: 9.6 },
  { leftEnd: "18.92%", delay: 0.6, duration: 11.4 }
];

// Předem definované hodnoty pro světelné pruhy
const beamSettings = [
  { width: "132.71%", height: "1.45px", color: "#818CF8" },
  { width: "124.32%", height: "1.19px", color: "#38BDF8" },
  { width: "138.54%", height: "1.76px", color: "#818CF8" },
  { width: "119.87%", height: "1.28px", color: "#38BDF8" },
  { width: "129.63%", height: "1.53px", color: "#818CF8" }
];

// Komponenta pro futuristické animované pozadí
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
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
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
          border: '1px solid rgba(129, 140, 248, 0.1)',
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
      
      {/* Výraznější létající částice - S PEVNÝMI HODNOTAMI */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={`bright-particle-${i}`}
          className="absolute w-1 h-1 rounded-full z-10"
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            left: particle.left,
            top: '100%',
          }}
          animate={{
            top: [null, '-10%'],
            left: [null, particleAnimations[i].leftEnd],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particleAnimations[i].duration,
            repeat: Infinity,
            delay: particleAnimations[i].delay,
            ease: "easeOut",
            times: [0, 0.6, 1]
          }}
        />
      ))}
      
      {/* Pohyblivé světelné pruhy - S PEVNÝMI HODNOTAMI */}
      {beamSettings.map((beam, i) => {
        const topPosition = 20 + i * 15;
        const delay = i * 2;
        
        return (
          <motion.div
            key={`light-beam-${i}`}
            className="absolute"
            style={{
              width: beam.width,
              height: beam.height,
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
            border: `1px solid ${i % 2 === 0 ? 'rgba(129, 140, 248, 0.2)' : 'rgba(56, 189, 248, 0.2)'}`,
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

// Futuristický balíček
interface PricingPackageProps {
  title: string;
  price: string;
  features: string[];
  color: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const PricingPackage: React.FC<PricingPackageProps> = ({ 
  title, 
  price, 
  features, 
  color,
  icon,
  popular = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full text-xs font-bold shadow-lg">
            Nejoblíbenější
          </div>
        </div>
      )}
      
      {/* Tenký border */}
      <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
      
      {/* Tenké rohy v barvě balíčku */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: color }}></div>
      
      {/* Hlavní pozadí */}
      <div className="p-6 h-full bg-[#111827]/70 backdrop-blur-sm flex flex-col">
        {/* Barevný gradient na pozadí při hoveru */}
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none rounded-lg"
          style={{ 
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` 
          }}
          animate={{ 
            opacity: isHovered ? 0.8 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Ikona balíčku */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
          style={{ 
            backgroundColor: `${color}15`,
            border: `1px solid ${color}30`
          }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        
        {/* Název balíčku - FIXED HEIGHT pro zarovnání */}
        <div className="min-h-[3rem] flex items-center mb-2">
          <h3 
            className="text-2xl font-bold leading-tight" 
            style={{ color }}
          >
            {title}
          </h3>
        </div>
        
        {/* Cena - FIXED HEIGHT pro zarovnání */}
        <div className="mb-6 min-h-[2.5rem] flex items-center">
          <div 
            className="text-xl font-bold inline-block px-4 py-1 rounded-full"
            style={{ 
              color: 'white',
              backgroundColor: `${color}30`,
              border: `1px solid ${color}` 
            }}
          >
            {price}
          </div>
        </div>
        
        {/* Seznam funkcí */}
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-3">
              <div className="mr-3 mt-[1px] text-green-500 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Technologická karta
interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const TechCard: React.FC<TechCardProps> = ({ title, description, icon, color }) => {
  return (
    <div className="bg-slate-800/30 border border-slate-700 hover:border-indigo-500/50 rounded-lg p-5 transition-colors duration-300">
      <div className="flex items-start">
        <div 
          className="mr-4 p-3 rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Futuristický prvek procesu
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative flex">
      {/* Číslo */}
      <div className="mr-5 flex-shrink-0">
        <div className="w-10 h-10 rounded-full border border-indigo-500 flex items-center justify-center font-bold text-indigo-500 relative z-10 bg-[#0f172a]">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-indigo-500/50 to-indigo-500/0"></div>
        )}
      </div>
      
      {/* Obsah */}
      <div className="pb-10">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Interaktivní cvičení komponenta
const InteractiveServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'process'>('pricing');
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Futuristické animované pozadí */}
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tlačítko zpět na hlavní stránku */}
        <div className="mb-10">
          <Link 
            href="/sluzby" 
            className="inline-flex items-center text-gray-400 hover:text-indigo-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Interaktivní cvičení</span>{" "}
            <span className="text-white">která skutečně vzdělávají</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Profesionální e-learningové moduly pro základní a střední školy na platformě H5P a Articulate Storyline 360. 
            Specializuji se na tvorbu obsahu zaměřeného na konverze a uživatelský zážitek.
          </p>
          
          {/* Dvě tlačítka */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link 
              href="#pricing"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 transition-all"
            >
              <Zap className="w-5 h-5 mr-2" />
              <span>Dodání do 14 dní</span>
            </Link>
            <Link 
              href="#process"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-indigo-500 bg-indigo-500/10 text-indigo-300 font-medium hover:bg-indigo-500/20 transition-all"
            >
              <Shield className="w-5 h-5 mr-2" />
              <span>Záruka spokojenosti</span>
            </Link>
          </div>
          
          {/* Vlastnosti služby - 6 boxů v gridu */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Optimalizace konverzí</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Mobil-first design</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">SEO optimalizace</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Integrované platby</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Cloudový hosting</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Pokročilá analytika</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 relative ${
                activeTab === 'pricing' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ceník
              {activeTab === 'pricing' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 relative ${
                activeTab === 'process' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Postup
              {activeTab === 'process' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>
        </div>
        
        {/* Obsah záložek */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Balíčky služeb - 3 v gridu */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              <div className="relative">
                <PricingPackage
                  title="H5P Interaktivní cvičení"
                  price="od 4 500 Kč"
                  features={[
                    "H5P framework (open-source)",
                    "10-25 interaktivních prvků",
                    "Responzivní design",
                    "Pokročilé typy úloh",
                    "Vlastní branding školy",
                    "Detailní statistiky",
                    "SCORM 1.2/2004 export",
                    "2 revize zdarma",
                    "Dodání do 5-7 dnů"
                  ]}
                  color="#818CF8"
                  icon={<Puzzle className="w-6 h-6" />}
                />
              </div>
              
              <div className="relative">
                {/* Badge nejoblíbenější - mimo balíček */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full text-xs font-bold shadow-lg">
                    Nejoblíbenější
                  </div>
                </div>
                <PricingPackage
                  title="Articulate Storyline"
                  price="od 22 000 Kč"
                  features={[
                    "Articulate Storyline 360",
                    "1 kompletní modul (15-25 slidů)",
                    "25-50 interaktivních aktivit",
                    "Pokročilé simulace a scénáře",
                    "Větvení a adaptivní cesty",
                    "Gamifikační prvky",
                    "Analytics a reporting",
                    "Neomezené revize",
                    "Dodání do 14-21 dnů"
                  ]}
                  color="#818CF8"
                  icon={<Layers className="w-6 h-6" />}
                />
              </div>

              <div className="relative">
                <PricingPackage
                  title="Vlastní platforma"
                  price="od 95 000 Kč"
                  features={[
                    "Webová platforma pro školu",
                    "Systém správy uživatelů",
                    "Dashboard pro učitele",
                    "Sledování pokroku studentů",
                    "Integrace s H5P/Storyline",
                    "Responzivní design",
                    "Hosting na 1 rok zdarma",
                    "Školení a dokumentace",
                    "Dodání do 6-8 týdnů"
                  ]}
                  color="#818CF8"
                  icon={<Briefcase className="w-6 h-6" />}
                />
              </div>
            </div>

            {/* Konkurenceschopná cena */}
            <div className="mb-16 max-w-5xl mx-auto">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-sm">
                  <strong>💡 Proč jsou moje ceny konkurenceschopné:</strong> Nabízím kvalitu agentur za ceny blízké freelancerům, 
                  plus přidanou hodnotu v podobě vlastních platforem a dlouhodobé podpory.
                </p>
              </div>
            </div>

            {/* Typy cvičení v Articulate Storyline */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Typy cvičení v Articulate Storyline 360</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Kvízové otázky</h4>
                  <p className="text-sm text-gray-300">Multiple choice, True/False, Fill-in-the-blank, Matching, Hotspot otázky</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Drag & Drop aktivity</h4>
                  <p className="text-sm text-gray-300">Přetahování objektů, třídění do kategorií, sestavování puzzlí</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Interaktivní simulace</h4>
                  <p className="text-sm text-gray-300">Simulace softwaru, laboratorních pokusů, praktických úkolů</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Větvené scénáře</h4>
                  <p className="text-sm text-gray-300">Rozhodovací situace, případové studie s různými cestami</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Interaktivní videa</h4>
                  <p className="text-sm text-gray-300">Videa s otázkami, poznámkami a interaktivními prvky</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Gamifikované moduly</h4>
                  <p className="text-sm text-gray-300">Body, odznaky, žebříčky, herní mechaniky pro motivaci</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Timeline interakce</h4>
                  <p className="text-sm text-gray-300">Chronologické zobrazení událostí s interaktivními prvky</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Virtuální laboratoře</h4>
                  <p className="text-sm text-gray-300">3D prostředí pro experimentování a zkoumání</p>
                </div>
                
                <div className="bg-slate-800/50 border border-indigo-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-indigo-300 mb-2">Adaptivní učení</h4>
                  <p className="text-sm text-gray-300">Obsah se přizpůsobuje úrovni a výkonu studenta</p>
                </div>
              </div>
            </div>
            
            {/* Vlastní platforma pro školy */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Vlastní webová platforma pro vaši školu</h3>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-xl p-8 border border-indigo-500/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-indigo-300 mb-4">🏫 Co platforma obsahuje:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Správa uživatelů (učitelé, studenti, třídy)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Dashboard s přehledem pokroku všech studentů</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Knihovna interaktivních cvičení</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Systém zadávání a hodnocení úkolů</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Detailní statistiky a reporty</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Integrace s H5P a Articulate Storyline</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-indigo-300 mb-4">💡 Výhody vlastní platformy:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Plná kontrola nad daty studentů</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Žádné měsíční poplatky třetím stranám</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Design v barvách a stylu vaší školy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Možnost budoucích rozšíření</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Integrace s existujícími školními systémy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                        <span>Dlouhodobá udržitelnost a nezávislost</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technologie */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Používané technologie</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TechCard 
                  title="Articulate Storyline 360"
                  description="Profesionální nástroj pro tvorbu interaktivních e-learningových kurzů s pokročilými funkcemi a možnostmi."
                  icon={<Layers className="w-6 h-6" />}
                  color="#818CF8"
                />
                
                <TechCard 
                  title="H5P"
                  description="Open-source framework pro tvorbu interaktivního obsahu s širokou škálou aktivit a integrací do LMS."
                  icon={<Puzzle className="w-6 h-6" />}
                  color="#818CF8"
                />
                
                <TechCard 
                  title="SCORM"
                  description="Standard pro e-learning, který zajišťuje kompatibilitu vytvořených kurzů s různými LMS platformami."
                  icon={<FileQuestion className="w-6 h-6" />}
                  color="#818CF8"
                />
                
                <TechCard 
                  title="Adaptivní učení"
                  description="Pokročilé techniky, které přizpůsobují obtížnost a obsah podle individuálních potřeb studenta."
                  icon={<Briefcase className="w-6 h-6" />}
                  color="#818CF8"
                />
              </div>
            </div>
            
            {/* Doplňkové služby */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Doplňkové služby a možnosti</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <ActivitySquare className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Dodatečné cvičení</h4>
                    <p className="text-sm text-gray-300">od 2 200 Kč / H5P cvičení</p>
                    <p className="text-sm text-gray-300">od 8 500 Kč / Storyline modul</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <Layers className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">SCORM balíček</h4>
                    <p className="text-sm text-gray-300">Export + optimalizace</p>
                    <p className="text-sm text-gray-300">od 1 800 Kč</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <FileQuestion className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Vytvoření obsahu</h4>
                    <p className="text-sm text-gray-300">Kompletní tvorba učebních materiálů</p>
                    <p className="text-sm text-gray-300">od 5 500 Kč</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <Briefcase className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Školení pedagogů</h4>
                    <p className="text-sm text-gray-300">Jak pracovat s cvičeními</p>
                    <p className="text-sm text-gray-300">4 500 Kč / den</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <Clock className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Express dodání</h4>
                    <p className="text-sm text-gray-300">Zkrácení termínu na polovinu</p>
                    <p className="text-sm text-gray-300">+50% k ceně</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <Settings className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Hosting a údržba</h4>
                    <p className="text-sm text-gray-300">Měsíční správa platformy</p>
                    <p className="text-sm text-gray-300">od 3 200 Kč / měsíc</p>
                  </div>
                </div>
              </div>
              
              {/* Speciální balíček pro školy */}
              <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-indigo-600/10 border border-indigo-500/30 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-3">🎓 Speciální balíčky pro školy</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-indigo-300 mb-2">Půlroční balíček</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 10 H5P cvičení dle výběru</li>
                      <li>• 2 Storyline moduly</li>
                      <li>• Vlastní branding školy</li>
                      <li>• SCORM export zdarma</li>
                    </ul>
                    <p className="text-indigo-400 font-bold mt-2">75 000 Kč (sleva 25%)</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-indigo-300 mb-2">Roční balíček + platforma</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Vlastní webová platforma</li>
                      <li>• 20 H5P cvičení</li>
                      <li>• 5 Storyline modulů</li>
                      <li>• Školení pedagogů</li>
                      <li>• Hosting a podpora na rok</li>
                    </ul>
                    <p className="text-indigo-400 font-bold mt-2">180 000 Kč (sleva 35%)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
                <span>Kontaktujte mě pro kalkulaci</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <p className="text-gray-400 mt-4">
                Každý projekt je jedinečný. Kontaktujte mě pro nezávaznou konzultaci a přesnou kalkulaci.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'process' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Proces tvorby */}
            <div className="mb-16">
              <ProcessStep
                number={1}
                title="Analýza potřeb"
                description="Začínáme detailní analýzou vašich potřeb, cílové skupiny studentů a výukových cílů. Definujeme obsah, rozsah, formát cvičení a technické požadavky. Vytvoříme plán, který stanoví časový harmonogram a rozpočet."
                />
                
                <ProcessStep
                  number={2}
                  title="Návrh scénáře a storyboard"
                  description="Na základě analýzy vytvořím podrobný scénář interaktivního cvičení. Definuji strukturu, obsah jednotlivých obrazovek, typy interakcí a hodnocení. Připravím storyboard, který vizuálně znázorní tok cvičení a rozložení jednotlivých prvků."
                />
                
                <ProcessStep
                  number={3}
                  title="Grafický návrh"
                  description="V této fázi navrhuji vizuální podobu cvičení. Vytvořím jednotný design, připravím potřebné grafické prvky, ikony a ilustrace. Grafický návrh respektuje vaši firemní identitu nebo školní požadavky a zároveň zohledňuje cílovou skupinu uživatelů."
                />
                
                <ProcessStep
                  number={4}
                  title="Vývoj a programování"
                  description="Následuje samotná implementace cvičení pomocí zvolené technologie (Articulate Storyline, H5P nebo jiné). Programuji interaktivní prvky, nastavuji zpětnou vazbu, hodnocení a další funkce. Zajistím, aby cvičení fungovalo na všech cílových zařízeních."
                />
                
                <ProcessStep
                  number={5}
                  title="Testování a revize"
                  description="Důkladně testuji vytvořené cvičení z hlediska funkčnosti, uživatelské přívětivosti a pedagogické efektivity. Na základě testů a vaší zpětné vazby provedu potřebné úpravy a vylepšení."
                />
                
                <ProcessStep
                  number={6}
                  title="Publikace a implementace"
                  description="Finální cvičení exportuji do požadovaného formátu (HTML5, SCORM) a pomohu vám s implementací do LMS nebo na vaše webové stránky. Poskytnu podporu a školení, jak s cvičením pracovat a jak ho spravovat."
                  isLast
                />
              </div>
              
              {/* Typy interakcí */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
                <h3 className="text-xl font-bold text-white mb-6">Typy interaktivních prvků</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Kvízové otázky</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Výběr z více možností, ano/ne, pravda/nepravda</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Přetahování (Drag & Drop)</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Přiřazování objektů do správných kategorií nebo pozic</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Interaktivní obrázky</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Hotspoty a oblasti, na které lze kliknout pro zobrazení informací</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Výplň mezer (Fill in the blank)</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Doplňování chybějících slov v textu</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Seřazování a řazení</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Uspořádání prvků ve správném pořadí</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Interaktivní časové osy</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Chronologické zobrazení událostí s interaktivními prvky</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Simulace a scénáře</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Simulace reálných situací, kde student činí rozhodnutí</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      <h4 className="font-medium text-white">Gamifikační prvky</h4>
                    </div>
                    <p className="text-sm text-gray-300 ml-4">Body, odznaky a žebříčky pro zvýšení motivace</p>
                  </div>
                </div>
              </div>
              
              {/* Postup CTA */}
              <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
                <h4 className="text-xl font-bold text-white mb-4">Připraveni zlepšit výuku?</h4>
                <p className="text-gray-300 mb-6">
                  Interaktivní cvičení jsou efektivním nástrojem moderního vzdělávání. Kontaktujte mě 
                  pro nezávaznou konzultaci a společně vytvořme vzdělávací obsah, který bude studenty bavit.
                </p>
                <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors">
                  <span>Začněme spolupráci</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          )}

        {/* FAQ Sekce */}
        <div className="max-w-4xl mx-auto mt-20 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Často kladené otázky
          </h2>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Co je to SCORM a proč je důležitý?</h3>
              <p className="text-gray-300">
                SCORM (Sharable Content Object Reference Model) je standardizovaný formát pro e-learningový obsah, 
                který zajišťuje kompatibilitu s různými LMS (Learning Management Systems). Díky SCORM mohou 
                vytvořená interaktivní cvičení fungovat v systémech jako Moodle, Google Classroom, Canvas 
                nebo Microsoft Teams. SCORM také umožňuje sledování pokroku a výsledků studentů.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jaký je rozdíl mezi H5P a Articulate Storyline?</h3>
              <p className="text-gray-300">
                H5P je open-source framework vhodný pro základní až středně pokročilá interaktivní cvičení 
                s rychlou implementací a nižšími náklady. Articulate Storyline 360 je profesionální nástroj 
                umožňující vytváření komplexních simulací, větvených scénářů a pokročilých interakcí. 
                Storyline nabízí větší flexibilitu a možnosti customizace, ale vyžaduje více času a zdrojů.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Proč si nechat vytvořit vlastní platformu místo používání Moodle?</h3>
              <p className="text-gray-300">
                Vlastní platforma vám dává úplnou kontrolu nad funkcionalitou, designem a daty. Neplatíte 
                měsíční poplatky za hosting a licence, můžete ji přizpůsobit přesně vašim potřebám a 
                firemní identitě. Dlouhodobě je to často ekonomičtější řešení než placené LMS platformy, 
                a navíc získáváte nezávislost na externích poskytovatelích.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Mohu získat zdrojové soubory k vytvořeným cvičením?</h3>
              <p className="text-gray-300">
                Ano, součástí dodávky jsou i zdrojové soubory (Articulate Storyline, H5P apod.), 
                které vám umožní v budoucnu cvičení upravovat nebo rozšiřovat. Ke zdrojovým souborům 
                poskytuji i podrobnou dokumentaci a případně i školení, jak s nimi pracovat. 
                Pro úpravy je však nutné mít příslušný software (např. licenci Articulate Storyline).
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jak dlouho trvá vytvoření interaktivního cvičení?</h3>
              <p className="text-gray-300">
                Závisí na složitosti: základní H5P kvíz zabere 3-5 dnů, pokročilé H5P cvičení 
                s custom designem 5-7 dnů a kompletní Articulate Storyline modul 14-21 dnů. 
                Vlastní platforma trvá 6-8 týdnů včetně testování a školení. Termíny mohou být 
                zkráceny za příplatek, nebo prodlouženy pokud potřebujeme více revizí a úprav.
              </p>
            </div>
          </div>
        </div>

        {/* Závěrečná CTA */}
        <div className="max-w-4xl mx-auto mt-20 mb-10 relative z-10">
          <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 rounded-xl p-8 border border-indigo-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              Propojte vzdělávání s moderními technologiemi
            </h2>
            <p className="text-gray-200 text-center mb-8 max-w-3xl mx-auto">
              Interaktivní cvičení zvyšují efektivitu výuky, motivaci studentů a míru zapamatování 
              informací. Připravte své studenty na budoucnost pomocí moderních výukových metod.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center px-8 py-4 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
              >
                <span>Získejte nezávaznou kalkulaci</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesPage;