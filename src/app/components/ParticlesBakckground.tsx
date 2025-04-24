"use client";

import React from "react";
import { motion } from "framer-motion";

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

// Komponenta pro animované částice
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Výraznější létající částice */}
      {particlePositions.map((particle, i) => (
        <motion.div
          key={`bright-particle-${i}`}
          className="absolute w-1 h-1 rounded-full z-10"
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 8px ${particle.color}`,
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
      
      {/* Pohyblivé světelné pruhy */}
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
              opacity: 0.1,
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
      
      
    </div>
  );
};

export default ParticlesBackground;