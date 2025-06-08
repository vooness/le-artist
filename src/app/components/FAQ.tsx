"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  Monitor, 
  ShoppingCart, 
  Palette, 
  Video,
  GraduationCap,
  BookOpen
} from 'lucide-react';

// TypeScript rozhraní
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tags?: string[];
}

interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  items: FAQItem[];
}

interface FAQData {
  categories: FAQCategory[];
}

// Data pro Le Artist FAQ podle skutečných služeb
const leArtistFAQData: FAQData = {
  categories: [
    {
      id: 'webove-stranky',
      name: 'Webové stránky',
      icon: 'monitor',
      items: [
        {
          id: 'cena-web',
          question: 'Kolik stojí tvorba webových stránek?',
          answer: 'Moderní, responzivní webové stránky na míru vytvářím pomocí React.js a Next.js technologií. Cena závisí na rozsahu a složitosti projektu. Základní prezentační web začíná od 15 000 Kč, komplexnější řešení s pokročilými funkcemi od 25 000 Kč.',
          tags: ['cena', 'react', 'next.js']
        },
        {
          id: 'technologie-web',
          question: 'Jaké technologie používáte pro webové stránky?',
          answer: 'Specializuji se na moderní React.js a Next.js frameworky, které zajišťují rychlost, SEO optimalizaci a výborný uživatelský zážitek. Všechny weby jsou plně responzivní a optimalizované pro mobily.',
          tags: ['react', 'next.js', 'responzivní']
        },
        {
          id: 'doba-web',
          question: 'Jak dlouho trvá vytvoření webových stránek?',
          answer: 'Standardní web obvykle vytvořím za 2-4 týdny. Složitější projekty mohou trvat 6-8 týdnů. Vše závisí na rozsahu funkcionalit a počtu stránek.',
          tags: ['doba', 'timeline']
        },
        {
          id: 'hosting-web',
          question: 'Zahrnuje cena i doménu a hosting?',
          answer: 'Cena webových stránek nezahrnuje hosting a doménu. Pomůžu vám však s výběrem vhodného hostingu a registrací domény. Doporučuji kvalitní české hostingy s dobrým výkonem a podporou.',
          tags: ['hosting', 'doména', 'cena']
        },
        {
          id: 'upravy-web',
          question: 'Můžete upravit stávající webové stránky?',
          answer: 'Ano, specializuji se i na úpravy a modernizaci stávajících webů. Mohu optimalizovat rychlost, zlepšit SEO, přidat nové funkce nebo kompletně redesignovat web podle moderních standardů.',
          tags: ['úpravy', 'modernizace', 'SEO']
        },
        {
          id: 'proces-web',
          question: 'Jak probíhá proces tvorby webu?',
          answer: 'Proces začíná konzultací a analýzou potřeb, poté navrhuji wireframy a design. Po schválení následuje vývoj, testování a finální spuštění. Během celého procesu jste v kontaktu a můžete sledovat průběh.',
          tags: ['proces', 'konzultace', 'wireframes']
        },
        {
          id: 'skoleni-web',
          question: 'Poskytujete školení pro správu webu?',
          answer: 'Ano, po dokončení webu poskytnu základní školení pro správu obsahu. Ukážu vám, jak přidávat články, upravovat texty a spravovat základní funkce webu. Školení je součástí ceny.',
          tags: ['školení', 'správa', 'obsah']
        }
      ]
    },
    {
      id: 'shoptet',
      name: 'Shoptet e-shop',
      icon: 'shoppingCart',
      items: [
        {
          id: 'shoptet-sluzby',
          question: 'Jaké služby nabízíte pro Shoptet e-shopy?',
          answer: 'Poskytujeme kompletní řešení e-shopů na platformě Shoptet včetně úprav šablon na míru. Vytvořím pro vás unikátní design, naimplementujem specifické funkce a optimalizuji pro lepší konverze.',
          tags: ['shoptet', 'e-shop', 'šablony']
        },
        {
          id: 'upravy-shoptet',
          question: 'Můžete upravit stávající Shoptet šablonu?',
          answer: 'Ano, specializuji se na úpravy existujících Shoptet šablon. Mohu změnit design, přidat nové funkce, optimalizovat pro mobilní zařízení nebo integrovat s externími systémy.',
          tags: ['úpravy', 'shoptet', 'optimalizace']
        },
        {
          id: 'cena-shoptet',
          question: 'Kolik stojí úprava Shoptet e-shopu?',
          answer: 'Cena závisí na rozsahu úprav. Menší designové změny začínají od 8 000 Kč, komplexní redesign od 20 000 Kč. Vždy poskytnu detailní cenovou nabídku podle vašich požadavků.',
          tags: ['cena', 'shoptet']
        },
        {
          id: 'platby-shoptet',
          question: 'Integrujete platební brány do Shoptetu?',
          answer: 'Ano, nastavím a nakonfiguruji všechny populární platební brány jako GoPay, Stripe, PayPal nebo bankovní převody. Pomůžu také s nastavením platebních podmínek a automatizací procesů.',
          tags: ['platby', 'integrace', 'brány']
        },
        {
          id: 'seo-shoptet',
          question: 'Optimalizujete e-shop pro SEO?',
          answer: 'Ano, SEO optimalizace je součástí každého projektu. Nastavím meta tagy, strukturovaná data, optimalizuji rychlost načítání a pomohu s obsahovou strategií pro lepší pozice ve vyhledávačích.',
          tags: ['SEO', 'optimalizace', 'rychlost']
        },
        {
          id: 'doba-shoptet',
          question: 'Jak dlouho trvá nastavení Shoptet e-shopu?',
          answer: 'Základní nastavení a úpravy obvykle trvají 1-2 týdny. Komplexní redesign s vlastními funkcemi může trvat 4-6 týdnů. Termín závisí na složitosti a počtu produktů.',
          tags: ['doba', 'nastavení']
        },
        {
          id: 'skoleni-shoptet',
          question: 'Poskytujete školení pro správu e-shopu?',
          answer: 'Samozřejmě! Po dokončení e-shopu poskytnu kompletní školení pro správu objednávek, produktů, skladů a marketingových nástrojů. Školení probíhá online i osobně.',
          tags: ['školení', 'správa', 'objednávky']
        }
      ]
    },
    {
      id: 'graficky-design',
      name: 'Grafický design',
      icon: 'palette',
      items: [
        {
          id: 'logo-design',
          question: 'Vytváříte loga a vizuální identitu?',
          answer: 'Ano, specializuji se na tvorbu log, tiskovin a kompletní vizuální identity. Vytvořím pro vás jedinečné logo, které bude reprezentovat vaši značku a odliší vás od konkurence.',
          tags: ['logo', 'identita', 'design']
        },
        {
          id: 'tiskoviny',
          question: 'Jaké tiskoviny dokážete vytvořit?',
          answer: 'Navrhuji veškeré firemní tiskoviny - vizitky, letáky, brožury, plakáty, bannery a další propagační materiály. Vše připravím v tiskové kvalitě s ohledem na váš brand.',
          tags: ['tiskoviny', 'vizitky', 'letáky']
        },
        {
          id: 'cena-grafika',
          question: 'Kolik stojí grafické práce?',
          answer: 'Logo od 10 000 Kč, vizitky od 3 000 Kč, letáky od 5 000 Kč. Cena závisí na složitosti a rozsahu práce. Vždy dodržím dohodnutou cenu bez skrytých poplatků.',
          tags: ['cena', 'grafika']
        },
        {
          id: 'formaty-logo',
          question: 'Dodáváte logo ve všech formátech?',
          answer: 'Ano, finální logo dostanete ve všech potřebných formátech - AI, EPS, PNG, JPG, SVG a PDF. Včetně barevných variant, černobílé verze a verzí pro různá pozadí.',
          tags: ['formáty', 'AI', 'SVG', 'logo']
        },
        {
          id: 'navrhy-logo',
          question: 'Kolik návrhů loga dostanu k výběru?',
          answer: 'Standardně připravím 3-5 unikátních návrhů loga v různých stylistických směrech. Po výběru preferovaného návrhu provedeme společně finální úpravy a dotvoření.',
          tags: ['návrhy', 'výběr', 'varianty']
        },
        {
          id: 'animace-logo',
          question: 'Vytváříte také animované loga?',
          answer: 'Ano, mohu vytvořit animovanou verzi vašeho loga pro použití na webu, v prezentacích nebo na sociálních sítích. Animace přidává dynamiku a moderní vzhled vaší značce.',
          tags: ['animace', 'motion', 'video']
        },
        {
          id: 'doba-logo',
          question: 'Jak dlouho trvá tvorba loga?',
          answer: 'Tvorba loga obvykle trvá 1-2 týdny od zadání. Včetně konzultace, návrhů, zpětné vazby a finálních úprav. U složitějších projektů s kompletní identitou to může být 3-4 týdny.',
          tags: ['doba', 'timeline', 'proces']
        }
      ]
    },
    {
      id: 'video-tvorba',
      name: 'Video tvorba',
      icon: 'video',
      items: [
        {
          id: 'video-sluzby',
          question: 'Jaké video služby poskytujete?',
          answer: 'Specializuji se na střih spotů, reklam a videí pro sociální sítě. Vytvořím pro vás profesionální video obsah, který zaujme vaše zákazníky a zvýší prodeje.',
          tags: ['video', 'střih', 'sociální sítě']
        },
        {
          id: 'video-formaty',
          question: 'Pro jaké platformy videa upravujete?',
          answer: 'Vytvářím videa optimalizovaná pro YouTube, Instagram, Facebook, TikTok a další sociální sítě. Každé video přizpůsobím požadovanému formátu a délce.',
          tags: ['youtube', 'instagram', 'formáty']
        },
        {
          id: 'cena-video',
          question: 'Kolik stojí tvorba a střih videa?',
          answer: 'Jednoduchý střih od 3 000 Kč, komplexnější video s grafikou a efekty od 8 000 Kč. Finální cena závisí na délce videa a požadovaných efektech.',
          tags: ['cena', 'video', 'střih']
        },
        {
          id: 'nataceni-video',
          question: 'Natáčíte také vlastní záběry?',
          answer: 'Ano, poskytujeme i služby natáčení s profesionální technikou. Můžeme natočit produktová videa, firemní prezentace nebo rozhovory. Cena se stanovuje podle rozsahu natáčení.',
          tags: ['natáčení', 'kamera', 'produkce']
        },
        {
          id: 'doba-video',
          question: 'Kolik trvá střih jednominutového videa?',
          answer: 'Střih jednominutového videa obvykle trvá 2-5 dní v závislosti na složitosti. Jednoduchý střih je hotový rychleji, složitější projekty s animacemi mohou trvat týden.',
          tags: ['doba', 'timeline', 'střih']
        },
        {
          id: 'titulky-video',
          question: 'Přidáváte titulky do videí?',
          answer: 'Ano, mohu přidat titulky v češtině i angličtině. Titulky pomohou s přístupností a lepším pochopením obsahu, zejména na sociálních sítích kde se videa často sledují bez zvuku.',
          tags: ['titulky', 'přístupnost', 'text']
        },
        {
          id: 'animace-video',
          question: 'Vytváříte animace a motion graphics?',
          answer: 'Ano, specializuji se na motion graphics, animované loga, vysvětlující animace a grafické prvky. Animace dodají vašemu videu profesionální vzhled a zvýší jeho atraktivitu.',
          tags: ['animace', 'motion graphics', 'efekty']
        }
      ]
    },
    {
      id: 'interaktivni-kviz',
      name: 'Interaktivní kvízy',
      icon: 'graduationCap',
      items: [
        {
          id: 'kviz-skoly',
          question: 'Vytváříte interaktivní kvízy pro školy?',
          answer: 'Ano, vytvářím e-learningové moduly pro základní a střední školy. Kvízy, úlohy a SCORM export pro snadnou integraci do školních systémů.',
          tags: ['kvízy', 'školy', 'e-learning']
        },
        {
          id: 'kviz-funkcionalita',
          question: 'Jaké funkce mají vaše interaktivní kvízy?',
          answer: 'Kvízy obsahují různé typy otázek, automatické vyhodnocení, progress tracking, gamifikaci a možnost exportu výsledků. Vše přizpůsobím vašim požadavkům.',
          tags: ['interaktivita', 'gamifikace']
        },
        {
          id: 'kviz-cena',
          question: 'Kolik stojí vytvoření interaktivního kvízu?',
          answer: 'Základní kvíz od 5 000 Kč, komplexnější e-learningový modul od 12 000 Kč. Cena závisí na počtu otázek a požadované funkcionality.',
          tags: ['cena', 'kvízy']
        },
        {
          id: 'scorm-export',
          question: 'Podporujete export do SCORM formátu?',
          answer: 'Ano, všechny kvízy mohu exportovat do SCORM 1.2 nebo SCORM 2004 formátu pro snadnou integraci do LMS systémů jako Moodle, Canvas nebo firemních platforem.',
          tags: ['SCORM', 'LMS', 'export']
        },
        {
          id: 'integrace-lms',
          question: 'Můžete integrovat kvíz do našeho LMS systému?',
          answer: 'Ano, mám zkušenosti s integrací do různých LMS systémů. Mohu kvíz přizpůsobit vašemu prostředí a zajistit správné fungování všech funkcí včetně sledování pokroku.',
          tags: ['integrace', 'LMS', 'systémy']
        },
        {
          id: 'vyhodnoceni-kviz',
          question: 'Jak funguje vyhodnocení výsledků?',
          answer: 'Kvízy nabízejí okamžité vyhodnocení s detailní zpětnou vazbou, bodování podle složitosti otázek, možnost opakování a uložení nejlepších výsledků. Vše je přizpůsobitelné.',
          tags: ['vyhodnocení', 'zpětná vazba', 'bodování']
        },
        {
          id: 'statistiky-kviz',
          question: 'Poskytujete statistiky a reporty?',
          answer: 'Ano, kvízy generují detailní statistiky úspěšnosti, časy řešení, nejčastější chyby a pokrok studijních skupin. Data lze exportovat do Excel nebo PDF pro další analýzu.',
          tags: ['statistiky', 'reporty', 'analýza']
        }
      ]
    },
    {
      id: 'online-kurzy',
      name: 'Online kurzy',
      icon: 'bookOpen',
      items: [
        {
          id: 'kurzy-nabidka',
          question: 'Jaké online kurzy nabízíte?',
          answer: 'Vedu interaktivní online kurzy pro rozvoj dovedností v webdesignu, programování a grafice. Kurzy jsou určené pro začátečníky i pokročilé s praktickými projekty.',
          tags: ['kurzy', 'webdesign', 'programování']
        },
        {
          id: 'kurzy-format',
          question: 'Jak probíhají online kurzy?',
          answer: 'Kurzy kombinují live lekce, praktické úkoly a individuální zpětnou vazbu. Všechny materiály zůstávají dostupné i po skončení kurzu.',
          tags: ['online', 'lekce', 'materiály']
        },
        {
          id: 'kurzy-cena',
          question: 'Kolik stojí účast v online kurzech?',
          answer: 'Ceny kurzů se liší podle délky a obsahu. Základní kurzy od 4 000 Kč, pokročilé od 8 000 Kč. Nabízím také skupinové slevy pro firmy.',
          tags: ['cena', 'kurzy', 'skupiny']
        },
        {
          id: 'certifikace-kurzy',
          question: 'Jsou kurzy certifikované?',
          answer: 'Ano, po úspešném absolvování kurzu obdržíte certifikát o dokončení. Certifikáty obsahují detailní přehled probírané látky a dosažených dovedností.',
          tags: ['certifikát', 'absolvování', 'dovednosti']
        },
        {
          id: 'delka-kurzy',
          question: 'Jak dlouho trvá jednotlivý kurz?',
          answer: 'Délka kurzů se liší podle typu - základní kurzy trvají 4-6 týdnů, pokročilé 8-12 týdnů. Každý týden obsahuje 2-3 hodiny studia včetně praktických úkolů.',
          tags: ['délka', 'týdny', 'studium']
        },
        {
          id: 'flexibilita-kurzy',
          question: 'Můžu se kurzu účastnit kdykoliv?',
          answer: 'Kurzy mají stanovené termíny pro live lekce, ale všechny materiály a nahrávky jsou dostupné 24/7. Pokud něco nestíháte, můžete si látku doplnit ve svém tempu.',
          tags: ['flexibilita', 'nahrávky', 'tempo']
        },
        {
          id: 'konzultace-kurzy',
          question: 'Poskytujete individuální konzultace?',
          answer: 'Ano, součástí každého kurzu jsou individuální konzultace, kde můžeme řešit vaše konkrétní projekty a otázky. Nabízím také samostatné mentoring konzultace.',
          tags: ['konzultace', 'mentoring', 'projekty']
        }
      ]
    }
  ]
};

// Animační varianty
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Mapování ikon pro kategorie
const iconMap: { [key: string]: React.ComponentType<any> } = {
  monitor: Monitor,
  shoppingCart: ShoppingCart,
  palette: Palette,
  video: Video,
  graduationCap: GraduationCap,
  bookOpen: BookOpen
};

interface FuturisticFAQProps {
  className?: string;
  searchPlaceholder?: string;
  onQuestionClick?: (question: FAQItem) => void;
}

const FuturisticFAQ: React.FC<FuturisticFAQProps> = ({
  className = "",
  searchPlaceholder = "Vyhledat otázky...",
  onQuestionClick
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(leArtistFAQData.categories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Logika filtrování a vyhledávání
  const filteredItems = useMemo(() => {
    const activeItems = leArtistFAQData.categories.find(cat => cat.id === activeCategory)?.items || [];
    
    if (!searchQuery.trim()) return activeItems;
    
    return activeItems.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [activeCategory, searchQuery]);

  const handleItemToggle = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setExpandedItems(new Set());
  };

  return (
    <div className={`bg-[#0f172a] text-white min-h-screen ${className}`}>
      {/* Zpátky na hlavní stránku */}
      <div className="pt-8 pb-4 px-4 md:px-8">
        <a 
          href="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zpátky na hlavní stránku
        </a>
      </div>

      <div className="px-4 md:px-8 pb-8">
        {/* Hlavní nadpis ve stylu služeb */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="absolute -left-8 -right-8 -top-8 -bottom-8 flex items-center justify-center pointer-events-none">
              
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"></div>
              
              
              
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white relative inline-block">
              <span className="tracking-wide">Často kladené otázky</span>
              <div className="relative h-1 mt-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500"></div>
              </div>
            </h1>
            
            <div className="mt-4 text-orange-500/70 text-sm font-mono tracking-widest">
              VŠECHNY KATEGORIE
            </div>
          </div>
        </div>

        {/* Vyhledávací pole */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-slate-800/80 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
          />
        </div>

        {/* Záložky kategorií */}
        <div className="flex flex-wrap gap-2 mb-8">
          {leArtistFAQData.categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Monitor;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300
                  ${isActive 
                    ? 'text-white bg-orange-500' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }
                `}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ položky */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenalezeny žádné otázky.</p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isExpanded = expandedItems.has(item.id);
              
              return (
                <div
                  key={item.id}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => {
                      handleItemToggle(item.id);
                      onQuestionClick?.(item);
                    }}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-300"
                  >
                    <span className="text-white font-medium text-lg pr-4">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2">
                      <div className="text-gray-300 leading-relaxed text-base p-4 bg-slate-900/30 rounded-lg border-l-4 border-orange-500/50">
                        {item.answer}
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default FuturisticFAQ;