"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Monitor, Edit, Video, CheckCircle2, Info } from "lucide-react";

// Definice typů pro service
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  checkmarks: string[];
  color: string;
}

// Data for services (icons, titles, descriptions, checkmarks)
const services: Service[] = [
  {
    title: "Webovky",
    description:
      "Moderní, rychlé a responzivní webové stránky pro lepší prezentaci. Web, který prodává a roste s vámi.",
    icon: <Monitor className="w-8 h-8" />,
    checkmarks: [
      "Základní web již od 20 000 Kč",
      "React nebo .Net core řešení",
      "SEO optimalizace v ceně",
      "Responzivní design",
      "Úprava Shoptetu",
    ],
    color: "#F97316" // Oranžová
  },
  {
    title: "Grafika",
    description:
      "Od loga po kompletní firemní identitu. Jsem schopný navrhnout cokoliv – včetně marketingových materiálů.",
    icon: <Edit className="w-8 h-8" />,
    checkmarks: [
      "Logo design již od 3 000 Kč",
      "Vizitky a tiskoviny",
      "Sociální sítě a online grafika",
      "Loga a maskoti",
      "Design obalů",
    ],
    color: "#38BDF8" // Modrá
  },
  {
    title: "Střih Videa",
    description:
      "Profesionální střih videí pro sociální sítě, YouTube nebo firemní prezentace. Moderní efekty v ceně.",
    icon: <Video className="w-8 h-8" />,
    checkmarks: [
      "Střih videa od 3 000 Kč",
      "Dodání do 48 hodin",
      "Motion grafika v ceně",
      "Vlastní hudba a efekty",
      "Formáty pro všechny platformy",
    ],
    color: "#EC4899" // Růžová
  },
];

// Animation variants for cards - zjednodušeno pro lepší výkon na mobilu
const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Zkráceno zpoždění
      duration: 0.5, // Zkrácena doba animace
      ease: "easeOut",
    },
  }),
};

// Interface for ServiceCard props
interface ServiceCardProps {
  service: Service;
  index: number;
  isMobile: boolean;
}

// Optimalizovaná ServiceCard komponenta
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isMobile }) => {
  const router = useRouter();
  
  return (
    <motion.div
      custom={index}
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }} // Zajistí dřívější načtení
      className="w-full max-w-sm group relative overflow-hidden"
    >
      {/* Základní futuristický kontejner */}
      <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg
          hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 overflow-hidden">
        
        {/* Statické technologické okraje - bez animací */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
        </div>
        
        {/* Statické digitální akcenty */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/20 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/20 rounded-bl-xl"></div>
        
        {/* Obsah */}
        <div className="p-6 sm:p-8 relative z-10">
          {/* Ikona a nadpis */}
          <div className="flex justify-center items-center mb-6">
            {/* Ikona - bez animace na mobilních zařízeních */}
            <div className="relative mr-4" style={{ color: service.color }}>
              {service.icon}
            </div>
            
            {/* Stylizovaný nadpis - bez animace textu */}
            <h3 className="text-2xl sm:text-3xl font-bold relative" style={{ color: service.color }}>
              {service.title}
            </h3>
          </div>
          
          {/* Popis bez animací */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            <div className="mt-4 h-px w-2/3 mx-auto" 
                 style={{ background: `linear-gradient(to right, transparent, ${service.color}40, transparent)` }}></div>
          </div>
          
          {/* Optimalizované checklisty - bez přebytečných animací */}
          <ul className="space-y-3 mt-6">
            {service.checkmarks.map((check: string, idx: number) => (
              <li 
                key={idx} 
                className="flex items-start text-gray-300 text-sm"
              >
                <div className="flex-shrink-0 mr-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <span>{check}</span>
              </li>
            ))}
          </ul>
          
          {/* Optimalizované CTA tlačítko */}
          <div className="mt-6 pt-4 border-t border-gray-700/50">
            <button
              onClick={() => router.push("/sluzby")}
              className="w-full flex items-center justify-center text-white bg-slate-700/90 hover:bg-slate-700 
                        transition-colors px-4 py-2 rounded-lg border border-white/10 text-sm"
              style={{ 
                boxShadow: `0 0 10px ${service.color}30`
              }}
            >
              <Info className="w-4 h-4 mr-2" style={{ color: service.color }} />
              <span>Více informací</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Statické rohové akcenty místo animovaných */}
      <div 
        className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-lg opacity-50"
        style={{ borderColor: service.color }}
      />
      <div 
        className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg opacity-50"
        style={{ borderColor: service.color }}
      />
    </motion.div>
  );
};

// Statické pozadí místo animovaného
const StaticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Statické tečky místo animovaných */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          
          return (
            <div
              key={`dot-${i}`}
              className="absolute h-1 w-1 rounded-full bg-orange-500/10"
              style={{
                top: `${row * 20 + 5}%`,
                left: `${col * 20 + 5}%`,
              }}
            />
          );
        })}
      </div>
      
      {/* Statické horizontální linie */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent"
          style={{ top: `${30 + i * 40}%` }}
        />
      ))}
      
      {/* Statické vertikální linie */}
      {[...Array(2)].map((_, i) => (
        <div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          style={{ left: `${30 + i * 40}%` }}
        />
      ))}
    </div>
  );
};

// Grid of service cards with heading
const ServicesGrid: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Detekce mobilního zařízení
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Počáteční kontrola
    checkMobile();
    
    // Listener pro změnu velikosti
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 relative py-16 sm:py-20">
      {/* Použití statického pozadí pro všechny zařízení */}
      <StaticBackground />
      
      {/* Jemná mřížka na pozadí - statická */}
      <div className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
      
      {/* Optimalizovaný nadpis - méně animací */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-extrabold tracking-tight relative inline-block mb-8 sm:mb-16">
        Rychlý přehled 
        <div
          className="absolute left-1/3 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full"
        />
      </h2>
      
      {/* Zjednodušené značky pod nadpisem */}
      <div className="flex justify-center mb-10 sm:mb-16">
        <div className="flex items-center space-x-2 text-xs font-mono text-orange-500/60">
          <span>{'//'}</span>
          <div className="h-px w-8 bg-orange-500/40" />
          <span className="tracking-wider">SLUŽBY & MOŽNOSTI</span>
          <div className="h-px w-8 bg-orange-500/40" />
          <span>{'//'}</span>
        </div>
      </div>
      
      {/* Optimalizovaný grid - méně mezer na mobilu */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:gap-10"
      >
        {services.map((service, i) => (
          <ServiceCard 
            key={i} 
            service={service} 
            index={i} 
            isMobile={isMobile}
          />
        ))}
      </div>
      
      {/* Statický dekorativní prvek místo animovaného */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>
    </div>
  );
};

export default ServicesGrid;