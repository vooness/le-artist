"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Code,
  Clock,
  ChevronRight
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
}

const PricingPackage: React.FC<PricingPackageProps> = ({ 
  title, 
  price, 
  features, 
  color 
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

// Webové služby komponenta
const WebServicesPage: React.FC = () => {
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
            Webové Služby
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Moderní, responzivní a přehledné webové stránky navržené na míru. Specializuji se na 
            tvorbu webů a integraci moderních technologií, které pomáhají vašemu 
            podnikání růst.
          </p>
          
          {/* Hodinová sazba */}
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-orange-500 bg-orange-500/10 backdrop-blur-sm flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-white font-medium">Hodinová sazba od</span>
              <span className="text-orange-500 text-xl font-bold ml-2">1000 Kč</span>
            </div>
          </div>
          
          {/* Vlastnosti služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <FeatureItem>Responzivní design</FeatureItem>
            <FeatureItem>SEO optimalizace</FeatureItem>
            <FeatureItem>Rychlé načítání</FeatureItem>
            <FeatureItem>Moderní UX/UI</FeatureItem>
            <FeatureItem>Individuální přístup</FeatureItem>
            <FeatureItem>Pravidelná údržba</FeatureItem>
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
                title="Basic"
                price="od 20 000 Kč"
                features={[
                  "Do 5 stránek",
                  "Responzivní design",
                  "Kontaktní formulář",
                  "Základní SEO",
                  "Dodání 10 dní"
                ]}
                color="#F97316"
              />
              
              <PricingPackage
                title="Business"
                price="od 35 000 Kč"
                features={[
                  "Až 10 stránek",
                  "Blog systém",
                  "Pokročilé funkce",
                  "Napojení na sociální sítě",
                  "Dodání 20 dní"
                ]}
                color="#F97316"
              />
              
              <PricingPackage
                title="Premium"
                price="od 50 000 Kč"
                features={[
                  "Neomezený počet stránek",
                  "Vlastní administrace",
                  "E-mail marketing",
                  "Analytika návštěvnosti",
                  "Optimalizace pro vyhledávače",
                  "Dodání 30 dní"
                ]}
                color="#F97316"
              />
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
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
                title="Konzultace"
                description="V první fázi se seznámíme s vaším projektem. Během konzultace analyzujeme vaše potřeby, cíle a představy. Společně stanovíme rozsah projektu, funkcionalitu a časový harmonogram."
              />
              
              <ProcessStep
                number={2}
                title="Návrh designu"
                description="Vytvoříme grafický návrh vašeho webu, který bude reflektovat vaši značku a splňovat moderní standardy webdesignu. Po schválení návrhu pokračujeme na další krok."
              />
              
              <ProcessStep
                number={3}
                title="Vývoj & testování"
                description="Podle schváleného návrhu vytvoříme funkční web, implementujeme všechny požadované funkce a zajistíme, že vše funguje na všech zařízeních a prohlížečích. Následně probíhá důkladné testování."
              />
              
              <ProcessStep
                number={4}
                title="Spuštění webu"
                description="Po finálním schválení web spustíme na vámi vybranou doménu. Nabízíme i pomoc s výběrem a nastavením hostingu, pokud je potřeba. Poskytujeme krátké školení pro správu obsahu."
                isLast
              />
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
              <h4 className="text-xl font-bold text-white mb-4">Máte zájem o spolupráci?</h4>
              <p className="text-gray-300 mb-6">
                Každý projekt začíná nezávaznou konzultací. Kontaktujte mě a společně vytvoříme web, který posune vaše podnikání na další úroveň.
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