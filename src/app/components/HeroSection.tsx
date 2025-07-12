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
      {/* ParticlesBackground - hidden na mobile pomocí CSS */}
      <div className="hidden lg:block">
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
        
        {/* Animated dots - hidden na mobile pomocí CSS */}
        <div className="absolute inset-0 overflow-hidden hidden lg:block">
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
        
        {/* Horizontální čáry odstraněny - byly rušivé */}
      </div>

      <div className="relative flex flex-col items-center w-full max-w-7xl mt-12 z-10">
        {/* Odstraněny loading animace - zobrazí se okamžitě */}
        <div className="flex items-center justify-center space-x-2 text-xs font-mono text-orange-500/70 mb-4">
          <span></span>
          <div className="h-px w-12 bg-orange-500/40" />
          <span>GRAFICKÉ STUDIO</span>
          <div className="h-px w-12 bg-orange-500/40" />
          <span></span>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-wrap">
          {/* Odstraněny loading animace */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left flex-1">
            <p className="text-base sm:text-lg text-gray-300 mb-2 mt-4">
              <span>Web Developer</span>{" • "}
              <span>Grafika</span>{" • "}
              <span>Lektor</span>{" • "}
              <span>Videa</span>
            </p>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                {/* Zachován kontinuální glow efekt */}
                <motion.span
                  className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl"
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
                  {/* Invisible placeholder to reserve space for the longest text */}
                  <span className="invisible text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap" style={{ lineHeight: '1.4', display: 'block' }}>
                    interaktivní kvízy
                  </span>
                  
                  {/* Zachován fade efekt pro střídání textů */}
                  <motion.span 
                    className="absolute left-1/2 lg:left-0 top-0 transform -translate-x-1/2 lg:translate-x-0 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
                    style={{ lineHeight: '1.4', display: 'block', overflow: 'visible' }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentText}
                  </motion.span>
                </div>
              </h1>
              
              {/* Obrázek logo4.svg pouze na mobilních zařízeních - pomocí CSS */}
              <div className="flex justify-center mt-8 lg:hidden">
                <img
                  src="/imgs/logo4.svg"
                  alt="Logo"
                  className="w-64 h-64 sm:w-72 sm:h-72"
                  width={256}
                  height={256}
                />
              </div>
              
              {/* Corner decorations pouze na desktop - odstraněny loading animace */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 hidden lg:block" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 hidden lg:block" />
            </div>
            
            {/* Odstraněny loading animace */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto lg:mx-0 mt-6">
              Věnuji se tvorbě moderních a funkčních webů, grafice, stříhání videí, focení a vzdělávání dalších tvůrců.
            </p>
            
            {/* Odstraněny loading animace, zachovány hover efekty */}
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <motion.a 
                href="/sluzby" 
                className="relative group px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover efekt pouze na desktop */}
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
                </span>
                <span className="relative z-10 flex items-center">
                  Více informací
                  {/* Zachována kontinuální animace šipky */}
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

          {/* Element, kde se zobrazuje obrázek/kruh - pouze desktop pomocí CSS */}
          <div className="relative justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0 hidden lg:flex">
            {/* Zachováno kontinuální breathing - odstraněn loading delay */}
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
            
            {/* Zachováno kontinuální rotování - odstraněn loading delay */}
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
            
            {/* Odstraněna loading animace - zobrazí se okamžitě */}
            <img
              src="/imgs/banner5.svg"
              alt="Tvoje fotka"
              className="relative z-20 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]"
              fetchPriority="high"
              loading="eager"
              width={450}
              height={450}
            />
            
            {/* Zachovány kontinuální animace orbitálních teček - odstraněn loading delay */}
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

        {/* Odstraněny loading animace */}
        <div className="grid grid-cols-2 gap-6 text-center mt-12 lg:mt-12 xl:grid-cols-4 w-full max-w-5xl">
          {[
            { value: 10, label: "let praxe" },
            { value: 150, label: "Hotových projektů" },
            { value: 10, label: "Použité technologie" },
            { value: 5000, label: "Dodaných návrhů" }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              {/* Zachován hover efekt */}
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
                {/* Odstraněny loading animace */}
                <h3 className="text-3xl sm:text-4xl font-bold text-orange-500">
                  <CountUp start={0} end={stat.value} duration={2} />
                  <span className="ml-1">+</span>
                </h3>
                
                {/* Odstraněny loading animace */}
                <div className="w-10 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-2" />
                
                {/* Odstraněny loading animace */}
                <p className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </p>
              </div>
              
              {/* Zachován hover efekt na desktop */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10 hidden lg:block"
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