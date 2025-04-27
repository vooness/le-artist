"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  FaHandshake, 
  FaBrain, 
  FaCode, 
  FaCheck, 
  FaServer, 
  FaSearch, 
  FaRocket,
  FaShieldAlt,
  FaRegLightbulb,
  FaRegClock,
  FaArrowRight
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

// Komponenta pro jeden krok procesu
const ProcessStep = ({ step }: { step: StepInfo }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(true);
  
  // Detekce mobilního zařízení - efekty na mobilech vypnuty pro optimalizaci
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
      
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }
  }, []);

  return (
    <div ref={ref} className="relative mb-24 last:mb-8">
      {/* Vertikální spojovací čára mezi kroky */}
      {step.step < steps.length && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-24 w-px">
          <div className="h-full bg-gradient-to-b from-orange-500 to-transparent"></div>
          {!isMobile && (
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          )}
          {isMobile && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500"></div>
          )}
        </div>
      )}

      {/* Číslo kroku s velkou ikonou */}
      {!isMobile ? (
        <motion.div 
          className="hidden lg:block absolute -left-10 top-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 0.1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative text-9xl font-bold text-orange-500/10">{step.step}</div>
        </motion.div>
      ) : (
        <div className="hidden lg:block absolute -left-10 top-8 opacity-50">
          <div className="relative text-9xl font-bold text-orange-500/10">{step.step}</div>
        </div>
      )}
      
      {/* Hlavní karta kroku */}
      {!isMobile ? (
        <motion.div 
          className="max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative border border-orange-500/30 rounded-lg overflow-hidden">
            {/* Rohové dekorace */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/80"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500/80"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500/80"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/80"></div>
            
            {/* Skenující efekt - pouze na desktopu */}
            <motion.div 
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
              initial={{ top: "0%", opacity: 0 }}
              animate={isInView ? { top: ["0%", "100%"], opacity: [0, 1, 0] } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "linear" }}
            />
            
            {/* Hlavička karty */}
            <div className="bg-[#111927] border-b border-orange-500/30 p-4">
              <div className="flex items-center">
                <motion.div 
                  className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {step.icon}
                </motion.div>
                <div className="ml-4">
                  <motion.div 
                    className="text-orange-400 font-mono text-xs tracking-wider mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    FÁZE {step.step}
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {step.title}
                  </motion.h3>
                </div>
              </div>
            </div>
            
            {/* Obsah karty */}
            <div className="grid md:grid-cols-2 gap-8 bg-[#0c1320] p-6">
              {/* Levá strana - V této fázi */}
              <div>
                <motion.h4 
                  className="text-white font-medium mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  V této fázi:
                </motion.h4>
                <ul className="space-y-3">
                  {step.description.map((desc, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    >
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-5 h-5 rounded-md bg-orange-500/20 border border-orange-500/50 flex items-center justify-center">
                          <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-slate-300">{desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Pravá strana - Dobré vědět */}
              <div className="border-t md:border-t-0 md:border-l border-orange-500/30 pt-6 md:pt-0 md:pl-8">
                <motion.h4 
                  className="text-white font-medium mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Dobré vědět:
                </motion.h4>
                <div className="space-y-4">
                  {step.additionalInfo?.map((info, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    >
                      <div className="flex-shrink-0 text-orange-500 mr-3 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white">{info.title}</h5>
                        <p className="text-slate-300 text-sm">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        // Mobilní verze bez animací
        <div className="max-w-5xl mx-auto relative">
          <div className="relative border border-orange-500/30 rounded-lg overflow-hidden">
            {/* Rohové dekorace */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500/80"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500/80"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500/80"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500/80"></div>
            
            {/* Hlavička karty */}
            <div className="bg-[#111927] border-b border-orange-500/30 p-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <div className="ml-4">
                  <div className="text-orange-400 font-mono text-xs tracking-wider mb-1">FÁZE {step.step}</div>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                </div>
              </div>
            </div>
            
            {/* Obsah karty */}
            <div className="grid md:grid-cols-2 gap-8 bg-[#0c1320] p-6">
              {/* Levá strana - V této fázi */}
              <div>
                <h4 className="text-white font-medium mb-4">V této fázi:</h4>
                <ul className="space-y-3">
                  {step.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-5 h-5 rounded-md bg-orange-500/20 border border-orange-500/50 flex items-center justify-center">
                          <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-slate-300">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Pravá strana - Dobré vědět */}
              <div className="border-t md:border-t-0 md:border-l border-orange-500/30 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-white font-medium mb-4">Dobré vědět:</h4>
                <div className="space-y-4">
                  {step.additionalInfo?.map((info, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 text-orange-500 mr-3 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white">{info.title}</h5>
                        <p className="text-slate-300 text-sm">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Hlavní komponenta
const HowItWorks: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
      
      return () => {
        window.removeEventListener('resize', checkIsMobile);
      };
    }
  }, []);
  
  return (
    <section className="bg-[#060d1a] py-20 px-4 sm:px-6 overflow-hidden relative">
      {/* Futuristické pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mřížka pozadí */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full cyber-grid"></div>
        </div>
        
        {/* Světelné efekty */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-600/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-orange-600/5 rounded-full blur-[100px]"></div>
        
        {/* Binární kód pro futuristický vzhled */}
        <div className="absolute right-4 top-10 text-[8px] text-orange-500/10 font-mono leading-tight tracking-widest">
          01001010<br />10101010<br />01011010<br />10101100<br />01010111
        </div>
        <div className="absolute left-4 bottom-10 text-[8px] text-orange-500/10 font-mono leading-tight tracking-widest">
          10101010<br />01010101<br />10101010<br />01010101<br />10101010
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 mt-12">
        {/* Hlavička sekce */}
        {!isMobile && isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-4 mb-3">
              <motion.div 
                className="h-px w-8 bg-orange-500/70"
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span 
                className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Roadmapa
              </motion.span>
              <motion.div 
                className="h-px w-8 bg-orange-500/70"
                initial={{ width: 0 }}
                animate={{ width: "2rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mt-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Jak vytváříme{" "}
              <motion.span 
                className="text-orange-500 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                váš web
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="h-1 w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            
            <motion.p 
              className="text-slate-300 max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              S vámi od začátku až do úspěšného startu webu. Kompletní služby a všechny procesy jsou{" "}
              <span className="text-orange-400 font-semibold">100% transparentní a v první fázi neplatíte ani korunu!</span>
            </motion.p>
          </motion.div>
        ) : (
          // Mobilní verze bez animací
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-3">
              <div className="h-px w-8 bg-orange-500/70"></div>
              <span className="font-mono text-xs tracking-[0.3em] text-orange-400 uppercase">Roadmapa</span>
              <div className="h-px w-8 bg-orange-500/70"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-8">
              Jak vytváříme <span className="text-orange-500">váš web</span>
            </h2>
            
            <div className="h-1 w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            
            <p className="text-slate-300 max-w-3xl mx-auto mb-4">
              S vámi od začátku až do úspěšného startu webu. Kompletní služby a všechny procesy jsou{" "}
              <span className="text-orange-400 font-semibold">100% transparentní a v první fázi neplatíte ani korunu!</span>
            </p>
          </div>
        )}
        
        {/* Seznam všech kroků */}
        <div className="relative">
          {steps.map((step) => (
            <ProcessStep key={step.step} step={step} />
          ))}
        </div>
        
        {/* CTA sekce */}
        {!isMobile && isMounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-16"
          >
            <a
              href="/kontakt"
              className="group relative inline-flex items-center overflow-hidden px-8 py-3 bg-orange-500 rounded-lg text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              {/* Rohové dekorace */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30"></div>
              
              {/* Světelný efekt při hoveru */}
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
              </span>
              
              <span className="relative z-10 flex items-center">
                <span className="mr-2">POJĎME NA TO</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Žádné závazky. První konzultace je zcela zdarma.
            </p>
          </motion.div>
        ) : (
          // Mobilní verze bez animací
          <div className="text-center mt-16">
            <a
              href="/kontakt"
              className="group relative inline-flex items-center overflow-hidden px-8 py-3 bg-orange-500 rounded-lg text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300"
            >
              {/* Rohové dekorace */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30"></div>
              
              {/* Světelný efekt při hoveru */}
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
              </span>
              
              <span className="relative z-10 flex items-center">
                <span className="mr-2">POJĎME NA TO</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Žádné závazky. První konzultace je zcela zdarma.
            </p>
          </div>
        )}
      </div>
      
      {/* CSS Styles */}
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