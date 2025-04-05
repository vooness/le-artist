"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsCheckCircle } from "react-icons/bs";
import { FiMonitor, FiEdit, FiVideo } from "react-icons/fi"; // Import ikon
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Webovky",
    description:
      "Moderní, funkční a responzivní webové stránky a e-shopy šité na míru.",
    icon: <FiMonitor />, // Ikona pro webovky
    highlights: ["Moderní webovky", "Shoptet eshop", "SEO optimalizace"],
  },
  {
    id: 2,
    title: "Grafika",
    description:
      "Působivé brandingy, tvorba loga a vizuální prvky, které zaujmou.",
    icon: <FiEdit />, // Ikona pro grafiku
    highlights: ["Adobe Photoshop", "AI toolky", "Pravidla Brandingu"],
  },
  {
    id: 3,
    title: "Střih Videa",
    description: "Profesionální střih videí s důrazem na příběh a kvalitní efekty.",
    icon: <FiVideo />, // Ikona pro střih videa
    highlights: ["Motion design", "Animace", "Krátká videa"],
  },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const OnlineCourses = () => {
  return (
    <section
      id="kurzy"
      className="relative py-24 px-6 sm:px-12 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Pixelové Okraje */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {/* Horní Pixelový Okraj */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[10px] bg-[url('/imgs/pixel-border-horizontal.png')] bg-repeat-x"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Pravý Pixelový Okraj */}
        <motion.div
          className="absolute top-0 right-0 h-full w-[10px] bg-[url('/imgs/pixel-border-vertical.png')] bg-repeat-y"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hlavička Sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold relative inline-block mt-12">
            Jsem také lektor!
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute left-1/3 -translate-x-1/3 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full origin-center"
            ></motion.div>
          </h2>

          {/* Přidaný obrázek */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Image
              src="/imgs/lektor.svg" // Upravte cestu k obrázku
              alt="Ilustrace lektorování"
              width={600} // Nastavte šířku podle potřeby
              height={600} // Nastavte výšku podle potřeby
              className="rounded-lg object-contain"
            />
          </motion.div>

          <p className="mt-12 text-white text-lg max-w-2xl mx-auto">
            Tyto kurzy jsou financovány Evropským sociálním fondem pro vzdělávání a jsou
            skoro zdarma pro účastníky, ať už jste zaměstnaní, samostatně výdělečně činní nebo nezaměstnaní (20% hradí učastník).
          </p>
        </motion.div>

        {/* Mřížka Kurzů */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              custom={i}
              variants={cardAnimation}
              className="relative group bg-[#20262f] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.7)] transition-all duration-500 h-full flex flex-col justify-between"
            >
              {/* Neonový Okraj */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#F97316] to-yellow-500 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500"></div>
              <div className="relative z-10 p-6 flex flex-col flex-grow">
                {/* Název Kurzu s Ikonou */}
                <h3 className="text-3xl font-bold text-orange-600 mb-4 flex items-center">
                  <span className="text-lg mr-2">{course.icon}</span>
                  {course.title}
                </h3>
                {/* Popis Kurzu */}
                <p className="text-gray-300 mb-4 flex-grow text-base sm:text-lg">
                  {course.description}
                </p>
                {/* Hlavní Body */}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-base sm:text-lg"
                    >
                      <BsCheckCircle className="text-[#F97316] mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Doplňkový Text */}
        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-gray-400">
            Pokud máte zájem,{" "}
            <a
              href="https://softinum.com/skoleni"
              className="text-[#F97316] font-bold underline"
            >
              mrkněte zde
            </a>{" "}
            na dostupné kurzy a termíny! Pokud si přejete jako firma vyškolit
            někoho zvlášť, neváhejte mě kontaktovat přes kontaktní formulář.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
