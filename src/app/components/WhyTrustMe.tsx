"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaStar, FaClock, FaThumbsUp, FaHandshake } from "react-icons/fa"
import Link from "next/link"

const reasons = [
  {
    icon: <FaClock />,
    title: "Dostupnost 24/7",
    description:
      "Jsem vždy k dispozici pro vaše potřeby a připravený reagovat na vaše požadavky kdykoliv.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Zaměření na spokojenost",
    description:
      "Vaše spokojenost je pro mě prioritou. Pracuji tvrdě, abych zajistil, že výsledky překročí vaše očekávání.",
  },
  {
    icon: <FaHandshake />,
    title: "Profesionální přístup",
    description:
      "Snažím se vždy udržovat profesionální a přátelský vztah s klienty, což vede k dlouhodobé spolupráci.",
  },
]

const WhyTrustMe = () => {
  return (
    <section className="relative bg-[#0f172a] text-white py-20 px-6 sm:px-12 overflow-hidden -mt-[2px]">
      {/* Dekorativní prvky – vlnky a linie */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Levé vlnky */}
        <div className="absolute w-[600px] h-[600px] top-0 left-[-150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
            className="w-full h-full opacity-10"
          >
            <path
              d="M200 0C300 100 100 300 200 400"
              stroke="url(#leftGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="leftGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Pravé vlnky */}
        <div className="absolute w-[600px] h-[600px] bottom-0 right-[-150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
            className="w-full h-full opacity-10"
          >
            <path
              d="M200 0C300 100 100 300 200 400"
              stroke="url(#rightGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="rightGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Hlavička sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight relative inline-block ">
            Proč Mi Důvěřovat?
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute left-1/3 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>
          <p className="text-gray-300 text-lg mt-12 max-w-2xl mx-auto">
            Objevte důvody, proč vám mohu poskytnout nejlepší služby a jak vám
            mohu pomoci dosáhnout vašich cílů.
          </p>
        </motion.div>

        {/* Sekce s důvody */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-[#1e293b] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-orange-500 text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-300 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Výzva k akci */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Pojďme spolupracovat na vašem projektu!
          </h3>
          <Link href="/kontakt">
            <button className="px-8 py-3 bg-orange-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300">
              Kontaktujte Mě
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyTrustMe
