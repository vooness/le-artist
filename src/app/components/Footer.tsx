"use client";

import React from "react";
// Odstranění importu sociálních ikon, protože je již nebudeme používat
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">O mně</h3>
          <p>
            Jsem vášnivý designér a vývojář zaměřený na vytváření výjimečných digitálních zážitků.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">Rychlé odkazy</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-300">
                Domů
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition-colors duration-300">
                Projekty
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-300">
                Služby
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-300">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">Služby</h3>
          <ul className="space-y-2">
            <li>
              <a href="#web-design" className="hover:text-white transition-colors duration-300">
                Webový design
              </a>
            </li>
            <li>
              <a href="#graphic-design" className="hover:text-white transition-colors duration-300">
                Grafický design
              </a>
            </li>
            <li>
              <a href="#video-editing" className="hover:text-white transition-colors duration-300">
                Editace videí
              </a>
            </li>
            <li>
              <a href="#seo" className="hover:text-white transition-colors duration-300">
                SEO optimalizace
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">Kontaktujte nás</h3>
          <p>Email: vooness@stream.cz</p>
          <p>Telefon: +420 605 707 036</p>
          {/* Přidání jména společnosti a IČO */}
          <p className="mt-4">Název společnosti: Le Artist</p>
          <p>IČO: 11834153</p>
          <p>Jméno: Marek Frňka</p>
          {/* Odstranění sociálních ikon */}
          {/* 
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12  pt-6 text-center text-orange-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Le Artist - WEB - GRAFIKA - VIDEO. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
