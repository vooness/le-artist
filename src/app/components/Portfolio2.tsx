"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "./ParticlesBakckground";

// Typ pro položky obsahu
interface ContentItem {
  id: number;
  image?: string;
  videoUrl?: string;
  alt?: string;
  title?: string;
}

// Data for PlayStation Store graphics (images) - rozšířeno na 12 položek
const psStoreGraphics: ContentItem[] = [
  { id: 1, image: "/imgs/playstation.png", alt: "PS Graphic 1" },
  { id: 2, image: "/imgs/playstation-8.png", alt: "PS Graphic 2" },
  { id: 3, image: "/imgs/playstation-2.png", alt: "PS Graphic 3" },
  { id: 4, image: "/imgs/playstation-3.png", alt: "PS Graphic 4" },
  { id: 5, image: "/imgs/playstation-4.png", alt: "PS Graphic 5" },
  { id: 6, image: "/imgs/playstation-5.png", alt: "PS Graphic 6" },
  { id: 7, image: "/imgs/playstation-6.png", alt: "PS Graphic 7" },
  { id: 8, image: "/imgs/playstation-7.png", alt: "PS Graphic 8" },
  { id: 9, image: "/imgs/playstation.png", alt: "PS Graphic 9" },
  { id: 10, image: "/imgs/playstation-2.png", alt: "PS Graphic 10" },
  { id: 11, image: "/imgs/playstation-3.png", alt: "PS Graphic 11" },
  { id: 12, image: "/imgs/playstation-4.png", alt: "PS Graphic 12" },
];

// Data for Animované bannery (videos)
const animatedBannerVideos: ContentItem[] = [
  { id: 1, videoUrl: "/imgs/mag-banner.mp4", title: "Animovaný banner 1" },
  { id: 2, videoUrl: "/imgs/maleteban.mp4", title: "Animovaný banner 2" },
  { id: 3, videoUrl: "/imgs/kolagen.mp4", title: "Animovaný banner 3" },
  { id: 4, videoUrl: "/imgs/probiotika.mp4", title: "Animovaný banner 4" },
];

// Data for Krátké reklamy (videos)
const shortAdsVideos: ContentItem[] = [
  { id: 1, videoUrl: "/imgs/saty.mp4", title: "Krátká reklama 1" },
  { id: 2, videoUrl: "/imgs/magnesium.mp4", title: "Krátká reklama 2" },
  { id: 3, videoUrl: "/imgs/jimbo.mp4", title: "Krátká reklama 3" },
  { id: 4, videoUrl: "/imgs/serda.mp4", title: "Krátká reklama 4" },
];

// Komponenta pro futuristický nadpis sekce
interface SectionTitleProps {
  children: React.ReactNode;
  highlight?: boolean;
}

const FuturisticSectionTitle: React.FC<SectionTitleProps> = ({ children, highlight = false }) => {
  return (
    <div className="relative inline-flex flex-col items-center">
      <motion.div 
        className="absolute -top-4 -left-8 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute -bottom-4 -right-8 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <h2 className="text-4xl font-bold text-white relative inline-block">
        {highlight ? (
          <span>
            {(children as string).split(' ').map((word, i, arr) => 
              i === arr.length - 1 ? 
                <span key={i} className="text-orange-500">{word} </span> : 
                <span key={i}>{word} </span>
            )}
          </span>
        ) : (
          children
        )}
        <motion.div 
          className="absolute left-0 bottom-[-10px] h-[3px] bg-gradient-to-r from-orange-500 to-transparent w-full rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        />
      </h2>
    </div>
  );
};

// Komponenta pro futuristickou kartu PlayStation
interface PlayStationCardProps {
  image: string;
  alt: string;
  index: number;
}

const PlayStationCard: React.FC<PlayStationCardProps> = ({ image, alt, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative aspect-square bg-slate-900/80 rounded-lg overflow-hidden backdrop-blur-sm group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulzující okraj při hoveru */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-lg z-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              boxShadow: ['0 0 0 1px rgba(249, 115, 22, 0.3)', '0 0 0 2px rgba(249, 115, 22, 0.6)', '0 0 0 1px rgba(249, 115, 22, 0.3)']
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
      
      {/* Číslování s lepším designem */}
      <div className="absolute top-3 left-3 bg-slate-800/90 border border-orange-500/50 text-orange-400 text-xs font-mono px-2 py-1 rounded-md z-20 backdrop-blur-sm flex items-center space-x-1">
        <span className="text-orange-500/60">PS</span>
        <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
      </div>
      
      {/* Skenující efekt - aktivní při hoveru */}
      {isHovered && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
          initial={{ top: "-10%" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
      )}
      
      {/* Obrázek */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      

      {/* Animovaný gradient highlight při hoveru */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-orange-400/5 pointer-events-none"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

// Komponenta pro futuristické video
interface FuturisticVideoProps {
  src: string;
  title?: string;
  index: number;
}

const FuturisticVideo: React.FC<FuturisticVideoProps> = ({ src, title, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Pro automatické zobrazení prvního snímku videa
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
  }, []);
  
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <motion.div 
      className="relative w-full aspect-[9/16] rounded-lg overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulzující okraj */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 rounded-lg z-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              boxShadow: ['0 0 0 1px rgba(249, 115, 22, 0.3)', '0 0 0 2px rgba(249, 115, 22, 0.6)', '0 0 0 1px rgba(249, 115, 22, 0.3)']
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Video index */}
      <div className="absolute top-3 left-3 bg-slate-800/90 border border-orange-500/50 text-orange-400 text-xs font-mono px-2 py-1 rounded-md z-20 backdrop-blur-sm flex items-center space-x-1">
        <span className="text-orange-500/60">VIDEO</span>
        <span className="font-bold">{String(index + 1).padStart(2, '0')}</span>
      </div>
      
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-orange-500 opacity-80 z-10"></div>
      
      {/* Title */}
      {title && (
        <div className="absolute top-3 right-3 bg-slate-800/80 border border-orange-500/30 text-white text-xs px-2 py-1 rounded-md z-20 backdrop-blur-sm">
          {title}
        </div>
      )}
      
      {/* Play/Pause ikona - vždy viditelná, ale při hoveru více výrazná */}
      <div 
        onClick={handlePlayPause}
        className={`absolute inset-0 flex items-center justify-center z-20 cursor-pointer ${isHovered ? 'opacity-100' : 'opacity-90'} transition-opacity duration-300`}
      >
        <motion.div
          className={`flex items-center justify-center bg-orange-500/80 rounded-full p-3 backdrop-blur-sm border-2 border-white/30 shadow-lg ${isHovered ? 'scale-110' : 'scale-100'}`}
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? [1, 1.1, 1] : 1,
            boxShadow: isHovered ? [
              '0 0 0 0 rgba(249, 115, 22, 0)',
              '0 0 0 10px rgba(249, 115, 22, 0.3)',
              '0 0 0 0 rgba(249, 115, 22, 0)'
            ] : '0 0 0 0 rgba(249, 115, 22, 0)'
          }}
          transition={{ 
            duration: 1.5, 
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.5
          }}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </motion.div>
      </div>
      
      
      
      {/* Samotné video */}
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        onClick={handlePlayPause}
        className="object-cover w-full h-full cursor-pointer"
      />
      
      {/* Overlay efekt */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
      
      {/* Stav přehrávání */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center">
        <div className="bg-slate-900/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-orange-500/30 flex items-center space-x-1">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></span>
          <span>{isPlaying ? 'Přehrává se' : 'Klikni pro přehrání'}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Komponenta pro navigační tlačítko
interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ to, children }) => {
  return (
    <motion.a
      href={to}
      className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <svg className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span className="font-medium">{children}</span>
    </motion.a>
  );
};

const Portfolio2: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative bg-[#0f172a] text-white py-16 px-6 md:px-8 overflow-hidden min-h-screen">
      {/* Přidáme komponentu s částicemi */}
      <ParticlesBackground />
      
      


      {/* PlayStation Store Graphics Section - Změněno na Grid 3x4 */}
      <motion.div 
        className="max-w-7xl mx-auto mb-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16 ">
          <FuturisticSectionTitle highlight>PlayStation Store grafika</FuturisticSectionTitle>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Grafické návrhy připravené pro PlayStation Store, optimalizované pro různé rozlišení obrazovky a platformy.
          </p>
        </div>
        
        {/* Desktop Grid: 3x4 layout (3 sloupce, 4 řady) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {psStoreGraphics.map((graphic, index) => (
            <div key={graphic.id}>
              {graphic.image && (
                <PlayStationCard 
                  image={graphic.image} 
                  alt={graphic.alt || ""} 
                  index={index}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Layout: 1x1 (1 položka pod druhou) */}
        <div className="md:hidden space-y-6">
          {psStoreGraphics.slice(0, 6).map((graphic, index) => (
            <div key={graphic.id}>
              {graphic.image && (
                <PlayStationCard 
                  image={graphic.image} 
                  alt={graphic.alt || ""} 
                  index={index}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* "Zobrazit více" tlačítko pro mobilní zobrazení */}
        <div className="md:hidden mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-slate-800/80 text-orange-400 border border-orange-500/40 rounded-md hover:bg-slate-700/80 transition flex items-center mx-auto space-x-2"
          >
            <span>Zobrazit více</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      {/* Animované bannery Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-32 mb-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <FuturisticSectionTitle highlight>Animované bannery</FuturisticSectionTitle>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Dynamické reklamní bannery navržené pro upoutání pozornosti, zvýšení prokliků a konverzí.
          </p>
        </div>
        
        {/* Grid layout pro všechny velikosti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {animatedBannerVideos.map((video, index) => (
            <div key={video.id}>
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl}
                  title={video.title}
                  index={index}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Krátké reklamy Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-32 mb-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <FuturisticSectionTitle highlight>Krátké reklamy</FuturisticSectionTitle>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Efektivní reklamní spoty optimalizované pro sociální sítě a digitální marketingové kampaně.
          </p>
        </div>
        
        {/* Grid layout pro všechny velikosti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {shortAdsVideos.map((video, index) => (
            <div key={video.id}>
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl}
                  title={video.title}
                  index={index}
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div 
        className="max-w-4xl mx-auto mt-32 mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative bg-gradient-to-br from-[#131b2f] via-[#1a2133] to-[#151e32] rounded-xl border border-orange-500/20 p-10 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Dekorativní prvky */}
          <div className="absolute top-0 left-0 w-[5px] h-full bg-gradient-to-b from-orange-500 to-orange-500/10"></div>
          <div className="absolute bottom-0 right-0 w-[5px] h-full bg-gradient-to-t from-orange-500 to-orange-500/10"></div>
          
          {/* Vrchní horizontální linie */}
          <div className="absolute top-0 left-[5px] right-0 h-[1px] bg-gradient-to-r from-orange-500 to-transparent"></div>
          
          {/* Spodní horizontální linie */}
          <div className="absolute bottom-0 right-[5px] left-0 h-[1px] bg-gradient-to-l from-orange-500 to-transparent"></div>
          
          {/* Rohové dekorace */}
          <div className="absolute top-0 left-0 w-20 h-20">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-orange-500/80"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20">
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-orange-500/80"></div>
          </div>
          
          {/* Dekorativní body - "tech" efekt */}
          <div className="absolute top-[30%] left-[5%] w-2 h-2 bg-orange-500/30 rounded-full" style={{ boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}></div>
          <div className="absolute bottom-[25%] right-[8%] w-1 h-1 bg-orange-500/40 rounded-full" style={{ boxShadow: '0 0 10px rgba(249, 115, 22, 0.6)' }}></div>
          
          {/* Obsah */}
          <div className="relative z-10 text-center">
            <div className="inline-block relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Hledáte profesionální grafické a video služby?
              </h3>
              <div className="mt-2 h-[3px] w-1/3 bg-gradient-to-r from-orange-500 to-transparent mx-auto"></div>
            </div>
            
            <p className="text-gray-300 my-8 text-lg leading-relaxed">
                Od bannerů po animace, nabízím kompletní řešení pro vaši značku, e-shop nebo sociální sítě. 
                <span className="block mt-2">
                  Společně můžeme váš nápad proměnit v <span className="text-orange-400 font-medium">digitální realitu</span>.
                  První konzultace je <span className="text-orange-400 font-medium">zdarma</span>.
                </span>
              </p>
              
              {/* Výhody - důvěryhodnostní indikátory */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-8 text-center">
                <div className="flex flex-col items-center p-3 bg-slate-800/60 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="text-orange-500 mb-2 p-2 bg-slate-900/50 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Rychlý vývoj</p>
                  <p className="text-gray-400 text-xs mt-1">Dodání v krátkém čase</p>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-slate-800/60 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="text-orange-500 mb-2 p-2 bg-slate-900/50 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Bezpečné řešení</p>
                  <p className="text-gray-400 text-xs mt-1">Kvalitní a spolehlivé</p>
                </div>
                
                <div className="flex flex-col items-center p-3 bg-slate-800/60 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="text-orange-500 mb-2 p-2 bg-slate-900/50 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium">Prémiová kvalita</p>
                  <p className="text-gray-400 text-xs mt-1">Detailní zpracování</p>
                </div>
              </div>
              
              {/* CTA Tlačítko */}
              <div className="inline-block relative group">
                {/* Animovaný glow efekt */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                
                <a
                  href="/kontakt"
                  className="relative flex items-center justify-center px-8 py-4 bg-[#1a2133] text-orange-400 font-bold rounded-lg overflow-hidden border border-orange-500/50 hover:border-orange-400 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500/50"></div>
                  
                  <span className="flex items-center">
                    <span className="mr-2">Vytvořme něco skvělého</span>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
              
              {/* Důvěryhodnostní indikátor */}
              <p className="text-gray-500 text-xs mt-5">Přes 30+ úspěšně dokončených projektů</p>
            </div>
          </div>
        
      </motion.div>
      
     
      
      
    </section>
  );
};

export default Portfolio2;