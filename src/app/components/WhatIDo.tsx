"use client"

import { motion } from "framer-motion"
import { BsCheck2Circle } from "react-icons/bs"
import Image from "next/image"
import { useState } from "react"

const services = [
  {
    title: "Grafika",
    description:
      "Působivé brandingy, tvorba loga a vizuální prvky, které zaujmou.",
    checkmarks: ["Individuální návrhy loga", "Kompletní vizuální styl", "Grafika pro sociální sítě"],
  },
  {
    title: "Střih Videa",
    description: "Profesionální střih videí s důrazem na příběh a kvalitní efekty.",
    checkmarks: ["Motion design", "AI voiceover", "Krátké reklamy"],
  },
  {
    title: "Webovky",
    description:
      "Moderní, funkční a responzivní webové stránky a e-shopy šité na míru.",
    checkmarks: ["Moderní webovky", "Shoptet eshop", "SEO optimalizace"],
  },
]

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section
      id="services"
      className="relative py-24 px-6 sm:px-12 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0f172a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mt-12">
        {/* Hlavní Nadpis */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight relative inline-block">
            S čím se na mě můžete spolehnout?
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute left-1/3 -translate-x-1/3 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>
          
          {/* Přidaný obrázek Shiba Inu pod nadpis */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-4"
          >
            {/* Použití komponenty Image z Next.js pro optimalizaci */}
            <Image
              src="/imgs/pixel-hi1.png" // Upravte cestu dle potřeby
              alt="Shiba Inu Charakter"
              width={350} // Nastavte šířku podle potřeby
              height={350} // Nastavte výšku podle potřeby
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-contain mt-12"
            />
          </motion.div>
          
          <p className="mt-12 text-gray-400 text-lg max-w-2xl mx-auto">
            Dodávám kreativní řešení s precizností, vášní a nejmodernějšími technologiemi.
          </p>
        </motion.div>

        {/* Dynamická Mřížka */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 mt-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnimation}
              className={`relative group p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                activeCard === i ? "scale-105 border border-orange-500" : "border border-transparent"
              }`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500"></div>
              <div className="relative z-10">
                {/* Název Služby */}
                <div className="flex justify-center items-center mb-6">
                  <h3 className="text-3xl font-bold text-orange-500">{service.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                {/* Seznam Checkmarků */}
                <ul className="mt-4 space-y-2">
                  {service.checkmarks.map((check, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300"
                    >
                      <BsCheck2Circle className="text-green-500 mr-2" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Světelné Efekty */}
        <motion.div
          className="absolute -top-24 -left-16 w-96 h-96 bg-orange-500 rounded-full blur-[200px] opacity-30 z-0"
          animate={{ x: [0, 20, -20], y: [0, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-48 right-0 w-72 h-72 bg-yellow-500 rounded-full blur-[150px] opacity-20 z-0"
          animate={{ x: [0, -15, 15], y: [0, -15, 15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* Výzva ke Spolupráci */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all"
          >
            Mrkni na mou práci
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIDo
