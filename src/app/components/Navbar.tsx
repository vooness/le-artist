"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPaw, FaEnvelope, FaCog, FaCode, FaRocket } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // -----------------------------
  // listener pro scrollování
  // -----------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializace při mountu
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
  // Variants pro animace menu
  // -----------------------------
  const menuBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, when: "beforeChildren" }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, when: "afterChildren" }
    }
  };

  const menuContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    exit: {
      y: -20,
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
        <Link href="/" className="flex items-center relative">
          <motion.div
            className="absolute -inset-2 rounded-lg blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <Image
            src="/imgs/logoone.png"
            alt="Logo"
            width={180}
            height={50}
            className="object-contain relative z-10"
          />
        </Link>

        {/* Desktop Menu */}
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

        {/* Mobilní tlačítko */}
        <motion.button
          className="lg:hidden flex flex-col items-center justify-center relative focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaw className="text-orange-500 text-3xl relative z-10" />
          <motion.span
            className="text-white text-xs mt-1 font-mono relative z-10"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Menu
          </motion.span>
        </motion.button>
      </div>

      {/* Futuristické mobilní menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed inset-0 h-screen w-full z-[9999] bg-[#0f172a]/95 backdrop-blur-lg flex flex-col items-center justify-center overflow-hidden"
            variants={menuBackgroundVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Digitální mřížka na pozadí */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 
                    `linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
              {/* Světelné body */}
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute rounded-full bg-orange-500/40"
                  style={{
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    filter: 'blur(1px)',
                  }}
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [1, 1.3, 1],
                    y: [0, Math.random() * 10 - 5, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              {/* Diagonální linie */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-orange-500/15 to-transparent"
                  style={{
                    top: `${i * 20}%`,
                    left: '-50%',
                    transform: `rotate(${15 + i * 6}deg)`,
                  }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                />
              ))}
              {/* Mlhavé efekty */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.03) 0%, transparent 60%)',
                }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(249, 115, 22, 0.03) 0%, transparent 60%)',
                }}
                animate={{ opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Zavírací tlačítko */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center focus:outline-none z-50"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute w-8 h-0.5 bg-orange-500 rotate-45"></div>
                <div className="absolute w-8 h-0.5 bg-orange-500 -rotate-45"></div>
              </div>
            </motion.button>

            {/* Položky mobilního menu */}
            <motion.ul
              className="flex flex-col items-center space-y-12 text-xl relative z-10 mt-8 mb-32"
              variants={menuContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {[
                { title: "Služby a ceník", href: "/sluzby" },
                { title: "Portfolio", href: "/portfolio" },
                { title: "Postup tvorby webu", href: "/postup" },
                { title: "Kontakt", href: "/kontakt" }
              ].map((item, idx) => (
                <motion.li key={idx} variants={menuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative group"
                  >
                    <span className="relative block text-center">
                      <span className="text-white text-2xl font-medium tracking-wide group-hover:text-orange-400 transition-colors duration-300 relative z-10">
                        {item.title}
                      </span>
                      <motion.span
                        className="absolute -bottom-2 left-0 right-0 h-[2px] mx-auto bg-gradient-to-r from-orange-600 via-orange-500 to-transparent opacity-0 group-hover:opacity-100"
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute -inset-4 rounded-lg opacity-0 group-hover:opacity-100 bg-orange-500/5"
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Spodní kontaktní panel */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 pt-8 pb-4 w-full bg-gradient-to-t from-[#0f172a] to-transparent"
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(249, 115, 22, 0.3), transparent)"
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
