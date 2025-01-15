"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPencilAlt,
  FaVideo,
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss } from "react-icons/si";

// Upravené dovednosti (8)
const skills = [
  { name: "HTML & CSS", value: 90, icon: <FaHtml5 /> },
  { name: "React.js", value: 85, icon: <FaReact /> },
  { name: "JavaScript", value: 80, icon: <FaJsSquare /> },
  { name: "Next.js", value: 75, icon: <SiNextdotjs /> },
  { name: "Grafický Design", value: 95, icon: <FaPencilAlt /> },
  { name: "Editace Videí", value: 90, icon: <FaVideo /> },
  { name: ".NET Core", value: 80, icon: <SiDotnet /> },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss /> },
];

const AboutMeSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-gray-900 overflow-hidden"
    >
      {/* Video na pozadí */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/imgs/about.webm" type="video/webm" />
          Váš prohlížeč nepodporuje HTML5 video.
        </video>
      </div>

      {/* Překrytí a obsah */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 max-w-7xl text-white text-center">
        {/* Nadpis */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide relative inline-block">
            Něco málo o mně
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute left-0 bottom-[-5px] h-[5px] bg-gradient-to-r from-orange-500 to-yellow-500 w-full rounded-full origin-left"
            />
          </h2>
        </motion.div>

        {/* Popis */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Jsem freelancer se specializací na grafický design, editaci videí,
          fotografii a front-end vývoj. Vytvářím poutavý vizuální obsah pomocí
          nástrojů Adobe, buduji webové stránky s moderními knihovnami jako
          React, Next.js a Tailwind CSS a mám zkušenosti s .NET Core. Práce
          není pro mě jen práce – baví mě to, žiji tím a vždy usiluji o
          spokojené zákazníky. Pocházím z Ostravy a mám dvě fenky rasy Shiba
          Inu, které jsou pro mě velkou inspirací a motivací.
        </motion.p>

        {/* Grid s dovednostmi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  skill,
}: {
  skill: { name: string; value: number; icon: React.ReactNode };
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center space-y-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg"
    >
      {/* Ikona – oranžová barva */}
      <div className="text-4xl" style={{ color: "#F97316" }}>
        {skill.icon}
      </div>
      <h4 className="text-lg font-medium">{skill.name}</h4>

      {/* Progress bar */}
      <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(to right, #F97316, #FF4500)",
          }}
          className="h-full rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default AboutMeSection;
