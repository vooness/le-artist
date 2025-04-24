"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaHandshake, FaBrain, FaCode, FaCheck, FaServer, FaSearch, FaRocket } from "react-icons/fa";

interface StepInfo {
  title: string;
  description: string[];
  icon: JSX.Element;
  date: string;
}

interface ParticleProps {
  delay?: number;
  duration?: number;
  size?: number;
  color?: string;
  top: number;
  left: number;
}

const steps: StepInfo[] = [
  {
    title: "Konzultace",
    description: [
      "Důkladná analýza vašeho podnikání a cílů.",
      "Rozbor vašich požadavků na web včetně funkcionalit.",
      "Identifikace klíčových příležitostí pro váš online růst.",
    ],
    icon: <FaHandshake />,
    date: "Krok 1",
  },
  {
    title: "Výběr Domény a Hostingu",
    description: [
      "Výběr profesionální domény posilující vaši značku.",
      "Zajištění rychlého a bezpečného hostingu optimálního pro vaše potřeby.",
      "Kompletní technické nastavení pro bezproblémový provoz.",
    ],
    icon: <FaServer />,
    date: "Krok 2",
  },
  {
    title: "Strategie a Plánování",
    description: [
      "Vypracování komplexní strategie pro váš online úspěch.",
      "Stanovení realistického harmonogramu s jasnými milníky.",
      "Definování cílové skupiny pro maximalizaci obchodních výsledků.",
    ],
    icon: <FaBrain />,
    date: "Krok 3",
  },
  {
    title: "Design a Návrh",
    description: [
      "Tvorba profesionálního designu přizpůsobeného vaší značce.",
      "Vytvoření intuitivního uživatelského rozhraní pro lepší konverze.",
      "Iterace návrhů do dosažení dokonalého výsledku.",
    ],
    icon: <FaCode />,
    date: "Krok 4",
  },
  {
    title: "Vývoj a Implementace",
    description: [
      "Použití nejmodernějších technologií pro rychlý, stabilní web.",
      "Programování pokročilých funkcí s důrazem na kvalitu.",
      "Implementace databází a systémů podle vašich požadavků.",
    ],
    icon: <FaCode />,
    date: "Krok 5",
  },
  {
    title: "SEO a Optimalizace",
    description: [
      "Plná optimalizace pro vyhledávače pro maximální viditelnost.",
      "Zrychlení načítání webu pro lepší uživatelský zážitek a SEO.",
      "Nastavení analytických nástrojů pro měření úspěšnosti.",
    ],
    icon: <FaSearch />,
    date: "Krok 6",
  },
  {
    title: "Testování a Kontrola Kvality",
    description: [
      "Důkladné testování na všech zařízeních a prohlížečích.",
      "Optimalizace uživatelské zkušenosti a odstraňování překážek konverze.",
      "Zajištění bezpečnosti a ochrany dat dle nejnovějších standardů.",
    ],
    icon: <FaCheck />,
    date: "Krok 7",
  },
  {
    title: "Nasazení a Podpora",
    description: [
      "Bezproblémové nasazení webu s minimálním výpadkem.",
      "Dlouhodobá technická podpora a poradenství.",
      "Pravidelné aktualizace a vylepšení pro udržení konkurenční výhody.",
    ],
    icon: <FaRocket />,
    date: "Krok 8",
  },
];

// Komponenta pro animované částice
const FloatingParticle: React.FC<ParticleProps> = ({ 
  delay = 0, 
  duration = 15, 
  size = 3, 
  color = "#f97316", 
  top, 
  left 
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ 
      width: size, 
      height: size, 
      backgroundColor: color,
      opacity: 0.4,
      top: `${top}%`,
      left: `${left}%`
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

// Komponenta pro desktop timeline item
const DesktopTimelineItem: React.FC<{step: StepInfo, index: number}> = ({ step, index }) => (
  <div className="relative mb-12">
    <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Obsah */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
      >
        <div className="bg-slate-800/60 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300">
          {/* Nadpis s podtržením */}
          <h3 className="text-xl font-bold text-white relative inline-block mb-4">
            {step.title}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 bottom-[-4px] h-0.5 bg-orange-500 rounded-full"
            />
          </h3>
          
          {/* Seznam položek */}
          <ul className="space-y-3 mt-3">
            {step.description.map((desc, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className="flex items-start gap-3 text-gray-200 group"
              >
                <span className="text-orange-400 flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.8L2.9 7.7L2 8.6L6 12.6L14 4.6L13.1 3.7L6 10.8Z" fill="currentColor"/>
                  </svg>
                </span>
                <span>{desc}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      {/* Středový bod s ikonou */}
      <div className="w-2/12 flex-shrink-0 relative z-10 flex justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-orange-500 shadow-lg flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white">
              {step.icon}
            </div>
          </div>
        </motion.div>
        
        {/* Krok číslo */}
        <div className="absolute top-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-orange-400 font-semibold"
          >
            {step.date}
          </motion.span>
        </div>
      </div>
      
      {/* Prázdné místo na opačné straně pro vyváženost */}
      <div className="w-5/12"></div>
    </div>
  </div>
);

// Komponenta pro mobilní timeline item
const MobileTimelineItem: React.FC<{step: StepInfo, index: number}> = ({ step, index }) => (
  <div className="relative mb-10 ml-3">
    <div className="flex items-start">
      {/* Ikona - menší a lépe centrovaná na linii */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          className="w-12 h-12 -ml-6 rounded-full bg-orange-500 shadow-lg flex items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white">
              {step.icon}
            </div>
          </div>
        </motion.div>
        
        {/* Krok číslo - vedle ikony */}
        <div className="absolute left-8 top-3 text-orange-400 font-medium text-sm">
          {step.date}
        </div>
      </div>
      
      {/* Obsah - posunutý doprava od ikony */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="ml-6 mt-14 w-full bg-slate-800/60 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 shadow-lg"
      >
        {/* Nadpis s podtržením */}
        <h3 className="text-xl font-bold text-white relative inline-block mb-3">
          {step.title}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 bottom-[-3px] h-0.5 w-full bg-orange-500 rounded-full"
          />
        </h3>
        
        {/* Seznam položek */}
        <ul className="space-y-2 mt-2">
          {step.description.map((desc, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
              className="flex items-start gap-2 text-gray-200 group text-sm"
            >
              <span className="text-orange-400 flex-shrink-0 mt-1">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.8L2.9 7.7L2 8.6L6 12.6L14 4.6L13.1 3.7L6 10.8Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: false, amount: 0.3 });
  const mainControls = useAnimation();
  
  // Zabránění hydratačním chybám - rendrování až po client-side
  useEffect(() => {
    setIsMounted(true);
    
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Generování částic pouze na klientovi
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  
  useEffect(() => {
    // Vytvořit částice jen na klientské straně
    const newParticles: ParticleProps[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 25,
        size: 2 + Math.random() * 4,
        color: i % 5 === 0 ? "#f97316" : i % 3 === 0 ? "#fb923c" : "#fdba74",
        top: Math.random() * 100,
        left: Math.random() * 100
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <section id="jak-to-funguje" className="relative text-white py-20 px-4 sm:px-6 overflow-hidden bg-[#0F172A]">
      {/* Pozadí s animovanými efekty */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Jemné pozadí s mřížkou */}
          <div className="absolute inset-0 opacity-10 bg-grid"></div>
          
          {/* Animované částice */}
          {particles.map((particle, index) => (
            <FloatingParticle 
              key={`particle-${index}`}
              delay={particle.delay}
              duration={particle.duration}
              size={particle.size}
              color={particle.color}
              top={particle.top}
              left={particle.left}
            />
          ))}
          
          {/* Animovaný gradient */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 mt-6">
        {/* Nadpis Sekce */}
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-100 mb-2">
            Jak to bude{" "}
            <span className="relative inline-block">
              probíhat
              {isMounted && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  className="absolute left-0 bottom-[-6px] h-1 w-full rounded-full bg-orange-500 origin-left"
                ></motion.div>
              )}
            </span>
            <span>?</span>
          </h2>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            S vámi od začátku až do úspěšného startu webu. Kompletní služby všechny procesy jsou{" "}
            <span className="text-orange-400 font-semibold">100% transparentní a v první fázi neplatíte ani korunu!</span>
          </p>
        </div>

        {/* Zobrazení skeletonu při načítání */}
        {!isMounted ? (
          <div className="py-10 space-y-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-800/40"></div>
                <div className="ml-6 w-full">
                  <div className="h-24 bg-slate-800/40 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Časová osa - Mobilní optimalizovaná verze */}
            <div className="md:hidden relative">
              {/* Centrální vertikální linie */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/10 via-orange-500/60 to-orange-500/10"></div>
              
              {/* Kroky procesu - mobilní verze */}
              {steps.map((step, index) => (
                <MobileTimelineItem key={index} step={step} index={index} />
              ))}
            </div>

            {/* Časová osa - Desktop alternující verze */}
            <div className="hidden md:block relative">
              {/* Vertikální linie */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -ml-0.25 bg-gradient-to-b from-orange-500/10 via-orange-500/60 to-orange-500/10"></div>
              
              {/* Kroky procesu - desktop verze */}
              {steps.map((step, index) => (
                <DesktopTimelineItem key={index} step={step} index={index} />
              ))}
            </div>

            {/* Výzva ke Spolupráci */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mt-12"
            >
              <div className="flex gap-4 mt-4 justify-center">
                <a
                  href="/kontakt"
                  className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full bg-orange-600 text-white font-bold shadow-lg transition-all duration-300 hover:bg-orange-500"
                >
                  {/* Text tlačítka */}
                  <span className="relative flex items-center z-10">
                    <span>Chci profesionální web!</span>
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M13 7l5 5-5 5M5 12h12"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </div>
      
      {/* Fixní CSS styly */}
      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;