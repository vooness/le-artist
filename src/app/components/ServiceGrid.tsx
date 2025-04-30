"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Monitor, Edit, Video, CheckCircle2, Info } from "lucide-react";

// Definice typů pro service
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  checkmarks: string[];
  color: string;
}

// Data pro služby (ikony, tituly, popisy, checkmarky)
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

// Optimalizovaný ServiceCard bez animací pro mobilní zařízení
const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const router = useRouter();
  
  return (
    <div className="w-full max-w-sm group relative overflow-hidden">
      {/* Základní kontejner */}
      <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg
        hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 overflow-hidden">
        
        {/* Jednoduché statické okraje */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
        </div>
        
        {/* Statické rohové akcenty */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/20 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/20 rounded-bl-xl"></div>
        
        {/* Obsah */}
        <div className="p-6 sm:p-8 relative z-10">
          {/* Ikona a nadpis */}
          <div className="flex justify-center items-center mb-6">
            <div className="relative mr-4" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold relative" style={{ color: service.color }}>
              {service.title}
            </h3>
          </div>
          
          {/* Popis */}
          <div className="mb-6">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            <div className="mt-4 h-px w-2/3 mx-auto" 
                 style={{ background: `linear-gradient(to right, transparent, ${service.color}40, transparent)` }}></div>
          </div>
          
          {/* Checklisty */}
          <ul className="space-y-3 mt-6">
            {service.checkmarks.map((check, idx) => (
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
          
          {/* CTA tlačítko */}
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
      
      {/* Statické rohové akcenty */}
      <div 
        className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-lg opacity-50"
        style={{ borderColor: service.color }}
      />
      <div 
        className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg opacity-50"
        style={{ borderColor: service.color }}
      />
    </div>
  );
};

// Velmi jednoduché statické pozadí
const StaticBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute inset-0 bg-slate-900/20"></div>
    </div>
  );
};

// Optimalizovaná hlavní komponenta
const ServicesGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detekce mobilních zařízení - pouze při prvním načtení
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8 sm:mt-12 relative py-10 sm:py-16">
      {/* Základní pozadí */}
      <StaticBackground />
      
      {/* Jednoduchý nadpis */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white font-extrabold tracking-tight relative inline-block mb-6 sm:mb-10">
        Rychlý přehled 
        <div
          className="absolute left-1/3 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full"
        />
      </h2>
      
      {/* Značky pod nadpisem */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="flex items-center space-x-2 text-xs font-mono text-orange-500/60">
          <span>{'//'}</span>
          <div className="h-px w-8 bg-orange-500/40" />
          <span className="tracking-wider">SLUŽBY & MOŽNOSTI</span>
          <div className="h-px w-8 bg-orange-500/40" />
          <span>{'//'}</span>
        </div>
      </div>
      
      {/* Optimalizovaný grid - meně mezer pro mobilní zařízení */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 md:gap-8">
        {services.map((service, i) => (
          <ServiceCard 
            key={i} 
            service={service} 
            index={i} 
          />
        ))}
      </div>
      
      {/* Jednoduchý dekorativní prvek */}
      <div className="flex justify-center mt-8 sm:mt-12">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      </div>
    </div>
  );
};

export default ServicesGrid;