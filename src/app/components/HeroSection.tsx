"use client"

import React, { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import ParticlesBackground from "./ParticlesBakckground";

// Deterministický generátor pozic pro tečky
const generateDotPositions = (count: number) => {
  const positions = [];
  
  for (let i = 0; i < count; i++) {
    const seedTop = Math.sin(i * 747) * 10000;
    const seedLeft = Math.cos(i * 373) * 10000;
    const seedWidth = Math.sin(i * 191) * 10000;
    const seedHeight = Math.cos(i * 239) * 10000;
    
    positions.push({
      top: `${Math.abs(seedTop - Math.floor(seedTop)) * 100}%`,
      left: `${Math.abs(seedLeft - Math.floor(seedLeft)) * 100}%`,
      width: `${Math.abs(seedWidth - Math.floor(seedWidth)) * 4 + 1}px`,
      height: `${Math.abs(seedHeight - Math.floor(seedHeight)) * 4 + 1}px`,
      duration: 4 + (i % 5),
      delay: i % 5
    });
  }
  
  return positions;
};

// Fade in/out effect hook
const useFadeEffect = (texts: string[], duration = 2000, fadeSpeed = 500) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setIsVisible(true);
      }, fadeSpeed);
    }, duration + fadeSpeed);

    return () => clearInterval(interval);
  }, [texts, duration, fadeSpeed]);

  return { currentText: texts[currentTextIndex], isVisible };
};

export const HeroSection: React.FC = () => {
  // Texty pro fade efekt
  const fadeTexts = [
    "grafické studio",
    "webové stránky",
    "grafický design",
    "shoptet eshop",
    "interaktivní kvízy",
    "video marketing",
    "online kurzy"
  ];
  
  // Hook pro fade efekt
  const { currentText, isVisible } = useFadeEffect(fadeTexts, 2000, 500);
  
  // Vygenerujeme pozice teček pouze jednou při sestavení komponenty
  const dotPositions = useMemo(() => generateDotPositions(30), []);

  return (
    <section className="relative bg-[#0f172a] text-white py-12 sm:py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-20 min-h-screen">
      {/* ParticlesBackground - pouze na velkých desktopech */}
      <div className="hidden 2xl:block">
        <ParticlesBackground />
      </div>
     
      <div className="absolute inset-0 z-0">
        <div
          className="pointer-events-none absolute inset-0 flex justify-center"
          style={{
            backgroundSize: "120px 120px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 45%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 45%)",
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        />
        
        {/* Animated dots - pouze na velkých desktopech */}
        <div className="absolute inset-0 overflow-hidden hidden 2xl:block">
          {dotPositions.map((position, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute rounded-full bg-orange-500/20"
              style={{
                top: position.top,
                left: position.left,
                width: position.width,
                height: position.height,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: position.duration,
                repeat: Infinity,
                delay: position.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Horizontal lines - pouze na velkých desktopech */}
        <div className="hidden 2xl:block">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={`h-line-${i}`}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
              style={{ top: `${25 + i * 25}%` }}
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center w-full max-w-7xl mt-12 z-10">
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-orange-500/70 mb-4">
          <span></span>
          <div className="h-px w-12 bg-orange-500/40" />
          <span>GRAFICKÉ STUDIO</span>
          <div className="h-px w-12 bg-orange-500/40" />
          <span></span>
        </div>
        
        {/* MOBILE LAYOUT (do lg) */}
        <div className="flex flex-col lg:hidden items-center justify-center w-full">
          <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-4xl">
            <p className="text-base sm:text-lg text-gray-300 mb-2 mt-4">
              <span>Web Developer</span>{" • "}
              <span>Grafika</span>{" • "}
              <span>Lektor</span>{" • "}
              <span>Videa</span>
            </p>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-center">
                <motion.span
                  className="text-4xl sm:text-5xl"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(249, 115, 22, 0)",
                      "0 0 10px rgba(249, 115, 22, 0.3)",
                      "0 0 20px rgba(249, 115, 22, 0.2)",
                      "0 0 30px rgba(249, 115, 22, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Kreativní
                </motion.span>{' '}
                <div className="inline-block relative" style={{ minHeight: '1.4em', overflow: 'visible' }}>
                  <span className="invisible text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap" style={{ lineHeight: '1.4', display: 'block' }}>
                    interaktivní kvízy
                  </span>
                  
                  <motion.span 
                    className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap text-4xl sm:text-5xl font-bold"
                    style={{ lineHeight: '1.4', display: 'block', overflow: 'visible' }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentText}
                  </motion.span>
                </div>
              </h1>
              
              <div className="flex justify-center mt-8">
                <img
                  src="/imgs/logo4.svg"
                  alt="Logo"
                  className="w-64 h-64 sm:w-72 sm:h-72"
                  width={256}
                  height={256}
                />
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-gray-400 max-w-md sm:max-w-lg mx-auto mt-6">
              Specializuji se na digitální řešení, která skutečně fungují. Nejen že vytvořím krásný web nebo e-shop, ale především zajistím, aby vám přinášel zákazníky a zisk.
            </p>
            
            <div className="flex gap-4 mt-6 justify-center">
              <motion.a 
                href="/sluzby" 
                className="relative group px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  Více informací
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* STŘEDNÍ ZAŘÍZENÍ LAYOUT (lg až 2xl) - Nest Hub, iPad Pro, Nest Hub Max */}
        <div className="hidden lg:flex 2xl:hidden flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-4 sm:gap-6 text-center max-w-5xl">
            <p className="text-base sm:text-lg text-gray-300 mb-2 mt-4">
              <span>Web Developer</span>{" • "}
              <span>Grafika</span>{" • "}
              <span>Lektor</span>{" • "}
              <span>Videa</span>
            </p>
            
            <div className="relative">
              {/* Kreativní nahoře */}
              <motion.h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(249, 115, 22, 0)",
                    "0 0 10px rgba(249, 115, 22, 0.3)",
                    "0 0 20px rgba(249, 115, 22, 0.2)",
                    "0 0 30px rgba(249, 115, 22, 0.4)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Kreativní
              </motion.h1>
              
              {/* Měnící text pod ním */}
              <div className="relative mb-8" style={{ minHeight: '1.4em', overflow: 'visible' }}>
                <span className="invisible text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap" style={{ lineHeight: '1.4', display: 'block' }}>
                  interaktivní kvízy
                </span>
                
                <motion.span 
                  className="absolute left-1/2 top-0 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap text-5xl lg:text-6xl xl:text-7xl font-bold"
                  style={{ lineHeight: '1.4', display: 'block', overflow: 'visible' }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentText}
                </motion.span>
              </div>
              
              {/* Logo pod textem */}
              <div className="flex justify-center mt-8">
                <img
                  src="/imgs/logo4.svg"
                  alt="Logo"
                  className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            
            <p className="text-base lg:text-lg xl:text-xl text-gray-400 max-w-2xl xl:max-w-4xl mx-auto mt-6">
              Specializuji se na digitální řešení, která skutečně fungují. Nejen že vytvořím krásný web nebo e-shop, ale především zajistím, aby vám přinášel zákazníky a zisk.
            </p>
            
            <div className="flex gap-4 mt-6 justify-center">
              <motion.a 
                href="/sluzby" 
                className="relative group px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                </span>
                <span className="relative z-10 flex items-center">
                  Více informací
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (2xl a výše) */}
        <div className="hidden 2xl:flex flex-row items-center justify-center w-full flex-wrap">
          <div className="flex flex-col gap-4 sm:gap-6 text-center 2xl:text-left flex-1">
            <p className="text-base sm:text-lg text-gray-300 mb-2 mt-4">
              <span>Web Developer</span>{" • "}
              <span>Grafika</span>{" • "}
              <span>Lektor</span>{" • "}
              <span>Videa</span>
            </p>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight text-center 2xl:text-left">
                <motion.span
                  className="text-5xl sm:text-5xl lg:text-6xl 2xl:text-7xl"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(249, 115, 22, 0)",
                      "0 0 10px rgba(249, 115, 22, 0.3)",
                      "0 0 20px rgba(249, 115, 22, 0.2)",
                      "0 0 30px rgba(249, 115, 22, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Kreativní
                </motion.span>{' '}
                <div className="inline-block relative" style={{ minHeight: '1.4em', overflow: 'visible' }}>
                  <span className="invisible text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap" style={{ lineHeight: '1.4', display: 'block' }}>
                    interaktivní kvízy
                  </span>
                  
                  <motion.span 
                    className="absolute left-1/2 2xl:left-0 top-0 transform -translate-x-1/2 2xl:translate-x-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold"
                    style={{ lineHeight: '1.4', display: 'block', overflow: 'visible' }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentText}
                  </motion.span>
                </div>
              </h1>
              
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 hidden 2xl:block" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 hidden 2xl:block" />
            </div>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto 2xl:mx-0 mt-6">
              Specializuji se na digitální řešení, která skutečně fungují. Nejen že vytvořím krásný web nebo e-shop, ale především zajistím, aby vám přinášel zákazníky a zisk.
            </p>
            
            <div className="flex gap-4 mt-6 justify-center 2xl:justify-start">
              <motion.a 
                href="/sluzby" 
                className="relative group px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden 2xl:block">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                </span>
                <span className="relative z-10 flex items-center">
                  Více informací
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </div>
          </div>

          {/* Desktop banner element */}
          <div className="relative justify-center items-center w-full 2xl:w-1/2 mt-10 2xl:mt-0 hidden 2xl:flex">
            <motion.div
              className="absolute w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] bg-orange-500 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0
              }}
            />
            
            <motion.div
              className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 0
              }}
            >
              <div className="absolute inset-0 border-[6px] border-transparent border-t-orange-500 border-dotted rounded-full" />
            </motion.div>
            
            <img
              src="/imgs/banner5.svg"
              alt="Tvoje fotka"
              className="relative z-20 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
              fetchPriority="high"
              loading="eager"
              width={450}
              height={450}
            />
            
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={`orbit-dot-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-orange-500/70"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Statistiky */}
        <div className="grid grid-cols-2 gap-6 text-center mt-12 2xl:mt-12 2xl:grid-cols-4 w-full max-w-5xl">
          {[
            { value: 10, label: "let praxe" },
            { value: 150, label: "Hotových projektů" },
            { value: 10, label: "Použité technologie" },
            { value: 5000, label: "Dodaných návrhů" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-white/5 -z-10"
                whileHover={{ 
                  boxShadow: "0 0 15px 2px rgba(249, 115, 22, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="absolute top-0 right-0 w-3 h-3 border-t-[1px] border-r-[1px] border-white/20 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1px] border-l-[1px] border-white/20 rounded-bl-lg"></div>
              
              <div className="p-4 flex flex-col items-center z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
                  <CountUp start={0} end={stat.value} duration={2} />
                  <span className="ml-1">+</span>
                </h3>
                
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-2" />
                
                <p className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
              
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10 hidden 2xl:block"
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-orange-500/10 to-orange-600/5 rounded-lg" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection