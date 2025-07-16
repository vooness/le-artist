"use client";

import React from "react";
import { motion } from "framer-motion";

const WordPressVsCustomSection = () => {
  const painStories = [
    {
      title: "Zákazník přijde na váš web",
      problem: "Čeká 5 sekund na načtení → odchází k rychlejší konkurenci",
      solution: "Načte se za 2 sekundy → zůstává a prozkoumává nabídku",
      loss: "Ztracený obchod za 2 500 Kč",
      gain: "Získaný zákazník",
      icon: "🛒",
      emoji: "😤 → 😊"
    },
    {
      title: "Google rozhoduje o pozici",
      problem: "Pomalý web → 6. místo ve výsledcích → málo návštěvníků",
      solution: "Rychlý web → 2.-3. místo → více zákazníků vás najde",
      loss: "Neviditelnost = méně zákazníků",
      gain: "+50% více návštěvníků",
      icon: "🎯",
      emoji: "😞 → 🎉"
    },
    {
      title: "Hackeri útočí",
      problem: "WordPress napadený → 2 dny offline → ztracená důvěra",
      solution: "Moderní zabezpečení → minimální riziko → web běží spolehlivě",
      loss: "Ztráta: klienti + peníze + nervy",
      gain: "Klidnější spánek",
      icon: "🛡️",
      emoji: "😰 → 😌"
    }
  ];

  const beforeAfterFlow = [
    {
      title: "Zákazník hledá váš produkt",
      steps: [
        { old: "Google dlouho načítá výsledky", new: "Okamžité zobrazení", time: "3s → 1s" },
        { old: "Váš web se pomalu otevírá", new: "Web se načte rychle", time: "5s → 2s" },
        { old: "Hledá tlačítko 'Koupit'", new: "Tlačítko je jasně vidět", time: "20s → 5s" },
        { old: "Formulář nefunguje správně", new: "Jednoduchý checkout", time: "Vzdává → Hotovo" }
      ],
      result: { old: "❌ Žádný prodej", new: "✅ Spokojený zákazník", money: "0 Kč vs 3 500 Kč" }
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
      fact: "První 3 místa mají 60% všech kliků",
      impact: "= 40-60% více zákazníků",
      visualization: "📉 → 📈"
    },
    {
      metric: "Bezpečnostní riziko",
      oldValue: "30% šance útoku ročně",
      newValue: "< 5% šance útoku",
      fact: "1 útok = ztráta 15-80k Kč",
      impact: "= minimální starosti",
      visualization: "🔓 → 🔒"
    },
    {
      metric: "Konverzní poměr",
      oldValue: "1.8% návštěvníků koupí",
      newValue: "2.7% návštěvníků koupí",
      fact: "Rychlý web = víc důvěry",
      impact: "= o 50% více prodejů",
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
      title: "Web jako autopilot",
      comparison: "Řídí se sám vs. stále dohlížíte",
      description: "Moderní web se stará sám o sebe. Méně nočních hovorů 'web nefunguje'.",
      benefit: "Méně stresu s technickými problémy",
      icon: "🚗"
    },
    {
      title: "Web jako magnet",
      comparison: "Přitahuje zákazníky vs. je hůře viditelný",
      description: "Google preferuje rychlé weby. Dává je na lepší pozice.",
      impact: "= 40-60% více zákazníků",
      benefit: "Více zákazníků vás najde",
      icon: "🧲"
    },
    {
      title: "Web jako trezor",
      comparison: "Velmi bezpečný vs. zranitelný",
      description: "Moderní zabezpečení snižuje riziko. WordPress má více bezpečnostních děr.",
      benefit: "Méně bezpečnostních problémů",
      icon: "🏦"
    }
  ];

  const costOfWaiting = [
    {
      period: "Každý týden",
      loss: "2-3 zákazníci odejdou kvůli pomalému načítání",
      money: "-8 000 - 12 000 Kč měsíčně"
    },
    {
      period: "Každý měsíc", 
      loss: "Google vás posunuje níž kvůli rychlosti",
      money: "-20% viditelnosti = -30 000 Kč/rok"
    },
    {
      period: "Každý rok",
      loss: "Rychlejší konkurence vás předbíhá",
      money: "-15-30% tržeb = -100-300k Kč"
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
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            <span className="text-white">Každý týden </span><span className="text-red-400">tratíte zákazníky</span><span className="text-white"> kvůli pomalému webu</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto">
            Víte, že váš web je pomalý. Ale víte, <span className="text-orange-400 font-semibold">kolik vás to stojí každý týden</span>? 
            A že existuje řešení, které problém výrazně zlepší?
          </p>
        </motion.div>

        {/* Pain Stories */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
              3 situace, které se dějí pravidelně
            </h3>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {painStories.map((story, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-2xl md:text-3xl">{story.icon}</div>
                  <h4 className="text-base md:text-xl font-bold text-white flex-1">{story.title}</h4>
                  <div className="text-xl md:text-2xl">{story.emoji}</div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-red-500/10 border border-red-500/30">
                    <div className="text-red-400 font-bold mb-2 text-xs md:text-sm">😞 POMALÝ WEB</div>
                    <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3 leading-relaxed">{story.problem}</p>
                    <div className="text-red-400 font-bold text-xs">💸 {story.loss}</div>
                  </div>
                  
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-green-500/10 border border-green-500/30">
                    <div className="text-green-400 font-bold mb-2 text-xs md:text-sm">😊 RYCHLÝ WEB</div>
                    <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3 leading-relaxed">{story.solution}</p>
                    <div className="text-green-400 font-bold text-xs">💰 {story.gain}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Journey */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Sledujte cestu zákazníka
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Pomalý vs rychlý web - krok za krokem
            </p>
          </div>
          
          {beforeAfterFlow.map((flow, flowIndex) => (
            <motion.div
              key={flowIndex}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-bold text-white mb-6 text-center">
                📱 {flow.title}
              </h4>
              
              <div className="space-y-4 mb-6">
                {flow.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="text-xs text-red-300 mb-1">PŘED:</div>
                      <div className="text-sm text-red-400">{step.old}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-sm bg-orange-500/20 px-3 py-1 rounded-full inline-block">
                        {step.time}
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="text-xs text-green-300 mb-1">PO:</div>
                      <div className="text-sm text-green-400">{step.new}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-600">
                <div className="text-center">
                  <div className="text-red-400 font-bold">{flow.result.old}</div>
                </div>
                <div className="text-center">
                  <div className="text-orange-400 font-bold text-lg">{flow.result.money}</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-bold">{flow.result.new}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Real Impact Numbers */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">
              Reálná čísla z praxe
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {realImpactNumbers.map((number, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <h4 className="font-bold text-white text-sm md:text-base">{number.metric}</h4>
                  <div className="text-xl md:text-2xl">{number.visualization}</div>
                </div>
                
                <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Typicky před:</span>
                    <span className="text-red-400 font-bold text-sm">{number.oldValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Po optimalizaci:</span>
                    <span className="text-green-400 font-bold text-sm">{number.newValue}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2 leading-relaxed">{number.fact}</div>
                <div className="text-orange-400 font-bold text-xs md:text-sm bg-orange-500/20 px-2 py-1 rounded-md inline-block">
                  {number.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What It Means */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Co to znamená v praxi?
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Vysvětleno tak, aby to pochopil každý
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatItActuallyMeans.map((analogy, index) => (
              <motion.div
                key={index}
                className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-orange-500/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {analogy.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {analogy.title}
                  </h4>
                </div>
                
                <div className="text-sm text-orange-400 font-semibold mb-2">{analogy.comparison}</div>
                <p className="text-sm text-gray-300 mb-3 leading-relaxed">{analogy.description}</p>
                
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40">
                  <span className="text-xs font-semibold text-green-400">
                    ✓ {analogy.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cost of Waiting */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
              💸 Cena čekání
            </h3>
            <p className="text-sm md:text-base text-gray-400 px-2">
              Kolik vás může stát každý měsíc s pomalým webem
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {costOfWaiting.map((cost, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                {/* Mobile optimized layout */}
                <div className="block md:hidden">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="text-red-400 font-bold text-sm">{cost.period}</div>
                  </div>
                  <div className="text-gray-300 text-sm mb-3 leading-relaxed pl-11">
                    {cost.loss}
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-500/40">
                    <div className="text-red-400 font-bold text-base text-center">
                      {cost.money}
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-red-400 font-bold text-sm mb-1">{cost.period}:</div>
                      <div className="text-gray-300 text-sm">{cost.loss}</div>
                    </div>
                  </div>
                  <div className="text-red-400 font-bold text-lg bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/40">
                    {cost.money}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-2xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-orange-500/30 backdrop-blur-sm">
            <div className="text-4xl mb-4">⏰</div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
              Každý měsíc rozhodujete
            </h4>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              Buď budete dál ztrácet část zákazníků kvůli pomalému webu, 
              nebo si <span className="text-orange-400 font-semibold">vylepšíte rychlost webu</span>, 
              který vám bude přinášet více zákazníků.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <div className="text-red-400 font-bold mb-2">❌ Pokud nic neuděláte:</div>
                <div className="text-sm text-gray-300">Budete dál tratit část zákazníků každý týden</div>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="text-green-400 font-bold mb-2">✅ S rychlejším webem:</div>
                <div className="text-sm text-gray-300">Získáte zpět většinu ztracených příležitostí</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WordPressVsCustomSection;