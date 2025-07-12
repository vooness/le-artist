"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  ChevronRight,
  ChevronLeft,
  Award,
  Video,
  Palette,
  ShoppingCart,
  Monitor,
  Users,
  Euro,
  Zap,
  Shield,
  BarChart3,
  Layout,
  Laptop,
  Clock,
  Briefcase,
  Brain,
  Sparkles
} from "lucide-react";

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
const FuturisticBackground: React.FC = () => {
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

// Komponenta kurzu
interface CourseCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  color: string;
  icon: React.ReactNode;
  popular?: boolean;
  isMSVP?: boolean;
  type: 'msvp' | 'firemni';
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  price, 
  duration,
  features, 
  color,
  icon,
  popular = false,
  isMSVP = false,
  type
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
      {/* Popular badge - DOVNITŘ GRIDU */}
      {popular && (
        <div className="absolute top-3 right-3 z-50">
          <div className="flex items-center px-2 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-bold shadow-lg">
            Nejoblíbenější
          </div>
        </div>
      )}

      {/* EU MSVP badge */}
      {isMSVP && (
        <div className="absolute top-3 right-3 flex items-center text-xs bg-blue-500/20 rounded-full px-3 py-1 border border-blue-500/40 z-20">
          <Euro className="w-3 h-3 mr-1 text-blue-300" />
          <span className="text-blue-300">MSVP EU</span>
        </div>
      )}
      
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
        
        {/* Název kurzu - FIXED HEIGHT pro zarovnání */}
        <div className="min-h-[3rem] flex items-center mb-2">
          <h3 
            className="text-2xl font-bold leading-tight" 
            style={{ color }}
          >
            {title}
          </h3>
        </div>
        
        {/* Cena - FIXED HEIGHT pro zarovnání */}
        <div className="mb-3 min-h-[2.5rem] flex items-center">
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
          <Clock className="w-4 h-4 mr-2" />
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

// Slider komponenta pro kurzy - POUZE PRO DESKTOP
interface CourseSliderProps {
  courses: any[];
  title: string;
  description: string;
}

const CourseSlider: React.FC<CourseSliderProps> = ({ 
  courses, 
  title, 
  description
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const coursesPerSlide = 3;
  const totalSlides = Math.ceil(courses.length / coursesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentCourses = () => {
    const start = currentSlide * coursesPerSlide;
    return courses.slice(start, start + coursesPerSlide);
  };

  return (
    <div className="mb-20">
      <h4 className="text-2xl font-bold text-center mb-4 text-white">{title}</h4>
      <p className="text-center text-gray-300 text-base mb-8 max-w-3xl mx-auto">
        {description}
      </p>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Slider controls - POUZE PRO DESKTOP */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-30 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-30 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
        
        {/* Courses grid */}
        {/* DESKTOP - Slider */}
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:grid grid-cols-3 gap-8"
        >
          {getCurrentCourses().map((course, index) => (
            <CourseCard key={`${currentSlide}-${index}`} {...course} />
          ))}
        </motion.div>

        {/* MOBILE/TABLET - Všechny kurzy v gridu */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        
        {/* Slide indicators - POUZE PRO DESKTOP */}
        {totalSlides > 1 && (
          <div className="hidden lg:flex justify-center mt-6 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Futuristický prvek procesu
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative flex">
      {/* Číslo */}
      <div className="mr-5 flex-shrink-0">
        <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center font-bold text-orange-500 relative z-10 bg-[#0f172a]">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-orange-500/50 to-orange-500/0"></div>
        )}
      </div>
      
      {/* Obsah */}
      <div className="pb-10">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Online kurzy komponenta
const OnlineCoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'process'>('pricing');
  const [courseFilter, setCourseFilter] = useState<'all' | 'msvp' | 'firemni'>('all');
  
  // Všechny kurzy - 3 MSVP + 6 FIREMNÍ
  const allCourses = [
    // MSVP kurzy - JEN 3 kurzy
    {
      title: "Webdesign s pomocí AI",
      price: "2 200 Kč",
      duration: "50 hodin / 7 týdnů",
      features: [
        "Principy moderního webdesignu",
        "Využití AI nástrojů pro design",
        "Základy HTML a CSS",
        "Responzivní design a UX/UI",
        "90% hrazeno z EU fondů",
        "Oficiální certifikát o absolvování"
      ],
      color: "#F97316",
      icon: <Monitor className="w-6 h-6" />,
      isMSVP: true,
      type: 'msvp' as const
    },
    {
      title: "Kurz programování Shoptetu",
      price: "2 400 Kč",
      duration: "48 hodin / 6 týdnů",
      features: [
        "Komplexní správa Shoptet e-shopu",
        "Pokročilé nastavení a customizace",
        "Marketingové nástroje Shoptetu",
        "Integrace s platebními systémy",
        "90% hrazeno z EU fondů",
        "Oficiální certifikát o absolvování"
      ],
      color: "#38BDF8",
      icon: <ShoppingCart className="w-6 h-6" />,
      isMSVP: true,
      type: 'msvp' as const
    },
    {
      title: "Video editing s After Effects",
      price: "2 500 Kč",
      duration: "45 hodin / 6 týdnů",
      features: [
        "Adobe After Effects & Premiere Pro",
        "Techniky střihu a kompozice",
        "Korekce barev a zvukový design",
        "Export pro různé platformy",
        "90% hrazeno z EU fondů",
        "Oficiální certifikát o absolvování"
      ],
      color: "#10B981",
      icon: <Video className="w-6 h-6" />,
      isMSVP: true,
      type: 'msvp' as const
    },
    
    // Firemní kurzy - 6 kurzů
    {
      title: "AI nástroje pro efektivitu práce",
      price: "od 24 000 Kč",
      duration: "24 hodin / 3 dny",
      features: [
        "Produktivita s AI asistenty",
        "Automatizace pracovních procesů",
        "AI pro tvorbu obsahu",
        "Integrace AI do workflow",
        "Praktická cvičení na míru",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#10B981",
      icon: <Sparkles className="w-6 h-6" />,
      type: 'firemni' as const
    },
    {
      title: "Kurz programování Shoptetu",
      price: "od 24 000 Kč",
      duration: "24 hodin / 3 dny",
      features: [
        "Komplexní správa Shoptet e-shopu",
        "Pokročilé nastavení a customizace",
        "Marketingové nástroje Shoptetu",
        "Integrace s firemními systémy",
        "Praktická cvičení na reálných datech",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#F97316",
      icon: <ShoppingCart className="w-6 h-6" />,
      type: 'firemni' as const
    },
    {
      title: "Webdesign s AI (React & Next.js)",
      price: "od 32 000 Kč",
      duration: "32 hodin / 4 dny",
      features: [
        "Nejmodernější řešení pro webové aplikace",
        "React a Next.js development",
        "AI nástroje pro rychlý vývoj",
        "Komponenty a state management",
        "Deployment a optimalizace",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#9333EA",
      icon: <Monitor className="w-6 h-6" />,
      popular: true,
      type: 'firemni' as const
    },
    {
      title: "Video editing s After Effects",
      price: "od 24 000 Kč",
      duration: "24 hodin / 3 dny",
      features: [
        "Adobe After Effects & Premiere Pro",
        "Techniky střihu a kompozice",
        "Korekce barev a zvukový design",
        "Export pro různé platformy",
        "Praktická cvičení na míru",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#38BDF8",
      icon: <Video className="w-6 h-6" />,
      type: 'firemni' as const
    },
    {
      title: "Firemní grafika s AI",
      price: "od 16 000 Kč",
      duration: "16 hodin / 2 dny",
      features: [
        "Tvorba jednotného vizuálního stylu",
        "AI nástroje pro firemní grafiku",
        "Správa brand manuálu",
        "Adobe Creative Suite pro firmy",
        "Praktická cvičení na míru",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#F97316",
      icon: <Palette className="w-6 h-6" />,
      type: 'firemni' as const
    },
    {
      title: "Video marketing pro firmy",
      price: "od 24 000 Kč",
      duration: "24 hodin / 3 dny",
      features: [
        "Strategie video marketingu",
        "Produkce firemních videí",
        "Editace a post-produkce",
        "Optimalizace pro sociální sítě",
        "Měření efektivity video kampaní",
        "Možnost individuálního přizpůsobení"
      ],
      color: "#10B981",
      icon: <Video className="w-6 h-6" />,
      type: 'firemni' as const
    }
  ];

  // Filtrace kurzů
  const getFilteredCourses = () => {
    if (courseFilter === 'all') return allCourses;
    return allCourses.filter(course => course.type === courseFilter);
  };

  const getMSVPCourses = () => allCourses.filter(course => course.type === 'msvp');
  const getFiremniCourses = () => allCourses.filter(course => course.type === 'firemni');
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Futuristické animované pozadí */}
      <FuturisticBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tlačítko zpět na hlavní stránku */}
        <div className="mb-10">
          <Link 
            href="/sluzby" 
            className="inline-flex items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-orange-500">Online kurzy</span>{" "}
            <span className="text-white">které skutečně vzdělávají</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            Specializované kurzy s důrazem na praktické dovednosti. Nabízím EU-sponzorované 
            MSVP kurzy pro jednotlivce i školení na míru pro firmy, které chtějí rozšířit 
            dovednosti svých zaměstnanců. Jako samouk, který se vše naučil z internetu, 
            perfektně vím, jak efektivně předávat znalosti a co skutečně potřebujete umět v praxi.
          </p>
          
          {/* Dvě tlačítka - NEKLIKATELNÁ */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium">
              <Zap className="w-5 h-5 mr-2" />
              <span>Spuštění za 14 dní</span>
            </div>
            <div className="inline-flex items-center px-6 py-3 rounded-lg border border-orange-500 bg-orange-500/10 text-orange-300 font-medium">
              <Shield className="w-5 h-5 mr-2" />
              <span>Akreditované certifikáty</span>
            </div>
          </div>
          
          {/* Vlastnosti služby - 6 boxů v gridu */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">MSVP EU financování</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Firemní školení</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Praktické projekty</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Kurzy už od 1 účastníka</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Online i prezenčně</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white font-medium text-sm sm:text-base">Individuální přizpůsobení</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 relative ${
                activeTab === 'pricing' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ceník
              {activeTab === 'pricing' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 relative ${
                activeTab === 'process' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Postup
              {activeTab === 'process' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>
        </div>
        
        {/* Obsah záložek */}
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Filter kurzy */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 bg-slate-800/50 rounded-lg p-1">
                <button
                  onClick={() => setCourseFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    courseFilter === 'all' 
                      ? 'bg-orange-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Všechny kurzy
                </button>
                <button
                  onClick={() => setCourseFilter('msvp')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    courseFilter === 'msvp' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  MSVP EU kurzy
                </button>
                <button
                  onClick={() => setCourseFilter('firemni')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    courseFilter === 'firemni' 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Firemní kurzy
                </button>
              </div>
            </div>

            {/* MSVP Kurzy se sliderem - JEN 3 KURZY */}
            {(courseFilter === 'all' || courseFilter === 'msvp') && (
              <CourseSlider
                courses={getMSVPCourses()}
                title="MSVP EU Kurzy pro jednotlivce"
                description="Kurzy financované z MSVP a EU fondů. Jednotlivci platí pouze 10% z celkové ceny kurzu. Kurz se spustí při minimálně 3 účastnících."
              />
            )}

            {/* Firemní kurzy se sliderem - 6 KURZŮ */}
            {(courseFilter === 'all' || courseFilter === 'firemni') && (
              <CourseSlider
                courses={getFiremniCourses()}
                title="Kurzy pro firmy a organizace"
                description="Specializované kurzy pro zvýšení kvalifikace zaměstnanců. Kurzy lze přizpůsobit potřebám vaší firmy a mohou se konat přímo ve vašich prostorách nebo online. Kurzy už od 1 účastníka s možností individuálního přizpůsobení."
              />
            )}

            {/* Detailní analýza cenotvorby - CELÁ SEKCE */}
            <div className="mb-16 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">💰 Analýza cenotvorby kurzů</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-orange-300 mb-4">🇪🇺 MSVP kurzy pro jednotlivce</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex justify-between">
                      <span>Celková cena kurzu:</span>
                      <span className="text-orange-300 font-bold">22 000 - 25 000 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hradí EU fondy (90%):</span>
                      <span className="text-green-300 font-bold">19 800 - 22 500 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Platí účastník (10%):</span>
                      <span className="text-orange-300 font-bold">2 200 - 2 500 Kč</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 mt-2 flex-shrink-0"></div>
                      <span>Kurz se spustí při min. 3 účastnících</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 mt-2 flex-shrink-0"></div>
                      <span>Oficiální certifikát uznávaný zaměstnavateli</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-orange-300 mb-4">🏢 Firemní kurzy (hodinová sazba 1 000 Kč)</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex justify-between">
                      <span>Kurz 16 hodin (2 dny):</span>
                      <span className="text-orange-300 font-bold">16 000 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kurz 24 hodin (3 dny):</span>
                      <span className="text-orange-300 font-bold">24 000 Kč</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kurz 32 hodin (4 dny):</span>
                      <span className="text-orange-300 font-bold">32 000 Kč</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 mt-2 flex-shrink-0"></div>
                      <span>Kurzy už od 1 účastníka</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mr-3 mt-2 flex-shrink-0"></div>
                      <span>Možnost individuálního přizpůsobení požadavkům firmy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                <p className="text-green-300 text-sm">
                  <strong>💡 Proč jsou moje kurzy výhodné:</strong> Kombinuji kvalitu profesionálního vzdělávání 
                  s osobním přístupem a flexibilitou malého poskytovatele. Jako akreditovaný lektor nabízím 
                  oficiální certifikáty za konkurenceschopné ceny. Sám jsem samouk - vše jsem se naučil z internetu, 
                  takže perfektně vím, jak efektivně předávat znalosti. Na rozdíl od ostatních lektorů je mým cílem 
                  naučit vás co nejvíc praktických dovedností. Před 6 lety jsem sám absolvoval podobný kurz 
                  a srovnání s tím, co učím já, je na úplně jiné úrovni.
                </p>
              </div>
            </div>

            {/* Doplňkové služby */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-4">Doplňkové služby a možnosti</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Individuální konzultace</h4>
                    <p className="text-sm text-gray-300">1 500 Kč / hodina</p>
                    <p className="text-sm text-gray-300">Osobní konzultace po kurzu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <Briefcase className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Přizpůsobení na míru</h4>
                    <p className="text-sm text-gray-300">+20% k ceně kurzu</p>
                    <p className="text-sm text-gray-300">Specifické firemní požadavky</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <Monitor className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Online/prezenční forma</h4>
                    <p className="text-sm text-gray-300">Stejná cena</p>
                    <p className="text-sm text-gray-300">Flexibilní podle potřeb</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <Award className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Pokročilé certifikace</h4>
                    <p className="text-sm text-gray-300">+2 000 Kč</p>
                    <p className="text-sm text-gray-300">Adobe certifikáty a další</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <BarChart3 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Pokračovací kurzy</h4>
                    <p className="text-sm text-gray-300">-15% sleva</p>
                    <p className="text-sm text-gray-300">Pro absolventy kurzů</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 rounded-full bg-orange-500/10">
                    <Laptop className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Materiály a software</h4>
                    <p className="text-sm text-gray-300">Zdarma</p>
                    <p className="text-sm text-gray-300">Výukové materiály a zkušební licence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kontaktní CTA */}
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Kontaktujte mě pro informace o termínech</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <p className="text-gray-400 mt-4">
                MSVP kurzy i firemní školení s možností individuálního přizpůsobení. Pomohu vám s registrací a vyřízením veškeré administrativy.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'process' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Proces kurzů */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Jak probíhají online kurzy
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
                  Strukturovaný proces od registrace po získání certifikátu zajišťuje, 
                  že získáte maximum praktických dovedností pro vaši kariéru.
                </p>
              </div>
              
              <ProcessStep
                number={1}
                title="Registrace a přihlášení"
                description="Pro MSVP kurzy vyřídím veškerou administrativu s úřadem práce a EU fondy. Pro firemní kurzy provedeme analýzu potřeb a přizpůsobíme obsah vašim specifickým požadavkům a procesům."
              />
              
              <ProcessStep
                number={2}
                title="Úvodní setkání a nastavení"
                description="Seznámíme se s online platformou, nastavíme potřebný software a probereme individuální cíle každého účastníka. Pro firemní kurzy představím přizpůsobený program podle vašich potřeb."
              />
              
              <ProcessStep
                number={3}
                title="Interaktivní výuka"
                description="Kombinuji živé online lekce s praktickými úkoly a samostatným studiem. Každá lekce obsahuje reálné projekty a případové studie z praxe, u firemních kurzů pracujeme s vašimi konkrétními projekty."
              />
              
              <ProcessStep
                number={4}
                title="Praktické projekty"
                description="Během kurzu vytvoříte portfolio reálných projektů, které můžete použít ve své práci nebo při hledání zaměstnání. Poskytnu individuální zpětnou vazbu k vašim pracím a doporučení pro další rozvoj."
              />
              
              <ProcessStep
                number={5}
                title="Hodnocení a certifikace"
                description="Na konci kurzu proběhne hodnocení formou praktického projektu. Po úspěšném absolvování získáte oficiální certifikát o absolvování, který je uznávaný zaměstnavateli. U firemních kurzů poskytneme také doporučení pro další rozvoj."
                isLast
              />
            </div>
            
            {/* Informace o kurzech */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-white mb-6">Co kurzy obsahují</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Živé online lekce</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Interaktivní výuka v reálném čase s možností dotazů</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Praktické úkoly</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Reálné projekty a případové studie z praxe</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Materiály a software</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Veškeré výukové materiály a zkušební licence zdarma</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Individuální konzultace</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Osobní zpětná vazba a konzultace během kurzu</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Záznam lekcí</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Možnost opakovaného sledování všech lekcí</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500 mr-2"></div>
                    <h4 className="font-medium text-white">Individuální přizpůsobení</h4>
                  </div>
                  <p className="text-sm text-gray-300 ml-4">Kurzy přizpůsobené specifickým potřebám firmy</p>
                </div>
              </div>
            </div>
            
            {/* Postup CTA */}
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
              <h4 className="text-xl font-bold text-white mb-4">Připraveni začít svou vzdělávací cestu?</h4>
              <p className="text-gray-300 mb-6">
                Ať už hledáte nové uplatnění na trhu práce nebo chcete zvýšit kvalifikaci svého týmu, 
                nabízím kurzy s možností individuálního přizpůsobení, které vám pomohou dosáhnout vašich cílů.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/kontakt?typ=msvp" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                  <span>MSVP kurzy pro jednotlivce</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/kontakt?typ=firemni" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                  <span>Firemní kurzy na míru</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* FAQ Sekce */}
        <div className="max-w-4xl mx-auto mt-20 relative z-10">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Často kladené otázky
          </h2>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jak probíhá výuka v online kurzech?</h3>
              <p className="text-gray-300">
                Výuka kombinuje živé online lekce s lektorem přes videokonferenci, 
                samostatnou práci na zadaných projektech a individuální konzultace. 
                Všechny materiály a záznamy jsou dostupné v e-learningovém systému, 
                takže se k nim můžete kdykoliv vrátit i po skončení kurzu.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jak zjistím, zda mám nárok na MSVP kurz?</h3>
              <p className="text-gray-300">
                Kurzy financované z MSVP a EU fondů jsou určeny především pro registrované 
                uchazeče o zaměstnání, osoby na rodičovské dovolené, absolventy a další 
                specifické skupiny. Kontaktujte mě a rádi vám pomůžu ověřit vaši způsobilost 
                a projdeme s vámi veškerou potřebnou dokumentaci.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jaké vybavení potřebuji pro účast v kurzu?</h3>
              <p className="text-gray-300">
                Pro většinu kurzů potřebujete počítač s připojením k internetu, webkameru 
                a mikrofon. Specifický software je obvykle k dispozici ve zkušební verzi 
                nebo vám poskytneme přístup po dobu kurzu. Detailní požadavky na technické 
                vybavení vám sdělím před začátkem konkrétního kurzu.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Lze kurz přizpůsobit na míru naší firmě?</h3>
              <p className="text-gray-300">
                Ano, firemní kurzy jsou vždy individuálně přizpůsobeny potřebám a specifikům vaší společnosti. 
                Před zahájením provedeme analýzu potřeb, seznámíme se s vašimi procesy a projekty, 
                abychom mohli vytvořit školení, které přinese maximální užitek právě vašemu týmu. 
                Nabízíme také možnost následné podpory a individuálních konzultací po skončení kurzu.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jaká je hodnota certifikátů po absolvování?</h3>
              <p className="text-gray-300">
                Certifikáty jsou oficiálně uznávané a mají vysokou hodnotu na trhu práce. 
                MSVP kurzy jsou akreditované EU a certifikáty jsou uznávané všemi členskými státy. 
                Firemní certifikáty potvrzují odborné kompetence a jsou uznávané zaměstnavateli 
                v daném oboru. Poskytují konkurenční výhodu při hledání zaměstnání nebo kariérním růstu.
              </p>
            </div>
          </div>
        </div>

        {/* Závěrečná CTA */}
        <div className="max-w-4xl mx-auto mt-20 mb-10 relative z-10">
          <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
              Zvyšte své dovednosti a konkurenceschopnost
            </h2>
            <p className="text-gray-200 text-center mb-8 max-w-3xl mx-auto">
              Ať už hledáte nové uplatnění na trhu práce nebo chcete zvýšit kvalifikaci svého týmu, 
              nabízím kurzy s možností individuálního přizpůsobení, které vám pomohou dosáhnout vašich cílů. 
              Kontaktujte mě pro více informací o dostupných termínech a možnostech přizpůsobení kurzů vašim potřebám.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/kontakt?typ=msvp" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              >
                <span>Informace o MSVP kurzech</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link 
                href="/kontakt?typ=firemni" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
              >
                <span>Firemní kurzy na míru</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCoursesPage;