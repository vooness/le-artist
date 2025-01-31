"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm: React.FC = () => {
  return (
    <section
      id="kontakt"
      className="relative py-24 bg-[#0F172A] text-white flex items-center justify-center overflow-hidden"
    >
      {/* Odstraněný Dekorativní Animovaný Gradient */}
      {/* 
      <motion.div
        className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full filter blur-2xl"
        animate={{ x: [100, -100], y: [0, -50] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      */}

      <div className="max-w-2xl w-full px-6 lg:px-8">
        {/* Nadpis sekce */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Kontaktujte <span className="text-orange-500">mě</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Máte nápad na projekt? Spojme se a vytvořme něco úžasného společně.
          </p>
        </motion.div>

        {/* Kontaktní formulář */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 shadow-lg space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pole pro jméno */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Jméno
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Vaše jméno"
                required
              />
            </div>
            {/* Pole pro email */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Váš e-mail"
                required
              />
            </div>
          </div>
          {/* Pole pro předmět */}
          <div>
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Předmět
            </label>
            <input
              type="text"
              id="subject"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Předmět"
              required
            />
          </div>
          {/* Pole pro zprávu */}
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Zpráva
            </label>
            <textarea
              id="message"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Vaše zpráva"
              required
            ></textarea>
          </div>
          {/* Tlačítko odeslání */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Odeslat zprávu <FaPaperPlane className="ml-2" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
