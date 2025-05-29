"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Award,
  Video,
  Palette,
  ShoppingCart,
  Monitor
} from "lucide-react";

// Import components from other files
import { 
  FuturisticBackground, 
  CourseTypeCard
} from "./onlinekurz1";

import {
  MSVPCoursesContent,
  BusinessCoursesContent,
  MSVPCoursesInfo,
  BusinessCoursesInfo,
  CoursesFAQ,
  CoursesCTA
} from "./onlinekurz2";

// Hlavní komponenta online kurzů
const OnlineCoursesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Futuristické animované pozadí */}
      <FuturisticBackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Tlačítko zpět na hlavní stránku */}
        <div className="mb-10">
          <Link 
            href="/sluzby" 
            className="inline-flex items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        {/* Hlavní nadpis */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Online Kurzy
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Specializované kurzy s důrazem na praktické dovednosti. Nabízím EU-sponzorované 
            MSVP kurzy i školení na míru pro firmy, které chtějí rozšířit dovednosti svých zaměstnanců.
          </p>
          
          {/* Hodinová sazba */}
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-orange-500 bg-orange-500/10 backdrop-blur-sm flex items-center">
              <Award className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-white font-medium">Akreditované kurzy s certifikátem</span>
            </div>
          </div>
          
          
        </div>
        
        {/* Přepínací záložky */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 relative ${
                activeTab === 'all' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Všechny kurzy
              {activeTab === 'all' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('msvp')}
              className={`px-6 py-3 relative ${
                activeTab === 'msvp' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              MSVP EU kurzy
              {activeTab === 'msvp' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 relative ${
                activeTab === 'business' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Firemní kurzy
              {activeTab === 'business' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>
        </div>
        
        {/* Obsah záložek */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* MSVP Kurzy */}
          {(activeTab === 'all' || activeTab === 'msvp') && (
            <MSVPCoursesContent isTab={activeTab === 'msvp'} />
          )}
          
          {/* Firemní kurzy */}
          {(activeTab === 'all' || activeTab === 'business') && (
            <BusinessCoursesContent isTab={activeTab === 'business'} />
          )}
        </motion.div>
        
        {/* Informace o MSVP kurzech */}
        <MSVPCoursesInfo />
        
        {/* Informace o firemních kurzech */}
        <BusinessCoursesInfo />
        
        {/* FAQ Sekce */}
        <CoursesFAQ />
        
        {/* Závěrečná CTA */}
        <CoursesCTA />
      </div>
    </section>
  );
};

export default OnlineCoursesPage;