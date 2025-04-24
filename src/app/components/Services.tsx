// src/app/components/Services.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  PenTool,
  Video,
  ActivitySquare,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

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
    id: "websites",
    title: "Webové stránky",
    description:
      "Moderní, responzivní a přehledné webové stránky navržené na míru.",
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
        price: "od 15 000 Kč",
        features: [
          "Do 5 stránek",
          "Responzivní design",
          "Kontaktní formulář",
          "Základní SEO",
        ],
      },
      {
        name: "Business",
        price: "od 25 000 Kč",
        features: [
          "Až 10 stránek",
          "Blog systém",
          "Napojení na sociální sítě",
          "Pokročilé funkce",
        ],
      },
    ],
    process: ["Konzultace", "Návrh designu", "Vývoj & testování", "Spuštění webu"],
    extraInfo: "Možnost další podpory a údržby po spuštění.",
  },
  {
    id: "shoptet",
    title: "Shoptet e‑shop",
    description:
      "Kompletní řešení e-shopu na platformě Shoptet, včetně úprav šablon na míru.",
    checkmarks: [
      "Nastavení produktů",
      "Šablony vzhledu",
      "Platební brány",
      "Marketingové moduly",
      "Napojení na ERP",
      "Školení k obsluze",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 20 000 Kč",
        features: ["Až 50 produktů", "Základní šablona", "Platební brány"],
      },
      {
        name: "Business",
        price: "od 30 000 Kč",
        features: ["Neomezeně produktů", "Vlastní design", "Pokročilé moduly"],
      },
      {
        name: "Premium",
        price: "od 40 000 Kč",
        features: ["Kompletní branding", "5 revizí", "Podpora 3 měsíce"],
      },
    ],
    process: ["Analýza potřeb", "Implementace e-shopu", "Testování", "Spuštění & školení"],
    extraInfo: "Možnost rozšíření modulů a údržby.",
  },
  {
    id: "graphics",
    title: "Grafický design",
    description: "Tvorba log, tiskovin a kompletní vizuální identity.",
    checkmarks: [
      "Logo od 3000 Kč",
      "2‑3 koncepty",
      "Brand manuál",
      "Tiskoviny",
      "Bannerové kampaně",
      "Webová grafika",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 3000 Kč",
        features: ["Logo (2 návrhy)", "2 revize", "Dodání 5‑7 dní"],
      },
      {
        name: "Standard",
        price: "od 6000 Kč",
        features: ["Kompletní branding", "5 revizí", "Dodání 10‑14 dní"],
      },
      {
        name: "Premium",
        price: "od 10 000 Kč",
        features: ["Brand manuál", "Tiskoviny & bannery", "Vizitka zdarma"],
      },
    ],
    process: [
      "Brief & koncepty",
      "Revize & finalizace",
      "Příprava pro tisk",
      "Uvedení do provozu",
    ],
    extraInfo: "Grafika pro online i tisk dle Vašich potřeb.",
  },
  {
    id: "video",
    title: "Video tvorba",
    description: "Střih spotů, reklam a videí pro sociální sítě.",
    checkmarks: [
      "Krátké reklamy",
      "Voiceover",
      "Efekty & korekce",
      "Formáty pro sociální sítě",
      "Rychlé dodání",
      "Podcasty",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 2000 Kč",
        features: ["Video do 20s", "Základní střih", "Bez voiceoveru"],
      },
      {
        name: "Standard",
        price: "od 3500 Kč",
        features: ["Video do 30s", "Pokročilé efekty", "Voiceover do 30s"],
      },
      {
        name: "Premium",
        price: "od 5000 Kč",
        features: ["Video do 60s", "Prof. postprodukce", "Voiceover do 60s"],
      },
    ],
    process: ["Sběr materiálů", "Střih & editace", "Revize", "Export & dodání"],
    extraInfo: "Delší formáty a podcasty na individuální kalkulaci.",
  },
  {
    id: "interactive",
    title: "Interaktivní cvičení",
    description:
      "E‑learningové moduly pro ZŠ a SŠ: kvízy, úlohy a SCORM export.",
    checkmarks: [
      "HTML5",
      "Responsivní UI",
      "Kvízy & testy",
      "SCORM export",
      "Analytika",
      "Offline režim",
    ],
    packages: [
      {
        name: "Basic",
        price: "od 5000 Kč",
        features: ["5 modulů", "Základní kvízy", "Mobilní verze"],
      },
      {
        name: "Standard",
        price: "od 10 000 Kč",
        features: ["10 modulů", "Pokročilé úlohy", "LMS integrace"],
      },
      {
        name: "Premium",
        price: "od 15 000 Kč",
        features: ["Neomezeně modulů", "Custom úlohy", "Detailní analytika"],
      },
    ],
    process: [
      "Scénář & storyboard",
      "Vývoj modulu",
      "Testování",
      "Implementace do LMS",
    ],
    extraInfo: "Údržba a aktualizace obsahu dle požadavků.",
  },
  {
    id: "online",
    title: "Online kurzy",
    description:
      "Interaktivní online kurzy pro rozvoj vašich dovedností v webdesignu, programování a grafice.",
    // -- zachováno původní obecné benefity kurzu --
    checkmarks: [
      "Video lekce",
      "Kvízy & testy",
      "Certifikát po dokončení",
      "Offline přístup",
      "Podpora tutora",
      "Aktualizace obsahu",
    ],
    // -- nová čtyřka specializovaných kurzů místo Basic/Standard/Premium --
    packages: [
      {
        name: "Grafický kurz",
        price: "od 3 000 Kč",
        features: [
          "Základy kompozice a barev",
          "Práce s Adobe Photoshop & Illustrator",
          "Tvorba loga a vizuálních prvků",
          "Branding a styleguide",
        ],
      },
      {
        name: "Web design s AI",
        price: "od 3 500 Kč",
        features: [
          "UX/UI principy",
          "Generování wireframů pomocí AI",
          "Responzivní layout v HTML/CSS",
          "Základy SEO pro weby",
        ],
      },
      {
        name: "Video editing",
        price: "od 2 800 Kč",
        features: [
          "Střih v Premiere Pro",
          "Motion graphics v After Effects",
          "Barevná korekce",
          "Export pro sociální sítě",
        ],
      },
      {
        name: "Shoptet e‑shop",
        price: "od 3 200 Kč",
        features: [
          "Nastavení a správa produktů",
          "Custom šablony na míru",
          "Integrace platebních bran",
          "Marketingové moduly a analytika",
        ],
      },
    ],
    process: ["Registrace", "Studium lekcí", "Vypracování úkolů", "Závěrečný test"],
    extraInfo: "Možnost firemních školení a týmového přístupu.",
  },
];

const iconsMap: Record<string, React.ElementType> = {
  websites: Globe,
  shoptet: ShoppingCart,
  graphics: PenTool,
  video: Video,
  interactive: ActivitySquare,
  online: BookOpen,
};

export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"packages" | "process">("packages");
  const service = servicesData.find((s) => s.id === selected!);

  const cardBase =
    "group relative flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-orange-500 transition-all duration-300";
  const cardHover = "hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]";

  // Overview grid: 3 columns x 2 rows on md+, 2 columns on sm, 1 column on mobile
  if (!selected) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-[#0f172a] text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight relative inline-block mb-8 mt-12">
            Služby a ceník
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[5px] w-2/3 bg-gradient-to-r from-[#F97316] to-yellow-500 rounded-full origin-center"
            />
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
          {servicesData.map((s) => {
            const Icon = iconsMap[s.id];
            return (
              <motion.button
                key={s.id}
                onClick={() => setSelected(s.id)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className={`${cardBase} ${cardHover}`}
              >
                <motion.div whileHover={{ rotate: 15 }} className="p-4 bg-white/20 rounded-full mb-4">
                  <Icon className="w-10 h-10 text-orange-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3 mb-6">{s.description}</p>
                <span className="absolute bottom-4 text-xs text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Klikněte pro víc
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>
    );
  }

  // Detailed view
  return (
    <section className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setSelected(null)}
          className="mb-6 text-sm text-gray-400 hover:text-white"
        >
          &larr; Zpět na seznam kategorií
        </button>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-extrabold text-orange-500 mb-2">{service!.title}</h2>
          <p className="text-gray-400 mt-4">{service!.description}</p>
        </motion.div>
        <div className="rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300 mb-8">
          {service!.checkmarks.map((txt, i) => (
            <div key={i} className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>{txt}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 border-b border-gray-700 mb-6">
          <button
            className={`pb-2 px-4 ${
              activeTab === "packages"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("packages")}
          >
            Ceník
          </button>
          <button
            className={`pb-2 px-4 ${
              activeTab === "process"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("process")}
          >
            Postup
          </button>
        </div>
        {activeTab === "packages" && (
          <div className="flex flex-col gap-6">
            {service!.packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 bg-gray-800 rounded-xl shadow-lg border-2 border-orange-500"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold text-orange-500">{pkg.name}</h3>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-lg font-semibold">
                    {pkg.price}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <p className="text-sm italic text-gray-400 mt-4">{service!.extraInfo}</p>
          </div>
        )}
        {activeTab === "process" && (
          <div className="space-y-4 text-gray-300">
            {service!.process.map((step, i) => (
              <div key={i} className="flex items-start">
                <span className="text-orange-500 mr-2">→</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
