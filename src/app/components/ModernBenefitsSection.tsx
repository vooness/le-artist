"use client";

import React from "react";
import { motion } from "framer-motion";

const ModernBenefitsSection = () => {
  const problems = [
    {
      stat: "73%",
      problem: "webů ztrácí zákazníky kvůli pomalému načítání",
      impact: "Každá sekunda = -7% konverzí"
    },
    {
      stat: "64%",
      problem: "návštěvníků odejde bez akce",
      impact: "Špatný UX = ztracené peníze"
    },
    {
      stat: "89%",
      problem: "webů není optimalizováno pro SEO",
      impact: "Neviditelnost = nulové příjmy"
    }
  ];

  const solutions = [
    {
      title: "Rychlý web",
      desc: "Performance pod 2 sekundy garantuji",
      icon: "⚡",
      result: "+25% konverzí"
    },
    {
      title: "Perfektní UX",
      desc: "Design, který vede k akci",
      icon: "🎯",
      result: "+40% prodejů"
    },
    {
      title: "SEO optimalizace",
      desc: "Top pozice ve vyhledávání",
      icon: "🚀",
      result: "+3x traffic"
    }
  ];

  const results = [
    { client: "E-shop s oblečením", metric: "+156%", desc: "růst prodejů za 3 měsíce" },
    { client: "B2B konzultace", metric: "+89%", desc: "více kvalitních leads" },
    { client: "SaaS aplikace", metric: "+234%", desc: "organický traffic za půl roku" }
  ];

  return (
    <section className="relative bg-[#0f172a] text-white py-12 md:py-16 overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Compact Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-orange-500">Proč váš web neprodává</span> <span className="text-white">a jak to změnit</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Reálné problémy českých webů a jejich <span className="text-orange-400 font-semibold">okamžitá řešení</span>
          </p>
        </motion.div>

        {/* Problems Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-b from-red-500/10 to-red-600/5 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">
                {problem.stat}
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-2 font-medium">
                {problem.problem}
              </p>
              <p className="text-xs md:text-sm text-red-300">
                {problem.impact}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow Divider */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-3xl md:text-4xl text-orange-500 mb-3">↓</div>
          <p className="text-sm md:text-base text-gray-400 font-semibold">
            ŘEŠENÍ
          </p>
        </motion.div>

        {/* Solutions Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-b from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3">
                {solution.desc}
              </p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40">
                <span className="text-xs md:text-sm text-green-400 font-semibold">
                  {solution.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Section */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Výsledky z praxe
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Skutečné výsledky od klientů z posledních 6 měsíců
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {result.metric}
                </div>
                <p className="text-sm md:text-base text-white font-medium mb-1">
                  {result.desc}
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  {result.client}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-500/30 backdrop-blur-sm">
            
            {/* Scarcity Notice */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/40 mb-6">
              <span className="text-orange-300 font-semibold text-xs md:text-sm">
                ⚠️ Pouze 2 volná místa tento měsíc
              </span>
            </div>

            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-4">
              Získejte zdarma analýzu vašeho webu
            </h4>
            
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
              Během 48 hodin dostanete konkrétní doporučení + 3 rychlé úpravy pro okamžité zlepšení konverzí
            </p>
            
            <motion.button
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg font-bold text-white text-sm md:text-base transition-all duration-300 shadow-xl hover:shadow-orange-500/25 border border-orange-400/50 hover:border-orange-300 mb-4 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Chci analýzu zdarma</span>
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            <p className="text-xs md:text-sm text-gray-500">
              ✓ Analýza za 48h  ✓ Konkrétní doporučení  ✓ Bez závazků
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernBenefitsSection;