"use client"

import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"
import { FaHandshake, FaBrain, FaCode, FaCheck, FaServer, FaGlobe, FaSearch, FaRocket, FaHandsHelping } from "react-icons/fa"

const steps = [
  {
    title: "Konzultace",
    description: [
      "Důkladné pochopení vašich cílů a vizí.",
      "Podrobná diskuse o požadavcích projektu.",
      "Identifikace výzev a možností.",
    ],
    icon: <FaHandshake />,
    date: "Krok 1",
  },
  {
    title: "Výběr Domény a Hostingu",
    description: [
      "Registrace vhodné domény pro váš web.",
      "Výběr spolehlivého hostingového poskytovatele.",
      "Nastavení serverového prostředí.",
    ],
    icon: <FaServer />,
    date: "Krok 2",
  },
  {
    title: "Strategie a Plánování",
    description: [
      "Vytvoření strategie šité na míru vašim potřebám.",
      "Nastavení jasného harmonogramu a milníků.",
      "Definování cílové skupiny a uživatelského zážitku.",
    ],
    icon: <FaBrain />,
    date: "Krok 3",
  },
  {
    title: "Design a Návrh",
    description: [
      "Tvorba UX/UI designu pro intuitivní uživatelské rozhraní.",
      "Vytvoření vizuálních prvků a prototypů.",
      "Iterace návrhů na základě vašich podnětů.",
    ],
    icon: <FaCode />,
    date: "Krok 4",
  },
  {
    title: "Vývoj a Implementace",
    description: [
      "Výběr vhodného frameworku a technologií.",
      "Programování front-endu a back-endu webu.",
      "Integrace funkcionalit a databází.",
    ],
    icon: <FaCode />,
    date: "Krok 5",
  },
  {
    title: "SEO a Optimalizace",
    description: [
      "Optimalizace pro vyhledávače (SEO) pro lepší viditelnost.",
      "Zajištění rychlosti načítání a výkonu webu.",
      "Implementace analytických nástrojů pro sledování návštěvnosti.",
    ],
    icon: <FaSearch />,
    date: "Krok 6",
  },
  {
    title: "Testování a Kontrola Kvality",
    description: [
      "Provádění důkladných testů funkčnosti a uživatelské přívětivosti.",
      "Odstraňování chyb a optimalizace kódu.",
      "Zajištění kompatibility s různými zařízeními a prohlížeči.",
    ],
    icon: <FaCheck />,
    date: "Krok 7",
  },
  {
    title: "Nasazení a Podpora",
    description: [
      "Nasazení webu na živý server.",
      "Poskytování podpory a údržby po spuštění.",
      "Pravidelné aktualizace a vylepšení podle vašich potřeb.",
    ],
    icon: <FaRocket />,
    date: "Krok 8",
  },
]

const EnhancedTimeline = () => {
  return (
    <section
      id="spoluprace"
      className="relative text-white py-20 px-6 overflow-hidden bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto relative z-10 mt-20">
        {/* Nadpis Sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-100 relative inline-block">
            Jak to bude{" "}
            <span className="relative">
              probíhat?
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                style={{ backgroundColor: "#F97316" }}
                className="absolute left-0 right-0 bottom-[-10px] h-[6px] w-full rounded-full origin-left"
              ></motion.div>
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-12">
            Kontaktujte mě, společně zjistíme vaše potřeby, vytvořím návrh a budeme pokračovat dále. V první fázi nic neplatíte!
          </p>
        </motion.div>

        {/* Časová Osa */}
        <VerticalTimeline
          animate={true}
          className="z-10"
          lineColor="#F97316" /* Oranžová čára */
        >
          {steps.map((step, index) => (
            <VerticalTimelineElement
              key={index}
              date={step.date}
              icon={step.icon}
              iconStyle={{
                background: "#F97316",
                color: "#fff",
                boxShadow: "0px 4px 20px rgba(249, 115, 22, 0.7)",
              }}
              contentStyle={{
                background: "rgba(33, 33, 33, 0.95)",
                color: "#fff",
                borderRadius: "12px",
                boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.6)",
                border: "1px solid #F97316",
              }}
              contentArrowStyle={{
                borderRight: "8px solid rgba(33, 33, 33, 0.95)",
              }}
            >
              {/* Nadpis Kroku */}
              <h3 className="text-2xl font-bold text-[#F97316] relative">
                {step.title}
                {/* Animované Podtržení */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  style={{ backgroundColor: "#F97316" }}
                  className="absolute left-0 bottom-[-6px] h-[4px] rounded-full"
                ></motion.div>
              </h3>

              {/* Popis Kroku */}
              <ul className="mt-4 space-y-3">
                {step.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300 leading-6 group"
                  >
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.2,
                        ease: "easeOut",
                      }}
                      className="text-[#F97316] text-lg"
                    >
                      ✔
                    </motion.span>
                    <span className="group-hover:text-[#F97316] transition duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* Výzva ke Spolupráci */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
           <div className="flex gap-4 mt-4 justify-center ">
              <a
                href="/kontakt"
                className="px-5 py-2 sm:px-6 sm:py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                Chci svůj web!
              </a>
              
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedTimeline
