"use client";

import React from "react";
import Link from "next/link";
import { 
  ChevronRight,
  Video,
  Palette,
  ShoppingCart,
  Monitor,
  Euro,
  Users,
  BarChart,
  Layout,
  Laptop,
  Check
} from "lucide-react";
import { CourseCard } from "./onlinekurz1";

// Component pro obsah záložky MSVP kurzů
export const MSVPCoursesContent = ({ isTab = false }) => {
  return (
    <>
      {isTab && (
        <div className="mb-8">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-start mb-4">
              <Euro className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">MSVP EU Sponzorované kurzy</h3>
                <p className="text-gray-300">
                  Kurzy pro jednotlivce nabízené v rámci programu Ministerstva školství, mládeže a tělovýchovy 
                  s podporou Evropské unie. Cílem je zvýšit kvalifikaci a konkurenceschopnost na trhu práce.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <CourseCard
          title="Grafický design pro začátečníky"
          price="ZDARMA*"
          isMsvp={true}
          duration="40 hodin / 5 týdnů"
          features={[
            "Základy práce s Adobe Photoshop",
            "Principy kompozice a barev",
            "Tvorba tiskovin a online grafiky",
            "Praktické projekty",
            "Certifikát o absolvování",
            "*Plně hrazeno z MSVP a EU fondů"
          ]}
          color="#F97316"
          icon={<Palette className="w-6 h-6" />}
        />
        
        <CourseCard
          title="Video editing s Premiere Pro"
          price="ZDARMA*"
          isMsvp={true}
          duration="45 hodin / 6 týdnů"
          features={[
            "Základy práce s Adobe Premiere Pro",
            "Techniky střihu a kompozice",
            "Korekce barev a zvuk",
            "Export pro různé platformy",
            "Certifikát o absolvování",
            "*Plně hrazeno z MSVP a EU fondů"
          ]}
          color="#38BDF8"
          icon={<Video className="w-6 h-6" />}
        />
        
        <CourseCard
          title="Webdesign s pomocí AI"
          price="ZDARMA*"
          isMsvp={true}
          duration="50 hodin / 7 týdnů"
          features={[
            "Principy moderního webdesignu",
            "Využití AI nástrojů pro design",
            "Základy HTML a CSS",
            "Responzivní design",
            "Certifikát o absolvování",
            "*Plně hrazeno z MSVP a EU fondů"
          ]}
          color="#F97316"
          icon={<Monitor className="w-6 h-6" />}
        />
      </div>
    </>
  );
};

// Component pro obsah záložky firemních kurzů
export const BusinessCoursesContent = ({ isTab = false }) => {
  return (
    <>
      {isTab && (
        <div className="mb-8">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-start mb-4">
              <Users className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Kurzy pro firmy</h3>
                <p className="text-gray-300">
                  Specializované kurzy pro zvýšení kvalifikace zaměstnanců. Kurzy lze přizpůsobit 
                  potřebám vaší firmy a mohou se konat přímo ve vašich prostorách nebo online.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <CourseCard
          title="Shoptet e-shop pro firmy"
          price="od 15 000 Kč"
          isMsvp={false}
          duration="24 hodin / 3 dny"
          features={[
            "Komplexní správa Shoptet e-shopu",
            "Nastavení produktů a kategorií",
            "Marketingové nástroje Shoptetu",
            "Integrace s firemními systémy",
            "Certifikát pro zaměstnance"
          ]}
          color="#F97316"
          icon={<ShoppingCart className="w-6 h-6" />}
        />
        
        <CourseCard
          title="Firemní grafika a branding"
          price="od 12 000 Kč"
          isMsvp={false}
          duration="16 hodin / 2 dny"
          features={[
            "Tvorba jednotného vizuálního stylu",
            "Design marketingových materiálů",
            "Správa brand manuálu",
            "Praktická cvičení na míru",
            "Certifikát pro zaměstnance"
          ]}
          color="#38BDF8"
          icon={<Palette className="w-6 h-6" />}
        />
        
        <CourseCard
          title="Video marketing pro firmy"
          price="od 18 000 Kč"
          isMsvp={false}
          duration="24 hodin / 3 dny"
          features={[
            "Strategie video marketingu",
            "Produkce firemních videí",
            "Editace a post-produkce",
            "Optimalizace pro sociální sítě",
            "Certifikát pro zaměstnance"
          ]}
          color="#F97316"
          icon={<Video className="w-6 h-6" />}
        />
        
        <CourseCard
          title="Webdesign a AI pro marketing"
          price="od 20 000 Kč"
          isMsvp={false}
          duration="32 hodin / 4 dny"
          features={[
            "Moderní trendy v designu webu",
            "Využití AI pro marketingový obsah",
            "UX/UI principy pro konverze",
            "Praktické workshopy na reálných projektech",
            "Certifikát pro zaměstnance"
          ]}
          color="#38BDF8"
          icon={<Monitor className="w-6 h-6" />}
        />
      </div>
    </>
  );
};

// Komponenta pro informace o MSVP kurzech
export const MSVPCoursesInfo = () => {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">Informace o kurzech MSVP</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-start">
          <div className="mr-3 text-blue-500 flex-shrink-0 mt-1">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Pro koho jsou určeny?</h4>
            <p className="text-sm text-gray-300">
              Kurzy jsou určeny jednotlivcům, kteří si chtějí zvýšit kvalifikaci, 
              nezaměstnaným, osobám na rodičovské dovolené, nebo těm, 
              kteří hledají nové uplatnění na trhu práce.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-blue-500 flex-shrink-0 mt-1">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Jak se přihlásit?</h4>
            <p className="text-sm text-gray-300">
              Pro přihlášení je nutné vyplnit registrační formulář a doložit 
              potřebné dokumenty potvrzující způsobilost pro program. 
              S vyřízením veškeré administrativy vám rádi pomůžeme.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-blue-500 flex-shrink-0 mt-1">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Potvrzení o absolvování</h4>
            <p className="text-sm text-gray-300">
              Po úspěšném dokončení kurzu získáte certifikát, který můžete 
              využít při hledání zaměstnání nebo dalším profesním rozvoji. 
              Certifikáty jsou uznávané zaměstnavateli v daném oboru.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-blue-500 flex-shrink-0 mt-1">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Forma výuky</h4>
            <p className="text-sm text-gray-300">
              Kurzy probíhají kombinovanou formou - online výuka v reálném 
              čase s lektorem, doplněná o samostatné praktické úkoly a 
              závěrečný prezenční workshop pro předání zkušeností.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
          <span>Informace o dostupných termínech</span>
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

// Komponenta pro informace o firemních kurzech
export const BusinessCoursesInfo = () => {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-8 mb-12">
      <h3 className="text-2xl font-bold text-white mb-6">Firemní kurzy na míru</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-start">
          <div className="mr-3 text-orange-500 flex-shrink-0 mt-1">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Kurzy pro vaše zaměstnance</h4>
            <p className="text-sm text-gray-300">
              Nabízím specializované kurzy a školení pro firmy, které chtějí zvýšit 
              kvalifikaci svých zaměstnanců v oblasti grafiky, videa, webdesignu a e-commerce. 
              Kurzy jsou vždy přizpůsobeny konkrétním potřebám vaší společnosti.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-orange-500 flex-shrink-0 mt-1">
            <BarChart className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Výhody pro vaši firmu</h4>
            <p className="text-sm text-gray-300">
              Zvýšení produktivity, zlepšení interní komunikace, posílení marketingových 
              kompetencí a zvýšení konkurenceschopnosti. Investice do vzdělávání zaměstnanců 
              se projeví na efektivitě práce a kvalitě výstupů.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-orange-500 flex-shrink-0 mt-1">
            <Laptop className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Forma a organizace</h4>
            <p className="text-sm text-gray-300">
              Kurzy mohou probíhat přímo ve vašich prostorách nebo online, 
              v termínech, které vám vyhovují. Obsah je vždy přizpůsoben 
              reálným projektům a potřebám vaší společnosti.
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-3 text-orange-500 flex-shrink-0 mt-1">
            <Layout className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Přizpůsobení obsahu</h4>
            <p className="text-sm text-gray-300">
              Na základě vstupní konzultace přizpůsobíme obsah školení 
              tak, aby reflektoval specifika vašeho oboru a firemní procesy. 
              Zaměříme se na konkrétní dovednosti, které vaši zaměstnanci potřebují.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
          <span>Nezávazná konzultace pro firmy</span>
          <ChevronRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

// Komponenta FAQ sekce
export const CoursesFAQ = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 relative z-10">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        Často kladené otázky
      </h2>

      <div className="space-y-6">
        {/* FAQ Item 1 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Jak probíhá výuka v online kurzech?</h3>
          <p className="text-gray-300">
            Výuka kombinuje živé online lekce s lektorem přes videokonferenci, 
            samostatnou práci na zadaných projektech a individuální konzultace. 
            Všechny materiály a záznamy jsou dostupné v e-learningovém systému, 
            takže se k nim můžete kdykoliv vrátit i po skončení kurzu.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Jaké vybavení potřebuji pro účast v kurzu?</h3>
          <p className="text-gray-300">
            Pro většinu kurzů potřebujete počítač s připojením k internetu, webkameru 
            a mikrofon. Specifický software je obvykle k dispozici ve zkušební verzi 
            nebo vám poskytneme přístup po dobu kurzu. Detailní požadavky na technické 
            vybavení vám sdělíme před začátkem konkrétního kurzu.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Jak zjistím, zda mám nárok na MSVP kurz?</h3>
          <p className="text-gray-300">
            Kurzy financované z MSVP a EU fondů jsou určeny především pro registrované 
            uchazeče o zaměstnání, osoby na rodičovské dovolené, absolventy a další 
            specifické skupiny. Kontaktujte nás a rádi vám pomůžeme ověřit vaši způsobilost 
            a projdeme s vámi veškerou potřebnou dokumentaci.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Co když nemůžu absolvovat některou z lekcí?</h3>
          <p className="text-gray-300">
            Všechny živé lekce jsou nahrávány a zpřístupněny v e-learningovém systému, 
            takže v případě absence si můžete lekci kdykoliv pustit. Pro úspěšné absolvování 
            kurzu je však nutné odevzdat všechny zadané projekty a splnit minimální 
            docházku stanovenou pro konkrétní kurz (obvykle 80 %).
          </p>
        </div>

        {/* FAQ Item 5 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-3">Lze kurz přizpůsobit na míru naší firmě?</h3>
          <p className="text-gray-300">
            Ano, firemní kurzy jsou vždy přizpůsobeny potřebám a specifikům vaší společnosti. 
            Před zahájením provedeme analýzu potřeb, seznámíme se s vašimi procesy a projekty, 
            abychom mohli vytvořit školení, které přinese maximální užitek právě vašemu týmu. 
            Nabízíme také možnost individuálních konzultací po skončení kurzu.
          </p>
        </div>
      </div>
    </div>
  );
};

// Komponenta závěrečná CTA sekce
export const CoursesCTA = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 mb-10 relative z-10">
      <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-500/30">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          Zvyšte své dovednosti a konkurenceschopnost
        </h2>
        <p className="text-gray-200 text-center mb-8 max-w-3xl mx-auto">
          Ať už hledáte nové uplatnění na trhu práce nebo chcete zvýšit kvalifikaci svého týmu, 
          nabízím kurzy, které vám pomohou dosáhnout vašich cílů. Kontaktujte mě pro více informací 
          o dostupných termínech a možnostech přizpůsobení kurzů vašim potřebám.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link 
            href="/kontakt?typ=msvp" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            <span>Informace o MSVP kurzech</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
          
          <Link 
            href="/kontakt?typ=firemni" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
          >
            <span>Firemní kurzy na míru</span>
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};