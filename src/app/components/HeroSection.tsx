"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import ParticlesBackground from "./ParticlesBakckground";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0f172a] text-white py-12 sm:py-20 lg:py-28 flex flex-col items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-20 min-h-screen">
       <ParticlesBackground />
     
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
        
        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute rounded-full bg-orange-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={`h-line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
            style={{ top: `${25 + i * 25}%` }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scaleX: 1
            }}
            transition={{
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scaleX: {
                duration: 1.5,
                ease: "easeOut"
              }
            }}
          />
        ))}
        
        
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
          initial={{ top: "-10%" }}
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear",
            repeatDelay: 1
          }}
        />
      </div>

      
      <div className="relative flex flex-col items-center w-full max-w-7xl mt-12 z-10">
       
        <motion.div 
          className="flex items-center justify-center space-x-2 text-xs font-mono text-orange-500/70 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span>//</span>
          <motion.div 
            className="h-px w-12 bg-orange-500/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CREATIVE DEVELOPER
          </motion.span>
          <motion.div 
            className="h-px w-12 bg-orange-500/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <span>//</span>
        </motion.div>
        
        
        <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left flex-1"
          >
            
            <p className="text-base sm:text-lg text-gray-300 mb-2 mt-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Web Developer
              </motion.span>{" • "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Grafika
              </motion.span>{" • "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Lektor
              </motion.span>{" • "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Videa
              </motion.span>
            </p>
            
          
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Vytvořím vám{' '}
                <div className="inline-block relative">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                    webové stránky
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                    className="absolute left-0 bottom-[-5px] h-1 w-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
                  />
                </div>
              </h1>
              
              
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500/30 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500/30 hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </div>
            
            
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-md sm:max-w-lg mx-auto lg:mx-0 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Věnuji se tvorbě moderních a funkčních webů, grafice, stříhání videí, focení a vzdělávání dalších tvůrců.
            </motion.p>
            
          
            <motion.div 
              className="flex gap-4 mt-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              
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
                  Chci svůj web!
                  <motion.svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </span>
              </motion.a>
              
              
              <motion.a 
                href="/kontakt" 
                className="relative group px-6 py-3 bg-transparent text-white font-medium rounded-full overflow-hidden border border-orange-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-500/10"></div>
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000"></span>
                </span>
                <span className="relative z-10">Kontakt</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
            
            <motion.div
              className="absolute w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] bg-orange-500 rounded-full blur-3xl hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ opacity: { duration: 0.8 }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, repeat: Infinity }}
            />
            
            
            <motion.div
              className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full hidden lg:block"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ opacity: { duration: 0.8 }, rotate: { duration: 12, repeat: Infinity, ease: 'linear' } }}
            >
              <div className="absolute inset-0 border-[6px] border-transparent border-t-orange-500 border-dotted rounded-full" />
            </motion.div>
            
           
            <motion.img
              src="/imgs/banner5.svg"
              alt="Tvoje fotka"
              className="relative z-20 w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-550px]  hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            
           
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[50px] hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 300 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10,25 Q75,-10 150,25 Q225,60 290,25" 
                  stroke="url(#grad)" 
                  strokeWidth="2" 
                  strokeDasharray="1 8" 
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#F97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={`orbit-dot-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-orange-500/70 hidden lg:block"
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-6 text-center mt-12 lg:mt-36 xl:grid-cols-4 w-full max-w-5xl"
        >
          {[
            { value: 12, label: "let praxe" },
            { value: 150, label: "Hotových projektů" },
            { value: 40, label: "Použité technologie" },
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
                <motion.h3 
                  className="text-3xl sm:text-4xl font-bold text-orange-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <CountUp start={0} end={stat.value} duration={2} />
                  <span className="ml-1">+</span>
                </motion.h3>
                
                <motion.div 
                  className="w-10 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                />
                
                <motion.p 
                  className="text-xs sm:text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  {stat.label}
                </motion.p>
              </div>
              
              
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -z-10"
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-orange-500/10 to-orange-600/5 rounded-lg" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection