"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaIdCard
} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBakckground";

// Předem definované hodnoty pro světelné body
const lightDots = [
  { width: "4.14px", height: "7.90px", top: "48.30%", left: "98.99%", delay: 0.2, duration: 4.8 },
  { width: "6.17px", height: "5.70px", top: "49.24%", left: "25.57%", delay: 0.7, duration: 5.3 },
  { width: "6.10px", height: "4.58px", top: "79.04%", left: "28.50%", delay: 1.2, duration: 4.5 },
  { width: "6.90px", height: "7.61px", top: "73.91%", left: "67.60%", delay: 0.5, duration: 6.1 },
  { width: "7.82px", height: "5.96px", top: "85.74%", left: "81.31%", delay: 1.8, duration: 4.9 },
  { width: "7.52px", height: "7.62px", top: "64.62%", left: "79.73%", delay: 0.3, duration: 5.7 },
  { width: "4.94px", height: "6.77px", top: "80.02%", left: "65.74%", delay: 1.1, duration: 4.2 },
  { width: "6.33px", height: "6.14px", top: "69.24%", left: "78.52%", delay: 0.9, duration: 5.4 },
  { width: "4.86px", height: "4.11px", top: "10.29%", left: "31.73%", delay: 1.4, duration: 6.3 },
  { width: "5.76px", height: "5.35px", top: "37.66%", left: "28.23%", delay: 0.6, duration: 4.7 },
  { width: "7.92px", height: "5.72px", top: "41.85%", left: "8.94%", delay: 1.7, duration: 5.1 },
  { width: "4.01px", height: "7.54px", top: "83.86%", left: "4.24%", delay: 0.4, duration: 6.5 },
  { width: "5.78px", height: "4.63px", top: "74.37%", left: "0.26%", delay: 1.3, duration: 5.2 },
  { width: "7.17px", height: "5.80px", top: "58.51%", left: "28.65%", delay: 0.8, duration: 4.4 },
  { width: "4.04px", height: "7.86px", top: "28.30%", left: "37.92%", delay: 1.5, duration: 5.8 },
  { width: "6.31px", height: "5.44px", top: "3.09%", left: "68.83%", delay: 0.1, duration: 4.6 },
  { width: "5.06px", height: "5.36px", top: "11.51%", left: "23.00%", delay: 1.0, duration: 5.5 },
  { width: "5.08px", height: "6.76px", top: "91.13%", left: "51.94%", delay: 1.6, duration: 4.3 },
  { width: "7.97px", height: "5.83px", top: "31.85%", left: "33.27%", delay: 0.5, duration: 5.9 },
  { width: "6.77px", height: "7.27px", top: "22.40%", left: "25.11%", delay: 1.9, duration: 4.1 }
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#0f172a] text-gray-200 pt-16 pb-6 overflow-hidden"
    >
      <ParticlesBackground />
      {/* Futuristické pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Digitální mřížka */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Pulzující světelné body - PEVNĚ DEFINOVANÉ HODNOTY */}
        {lightDots.map((dot, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full bg-orange-500/40"
            style={{
              width: dot.width,
              height: dot.height,
              top: dot.top,
              left: dot.left,
              filter: 'blur(1px)',
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
        
        {/* Horizontální linie */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Hlavní obsah */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <motion.div 
            className="flex flex-col items-start space-y-5 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-orange-600/10 to-orange-500/10 rounded-lg blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Link href="/" className="relative block">
                <Image
                  src="/imgs/logoone.png"
                  alt="Le Artist Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>
            
            <div className="relative pl-3 border-l-2 border-orange-500/50">
              <motion.p 
                className="text-sm text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Váš partner pro profesionální webdesign, grafiku a videoprodukci. S námi vyniknete online.
              </motion.p>
            </div>
            
            {/* Futuristický button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                href="/kontakt" 
                className="group relative inline-flex items-center px-5 py-2 bg-gradient-to-r from-orange-600/20 to-orange-500/20 
                text-sm text-white border border-orange-500/30 rounded-full overflow-hidden hover:border-orange-400 transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full group-hover:translate-x-full duration-700 ease-in-out opacity-0 group-hover:opacity-30
                  bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <span className="relative z-10 flex items-center">
                  <span>Spolupracujme</span>
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links - Futuristické */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute -left-2 top-0 w-6 h-6 border-t-2 border-l-2 border-orange-500/20 rounded-tl-md" />
            
            <h4 className="text-white text-lg font-semibold mb-5 flex items-center">
              <motion.span 
                className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Rychlá navigace
            </h4>
            
            <ul className="space-y-3">
              {[
                { text: "Domů", href: "/" },
                { text: "Portfolio", href: "/portfolio" },
                { text: "Služby & Ceník", href: "/sluzby" },
                { text: "Kontakt", href: "/kontakt" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <Link 
                    href={link.href} 
                    className="group text-sm flex items-center hover:text-white transition-colors duration-200"
                  >
                    <motion.div 
                      className="mr-2 w-5 h-px bg-gradient-to-r from-orange-500/80 to-orange-500/0"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    />
                    <span className="relative">
                      {link.text}
                      <span className="absolute left-0 bottom-0 w-3/4 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="absolute -right-2 bottom-0 w-6 h-6 border-b-2 border-r-2 border-orange-500/20 rounded-br-md" />
          </motion.div>

          {/* Kompletní přehled služeb - VŠECH 6 SLUŽEB */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="absolute -left-2 top-0 w-6 h-6 border-t-2 border-l-2 border-orange-500/20 rounded-tl-md" />
            
            <h4 className="text-white text-lg font-semibold mb-5 flex items-center">
              <motion.span 
                className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              Kompletní nabídka
            </h4>
            
            <ul className="space-y-3">
              {[
                { text: "Webové stránky", href: "/sluzby/tvorba-webovych-stranek" },
                { text: "Shoptet e-shop", href: "/sluzby/vlastni-eshop" },
                { text: "Grafický design", href: "/sluzby/graficky-design" },
                { text: "Video tvorba", href: "/sluzby/reklamni-videa" },
                { text: "Interaktivní kvízy", href: "/sluzby/interaktivni-cviceni" },
                { text: "Online kurzy", href: "/sluzby/firemni-online-kurzy" }
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <Link 
                    href={service.href} 
                    className="group text-sm flex items-center hover:text-white transition-colors duration-200"
                  >
                    <motion.div 
                      className="mr-2 w-5 h-px bg-gradient-to-r from-orange-500/80 to-orange-500/0"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                    />
                    <span className="relative">
                      {service.text}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="absolute -right-2 bottom-0 w-6 h-6 border-b-2 border-r-2 border-orange-500/20 rounded-br-md" />
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="absolute -left-2 top-0 w-6 h-6 border-t-2 border-l-2 border-orange-500/20 rounded-tl-md" />
            
            <h4 className="text-white text-lg font-semibold mb-5 flex items-center">
              <motion.span 
                className="w-2 h-2 bg-orange-500 rounded-full mr-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              Kontaktujte nás
            </h4>
            
            <ul className="space-y-4 text-sm">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-600/20 to-orange-500/10 
                  rounded-full mr-3 border border-orange-500/30 flex-shrink-0 mt-0.5">
                  <FaEnvelope className="text-orange-500 text-xs" />
                </div>
                <div>
                  <Link href="mailto:vooness@stream.cz" className="hover:text-white transition-colors duration-200 block">
                    vooness@stream.cz
                  </Link>
                  <span className="text-xs text-gray-400">Napište nám kdykoliv</span>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-600/20 to-orange-500/10 
                  rounded-full mr-3 border border-orange-500/30 flex-shrink-0 mt-0.5">
                  <FaPhone className="text-orange-500 text-xs" />
                </div>
                <div>
                  <Link href="tel:+420605707036" className="hover:text-white transition-colors duration-200 block">
                    +420 605 707 036
                  </Link>
                  <span className="text-xs text-gray-400">Po-Pá 9:00-17:00</span>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-600/20 to-orange-500/10 
                  rounded-full mr-3 border border-orange-500/30 flex-shrink-0 mt-0.5">
                  <FaIdCard className="text-orange-500 text-xs" />
                </div>
                <div>
                  <span className="block">IČO: 11834153</span>
                  <span className="text-xs text-gray-400">Oficiální registrace</span>
                </div>
              </motion.li>
            </ul>
            
            {/* Rychlý kontakt tlačítko */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link 
                href="/kontakt" 
                className="group relative inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-orange-600/20 to-orange-500/20 
                text-sm text-white border border-orange-500/30 rounded-lg overflow-hidden hover:border-orange-400 transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full group-hover:translate-x-full duration-700 ease-in-out opacity-0 group-hover:opacity-30
                  bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <span className="relative z-10">Rychlý kontakt</span>
              </Link>
            </motion.div>
            
            <div className="absolute -right-2 bottom-0 w-6 h-6 border-b-2 border-r-2 border-orange-500/20 rounded-br-md" />
          </motion.div>
        </div>

        {/* Divider - Futuristický */}
        <div className="relative mt-16 pt-8">
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), transparent)"
            }}
            initial={{ opacity: 0, width: "0%" }}
            animate={isInView ? { opacity: 1, width: "80%" } : {}}
            transition={{ duration: 1, delay: 1 }}
          />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-center text-xs text-gray-500 flex items-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <span className="font-mono mr-2 text-orange-500/40">[</span>
              &copy; {new Date().getFullYear()} Le Artist – Všechna práva vyhrazena.
              <span className="font-mono ml-2 text-orange-500/40">]</span>
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-2 mt-4 md:mt-0 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <span className="w-1 h-1 rounded-full bg-orange-500/50" />
              <span>Designed with passion</span>
              <span className="w-1 h-1 rounded-full bg-orange-500/50" />
              <span>Powered by creativity</span>
              <span className="w-1 h-1 rounded-full bg-orange-500/50" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Tech detail v pravém dolním rohu */}
      <motion.div
        className="absolute bottom-3 right-3 flex items-center text-[10px] text-gray-500 font-mono"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full bg-green-500/50 mr-2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>system.online</span>
      </motion.div>
    </footer>
  );
};

export default Footer;