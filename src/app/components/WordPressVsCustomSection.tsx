"use client";

import React from "react";
import { motion } from "framer-motion";

const WordPressVsCustomSection = () => {
  const painStories = [
    {
      title: "Zákazník přijde na váš web",
      problem: "Čeká 5 sekund na načtení → odchází k konkurenci",
      solution: "Načte se za 2 sekundy → zůstává a kupuje",
      loss: "Ztracený obchod za 2 500 Kč",
      gain: "Získaný zákazník",
      icon: "🛒",
      emoji: "😤 → 😊"
    },
    {
      title: "Google rozhoduje o pozici",
      problem: "Pomalý web → 6. místo → málo návštěvníků",
      solution: "Rychlý web → 2.-3. místo → více zákazníků",
      loss: "Neviditelnost = méně zákazníků",
      gain: "+50% více návštěvníků",
      icon: "🎯",
      emoji: "😞 → 🎉"
    },
    {
      title: "Hackeri útočí",
      problem: "WordPress napadený → 2 dny offline → ztracená důvěra",
      solution: "Moderní zabezpečení → minimální riziko → spolehlivý web",
      loss: "Ztráta: klienti + peníze + nervy",
      gain: "Klidnější spánek",
      icon: "🛡️",
      emoji: "😰 → 😌"
    }
  ];

  const realImpactNumbers = [
    {
      metric: "Rychlost načítání",
      oldValue: "4.8 sekundy",
      newValue: "2.1 sekundy", 
      fact: "Za každou sekundu tratíte 7% návštěvníků",
      impact: "= 19% více prodejů",
      visualization: "🐌 → 🚀"
    },
    {
      metric: "Google pozice",
      oldValue: "4.-8. místo",
      newValue: "2.-4. místo",
      fact: "První 3 místa mají 75% všech kliků",
      impact: "= 50% více zákazníků",
      visualization: "📉 → 📈"
    },
    {
      metric: "SEO optimalizace",
      oldValue: "Základní nebo žádná",
      newValue: "Kompletní SEO",
      fact: "Kvalitní SEO = 5x více návštěvníků z Google",
      impact: "= 400% více zákazníků",
      visualization: "🔍 → 🎯"
    },
    {
      metric: "Konverzní poměr",
      oldValue: "1.8% návštěvníků koupí",
      newValue: "2.7% návštěvníků koupí",
      fact: "Rychlý web = větší důvěra",
      impact: "= 50% více prodejů",
      visualization: "💸 → 💰"
    }
  ];

  const whatItActuallyMeans = [
    {
      title: "Web jako McDonald's",
      comparison: "Rychlá obsluha vs. pomalá restaurace",
      description: "Zákazníci chtějí vše hned. Čekání = odchod ke konkurenci.",
      benefit: "Spokojení zákazníci se vrací",
      icon: "🍔"
    },
    {
      title: "SEO jako reklama v novinách",
      comparison: "První strana vs. poslední strana",
      description: "Google je jako noviny. Firmy na 1. stránce vidí všichni.",
      benefit: "Více lidí vás najde",
      icon: "📰"
    },
    {
      title: "Web jako trezor",
      comparison: "Velmi bezpečný vs. zranitelný",
      description: "Moderní zabezpečení snižuje riziko. WordPress má více bezpečnostních děr.",
      benefit: "Méně problémů s bezpečností",
      icon: "🏦"
    }
  ];

  const costOfWaiting = [
    {
      period: "Každý týden",
      loss: "2-3 zákazníci odejdou kvůli pomalému webu",
      money: "-10 000 Kč měsíčně"
    },
    {
      period: "Každý měsíc", 
      loss: "Google vás posouvá níž → méně viditelnosti",
      money: "-40 000 Kč/rok"
    },
    {
      period: "Každý rok",
      loss: "Konkurence převezme vaše zákazníky",
      money: "-300 000 Kč/rok"
    }
  ];

  return (
    <section className="relative bg-[#0f172a] text-white py-12 md:py-16 overflow-hidden">
      {/* Background */}
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
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Pomalý web vás </span>
            <span className="text-red-400">stojí zákazníky</span>
            <span className="text-white"> každý den</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Víte, že váš web je pomalý a zákazníci vás špatně najdou na Google. 
            Ale víte, <span className="text-orange-400 font-semibold">kolik vás to stojí každý týden</span>?
          </p>
        </motion.div>

        {/* Pain Stories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              3 situace, které se dějí denně
            </h3>
          </div>
          
          <div className="space-y-6">
            {painStories.map((story, index) => (
              <motion.div
                key={index}
                className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl">{story.icon}</div>
                  <h4 className="text-lg md:text-xl font-bold text-white flex-1">{story.title}</h4>
                  <div className="text-2xl">{story.emoji}</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <div className="text-red-400 font-bold mb-2 text-sm">😞 POMALÝ WEB</div>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">{story.problem}</p>
                    <div className="text-red-400 font-bold text-sm">💸 {story.loss}</div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <div className="text-green-400 font-bold mb-2 text-sm">😊 RYCHLÝ WEB</div>
                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">{story.solution}</p>
                    <div className="text-green-400 font-bold text-sm">💰 {story.gain}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real Impact Numbers */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Reálná čísla z praxe
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realImpactNumbers.map((number, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-white text-base">{number.metric}</h4>
                  <div className="text-2xl">{number.visualization}</div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Před:</span>
                    <span className="text-red-400 font-bold">{number.oldValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Po:</span>
                    <span className="text-green-400 font-bold">{number.newValue}</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-3">{number.fact}</div>
                <div className="text-orange-400 font-bold text-sm bg-orange-500/20 px-3 py-1 rounded-md inline-block">
                  {number.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Explanation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              🔍 Proč je SEO důležité?
            </h3>
          </div>
          
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">⚠️</div>
              <h4 className="text-xl font-bold text-white mb-2">
                Rozdíl v pozicích na Google
              </h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-red-500/20 border border-red-500/40">
                <div className="text-3xl mb-2">📉</div>
                <div className="text-red-400 font-bold mb-1">Pozice 6-10</div>
                <div className="text-sm text-gray-300">5% lidí klikne</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-orange-500/20 border border-orange-500/40">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-orange-400 font-bold mb-1">Pozice 4-5</div>
                <div className="text-sm text-gray-300">15% lidí klikne</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-500/20 border border-green-500/40">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-green-400 font-bold mb-1">Pozice 1-3</div>
                <div className="text-sm text-gray-300">75% lidí klikne</div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-red-400 font-bold text-lg mb-2">
                Rozdíl mezi 8. a 2. místem = 70% více zákazníků
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* What It Means */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Co to znamená v praxi?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatItActuallyMeans.map((analogy, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-orange-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{analogy.icon}</div>
                  <h4 className="text-lg font-bold text-white">{analogy.title}</h4>
                </div>
                
                <div className="text-sm text-orange-400 font-semibold mb-3 text-center">{analogy.comparison}</div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed text-center">{analogy.description}</p>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40">
                    <span className="text-xs font-semibold text-green-400">
                      ✓ {analogy.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost of Waiting */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              💸 Cena čekání
            </h3>
            <p className="text-gray-400 text-sm">
              Kolik vás stojí každý den s pomalým webem
            </p>
          </div>
          
          <div className="space-y-4">
            {costOfWaiting.map((cost, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-red-400 font-bold mb-1">{cost.period}:</div>
                      <div className="text-gray-300 text-sm">{cost.loss}</div>
                    </div>
                  </div>
                  <div className="w-32 h-12 bg-red-500/20 rounded-lg border border-red-500/40 flex items-center justify-center">
                    <div className="text-red-400 font-bold text-sm text-center">
                      {cost.money}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-red-600/20 to-red-700/20 border border-red-500/40 text-center">
            <div className="text-red-400 font-bold text-lg mb-2">
              📈 Celková ztráta za rok: až 350 000 Kč
            </div>
            <div className="text-gray-300 text-sm">
              Rychlé řešení = návrat investice za 2-3 měsíce
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-500/30">
            <div className="text-4xl mb-4">⏰</div>
            <h4 className="text-2xl font-bold text-white mb-4">
              Každý měsíc rozhodujete
            </h4>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Buď budete dál ztrácet zákazníky kvůli pomalému webu, 
              nebo si <span className="text-orange-400 font-semibold">vylepšíte rychlost a SEO</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <div className="text-red-400 font-bold mb-2">❌ Pokud nic neuděláte:</div>
                <div className="text-sm text-gray-300">Budete dál tratit zákazníky</div>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="text-green-400 font-bold mb-2">✅ S rychlým webem:</div>
                <div className="text-sm text-gray-300">Získáte zpět ztracené příležitosti</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WordPressVsCustomSection;