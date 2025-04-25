"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaPencilAlt,
  FaVideo,
} from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss } from "react-icons/si";

// Typ pro dovednosti
type Skill = {
  name: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

// Data o dovednostech
const skills: Skill[] = [
  { name: "Shoptet", value: 90, icon: <FaHtml5 />, color: "#F97316" },
  { name: "React.js", value: 85, icon: <FaReact />, color: "#38BDF8" },
  { name: "JavaScript", value: 80, icon: <FaJsSquare />, color: "#EAB308" },
  { name: "Next.js", value: 75, icon: <SiNextdotjs />, color: "#D946EF" },
  { name: "Grafický Design", value: 95, icon: <FaPencilAlt />, color: "#F97316" },
  { name: "Tvorba videí", value: 90, icon: <FaVideo />, color: "#EC4899" },
  { name: ".NET Core", value: 80, icon: <SiDotnet />, color: "#6366F1" },
  { name: "Tailwind CSS", value: 85, icon: <SiTailwindcss />, color: "#0EA5E9" },
];

// Futuristická komponenta SkillCard
const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="relative overflow-hidden border border-white/10 rounded-xl bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm shadow-xl"
      style={{ 
        boxShadow: isInView ? `0 10px 30px -15px ${skill.color}40` : undefined
      }}
    >
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
       
        {[...Array(5)].map((_, i) => (
          <div 
            key={`bit-${index}-${i}`} 
            className="absolute text-[10px] font-mono opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: skill.color,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          >
            {Math.round(Math.random())}
          </div>
        ))}
      </div>

      <div className="p-5 relative z-10">
        
        <div className="flex justify-between items-start mb-6">
          
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-full blur-xl"
              style={{ backgroundColor: skill.color }}
            />
            <div className="relative z-10 text-4xl p-3" style={{ color: skill.color }}>{skill.icon}</div>
          </div>

          
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg opacity-30" style={{ background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)` }} />
            <div className="relative bg-slate-800/80 px-3 py-1 rounded border border-white/10 backdrop-blur-sm">
              <div className="flex items-center">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "auto" } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  <span className="font-mono text-sm" style={{ color: skill.color }}>{skill.value}%</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        
        <h4 className="text-lg font-medium mb-3 text-white">{skill.name}</h4>

        
        <div className="relative">
         
          <div className="absolute inset-0 flex items-center">
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={`tick-${index}-${i}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.3 } : {}}
                transition={{ delay: 0.2 + (i * 0.05) }}
                className="h-full w-px mx-auto bg-white/20"
              />
            ))}
          </div>

          
          <div className="h-3 w-full bg-slate-900/80 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
           
            {isInView && (
              <motion.div
                className="absolute h-full w-2 rounded-full"
                style={{ background: `${skill.color}` }}
                animate={{
                  left: [`0%`, `${skill.value}%`, `0%`],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5 + index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
              />
            )}

            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.value}%` } : {}}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                delay: 0.2 + (0.1 * index) 
              }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ 
                background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` 
              }}
            >
              
              <motion.div
                className="absolute top-0 h-full w-20 bg-white/20"
                animate={{ left: ["-20%", "120%"] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 1 + index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </motion.div>
          </div>
        </div>

        
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l" style={{ borderColor: `${skill.color}50` }} />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r" style={{ borderColor: `${skill.color}50` }} />
      </div>
    </motion.div>
  );
};

// Animovaný Dot Pattern 
const AnimatedDotPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
     
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => {
          const row = Math.floor(i / 10);
          const col = i % 10;
          
          return (
            <motion.div
              key={`dot-${i}`}
              className="absolute h-1 w-1 rounded-full bg-orange-500/20"
              style={{
                top: `${row * 12}%`,
                left: `${col * 10}%`,
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
          );
        })}
      </div>
      
      
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          style={{ top: `${25 + i * 25}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
     
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          style={{ left: `${25 + i * 25}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2 + 1,
            ease: "easeInOut"
          }}
        />
      ))}
      
      
      <motion.div
        className="absolute left-0 right-0 h-[10px] bg-gradient-to-b from-transparent via-orange-500/5 to-transparent"
        initial={{ top: "-5%" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear",
          repeatDelay: 1
        }}
      />
    </div>
  );
};

// Vylepšená komponenta AboutMeSection
const AboutMeSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const bioRef = useRef<HTMLDivElement>(null);
  const isBioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const skillsHeadingRef = useRef<HTMLDivElement>(null);
  const isSkillsHeadingInView = useInView(skillsHeadingRef, { once: true });

  return (
    <section 
      id="about-me"
      className="relative py-24 px-6 bg-[#0f172a] text-white overflow-hidden"
    >
      
      <AnimatedDotPattern />
      
      
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
      
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      
      <motion.div
        className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(15, 23, 42, 0) 70%)',
        }}
        animate={{
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[250px] h-[250px] rounded-full opacity-[0.02] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(15, 23, 42, 0) 70%)',
        }}
        animate={{
          opacity: [0.02, 0.05, 0.02],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
       
        <div className="flex items-center justify-center mb-12">
          <div className="flex space-x-1.5 mr-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`header-dot-${i}`}
                className="w-2 h-2 rounded-full bg-orange-500"
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white relative inline-block">
              O mně
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isHeadingInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3,
                }}
                className="absolute left-0 bottom-[-5px] h-[5px] bg-gradient-to-r from-orange-500 to-orange-400 w-full rounded-full origin-left"
              />
            </h2>
          </motion.div>
        </div>

        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isBioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative">
              
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-slate-800/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute -inset-4 border-2 border-dashed border-orange-500/20 rounded-2xl transform -rotate-2"></div>
              
             
              <div className="relative z-10 bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                <Image
                  src="/imgs/logo4.svg"
                  alt="Můj profil"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 40vw"
                  className="w-full max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
              
             
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-orange-500/10 rounded-full blur-md"></div>
              <div className="absolute -bottom-4 right-10 w-16 h-16 bg-orange-500/10 rounded-full blur-md"></div>
            </div>
          </motion.div>
          
          
          <motion.div
            ref={bioRef}
            initial={{ opacity: 0, x: 40 }}
            animate={isBioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="p-6 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-orange-500/20 shadow-lg relative overflow-hidden">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600" />
                
               
                <div className="space-y-6 relative z-10">
                  <p className="text-lg text-slate-100">
                    <span className="font-semibold text-orange-500">Přetvářím vaše vize v digitální realitu</span> pomocí 
                    moderního designu a funkčních webů, které přitahují pozornost a zvyšují konverze. Váš projekt 
                    dostane nadstandardní péči, kterou si zaslouží.
                  </p>
                  
                  <div className="w-16 h-px bg-orange-500/30 mx-auto" />
                  
                  <p className="text-lg text-slate-100">
                    Každý projekt začíná <span className="font-semibold text-orange-500">bezplatnou konzultací</span> a transparentní cenovou nabídkou. 
                    Mé řešení vždy respektuje váš rozpočet i časové možnosti. <span className="font-semibold text-white">Získáte web, který pracuje pro vás 24/7.</span>
                  </p>
                  
                  <div className="w-16 h-px bg-orange-500/30 mx-auto" />
                  
                  <p className="text-lg text-slate-100">
                    S vášní pro design a programování žiji doma v Ostravě, kde mě inspiruje <span className="text-orange-500 font-semibold">trojice mých psích parťáků</span> – dvě Shiba Inu a nové štěně Akita Inu. Jejich energie a loajalita se odráží i v mém přístupu k práci.
                  </p>
                </div>
                
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500/10 to-transparent" />
              </div>
              
              
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
            </motion.div>
          </motion.div>
        </div>

        
        <motion.div
          ref={skillsHeadingRef}
          initial={{ opacity: 0 }}
          animate={isSkillsHeadingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 relative"
        >
         
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-32 h-px opacity-60 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          
          <div className="relative inline-block">
            
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <div className="w-5 h-px bg-orange-500/50"></div>
              <div className="text-orange-500/70 text-xs font-mono">[</div>
            </div>
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center space-x-1">
              <div className="text-orange-500/70 text-xs font-mono">]</div>
              <div className="w-5 h-px bg-orange-500/50"></div>
            </div>
            
            <h3 className="text-3xl font-bold relative inline-block px-4">
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isSkillsHeadingInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10"
                >
                  Moje Dovednosti
                </motion.span>
                
              
                <motion.span 
                  className="absolute left-0 top-0 w-full text-transparent bg-clip-text"
                  style={{ 
                    WebkitTextStroke: "1px rgba(249, 115, 22, 0.3)",
                    filter: "blur(4px)"
                  }}
                  animate={{ 
                    opacity: [0.2, 0.6, 0.2] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  Moje Dovednosti
                </motion.span>
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isSkillsHeadingInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.4,
                }}
                className="absolute left-0 bottom-[-4px] h-[3px] bg-gradient-to-r from-orange-500 to-orange-400 w-full rounded-full origin-left"
              />
            </h3>
          </div>
          
          
          <div className="mt-4 flex justify-center items-center space-x-1 text-xs font-mono text-orange-500/60">
            <span>//</span>
            <motion.div 
              className="h-px w-10 bg-orange-500/40"
              initial={{ scaleX: 0 }}
              animate={isSkillsHeadingInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={isSkillsHeadingInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="tracking-wider"
            >
              TECHNOLOGIE &amp; EXPERTÍZA
            </motion.span>
            <motion.div 
              className="h-px w-10 bg-orange-500/40"
              initial={{ scaleX: 0 }}
              animate={isSkillsHeadingInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
            />
            <span>//</span>
          </div>
        </motion.div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
         
          <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`connector-${i}`}
                className="hidden lg:block absolute h-px bg-orange-500/20"
                style={{
                  width: "30px",
                  left: `${25 + (i % 3) * 25}%`,
                  top: `${30 + Math.floor(i / 3) * 40}%`,
                }}
                initial={{ opacity: 0 }}
                animate={isSkillsHeadingInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
          
         
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection