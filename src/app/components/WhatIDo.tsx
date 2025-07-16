"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const IntroSection = () => {
  const sectionRef = useRef(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [cardsInView, setCardsInView] = useState<boolean[]>(new Array(6).fill(false));

  const testimonials = [
    {
      text: "Konečně web, který skutečně prodává! Náš e-shop teď generuje objednávky i v noci.",
      author: "Martin K.",
      business: "E-shop s outdoor vybavením",
      rating: 5,
      metric: "+180% prodeje"
    },
    {
      text: "Investice se vrátila už za 2 měsíce. Konverze vzrostly o 150%!",
      author: "Jana S.", 
      business: "Online kurzy",
      rating: 5,
      metric: "+150% konverze"
    },
    {
      text: "Nejlepší rozhodnutí pro náš byznys. Profesionální přístup a skvělé výsledky.",
      author: "Petr M.",
      business: "Konzultační služby", 
      rating: 5,
      metric: "+90% klientů"
    },
    {
      text: "Naše škola konečně má moderní systém. Studenti jsou nadšení!",
      author: "Mgr. Kateřina V.",
      business: "ZŠ Vinohrady",
      rating: 5,
      metric: "95% spokojenost"
    },
    {
      text: "Rychlost, kvalita a férový přístup. Doporučuji všem!",
      author: "Tomáš L.",
      business: "Stavební firma",
      rating: 5,
      metric: "+200% kontakty"
    },
    {
      text: "Díky novému webu máme konečně více zákazníků než stihneme.",
      author: "Eva K.",
      business: "Designové studio",
      rating: 5,
      metric: "+120% objednávky"
    }
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobileOrTablet) {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isMobileOrTablet, testimonials.length]);

  // Observer pro animace karet na mobilu
  useEffect(() => {
    if (isMobileOrTablet) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-card-index') || '0');
              setCardsInView(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      // Pozorovat všechny karty
      const cards = document.querySelectorAll('[data-card-index]');
      cards.forEach(card => observer.observe(card));

      return () => observer.disconnect();
    }
  }, [isMobileOrTablet]);

  const isHovered = (id: number | null) => !isMobileOrTablet && hoveredServiceId === id;

  const TestimonialCard = ({ testimonial, isMobile = false }: { 
    testimonial: typeof testimonials[0], 
    isMobile?: boolean 
  }) => (
    <div className={`${isMobile ? 'w-full' : 'flex-shrink-0 w-96'} relative group`}>
      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/0 via-orange-500/30 to-orange-600/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
      
      <div className={`relative ${isMobile ? 'p-6' : 'p-8'} bg-slate-800/80 rounded-2xl border border-slate-700/50 backdrop-blur-sm group-hover:border-orange-500/30 transition-all duration-300 h-full`}>
        <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className={`flex justify-between items-start ${isMobile ? 'mb-4' : 'mb-6'}`}>
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className={`text-yellow-400 ${isMobile ? 'text-lg' : 'text-xl'}`}>⭐</span>
            ))}
          </div>
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-3 py-1.5 rounded-full flex items-center justify-center">
            <span className="text-green-400 text-sm font-bold text-center">
              {testimonial.metric}
            </span>
          </div>
        </div>
        
        <div className={`relative ${isMobile ? 'mb-6' : 'mb-8'}`}>
          <div className={`absolute -top-2 -left-2 text-orange-400/30 ${isMobile ? 'text-3xl' : 'text-4xl'} font-serif`}>"</div>
          <p className={`text-gray-200 ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed italic pl-6 pr-2`}>
            {testimonial.text}
          </p>
          <div className={`absolute -bottom-2 -right-2 text-orange-400/30 ${isMobile ? 'text-3xl' : 'text-4xl'} font-serif rotate-180`}>"</div>
        </div>
        
        <div className={`flex items-center space-x-4 ${isMobile ? 'pt-4' : 'pt-6'} border-t border-slate-700/50`}>
          <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center`}>
            <span className={`text-white font-bold ${isMobile ? 'text-base' : 'text-lg'}`}>
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className={`text-orange-400 font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>
              {testimonial.author}
            </p>
            <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>
              {testimonial.business}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );

  const services = [
    {
      id: 1,
      name: "Webové stránky",
      shortDesc: "Web co prodává 24/7",
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
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "/sluzby/tvorba-webovych-stranek",
      color: "from-orange-500 to-orange-600",
      bgPattern:
        "radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
    },
    {
      id: 2,
      name: "Shoptet e-shop",
      shortDesc: "Objednávky i v noci",
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
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      link: "/sluzby/vlastni-eshop",
      color: "from-orange-500 to-orange-600",
      bgPattern:
        "radial-gradient(circle at 50% 80%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)",
    },
    {
      id: 3,
      name: "Grafický design",
      shortDesc: "Logo za 3 dny",
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
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
      link: "/sluzby/graficky-design",
      color: "from-blue-400 to-blue-500",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
    },
    {
      id: 4,
      name: "Video tvorba",
      shortDesc: "Viral obsah pro sítě",
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
            strokeWidth="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "/sluzby/reklamni-videa",
      color: "from-pink-500 to-pink-600",
      bgPattern:
        "radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
    },
    {
      id: 5,
      name: "Interaktivní kvízy",
      shortDesc: "Studenti to milují",
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
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/sluzby/interaktivni-cviceni",
      color: "from-indigo-500 to-indigo-600",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
    },
    {
      id: 6,
      name: "Online kurzy",
      shortDesc: "Učte se kdykoli",
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
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      link: "/sluzby/firemni-online-kurzy",
      color: "from-cyan-500 to-cyan-600",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-16 lg:py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Viditelnější mřížka na pozadí */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg,rgba(249,115,22,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - zkrácený bez "Můj přístup" textu */}
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

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            <span className="text-orange-400 font-semibold">Jeden partner, šest služeb.</span> 
            Vytvářím kompletní digitální řešení, která <span className="text-white font-medium">skutečně prodávají.</span>
          </p>
        </motion.div>

        {/* Služby - Grid 3x2 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onHoverStart={() => !isMobileOrTablet && setHoveredServiceId(service.id)}
              onHoverEnd={() => !isMobileOrTablet && setHoveredServiceId(null)}
              className="group"
              data-card-index={idx}
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

                    {/* Text s animovaným podtržením */}
                    <div className="mb-6">
                      <h3 
                        className={`text-xl font-bold transition-colors relative ${
                          isHovered(service.id) ? "text-white" : "text-white"
                        }`}
                        style={{ 
                          color: service.id === 1 || service.id === 2 ? "#f97316" :
                                 service.id === 3 ? "#3b82f6" :
                                 service.id === 4 ? "#ec4899" :
                                 service.id === 5 ? "#6366f1" :
                                 service.id === 6 ? "#06b6d4" : "#f97316"
                        }}
                      >
                        {service.name}
                        
                        <div 
                          className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-500 ease-out ${
                            isMobileOrTablet 
                              ? (cardsInView[idx] ? 'w-2/3' : 'w-0')
                              : 'w-0 group-hover:w-2/3'
                          }`}
                          style={{ 
                            background: `linear-gradient(to right, ${
                              service.id === 1 || service.id === 2 ? "#f97316" :
                              service.id === 3 ? "#3b82f6" :
                              service.id === 4 ? "#ec4899" :
                              service.id === 5 ? "#6366f1" :
                              service.id === 6 ? "#06b6d4" : "#f97316"
                            }, transparent)`,
                          }}
                        />
                      </h3>
                    </div>
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

        {/* Můj přístup - přesunuto sem pod služby */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Jak přistupuji k projektům
          </h2>
          <p className="text-gray-400 mb-6 text-lg md:text-xl">
            Každý projekt začínám důkladnou analýzou vašeho byznysu a cílové skupiny. 
            Teprve pak navrhuji řešení, které <span className="text-orange-400">kombinuje atraktivní design s psychologií prodeje</span> a moderními technologiemi.
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            <span className="text-orange-400 font-medium">Můj přístup:</span> Neprodávám vám technologie, ale řešení konkrétních problémů. 
            Každá stránka, každé tlačítko a každý text má svůj důvod - přeměnit návštěvníka v zákazníka.
          </p>
        </motion.div>

        {/* Scrollující testimonials s lepšími mezerami */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Co říkají spokojení klienti
            </h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Reálné výsledky od skutečných klientů
            </p>
            {isMobileOrTablet && (
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-orange-500 scale-125' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Desktop scrollování */}
          {!isMobileOrTablet && (
            <div className="relative overflow-hidden py-8">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                className="flex space-x-8 py-4"
                animate={{ 
                  x: [0, -384 * 6 - 32 * 6] 
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{ width: "fit-content" }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          )}

          {/* Mobilní single view s rotací */}
          {isMobileOrTablet && (
            <div className="relative px-4 py-8">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm mx-auto"
              >
                <TestimonialCard testimonial={testimonials[currentTestimonial]} isMobile={true} />
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;