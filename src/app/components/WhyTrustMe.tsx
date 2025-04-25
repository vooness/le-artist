"use client"

import React, { useEffect, useState, useRef } from "react"
import { FaClock, FaThumbsUp, FaHandshake, FaRocket, FaChartLine, FaLightbulb } from "react-icons/fa"
import ParticlesBackground from "./ParticlesBakckground";

const reasons = [
  {
    icon: <FaLightbulb />,
    title: "Kreativní řešení na míru",
    description:
      "Vaše vize přeměním v unikátní digitální zážitek, který zaujme vaši cílovou skupinu a odliší vás od konkurence.",
    color: "from-orange-500/20 to-yellow-400/10",
    accent: "#F97316"
  },
  {
    icon: <FaChartLine />,
    title: "Měřitelné výsledky",
    description:
      "Soustředím se na řešení, která přinášejí skutečné obchodní výsledky. Váš úspěch je mým hlavním měřítkem spokojenosti.",
    color: "from-blue-500/20 to-cyan-400/10",
    accent: "#3B82F6"
  },
  {
    icon: <FaRocket />,
    title: "Kvalita bez kompromisů",
    description:
      "Používám nejmodernější technologie a postupy, které zaručují rychlost, bezpečnost a skvělý uživatelský zážitek.",
    color: "from-indigo-500/20 to-purple-400/10",
    accent: "#6366F1"
  },
  {
    icon: <FaClock />,
    title: "Dodržování termínů",
    description:
      "Respektuji vaše časové požadavky. Projekty dokončuji včas a často i před stanoveným termínem.",
    color: "from-amber-500/20 to-orange-400/10",
    accent: "#F59E0B"
  },
  {
    icon: <FaThumbsUp />,
    title: "Spokojenost na prvním místě",
    description:
      "98% mých klientů se vrací s dalšími projekty. Vaše spokojenost je pro mě absolutní prioritou.",
    color: "from-green-500/20 to-emerald-400/10",
    accent: "#10B981"
  },
  {
    icon: <FaHandshake />,
    title: "Transparentní spolupráce",
    description:
      "Jasná komunikace, žádné skryté poplatky. Vždy víte, v jaké fázi se projekt nachází a za co přesně platíte.",
    color: "from-rose-500/20 to-red-400/10",
    accent: "#F43F5E"
  },
]

// Vylepšené statistiky s futuristickým vzhledem
const stats = [
  { 
    value: "98%", 
    label: "Spokojenost klientů", 
    color: "#FF7E00",
    shadowColor: "rgba(255, 126, 0, 0.5)",
    description: "Mí klienti se ke mně vrací a doporučují mé služby dále",
    glowIntensity: "0.7",
    iconColor: "#FF7E00" 
  },
  { 
    value: "50+", 
    label: "Úspěšných projektů", 
    color: "#3B82F6",
    shadowColor: "rgba(59, 130, 246, 0.5)",
    description: "Široké spektrum projektů od e-shopů po interní systémy",
    glowIntensity: "0.6",
    iconColor: "#3B82F6"
  },
  { 
    value: "5+", 
    label: "Let zkušeností", 
    color: "#10B981",
    shadowColor: "rgba(16, 185, 129, 0.5)",
    description: "Roky praxe a neustálé vzdělávání v nejnovějších technologiích",
    glowIntensity: "0.8",
    iconColor: "#10B981"
  }
]

// Definice interface pro props komponenty CountUpAnimation
interface CountUpAnimationProps {
  value: string;
  duration?: number;
  isVisible: boolean;
}

// Pomocná funkce pro kontrolu, zda je dostupný window objekt
const isClient = () => {
  return typeof window !== 'undefined';
};

// Komponenta pro animované počítadlo s TypeScript typováním
const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ value, duration = 2000, isVisible }) => {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    // Předčasně ukončíme, pokud nejsme na klientovi nebo není komponenta viditelná
    if (!isClient() || !isVisible) return;
    
    let start = 0;
    let end = parseInt(value.replace(/[^0-9]/g, ""), 10);
    let suffix = value.replace(/[0-9]/g, "");
    let startTime: number | null = null;
    
    const animateCount = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setDisplayValue(`${currentCount}${suffix}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(animateCount);
      }
    };
    
    // Pouze zavolat requestAnimationFrame na klientovi
    if (isClient()) {
      window.requestAnimationFrame(animateCount);
    }
    
    return () => setDisplayValue("0");
  }, [value, duration, isVisible]);
  
  return displayValue;
};

// Hlavní komponenta sekce
const WhyTrustMeSection: React.FC = () => {
  // State pro postupné zobrazení prvků a sledování viditelnosti
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  
  // Nastavíme prvky jako viditelné po montáži komponenty a sledování pro statistiky
  useEffect(() => {
    // Kontrola, zda jsme na klientovi před použitím IntersectionObserver
    if (!isClient()) return;
    
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    // Uložíme aktuální referenci do konstanty - oprava React hook warning
    const currentStatsRef = statsRef.current;
    
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
    
    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <section className="relative bg-[#0c1425] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-[2px]">
      <ParticlesBackground />
      
      {/* Futuristické pozadí a efekty */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Digitální mřížka */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Futuristické pruhy na pozadí */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 
            `linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 20%, transparent 30%),
             linear-gradient(45deg, transparent 40%, rgba(255, 100, 50, 0.1) 60%, transparent 70%)`,
          backgroundSize: '100% 100%'
        }} />
        
        {/* Světelné spoty */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vylepšený futuristický nadpis sekce */}
        <div className="text-center mb-16 relative z-10">
          {/* Futuristický nadpis */}
          <div className={`relative inline-block transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Tech dekorace kolem nadpisu */}
            <div className="absolute -left-8 -right-8 -top-8 -bottom-8 flex items-center justify-center pointer-events-none">
              {/* Horní a dolní linie */}
              <div className={`absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
              
              {/* Levá a pravá tech značky */}
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-4 h-4 border-l-2 border-t-2 border-orange-500/60"></div>
                <div className="w-4 h-4 border-l-2 border-b-2 border-orange-500/60 absolute top-6"></div>
              </div>
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-4 h-4 border-r-2 border-t-2 border-orange-500/60"></div>
                <div className="w-4 h-4 border-r-2 border-b-2 border-orange-500/60 absolute top-6"></div>
              </div>
            </div>
            
            {/* Hlavní nadpis */}
            <h2 className="text-4xl md:text-5xl font-black tracking-wide text-white relative inline-block">
              <span className="tracking-wide">Proč Mi Důvěřovat?</span>
              
              {/* Futuristický podtržený efekt */}
              <div className="relative h-1 mt-3 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 transition-transform duration-1500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}></div>
                <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full ${isVisible ? 'animate-shimmer' : ''}`}></div>
              </div>
              
              {/* Drobná tech dekorace */}
              <div className={`absolute -bottom-3 left-0 w-3 h-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-[1px] bg-orange-500/70"></div>
                <div className="h-full w-[1px] bg-orange-500/70"></div>
              </div>
              <div className={`absolute -bottom-3 right-0 w-3 h-3 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-[1px] bg-orange-500/70"></div>
                <div className="absolute right-0 h-full w-[1px] bg-orange-500/70"></div>
              </div>
            </h2>
          </div>
          
          {/* Popisek pod nadpisem */}
          <p className={`text-gray-300 text-lg mt-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white font-medium">V digitálním světě potřebujete partnera, nikoliv jen dodavatele.</span> Dodávám řešení, která nejenom ohromí vizuálně, ale především <span className="text-orange-400 font-semibold">přinášejí skutečné výsledky a pomáhají vašemu podnikání růst</span>. Mé portfolio zahrnuje desítky spokojených klientů, kteří se ke mně opakovaně vrací.
          </p>
        </div>
        
        {/* Futuristické karty - 6 karet ve 3x2 gridu */}
        <div className="relative pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`relative group rounded-xl overflow-hidden bg-[#111a2f] shadow-lg border border-white/5 transition-all duration-700 hover:-translate-y-2 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Futuristické pozadí karty */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-50`}></div>
                
                {/* Svítící okraje */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-transparent z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
                
                {/* Digitální akcenty */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/20 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/20 rounded-bl-xl"></div>
                
                {/* Animovaný kruhový efekt za ikonou */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 rounded-full opacity-30 pulse-slow" style={{ background: `radial-gradient(circle, ${reason.accent}40 0%, transparent 70%)` }}></div>
                </div>
                
                {/* Obsahová část */}
                <div className="relative z-10 p-8 backdrop-blur-sm h-full flex flex-col">
                  {/* Ikona s futuristickým podsvícením */}
                  <div className="relative mb-6 w-12 h-12 flex items-center justify-center z-20">
                    <div className="absolute inset-0 bg-[#0f172a] rounded-lg"></div>
                    <div className={`absolute inset-0 rounded-lg opacity-70`} style={{ 
                      boxShadow: `0 0 20px 1px ${reason.accent}40` 
                    }}></div>
                    <div className="relative z-10 text-3xl" style={{ color: reason.accent }}>
                      {reason.icon}
                    </div>
                  </div>
                  
                  {/* Oddělovač s gradientem */}
                  <div className="h-[2px] w-12 mb-4 rounded-full" style={{ 
                    background: `linear-gradient(to right, ${reason.accent}80, transparent)` 
                  }}></div>
                  
                  {/* Text */}
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                  
                  {/* Futuristický prvek v pravém dolním rohu */}
                  <div className="absolute bottom-3 right-3 w-4 h-4">
                    <div className="w-full h-full rounded-full pulse-slow" style={{ background: reason.accent }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* ===== VYLEPŠENÉ STATISTIKY VE STYLU TERMINÁLOVÝCH KARET ===== */}
        <div
          ref={statsRef}
          className="mt-10 mb-12 relative"
        >
          {/* Dekorativní elementy celé sekce statistik */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-1">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          
          {/* Mřížka na pozadí celé sekce */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0'
          }}></div>
          
          {/* Terminálový mock screen s průhledným pozadím */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#080d1a]/80 backdrop-blur-sm border border-[#1c2d4a]">
            {/* Horní lišta připomínající terminál */}
            <div className="h-6 bg-gradient-to-r from-[#0d1a33] to-[#0e1c38] flex items-center px-3 border-b border-[#1c2d4a]">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 text-[10px] text-gray-400 font-mono">
                system_stats.terminal
              </div>
            </div>
            
            {/* Virtuální UI elementy pro tech vzhled */}
            <div className="absolute top-8 left-4 w-20 h-1 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
            <div className="absolute top-8 right-4 w-20 h-1 bg-gradient-to-l from-blue-500/30 to-transparent"></div>
            
            {/* Hlavní obsahová část */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative bg-[#0a0f1d]/70 rounded-lg overflow-hidden transition-all duration-700 border border-[#1c2d4a] ${
                    statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    boxShadow: statsVisible ? `0 0 25px ${stat.shadowColor}` : 'none'
                  }}
                >
                  {/* Tech mřížka pozadí */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(${stat.color}30 1px, transparent 1px)`,
                    backgroundSize: '15px 15px',
                    backgroundPosition: '0 0'
                  }}></div>
                  
                  {/* Skenovací linie efekt */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute h-[1px] w-full bg-gradient-to-r from-transparent via-${stat.iconColor} to-transparent transform translate-y-0 ${
                      statsVisible ? 'animate-scanning-line' : ''
                    }`}></div>
                  </div>
                  
                  {/* UI dekorativní prvky karet */}
                  <div className="absolute top-0 left-0 w-8 h-8">
                    <div className="absolute top-0 left-0 w-[1px] h-4" style={{ background: `linear-gradient(to bottom, ${stat.color}, transparent)` }}></div>
                    <div className="absolute top-0 left-0 w-4 h-[1px]" style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }}></div>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-8 h-8">
                    <div className="absolute top-0 right-0 w-[1px] h-4" style={{ background: `linear-gradient(to bottom, ${stat.color}, transparent)` }}></div>
                    <div className="absolute top-0 right-0 w-4 h-[1px]" style={{ background: `linear-gradient(to left, ${stat.color}, transparent)` }}></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-[1px] h-4" style={{ background: `linear-gradient(to top, ${stat.color}, transparent)` }}></div>
                    <div className="absolute bottom-0 left-0 w-4 h-[1px]" style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }}></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-[1px] h-4" style={{ background: `linear-gradient(to top, ${stat.color}, transparent)` }}></div>
                    <div className="absolute bottom-0 right-0 w-4 h-[1px]" style={{ background: `linear-gradient(to left, ${stat.color}, transparent)` }}></div>
                  </div>
                  
                  {/* Obsah karty s hodnotou a textem */}
                  <div className="relative z-10 p-6 text-center">
                    {/* Hodnota statistiky */}
                    <div
                      className="text-6xl font-black mb-3"
                      style={{
                        color: stat.color,
                        textShadow: statsVisible ? `0 0 15px ${stat.shadowColor}` : 'none'
                      }}
                    >
                      <CountUpAnimation value={stat.value} isVisible={statsVisible} />
                    </div>
                    
                    {/* Diamond marker jako oddělovač */}
                    <div className="flex justify-center items-center mb-3">
                      <div className="w-2 h-2 transform rotate-45" style={{ backgroundColor: stat.color }}></div>
                    </div>
                    
                    {/* Titulek statistiky */}
                    <div className="text-white font-bold text-lg mb-2">
                      {stat.label}
                    </div>
                    
                    {/* Popis statistiky */}
                    <div className={`text-gray-300 text-sm transition-all duration-700 ${
                      statsVisible ? 'opacity-100' : 'opacity-0'
                    }`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                      {stat.description}
                    </div>
                    
                    {/* Binární kód na pozadí */}
                    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-[10px] font-mono"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            color: stat.color,
                            opacity: Math.random() * 0.5 + 0.5
                          }}
                        >
                          {Math.random() > 0.5 ? '1' : '0'}
                          {Math.random() > 0.5 ? '1' : '0'}
                          {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dolní lišta "terminálu" */}
            <div className="h-6 bg-gradient-to-r from-[#0d1a33] to-[#0e1c38] flex items-center justify-between px-4 text-[10px] text-gray-400 font-mono border-t border-[#1c2d4a]">
              <div>system: online</div>
              <div>© 2025</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS pro animace */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes scanning-line {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { opacity: 0.3; }
          100% { transform: translateY(100%); opacity: 0.8; }
        }
        .animate-scanning-line {
          animation: scanning-line 4s infinite linear;
        }
      `}</style>
    </section>
  )
}

export default WhyTrustMeSection