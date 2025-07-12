"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Clock,
  ChevronRight,
  Video,
  Film,
  Tv,
  Youtube,
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
  ShoppingBag,
  Edit3,
  Play,
  Headphones,
  Camera,
  Mic
} from "lucide-react";

// Předem definované hodnoty pro částice
const particlePositions = [
  { left: "89.54%", color: "#EC4899" },
  { left: "74.23%", color: "#38BDF8" },
  { left: "32.19%", color: "#EC4899" },
  { left: "58.67%", color: "#38BDF8" },
  { left: "81.42%", color: "#EC4899" },
  { left: "67.85%", color: "#38BDF8" },
  { left: "45.36%", color: "#EC4899" },
  { left: "92.91%", color: "#38BDF8" },
  { left: "28.74%", color: "#EC4899" },
  { left: "71.53%", color: "#38BDF8" },
  { left: "63.28%", color: "#EC4899" },
  { left: "39.62%", color: "#38BDF8" },
  { left: "55.17%", color: "#EC4899" },
  { left: "84.56%", color: "#38BDF8" },
  { left: "17.34%", color: "#EC4899" }
];

// Předem definované hodnoty pro animace částic
const particleAnimations = [
  { leftEnd: "86.78%", delay: 0.9, duration: 10.8 },
  { leftEnd: "71.46%", delay: 2.3, duration: 9.5 },
  { leftEnd: "29.83%", delay: 0.7, duration: 11.2 },
  { leftEnd: "61.29%", delay: 1.8, duration: 10.3 },
  { leftEnd: "78.65%", delay: 0.4, duration: 9.7 },
  { leftEnd: "64.92%", delay: 2.1, duration: 11.5 },
  { leftEnd: "42.58%", delay: 1.2, duration: 10.1 },
  { leftEnd: "95.43%", delay: 0.3, duration: 9.8 },
  { leftEnd: "25.91%", delay: 1.7, duration: 11.7 },
  { leftEnd: "68.27%", delay: 0.8, duration: 10.4 },
  { leftEnd: "60.54%", delay: 2.5, duration: 9.6 },
  { leftEnd: "36.48%", delay: 1.1, duration: 11.3 },
  { leftEnd: "52.83%", delay: 2.7, duration: 10.6 },
  { leftEnd: "87.82%", delay: 0.6, duration: 9.9 },
  { leftEnd: "14.59%", delay: 1.9, duration: 11.8 }
];

// Předem definované hodnoty pro světelné pruhy
const beamSettings = [
  { width: "128.42%", height: "1.37px", color: "#EC4899" },
  { width: "135.76%", height: "1.24px", color: "#38BDF8" },
  { width: "115.39%", height: "1.65px", color: "#EC4899" },
  { width: "143.81%", height: "1.18px", color: "#38BDF8" },
  { width: "119.25%", height: "1.42px", color: "#EC4899" }
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
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
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
          border: '1px solid rgba(236, 72, 153, 0.1)',
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
            border: `1px solid ${i % 2 === 0 ? 'rgba(236, 72, 153, 0.2)' : 'rgba(56, 189, 248, 0.2)'}`,
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
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tenký border */}
      <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
      
      {/* Tenké rohy v barvě balíčku */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: color }}></div>
      
      {/* Hlavní pozadí */}
      <div className="h-full bg-[#111827]/70 backdrop-blur-sm flex flex-col p-6">
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
        
        {/* Název balíčku s ikonou - FIXED HEIGHT pro zarovnání */}
        <div className="flex items-center mb-4 min-h-[3rem]">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
            style={{ 
              backgroundColor: `${color}15`,
              border: `1px solid ${color}30`
            }}
          >
            <div style={{ color }}>{icon}</div>
          </div>
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
        <div className="w-10 h-10 rounded-full border border-pink-500 flex items-center justify-center font-bold text-pink-500 relative z-10 bg-[#0f172a]">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-pink-500/50 to-pink-500/0"></div>
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

// Video služby komponenta
const VideoServicesPage: React.FC = () => {
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
            className="inline-flex items-center text-gray-400 hover:text-pink-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-pink-500">Motion Graphics</span>{" "}
            <span className="text-white">& Video editace</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Specializuji se na motion graphics v Adobe After Effects a profesionální střih videí. 
            Od animovaných reklam po střih podcastů - vytvořím video obsah, který zaujme a přesvědčí.
          </p>
          
          {/* Hook sekce */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Rychlé dodání</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">After Effects & Premiere Pro</span>
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
                  <span className="text-white font-medium text-xs sm:text-base">Motion Graphics</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Animované bannery</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Střih podcastů</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Sociální média</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Firemní střih</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Color grading</span>
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
                activeTab === 'pricing' ? 'text-pink-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ceník
              {activeTab === 'pricing' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-pink-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 relative ${
                activeTab === 'process' ? 'text-pink-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Postup
              {activeTab === 'process' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-pink-500"
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
                Motion graphics, animace a profesionální střih. 
                Specializuji se na After Effects a Premiere Pro.
              </p>
            </div>

            {/* Motion Graphics & Animace */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Motion Graphics & Animace</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="relative">
                  <PricingPackage
                    title="Animovaný banner"
                    price="od 2 000 Kč"
                    features={[
                      "Jednoduchá animace - 15 sekund",
                      "Základní formáty pro web",
                      "2 revize zdarma",
                      "GIF, MP4, HTML5 výstupy",
                      "Dodání do 3 dnů"
                    ]}
                    color="#EC4899"
                    icon={<Monitor className="w-5 h-5" />}
                  />
                </div>
                
                <div className="relative">
                  {/* Badge nejoblíbenější - mimo balíček */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full text-xs font-bold shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Nejoblíbenější
                    </div>
                  </div>
                  <PricingPackage
                    title="Produktová reklama"
                    price="od 4 500 Kč"
                    features={[
                      "Střední komplexita - 15-30 sekund",
                      "After Effects motion graphics",
                      "3 revize zdarma",
                      "Optimalizace pro sociální sítě",
                      "Hudba a zvukové efekty",
                      "Dodání do 7 dnů"
                    ]}
                    color="#EC4899"
                    icon={<Sparkles className="w-5 h-5" />}
                  />
                </div>
                
                <div className="relative">
                  <PricingPackage
                    title="Animované logo"
                    price="od 2 200 Kč"
                    features={[
                      "2-3 varianty animace",
                      "Krátká animace - 3-5 sekund",
                      "Intro/outro varianty",
                      "Transparentní pozadí",
                      "4K kvalita",
                      "Dodání do 5 dnů"
                    ]}
                    color="#EC4899"
                    icon={<Play className="w-5 h-5" />}
                  />
                </div>
              </div>
              
              {/* Doplňkové služby */}
              <div className="mt-12 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 rounded-xl border border-slate-700/30">
                  <div className="flex items-center justify-center mb-3">
                    <Mic className="w-5 h-5 text-pink-400 mr-2" />
                    <h5 className="text-white font-bold">Doplňkové služby</h5>
                  </div>
                  <p className="text-gray-300 text-sm">
                    <strong className="text-pink-400">Voiceover a dabbing</strong> - Profesionální namluvení v češtině i angličtině, 
                    čištění zvuku a synchronizace s videem. <strong className="text-pink-400">Cena od 1 500 Kč</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Video editace & střih */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Video editace & střih</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-pink-500/20">
                  <div className="flex items-center mb-4">
                    <Headphones className="w-6 h-6 text-pink-500 mr-3" />
                    <h5 className="text-white font-bold">Střih podcastů</h5>
                  </div>
                  <p className="text-pink-400 font-bold text-lg mb-2">od 1 200 Kč</p>
                  <p className="text-gray-300 text-sm">Čištění zvuku + střih + jednoduchý export</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-pink-500/20">
                  <div className="flex items-center mb-4">
                    <Camera className="w-6 h-6 text-pink-500 mr-3" />
                    <h5 className="text-white font-bold">Firemní video</h5>
                  </div>
                  <p className="text-pink-400 font-bold text-lg mb-2">od 1 800 Kč</p>
                  <p className="text-gray-300 text-sm">Profesionální střih vašich záběrů</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-pink-500/20">
                  <div className="flex items-center mb-4">
                    <Youtube className="w-6 h-6 text-pink-500 mr-3" />
                    <h5 className="text-white font-bold">YouTube video</h5>
                  </div>
                  <p className="text-pink-400 font-bold text-lg mb-2">od 1 500 Kč</p>
                  <p className="text-gray-300 text-sm">Střih + titulky + thumbnaily</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-pink-500/20">
                  <div className="flex items-center mb-4">
                    <Edit3 className="w-6 h-6 text-pink-500 mr-3" />
                    <h5 className="text-white font-bold">Color grading</h5>
                  </div>
                  <p className="text-pink-400 font-bold text-lg mb-2">od 600 Kč</p>
                  <p className="text-gray-300 text-sm">Základní korekce barev a světel</p>
                </div>
              </div>
            </div>

            {/* Balíčky pro sociální média */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-center mb-8 text-white">Balíčky pro sociální média</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Stories Pack</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 3 200 Kč</p>
                  <p className="text-gray-300 text-sm">3 jednoduché animované stories</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Video className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Reels Package</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 4 800 Kč</p>
                  <p className="text-gray-300 text-sm">3 Reels/TikTok videa</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-blue-500/20">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-6 h-6 text-blue-400 mr-3" />
                    <h5 className="text-white font-bold">Ads Creative Set</h5>
                  </div>
                  <p className="text-blue-400 font-bold text-lg mb-2">od 8 500 Kč</p>
                  <p className="text-gray-300 text-sm">Kompletní sada pro PPC kampaně</p>
                </div>
              </div>
            </div>

            {/* Individuální projekty */}
            <div className="mb-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 sm:p-8 rounded-xl border border-purple-500/30 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">Komplexní projekty na míru</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  Potřebujete něco specifického? Vytvořím cenovou nabídku přesně podle vašich požadavků. 
                  Specializuji se na motion graphics a pokročilé techniky v After Effects.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Explainer videa</h5>
                    <p className="text-gray-400 text-sm">animovaná vysvětlující videa</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Dlouhodobá spolupráce</h5>
                    <p className="text-gray-400 text-sm">měsíční balíčky obsahu</p>
                  </div>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h5 className="text-purple-300 font-bold mb-1">Speciální efekty</h5>
                    <p className="text-gray-400 text-sm">pokročilé VFX techniky</p>
                  </div>
                </div>
                <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors">
                  <span>Nezávazná konzultace zdarma</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Proč motion graphics fungují */}
            <div className="mb-20 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">Proč motion graphics fungují?</h3>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                Animovaný obsah má až 1200% vyšší engagement než statické obrázky a je sdílen 3x častěji.
              </p>
              
              {/* Statistiky */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">80%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Lepší zapamatování</h4>
                      <p className="text-gray-400 text-sm">Video vs. text</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Lidé si zapamatují 80% z toho, co vidí a dělají, ale jen 20% z toho, co čtou.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">54x</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vyšší engagement</h4>
                      <p className="text-gray-400 text-sm">Sociální sítě</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Video obsah má 54x vyšší pravděpodobnost, že se objeví na první stránce Google.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">65%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vyšší konverze</h4>
                      <p className="text-gray-400 text-sm">Landing pages</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Přidání videa na landing page může zvýšit konverze až o 65%.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">3x</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Více sdílení</h4>
                      <p className="text-gray-400 text-sm">Virální potenciál</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Video obsah je sdílen 3x častěji než text a obrázky dohromady.
                  </p>
                </div>
              </div>

              {/* Moje odbornost */}
              <div className="text-center mb-12">
                <h4 className="text-2xl font-bold text-white mb-8">Moje odbornost</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-emerald-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">After Effects Expert</h5>
                    <p className="text-gray-300 text-sm">
                      Pokročilé motion graphics, animace a VFX efekty v Adobe After Effects.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-cyan-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Edit3 className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Premiere Pro Specialist</h5>
                    <p className="text-gray-300 text-sm">
                      Profesionální střih, color grading a postprodukce všech typů videí.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-violet-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Marketing Focus</h5>
                    <p className="text-gray-300 text-sm">
                      Každé video vytvářím s důrazem na dosažení vašich obchodních cílů.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center mt-16">
              <Link href="/kontakt" className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-base sm:text-lg hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
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
                  Jak probíhá tvorba motion graphics
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Strukturovaný proces od briefingu po finální dodání zajišťuje, 
                  že výsledné video bude přesně podle vašich představ a cílů.
                </p>
              </div>
              
              <ProcessStep
                number={1}
                title="Kreativní briefing"
                description="Proberu s vámi vizi, cíle a představy o videu. Analyzujeme cílovou skupinu, platformy kde bude video použito a definujeme klíčové prvky, které má video komunikovat."
              />
              
              <ProcessStep
                number={2}
                title="Koncept a storyboard"
                description="Na základě briefingu vytvořím koncept a základní storyboard. U motion graphics navrhuji animační styl, u střihu stanovím strukturu a tempo videa."
              />
              
              <ProcessStep
                number={3}
                title="Produkce v After Effects/Premiere"
                description="Vytvořím animace v After Effects nebo provedu střih v Premiere Pro. Zahrnuje animace, efekty, color grading, zvukový design a všechny potřebné úpravy."
              />
              
              <ProcessStep
                number={4}
                title="Revize a doladění"
                description="Předložím první verzi k připomínkám. Podle vašich požadavků provedu revize a doladíme každý detail do finální podoby."
              />
              
              <ProcessStep
                number={5}
                title="Finální export a dodání"
                description="Připravím finální verze ve všech potřebných formátech a rozlišeních optimalizovaných pro různé platformy (web, sociální sítě, TV)."
                isLast
              />
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30 mt-12">
              <h4 className="text-xl font-bold text-white mb-4">Máte zájem o spolupráci?</h4>
              <p className="text-gray-300 mb-6">
                Ať už potřebujete animovanou reklamu, střih podcastu nebo komplexní motion graphics projekt, rád vám pomohu vytvořit video obsah, který zaujme.
              </p>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
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

export default VideoServicesPage;