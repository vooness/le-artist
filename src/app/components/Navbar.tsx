"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPaw, FaEnvelope, FaCog, FaCode, FaRocket } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // -----------------------------
  // Optimalizovaný listener pro scrollování pomocí Intersection Observer
  // -----------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Vytvoření sentinel elementu, pokud ještě neexistuje
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
    
    // Použití Intersection Observer místo scroll event listeneru
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

  // -----------------------------
  // vypnutí scrollu, když je menu otevřené
  // -----------------------------
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // -----------------------------
  // Minimální varianta pouze pro animaci zobrazení/skrytí menu
  // -----------------------------
  const menuBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
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

        {/* Desktop Menu - beze změny */}
        <ul className="hidden lg:flex items-center gap-8">
          {[
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
              title: "Postup tvorby webu",
              href: "/postup",
              icon: <FaRocket className="text-orange-500" />
            }
          ].map((item, idx) => (
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

        {/* Kontaktní tlačítko - beze změny pro desktop */}
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

        {/* Mobilní tlačítko - zjednodušeno */}
        <button
          className="lg:hidden flex flex-col items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FaPaw className="text-orange-500 text-3xl" />
          <span className="text-white text-xs mt-1 font-mono">Menu</span>
        </button>
      </div>

      {/* Jednoduché mobilní menu bez animací na pozadí */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 h-screen w-full z-[9999] bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden"
            variants={menuBackgroundVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            {/* Zavírací tlačítko */}
            <button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center focus:outline-none z-50"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-8 h-0.5 bg-orange-500 rotate-45"></div>
                <div className="absolute w-8 h-0.5 bg-orange-500 -rotate-45"></div>
              </div>
            </button>

            {/* Položky mobilního menu */}
            <ul
              className="flex flex-col items-center space-y-12 text-xl relative z-10 mt-8 mb-32"
            >
              {[
                { title: "Služby a ceník", href: "/sluzby" },
                { title: "Portfolio", href: "/portfolio" },
                { title: "Postup tvorby webu", href: "/postup" },
                { title: "Kontakt", href: "/kontakt" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative group"
                  >
                    <span className="text-white text-2xl font-medium tracking-wide group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Zjednodušený spodní kontaktní panel - bez animací */}
            <div
              className="absolute bottom-0 left-0 right-0 pt-8 pb-4 w-full bg-[#0f172a]"
            >
              <div
                className="absolute top-0 left-0 w-full h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(249, 115, 22, 0.3), transparent)"
                }}
              />
              <div className="text-center mb-5">
                <h3 className="text-white text-lg font-medium">
                  Neváhejte se ozvat!
                </h3>
                <p className="text-gray-300 text-sm">
                  Webovky, grafika a videa k vašim službám!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3">
                <a
                  href="tel:+420605707036"
                  className="flex items-center transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent flex items-center justify-center mr-3 border border-orange-500/30">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium">
                    +420 605 707 036
                  </span>
                </a>
                <a
                  href="mailto:dotazy.le.artist@gmail.com"
                  className="flex items-center transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent flex items-center justify-center mr-3 border border-orange-500/30">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-sm">
                    dotazy.le.artist@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Odstraněny CSS animace, které již nejsou potřeba */}
    </nav>
  );
};

export default Navbar;