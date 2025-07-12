"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  ShoppingCart,
  Clock,
  ChevronRight,
  Settings,
  Layout,
  Truck,
  Star,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Target,
  CreditCard,
  BarChart3,
  Crown
} from "lucide-react";

// Předem definované hodnoty pro částice
const particlePositions = [
  { left: "92.35%", color: "#F97316" },
  { left: "87.63%", color: "#38BDF8" },
  { left: "28.47%", color: "#F97316" },
  { left: "62.18%", color: "#38BDF8" },
  { left: "73.92%", color: "#F97316" },
  { left: "81.54%", color: "#38BDF8" },
  { left: "58.76%", color: "#F97316" },
  { left: "94.21%", color: "#38BDF8" },
  { left: "34.58%", color: "#F97316" },
  { left: "68.47%", color: "#38BDF8" },
  { left: "75.34%", color: "#F97316" },
  { left: "48.25%", color: "#38BDF8" },
  { left: "38.72%", color: "#F97316" },
  { left: "89.43%", color: "#38BDF8" },
  { left: "12.69%", color: "#F97316" }
];

// Předem definované hodnoty pro animace částic
const particleAnimations = [
  { leftEnd: "85.21%", delay: 0.7, duration: 11.5 },
  { leftEnd: "82.43%", delay: 1.8, duration: 9.3 },
  { leftEnd: "25.69%", delay: 0.5, duration: 10.8 },
  { leftEnd: "59.37%", delay: 2.1, duration: 12.2 },
  { leftEnd: "70.84%", delay: 1.3, duration: 9.7 },
  { leftEnd: "78.92%", delay: 0.9, duration: 11.1 },
  { leftEnd: "61.45%", delay: 2.4, duration: 10.3 },
  { leftEnd: "91.38%", delay: 1.0, duration: 8.9 },
  { leftEnd: "37.92%", delay: 2.7, duration: 11.7 },
  { leftEnd: "65.23%", delay: 0.8, duration: 10.1 },
  { leftEnd: "72.56%", delay: 1.5, duration: 9.5 },
  { leftEnd: "45.73%", delay: 2.2, duration: 12.8 },
  { leftEnd: "41.94%", delay: 0.6, duration: 10.5 },
  { leftEnd: "86.21%", delay: 1.9, duration: 9.8 },
  { leftEnd: "15.83%", delay: 1.2, duration: 11.3 }
];

// Předem definované hodnoty pro světelné pruhy
const beamSettings = [
  { width: "125.73%", height: "1.42px", color: "#F97316" },
  { width: "142.58%", height: "1.15px", color: "#38BDF8" },
  { width: "131.27%", height: "1.83px", color: "#F97316" },
  { width: "118.64%", height: "1.25px", color: "#38BDF8" },
  { width: "108.45%", height: "1.37px", color: "#F97316" }
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
      {/* Badge nejoblíbenější v pravém horním rohu */}
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

// E-shop služby komponenta
const EshopServicesPage: React.FC = () => {
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
            <span className="text-orange-500">E-shop</span>{" "}
            <span className="text-white">který prodává</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Profesionální e-shop na platformě Shoptet, který skutečně prodává a generuje tržby. 
            Specializuji se na tvorbu obchodů zaměřených na konverze a uživatelský zážitek.
          </p>
          
          {/* Hook sekce */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Spuštění za 14 dní</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Garantovaná funkčnost</span>
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
                  <span className="text-white font-medium text-xs sm:text-base">Optimalizace konverzí</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Mobil-first design</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">SEO optimalizace</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Integrované platby</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Cloudový hosting</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Pokročilá analytika</span>
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
                Vyberte si váš e-shop balíček
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Každý balíček obsahuje vše potřebné pro úspěšný start online prodeje. 
                Shoptet hosting a licenci máte v ceně měsíčního pronájmu.
              </p>
            </div>

            {/* ===== BALÍČKY S OPRAVENÝMI POČTY PRODUKTŮ ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
              <PricingPackage
                title="Starter"
                price="od 25 000 Kč"
                features={[
                  "Nastavení Shoptet účtu",
                  "Základní úprava šablony",
                  "Do 25 produktů",
                  "Základní SEO optimalizace",
                  "Napojení platebních metod",
                  "Nastavení dopravy",
                  "Google Analytics",
                  "30 dní technická podpora"
                ]}
                color="#F97316"
                icon={<ShoppingCart className="w-5 h-5" />}
              />
              
              <PricingPackage
                title="Business"
                price="od 45 000 Kč"
                features={[
                  "Kompletní nastavení Shoptet",
                  "Vlastní úpravy šablony na míru",
                  "Do 100 produktů",
                  "Pokročilé SEO + schema markup",
                  "Integrace s účetním systémem",
                  "Napojení na ERP systémy",
                  "Pokročilá analytika a tracking",
                  "Marketing automatizace",
                  "60 dní technická podpora"
                ]}
                color="#F97316"
                isPopular={true}
                icon={<BarChart3 className="w-5 h-5" />}
              />
              
              <PricingPackage
                title="Pro"
                price="od 75 000 Kč"
                features={[
                  "Neomezený počet produktů",
                  "Zcela vlastní design a funkcionalita",
                  "B2B a B2C řešení",
                  "Vícejazyčné mutace",
                  "Pokročilé CRM integrace",
                  "AI chatbot implementace",
                  "Detailní konverzní optimalizace",
                  "Školení pro tým",
                  "90 dní technická podpora"
                ]}
                color="#F97316"
                icon={<Crown className="w-5 h-5" />}
              />
            </div>

            {/* Shopify prémiová nabídka */}
            <div className="mb-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 sm:p-8 rounded-xl border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Crown className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Shopify - Prémiové řešení</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Pro náročné projekty nabízím také tvorbu e-shopů na platformě <span className="text-purple-400 font-medium">
                  Shopify</span> - světově nejpoužívanější e-commerce platformě. Shopify je ideální 
                  pro mezinárodní obchody, rozsáhlé katalogy a pokročilé funkce.
                </p>
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <p className="text-purple-300 text-sm font-medium">
                    <strong>Cena:</strong> od 50 000 Kč | <strong>Implementace:</strong> Individuální konzultace podle rozsahu projektu
                  </p>
                </div>
              </div>
            </div>

            {/* Custom vzhled a programování */}
            <div className="mb-20 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Vlastní vzhled a programování funkcí
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Dokážu vytvořit zcela unikátní vzhled a naprogramovat jakékoliv specifické funkce 
                  podle vašich potřeb - váš e-shop nebude vypadat šablonově.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Šablonový vs Custom */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-xl border border-red-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                      <Layout className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="text-red-400 font-bold text-lg">Běžné šablonové řešení</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Omezené možnosti vzhledu
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Vypadá stejně jako konkurence
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Funkce pouze z hotových doplňků
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Neoptimalizované pro vaše procesy
                    </li>
                  </ul>
                </div>

                {/* Custom řešení */}
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-xl border border-green-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <Settings className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="text-green-400 font-bold text-lg">Moje custom řešení</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Zcela vlastní design a kódování
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Unikátní vzhled a funkcionalita
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Naprogramované přesně na míru
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Optimalizováno pro vaše procesy
                    </li>
                  </ul>
                </div>
              </div>

              {/* Co dokážu vytvořit a naprogramovat */}
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 sm:p-8 rounded-xl border border-orange-500/30">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Co dokážu vytvořit a naprogramovat</h4>
                
                {/* Vzhledové úpravy */}
                <div className="mb-6">
                  <h5 className="text-orange-400 font-bold mb-4">🎨 Vzhledové úpravy a design:</h5>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Vlastní CSS styly pro šablony</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">HTML úpravy a přizpůsobení</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">JavaScript animace a efekty</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Responzivní mobilní design</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Brandové barevné schéma</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Přizpůsobené produktové stránky</p>
                    </div>
                  </div>
                </div>

                {/* Funkcionalita */}
                <div>
                  <h5 className="text-orange-400 font-bold mb-4">⚙️ Vlastní funkce a integrace:</h5>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">API integrace s ERP/CRM systémy</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Vlastní doplňky a rozšíření</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Google Analytics a tracking</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">E-mail marketing integrace</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Platební brány a služby</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Vlastní checkout úpravy</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">SEO a konverzní optimalizace</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Skladové systémy propojení</p>
                    </div>
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <p className="text-gray-300 text-sm">Účetní software napojení</p>
                    </div>
                  </div>
                </div>
                
                {/* Poznámka o omezeních */}
                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h6 className="text-blue-400 font-bold mb-2">ℹ️ Shoptet Premium možnosti:</h6>
                  <p className="text-gray-300 text-sm">
                    Pro nejnáročnější projekty nabízím <strong>Shoptet Premium</strong> s privátním API a neomezenými 
                    možnostmi customizace - včetně vlastních šablon od nuly a komplexních funkcí na míru.
                  </p>
                </div>
              </div>
            </div>

            {/* Proč e-shop na Shoptetu */}
            <div className="mb-20 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Proč Shoptet pro váš e-shop?
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Shoptet je česká cloudová platforma, která kombinuje jednoduchost použití 
                  s profesionálními funkcemi potřebnými pro úspěšný online obchod.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Shoptet výhody */}
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-xl border border-green-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-400 font-bold text-lg">CZ</span>
                    </div>
                    <h4 className="text-green-400 font-bold text-lg">Shoptet výhody</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Česká platforma s lokální podporou
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Výborný poměr cena/výkon
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Jednoduchá správa a údržba
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Cloudový hosting v ceně
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Rychlé spuštění (14 dní)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Integrované platební brány
                    </li>
                  </ul>
                </div>

                {/* Měsíční náklady */}
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-xl border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-400 font-bold text-lg">€</span>
                    </div>
                    <h4 className="text-blue-400 font-bold text-lg">Měsíční náklady</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Shoptet licence: od 490 Kč/měsíc
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Platební brána: 2,9% z tržeb
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Premium doplňky: 200-800 Kč/měsíc
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Hosting: součást licence ✓
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Aktualizace: automatické ✓
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      Zabezpečení: v ceně ✓
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 rounded-xl border border-slate-600/30">
                <h5 className="text-white font-bold text-lg mb-2">Žádné skryté poplatky</h5>
                <p className="text-gray-300">
                  Na rozdíl od vlastního hostingu <span className="text-orange-400 font-semibold">neplatíte za technickou údržbu, 
                  aktualizace nebo zabezpečení</span>. Vše je součástí měsíční licence Shoptet.
                </p>
              </div>
            </div>
            
            {/* Proč investovat do profesionálního e-shopu */}
            <div className="mb-20 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">Proč investovat do profesionálního e-shopu?</h3>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                E-shop není jen katalog produktů - je to prodejní nástroj, který musí přesvědčit návštěvníka k nákupu za několik sekund.
              </p>
              
              {/* Statistiky */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">4x</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vyšší konverze</h4>
                      <p className="text-gray-400 text-sm">Oproti šablonové verzi</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Optimalizovaný e-shop převede 4x více návštěvníků na zákazníky díky důmyslné UX a psychology prodeje.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">67%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Mobilní nákupy</h4>
                      <p className="text-gray-400 text-sm">Podíl z celkových tržeb</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Bez optimalizace pro mobily přicházíte o 2/3 potenciálních zákazníků. Mobilní verze je klíčová.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">15s</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Doba rozhodnutí</h4>
                      <p className="text-gray-400 text-sm">Průměrná doba před nákupem</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Máte jen 15 sekund na to přesvědčit zákazníka. Každý detail designu a UX musí sedět.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">ROI</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Rychlá návratnost</h4>
                      <p className="text-gray-400 text-sm">Typicky za 2-4 měsíce</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Profesionální e-shop se zaplatí během několika měsíců díky vyšším konverzím a průměrné hodnotě objednávky.
                  </p>
                </div>
              </div>

              {/* Moje garance */}
              <div className="text-center mb-12">
                <h4 className="text-2xl font-bold text-white mb-8">Moje garance úspěchu</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-emerald-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Konverzní optimalizace</h5>
                    <p className="text-gray-300 text-sm">
                      Každý element navržen s cílem maximalizovat prodeje a průměrnou hodnotu košíku.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-cyan-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Testování a data</h5>
                    <p className="text-gray-300 text-sm">
                      Kontinuální A/B testování a optimalizace na základě reálných dat o chování zákazníků.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-violet-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Dlouhodobý růst</h5>
                    <p className="text-gray-300 text-sm">
                      Strategie a nástroje pro škálování obchodu a zvyšování tržeb v čase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Co konkrétně získáte */}
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-8 rounded-xl border border-slate-600/30 text-center">
                <h4 className="text-xl font-bold text-white mb-6">Co konkrétně získáte</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Technicky:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Rychlý a responzivní e-shop</li>
                      <li>• Optimalizovaný nákupní proces</li>
                      <li>• Integrované platební metody</li>
                      <li>• Cloudový hosting a zabezpečení</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Obchodně:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Vyšší konverze a tržby</li>
                      <li>• Automatizované procesy</li>
                      <li>• Detailní analytika prodejů</li>
                      <li>• Škálovatelné řešení</li>
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
                Každý e-shop je jedinečný. Kontaktujte mě pro nezávaznou konzultaci a přesnou kalkulaci.
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
                  Jak probíhá tvorba e-shopu
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Systematický proces od analýzy po spuštění zajišťuje, že váš e-shop 
                  bude od prvního dne prodávat a generovat tržby.
                </p>
              </div>
              
              <ProcessStep
                number={1}
                title="Analýza a strategie"
                description="Analyzujeme vaše produkty, cílovou skupinu a konkurenci. Definujeme prodejní strategii, strukturu e-shopu a požadované funkce. Vytvoříme detailní plán implementace s jasnými milníky."
              />
              
              <ProcessStep
                number={2}
                title="Design a UX optimalizace"
                description="Navrhneme design zaměřený na konverze a vytvoříme prototypy klíčových stránek. Optimalizujeme nákupní proces, košík a checkout pro maximální dokončenost objednávek."
              />
              
              <ProcessStep
                number={3}
                title="Implementace a konfigurace"
                description="Nastavíme Shoptet e-shop, implementujeme design a konfigurujeme všechny potřebné funkce. Integrujeme platební metody, dopravu, skladové systémy a analytické nástroje."
              />
              
              <ProcessStep
                number={4}
                title="Testování a spuštění"
                description="Důkladně otestujeme všechny funkce, naplníme e-shop produkty a provedeme konečnou optimalizaci. Po schválení e-shop spustíme a zajistíme školení a podporu."
                isLast
              />
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30 mt-12">
              <h4 className="text-xl font-bold text-white mb-4">Připraveni začít prodávat online?</h4>
              <p className="text-gray-300 mb-6">
                Získejte profesionální e-shop, který skutečně prodává a přináší výsledky. Kontaktujte mě pro nezávaznou konzultaci a cenovou nabídku.
              </p>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Nezávazná konzultace</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {/* FAQ Sekce */}
      <div className="max-w-4xl mx-auto mt-20 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Často kladené otázky
        </h2>

        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Jak dlouho trvá vytvoření e-shopu?</h3>
            <p className="text-gray-300">
              Standardní e-shop na Shoptetu dokážu spustit za 10-14 dní. Komplexnější řešení s vlastními funkcemi 
              a integrací obvykle zabere 3-6 týdnů. Shopify projekty 4-8 týdnů podle rozsahu customizace.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Kolik stojí měsíční provoz e-shopu?</h3>
            <p className="text-gray-300">
              <strong>Shoptet:</strong> licence od 490 Kč/měsíc + platební brána 2,9% z tržeb. Hosting, aktualizace a zabezpečení v ceně.<br/>
              <strong>Shopify:</strong> od $29/měsíc + transakční poplatky 2,9%. Více funkcí a flexibility.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Můžete naprogramovat specifické funkce na míru?</h3>
            <p className="text-gray-300">
              Ano, specializuji se na custom kódování. Dokážu vytvořit vlastní kalkulátory, rezervační systémy, 
              B2B funkce, specifické filtry nebo jakoukoliv jinou funkcionalitu přesně podle vašich potřeb.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Jak zajistíte, aby e-shop skutečně prodával?</h3>
            <p className="text-gray-300">
              Používám konverzní optimalizaci na základě psychologie prodeje, A/B testování klíčových elementů, 
              optimalizaci pro mobily a důkladnou analýzu zákazníků. Každý detail je navržen pro maximální prodeje.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Kdy zvolit Shoptet a kdy Shopify?</h3>
            <p className="text-gray-300">
              <strong>Shoptet:</strong> Ideální pro český trh, střední e-shopy, jednoduchou správu a nižší náklady.<br/>
              <strong>Shopify:</strong> Lepší pro mezinárodní prodej, rozsáhlé katalogy, pokročilé funkce a větší flexibilitu.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Zajistíte i propojení s účetním systémem?</h3>
            <p className="text-gray-300">
              Ano, běžně implementuji napojení na Pohoda, Money S3, FlexiBee a další účetní systémy. 
              Včetně automatické synchronizace objednávek, zásob a fakturace pro bezproblémový chod.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EshopServicesPage;