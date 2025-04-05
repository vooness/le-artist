"use client";

import React from "react";
import Link from "next/link";

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
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Domů
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition-colors duration-300">
                Projekty
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="hover:text-white transition-colors duration-300">
                Služby
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white transition-colors duration-300">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">Služby</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sluzby" className="hover:text-white transition-colors duration-300">
                Webový design
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="hover:text-white transition-colors duration-300">
                Grafický design
              </Link>
            </li>
            <li>
              <Link href="/sluzby" className="hover:text-white transition-colors duration-300">
                Editace videí
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-4">Kontaktujte nás</h3>
          <p>Email: vooness@stream.cz</p>
          <p>Telefon: +420 605 707 036</p>
          <p>IČO: 11834153</p>
          <p>Jméno: Marek Frňka</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 text-center text-orange-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Le Artist - WEB - GRAFIKA - VIDEO. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
