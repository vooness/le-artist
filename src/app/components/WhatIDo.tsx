"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ParticlesBackground from "./ParticlesBakckground";

// Pomocná funkce pro kontrolu, zda jsme na klientovi
const isClient = () => {
  return typeof window !== 'undefined';
};

const IntroSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [hoveredServiceId, setHoveredServiceId] = useState<number | null>(null);

  
  // State pro sledování velikosti obrazovky
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
  // Detekce mobilního zařízení nebo tabletu
  useEffect(() => {
    if (!isClient()) return; // Předčasné ukončení, pokud nejsme na klientovi
    
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // Méně než 1024px považujeme za mobilní nebo tablet
    };
    
    // Kontrola při načtení
    checkScreenSize();
    
    // Přidání event listeneru pro změnu velikosti
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Animace při scrollování - pouze na desktopu
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Paralaxové efekty - pouze pro desktop
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  
  // Efekty pro pozadí - zjednodušené
  const renderBackgroundEffects = () => (
    <>
      {[...Array(3)].map((_, i) => (
        <div 
          key={`h-line-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
          style={{ top: `${25 + (i * 25)}%`, opacity: 0.1 + (i * 0.05) }}
        />
      ))}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
    </>
  );

  // Definice služeb s ikonami a odkazy
  const services = [
    {
      id: 1,
      name: "Grafický Design",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
      ),
      link: "/sluzby/graficky-design"
    },
    {
      id: 2,
      name: "Tvorba videí",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
      link: "/sluzby/tvorba-videi"
    },
    {
      id: 3,
      name: "Webové stránky",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
        </svg>
      ),
      link: "/sluzby/webove-stranky"
    },
    {
      id: 4,
      name: "Shoptet eshop",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      link: "/sluzby/shoptet-eshop"
    },
    {
      id: 5,
      name: "Online kurzy",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      link: "/sluzby/online-kurzy"
    },
    {
      id: 6,
      name: "Interaktivní kvízy",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      link: "/sluzby/interaktivni-cviceni"
    }
  ];

  // Animační varianty pro komponenty - optimalizované pro mobilní zařízení
  const imageContainerVariants = {
    hidden: { opacity: 0, x: isMobileOrTablet ? 0 : -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: isMobileOrTablet ? 0.4 : 0.7, 
        ease: "easeOut" 
      } 
    },
  };

  // Základní a zjednodušená animace pro mobilní zařízení
  const simplePulseAnimation = {
    visible: {
      opacity: [0.8, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const shadowPulseAnimation = {
    visible: {
      boxShadow: !isMobileOrTablet 
        ? ["0 0 10px rgba(249, 115, 22, 0.3)", "0 0 20px rgba(249, 115, 22, 0.5)", "0 0 10px rgba(249, 115, 22, 0.3)"]
        : "0 0 10px rgba(249, 115, 22, 0.3)",
      transition: !isMobileOrTablet 
        ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
        : { duration: 0 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {!isMobileOrTablet && <ParticlesBackground />}
      
      {/* Dynamické pozadí */}
      <div className="absolute inset-0 overflow-hidden">
        {renderBackgroundEffects()}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Levá strana - VYLEPŠENÝ FUTURISTICKÝ DESIGN - optimalizován */}
          <motion.div 
            ref={imageRef}
            className="w-full lg:w-5/12" 
            style={!isMobileOrTablet ? { y: imageY } : {}}
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* FUTURISTICKÝ RÁMEČEK PRO OBRÁZEK */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Polygonální rámeček */}
              <div className="absolute w-full h-full"
                style={{ 
                  clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)", 
                  width: "110%", 
                  height: "110%", 
                  top: "-5%", 
                  left: "-5%" 
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-blue-500/20 rounded-lg"></div>
              </div>
              
              {/* Pulzující vnitřní rámeček - pouze pro desktop */}
              {!isMobileOrTablet && (
                <motion.div 
                  className="absolute inset-0 border-2 border-orange-500/30 rounded-lg"
                  style={{ 
                    clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)", 
                    width: "105%", 
                    height: "105%", 
                    top: "-2.5%", 
                    left: "-2.5%" 
                  }}
                  variants={shadowPulseAnimation}
                  animate="visible"
                />
              )}
              
              {/* Rotující kruhy - pouze pro desktop */}
              {!isMobileOrTablet && (
                <motion.div
                  className="absolute rounded-full border border-orange-500/20"
                  style={{
                    width: "115%",
                    height: "115%",
                    top: "-7.5%",
                    left: "-7.5%",
                    borderWidth: 1,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              )}
              
              {/* Technologické detaily - pouze pro desktop */}
              {!isMobileOrTablet && (
                <div className="absolute inset-0">
                  {/* Horní levý roh */}
                  <motion.div 
                    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/60"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Dolní pravý roh */}
                  <motion.div 
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/60"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  
                  {/* Orbiting particles - pouze pro desktop */}
                  {[...Array(4)].map((_, i) => {
                    const angle = (i / 4) * Math.PI * 2;
                    const radius = 45;
                    const centerX = 50;
                    const centerY = 50;
                    
                    return (
                      <motion.div
                        key={`orbit-particle-${i}`}
                        className="absolute rounded-full bg-orange-500"
                        style={{
                          width: 3 + (i % 2),
                          height: 3 + (i % 2),
                          left: `${centerX + Math.cos(angle) * radius}%`,
                          top: `${centerY + Math.sin(angle) * radius}%`,
                          opacity: 0.7
                        }}
                        animate={{
                          left: `${centerX + Math.cos(angle + Math.PI * 2) * radius}%`,
                          top: `${centerY + Math.sin(angle + Math.PI * 2) * radius}%`,
                        }}
                        transition={{
                          duration: 8 + i,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    );
                  })}
                </div>
              )}
              
              {/* Obrázek s prosvětlením - zjednodušeno pro mobil */}
              <div className="relative p-6 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 rounded-lg"
                  animate={{ opacity: isMobileOrTablet ? [0.4, 0.6, 0.4] : [0.3, 0.7, 0.3] }}
                  transition={{ 
                    duration: isMobileOrTablet ? 2 : 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                
                <img 
                  src="/imgs/logo5.svg" 
                  alt="Tři veselí psi" 
                  className="relative z-10 max-w-full h-auto transform scale-110" 
                />
              </div>
              
              {/* Futuristický štítek dole */}
              <div
                className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 py-1 px-4 bg-[#0f172a] border border-orange-500/30 rounded-full z-20"
              >
                <div className="text-xs font-mono text-orange-400 flex items-center">
                  <span className="mr-1">v</span>
                  <motion.span
                    animate={{ opacity: isMobileOrTablet ? 1 : [1, 0.7, 1] }}
                    transition={{ 
                      duration: isMobileOrTablet ? 0 : 1.5, 
                      repeat: isMobileOrTablet ? 0 : Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    3.0
                  </motion.span>
                </div>
              </div>
              
              {/* Skenující efekt - pouze pro desktop */}
              {!isMobileOrTablet && (
                <div className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)", 
                    width: "100%", 
                    height: "100%"
                  }}>
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent"
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                  />
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Pravá strana - optimalizovaná pro mobilní zařízení */}
          <motion.div 
            className="w-full lg:w-7/12"
            style={!isMobileOrTablet ? { y: textY } : {}}
            initial={{ opacity: 0, x: isMobileOrTablet ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: isMobileOrTablet ? 0.4 : 0.7, 
              ease: "easeOut", 
              delay: isMobileOrTablet ? 0 : 0.1 
            }}
          >
            {/* Nadpis s animovanými tečkami - zjednodušeno pro mobil */}
            <div className="mb-8 flex items-center">
              <div className="flex space-x-1.5 mr-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`header-dot-${i}`}
                    className="w-2 h-2 rounded-full bg-orange-500"
                    animate={{ 
                      opacity: isMobileOrTablet ? (0.6 + (i * 0.1)) : [0.6, 1, 0.6],
                      scale: isMobileOrTablet ? 1 : [1, 1.2, 1]
                    }}
                    transition={!isMobileOrTablet ? { 
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    } : {}}
                  />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white relative">
                Krátký úvod
                <motion.div 
                  className="absolute left-0 bottom-[-8px] h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ 
                    duration: isMobileOrTablet ? 0.5 : 0.8, 
                    ease: "easeOut", 
                    delay: isMobileOrTablet ? 0.2 : 0.4 
                  }}
                />
              </h2>
            </div>
            
            {/* BOX S PŘESVĚDČIVÝM TEXTEM */}
            <motion.div
              initial={{ opacity: 0, y: isMobileOrTablet ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobileOrTablet ? 0.4 : 0.6, 
                delay: isMobileOrTablet ? 0.1 : 0.3 
              }}
              className="relative"
            >
              <div className="p-6 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-orange-500/20 shadow-lg relative overflow-hidden">
                {/* Horní akcent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />
                
                {/* Obsah */}
                <div className="space-y-6 relative z-10">
                  <p className="text-lg text-slate-100">
                    <span className="font-semibold text-orange-400">Přetvářím vaše vize v digitální realitu</span> pomocí 
                    moderního designu a funkčních webů, které přitahují pozornost a zvyšují konverze. Váš projekt 
                    dostane nadstandardní péči, kterou si zaslouží.
                  </p>
                  
                  <div className="w-16 h-px bg-orange-500/30 mx-auto" />
                  
                  <p className="text-lg text-slate-100">
                    Každý projekt začíná <span className="font-semibold text-orange-400">bezplatnou konzultací</span> a transparentní cenovou nabídkou. 
                    Mé řešení vždy respektuje váš rozpočet i časové možnosti. <span className="font-semibold text-white">Získáte web, který pracuje pro vás 24/7.</span>
                  </p>
                </div>
                
                {/* Vizuální akcenty */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent" />
              </div>
              
              {/* Rohové prvky */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
            </motion.div>
            
            {/* SEKCE PRO IKONKY SLUŽEB - OPTIMALIZOVANÁ */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: isMobileOrTablet ? 0.5 : 0.8, 
                delay: isMobileOrTablet ? 0.2 : 0.7 
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <Link href={service.link} key={service.id}>
                    <motion.div
                      className="p-4 bg-slate-800/40 border border-orange-500/20 rounded-lg transition-all duration-300 group relative overflow-hidden cursor-pointer"
                      initial={{ opacity: 0, y: isMobileOrTablet ? 10 : 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: isMobileOrTablet ? 0.3 : 0.4, 
                        delay: isMobileOrTablet ? (0.2 + index * 0.05) : (0.7 + index * 0.1) 
                      }}
                      onHoverStart={() => !isMobileOrTablet && setHoveredServiceId(service.id)}
                      onHoverEnd={() => !isMobileOrTablet && setHoveredServiceId(null)}
                      whileHover={!isMobileOrTablet ? { 
                        backgroundColor: "rgba(30, 41, 59, 0.6)", 
                        borderColor: "rgba(249, 115, 22, 0.3)",
                        scale: 1.02,
                      } : {}}
                    >
                      {/* Futuristické efekty při hoveru - pouze na desktopu */}
                      {!isMobileOrTablet && hoveredServiceId === service.id && (
                        <>
                          {/* Skenující linie */}
                          <motion.div 
                            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/80 to-transparent"
                            initial={{ top: "-10%" }}
                            animate={{ top: "110%" }}
                            transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                          />
                          
                          {/* Rohové akcenty */}
                          <motion.div 
                            className="absolute top-0 left-0 w-6 h-[1px] bg-orange-500"
                            initial={{ width: 0 }}
                            animate={{ width: 24 }}
                            transition={{ duration: 0.2 }}
                          />
                          <motion.div 
                            className="absolute top-0 left-0 w-[1px] h-6 bg-orange-500"
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            transition={{ duration: 0.2 }}
                          />
                          
                          <motion.div 
                            className="absolute bottom-0 right-0 w-6 h-[1px] bg-orange-500"
                            initial={{ width: 0 }}
                            animate={{ width: 24 }}
                            transition={{ duration: 0.2 }}
                          />
                          <motion.div 
                            className="absolute bottom-0 right-0 w-[1px] h-6 bg-orange-500"
                            initial={{ height: 0 }}
                            animate={{ height: 24 }}
                            transition={{ duration: 0.2 }}
                          />

                          {/* Glowing background */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </>
                      )}
                      
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="p-3 bg-orange-500/10 rounded-full mb-3 text-orange-400 transition-colors duration-300 group-hover:text-orange-300 lg:group-hover:bg-orange-500/20">
                          {service.icon}
                        </div>
                        <h3 className="text-sm font-medium text-white">{service.name}</h3>
                        
                        {/* Animovaný indikátor - pouze na desktopu */}
                        {!isMobileOrTablet && (
                          <motion.div 
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-orange-600 to-orange-400"
                            initial={{ width: "0%" }}
                            animate={{ width: hoveredServiceId === service.id ? "80%" : "0%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        {/* Text zobrazení služby - pouze na desktopu */}
                        {!isMobileOrTablet && (
                          <div className="h-5 mt-2 relative">
                            <motion.div
                              className="absolute left-0 right-0 text-xs text-orange-400/80 flex items-center justify-center"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ 
                                opacity: hoveredServiceId === service.id ? 1 : 0,
                                y: hoveredServiceId === service.id ? 0 : 5
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <span className="mr-1">Zobrazit</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
            
            {/* Tlačítko portfolia - zjednodušeno pro mobil */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: isMobileOrTablet ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: isMobileOrTablet ? 0.3 : 0.5, 
                delay: isMobileOrTablet ? 0.3 : 0.9
              }}
            >
              <a 
                href="/portfolio" 
                className="group relative inline-flex items-center px-8 py-4 bg-orange-600 text-white font-bold rounded-full overflow-hidden"
              >
                {/* Pozadí tlačítka */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-300 
                              group-hover:from-orange-500 group-hover:to-orange-600" />
                
                {/* Efekt světla při hoveru - pouze pro desktop */}
                {!isMobileOrTablet && (
                  <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                  </span>
                )}
                
                {/* Text tlačítka */}
                <span className="relative flex items-center z-10">
                  <span>Prohlédnout portfolio</span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;