"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPaw, FaEnvelope, FaCog, FaCode, FaUser, FaQuestionCircle, FaTimes, FaIdCard, FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Optimalizovaný listener pro scrollování pomocí Intersection Observer
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    if (!sentinelRef.current) {
      const sentinel = document.createElement('div');
      sentinel.style.position = 'absolute';
      sentinel.style.top = '0';
      sentinel.style.height = '10px';
      sentinel.style.width = '100%';
      sentinel.style.pointerEvents = 'none';
      sentinel.style.zIndex = '-1';
      document.body.prepend(sentinel);
      sentinelRef.current = sentinel;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    
    return () => {
      observer.disconnect();
      if (sentinelRef.current) {
        sentinelRef.current.remove();
        sentinelRef.current = null;
      }
    };
  }, []);

  // Vypnutí scrollu při otevřeném menu
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Animační varianty pro hamburger menu
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      scale: 1,
    },
    open: {
      rotate: 180,
      scale: 0.8,
    }
  };

  // Menu položky s ikonami
  const menuItems = [
    {
      title: "Služby a ceník",
      href: "/sluzby",
      icon: <FaCog className="text-orange-500" />
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: <FaCode className="text-orange-500" />
    },
    {
      title: "O mně",
      href: "/o-mne",
      icon: <FaUser className="text-orange-500" />
    },
    {
      title: "FAQ",
      href: "/FAQ",
      icon: <FaQuestionCircle className="text-orange-500" />
    }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f172a]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/logoone.png"
              alt="Logo"
              width={180}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="group relative text-white font-medium hover:text-orange-400 transition flex items-center"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  {item.title}
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Kontaktní tlačítko */}
          <Link
            href="/kontakt"
            className="hidden lg:flex items-center px-5 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-medium relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
            </span>
            <FaEnvelope className="mr-2 relative z-10" />
            <span className="relative z-10">Kontaktujte mě</span>
          </Link>

          {/* Mobilní hamburger tlačítko */}
          <motion.button
            className="lg:hidden flex flex-col items-center justify-center relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            variants={hamburgerVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.2 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <FaPaw className="text-orange-500 text-2xl" />
            <span className="text-white text-xs mt-1 font-mono">
              {isOpen ? "Zavřít" : "Menu"}
            </span>
          </motion.button>
        </div>
      </nav>

      {/* Animovaný overlay pro zavření menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.2,
              ease: "easeOut"
            }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Animované slide-in drawer menu z pravé strany */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-[#0f172a]/95 backdrop-blur-md z-40 lg:hidden shadow-2xl border-l border-orange-500/20"
            initial={{ 
              x: "100%",
              opacity: 0
            }}
            animate={{ 
              x: 0,
              opacity: 1
            }}
            exit={{ 
              x: "100%",
              opacity: 0
            }}
            transition={{ 
              type: "spring", 
              damping: 25,
              stiffness: 300,
              duration: 0.3,
              opacity: { duration: 0.2 }
            }}
          >
            {/* Animovaný header s close tlačítkem */}
            <motion.div 
              className="flex items-center justify-between p-6 border-b border-orange-500/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <h2 className="text-white font-semibold text-lg">Menu</h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-orange-500 hover:text-orange-400 transition-colors"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <FaTimes className="text-xl" />
              </motion.button>
            </motion.div>

            {/* Animované menu položky */}
            <div className="pt-4">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.15 + (idx * 0.08),
                    duration: 0.4,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-6 py-4 text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-200 border-b border-gray-800/30 group"
                  >
                    <motion.span 
                      className="mr-4 text-xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">{item.title}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Kontakt v menu s animací */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: 0.15 + (menuItems.length * 0.08),
                  duration: 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
              >
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-6 py-4 text-white hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-200 border-b border-gray-800/30 group"
                >
                  <motion.span 
                    className="mr-4 text-xl"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <FaEnvelope className="text-orange-500" />
                  </motion.span>
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">Kontakt</span>
                </Link>
              </motion.div>
            </div>

            {/* Animovaný spodní kontaktní panel */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0f172a] to-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 150,
                damping: 20
              }}
            >
              <div className="space-y-3">
                <motion.div 
                  className="text-center mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <h3 className="text-white font-medium text-sm">
                    Rychlý kontakt
                  </h3>
                </motion.div>
                
                {/* Jméno */}
                <motion.div
                  className="flex items-center text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3 border border-orange-500/30">
                    <FaUserCircle className="w-4 h-4 text-orange-500" />
                  </div>
                  <span className="font-medium text-white">Marek Frňka</span>
                </motion.div>

                {/* IČO */}
                <motion.div
                  className="flex items-center text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3 border border-orange-500/30">
                    <FaIdCard className="w-4 h-4 text-orange-500" />
                  </div>
                  <span>IČO: 11834153</span>
                </motion.div>
                
                <motion.a
                  href="tel:+420605707036"
                  className="flex items-center text-sm text-gray-300 hover:text-orange-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3 border border-orange-500/30">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>+420 605 707 036</span>
                </motion.a>
                
                <motion.a
                  href="mailto:dotazy.le.artist@gmail.com"
                  className="flex items-center text-sm text-gray-300 hover:text-orange-400 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center mr-3 border border-orange-500/30">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="break-all">dotazy.le.artist@gmail.com</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;