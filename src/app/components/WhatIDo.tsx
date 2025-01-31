"use client"
import { motion } from "framer-motion";
import { Monitor, Edit, Video, Clock, Package, Info, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Grafika",
    description:
      "Od loga po kompletní firemní identitu. Vytvářím moderní grafiku, která zaujme vaše zákazníky a posílí vaši značku na trhu.",
    icon: <Edit className="w-8 h-8" />,
    checkmarks: [
      "Logo design již od 3000 Kč",
      "Vizitky a firemní tiskoviny",
      "Sociální sítě a online grafika",
      "Průměrná doba 5-7 pracovních dní",
      "Neomezený počet úprav návrhu",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 3000 Kč",
        features: [
          "2-3 návrhy loga",
          "2 revize finálního návrhu",
          "Základní formáty (PNG, JPG)",
          "Doba dodání 5-7 dní"
        ]
      },
      {
        name: "Standard",
        price: "od 5000 Kč",
        features: [
          "4-5 návrhů loga",
          "Neomezené revize",
          "Všechny potřebné formáty",
          "Vizitka zdarma",
          "Doba dodání 7-10 dní"
        ]
      },
      {
        name: "Premium",
        price: "od 8000 Kč",
        features: [
          "6+ návrhů loga",
          "Kompletní brand manuál",
          "Sociální média kit",
          "Expresní dodání možné",
          "Doba dodání 10-14 dní"
        ]
      }
    ],
    process: [
      "1. Konzultace a pochopení vašich potřeb",
      "2. Analýza trhu a konkurence",
      "3. Návrh konceptů",
      "4. Revize a úpravy",
      "5. Finální soubory a podklady"
    ],
    extraInfo: "Nabízím i tvorbu bannerů (od 500 Kč) nebo kompletní firemní identitu (individuální kalkulace)"
  },
  {
    title: "Střih Videa",
    description: 
      "Profesionální střih videí pro sociální sítě, YouTube nebo firemní prezentace. Moderní efekty, titulky a zvuk v ceně.",
    icon: <Video className="w-8 h-8" />,
    checkmarks: [
      "Střih videa od 2000 Kč",
      "Rychlé dodání do 48 hodin",
      "Motion grafika v ceně",
      "Vlastní hudba a efekty",
      "Formáty pro všechny platformy"
    ],
    packages: [
      {
        name: "Basic",
        price: "od 2000 Kč",
        features: [
          "Střih do 2 minut",
          "Základní titulky",
          "Hudba z knihovny",
          "2 revize"
        ]
      },
      {
        name: "Standard",
        price: "od 4000 Kč",
        features: [
          "Střih do 5 minut",
          "Pokročilé titulky a přechody",
          "Vlastní výběr hudby",
          "Neomezené revize",
          "Motion grafika"
        ]
      },
      {
        name: "Premium",
        price: "od 7000 Kč",
        features: [
          "Střih do 10 minut",
          "Profesionální efekty",
          "Voice-over",
          "Expresní dodání",
          "Komplexní postprodukce"
        ]
      }
    ],
    process: [
      "1. Konzultace a scénář",
      "2. Prvotní střih",
      "3. Zvuk a efekty",
      "4. Revize",
      "5. Export"
    ],
    extraInfo: "Pro pravidelné klienty nabízím zvýhodněné balíčky na měsíční spolupráci. Natáčení videí řeším přes partnery."
  },
  {
    title: "Webovky",
    description:
      "Moderní, rychlé a responzivní webové stránky. Od jednoduchých prezentací po e-shopy na míru. Web, který prodává a roste s vámi.",
    icon: <Monitor className="w-8 h-8" />,
    checkmarks: [
      "Základní web již od 10 000 Kč",
      "React nebo .Net core ",
      "SEO optimalizace v ceně",
      "Responzivní design",
     
    ],
    packages: [
      {
        name: "Basic",
        price: "od 10000 Kč",
        features: [
          "Do 5 podstránek",
          "Responzivní design",
          "Kontaktní formulář",
          "Základní SEO",
          "Doba dodání 14-21 dní"
        ]
      },
      {
        name: "Business",
        price: "od 18000 Kč",
        features: [
          "Do 10 podstránek",
          "Pokročilé funkce",
          "Blog systém",
          "Napojení na sociální sítě",
          "Doba dodání 21-30 dní"
        ]
      },
      {
        name: "E-shop",
        price: "od 25000 Kč",
        features: [
          "Shoptet nebo WooCommerce",
          "Produktový katalog",
          "Platební brány",
          "Marketingové nástroje",
          "Doba dodání 30-45 dní"
        ]
      }
    ],
    process: [
      "1. Analýza požadavků",
      "2. Návrh struktury webu",
      "3. Grafický design",
      "4. Kódování a testování",
      "5. Spuštění a zaškolení"
    ],
    extraInfo: "Nabízím i správu webů (od 500 Kč/měsíc), napojení na externí systémy, nebo tvorbu na míru podle vašich potřeb."
  }
];

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const WhatIDo = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [expandedInfo, setExpandedInfo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<{[key: number]: string}>({});
  
  const handleTabChange = (index: number, tab: string) => {
    setActiveTab(prev => ({
      ...prev,
      [index]: tab
    }));
  };

  return (
    <section id="services" className="relative py-24 px-6 sm:px-12 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight relative inline-block">
            Moje služby
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="absolute left-1/3 -translate-x-1/3 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full origin-center"
            />
          </h2>
          
          <p className="mt-12 text-gray-400 text-lg max-w-3xl mx-auto">
            Pomáhám firmám a podnikatelům růst pomocí kvalitního designu a webu. Každý projekt je jedinečný a zaslouží si individuální přístup.
          </p>
          <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
            Nabízím férové ceny a transparentní podmínky. Vždy se snažím najít řešení, které sedí vašemu rozpočtu i potřebám.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardAnimation}
              className={`relative group p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                activeCard === i ? "scale-105 border border-orange-500" : "border border-transparent"
              }`}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-center items-center mb-6">
                  <div className="text-orange-500 mr-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-orange-500">{service.title}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.checkmarks.map((check, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button
                    onClick={() => setExpandedInfo(expandedInfo === i ? null : i)}
                    className="flex items-center text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <Info className="w-5 h-5 mr-2" />
                    {expandedInfo === i ? "Skrýt detaily" : "Zobrazit ceník a více informací"}
                  </button>

                  {expandedInfo === i && (
                    <div className="mt-4 space-y-4 text-gray-300">
                      <div className="flex space-x-4 border-b border-gray-700">
                        <button
                          className={`pb-2 px-2 ${activeTab[i] === "packages" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}`}
                          onClick={() => handleTabChange(i, "packages")}
                        >
                          Ceník
                        </button>
                        <button
                          className={`pb-2 px-2 ${activeTab[i] === "process" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-400"}`}
                          onClick={() => handleTabChange(i, "process")}
                        >
                          Jak to probíhá
                        </button>
                      </div>

                      {activeTab[i] === "packages" && (
                        <div className="space-y-6">
                          {service.packages.map((pkg, idx) => (
                            <div key={idx} className="p-4 bg-gray-900/50 rounded-lg">
                              <div className="flex justify-between items-center mb-3">
                                <h5 className="text-lg font-semibold text-orange-500">{pkg.name}</h5>
                                <span className="text-orange-400">{pkg.price}</span>
                              </div>
                              <ul className="space-y-2">
                                {pkg.features.map((feature, featureIdx) => (
                                  <li key={featureIdx} className="flex items-start text-sm">
                                    <span className="mr-2 text-green-500">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <p className="text-sm italic">{service.extraInfo}</p>
                        </div>
                      )}

                      {activeTab[i] === "process" && (
                        <div className="space-y-3">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-2">→</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-orange-700 transition-all"
          >
            Prohlédnout portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;