"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
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
}

const FuturisticSectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
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
        {children}
        <motion.div 
          className="absolute left-0 bottom-[-10px] h-[3px] bg-orange-500 w-full rounded-full"
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
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500 opacity-80 z-10"></div>
      
      {/* Číslování */}
      <div className="absolute top-3 left-3 bg-slate-800/80 border border-orange-500/30 text-orange-400 text-xs font-mono px-2 py-1 rounded-md z-20 backdrop-blur-sm">
        {String(index + 1).padStart(2, '0')}
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
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay efekt - aktivní při hoveru */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/30 transition-opacity duration-300 flex items-center justify-center p-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <a 
          href="#" 
          className="text-orange-400 font-semibold border border-orange-500/30 px-4 py-2 rounded-md bg-slate-900/60 backdrop-blur-sm hover:bg-orange-500/20 transition-colors"
        >
          Zobrazit detail
        </a>
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
}

const FuturisticVideo: React.FC<FuturisticVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
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
      className="relative w-full aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handlePlayPause}
    >
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500 opacity-80 z-10"></div>
      
      {/* Play/Pause ikona */}
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-orange-500/80 rounded-full p-3 backdrop-blur-sm">
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </div>
      </div>
      
      {/* Samotné video */}
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      />
      
      {/* Overlay efekt */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const Portfolio2: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative bg-[#0f172a] text-white py-16 px-8 overflow-hidden">
      {/* Přidáme komponentu s částicemi */}
      <ParticlesBackground />

      {/* PlayStation Store Graphics Section - Změněno na Grid 3x4 */}
      <motion.div 
        className="max-w-7xl mx-auto mb-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <FuturisticSectionTitle>PlayStation Store grafika</FuturisticSectionTitle>
        </div>
        
        {/* Desktop Grid: 3x4 layout (3 sloupce, 4 řady) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
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
      </motion.div>

      {/* Animované bannery Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Animované bannery</FuturisticSectionTitle>
        </div>
        
        {/* Grid layout pro všechny velikosti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {animatedBannerVideos.map((video) => (
            <div key={video.id}>
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl} 
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Krátké reklamy Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Krátké reklamy</FuturisticSectionTitle>
        </div>
        
        {/* Grid layout pro všechny velikosti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {shortAdsVideos.map((video) => (
            <div key={video.id}>
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl} 
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div 
        className="max-w-4xl mx-auto mt-24 mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-800/60 backdrop-blur-md rounded-lg border border-orange-500/20 p-8 relative overflow-hidden">
          {/* Futuristické dekorativní prvky */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/60"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/60"></div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Hledáte profesionální grafické a video služby?</h3>
          <p className="text-gray-300 mb-6">
            Od bannerů po animace, nabízím kompletní řešení pro vaši značku, e-shop nebo sociální sítě.
          </p>
          
          <motion.a 
            href="/kontakt"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-medium rounded-full overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Světelný efekt při hover */}
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></span>
            </span>
            
            <span className="relative z-10 flex items-center">
              Vytvořme něco skvělého
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio2;