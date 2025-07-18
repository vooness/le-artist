"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Code,
  ChevronRight,
  Star,
  Zap,
  Shield,
  Clock,
  Award,
  Users,
  TrendingUp,
  Monitor,
  Briefcase,
  Crown
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

// Futuristický prvek procesu

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

// Webové služby komponenta
const WebServicesPage: React.FC = () => {
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
            <span className="text-orange-500">Webové</span>{" "}
            <span className="text-white">stránky</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Moderní, responzivní a přehledné webové stránky navržené na míru. Specializuji se na 
            tvorbu webů které skutečně prodávají a pomáhají vašemu podnikání růst.
          </p>
          
          {/* Hook sekce */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">Dodání do 14 dní</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">Záruka spokojenosti</span>
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
                  <span className="text-white font-medium text-xs sm:text-base">Responzivní design</span>
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
                  <span className="text-white font-medium text-xs sm:text-base">Rychlé načítání</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Moderní UX/UI</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Individuální přístup</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-3 sm:p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-base">Dlouhodobá podpora</span>
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
                Vyberte si váš balíček webových stránek
              </h3>
              <p className="text-gray-300 text-base md:text-lg">
                Každý balíček je navržen pro konkrétní potřeby a velikost podnikání. 
                Všechny zahrnují moderní design, SEO optimalizaci a technickou podporu.
              </p>
            </div>

            {/* Balíčky služeb */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
              <PricingPackage
                title="Prezentační"
                price="od 15 000 Kč"
                features={[
                  "jednostránkový web",
                  "Responzivní design",
                  "Kontaktní formulář",
                  "Základní SEO",
                  "Google Analytics",
                  "SSL certifikát",
                  "Optimalizace rychlosti",
                  "Hosting zajištěn (platíte jen domunu)"
                ]}
                color="#F97316"
                icon={<Monitor className="w-5 h-5" />}
              />
              
              <PricingPackage
                title="Business"
                price="od 30 000 Kč"
                features={[
                  "5-10 podstránek",
                  "Blog systém",
                  "Pokročilé SEO",
                  "Unikátní moderní vzhled",
                  "Google Mapy integrace",
                  "Kontaktní a objednávkové formuláře",
                  "Analytics a konverze tracking",
                  "Performance optimalizace",
                  "Hosting zajištěn (platíte jen doménu)"
                ]}
                color="#F97316"
                isPopular={true}
                icon={<Briefcase className="w-5 h-5" />}
              />
              
              <PricingPackage
                title="Pro"
                price="od 60 000 Kč"
                features={[
                  "15+ podstránek",
                  "Vícejazyčná verze",
                  "Pokročilá analytika",
                  "Profesionální vzhled",
                  "Vlastní funkce na míru",
                  "A/B testing setup",
                  "Schema markup",
                  "Pokročilé SEO auditování",
                  "3 měsíce technická podpora zdarma",
                  "Hosting zajištěn (platíte jen doménu)"
                ]}
                color="#F97316"
                icon={<Crown className="w-5 h-5" />}
              />
            </div>

            {/* Hosting informace */}
            <div className="mb-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 sm:p-8 rounded-xl border border-blue-500/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Hosting bez starostí</h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  O hosting se postarám já prostřednictvím profesionálních služeb Vercel. 
                  Váš web bude rychlý, bezpečný a dostupný 24/7. <span className="text-blue-400 font-medium">
                  Vy platíte pouze za doménu (cca 300-500 Kč/rok)</span> - hosting je součástí 
                  mých služeb. Žádné měsíční poplatky za hosting, žádné technické starosti.
                </p>
              </div>
            </div>

            {/* Proč web za 5000 Kč nestačí */}
            <div className="mb-20 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Proč web za 5 000 Kč nestačí?
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Levný web vás bude stát víc, než si myslíte. Zde je rozdíl mezi amatérským 
                  a profesionálním přístupem.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Levný web */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-xl border border-red-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-400 font-bold text-lg">5K</span>
                    </div>
                    <h4 className="text-red-400 font-bold text-lg">Levný web</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Šablona za pár korun
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Žádné SEO nebo špatné SEO
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Pomalé načítání (3+ sekundy)
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Nevyhovuje na mobilu
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Žádná podpora po dodání
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2 mt-1">×</span>
                      Nepřináší zákazníky
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <p className="text-red-300 text-sm font-medium">
                      Výsledek: Za rok potřebujete nový web → skutečná cena 15 000+ Kč
                    </p>
                  </div>
                </div>

                {/* Profesionální web */}
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-xl border border-green-500/30">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-400 font-bold text-lg">15K+</span>
                    </div>
                    <h4 className="text-green-400 font-bold text-lg">Profesionální web</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Design na míru vašemu podnikání
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Profesionální SEO optimalizace
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Rychlost pod 1 sekundu
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Perfektní na všech zařízeních
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Dlouhodobá podpora a údržba
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      Skutečně přináší zákazníky
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-green-300 text-sm font-medium">
                      Výsledek: Investice, která se vrátí během 3-6 měsíců
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6 rounded-xl border border-slate-600/30">
                <h5 className="text-white font-bold text-lg mb-2">Pamatujte si:</h5>
                <p className="text-gray-300">
                  Kvalitní web není náklad, ale <span className="text-orange-400 font-semibold">investice do růstu vašeho podnikání</span>. 
                  Rozdíl v ceně se vrátí už prvním novým zákazníkem.
                </p>
              </div>
            </div>
            
            {/* Hook obsah - proč si vybrat mě */}
            <div className="mb-20 max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center mb-4 text-white">Proč investovat do profesionálního webu?</h3>
              <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
                Kvalitní web není náklad, ale nástroj, který vám vydělává peníze. Zde jsou konkrétní důvody, proč se profesionální přístup vyplatí.
              </p>
              
              {/* Statistiky - první řada */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">3x</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Vyšší konverze</h4>
                      <p className="text-gray-400 text-sm">Oproti levným šablonám</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Profesionálně navržený web převede 3x více návštěvníků na zákazníky díky promyšlené UX a psychologii prodeje.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">80%</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Rychlejší načítání</h4>
                      <p className="text-gray-400 text-sm">Pod 1 sekundu vs 3+ sekundy</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Každá sekunda zpoždění znamená 7% méně konverzí. Moje weby se načítají bleskově rychle.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">5x</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Lepší pozice v Google</h4>
                      <p className="text-gray-400 text-sm">Díky profesionálnímu SEO</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Správně optimalizovaný web se dostane na první stránku Google 5x rychleji než šablonový web.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">ROI</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Rychlá návratnost</h4>
                      <p className="text-gray-400 text-sm">Průměrně za 3-6 měsíců</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Kvalitní web se zaplatí sám už několika novými zákazníky. Není to náklad, ale investice.
                  </p>
                </div>
              </div>

              {/* Co dostanete navíc */}
              <div className="text-center mb-12">
                <h4 className="text-2xl font-bold text-white mb-8">Moje garance úspěchu</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-emerald-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Dodání na čas</h5>
                    <p className="text-gray-300 text-sm">
                      98% projektů dodávám přesně v termínu nebo dříve. Termín je pro mě závazek.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-cyan-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Záruka spokojenosti</h5>
                    <p className="text-gray-300 text-sm">
                      Pokud nebudete spokojeni, upravím web dokud nebude přesně podle vašich představ.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-6 rounded-xl border border-violet-500/30">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h5 className="text-white font-bold mb-2">Podpora růstu</h5>
                    <p className="text-gray-300 text-sm">
                      Nejen web, ale i strategie jak získat více zákazníků a zvýšit tržby.
                    </p>
                  </div>
                </div>
              </div>

              {/* Výsledky které dostanete */}
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-8 rounded-xl border border-slate-600/30 text-center">
                <h4 className="text-xl font-bold text-white mb-6">Co konkrétně získáte</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Technicky:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Web který se načte pod 1 sekundu</li>
                      <li>• Perfektní zobrazení na všech zařízeních</li>
                      <li>• Top pozice v Google vyhledávání</li>
                      <li>• Zabezpečení proti hackerům</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-orange-400 font-bold mb-2">Obchodně:</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Více zákazníků z internetu</li>
                      <li>• Vyšší důvěryhodnost značky</li>
                      <li>• Automatizace části prodeje</li>
                      <li>• Měřitelné výsledky a růst</li>
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
                  Jak probíhá tvorba webu
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Transparentní proces od první konzultace po spuštění webu. 
                  Budete vědět, co se děje v každé fázi projektu.
                </p>
              </div>
              
              <ProcessStep
                number={1}
                title="Konzultace a analýza"
                description="V první fázi se seznámíme s vaším projektem a cílovou skupinou. Analyzujeme konkurenci, stanovíme cíle webu a společně vytvoříme strategii, která skutečně funguje."
              />
              
              <ProcessStep
                number={2}
                title="Design a wireframy"
                description="Vytvoříme grafický návrh a strukturu webu zaměřenou na konverze. Design bude reflektovat vaši značku a splňovat moderní standardy uživatelského prožitku."
              />
              
              <ProcessStep
                number={3}
                title="Vývoj a optimalizace"
                description="Naprogramujeme funkční web s důrazem na rychlost, SEO a bezpečnost. Implementujeme všechny požadované funkce a otestujeme na všech zařízeních."
              />
              
              <ProcessStep
                number={4}
                title="Spuštění a školení"
                description="Po finálním schválení web spustíme a provedeme školení pro správu obsahu. Poskytneme detailní dokumentaci a zůstáváme k dispozici pro případné dotazy."
                isLast
              />
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30 mt-12">
              <h4 className="text-xl font-bold text-white mb-4">Máte zájem o spolupráci?</h4>
              <p className="text-gray-300 mb-6">
                Každý projekt začíná nezávaznou konzultací. Kontaktujte mě a společně vytvoříme web, který skutečně funguje a přináší výsledky.
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

export default WebServicesPage;