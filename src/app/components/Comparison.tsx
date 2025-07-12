"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

const HookSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#0f172a] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Hlavní hook */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-sm font-medium">🎨 KOMPLETNÍ DIGITÁLNÍ STUDIO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Všechno co potřebujete pro{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              digitální úspěch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Weby, e-shopy, grafika, videa, online kurzy i interaktivní výuka pro školy. 
            Všechno pod jednou střechou s důrazem na kvalitu a výsledky.
          </p>
        </div>

        {/* Služby - 6 ikon */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Weby & E-shopy */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9 9c0-5 4-9 9-9s9 4 9 9"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-orange-400">Weby & E-shopy</h3>
          </div>

          {/* Grafika */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-blue-400">Grafický design</h3>
          </div>

          {/* Video */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-pink-400">Video tvorba</h3>
          </div>

          {/* Online kurzy */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-purple-400">Online kurzy</h3>
          </div>

          {/* Interaktivní výuka */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-green-400">Výuka pro školy</h3>
          </div>

          {/* Vzdělávání */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-cyan-400">Školení & workshopy</h3>
          </div>
        </div>

        {/* Tři klíčové hodnoty */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Všechno pod jednou střechou</h3>
            <p className="text-gray-400">
              Nemusíte hledat různé dodavatele. Logo, web, video i online kurzy - vše u jednoho partnera.
            </p>
          </div>

          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Zaměřeno na výsledky</h3>
            <p className="text-gray-400">
              Každý projekt má jasný cíl: více zákazníků, lepší prodeje nebo úspěšnější výuka.
            </p>
          </div>

          <div className="text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Rychlé a moderní řešení</h3>
            <p className="text-gray-400">
              Používám nejnovější technologie a trendy. Projekty dodávám rychle a kvalitně.
            </p>
          </div>
        </div>

        {/* Kdo jsou vaši klienti */}
        <div className={`bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 lg:p-12 border border-orange-500/20 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Pomáhám různým typům klientů:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-bold text-orange-400 mb-2">Firmy & podnikatelé</h4>
              <p className="text-sm text-gray-400">Weby, e-shopy, grafika pro marketing</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🏫</div>
              <h4 className="font-bold text-blue-400 mb-2">Základní & střední školy</h4>
              <p className="text-sm text-gray-400">Interaktivní cvičení a e-learning</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-purple-400 mb-2">Začínající designéři</h4>
              <p className="text-sm text-gray-400">Online kurzy a školení</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="font-bold text-pink-400 mb-2">Tvůrci obsahu</h4>
              <p className="text-sm text-gray-400">Video produkce a střih</p>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/40 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-gray-400 text-sm">Hotových projektů</div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Spokojených škol</div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">5,000+</div>
              <div className="text-gray-400 text-sm">Studentů v kurzech</div>
            </div>
            <div className="bg-slate-800/40 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Používaných technologií</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold mb-4">
            Připraveni na váš další projekt?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Ať už potřebujete web, grafiku, video nebo výukové materiály - poradím si s tím
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <button className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 group">
                <span className="flex items-center justify-center">
                  Začněme spolupráci
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:border-orange-500 hover:text-orange-400">
                Prohlédnout portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HookSection