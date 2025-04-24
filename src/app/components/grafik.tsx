"use client";

import React, { useState, useId, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check,
  Palette,
  Clock,
  ChevronRight
} from "lucide-react";

// Komponenta pro futuristické animované pozadí
const FuturisticBackground: React.FC = () => {
  const uniqueId = useId();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Předdefinování pozic - žádné dynamické výpočty během renderování
  const particlePositions = [
    { left: "7%", endLeft: "12%" },
    { left: "14%", endLeft: "9%" },
    { left: "21%", endLeft: "26%" },
    { left: "28%", endLeft: "23%" },
    { left: "35%", endLeft: "40%" },
    { left: "42%", endLeft: "37%" },
    { left: "49%", endLeft: "54%" },
    { left: "56%", endLeft: "51%" },
    { left: "63%", endLeft: "68%" },
    { left: "70%", endLeft: "65%" },
    { left: "77%", endLeft: "82%" },
    { left: "84%", endLeft: "79%" },
    { left: "91%", endLeft: "96%" },
    { left: "98%", endLeft: "93%" },
    { left: "10%", endLeft: "15%" }
  ];
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Jemná mřížka na pozadí */}
      <div className="absolute inset-0 opacity-[0.05]" 
        style={{
          backgroundImage: 
            `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} 
      />
      
      {/* Výraznější pulsující kruhy v pozadí */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(15, 23, 42, 0) 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Hexagon se vykreslí i na serveru, ale bez animace */}
      <div 
        className="absolute"
        style={{
          width: '1000px',
          height: '1000px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(249, 115, 22, 0.1)',
          opacity: 0.15
        }}
      />
      
      {/* Vykreslování částic jen na klientovi kvůli hydrataci */}
      {isMounted && particlePositions.map((pos, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={`particle-${uniqueId}-${i}`}
            className="absolute w-1 h-1 rounded-full z-10"
            style={{
              backgroundColor: isEven ? '#F97316' : '#38BDF8',
              boxShadow: isEven ? '0 0 10px #F97316' : '0 0 10px #38BDF8',
              left: pos.left,
              top: '100%',
            }}
            animate={{
              top: [null, '-10%'],
              left: [null, pos.endLeft],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8 + (i % 5),
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut",
              times: [0, 0.6, 1]
            }}
          />
        );
      })}
    </div>
  );
};

// Definice typů
interface FeatureItemProps {
  children: React.ReactNode;
}

// Futuristická položka s checkmarkem
const FeatureItem: React.FC<FeatureItemProps> = ({ children }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="mr-3 mt-1 text-green-500 flex-shrink-0">
        <Check className="w-5 h-5" />
      </div>
      <span className="text-gray-300">{children}</span>
    </div>
  );
};

// Definice typů balíčku
interface PricingPackageProps {
  title: string;
  price: string;
  features: string[];
  color: string;
}

// Futuristický balíček
const PricingPackage: React.FC<PricingPackageProps> = ({ 
  title, 
  price, 
  features, 
  color 
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 border border-slate-700/30 rounded-lg z-10"></div>
      
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l rounded-tl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r rounded-tr-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l rounded-bl-lg opacity-70" style={{ borderColor: color }}></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r rounded-br-lg opacity-70" style={{ borderColor: color }}></div>
      
      <div className="p-6 h-full bg-[#111827]/70 backdrop-blur-sm flex flex-col">
        <motion.div 
          className="absolute inset-0 opacity-0 pointer-events-none rounded-lg"
          style={{ 
            background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)` 
          }}
          animate={{ 
            opacity: isHovered ? 0.8 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        <h3 
          className="text-2xl font-bold mb-2" 
          style={{ color }}
        >
          {title}
        </h3>
        
        <div className="mb-6">
          <div 
            className="text-xl font-bold inline-block px-4 py-1 rounded-full"
            style={{ 
              color: 'white',
              backgroundColor: `${color}30`,
              border: `1px solid ${color}` 
            }}
          >
            {price}
          </div>
        </div>
        
        <div className="flex-grow">
          {features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start mb-3">
              <div className="mr-3 mt-[1px] text-green-500 flex-shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Definice typů pro prvek procesu
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

// Futuristický prvek procesu
const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  isLast = false 
}) => {
  return (
    <div className="relative flex">
      <div className="mr-5 flex-shrink-0">
        <div className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center font-bold text-orange-500 relative z-10 bg-[#0f172a]">
          {number}
        </div>
        {!isLast && (
          <div className="absolute top-10 bottom-0 left-5 w-px bg-gradient-to-b from-orange-500/50 to-orange-500/0"></div>
        )}
      </div>
      
      <div className="pb-10">
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

// Definice typů balíčku pro data
interface PackageData {
  title: string;
  price: string;
  features: string[];
  color: string;
}

// Grafické služby komponenta
const GraphicDesignPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'process'>('pricing');
  
  // Data balíčků
  const packages: PackageData[] = [
    {
      title: "Basic",
      price: "od 3 000 Kč",
      features: [
        "Logo",
        "2-3 návrhy",
        "2 revize",
        "Dodání 5-7 dní"
      ],
      color: "#F97316"
    },
    {
      title: "Standard",
      price: "od 5 000 Kč",
      features: [
        "Kompletní branding",
        "3 koncepty",
        "5 revizí",
        "Dodání 15 dní"
      ],
      color: "#F97316"
    },
    {
      title: "Premium",
      price: "od 8 000 Kč",
      features: [
        "Plná identita s brand manuálem",
        "6+ konceptů",
        "Expresní dodání",
        "Vizitka zdarma",
        "5 revizí",
        "Detailní návrh materiálů",
        "Dodání 7-10 dní"
      ],
      color: "#F97316"
    }
  ];
  
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
      <FuturisticBackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-10">
          <Link 
            href="/sluzby" 
            className="inline-flex items-center text-gray-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Zpátky na přehled služeb</span>
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-orange-500 mb-6">
            Grafika & Branding
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Vytvořím pro vás moderní grafiku, kompletní firemní identitu i brand manuál. Vaše značka
            bude působit profesionálně a jednotně napříč všemi kanály – od loga přes tiskoviny až po
            sociální sítě.
          </p>
          
          <div className="flex justify-center mb-10">
            <div className="px-6 py-3 rounded-lg border border-orange-500 bg-orange-500/10 backdrop-blur-sm flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-3" />
              <span className="text-white font-medium">Hodinová sazba od</span>
              <span className="text-orange-500 text-xl font-bold ml-2">1000 Kč</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
            <FeatureItem>Design obalů</FeatureItem>
            <FeatureItem>Důraz na originalitu</FeatureItem>
            <FeatureItem>Banery a tiskoviny</FeatureItem>
            <FeatureItem>Brand manuál</FeatureItem>
            <FeatureItem>Omezený počet úprav</FeatureItem>
            <FeatureItem>Logo v různých formátech</FeatureItem>
          </div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-slate-700">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 relative ${
                activeTab === 'pricing' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Ceník
              {activeTab === 'pricing' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 relative ${
                activeTab === 'process' ? 'text-orange-500' : 'text-gray-400 hover:text-white'
              }`}
            >
              Postup
              {activeTab === 'process' && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </div>
        </div>
        
        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <PricingPackage
                  key={index}
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  color={pkg.color}
                />
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Kontaktujte mě pro kalkulaci</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <p className="text-gray-400 mt-4">
                Každý projekt je jedinečný. Kontaktujte mě pro nezávaznou konzultaci a přesnou kalkulaci.
              </p>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'process' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-16">
              <ProcessStep
                number={1}
                title="Konzultace"
                description="V první fázi se seznámíme s vaší značkou a požadavky. Projdeme si cílovou skupinu, konkurenci a vaše preference. Stanovíme jasný plán toho, co potřebujete a v jakých formátech."
              />
              
              <ProcessStep
                number={2}
                title="Návrhy konceptů"
                description="Na základě vašeho briefu připravím několik originálních kreativních konceptů, které budou odpovídat vaší firemní identitě a osloví vaši cílovou skupinu."
              />
              
              <ProcessStep
                number={3}
                title="Úpravy & revize"
                description="Vyberete preferovaný koncept, který následně doladíme k dokonalosti. Počet revizí závisí na zvoleném balíčku. Každý detail vašeho designu bude precizně vyladěn."
              />
              
              <ProcessStep
                number={4}
                title="Finální dodání"
                description="Po schválení finální verze připravím všechny potřebné formáty a velikosti pro různá použití (tisk, web, sociální sítě). U vyšších balíčků včetně detailního brand manuálu."
                isLast
              />
            </div>
            
            <div className="text-center p-6 border border-slate-700 rounded-lg bg-slate-800/30">
              <h4 className="text-xl font-bold text-white mb-4">Máte zájem o spolupráci?</h4>
              <p className="text-gray-300 mb-6">
                Možnost tvorby jednotlivých prvků (banery, tiskoviny, sociální sítě) i kompletního brandu. Kontaktujte mě pro konzultaci vašeho projektu.
              </p>
              <Link href="/kontakt" className="inline-flex items-center px-6 py-3 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                <span>Nezávazná konzultace</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GraphicDesignPage;