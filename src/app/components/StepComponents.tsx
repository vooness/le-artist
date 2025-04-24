"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBrain, FaCode, FaCheck, FaServer, FaSearch, FaRocket, FaTerminal } from "react-icons/fa";

// Definice typů
export interface StepInfo {
  title: string;
  description: string[];
  icon: JSX.Element;
  date: string;
  techColor: string;
}

interface StepProps {
  step: StepInfo;
  index: number;
  active: boolean;
}

// Data kroků s technickými prvky
export const steps: StepInfo[] = [
  {
    title: "Konzultace",
    description: [
      "Důkladná analýza vašeho podnikání a cílů.",
      "Rozbor vašich požadavků na web včetně funkcionalit.",
      "Identifikace klíčových příležitostí pro váš online růst.",
    ],
    icon: <FaHandshake />,
    date: "init.process()",
    techColor: "#38bdf8"
  },
  {
    title: "Výběr Domény a Hostingu",
    description: [
      "Výběr profesionální domény posilující vaši značku.",
      "Zajištění rychlého a bezpečného hostingu optimálního pro vaše potřeby.",
      "Kompletní technické nastavení pro bezproblémový provoz.",
    ],
    icon: <FaServer />,
    date: "setup.config()",
    techColor: "#22c55e"
  },
  {
    title: "Strategie a Plánování",
    description: [
      "Vypracování komplexní strategie pro váš online úspěch.",
      "Stanovení realistického harmonogramu s jasnými milníky.",
      "Definování cílové skupiny pro maximalizaci obchodních výsledků.",
    ],
    icon: <FaBrain />,
    date: "strategy.map()",
    techColor: "#fb923c"
  },
  {
    title: "Design a Návrh",
    description: [
      "Tvorba profesionálního designu přizpůsobeného vaší značce.",
      "Vytvoření intuitivního uživatelského rozhraní pro lepší konverze.",
      "Iterace návrhů do dosažení dokonalého výsledku.",
    ],
    icon: <FaCode />,
    date: "design.create()",
    techColor: "#a855f7"
  },
  {
    title: "Vývoj a Implementace",
    description: [
      "Použití nejmodernějších technologií pro rychlý, stabilní web.",
      "Programování pokročilých funkcí s důrazem na kvalitu.",
      "Implementace databází a systémů podle vašich požadavků.",
    ],
    icon: <FaTerminal />,
    date: "dev.build()",
    techColor: "#f43f5e"
  },
  {
    title: "SEO a Optimalizace",
    description: [
      "Plná optimalizace pro vyhledávače pro maximální viditelnost.",
      "Zrychlení načítání webu pro lepší uživatelský zážitek a SEO.",
      "Nastavení analytických nástrojů pro měření úspěšnosti.",
    ],
    icon: <FaSearch />,
    date: "seo.optimize()",
    techColor: "#06b6d4"
  },
  {
    title: "Testování a Kontrola Kvality",
    description: [
      "Důkladné testování na všech zařízeních a prohlížečích.",
      "Optimalizace uživatelské zkušenosti a odstraňování překážek konverze.",
      "Zajištění bezpečnosti a ochrany dat dle nejnovějších standardů.",
    ],
    icon: <FaCheck />,
    date: "test.verify()",
    techColor: "#fbbf24"
  },
  {
    title: "Nasazení a Podpora",
    description: [
      "Bezproblémové nasazení webu s minimálním výpadkem.",
      "Dlouhodobá technická podpora a poradenství.",
      "Pravidelné aktualizace a vylepšení pro udržení konkurenční výhody.",
    ],
    icon: <FaRocket />,
    date: "deploy.launch()",
    techColor: "#0ea5e9"
  },
];

// Code Bubble komponenta
export const CodeBubble: React.FC<{text: string, color: string, delay: number}> = ({ text, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="absolute -top-8 -right-2 text-xs font-mono bg-slate-900/80 px-2 py-1 rounded border-t border-l"
    style={{ borderColor: color }}
  >
    <span style={{ color }}>$ {text}</span>
  </motion.div>
);

// Status indikátor komponenta
export const StatusIndicator: React.FC<{color: string, active: boolean}> = ({ color, active }) => (
  <div className="flex items-center gap-1.5">
    <div className={`w-1.5 h-1.5 rounded-full ${active ? 'animate-pulse' : 'opacity-20'}`}
         style={{ backgroundColor: active ? color : 'currentColor' }} />
    <div className="w-6 h-[1px]" style={{ backgroundColor: active ? color : '#2a3458' }} />
  </div>
);

// Desktopová verze kroku
export const DesktopTimelineItem: React.FC<StepProps> = ({ step, index, active }) => (
  <div className="relative mb-12">
    <div className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Obsah */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
      >
        <div className="bg-slate-900/80 backdrop-blur-sm border border-[#1e293b] rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          {/* Tech horní linka */}
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: step.techColor }}></div>
          
          {/* Code bubble */}
          <CodeBubble text={step.date} color={step.techColor} delay={0.3} />
          
          {/* Nadpis s podtržením */}
          <h3 className="text-xl font-bold text-white relative inline-block mb-4">
            {step.title}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 bottom-[-4px] h-0.5 rounded-full"
              style={{ backgroundColor: step.techColor }}
            />
          </h3>
          
          {/* Seznam položek */}
          <ul className="space-y-3 mt-3">
            {step.description.map((desc, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                className={`flex items-start gap-3 text-gray-300 group ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <span className="flex-shrink-0 mt-1" style={{ color: step.techColor }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10.8L2.9 7.7L2 8.6L6 12.6L14 4.6L13.1 3.7L6 10.8Z" fill="currentColor"/>
                  </svg>
                </span>
                <span>{desc}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Tech status indikátory */}
          <div className={`absolute bottom-3 ${index % 2 === 0 ? 'left-3' : 'right-3'} flex gap-1`}>
            {[0, 1, 2].map((i) => (
              <StatusIndicator key={i} color={step.techColor} active={active && i % 2 === 0} />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Středový bod s ikonou */}
      <div className="w-2/12 flex-shrink-0 relative z-10 flex justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center relative"
          style={{ backgroundColor: active ? step.techColor : '#1e293b' }}
        >
          <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                 style={{ backgroundColor: active ? step.techColor : '#334155' }}>
              {step.icon}
            </div>
          </div>
          
          {/* Tech rohové dekorace */}
          <div className={`absolute -top-1 -right-1 w-3 h-3 border-t border-r rounded-tr-lg ${active ? 'opacity-100' : 'opacity-30'}`} 
               style={{ borderColor: step.techColor }}></div>
          <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-b border-l rounded-bl-lg ${active ? 'opacity-100' : 'opacity-30'}`}
               style={{ borderColor: step.techColor }}></div>
        </motion.div>
        
        {/* Status text */}
        <div className="absolute top-20 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs font-mono"
            style={{ color: active ? step.techColor : '#64748b' }}
          >
            <span className="bg-slate-900/80 px-2 py-1 rounded-sm border-b border-r" 
                  style={{ borderColor: active ? step.techColor : '#1e293b' }}>
              {active ? 'active' : 'waiting'}
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Prázdný prostor na vyrovnání */}
      <div className="w-5/12"></div>
    </div>
  </div>
);

// Mobilní verze kroku
export const MobileTimelineItem: React.FC<StepProps> = ({ step, index, active }) => (
  <div className="relative mb-12 ml-3">
    <div className="flex items-start">
      {/* Ikona */}
      <div className="relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
          className="w-10 h-10 -ml-5 rounded-lg shadow-lg flex items-center justify-center relative"
          style={{ backgroundColor: active ? step.techColor : '#1e293b' }}
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
                 style={{ backgroundColor: active ? step.techColor : '#334155' }}>
              {step.icon}
            </div>
          </div>
          
          {/* Tech rohové dekorace */}
          <div className={`absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r rounded-tr-md ${active ? 'opacity-100' : 'opacity-30'}`} 
               style={{ borderColor: step.techColor }}></div>
          <div className={`absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l rounded-bl-md ${active ? 'opacity-100' : 'opacity-30'}`}
               style={{ borderColor: step.techColor }}></div>
        </motion.div>
        
        {/* Vertikální linie */}
        <div className="absolute top-10 left-0 w-0.5 h-full"
             style={{ background: `linear-gradient(to bottom, ${step.techColor}, transparent)` }}></div>
      </div>
      
      {/* Obsahová karta */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="ml-8 mt-0 w-full bg-slate-900/80 backdrop-blur-sm border border-[#1e293b] rounded-xl p-5 shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: step.techColor }}></div>
        <CodeBubble text={step.date} color={step.techColor} delay={0.3} />
        
        <h3 className="text-lg font-bold text-white relative inline-block mb-3">
          {step.title}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute left-0 bottom-[-3px] h-0.5 w-full rounded-full"
            style={{ backgroundColor: step.techColor }}
          />
        </h3>
        
        <ul className="space-y-2 mt-3">
          {step.description.map((desc, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
              className="flex items-start gap-2 text-gray-300 text-sm"
            >
              <span className="flex-shrink-0 mt-1" style={{ color: step.techColor }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.8L2.9 7.7L2 8.6L6 12.6L14 4.6L13.1 3.7L6 10.8Z" fill="currentColor"/>
                </svg>
              </span>
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="absolute bottom-3 right-3 flex gap-1">
          {[0, 1].map((i) => (
            <StatusIndicator key={i} color={step.techColor} active={active && i % 2 === 0} />
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);