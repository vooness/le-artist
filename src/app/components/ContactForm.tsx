"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

const ContactForm: React.FC = () => {
  return (
    <section
      id="kontakt"
      className="relative py-24 bg-[#0F172A] text-white flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-4xl w-full px-6 lg:px-8 mt-12">
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

          {/* Obrázek pod nadpisem */}
          <div className="mt-8 flex justify-center">
            <Image
              src="/imgs/kontakt.svg" // cesta k obrázku
              alt="Ilustrace kontaktu"
              width={400}
              height={300}
              className="rounded-lg object-contain"
            />
          </div>
        </motion.div>

        {/* Kontaktní informace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-800 rounded-lg p-8 shadow-lg mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Kontaktní informace
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-400">Email: vooness@stream.cz</p>
            <p className="text-gray-400">Telefon: +420 605 707 036</p>
            <p className="text-gray-400">IČO: 11834153</p>
            <p className="text-gray-400">Jméno: Marek Frňka</p>
          </div>
        </motion.div>

        {/* Formulář */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-800 rounded-lg p-8 shadow-lg space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
