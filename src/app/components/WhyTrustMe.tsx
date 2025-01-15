"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaThumbsUp, FaHandshake } from "react-icons/fa";

const reasons = [
  {
    icon: <FaClock />,
    title: "Dostupnost 24/7",
    description:
      "Jsem vždy k dispozici pro vaše potřeby a připravený reagovat na vaše požadavky kdykoliv.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Zaměření na spokojenost klienta",
    description:
      "Vaše spokojenost je pro mě prioritou. Pracuji tvrdě, abych zajistil, že výsledky překročí vaše očekávání.",
  },
  {
    icon: <FaHandshake />,
    title: "Profesionální přístup",
    description:
      "Snažím se vždy udržovat profesionální a přátelský vztah s klienty, což vede k dlouhodobé spolupráci.",
  },
  {
    icon: <FaStar />,
    title: "Vysoká kvalita práce",
    description:
      "Důraz na detaily a kvalitu zaručuje, že každý projekt je proveden na nejvyšší úrovni.",
  },
];

const WhyTrustMe = () => {
  return (
    <section className="relative bg-gradient-to-r bg-gray-900 text-white py-20 px-6 sm:px-12 overflow-hidden">
      {/* Dekorativní prvky – přidané gradientové vrstvy a jemné animace */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
       
        {/* Můžete přidat další dekorativní prvky podle potřeby */}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hlavička Sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight relative inline-block">
            Proč Mi Důvěřovat?
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute left-1/3 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>
          <p className="text-gray-300 text-lg mt-12 max-w-2xl mx-auto">
            Objevte důvody, proč vám mohu poskytnout nejlepší služby a jak vám mohu pomoci dosáhnout vašich cílů.
          </p>
        </motion.div>

        {/* Důvody Sekce */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
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
              {/* Ikona */}
              <div className="text-orange-500 text-4xl mb-4">{reason.icon}</div>
              {/* Název Důvodu */}
              <h3 className="text-2xl font-bold mb-2">{reason.title}</h3>
              {/* Popis Důvodu */}
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
          <button className="px-8 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Kontaktujte Mě
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustMe;
