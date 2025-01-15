"use client";

import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Veterinární Ordinace",
    description:
      "Webová aplikace vytvořená na míru pro veterinární ordinaci, která umožňuje snadnou správu klientů a plánování schůzek.",
    technologies: ".NET Core, C#, HTML, CSS, JavaScript",
    video: "/imgs/veterina.webm",
    link: "https://veterinagottwaldova.cz", // Odkaz na detail nebo demo
    invertLayout: false,
  },
  {
    id: 2,
    title: "Portfolio AI Konzultanta",
    description:
      "Moderní portfolio, které kombinuje čistý design s interaktivními prvky a ukázkami AI projektů.",
    technologies: "React, Next.js, Tailwind CSS, Three.js",
    video: "/imgs/ai.webm",
    link: "https://www.ai-andrt.cz", // Odkaz na detail nebo demo
    invertLayout: true,
  },
  {
    id: 3,
    title: "Filmová Databáze",
    description:
      "Aplikace umožňující vyhledávání, filtrování a sledování informací o filmech pomocí API.",
    technologies: "React, Tailwind CSS, REST API",
    video: "/imgs/film.webm",
    link: "https://movieapp-mu-gilt.vercel.app", // Odkaz na detail nebo demo
    invertLayout: false,
  },
  {
    id: 4,
    title: "Poslední Vzkaz",
    description:
      "Osobní projekt zaměřený na uchování vzpomínek a vztahů prostřednictvím vzkazů pro vaše blízké.",
    technologies: "React, Node.js, MongoDB, Tailwind CSS",
    video: "/imgs/vzkaz.webm",
    link: "https://last-message-liard.vercel.app", // Odkaz na detail nebo demo
    invertLayout: true,
  },
  {
    id: 5,
    title: "Království zdraví",
    description:
      "Chcete vlastní eshop, ale nevíte jak na to? Pomůžu vám vytvořit pomocí Shoptetu váš první eshop. Navíc umím kódovat úpravy vzhledu i funkcí!",
    technologies: "Shoptet programátor",
    video: "/imgs/kz.webm",
    link: "wwww.kralostvizdravi.cz", // Odkaz na detail nebo demo
    invertLayout: false,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0F172A] py-24 px-8 text-orange-600"
    >
      {/* Dekorativní prvky */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl opacity-30 animate-float"
          style={{
            top: "-10%",
            left: "-20%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        {/* Hlavička sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white relative inline-block">
            Moje Projekty
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute left-0 bottom-[-10px] h-[6px] bg-orange-500 w-full rounded-full origin-left"
            ></motion.div>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-loose mt-10">
            Vybrané ukázky práce, v nichž kombinuji webdesign, moderní technologie a uživatelskou přívětivost. Můžete mít svůj projekt také!
          </p>
        </motion.div>

        {/* Výpis projektů */}
        <div className="space-y-40">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {!project.invertLayout ? (
                <>
                  {/* Video vlevo */}
                  <div>
                    <motion.video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controls={false}
                      className="w-full h-auto object-cover rounded-lg shadow-lg lg:max-h-[600px] pointer-events-none"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                  {/* Text vpravo */}
                  <div className="space-y-8">
                    <h3 className="text-4xl font-extrabold">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-orange-400">
                      Technologie: {project.technologies}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
                    >
                      Mrknout na web
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Text vlevo */}
                  <div className="order-2 lg:order-1 space-y-8">
                    <h3 className="text-4xl font-extrabold">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="text-sm text-orange-400">
                      Technologie: {project.technologies}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
                    >
                        Mrknout na web
                    </a>
                  </div>
                  {/* Video vpravo */}
                  <div className="order-1 lg:order-2">
                    <motion.video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      controls={false}
                      className="w-full h-auto object-cover rounded-lg shadow-lg lg:max-h-[600px] pointer-events-none"
                      whileHover={{ scale: 1.02 }}
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
