"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParticlesBackground from "./ParticlesBakckground"; // Import vaší komponenty s částicemi

// Typ pro položky obsahu
interface ContentItem {
  id: number;
  image?: string;
  videoUrl?: string;
  alt?: string;
  title?: string;
}

// Data for banners (images) – now with a total of 6 banners
const banners: ContentItem[] = [
  { id: 1, image: "/imgs/kolagen.png", alt: "Banner 1" },
  { id: 2, image: "/imgs/malate.png", alt: "Banner 2" },
  { id: 3, image: "/imgs/banner8.jpg", alt: "Banner 3" },
  { id: 4, image: "/imgs/banner12.jpg", alt: "Banner 4" },
  { id: 5, image: "/imgs/g3.jpg", alt: "Banner 5" },
  { id: 6, image: "/imgs/Grounded---one.jpg", alt: "Banner 6" },
];

// New slider settings for the banners section
// Desktop: 1 row, 2 banners per slide (2x1)
// Mobile: 1 row, 1 banner per slide (1x1)
const bannerSliderSettings = {
  autoplay: true,
  autoplaySpeed: 1500, // changes every 1.5 seconds
  speed: 500,
  infinite: true,
  rows: 1,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

// Data for PlayStation Store graphics (images)
const psStoreGraphics: ContentItem[] = [
  { id: 1, image: "/imgs/playstation.png", alt: "PS Graphic 1" },
  { id: 2, image: "/imgs/playstation-8.png", alt: "PS Graphic 2" },
  { id: 3, image: "/imgs/playstation-2.png", alt: "PS Graphic 3" },
  { id: 4, image: "/imgs/playstation-3.png", alt: "PS Graphic 4" },
  { id: 5, image: "/imgs/playstation-4.png", alt: "PS Graphic 5" },
  { id: 6, image: "/imgs/playstation-5.png", alt: "PS Graphic 6" },
  { id: 7, image: "/imgs/playstation-6.png", alt: "PS Graphic 7" },
  { id: 8, image: "/imgs/playstation-7.png", alt: "PS Graphic 8" },
];

// Slider settings for PlayStation Store graphics
const psSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

// Mobile slider settings for other sections
const sliderSettingsMobile = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
};

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

// Data for Fotografování (photography) – 3 photos only.
const photographyItems: ContentItem[] = [
  { id: 1, image: "/imgs/tribulus---kmenweb.jpg", alt: "Photography 1", title: "Fotografie 1" },
  { id: 2, image: "/imgs/probiotika---kmenweb.jpg", alt: "Photography 2", title: "Fotografie 2" },
  { id: 3, image: "/imgs/_MG_7402.webp", alt: "Photography 3", title: "Fotografie 3" },
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

// Komponenta pro futuristický obrázek
interface FuturisticImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  isPlayStation?: boolean;
}

const FuturisticImage: React.FC<FuturisticImageProps> = ({ 
  src, 
  alt, 
  aspectRatio = "aspect-[16/9]",
  isPlayStation = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`relative ${aspectRatio} rounded-lg overflow-hidden group`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Futuristické rohy */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-orange-500 opacity-80 z-10"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-orange-500 opacity-80 z-10"></div>
      
      {/* Skenující efekt pouze při hover */}
      {isHovered && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
          initial={{ top: "-10%" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatDelay: 0,
            ease: "linear"
          }}
        />
      )}
      
      {/* Glowing efekt při hover pro PlayStation grafiku */}
      {isPlayStation && isHovered && (
        <motion.div 
          className="absolute inset-0 bg-orange-500/20 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      
      {/* Samotný obrázek */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Overlay efekt při hoveru */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

// Komponenta pro futuristické video
interface FuturisticVideoProps {
  src: string;
  title?: string;
}

const FuturisticVideo: React.FC<FuturisticVideoProps> = ({ src, title }) => {
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
      
      {/* Skenující efekt */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent z-10"
        initial={{ top: "-10%" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Název videa pod videem */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 px-4">
          <p className="text-white text-sm">{title}</p>
        </div>
      )}
    </motion.div>
  );
};

const Portfolio2: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative bg-[#0f172a] text-white py-16 px-8 overflow-hidden">
      {/* Přidáme komponentu s částicemi */}
      <ParticlesBackground />
      
      

      {/* Banners Section as Slider */}
      <motion.div 
        className="max-w-7xl mx-auto mb-16 lg:mb-32 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Ukázka bannerů</FuturisticSectionTitle>
        </div>
        
        <Slider {...bannerSliderSettings}>
          {banners.map((banner) => (
            <div key={banner.id} className="px-2">
              {banner.image && (
                <FuturisticImage 
                  src={banner.image} 
                  alt={banner.alt || ""} 
                />
              )}
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* PlayStation Store Graphics Section */}
      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>PlayStation Store grafika</FuturisticSectionTitle>
        </div>
        
        <Slider {...psSliderSettings}>
          {psStoreGraphics.map((graphic) => (
            <div key={graphic.id} className="px-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                {graphic.image && (
                  <FuturisticImage 
                    src={graphic.image} 
                    alt={graphic.alt || ""} 
                    aspectRatio="aspect-square"
                    isPlayStation={true}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Animované bannery Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Animované bannery</FuturisticSectionTitle>
        </div>
        
        {/* Desktop Grid: 4 items per row */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {animatedBannerVideos.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl} 
                  title={video.title}
                />
              )}
              <p className="text-center mt-3 text-gray-400">{video.title}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {animatedBannerVideos.map((video) => (
              <div key={video.id} className="px-2">
                {video.videoUrl && (
                  <FuturisticVideo 
                    src={video.videoUrl} 
                    title={video.title}
                  />
                )}
                <p className="text-center mt-3 text-gray-400">{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Krátké reklamy Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Krátké reklamy</FuturisticSectionTitle>
        </div>
        
        {/* Desktop Grid: 4 items per row */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {shortAdsVideos.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              {video.videoUrl && (
                <FuturisticVideo 
                  src={video.videoUrl} 
                  title={video.title}
                />
              )}
              <p className="text-center mt-3 text-gray-400">{video.title}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {shortAdsVideos.map((video) => (
              <div key={video.id} className="px-2">
                {video.videoUrl && (
                  <FuturisticVideo 
                    src={video.videoUrl} 
                    title={video.title}
                  />
                )}
                <p className="text-center mt-3 text-gray-400">{video.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Fotografování Section */}
      <motion.div 
        className="max-w-7xl mx-auto mt-24 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <FuturisticSectionTitle>Fotografování</FuturisticSectionTitle>
        </div>
        
        {/* Desktop Grid: 3 items per row */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {photographyItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              {item.image && (
                <div className="relative w-full aspect-video">
                  <FuturisticImage 
                    src={item.image} 
                    alt={item.alt || ""} 
                  />
                </div>
              )}
              <p className="text-center mt-3 text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile Slider: 2 items per view */}
        <div className="md:hidden">
          <Slider {...sliderSettingsMobile}>
            {photographyItems.map((item) => (
              <div key={item.id} className="px-2">
                {item.image && (
                  <div className="relative w-full aspect-video">
                    <FuturisticImage 
                      src={item.image} 
                      alt={item.alt || ""} 
                    />
                  </div>
                )}
                <p className="text-center mt-3 text-gray-400">{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
      
      {/* Final CTA Section */}
      <motion.div 
        className="max-w-4xl mx-auto mt-24 mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-orange-500/20 to-slate-800/40 rounded-lg border border-orange-500/20 p-8">
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