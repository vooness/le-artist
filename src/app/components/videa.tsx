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
  Youtube
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
        <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg z-20">
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
      
      <div className="max-w-5xl mx-auto relative z-10">
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
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-pink-500 mb-6">
            Video tvorba
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Profesionální video produkce pro vaše podnikání, sociální sítě nebo speciální příležitosti.
            Od krátkých reklamních spotů až po komplexní firemní prezentace, vytvořím video,
            které zaujme a přesvědčí.
          </p>
          
          {/* Hodinová sazba */}
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-pink-500 bg-pink-500/10 backdrop-blur-sm flex items-center">
              <Clock className="w-5 h-5 text-pink-500 mr-3" />
              <span className="text-white font-medium">Hodinová sazba od</span>
              <span className="text-pink-500 text-xl font-bold ml-2">800 Kč</span>
            </div>
          </div>
          
          {/* Vlastnosti služby */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <FeatureItem>Moderní střih a efekty</FeatureItem>
            <FeatureItem>Profesionální color grading</FeatureItem>
            <FeatureItem>Animované přechody</FeatureItem>
            <FeatureItem>Hudba a zvukové efekty</FeatureItem>
            <FeatureItem>Titulky a grafické prvky</FeatureItem>
            <FeatureItem>Optimalizace pro web</FeatureItem>
          </div>
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-12">
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
            {/* Balíčky služeb */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <PricingPackage
                title="Reklamní spot"
                price="od 8 000 Kč"
                features={[
                  "Délka do 30 sekund",
                  "Střih z dodaných materiálů",
                  "Základní barevné korekce",
                  "Titulky a grafika",
                  "Hudba a zvukové efekty",
                  "2 revize zdarma",
                  "Dodání do 7 dnů"
                ]}
                color="#EC4899"
                icon={<Video className="w-6 h-6" />}
              />
              
              <PricingPackage
                title="Sociální sítě"
                price="od 12 000 Kč"
                features={[
                  "Série 3-5 videí pro sociální média",
                  "Délka do 60 sekund / video",
                  "Jednotný vizuální styl",
                  "Pokročilé barevné korekce",
                  "Animované přechody a efekty",
                  "3 revize zdarma",
                  "Optimalizace pro různé platformy",
                  "Dodání do 10 dnů"
                ]}
                color="#EC4899"
                icon={<Youtube className="w-6 h-6" />}
                popular={true}
              />
              
              <PricingPackage
                title="Firemní prezentace"
                price="od 25 000 Kč"
                features={[
                  "Profesionální firemní video",
                  "Délka 2-5 minut",
                  "Komplexní příběh značky",
                  "Pokročilý střih a efekty",
                  "Animovaná grafika a logo",
                  "Voice-over (namlouvání)",
                  "Licencovaná hudba",
                  "5 revizí zdarma",
                  "Dodání do 21 dnů"
                ]}
                color="#EC4899"
                icon={<Film className="w-6 h-6" />}
              />
            </div>
            
            {/* Doplňkové služby */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Doplňkové služby</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                  >
                    <Tv className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Filmování</h4>
                    <p className="text-sm text-gray-300">od 5 000 Kč / den</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                  >
                    <Film className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Dodatečné revize</h4>
                    <p className="text-sm text-gray-300">1 000 Kč / revize</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                  >
                    <Youtube className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Optimalizace pro YouTube</h4>
                    <p className="text-sm text-gray-300">2 500 Kč</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div 
                    className="mr-4 p-2 rounded-full"
                    style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                  >
                    <Video className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Express dodání</h4>
                    <p className="text-sm text-gray-300">+50% k ceně</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
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
                title="Konzultace a brief"
                description="První krok zahrnuje důkladnou konzultaci vašich potřeb a cílů. Společně definujeme cílovou skupinu, klíčové sdělení, požadovaný styl a formát výsledného videa. Vytvořím podrobný brief, který bude základem pro celý projekt."
              />
              
              <ProcessStep
                number={2}
                title="Scénář a koncept"
                description="Na základě briefu vytvořím detailní scénář nebo koncept videa. V této fázi definujeme strukturu, obsah, klíčové záběry a případně i dialogy nebo voice-over texty. Po vaší zpětné vazbě koncept doladíme."
              />
              
              <ProcessStep
                number={3}
                title="Produkce"
                description="Pokud je součástí projektu natáčení, zorganizuji a provedu kompletní produkci včetně zajištění lokací, techniky a případných herců. Pokud pracujeme s existujícími materiály, v této fázi je shromáždíme a připravíme pro postprodukci."
              />
              
              <ProcessStep
                number={4}
                title="Střih a postprodukce"
                description="Následuje kreativní střih materiálů, barevné korekce, přidání grafických prvků, titulků, hudby a zvukových efektů. Vytvořím první verzi videa, kterou vám předložím k připomínkám."
              />
              
              <ProcessStep
                number={5}
                title="Revize a finalizace"
                description="Na základě vašich připomínek provedu potřebné úpravy a finální doladění produktu. Tento proces opakujeme, dokud nebudete s výsledkem naprosto spokojeni. Poté probíhá finální export v požadovaných formátech."
                isLast
              />
            </div>
            
            {/* Portfolio ukázky */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Ukázky z mého portfolia</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden border border-slate-700 hover:border-pink-500/50 transition-colors">
                  <Link href="/portfolio/video-1" className="block aspect-video bg-slate-900/80 items-center justify-center">
                    <div className="text-pink-500 hover:text-pink-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </Link>
                  <div className="p-3">
                    <h4 className="font-bold text-white">Promo video XYZ Company</h4>
                    <p className="text-sm text-gray-400">Reklamní spot, 2024</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden border border-slate-700 hover:border-pink-500/50 transition-colors">
                  <Link href="/portfolio/video-2" className="aspect-video bg-slate-900/80 flex items-center justify-center">
                    <div className="text-pink-500 hover:text-pink-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </Link>
                  <div className="p-3">
                    <h4 className="font-bold text-white">Sada videí pro sociální sítě</h4>
                    <p className="text-sm text-gray-400">Série 5 videí, 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Link href="/portfolio/video" className="inline-flex items-center text-pink-500 hover:text-pink-400 transition-colors">
                  <span>Prohlédnout kompletní portfolio</span>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
              <h4 className="text-xl font-bold text-white mb-4">Připraveni na video produkci?</h4>
              <p className="text-gray-300 mb-6">
                Kontaktujte mě pro nezávaznou konzultaci a společně vytvořme video, 
                které bude efektivně komunikovat vaše poselství.
              </p>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
                <span>Promluvme si o vašem projektu</span>
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
            <h3 className="text-xl font-bold text-white mb-3">Jak probíhá celý proces tvorby videa?</h3>
            <p className="text-gray-300">
              Proces začíná úvodní konzultací, kde detailně rozebereme vaše potřeby a očekávání. 
              Následuje vypracování konceptu a scénáře, který po schválení realizujeme. 
              Po natáčení nebo shromáždění materiálů přichází na řadu střih, grafika, zvuk a finální 
              úpravy. Celý proces je transparentní a máte možnost vstupovat do něj ve formě revizí.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Musím dodat vlastní záběry nebo zajistíte i natáčení?</h3>
            <p className="text-gray-300">
              Obě varianty jsou možné. Mohu pracovat s materiály, které mi dodáte vy, 
              nebo zajistit kompletní produkci včetně natáčení. Pro natáčení mám k dispozici 
              profesionální vybavení a v případě potřeby spolupracuji s dalšími profesionály 
              (kameramany, zvukaři, osvětlovači).
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Na jakých platformách lze výsledné video použít?</h3>
            <p className="text-gray-300">
              Videa vytvářím tak, aby byla použitelná na všech běžných platformách - webové stránky, 
              YouTube, Facebook, Instagram, LinkedIn a další. Pro každou platformu mohu připravit 
              specifickou verzi videa s optimálními parametry (poměr stran, délka, formát).
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Jak je to s hudebním podkladem a licencemi?</h3>
            <p className="text-gray-300">
              Pro projekty zajišťuji licencovanou hudbu z profesionálních hudebních knihoven, 
              které umožňují komerční použití. Všechny použité skladby mají platné licence, 
              aby nedocházelo k porušení autorských práv. V případě specifických požadavků 
              na hudbu je možné zajistit i tvorbu originálního hudebního podkladu.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">Jak dlouho trvá tvorba videa?</h3>
            <p className="text-gray-300">
              Délka procesu závisí na komplexnosti projektu. Jednoduchý reklamní spot 
              lze vytvořit během jednoho týdne, zatímco komplexní firemní prezentace 
              může trvat 3-4 týdny. Přesný časový harmonogram stanovíme během úvodní 
              konzultace. V případě potřeby je možné zajistit express dodání za příplatek.
            </p>
          </div>
        </div>
      </div>

     

      {/* Závěrečná CTA */}
      <div className="max-w-4xl mx-auto mt-20 mb-10 relative z-10">
        <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-xl p-8 border border-pink-500/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Připraveni posunout vaši komunikaci na další úroveň?
          </h2>
          <p className="text-gray-200 text-center mb-8 max-w-3xl mx-auto">
            Video je nejúčinnější způsob, jak zaujmout a přesvědčit vaše publikum. Kontaktujte mě 
            pro nezávaznou konzultaci a společně najdeme nejlepší řešení pro vaši značku nebo projekt.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors"
            >
              <span>Vytvořme skvělé video</span>
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoServicesPage;