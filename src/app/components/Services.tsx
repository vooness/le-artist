"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  checkmarks: string[];
  packages: {
    name: string;
    price: string;
    features: string[];
  }[];
  process: string[];
  extraInfo: string;
}

const servicesData: Service[] = [
  {
    id: "web",
    title: "Webové Služby",
    description:
      "Moderní, responzivní a přehledné webové stránky navržené na míru. Specializuji se na tvorbu webů, e-shopů a integraci moderních technologií, které pomáhají vašemu podnikání růst.",
    checkmarks: [
      "Responzivní design",
      "SEO optimalizace",
      "Rychlé načítání",
      "Moderní UX/UI",
      "Individuální přístup",
      "Pravidelná údržba",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 10 000 Kč",
        features: [
          "Do 5 stránek",
          "Responzivní design",
          "Základní SEO",
          "Kontaktní formulář",
          "Dodání 14-21 dní",
        ],
      },
      {
        name: "Business",
        price: "od 18 000 Kč",
        features: [
          "Až 10 stránek",
          "Pokročilé funkce",
          "Blog systém",
          "Napojení na sociální sítě",
          "Dodání 21-30 dní",
        ],
      },
      {
        name: "Eshop",
        price: "od 25 000 Kč",
        features: [
          "Shoptet Eshop",
          "Produktový katalog",
          "Platební brány",
          "Marketingové nástroje",
          "Dodání 30-45 dní",
        ],
      },
      {
        name: "Expres",
        price: "5 000 Kč",
        features: [
            "Expresní příplatek",
          "Okamžité zahájení práce",
          "Web do 7 dnů",
          "Nejvyšší priorita",
        ],
      },
    ],
    process: [
      "1. Konzultace a analýza potřeb",
      "2. Návrh designu a struktury",
      "3. Vývoj a testování",
      "4. Spuštění a podpora",
    ],
    extraInfo:
      "Možnost správy webu po spuštění a další integrace dle vašich potřeb.",
  },
  {
    id: "graphics",
    title: "Grafika & Branding",
    description:
      "Vytvořím pro vás moderní grafiku, kompletní firemní identitu i brand manuál. Vaše značka bude působit profesionálně a jednotně napříč všemi kanály – od loga přes tiskoviny až po sociální sítě.",
    checkmarks: [
      "Logo již od 3000 Kč",
      "Design obalů",
      "Banery a tiskoviny",
      "Omezený počet úprav",
      "Důraz na originalitu",
      "Brand manuál",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 3000 Kč",
        features: [
          "Logo",
          "2-3 návrhy",
          "2 revize",
          "Dodání 5-7 dní",
        ],
      },
      {
        name: "Standard",
        price: "od 5000 Kč",
        features: [
          "Kompletní branding",
          "3 koncepty",
          "5 revizí",
          
          "Dodání 15 dní",
        ],
      },
      {
        name: "Premium",
        price: "od 8000 Kč",
        features: [
          "Plná identita s brand manuálem",
          "6+ konceptů",
          "Expresní dodání",
          "Vizitka zdarma",
          "5 revizí",
          "Detailní návrh materiálů",
          "Dodání 7-10 dní",
        ],
      },
    ],
    process: [
      "1. Konzultace a sběr informací",
      "2. Návrh konceptů",
      "3. Revize a úpravy",
      "4. Finální dodání ve všech formátech",
    ],
    extraInfo:
      "Možnost tvorby jednotlivých prvků (banery, tiskoviny, sociální sítě) i kompletního brandu.",
  },
  {
    id: "video",
    title: "Video Editing & Krátké Reklamy",
    description:
      "Profesionální střih krátkých reklamních spotů a videí pro sociální sítě. Nabízím balíčky bez voiceoveru, s voiceoverem do 30 sekund nebo do 60 sekund. Střih podcastů či delších videí je možný jako bonusová služba.",
    checkmarks: [
      "Kvalitní střih a efekty",
      "Pro sociální sítě",
      "Krátká reklamy",
      "Rychlé dodání",
      
      "Střih podcastů (bonus)",
      "Voiceover (dle dohody)",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 2000 Kč",
        features: [
          "Střih videa do 20 sec",
          "Bez voiceoveru",
          "Základní efekty",
          "Dodání do 48 hodin",
        ],
      },
      {
        name: "Standard",
        price: "od 3000 Kč",
        features: [
          "Střih videa do 30 sec",
          "Voiceover do 30 sec",
          "Pokročilé efekty",
          "Dodání do 72 hodin",
        ],
      },
      {
        name: "Premium",
        price: "od 4000 Kč",
        features: [
          "Střih videa do 60 sec",
          "Voiceover do 60 sec",
          "Profesionální postprodukce",
          "Dodání do 96 hodin",
        ],
      },
    ],
    process: [
      "1. Konzultace a sběr materiálů",
      "2. Návrh a střih videa",
      "3. Revize a finalizace",
      "4. Dodání finálního produktu",
    ],
    extraInfo:
      "Podcasty a delší videa jsou k dispozici na individuální kalkulaci.",
  },
];

// Animace pro karty ceníku
const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

export default function ServicesPage() {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});

  const setActiveTab = (id: string, tab: string) => {
    setActiveTabs((prev) => ({ ...prev, [id]: tab }));
  };

  return (
    <section className="py-24 px-6 sm:px-12 bg-[#0f172a] text-white overflow-hidden">
      {servicesData.map((service) => {
        const activeTab = activeTabs[service.id] || "packages";
        return (
          <div key={service.id} className="max-w-3xl mx-auto mb-16 mt-16">
            {/* Nadpis a popis */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-orange-500 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-400 text-lg mb-8 mt-8">
                {service.description}
              </p>

              {/* Checkmarky: 1 sloupec pro mobil/tablet, 3 sloupce × 2 řádky pro desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 text-gray-300">
                {service.checkmarks.map((check, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Přepínač mezi "Ceník" a "Postup" */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <div className="flex justify-center space-x-4 border-b border-gray-700 mb-6">
                <button
                  className={`pb-2 px-4 ${
                    activeTab === "packages"
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(service.id, "packages")}
                >
                  Ceník
                </button>
                <button
                  className={`pb-2 px-4 ${
                    activeTab === "process"
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab(service.id, "process")}
                >
                  Postup
                </button>
              </div>

              {/* Obsah podle aktivní záložky */}
              {activeTab === "packages" && (
                <div className="space-y-8">
                  {service.packages.map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={cardAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="p-6 bg-gray-800/80 rounded-xl shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold text-orange-500">
                          {pkg.name}
                        </h3>
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-lg font-semibold">
                           {pkg.price}
                        </span>
                      </div>
                      <ul className="space-y-2 text-gray-300">
                        {pkg.features.map((feature, i2) => (
                          <li key={i2} className="flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                  <p className="text-sm italic text-gray-400 mt-4">
                    {service.extraInfo}
                  </p>
                </div>
              )}

              {activeTab === "process" && (
                <div className="space-y-4 text-gray-300">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2">→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
