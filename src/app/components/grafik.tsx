"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Palette,
  Clock,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Target,
  Brush,
  FileImage,
  Monitor,
  Crown,
  Printer,
  Image,
  Layers,
  Sparkles,
  Mail,
  ShoppingBag
} from "lucide-react";

// Předem definované hodnoty pro částice
const particlePositions = [
  { left: "98.80%", color: "#F97316" },
  { left: "96.18%", color: "#38BDF8" },
  { left: "33.91%", color: "#F97316" },
  { left: "54.09%", color: "#38BDF8" },
  { left: "77.35%", color: "#F97316" },
  { left: "79.41%", color: "#38BDF8" },
  { left: "64.45%", color: "#F97316" },
  { left: "97.77%", color: "#38BDF8" },
  { left: "39.39%", color: "#F97316" },
  { left: "69.29%", color: "#38BDF8" },
  { left: "70.18%", color: "#F97316" },
  { left: "43.22%", color: "#38BDF8" },
  { left: "43.68%", color: "#F97316" },
  { left: "91.39%", color: "#38BDF8" },
  { left: "3.66%", color: "#F97316" }
];

// Předem definované hodnoty pro animace částic
const particleAnimations = [
  { leftEnd: "88.80%", delay: 0.5, duration: 12.3 },
  { leftEnd: "93.18%", delay: 2.1, duration: 10.7 },
  { leftEnd: "30.91%", delay: 1.3, duration: 9.2 },
  { leftEnd: "57.09%", delay: 3.2, duration: 11.5 },
  { leftEnd: "74.35%", delay: 0.7, duration: 10.1 },
  { leftEnd: "82.41%", delay: 2.8, duration: 9.8 },
  { leftEnd: "67.45%", delay: 1.6, duration: 12.7 },
  { leftEnd: "94.77%", delay: 3.5, duration: 10.4 },
  { leftEnd: "42.39%", delay: 0.9, duration: 8.9 },
  { leftEnd: "72.29%", delay: 2.3, duration: 11.2 },
  { leftEnd: "67.18%", delay: 1.5, duration: 9.5 },
  { leftEnd: "40.22%", delay: 3.7, duration: 11.8 },
  { leftEnd: "46.68%", delay: 0.8, duration: 12.1 },
  { leftEnd: "94.39%", delay: 2.5, duration: 9.3 },
  { leftEnd: "6.66%", delay: 1.1, duration: 10.8 }
];

// Předem definované hodnoty pro světelné pruhy
const beamSettings = [
  { width: "122.56%", height: "1.56px", color: "#F97316" },
  { width: "139.18%", height: "1.01px", color: "#38BDF8" },
  { width: "135.36%", height: "1.90px", color: "#F97316" },
  { width: "105.19%", height: "1.17px", color: "#38BDF8" },
  { width: "101.23%", height: "1.18px", color: "#F97316" }
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

// Futuristický balíček
interface PricingPackageProps {
  title: string;
  price: string;
  features: string[];
  color: string;
  icon: React.ReactNode;
  isPopular?: boolean;
}

const PricingPackage: React.FC<PricingPackageProps> = ({ 
  title, 
  price, 
  features, 
  color,
  icon,
  isPopular = false
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
      {/* Badge nejoblíbenější - VRÁCENO ZPĚT */}
      {isPopular && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-bold shadow-lg">
            <Star className="w-3 h-3 mr-1" />
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
      <div className={`h-full bg-[#111827]/70 backdrop-blur-sm flex flex-col ${isPopular ? 'pt-10 px-6 pb-6' : 'p-6'}`}>
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
        
        {/* Název balíčku s ikonou */}
        <div className="flex items-center mb-4">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
            style={{ 
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`
            }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
          <h3 
            className="text-2xl font-bold" 
            style={{ color }}
          >
            {title}
          </h3>
        </div>
        
        {/* Cena */}
        <div className="mb-6">
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
        <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center font-bold text-orange-500 relative z-10 bg-[#0f172a]">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-orange-500/50 to-orange-500/0"></div>
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

// Grafické služby komponenta
const GraphicDesignPage: React.FC = () => {
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
            className="inline-flex items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Grafický design</span>{" "}
            <span className="text-white">& branding</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Profesionální grafický design a branding, který vaší značce pomůže vyniknout na trhu. 
            Od loga po komplexní vizuální identitu - vytvářím design, který prodává.
          </p>
          
          {/* Hook sekce */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Dodání do 7 dní</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Originální návrhy</span>
            </div>
          </div>
          
          {/* Vlastnosti služby */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Logo & identita</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Tiskoviny</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Digitální bannery</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Brand manuály</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Reklamní materiály</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Obalový design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-16">
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
            {/* Nadpis nad balíčky */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Vyberte si službu podle vašich potřeb
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Od jednoduchého loga po komplexní brandovou identitu. 
                Všechny služby zahrnují originální návrhy a profesionální přístup.
              </p>
            </div>

            {/* Hlavní kategorie - Logo & Branding */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Logo & Branding</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <PricingPackage
                  title="Logo Basic"
                  price="od 4 000 Kč"
                  features={[
                    "2-3 koncepty loga",
                    "2 revize zdarma",
                    "Základní formáty (PNG, JPG, SVG)",
                    "Dodání do 5 dnů",
                    "Jednoduchá aplikace"
                  ]}
                  color="#F97316"
                  icon={<Brush className="w-5 h-5" />}
                />
                
                <PricingPackage
                  title="Brand Standard"
                  price="od 12 000 Kč"
                  features={[
                    "Logo + vizuální identita",
                    "4-5 konceptů",
                    "5 revizí zdarma",
                    "Kompletní formáty (AI, EPS, SVG, PNG)",
                    "Barevné varianty",
                    "Základní brand manual",
                    "Dodání do 10 dnů"
                  ]}
                  color="#F97316"
                  isPopular={true}
                  icon={<Layers className="w-5 h-5" />}
                />
                
                <PricingPackage
                  title="Brand Premium"
                  price="od 25 000 Kč"
                  features={[
                    "Kompletní brand identita",
                    "6+ konceptů + výběr",
                    "Neomezené revize",
                    "Detailní brand manual",
                    "Aplikace na tiskoviny",
                    "Firemní šablony",
                    "Konzultace strategie",
                    "Dodání do 14 dnů"
                  ]}
                  color="#F97316"
                  icon={<Crown className="w-5 h-5" />}
                />
              </div>
            </div>

            {/* Tiskoviny & Reklamní materiály */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Tiskoviny & Reklamní materiály</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-orange-500/20">
                  <div className="flex items-center mb-4">
                    <Printer className="w-6 h-6 text-orange-500 mr-3" />
                    <h5 className="text-white font-bold">Vizitky</h5>
                  </div>
                  <p className="text-orange-400 font-bold text-lg mb-2">od 1 200 Kč</p>
                  <p className="text-gray-300 text-sm">Oboustranný návrh + předtisková příprava</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-orange-500/20">
                  <div className="flex items-center mb-4">
                    <FileImage className="w-6 h-6 text-orange-500 mr-3" />
                    <h5 className="text-white font-bold">Letáky & Brožury</h5>
                  </div>
                  <p className="text-orange-400 font-bold text-lg mb-2">od 2 800 Kč</p>
                  <p className="text-gray-300 text-sm">A4 formát + 3 revize</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-orange-500/20">
                  <div className="flex items-center mb-4">
                    <Image className="w-6 h-6 text-orange-500 mr-3" />
                    <h5 className="text-white font-bold">Plakáty</h5>
                  </div>
                  <p className="text-orange-400 font-bold text-lg mb-2">od 2 200 Kč</p>
                  <p className="text-gray-300 text-sm">A1 formát + kompletní návrh</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-orange-500/20">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-orange-500 mr-3" />
                    <h5 className="text-white font-bold">Obalový design</h5>
                  </div>
                  <p className="text-orange-400 font-bold text-lg mb-2">od 2 500 Kč</p>
                  <p className="text-gray-300 text-sm">Produktové obaly + mockupy</p>
                </div>
              </div>
            </div>

            {/* Digitální grafika - VYLEPŠENÁ */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Digitální grafika & Online marketing</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Monitor className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Web bannery</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 800 Kč</p>
                  <p className="text-gray-300 text-sm">Statické + animované bannery</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Social Media</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 500 Kč</p>
                  <p className="text-gray-300 text-sm">Posty, stories, cover fotky</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Email šablony</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 1 800 Kč</p>
                  <p className="text-gray-300 text-sm">Newslettery + HTML kodování</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Reklamní kreativy</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 1 200 Kč</p>
                  <p className="text-gray-300 text-sm">Google Ads, Facebook Ads</p>
                </div>
              </div>
            </div>

            {/* Individuální projekty - UPRAVENO BEZ HODINOVÉ SAZBY */}
            <div className="mb-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 sm:p-8 rounded-xl border border-purple-500/30 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Individuální projekty na míru</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Máte specifické požadavky nebo unikátní projekt? Vytvořím vám cenovou nabídku přesně podle vašich potřeb. 
                  Každý projekt konzultuji zdarma a navrhnu nejlepší řešení.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Úpravy existujících</h5>
                    <p className="text-gray-400 text-sm">materiálů a brandů</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Nestandardní formáty</h5>
                    <p className="text-gray-400 text-sm">a speciální požadavky</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Komplexní projekty</h5>
                    <p className="text-gray-400 text-sm">s více komponentami</p>
                  </div>
                </div>
                <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors">
                  <span>Nezávazná konzultace zdarma</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Proč investovat do profesionálního designu */}
            <div className="mb-20 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">Proč investovat do profesionálního designu?</h3>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                Kvalitní design není jen o vzhledu - je to investice do důvěryhodnosti a úspěchu vaší značky.
              </p>
              
              {/* Statistiky */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">90%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vliv na první dojem</h4>
                      <p className="text-gray-400 text-sm">Rozhodnutí o důvěryhodnosti</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    90% zákazníků si vytvoří názor na vaši značku během 90 sekund. Profesionální design rozhoduje.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">38%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vyšší hodnota značky</h4>
                      <p className="text-gray-400 text-sm">Přirážka za kvalitní design</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Firmy s profesionálním designem si mohou účtovat o 38% vyšší ceny za stejné produkty.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">75%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Lepší zapamatovatelnost</h4>
                      <p className="text-gray-400 text-sm">Rozpoznání značky</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Konzistentní vizuální identita zvyšuje rozpoznání značky o 75% více než náhodný design.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">ROI</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Rychlá návratnost</h4>
                      <p className="text-gray-400 text-sm">Investice do brandingu</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Kvalitní branding se vrátí už během prvního roku díky vyšší důvěryhodnosti a ceně.
                  </p>
                </div>
              </div>

              {/* Moje garance */}
              <div className="text-center mb-12">
                <h4 className="text-2xl font-bold text-white mb-8">Moje záruka kvality</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-emerald-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brush className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Originální návrhy</h5>
                    <p className="text-gray-300 text-sm">
                      Každý design vytvářím od nuly podle vašich specifických potřeb a cílů.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-cyan-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Revize zdarma</h5>
                    <p className="text-gray-300 text-sm">
                      Upravuji návrhy dokud nebudete spokojeni. Počet revizí závisí na zvoleném balíčku.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-violet-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Strategický přístup</h5>
                    <p className="text-gray-300 text-sm">
                      Každý design má jasný účel a podporuje vaše obchodní cíle a růst značky.
                    </p>
                  </div>
                </div>
              </div>

              {/* Co konkrétně získáte */}
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-8 rounded-xl border border-slate-600/30 text-center">
                <h4 className="text-xl font-bold text-white mb-6">Co konkrétně získáte</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Designově:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Originální a zapamatovatelný design</li>
                      <li>• Konzistentní vizuální identitu</li>
                      <li>• Všechny potřebné formáty souborů</li>
                      <li>• Aplikační příklady a návody</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Obchodně:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Vyšší důvěryhodnost značky</li>
                      <li>• Možnost vyšších cen</li>
                      <li>• Lepší rozpoznatelnost</li>
                      <li>• Profesionální image</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center mt-16">
              <Link href="/kontakt" className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base sm:text-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
                <span>Kontaktujte mě pro kalkulaci</span>
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <p className="text-gray-400 mt-4 text-base sm:text-lg px-4">
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
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Jak probíhá tvorba designu
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Strukturovaný proces od briefingu po finální dodání zajišťuje, 
                  že výsledný design bude přesně podle vašich představ a cílů.
                </p>
              </div>
              
              <ProcessStep
                number={1}
                title="Kreativní briefing"
                description="Proberu s vámi vize, cíle a představy o designu. Analyzujeme cílovou skupinu, konkurenci a definujeme klíčové prvky, které by měl design komunikovat."
              />
              
              <ProcessStep
                number={2}
                title="Koncepční návrhy"
                description="Na základě briefingu vytvořím několik různých kreativních konceptů, které představím s vysvětlením myšlenkových postupů a designových rozhodnutí."
              />
              
              <ProcessStep
                number={3}
                title="Revize a doladění"
                description="Vybraný koncept společně doladíme do finální podoby. Počet revizí závisí na zvoleném balíčku. Každý detail bude vyladěn k dokonalosti."
              />
              
              <ProcessStep
                number={4}
                title="Finální dodání"
                description="Připravím všechny potřebné formáty a varianty designu. U komplexnějších projektů dodám také brand manual s návody na správné použití."
                isLast
              />
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30 mt-12">
              <h4 className="text-xl font-bold text-white mb-4">Máte zájem o spolupráci?</h4>
              <p className="text-gray-300 mb-6">
                Ať už potřebujete logo, kompletní brand identitu nebo reklamní materiály, rád vám pomohu vytvořit design, který vaši značku posune vpřed.
              </p>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Nezávazná konzultace</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GraphicDesignPage;