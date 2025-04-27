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
  Truck
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

// Futuristická položka s checkmarkem
const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="mr-3 mt-1 text-green-500 flex-shrink-0">
        <Check className="w-5 h-5" />
      </div>
      <span className="text-gray-300">{children}</span>
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
      className="relative rounded-lg overflow-hidden h-full"
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
        
        {/* Název balíčku */}
        <h3 
          className="text-2xl font-bold mb-2" 
          style={{ color }}
        >
          {title}
        </h3>
        
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

// Shoptet služby komponenta
const ShoptetServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'process'>('pricing');
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Futuristické animované pozadí */}
      <FuturisticBackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
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
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Shoptet E-shop Služby
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Kompletní řešení e-shopu na platformě Shoptet, včetně úprav šablon na míru. 
            Spojím své zkušenosti s osvědčenou platformou a vytvořím e-shop, 
            který bude prodávat.
          </p>
          
          {/* Hodinová sazba */}
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-orange-500 bg-orange-500/10 backdrop-blur-sm flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-white font-medium">Hodinová sazba od</span>
              <span className="text-orange-500 text-xl font-bold ml-2">900 Kč</span>
            </div>
          </div>
          
          {/* Vlastnosti služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <FeatureItem>Responzivní design</FeatureItem>
            <FeatureItem>Úpravy šablon</FeatureItem>
            <FeatureItem>Instalace doplňků</FeatureItem>
            <FeatureItem>Nastavení marketingu</FeatureItem>
            <FeatureItem>Propojení s ERP</FeatureItem>
            <FeatureItem>Podpora po spuštění</FeatureItem>
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
            {/* Balíčky služeb */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <PricingPackage
                title="Základní e-shop"
                price="od 25 000 Kč"
                features={[
                  "Základní nastavení Shoptet",
                  "Úprava šablony",
                  "Instalace 5 doplňků",
                  "Propojení s platební bránou",
                  "Nastavení dopravy",
                  "30 dní podpory zdarma"
                ]}
                color="#F97316"
                icon={<ShoppingCart className="w-6 h-6" />}
              />
              
              <PricingPackage
                title="Business e-shop"
                price="od 35 000 Kč"
                features={[
                  "Kompletní nastavení Shoptet",
                  "Vlastní úpravy šablony",
                  "Instalace 10 doplňků",
                  "Napojení na účetní systém",
                  "Nastavení Google Analytics",
                  "SEO optimalizace",
                  "60 dní podpory zdarma"
                ]}
                color="#F97316"
                icon={<Settings className="w-6 h-6" />}
              />
              
              <PricingPackage
                title="Premium e-shop"
                price="od 50 000 Kč"
                features={[
                  "Komplexní individuální řešení",
                  "Vlastní design",
                  "Neomezené množství doplňků",
                  "Napojení na ERP systémy",
                  "Marketingová automatizace",
                  "Školení pro zaměstnance",
                  "Pokročilá SEO optimalizace",
                  "90 dní podpory zdarma"
                ]}
                color="#F97316"
                icon={<Layout className="w-6 h-6" />}
              />
            </div>
            
            {/* Další možnosti */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Doplňkové služby</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <Settings className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Instalace doplňků</h4>
                    <p className="text-sm text-gray-300">od 500 Kč / doplněk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <Layout className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Úprava šablony</h4>
                    <p className="text-sm text-gray-300">od 3 000 Kč</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <Truck className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Nastavení dopravy a plateb</h4>
                    <p className="text-sm text-gray-300">od 1 500 Kč</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  >
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Měsíční správa e-shopu</h4>
                    <p className="text-sm text-gray-300">od 2 500 Kč / měsíc</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Kontaktujte mě pro kalkulaci</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <p className="text-gray-400 mt-4">
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
            <div className="mb-16">
              <ProcessStep
                number={1}
                title="Analýza potřeb"
                description="V první fázi se seznámíme s vaším podnikáním a produkty. Provedeme analýzu vašich potřeb, konkurence a cílového trhu. Definujeme funkce, které váš e-shop potřebuje, a vytvoříme plán implementace."
              />
              
              <ProcessStep
                number={2}
                title="Nastavení a přizpůsobení"
                description="Vytvoříme vaši Shoptet licenci, nastavíme základní parametry e-shopu a vybereme vhodnou šablonu. Tu následně upravíme podle vašich požadavků, aby odpovídala vaší firemní identitě a potřebám."
              />
              
              <ProcessStep
                number={3}
                title="Implementace a testování"
                description="Nainstalujeme potřebné doplňky, nastavíme platební metody a dopravu. Naplníme e-shop vzorkem produktů a důkladně otestujeme všechny funkce. Optimalizujeme výkon a SEO parametry."
              />
              
              <ProcessStep
                number={4}
                title="Spuštění a podpora"
                description="Po finálním schválení e-shop spustíme, provedeme školení pro správce obchodu a zajistíme nepřetržitou podporu v prvních dnech provozu. Po spuštění poskytujeme servis a pomoc s dalším rozvojem."
                isLast
              />
            </div>
            
            {/* Výhody Shoptetu */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Proč zvolit Shoptet?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureItem>Česká platforma s profesionální podporou</FeatureItem>
                <FeatureItem>Jednoduchá administrace</FeatureItem>
                <FeatureItem>Bezkonkurenční poměr cena/výkon</FeatureItem>
                <FeatureItem>Stovky rozšiřujících doplňků</FeatureItem>
                <FeatureItem>Pravidelné aktualizace systému</FeatureItem>
                <FeatureItem>Stabilní a bezpečné řešení</FeatureItem>
              </div>
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
              <h4 className="text-xl font-bold text-white mb-4">Připraveni začít prodávat online?</h4>
              <p className="text-gray-300 mb-6">
                Získejte profesionální e-shop, který bude fungovat pro vaše podnikání. Kontaktujte mě pro nezávaznou konzultaci.
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
            <h3 className="text-xl font-bold text-white mb-3">Jak dlouho trvá vytvoření e-shopu na Shoptetu?</h3>
            <p className="text-gray-300">
              Doba realizace závisí na rozsahu projektu. Základní e-shop lze zprovoznit již za 2-3 týdny, 
              komplexnější řešení obvykle vyžadují 4-8 týdnů. Vždy záleží na množství vlastních úprav, 
              počtu produktů a požadovaných funkcích.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Potřebuji mít vlastní hosting pro Shoptet?</h3>
            <p className="text-gray-300">
              Ne, Shoptet je cloudové řešení, které již obsahuje hosting v ceně měsíčního pronájmu. 
              Nemusíte se starat o technické zázemí, aktualizace či zabezpečení. Vše je zajištěno v rámci služby.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Je možné napojit Shoptet na účetní systém?</h3>
            <p className="text-gray-300">
              Ano, Shoptet umožňuje propojení s mnoha účetními a ERP systémy jako Pohoda, Money S3, FlexiBee a další. 
              V rámci našich služeb zajistíme kompletní implementaci a nastavení těchto propojení pro bezproblémový 
              chod vašeho podnikání.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Jaké jsou měsíční náklady na provoz e-shopu?</h3>
            <p className="text-gray-300">
              Měsíční náklady zahrnují pronájem Shoptet licence (od 490 Kč/měsíc) a případné 
              poplatky za prémiové doplňky. Nabízíme také službu měsíční správy e-shopu, která 
              zajistí bezproblémový chod, aktualizace a drobné úpravy.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Mohu později svůj e-shop rozšířit?</h3>
            <p className="text-gray-300">
              Rozhodně ano. Shoptet je velmi flexibilní systém, který umožňuje postupné rozšiřování. 
              Začít můžete s jednoduchou verzí a postupně přidávat funkce, upravovat design a optimalizovat 
              procesy podle vašich zkušeností a potřeb.
            </p>
          </div>
        </div>
      </div>

      

      
    </section>
  );
};

export default ShoptetServicesPage;