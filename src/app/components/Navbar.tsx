"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to change navbar background on desktop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable page scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { type: "tween", duration: 0.7 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-40 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo replaced with SVG logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/imgs/logoone.png"
            alt="Logo"
            width={220}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link
              href="/sluzby"
              className="relative group text-white transition duration-300"
            >
              Služby a ceník
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="relative group text-white transition duration-300"
            >
              Portfolio
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/postup"
              className="relative group text-white transition duration-300"
            >
              Postup tvorby webu
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/lektor"
              className="relative group text-white transition duration-300"
            >
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

        {/* Mobile Menu Button (paw icon with "Menu" label) */}
        <motion.button
          className="lg:hidden focus:outline-none flex flex-col items-center"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          whileTap={{ scale: 1.5 }}
        >
          <FaPaw className="text-white text-4xl" />
          <span className="text-white text-sm mt-1">Menu</span>
        </motion.button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            className="fixed top-0 left-0 w-screen h-screen z-[99999] bg-orange-600 text-white flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              whileTap={{ scale: 1.1 }}
            >
              &times;
            </motion.button>

            {/* Navigation Links */}
            <motion.ul
              className="flex flex-col items-center justify-center flex-grow space-y-6 text-xl font-medium mt-6 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <li>
                <Link
                  href="/sluzby"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  Služby a ceník
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/postup"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  Postup tvorby webu
                </Link>
              </li>
              <li>
                <Link
                  href="/lektor"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
                  Online kurzy
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition"
                >
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

            {/* Close Menu Button with Arrow Animation */}
            <div className="pb-6 flex justify-center">
              <motion.button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition mt-6 flex items-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                Zavřít menu
                <motion.div
                  className="w-4 h-4 text-white rounded-full flex items-center justify-center"
                  initial={{ x: -5 }}
                  animate={{ x: 5 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  →
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
