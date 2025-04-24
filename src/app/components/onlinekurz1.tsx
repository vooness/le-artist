"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

// Předem definované hodnoty pro částice
const particlePositions = [
  { left: "92.35%", color: "#F97316" },
  { left: "87.63%", color: "#38BDF8" },
  { left: "28.47%", color: "#F97316" },
  { left: "62.18%", color: "#38BDF8" },
  { left: "73.92%", color: "#F97316" },
  { left: "81.54%", color: "#38BDF8" },
  { left: "58.76%", color: "#F97316" },
  { left: "94.21%", color: "#38BDF8" },
  { left: "34.58%", color: "#F97316" },
  { left: "68.47%", color: "#38BDF8" },
  { left: "75.34%", color: "#F97316" },
  { left: "48.25%", color: "#38BDF8" },
  { left: "38.72%", color: "#F97316" },
  { left: "89.43%", color: "#38BDF8" },
  { left: "12.69%", color: "#F97316" }
];

// Předem definované hodnoty pro animace částic
const particleAnimations = [
  { leftEnd: "85.21%", delay: 0.7, duration: 11.5 },
  { leftEnd: "82.43%", delay: 1.8, duration: 9.3 },
  { leftEnd: "25.69%", delay: 0.5, duration: 10.8 },
  { leftEnd: "59.37%", delay: 2.1, duration: 12.2 },
  { leftEnd: "70.84%", delay: 1.3, duration: 9.7 },
  { leftEnd: "78.92%", delay: 0.9, duration: 11.1 },
  { leftEnd: "61.45%", delay: 2.4, duration: 10.3 },
  { leftEnd: "91.38%", delay: 1.0, duration: 8.9 },
  { leftEnd: "37.92%", delay: 2.7, duration: 11.7 },
  { leftEnd: "65.23%", delay: 0.8, duration: 10.1 },
  { leftEnd: "72.56%", delay: 1.5, duration: 9.5 },
  { leftEnd: "45.73%", delay: 2.2, duration: 12.8 },
  { leftEnd: "41.94%", delay: 0.6, duration: 10.5 },
  { leftEnd: "86.21%", delay: 1.9, duration: 9.8 },
  { leftEnd: "15.83%", delay: 1.2, duration: 11.3 }
];

// Předem definované hodnoty pro světelné pruhy
const beamSettings = [
  { width: "125.73%", height: "1.42px", color: "#F97316" },
  { width: "142.58%", height: "1.15px", color: "#38BDF8" },
  { width: "131.27%", height: "1.83px", color: "#F97316" },
  { width: "118.64%", height: "1.25px", color: "#38BDF8" },
  { width: "108.45%", height: "1.37px", color: "#F97316" }
];

// Komponenta pro futuristické animované pozadí
export const FuturisticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Jemná mřížka na pozadí */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />
      
      {/* Výraznější pulsující kruhy v pozadí */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Rotující velký hexagon */}
      <motion.div 
        className="absolute"
        style={{
          width: '1000px',
          height: '1000px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(249, 115, 22, 0.1)',
          opacity: 0.15
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute"
        style={{
          width: '800px',
          height: '800px',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(56, 189, 248, 0.1)',
          opacity: 0.15
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Výraznější létající částice - S PEVNÝMI HODNOTAMI */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={`bright-particle-${i}`}
          className="absolute w-1 h-1 rounded-full z-10"
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            left: particle.left,
            top: '100%',
          }}
          animate={{
            top: [null, '-10%'],
            left: [null, particleAnimations[i].leftEnd],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particleAnimations[i].duration,
            repeat: Infinity,
            delay: particleAnimations[i].delay,
            ease: "easeOut",
            times: [0, 0.6, 1]
          }}
        />
      ))}
      
      {/* Pohyblivé světelné pruhy - S PEVNÝMI HODNOTAMI */}
      {beamSettings.map((beam, i) => {
        const topPosition = 20 + i * 15;
        const delay = i * 2;
        
        return (
          <motion.div
            key={`light-beam-${i}`}
            className="absolute"
            style={{
              width: beam.width,
              height: beam.height,
              left: '-50%',
              top: `${topPosition}%`,
              background: `linear-gradient(90deg, transparent, ${beam.color}50, transparent)`,
              opacity: 0.15,
              filter: 'blur(2px)'
            }}
            animate={{
              left: ['-50%', '100%'],
              opacity: [0, 0.15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay,
              ease: "linear"
            }}
          />
        );
      })}
      
      {/* Futuristické světelné kruhy - více viditelné */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`light-circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            border: `1px solid ${i % 2 === 0 ? 'rgba(249, 115, 22, 0.2)' : 'rgba(56, 189, 248, 0.2)'}`,
            opacity: 0.1,
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Futuristická položka s checkmarkem
export const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="mr-3 mt-1 text-green-500 flex-shrink-0">
        <Check className="w-5 h-5" />
      </div>
      <span className="text-gray-300">{children}</span>
    </div>
  );
};

// Komponenta typu kurzu
interface CourseTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export const CourseTypeCard: React.FC<CourseTypeCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ 
          backgroundColor: `${color}15`,
          border: `1px solid ${color}30`
        }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Komponenta pro kurz
interface CourseCardProps {
  title: string;
  price: string;
  isMsvp: boolean;
  duration: string;
  features: string[];
  color: string;
  icon: React.ReactNode;
}

export const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  price, 
  isMsvp,
  duration,
  features, 
  color,
  icon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tenký border */}
      <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
      
      {/* Tenké rohy v barvě kurzu */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: color }}></div>
      
      {/* Hlavní pozadí */}
      <div className="p-6 h-full bg-[#111827]/70 backdrop-blur-sm flex flex-col">
        {/* Barevný gradient na pozadí při hoveru */}
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none rounded-lg"
          style={{ 
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` 
          }}
          animate={{ 
            opacity: isHovered ? 0.8 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* EU logo pro MSVP */}
        {isMsvp && (
          <div className="absolute top-3 right-3 flex items-center text-xs bg-blue-500/20 rounded-full px-3 py-1 border border-blue-500/40">
            <span className="text-blue-300">MSVP EU</span>
          </div>
        )}
        
        {/* Ikona kurzu */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
          style={{ 
            backgroundColor: `${color}15`,
            border: `1px solid ${color}30`
          }}
        >
          <div style={{ color }}>{icon}</div>
        </div>
        
        {/* Název kurzu */}
        <h3 
          className="text-2xl font-bold mb-2" 
          style={{ color }}
        >
          {title}
        </h3>
        
        {/* Cena */}
        <div className="mb-3">
          <div 
            className="text-xl font-bold inline-block px-4 py-1 rounded-full"
            style={{ 
              color: 'white',
              backgroundColor: `${color}30`,
              border: `1px solid ${color}` 
            }}
          >
            {price}
          </div>
        </div>
        
        {/* Délka kurzu */}
        <div className="mb-5 flex items-center text-gray-400 text-sm">
          <span>{duration}</span>
        </div>
        
        {/* Seznam funkcí */}
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-3">
              <div className="mr-3 mt-[1px] text-green-500 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};