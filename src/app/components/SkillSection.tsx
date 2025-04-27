"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
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

// Plně optimalizovaná SkillCard - žádné animace na mobilu
const SkillCard: React.FC<{ skill: Skill; index: number; isMobile: boolean }> = ({ skill, index, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // Použití jedné reference pro useInView
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.2 });
  
  // Pokud jsme na mobilu, nastavíme výsledek na true
  const shouldAnimate = isMobile ? false : isInView;

  return (
    <div
      ref={inViewRef}
      className="relative overflow-hidden border border-white/10 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-xl opacity-100"
      style={{ 
        boxShadow: isMobile ? undefined : `0 10px 20px -15px ${skill.color}40`,
        // Žádné animace ani transformace na mobilu
        transition: isMobile ? 'none' : 'opacity 0.4s ease-out, transform 0.4s ease-out',
        transitionDelay: isMobile ? '0s' : `${0.1 * index}s`
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
        {/* Binární efekty pouze na desktopu */}
        {!isMobile && [...Array(3)].map((_, i) => (
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
          {/* Ikona - žádný pulzující efekt na mobilu */}
          <div className="relative flex items-center justify-center">
            {shouldAnimate && (
              <div
                className="absolute inset-0 rounded-full blur-xl hidden md:block"
                style={{ 
                  backgroundColor: skill.color,
                  animation: 'pulse-slow 3s ease-in-out infinite'
                }}
              />
            )}
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

        {/* Progress bar - okamžitě zobrazen na mobilu */}
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
            {/* Skenující efekt pouze na desktopu */}
            {shouldAnimate && (
              <div
                className="absolute h-full w-2 rounded-full hidden md:block"
                style={{ 
                  background: `${skill.color}`,
                  animation: 'scan-bar 3s ease-in-out infinite',
                  animationDelay: `${1 + index * 0.2}s`
                }}
              />
            )}

            {/* Progress bar ihned viditelný na mobilu */}
            <div
              className="h-full rounded-full relative overflow-hidden"
              style={{ 
                width: `${skill.value}%`,
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                // Žádné animace ani přechody na mobilu
                transition: isMobile ? 'none' : 'width 0.8s ease-out',
                transitionDelay: isMobile ? '0s' : `${0.2 + (0.1 * index)}s`
              }}
            >
              {/* Světelný efekt pouze na desktopu */}
              {shouldAnimate && (
                <div
                  className="absolute top-0 h-full w-20 bg-white/20 hidden md:block"
                  style={{ 
                    animation: 'shine 2s ease-in-out infinite',
                    animationDelay: `${1.5 + index * 0.2}s` 
                  }}
                />
              )}
            </div>
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

// Zjednodušený a optimalizovaný pozadí pattern
const SimplifiedDotPattern: React.FC<{isMobile: boolean}> = ({isMobile}) => {
  // Výrazně omezený počet bodů na mobilu
  const dotCount = isMobile ? 8 : 80;
  const dotsPerRow = isMobile ? 4 : 10;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Extrémně zjednodušené pozadí na mobilu */}
      <div className="absolute inset-0">
        {/* Minimální počet bodů na mobilu */}
        {!isMobile && [...Array(dotCount)].map((_, i) => {
          const row = Math.floor(i / dotsPerRow);
          const col = i % dotsPerRow;
          
          return (
            <div
              key={`dot-${i}`}
              className="absolute h-1 w-1 rounded-full bg-orange-500/20 hidden md:block"
              style={{
                top: `${row * 12}%`,
                left: `${col * 10}%`,
                opacity: 0.3,
                animation: 'pulse-slow 4s ease-in-out infinite',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          );
        })}
      </div>
      
      {/* Žádné dekorační linie na mobilu */}
      {!isMobile && [...Array(3)].map((_, i) => (
        <div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent hidden md:block"
          style={{ 
            top: `${40 + i * 25}%`,
            opacity: 0.2
          }}
        />
      ))}
      
      {!isMobile && [...Array(3)].map((_, i) => (
        <div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block"
          style={{ 
            left: `${50 + i * 25}%`,
            opacity: 0.2
          }}
        />
      ))}
    </div>
  );
};

// Optimalizovaná grid sekce s dovednostmi
const SkillsGrid: React.FC<{isMobile: boolean}> = ({ isMobile }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      {/* Propojovací linky pouze na desktopu */}
      {!isMobile && (
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
      )}
      
      {/* Karty dovedností */}
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} index={index} isMobile={isMobile} />
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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Předejít hydration erroru - vrátit základní strukturu při prvním renderování
  if (!isMounted) {
    return (
      <section id="about-me" className="relative py-16 md:py-24 px-4 md:px-6 bg-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              O mně
            </h2>
          </div>
          {/* Základní kostra struktury bez obsahu */}
        </div>
      </section>
    );
  }

  return (
    <section 
      id="about-me"
      className="relative py-16 md:py-24 px-4 md:px-6 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Optimalizované pozadí pro mobil */}
      <SimplifiedDotPattern isMobile={isMobile} />
      
      {/* Jemná mřížka - skrytá na mobilu */}
      <div 
        className={`absolute inset-0 opacity-[0.04] ${isMobile ? 'hidden' : 'block'}`}
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
      
      {/* Barevné oblasti na pozadí - méně intenzivní na mobilu */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className={`absolute -top-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}></div>
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full ${isMobile ? 'blur-2xl' : 'blur-3xl'}`}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hlavní nadpis */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex space-x-1.5 mr-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={`header-dot-${i}`}
                className="w-2 h-2 rounded-full bg-orange-500"
                style={{ opacity: 0.8 }}
              />
            ))}
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white relative inline-block">
              O mně
              <div className="absolute left-0 bottom-[-5px] h-[5px] bg-gradient-to-r from-orange-500 to-orange-400 w-full rounded-full" />
            </h2>
          </div>
        </div>

        {/* Bio sekce - bez animací na mobilu */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Profilový obrázek */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-800/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute -inset-4 border-2 border-dashed border-orange-500/20 rounded-2xl transform -rotate-2"></div>
              
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
              
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500/10 rounded-full blur-md"></div>
              <div className="absolute -bottom-4 right-10 w-16 h-16 bg-orange-500/10 rounded-full blur-md"></div>
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
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent" />
              </div>
              
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
            </div>
          </div>
        </div>

        {/* Sekce dovedností - nadpis bez animací na mobilu */}
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
                    className="absolute left-0 top-0 w-full text-transparent hidden md:block"
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

        {/* Grid dovedností - optimalizovaná verze */}
        <SkillsGrid isMobile={isMobile} />
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