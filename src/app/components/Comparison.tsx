"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, UserPlus, DollarSign, CheckCircle, Terminal, Zap } from 'lucide-react';

const Comparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 relative bg-[#0c1320] text-white overflow-hidden"
    >
      {/* Background pattern matching your existing style - hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <div
          className="pointer-events-none absolute inset-0 flex justify-center"
          style={{
            backgroundSize: "120px 120px",
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 45%)",
            WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 45%)",
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        />
        
        {/* Gradient orbs matching your style - desktop only */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header with your existing style - mobile optimized */}
        <div 
          className={`mb-12 sm:mb-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-orange-500/30 rounded-full bg-orange-500/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-2" />
            <span className="text-xs sm:text-sm font-mono text-orange-400">
              EXPERT VS AGENTURA
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            <span className="text-orange-500">1 expert</span>
            {' vs '}
            <span className="text-blue-400">celá agentura</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Agentura zaměstnává designéry, marketéry, manažery a vývojáře. 
            Za práci každého z nich musíte zaplatit. <span className="text-orange-500">Já zvládnu všechny tyto role sám</span> — 
            a vy platíte pouze jednoho člověka.
          </p>
        </div>
        
        {/* Simplified comparison cards - mobile optimized */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Expert Card */}
          <div className="relative group">
            {/* Glowing effect - reduced on mobile */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20 lg:opacity-30 group-hover:opacity-40 lg:group-hover:opacity-50 transition duration-300" />
            <div className="relative p-6 sm:p-8 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-3 sm:gap-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center sm:mr-4">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Spolupráce s expertem</h3>
                  <p className="text-green-400 font-semibold">27 000 Kč za projekt</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">Přímá komunikace bez prostředníků</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">Platíte pouze za odvedenou práci</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">Rychlé rozhodování a změny</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm sm:text-base">Osobní přístup k vašemu projektu</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Agency Card */}
          <div className="relative group">
            {/* Glowing effect - reduced on mobile */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-15 lg:opacity-20 group-hover:opacity-25 lg:group-hover:opacity-30 transition duration-300" />
            <div className="relative p-6 sm:p-8 bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-3 sm:gap-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center sm:mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Spolupráce s agenturou</h3>
                  <p className="text-blue-400 font-semibold">75 000 Kč za projekt</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 border-2 border-slate-500 rounded mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base">Komunikace přes manažery</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 border-2 border-slate-500 rounded mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base">Platíte za režii a kanceláře</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 border-2 border-slate-500 rounded mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base">Zdlouhavé schvalovací procesy</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 border-2 border-slate-500 rounded mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400 text-sm sm:text-base">Standardizovaný přístup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Savings highlight - mobile optimized */}
        <div 
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative inline-block max-w-full mx-4 sm:mx-0">
            {/* Reduced blur effect on mobile */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-500/15 sm:from-orange-500/20 to-yellow-500/15 sm:to-yellow-500/20 rounded-2xl blur-lg sm:blur-xl" />
            <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 sm:gap-0">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 sm:mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Ušetříte 48 000 Kč</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-300 mb-6">
                To je <span className="text-orange-500 font-bold">64% úspora</span> oproti agentuře
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-500">64%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Méně nákladů</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-green-400">2x</div>
                  <div className="text-xs sm:text-sm text-slate-400">Rychlejší dodání</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Osobní přístup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA - mobile optimized */}
        <div 
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="/kontakt" 
            className="group relative inline-flex items-center"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-200"></div>
            <div className="relative flex flex-col sm:flex-row items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#0c1320] rounded-full border border-orange-500/50 group-hover:border-orange-400 transition-colors">
              <div className="flex items-center">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 sm:mr-2" />
                <span className="text-white font-semibold text-sm sm:text-base ml-2 sm:ml-0">
                  Chci ušetřit 
                </span>
              </div>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mt-1 sm:mt-0 sm:ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </a>
          
          <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">
            Nezávazná konzultace zdarma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;