"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [status, setStatus] = useState(true); // Online/Offline status
  const [language, setLanguage] = useState("CZ");

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 12 } },
    exit: { y: "-100%", opacity: 0, transition: { type: "spring", stiffness: 80, damping: 12 } },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-40 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo using Next.js Link */}
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text px-3 py-1"
        >
          Le Artist
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link href="/sluzby" className="relative group text-white transition duration-300">
              Služby a ceník
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="relative group text-white transition duration-300">
              Portfolio
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/postup" className="relative group text-white transition duration-300">
              Postup tvorby webu
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/lektor" className="relative group text-white transition duration-300">
              Online kurzy
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <Link
          href="/kontakt"
          className="hidden lg:block px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition"
        >
          Kontaktujte mě
        </Link>

        {/* Mobile Menu Button (Hamburger → X) */}
        <motion.button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 1.5 }}
        >
          <motion.div
            className="text-orange-500 text-4xl"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isOpen ? "×" : "☰"}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="left-0 w-full h-full z-[99999] bg-orange-600 text-white flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Navigation Links */}
            <motion.ul
              className="flex flex-col items-center justify-center flex-grow space-y-6 text-xl font-medium mt-6 overflow-y-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <li>
                <Link href="/sluzby" onClick={() => setIsOpen(false)} className="hover:text-black transition">
                  Služby a ceník
                </Link>
              </li>
              <li>
                <Link href="/portfolio" onClick={() => setIsOpen(false)} className="hover:text-black transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/postup" onClick={() => setIsOpen(false)} className="hover:text-black transition">
                  Postup tvorby webu
                </Link>
              </li>
              <li>
                <Link href="/lektor" onClick={() => setIsOpen(false)} className="hover:text-black transition">
                  Online kurzy
                </Link>
              </li>
              <li>
                <Link href="/kontakt" onClick={() => setIsOpen(false)} className="hover:text-black transition">
                  Kontakt
                </Link>
              </li>
            </motion.ul>

            {/* Contact Info */}
            <div className="bg-orange-600 py-6 text-center text-white">
              <p className="text-lg font-medium">Neváhejte se ozvat!</p>
              <p className="text-sm">Webovky, grafika a videa k vaším službám!</p>
              <p className="mt-4">📞 +420 605 707 036</p>
              <p className="mt-1">✉️ dotazy.le.artist@gmail.com</p>
              <p className="mt-1">Marek Frňka</p>
            </div>

            {/* Close Button at Bottom */}
            <div className="pb-6 flex justify-center">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition mt-6 flex items-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                Zavřít menu
                <motion.div
                  className="w-4 h-4 text-white rounded-full flex items-center justify-center"
                  initial={{ x: 5 }}
                  animate={{ x: -5 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  ←
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
