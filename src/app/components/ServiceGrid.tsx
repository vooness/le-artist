"use client";

import React from "react";
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
      "Základní web již od 10000 Kč",
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
      "Logo design již od 3000 Kč",
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
      "Střih videa od 2000 Kč",
      "Dodání do 48 hodin",
      "Motion grafika v ceně",
      "Vlastní hudba a efekty",
      "Formáty pro všechny platformy",
    ],
    color: "#EC4899" // Růžová
  },
];

// Animation variants for cards
const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

// Interface for ServiceCard props
interface ServiceCardProps {
  service: Service;
  index: number;
}

// ServiceCard component s futuristickým vzhledem
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const router = useRouter();
  
  return (
    <motion.div
      custom={index}
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-sm group relative overflow-hidden"
    >
      {/* Základní futuristický kontejner */}
      <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg
          hover:shadow-[0_0_25px_rgba(249,115,22,0.3)] transition-all duration-500 overflow-hidden">
        
        {/* Technologické okraje */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
        </div>
        
        {/* Digitální akcenty */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/20 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/20 rounded-bl-xl"></div>
        
        {/* Hexagonální podsvícení */}
        <motion.div 
          className="absolute"
          style={{
            background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)`, 
            width: "120%",
            height: "120%",
            top: "-10%",
            left: "-10%",
            filter: "blur(30px)"
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Digitální pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={`digit-${index}-${i}`}
              className="absolute text-xs font-mono"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                color: service.color,
                transform: `rotate(${Math.random() * 90 - 45}deg)`,
              }}
            >
              {Math.round(Math.random())}
            </div>
          ))}
        </div>
        
        {/* Obsah */}
        <div className="p-8 relative z-10">
          {/* Ikona a nadpis */}
          <div className="flex justify-center items-center mb-8">
            {/* Ikona s futuristickým podsvícením */}
            <motion.div 
              className="relative mr-4"
              animate={{
                filter: ["drop-shadow(0 0 3px rgba(249, 115, 22, 0.3))", "drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))", "drop-shadow(0 0 3px rgba(249, 115, 22, 0.3))"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div style={{ color: service.color }} className="text-orange-500">
                {service.icon}
              </div>
            </motion.div>
            
            {/* Stylizovaný nadpis */}
            <h3 className="text-3xl font-bold relative">
              <span className="relative z-10" style={{ color: service.color }}>{service.title}</span>
              
              {/* Pulzující obrys textu pro futuristický efekt */}
              <motion.span 
                className="absolute left-0 top-0 w-full text-transparent"
                style={{ 
                  WebkitTextStroke: `1px ${service.color}40`,
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
                {service.title}
              </motion.span>
            </h3>
          </div>
          
          {/* Popis s technickým podtržením */}
          <div className="mb-8 relative">
            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            <motion.div 
              className="absolute -bottom-4 left-0 h-px w-full"
              style={{ background: `linear-gradient(to right, transparent, ${service.color}40, transparent)` }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* Checklisty s futuristickým stylem */}
          <ul className="space-y-4 mt-6">
            {service.checkmarks.map((check: string, idx: number) => (
              <motion.li 
                key={idx} 
                className="flex items-start text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative flex-shrink-0 mr-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 relative z-10" />
                  <motion.div 
                    className="absolute -inset-1 rounded-full"
                    style={{ background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)` }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  />
                </div>
                <span>{check}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Futuristické CTA */}
          <div className="mt-8 pt-4 border-t border-gray-700/50 relative">
            <div className="absolute left-0 top-0 w-full h-px opacity-30"
                style={{ background: `linear-gradient(to right, transparent, ${service.color}80, transparent)` }}></div>
            <motion.button
              onClick={() => router.push("/sluzby")}
              className="group flex items-center text-white/80 hover:text-white transition-colors relative overflow-hidden rounded-lg px-4 py-2 bg-slate-800/50 border border-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Futuristický background efekt */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(to right, transparent, ${service.color}20, transparent)` }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Pohyblivý světelný efekt */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden"
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute h-full w-10 bg-white/10 blur-sm"
                  initial={{ left: '-20%' }}
                  whileHover={{ left: '120%' }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
              
              <Info className="w-5 h-5 mr-2" style={{ color: service.color }} />
              <span>Více informací</span>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Plovoucí tech detaily pro futuristický vzhled */}
      <motion.div 
        className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 rounded-br-lg opacity-70"
        style={{ borderColor: service.color }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 rounded-tl-lg opacity-70"
        style={{ borderColor: service.color }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </motion.div>
  );
};

// Komponenta pro animované pozadí
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animované tečky */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          
          return (
            <motion.div
              key={`dot-${i}`}
              className="absolute h-1 w-1 rounded-full bg-orange-500/20"
              style={{
                top: `${row * 12 + Math.random() * 5}%`,
                left: `${col * 12 + Math.random() * 5}%`,
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
      
      {/* Futuristické linie */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          style={{ top: `${30 + i * 40}%` }}
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
      
      {/* Vertikální linie */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
          style={{ left: `${30 + i * 40}%` }}
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
      
      {/* Futuristický Scanline efekt */}
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
      
      {/* Animované světelné spoty */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          top: '20%',
          left: '60%',
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
        className="absolute w-[250px] h-[250px] rounded-full opacity-[0.02] pointer-events-none"
        style={{
          top: '70%',
          left: '30%',
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
    </div>
  );
};

// Grid of service cards with heading
const ServicesGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 relative py-20">
      {/* Animované futuristické pozadí */}
      <AnimatedBackground />
      
      {/* Jemná mřížka na pozadí */}
      <div className="absolute inset-0 opacity-[0.04]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />
      
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white font-extrabold tracking-tight relative inline-block mb-16">
        Rychlý přehled 
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute left-1/3 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full origin-center"
        />
      </h2>
      
      {/* Futuristické značky pod nadpisem */}
      <div className="flex justify-center mb-16">
        <motion.div 
          className="flex items-center space-x-2 text-xs font-mono text-orange-500/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <span>//</span>
          <motion.div 
            className="h-px w-8 bg-orange-500/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
          />
          <span className="tracking-wider">SLUŽBY & MOŽNOSTI</span>
          <motion.div 
            className="h-px w-8 bg-orange-500/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
          />
          <span>//</span>
        </motion.div>
      </div>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </motion.div>
      
      {/* Futuristické doplňkové značky na konci sekce */}
      <div className="flex justify-center mt-16">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesGrid;