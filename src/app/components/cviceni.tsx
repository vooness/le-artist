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
  Briefcase
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
        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-20">
          Nejoblíbenější
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
      
      <div className="max-w-5xl mx-auto relative z-10">
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
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-indigo-500 mb-6">
            Interaktivní cvičení
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            E‑learningové moduly pro ZŠ a SŠ: kvízy, úlohy a hry s podporou SCORM exportu.
            Vytvářím efektivní interaktivní obsah, který bude motivovat k učení a pomůže
            studentům lépe pochopit probíranou látku.
          </p>
          
          {/* Hodinová sazba */}
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-indigo-500 bg-indigo-500/10 backdrop-blur-sm flex items-center">
              <Clock className="w-5 h-5 text-indigo-500 mr-3" />
              <span className="text-white font-medium">Hodinová sazba od</span>
              <span className="text-indigo-500 text-xl font-bold ml-2">750 Kč</span>
            </div>
          </div>
          
          {/* Vlastnosti služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <FeatureItem>Responzivní design</FeatureItem>
            <FeatureItem>Podpora na všech zařízeních</FeatureItem>
            <FeatureItem>Různé typy interakcí</FeatureItem>
            <FeatureItem>Export do SCORM formátu</FeatureItem>
            <FeatureItem>Sledování výsledků</FeatureItem>
            <FeatureItem>Individuální přístup</FeatureItem>
          </div>
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 relative ${
                activeTab === 'pricing' ? 'text-indigo-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ceník
              {activeTab === 'pricing' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 relative ${
                activeTab === 'process' ? 'text-indigo-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Postup
              {activeTab === 'process' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500"
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
                title="Základní cvičení"
                price="od 5 000 Kč"
                features={[
                  "HTML5 interaktivní obsah",
                  "Jednoduchý design",
                  "Kvízy a testové otázky",
                  "Drag & drop aktivity",
                  "Responzivní layout",
                  "2 revize zdarma",
                  "Dodání do 7 dnů"
                ]}
                color="#818CF8"
                icon={<Puzzle className="w-6 h-6" />}
              />
              
              <PricingPackage
                title="Standardní e-learning"
                price="od 12 000 Kč"
                features={[
                  "Pokročilé interaktivní prvky",
                  "Vlastní grafický design",
                  "Animované přechody",
                  "Propracovanější scénář",
                  "SCORM export",
                  "Multimediální obsah",
                  "3 revize zdarma",
                  "Dodání do 14 dnů"
                ]}
                color="#818CF8"
                icon={<ActivitySquare className="w-6 h-6" />}
                popular={true}
              />
              
              <PricingPackage
                title="Articulate Storyline 360"
                price="od 20 000 Kč"
                features={[
                  "Plně profesionální řešení",
                  "Pokročilé interakce a simulace",
                  "Komplexní scénář a personalizace",
                  "Sofistikované hodnocení",
                  "Pokročilé sledování výsledků",
                  "Videotutoriály pro instruktory",
                  "Neomezené revize po dobu vývoje",
                  "Dodání do 21 dnů"
                ]}
                color="#818CF8"
                icon={<Layers className="w-6 h-6" />}
              />
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
              <h3 className="text-xl font-bold text-white mb-4">Doplňkové služby</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(129, 140, 248, 0.1)' }}
                  >
                    <ActivitySquare className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Dodatečné cvičení</h4>
                    <p className="text-sm text-gray-300">od 3 000 Kč / cvičení</p>
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
                    <h4 className="font-bold text-white mb-1">Konverze do SCORM</h4>
                    <p className="text-sm text-gray-300">od 2 500 Kč</p>
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
                    <h4 className="font-bold text-white mb-1">Vytvoření scénáře</h4>
                    <p className="text-sm text-gray-300">od 4 000 Kč</p>
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
                    <p className="text-sm text-gray-300">+40% k ceně</p>
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
        </div>
  
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
              <h3 className="text-xl font-bold text-white mb-3">Jaký je rozdíl mezi základním a pokročilým interaktivním cvičením?</h3>
              <p className="text-gray-300">
                Základní cvičení obvykle obsahují jednodušší interakce jako kvízy a přiřazování, 
                s jednoduchým designem a lineární strukturou. Pokročilá cvičení využívají komplexnější 
                interakce, propracovaný design, větvení scénářů, adaptivní učení a pokročilejší hodnocení 
                výsledků. Articulate Storyline 360 pak umožňuje vytváření sofistikovaných simulací, 
                komplexních scénářů a personalizaci obsahu.
              </p>
            </div>
  
            {/* FAQ Item 3 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Na jakých zařízeních budou interaktivní cvičení fungovat?</h3>
              <p className="text-gray-300">
                Vytvářená cvičení jsou plně responzivní a fungují na všech běžných zařízeních 
                - počítačích, tabletech i chytrých telefonech s podporou moderních webových prohlížečů. 
                Při vývoji dbám na optimalizaci pro různé velikosti obrazovek a zajišťuji, 
                aby cvičení fungovala jak s myší, tak s dotykovým ovládáním.
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
              <h3 className="text-xl font-bold text-white mb-3">Vytváříte i obsah cvičení, nebo jen technické řešení?</h3>
              <p className="text-gray-300">
                Nabízím obě možnosti. Mohu pracovat s vaším vlastním obsahem a materiály, 
                které převedu do interaktivní podoby. Případně mohu pomoci i s vytvořením 
                samotného vzdělávacího obsahu ve spolupráci s vašimi pedagogy nebo odborníky. 
                Za příplatek zajistím i kompletní tvorbu vzdělávacího obsahu od základů.
              </p>
            </div>
          </div>
        </div>
  
        {/* Reference */}
        <div className="max-w-5xl mx-auto mt-20 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Reference klientů
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimoniál 1 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 relative">
              <div className="text-indigo-500 text-5xl absolute -top-5 -left-2 opacity-20">"</div>
              <p className="text-gray-300 mb-4 relative z-10">
                Spolupráce na interaktivních cvičeních pro naši školu byla skvělá. Studenti si 
                chválí zábavnou formu učení a učitelé oceňují možnost sledovat pokrok a výsledky. 
                Cvičení skvěle doplňují výuku a pomáhají lépe pochopit probíranou látku.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 font-bold mr-3">
                  JM
                </div>
                <div>
                  <div className="text-white font-medium">Jana Malá</div>
                  <div className="text-gray-400 text-sm">Ředitelka, ZŠ Duha</div>
                </div>
              </div>
            </div>
  
            {/* Testimoniál 2 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 relative">
              <div className="text-indigo-500 text-5xl absolute -top-5 -left-2 opacity-20">"</div>
              <p className="text-gray-300 mb-4 relative z-10">
                Interaktivní cvičení vytvořená pomocí Articulate Storyline 360 předčila naše očekávání. 
                Komplexní výukové moduly s propracovanými simulacemi a scénáři pomáhají našim studentům 
                lépe se připravit na reálné situace v praxi.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 font-bold mr-3">
                  TK
                </div>
                <div>
                  <div className="text-white font-medium">Tomáš Král</div>
                  <div className="text-gray-400 text-sm">Metodik vzdělávání, Střední zdravotnická škola</div>
                </div>
              </div>
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
      </section>
    );
  };
  
  export default InteractiveServicesPage;