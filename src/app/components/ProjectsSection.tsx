"use client";

import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Veterinární Ordinace",
    description:
      "Webová aplikace vytvořená na míru pro veterinární ordinaci, která umožňuje snadnou správu klientů a plánování schůzek.",
    technologies: ".NET Core, C#, HTML, CSS, JavaScript",
    image: "/imgs/veterina.png",
    link: "https://veterinagottwaldova.cz",
    invertLayout: false,
  },
  {
    id: 2,
    title: "Portfolio AI Konzultanta",
    description:
      "Moderní portfolio, které kombinuje čistý design s interaktivními prvky a ukázkami AI projektů.",
    technologies: "React, Next.js, Tailwind CSS, Three.js",
    image: "/imgs/ai-andrt.png",
    link: "https://www.ai-andrt.cz",
    invertLayout: true,
  },
  {
    id: 3,
    title: "Filmová Databáze",
    description:
      "Aplikace umožňující vyhledávání, filtrování a sledování informací o filmech pomocí API.",
    technologies: "React, Tailwind CSS, REST API",
    image: "/imgs/movie.png",
    link: "https://movieapp-mu-gilt.vercel.app",
    invertLayout: false,
  },
  {
    id: 4,
    title: "Poslední Vzkaz",
    description:
      "Osobní projekt zaměřený na uchování vzpomínek a vztahů prostřednictvím vzkazů pro vaše blízké.",
    technologies: "React, Node.js, MongoDB, Tailwind CSS",
    image: "/imgs/last-message.png",
    link: "https://last-message-liard.vercel.app",
    invertLayout: true,
  },
  {
    id: 5,
    title: "Království zdraví",
    description:
      "Chcete vlastní eshop, ale nevíte jak na to? Pomůžu vám vytvořit pomocí Shoptetu váš první eshop. Navíc umím kódovat úpravy vzhledu i funkcí!",
    technologies: "Shoptet programátor",
    image: "/imgs/kz.png",
    link: "https://www.kralostvizdravi.cz",
    invertLayout: false,
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0F172A] py-24 px-8 text-orange-600"
    >
      {/* Dark blurred gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-70 blur-lg"></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-t from-transparent via-gray-700 to-transparent opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent opacity-50 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white relative inline-block">
            Moje Projekty
            <div className="absolute left-0 bottom-[-10px] h-[6px] bg-orange-500 w-full rounded-full origin-left"></div>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-loose mt-10">
            Vybrané ukázky práce, v nichž kombinuji webdesign, moderní technologie a
            uživatelskou přívětivost. Můžete mít svůj projekt také!
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {!project.invertLayout ? (
                <>
                  {/* Image on the left */}
                  <div className="relative">
                    {/* Project number */}
                    <div className="absolute top-4 left-4 bg-orange-500 bg-opacity-75 text-white text-sm font-bold px-3 py-1 rounded-full z-20">
                      #{project.id}
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-lg lg:max-h-[800px] pointer-events-none relative hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text on the right */}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
                    >
                      Mrknout na web
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Text on the left */}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
                    >
                      Mrknout na web
                    </a>
                  </div>
                  {/* Image on the right */}
                  <div className="order-1 lg:order-2 relative">
                    {/* Project number */}
                    <div className="absolute top-4 left-4 bg-orange-500 bg-opacity-75 text-white text-sm font-bold px-3 py-1 rounded-full z-20">
                      #{project.id}
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover rounded-lg lg:max-h-[800px] pointer-events-none relative hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
