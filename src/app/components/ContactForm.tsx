"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"

const ContactForm: React.FC = () => {
  return (
    <section
      id="kontakt"
      className="relative py-24   bg-[#0F172A] text-white overflow-hidden "
    >
      {/* Dekorativní animovaný gradient */}
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

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Obrázek osoby */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/3 flex justify-end lg:justify-end mb-0 relative lg:mt-[30px]"
        >
          <img
            src="/imgs/corner.png" // Upravte cestu k obrázku dle potřeby
            alt="Osoba koukající na formulář"
            className="w-64 h-auto lg:w-80 transform  lg:rotate-0"
          />
        </motion.div>

        {/* Kontaktní formulář */}
        <div className="w-full lg:w-2/3 ">
          {/* Nadpis sekce */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gray-800 rounded-lg p-8 shadow-lg space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pole pro jméno */}
              <div>
                <label className="block text-gray-300 mb-2">Jméno</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Vaše jméno"
                  required
                />
              </div>
              {/* Pole pro email */}
              <div>
                <label className="block text-gray-300 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Váš e-mail"
                  required
                />
              </div>
            </div>
            {/* Pole pro předmět */}
            <div>
              <label className="block text-gray-300 mb-2">Předmět</label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Předmět"
                required
              />
            </div>
            {/* Pole pro zprávu */}
            <div>
              <label className="block text-gray-300 mb-2">Zpráva</label>
              <textarea
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
      </div>
    </section>
  )
}

export default ContactForm
