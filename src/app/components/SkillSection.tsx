"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPencilAlt,
  FaVideo,
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss } from "react-icons/si";

// Typ pro dovednosti
type Skill = {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

// Data o dovednostech
const skills: Skill[] = [
  { name: "Shoptet", value: 90, icon: <FaHtml5 />, color: "#F97316" },
  { name: "React.js", value: 85, icon: <FaReact />, color: "#38BDF8" },
  { name: "JavaScript", value: 80, icon: <FaJsSquare />, color: "#EAB308" },
  { name: "Next.js", value: 75, icon: <SiNextdotjs />, color: "#D946EF" },
  { name: "Grafický Design", value: 95, icon: <FaPencilAlt />, color: "#F97316" },
  { name: "Tvorba videí", value: 90, icon: <FaVideo />, color: "#EC4899" },
  { name: ".NET Core", value: 80, icon: <SiDotnet />, color: "#6366F1" },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss />, color: "#0EA5E9" },
];

// Verze SkillCard pro desktop s animacemi
const DesktopSkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative overflow-hidden border border-white/10 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-xl"
      style={{ 
        boxShadow: `0 10px 20px -15px ${skill.color}40`
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
        {/* Binární efekty na pozadí */}
        {[...Array(3)].map((_, i) => (
          <div 
            key={`bit-${index}-${i}`} 
            className="absolute text-[10px] font-mono opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: skill.color,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          >
            {Math.round(Math.random())}
          </div>
        ))}
      </div>

      <div className="p-5 relative z-10">
        <div className="flex justify-between items-start mb-6">
          {/* Ikona s pulzujícím efektem */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ 
                backgroundColor: skill.color,
                animation: 'pulse-slow 3s ease-in-out infinite'
              }}
            />
            <div className="relative z-10 text-3xl p-3" style={{ color: skill.color }}>{skill.icon}</div>
          </div>

          {/* Procenta */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg opacity-30" style={{ background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)` }} />
            <div className="relative bg-slate-800/80 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <div className="flex items-center">
                <span className="font-mono text-sm" style={{ color: skill.color }}>{skill.value}%</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-medium mb-3 text-white">{skill.name}</h4>

        {/* Progress bar s animací */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            {[...Array(4)].map((_, i) => (
              <div 
                key={`tick-${index}-${i}`}
                className="h-full w-px mx-auto bg-white/20 opacity-30"
              />
            ))}
          </div>

          <div className="h-3 w-full bg-slate-900/80 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
            {/* Skenující efekt */}
            <div
              className="absolute h-full w-2 rounded-full"
              style={{ 
                background: `${skill.color}`,
                animation: 'scan-bar 3s ease-in-out infinite',
                animationDelay: `${1 + index * 0.2}s`
              }}
            />

            {/* Progress bar s animací */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (0.1 * index) }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
              }}
            >
              {/* Světelný efekt */}
              <div
                className="absolute top-0 h-full w-20 bg-white/20"
                style={{ 
                  animation: 'shine 2s ease-in-out infinite',
                  animationDelay: `${1.5 + index * 0.2}s` 
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Rohové dekorace */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r" style={{ borderColor: `${skill.color}50` }} />
      </div>
    </motion.div>
  );
};

// Verze SkillCard pro mobil bez animací
const MobileSkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <div
      className="relative overflow-hidden border border-white/10 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-xl"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <div className="p-5 relative z-10">
        <div className="flex justify-between items-start mb-6">
          {/* Jednoduchá ikona bez efektů */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 text-3xl p-3" style={{ color: skill.color }}>{skill.icon}</div>
          </div>

          {/* Procenta */}
          <div className="relative">
            <div className="relative bg-slate-800/80 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <div className="flex items-center">
                <span className="font-mono text-sm" style={{ color: skill.color }}>{skill.value}%</span>
              </div>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-medium mb-3 text-white">{skill.name}</h4>

        {/* Jednoduchý progress bar bez animací */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            {[...Array(4)].map((_, i) => (
              <div 
                key={`tick-${index}-${i}`}
                className="h-full w-px mx-auto bg-white/20 opacity-30"
              />
            ))}
          </div>

          <div className="h-3 w-full bg-slate-900/80 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
            {/* Jednoduchý progress bar */}
            <div
              className="h-full rounded-full relative"
              style={{ 
                width: `${skill.value}%`,
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
              }}
            />
          </div>
        </div>

        {/* Zjednodušené rohové dekorace */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r" style={{ borderColor: `${skill.color}50` }} />
      </div>
    </div>
  );
};

// Pozadí s plnou animací pro desktop
const DesktopDotPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          
          return (
            <motion.div
              key={`dot-${i}`}
              className="absolute h-1 w-1 rounded-full bg-orange-500/20"
              style={{
                top: `${row * 12}%`,
                left: `${col * 10}%`,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          );
        })}
      </div>
      
      {[...Array(3)].map((_, i) => (
        <div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          style={{ 
            top: `${40 + i * 25}%`,
            opacity: 0.2
          }}
        />
      ))}
      
      {[...Array(3)].map((_, i) => (
        <div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          style={{ 
            left: `${50 + i * 25}%`,
            opacity: 0.2
          }}
        />
      ))}
    </div>
  );
};

// Zjednodušené pozadí pro mobil - statické
const MobileDotPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-900/20" />
    </div>
  );
};

// Optimalizovaný Grid dovedností pro desktop
const DesktopSkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {/* Propojovací linky */}
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`connector-${i}`}
            className="hidden lg:block absolute h-px bg-orange-500/20"
            style={{
              width: "30px",
              left: `${25 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 40}%`,
              opacity: 1
            }}
          />
        ))}
      </div>
      
      {/* Karty dovedností */}
      {skills.map((skill, index) => (
        <DesktopSkillCard key={index} skill={skill} index={index} />
      ))}
    </div>
  );
};

// Optimalizovaný Grid dovedností pro mobil - bez animací
const MobileSkillsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
      {/* Karty dovedností */}
      {skills.map((skill, index) => (
        <MobileSkillCard key={index} skill={skill} index={index} />
      ))}
    </div>
  );
};

// Hlavní komponenta AboutMeSection
const AboutMeSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Detekce mobilního zařízení a zabránění hydration erroru
  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    // Přidání event listeneru pro resize pouze pro desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Předejít hydration erroru - vrátit základní strukturu při prvním renderování
  if (!isMounted) {
    return (
      <section id="about-me" className="relative py-16 md:py-24 px-4 md:px-6 bg-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              O mně
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="about-me"
      className="relative py-16 md:py-24 px-4 md:px-6 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Podmíněné renderování pozadí podle zařízení */}
      {isMobile ? <MobileDotPattern /> : <DesktopDotPattern />}
      
      {/* Jemná mřížka - pouze pro desktop */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 
              `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      )}
      
      {/* Barevné oblasti na pozadí - pouze desktop */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Zpátky na hlavní stránku - responsive pozicionování */}
        <div className="mb-8 mt-10 md:mt-8">
          <a 
            href="/" 
            className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zpátky na hlavní stránku
          </a>
        </div>

        {/* Hlavní nadpis ve stylu "Moje Projekty" - responsive velikosti */}
        <div className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            {/* Tech dekorace kolem nadpisu - pouze na desktop */}
            {!isMobile && (
              <div className="absolute -left-8 -right-8 -top-8 -bottom-8 flex items-center justify-center pointer-events-none">
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"></div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"></div>
                
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 border-l-2 border-t-2 border-orange-500/60"></div>
                  <div className="w-4 h-4 border-l-2 border-b-2 border-orange-500/60 absolute top-6"></div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 border-r-2 border-t-2 border-orange-500/60"></div>
                  <div className="w-4 h-4 border-r-2 border-b-2 border-orange-500/60 absolute top-6"></div>
                </div>
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white relative inline-block">
              <span className="tracking-wide">O mně</span>
              <div className="relative h-1 mt-2 md:mt-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500"></div>
              </div>
            </h2>
            
            {/* Popisek pod nadpisem */}
            <div className="mt-3 md:mt-4 text-orange-500/70 text-xs md:text-sm font-mono tracking-widest">
              OSOBNÍ PROFIL
            </div>
          </div>
        </div>

        {/* Bio sekce */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20">
          {/* Profilový obrázek */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative">
              {!isMobile && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-800/20 rounded-2xl transform rotate-3"></div>
                  <div className="absolute -inset-4 border-2 border-dashed border-orange-500/20 rounded-2xl transform -rotate-2"></div>
                </>
              )}
              
              <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                <Image
                  src="/imgs/logo4.svg"
                  alt="Můj profil"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 40vw"
                  className="w-full max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
              
              {!isMobile && (
                <>
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500/10 rounded-full blur-md"></div>
                  <div className="absolute -bottom-4 right-10 w-16 h-16 bg-orange-500/10 rounded-full blur-md"></div>
                </>
              )}
            </div>
          </div>
          
          {/* Bio text */}
          <div className="w-full lg:w-7/12">
            <div className="relative">
              <div className="p-6 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-orange-500/20 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />
                
                <div className="space-y-6 relative z-10">
                  <p className="text-lg text-slate-100">
                    <span className="font-semibold text-orange-500">Přetvářím vaše vize v digitální realitu</span> pomocí 
                    moderního designu a funkčních webů, které přitahují pozornost a zvyšují konverze. Váš projekt 
                    dostane nadstandardní péči, kterou si zaslouží.
                  </p>
                  
                  <div className="w-16 h-px bg-orange-500/30 mx-auto" />
                  
                  <p className="text-lg text-slate-100">
                    Každý projekt začíná <span className="font-semibold text-orange-500">bezplatnou konzultací</span> a transparentní cenovou nabídkou. 
                    Mé řešení vždy respektuje váš rozpočet i časové možnosti. <span className="font-semibold text-white">Získáte web, který pracuje pro vás 24/7.</span>
                  </p>
                  
                  <div className="w-16 h-px bg-orange-500/30 mx-auto" />
                  
                  <p className="text-lg text-slate-100">
                    S vášní pro design a programování žiji doma v Ostravě, kde mě inspiruje <span className="text-orange-500 font-semibold">trojice mých psích parťáků</span> – dvě Shiba Inu a nové štěně Akita Inu. Jejich energie a loajalita se odráží i v mém přístupu k práci.
                  </p>
                </div>
                
                {!isMobile && (
                  <>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent" />
                  </>
                )}
              </div>
              
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
            </div>
          </div>
        </div>

        {/* Sekce dovedností - nadpis */}
        <div className="text-center mb-14 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-px opacity-60 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          
          <div className="relative inline-block">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <div className="w-5 h-px bg-orange-500/50"></div>
              <div className="text-orange-500/70 text-xs font-mono">[</div>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <div className="text-orange-500/70 text-xs font-mono">]</div>
              <div className="w-5 h-px bg-orange-500/50"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold relative inline-block px-4">
              <div className="relative">
                <span className="relative z-10">Moje Dovednosti</span>
                
                {/* Text shadow efekt pouze na desktopu */}
                {!isMobile && (
                  <span 
                    className="absolute left-0 top-0 w-full text-transparent"
                    style={{ 
                      WebkitTextStroke: "1px rgba(249, 115, 22, 0.3)",
                      filter: "blur(4px)",
                      opacity: 0.4
                    }}
                  >
                    Moje Dovednosti
                  </span>
                )}
              </div>
              
              <div className="absolute left-0 bottom-[-4px] h-[3px] bg-gradient-to-r from-orange-500 to-orange-400 w-full rounded-full" />
            </h3>
          </div>
          
          <div className="mt-4 flex justify-center items-center space-x-1 text-xs font-mono text-orange-500/60">
            <span>{'//'}</span>
            <div className="h-px w-10 bg-orange-500/40" />
            <span className="tracking-wider">TECHNOLOGIE &amp; EXPERTÍZA</span>
            <div className="h-px w-10 bg-orange-500/40" />
            <span>{'//'}</span>
          </div>
        </div>

        {/* Podmíněné renderování grid komponent podle zařízení */}
        {isMobile ? <MobileSkillsGrid /> : <DesktopSkillsGrid />}
      </div>

      {/* Animační keyframes - používané pouze na desktopu */}
      <style jsx global>{`
        @keyframes scan-bar {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;