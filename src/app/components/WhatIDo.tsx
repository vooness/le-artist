"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBakckground";

const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Pouze desktop hover efekt
  const isHovered = (id: number) =>
    !isMobileOrTablet && hoveredServiceId === id;

  const services = [
    {
      id: 1,
      name: "Webové stránky",
      shortDesc: "Digitální prezence",
      description: "Moderní, responzivní a přehledné webové stránky navržené na míru.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      link: "/sluzby/web",
      color: "from-orange-500 to-orange-600",
      bgPattern:
        "radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
    },
    {
      id: 2,
      name: "Shoptet e-shop",
      shortDesc: "E-commerce řešení",
      description: "Kompletní řešení e-shopu na platformě Shoptet, včetně úprav šablon na míru.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      link: "/sluzby/shoptet",
      color: "from-orange-500 to-orange-600",
      bgPattern:
        "radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
    },
    {
      id: 3,
      name: "Grafický design",
      shortDesc: "Vizuální identita",
      description: "Tvorba log, tiskovin a kompletní vizuální identity.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      link: "/sluzby/Grafika",
      color: "from-blue-400 to-blue-500",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
    },
    {
      id: 4,
      name: "Video tvorba",
      shortDesc: "Dynamický obsah",
      description: "Střih spotů, reklam a videí pro sociální sítě.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "/sluzby/videa",
      color: "from-pink-500 to-pink-600",
      bgPattern:
        "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
    },
    {
      id: 5,
      name: "Interaktivní kvízy",
      shortDesc: "Gamifikace",
      description: "E‑learningové moduly pro ZŠ a SŠ: kvízy, úlohy a SCORM export.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/sluzby/interaktivnicviceni",
      color: "from-indigo-500 to-indigo-600",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
    },
    {
      id: 6,
      name: "Online kurzy",
      shortDesc: "Vzdělávací platformy",
      description: "Interaktivní online kurzy pro rozvoj vašich dovedností v webdesignu, programování a grafice.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/sluzby/onlinekurzy",
      color: "from-cyan-500 to-cyan-600",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)",
    },
  ];

  const benefits = [
    {
      title: "Bezplatná konzultace",
      desc: "Probereme váš projekt nezávazně",
      icon: "💬",
    },
    {
      title: "Transparentní ceny",
      desc: "Jasná cenová nabídka předem",
      icon: "💎",
    },
    {
      title: "Rychlá realizace",
      desc: "Dodržujeme dohodnuté termíny",
      icon: "⚡",
    },
    {
      title: "24/7 podpora",
      desc: "Jsem tu pro vás kdykoliv",
      icon: "🛡️",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 lg:py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {!isMobileOrTablet && <ParticlesBackground />}

      {/* Čisté pozadí - pouze grid pattern */}
      {!isMobileOrTablet && (
        <div className="absolute inset-0 hidden lg:block">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                                linear-gradient(90deg,rgba(249,115,22,0.3) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 border border-orange-500/30 rounded-full bg-orange-500/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-sm font-mono text-orange-400">
              DIGITAL CREATIVE STUDIO
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">
              Vše pro váš{" "}
              <span className="text-orange-500">online úspěch</span>
            </span>
            <br />
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-orange-500 font-mono text-sm md:text-xs">//=</span>
              <span className="text-base md:text-xs text-slate-400 uppercase tracking-wider font-light">
                POD JEDNOU STŘECHOU
              </span>
              <span className="text-orange-500 font-mono text-xl md:text-sm">=//</span>
            </div>
          </h1>
        </motion.div>

        {/* Služby */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onHoverStart={() => !isMobileOrTablet && setHoveredServiceId(service.id)}
              onHoverEnd={() => !isMobileOrTablet && setHoveredServiceId(null)}
              className="group"
            >
              <Link href={service.link}>
                <div className="relative h-full cursor-pointer">
                  {/* Glowing border effect - pouze desktop hover */}
                  {!isMobileOrTablet && (
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300`}
                    />
                  )}
                  
                  <div
                    className={`relative h-full p-6 rounded-2xl bg-slate-800/80 backdrop-blur-sm overflow-hidden transition-all duration-300 border ${
                      isHovered(service.id) ? "border-transparent" : "border-slate-700"
                    }`}
                  >
                    {/* Background pattern - pouze na desktop hover */}
                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: service.bgPattern,
                        opacity: isHovered(service.id) ? 1 : 0,
                      }}
                    />

                    {/* Top gradient line - pouze na desktop hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} transition-opacity duration-300`}
                      style={{ opacity: isHovered(service.id) ? 1 : 0 }}
                    />

                    {/* Icon */}
                    <div
                      className={`relative mb-4 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <h3
                      className={`text-xl font-bold mb-1 transition-colors ${
                        isHovered(service.id) ? "text-orange-400" : "text-white"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p className="text-sm text-orange-400/80 mb-3">
                      {service.shortDesc}
                    </p>
                    <p className="text-sm text-slate-400 mb-6">
                      {service.description}
                    </p>

                    {/* Text "Klikněte pro více informací" na všech zařízeních */}
                    <div className="text-center pt-4 border-t border-slate-700">
                      <span className="text-sm text-orange-400 font-medium">
                        Klikněte pro více informací
                      </span>
                    </div>

                    {/* Corner accent - pouze desktop hover */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300"
                      style={{ opacity: isHovered(service.id) ? 1 : 0 }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
                        <defs>
                          <linearGradient
                            id={`gradient-${service.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="rgb(249, 115, 22)"
                            />
                            <stop
                              offset="100%"
                              stopColor="rgb(249, 115, 22)"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d="M64 0L64 64L0 64"
                          stroke={`url(#gradient-${service.id})`}
                          strokeWidth="1"
                          opacity="0.3"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Benefity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-700/70 backdrop-blur-sm border border-orange-500/20">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h4 className="font-semibold text-white mb-1">{b.title}</h4>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating particles - pouze desktop */}
          {!isMobileOrTablet &&
            [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full hidden lg:block"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <a
            href="/portfolio"
            className="group relative inline-flex items-center"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative flex items-center px-8 py-4 bg-[#0f172a] rounded-full border border-orange-500/50 group-hover:border-orange-400 transition-colors">
              <span className="text-white font-semibold mr-2">
                Prohlédnout portfolio
              </span>
              <svg
                className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;