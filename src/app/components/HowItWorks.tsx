"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHandshake, 
  FaBrain, 
  FaCode, 
  FaCheck, 
  FaServer, 
  FaSearch, 
  FaRocket, 
  FaChevronRight,
  FaShieldAlt,
  FaRegLightbulb,
  FaRegClock
} from "react-icons/fa";

// Definice rozhraní pro krok
interface StepInfo {
  title: string;
  description: string[];
  icon: React.ReactNode;
  step: number;
  additionalInfo?: {
    title: string;
    content: string;
    icon: React.ReactNode;
  }[];
}

// Data kroků s přidanými doplňujícími informacemi
const steps: StepInfo[] = [
  {
    title: "Konzultace",
    description: [
      "Důkladná analýza vašeho podnikání a cílů.",
      "Rozbor vašich požadavků na web včetně funkcionalit.",
      "Identifikace klíčových příležitostí pro váš online růst.",
    ],
    icon: <FaHandshake size={24} />,
    step: 1,
    additionalInfo: [
      {
        title: "Komunikace",
        content: "Otevřená a přímá komunikace. Jsme dostupní na telefonu, e-mailu i osobně.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Čas",
        content: "První konzultace trvá zpravidla 60-90 minut. Je zdarma a nezávazná.",
        icon: <FaRegClock />
      }
    ]
  },
  {
    title: "Výběr Domény a Hostingu",
    description: [
      "Výběr profesionální domény posilující vaši značku.",
      "Zajištění rychlého a bezpečného hostingu optimálního pro vaše potřeby.",
      "Kompletní technické nastavení pro bezproblémový provoz.",
    ],
    icon: <FaServer size={24} />,
    step: 2,
    additionalInfo: [
      {
        title: "Bezpečnost",
        content: "Používáme pouze prověřené hostingové služby s garantovanou dostupností 99,9%.",
        icon: <FaShieldAlt />
      },
      {
        title: "Výběr domény",
        content: "Poradíme vám s výběrem domény, která bude dobře zapamatovatelná a SEO-friendly.",
        icon: <FaRegLightbulb />
      }
    ]
  },
  {
    title: "Strategie a Plánování",
    description: [
      "Vypracování komplexní strategie pro váš online úspěch.",
      "Stanovení realistického harmonogramu s jasnými milníky.",
      "Definování cílové skupiny pro maximalizaci obchodních výsledků.",
    ],
    icon: <FaBrain size={24} />,
    step: 3,
    additionalInfo: [
      {
        title: "Strategický plán",
        content: "Připravíme podrobný plán vývoje, který zahrnuje časový rozvrh a klíčové milníky.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Konkurenční výhoda",
        content: "Analyzujeme konkurenci a identifikujeme možnosti, jak se od ní odlišit.",
        icon: <FaRegLightbulb />
      }
    ]
  },
  {
    title: "Design a Návrh",
    description: [
      "Tvorba profesionálního designu přizpůsobeného vaší značce.",
      "Vytvoření intuitivního uživatelského rozhraní pro lepší konverze.",
      "Iterace návrhů do dosažení dokonalého výsledku.",
    ],
    icon: <FaCode size={24} />,
    step: 4,
    additionalInfo: [
      {
        title: "Unikátní design",
        content: "Vytváříme originální, na míru šitý design, který respektuje vaši firemní identitu.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Revize",
        content: "Návrhy můžete připomínkovat a požadovat úpravy, dokud nebudete 100% spokojeni.",
        icon: <FaRegClock />
      }
    ]
  },
  {
    title: "Vývoj a Implementace",
    description: [
      "Použití nejmodernějších technologií pro rychlý, stabilní web.",
      "Programování pokročilých funkcí s důrazem na kvalitu.",
      "Implementace databází a systémů podle vašich požadavků.",
    ],
    icon: <FaCode size={24} />,
    step: 5,
    additionalInfo: [
      {
        title: "Moderní technologie",
        content: "Používáme nejmodernější frameworky a technologie jako React, Next.js a Node.js.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Čistý kód",
        content: "Čistý, dobře strukturovaný kód zajišťuje snadnou údržbu a rozšiřitelnost v budoucnu.",
        icon: <FaShieldAlt />
      }
    ]
  },
  {
    title: "SEO a Optimalizace",
    description: [
      "Plná optimalizace pro vyhledávače pro maximální viditelnost.",
      "Zrychlení načítání webu pro lepší uživatelský zážitek a SEO.",
      "Nastavení analytických nástrojů pro měření úspěšnosti.",
    ],
    icon: <FaSearch size={24} />,
    step: 6,
    additionalInfo: [
      {
        title: "Organický růst",
        content: "Optimalizace pro vyhledávače zajistí dlouhodobý organický přísun návštěvníků.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Analytika",
        content: "Implementujeme pokročilé analytické nástroje pro sledování úspěšnosti vašeho webu.",
        icon: <FaRegLightbulb />
      }
    ]
  },
  {
    title: "Testování a Kontrola Kvality",
    description: [
      "Důkladné testování na všech zařízeních a prohlížečích.",
      "Optimalizace uživatelské zkušenosti a odstraňování překážek konverze.",
      "Zajištění bezpečnosti a ochrany dat dle nejnovějších standardů.",
    ],
    icon: <FaCheck size={24} />,
    step: 7,
    additionalInfo: [
      {
        title: "Důkladné testy",
        content: "Testujeme na více než 30 různých kombinacích zařízení a prohlížečů.",
        icon: <FaShieldAlt />
      },
      {
        title: "Bezpečnost",
        content: "Implementujeme nejnovější bezpečnostní protokoly a ochranu proti útokům.",
        icon: <FaShieldAlt />
      }
    ]
  },
  {
    title: "Nasazení a Podpora",
    description: [
      "Bezproblémové nasazení webu s minimálním výpadkem.",
      "Dlouhodobá technická podpora a poradenství.",
      "Pravidelné aktualizace a vylepšení pro udržení konkurenční výhody.",
    ],
    icon: <FaRocket size={24} />,
    step: 8,
    additionalInfo: [
      {
        title: "Nepřetržitá podpora",
        content: "Poskytujeme dlouhodobou technickou podporu a řešíme případné problémy okamžitě.",
        icon: <FaRegLightbulb />
      },
      {
        title: "Aktualizace",
        content: "Pravidelně aktualizujeme web, aby byl vždy zabezpečený a využíval nejnovější technologie.",
        icon: <FaRegClock />
      }
    ]
  },
];

// Komponenta pro zobrazení jednoho kroku
const StepCard = ({
  step,
  isActive,
  onClick,
  stepRef,
}: {
  step: StepInfo;
  isActive: boolean;
  onClick: () => void;
  stepRef?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <motion.div
      ref={stepRef}
      className={`relative cursor-pointer rounded-lg overflow-hidden 
        ${isActive 
          ? "bg-slate-800/90 border border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]" 
          : "bg-slate-800/40 border border-slate-700/50"
        } 
        transition-all duration-300 backdrop-blur-sm`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/70"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/70"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/70"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/70"></div>
      
      {/* Skenující efekt v aktivním stavu */}
      {isActive && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
          initial={{ top: "0%" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      <div className="p-4 flex items-center">
        {/* Kruhová ikona */}
        <div 
          className={`relative w-14 h-14 rounded-full flex items-center justify-center 
            ${isActive 
              ? "bg-orange-500 text-white" 
              : "bg-slate-700 text-slate-300"
            } transition-colors duration-300`}
        >
          {/* Pulzující efekt pro aktivní krok */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-500/30"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          <div className="text-lg font-bold">{step.step}</div>
        </div>
        
        {/* Obsah karty */}
        <div className="ml-4 flex-1">
          <div className="flex items-center">
            <span className={`text-xs font-mono tracking-wider ${isActive ? "text-orange-400" : "text-orange-500/50"}`}>
              LEVEL {step.step}
            </span>
            <div className={`h-px w-10 ml-2 ${isActive ? "bg-orange-500" : "bg-slate-600"}`}></div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-bold ${isActive ? "text-white" : "text-slate-300"}`}>
              {step.title}
            </h3>
            <div className={`${isActive ? "text-orange-400" : "text-slate-500"}`}>
              {step.icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Označení aktivního kroku */}
      {isActive && (
        <div className="absolute -top-1 right-6 bg-orange-600 text-xs font-mono text-white px-2 py-0.5 rounded-b-md">
          ACTIVE
        </div>
      )}
    </motion.div>
  );
};

// Komponenta pro detail kroku na mobilu - s nadpisem výše
const MobileStepDetail = ({ step }: { step: StepInfo }) => {
  return (
    <motion.div
      className="relative rounded-lg bg-slate-800/70 border border-orange-500/20 p-4 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key={step.step}
    >
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/70"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/70"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/70"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/70"></div>
      
      {/* Hlavička - Pro mobilní zařízení zkrácená, jen ikona a text */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white">
          {step.icon}
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="text-orange-400 font-mono text-xs">MISE {step.step}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
        </div>
      </div>
      
      {/* Dělicí čára s animovaným efektem */}
      <div className="relative h-px w-full my-3 bg-orange-800/50 overflow-hidden">
        <motion.div 
          className="absolute h-full w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Obsah detailu */}
      <div className="mt-4">
        <p className="text-slate-300 font-medium mb-3">V této fázi:</p>
        <ul className="space-y-3">
          {step.description.map((desc, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.15 }}
              className="flex items-start gap-3 text-slate-200"
            >
              <span className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-md bg-orange-600/40 border border-orange-500/70 flex items-center justify-center">
                  <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </span>
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Dodatečné informace pro mobilní zobrazení */}
      {step.additionalInfo && (
        <div className="mt-6">
          <div className="relative h-px w-full my-3 bg-orange-800/50 overflow-hidden">
            <motion.div 
              className="absolute h-full w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p className="text-slate-300 font-medium mb-3">Dobré vědět:</p>
          <div className="space-y-3">
            {step.additionalInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-slate-900/50 border border-orange-500/10 rounded-lg p-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-orange-400">
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-white">{info.title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Komponenta pro zobrazení detailu kroku na desktopu
const DesktopStepDetail = ({ step }: { step: StepInfo }) => {
  return (
    <motion.div
      className="relative rounded-lg bg-slate-800/70 border border-orange-500/20 p-6 backdrop-blur-sm h-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      key={step.step}
    >
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/70"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/70"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500/70"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/70"></div>
      
      {/* Hlavička */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white">
          {step.icon}
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <span className="text-orange-400 font-mono text-sm">MISE {step.step}</span>
            <div className="h-px w-12 ml-2 bg-orange-500/50"></div>
          </div>
          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
        </div>
      </div>
      
      {/* Dělicí čára s animovaným efektem */}
      <div className="relative h-px w-full my-4 bg-orange-800/50 overflow-hidden">
        <motion.div 
          className="absolute h-full w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          animate={{ x: ["0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Obsah detailu */}
      <div className="mt-6">
        <p className="text-slate-300 font-medium mb-4">V této fázi:</p>
        <ul className="space-y-4">
          {step.description.map((desc, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.15 }}
              className="flex items-start gap-3 text-slate-200"
            >
              <span className="flex-shrink-0 mt-1">
                <div className="w-5 h-5 rounded-md bg-orange-600/40 border border-orange-500/70 flex items-center justify-center">
                  <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </span>
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Dodatečné informace pro desktop zobrazení */}
      {step.additionalInfo && (
        <div className="mt-8">
          <div className="relative h-px w-full my-4 bg-orange-800/50 overflow-hidden">
            <motion.div 
              className="absolute h-full w-20 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p className="text-slate-300 font-medium mb-4">Dobré vědět:</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {step.additionalInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="bg-slate-900/50 border border-orange-500/10 rounded-lg p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-orange-400">
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-white">{info.title}</h4>
                </div>
                <p className="text-slate-300 text-sm">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Hlavní komponenta
const HowItWorks: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const activeStepRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Nastavení client-side renderování
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Najít aktivní krok
  const activeStepData = steps.find(step => step.step === activeStep) || steps[0];

  // Upravené řešení pro mobilní scrollování, které předchází skokům
  useEffect(() => {
    if (activeStepRef.current && window.innerWidth < 768) {
      // Získáme aktuální pozici a velikost scrollované oblasti
      const rect = activeStepRef.current.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      
      // Pokud je krok ve spodní části viewportu, scrollujeme jen o trochu výš
      if (rect.top > window.innerHeight / 2) {
        window.scrollTo({
          top: window.scrollY + rect.top - 100, // Posuneme se tak, aby krok byl vidět výše
          behavior: 'smooth'
        });
      } 
      // Pokud není zcela viditelný a je nahoře, scrollujeme na něj
      else if (!isInViewport && rect.top < window.innerHeight / 2) {
        activeStepRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [activeStep]);

  return (
    <section id="jak-to-funguje" className="relative text-white py-20 px-4 sm:px-6 overflow-hidden bg-[#0F172A]">
      {/* Futuristické pozadí s efekty */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mřížka pozadí */}
        <div className="absolute inset-0 opacity-10 cyber-grid"></div>
        
        {/* Barevné efekty */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Vertikální linie */}
        <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>
        <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>
        
        {/* Binární kód pro futuristický efekt */}
        <div className="absolute right-4 top-10 text-[8px] text-orange-500/20 font-mono leading-tight tracking-widest">
          01001010<br />10101010<br />01011010<br />10101100<br />01010111
        </div>
        <div className="absolute left-4 bottom-10 text-[8px] text-orange-500/20 font-mono leading-tight tracking-widest">
          10101010<br />01010101<br />10101010<br />01010101<br />10101010
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-6">
        {/* Nadpis sekce */}
        <div className="text-center mb-12">
          <div className="inline-block mb-2">
            <div className="flex items-center gap-2 text-sm font-mono text-orange-400 justify-center">
              <div className="h-px w-8 bg-orange-500/50"></div>
              <span>MISE PŘEHLED</span>
              <div className="h-px w-8 bg-orange-500/50"></div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              PLÁN VAŠÍ MISE
            </span>
          </h2>
          
          {isMounted && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="h-1 w-32 mx-auto mt-4 mb-6 rounded-full bg-orange-500/50"
            ></motion.div>
          )}
          
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            S vámi od začátku až do úspěšného startu webu. Kompletní služby a všechny procesy jsou{" "}
            <span className="text-orange-400 font-semibold">100% transparentní a v první fázi neplatíte ani korunu!</span>
          </p>
        </div>

        {/* Desktop a tablet verze */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-8">
            {/* Levý sloupec - kroky */}
            <div className="col-span-5 space-y-4">
              {steps.map((step) => (
                <StepCard
                  key={step.step}
                  step={step}
                  isActive={step.step === activeStep}
                  onClick={() => setActiveStep(step.step)}
                />
              ))}
            </div>
            
            {/* Pravý sloupec - detail kroku a CTA tlačítko */}
            <div className="col-span-7 relative flex flex-col">
              <AnimatePresence mode="wait">
                <DesktopStepDetail step={activeStepData} />
              </AnimatePresence>
              
              {/* CTA tlačítko je nyní součástí pravého sloupce na desktopu */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-center mt-8"
              >
                <a
                  href="/kontakt"
                  className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
                >
                  {/* Tech rohové dekorace */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30"></div>
                  
                  {/* Světelný efekt při hoveru */}
                  <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                  </span>
                  
                  <span className="relative z-10 flex items-center">
                    <span className="mr-1">POJĎME NA TO</span>
                    <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Mobilní verze - s fixovaným scrollováním pro lepší UX */}
        <div className="md:hidden">
          {/* Kontejner s fixní výškou pro zabránění skokům stránky */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                {/* Karta kroku */}
                <StepCard
                  step={step}
                  isActive={step.step === activeStep}
                  onClick={() => setActiveStep(step.step === activeStep ? 0 : step.step)}
                  stepRef={step.step === activeStep ? activeStepRef : undefined}
                />
                
                {/* Detail kroku - zobrazí se pouze pro aktivní krok */}
                {step.step === activeStep && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 px-2"
                    >
                      <MobileStepDetail step={step} />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA tlačítko pro mobilní zobrazení */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/kontakt"
              className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
            >
              {/* Tech rohové dekorace */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30"></div>
              
              <span className="relative z-10 flex items-center">
                <span className="mr-1">POJĎME NA TO</span>
                <FaChevronRight className="ml-2" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* CTA tlačítko - odstraněno z této části a přesunuto do správných částí pro desktop a mobil */}
      </div>

      {/* Fixní CSS styly */}
      <style jsx>{`
        .cyber-grid {
          background-image: 
            radial-gradient(circle, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(to right, rgba(249, 115, 22, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.05) 1px, transparent 1px);
          background-size: 60px 60px, 20px 20px, 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;