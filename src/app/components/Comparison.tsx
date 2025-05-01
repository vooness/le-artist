"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, UserPlus, DollarSign, Clock, Zap, Terminal, Code, Shield, CheckCircle, ArrowRight, Sparkles, Cpu } from 'lucide-react';

const Comparison: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  const [hoverPriceCard, setHoverPriceCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animační stavy - adding default value to ensure content displays even if observer fails
  const [animationProgress, setAnimationProgress] = useState(0);
  
  // Force content visibility after a timeout as fallback for mobile
  useEffect(() => {
    // Immediate check to set initial state
    if (typeof window !== 'undefined') {
      const sectionElement = sectionRef.current;
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
          setAnimationProgress(1);
        }
      }
    }
    
    // Fallback for mobile - force visibility after 1 second
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
        setAnimationProgress(1);
      }
    }, 1000);
    
    // Main intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Gradual animation but faster for mobile
          let progress = 0;
          const interval = setInterval(() => {
            progress += 0.04; // Faster animation
            if (progress >= 1) {
              clearInterval(interval);
              progress = 1;
            }
            setAnimationProgress(progress);
          }, 16);
          
          observer.disconnect();
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 } // Lower threshold for mobile
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);
  
  // Manual scroll handler for mobile devices
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
          setAnimationProgress(1);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  
  // Data pro porovnání
  const keyDifferences = [
    {
      title: "Komunikace",
      freelancer: "Přímá komunikace bez prostředníků a zdržení",
      agency: "Komunikace přes account a projektové manažery",
      freelancerPercentage: 100,
      agencyPercentage: 60,
      icon: <Terminal size={24} className="text-orange-500" />
    },
    {
      title: "Cena",
      freelancer: "Platíte pouze za experta, ne za režii a marketing",
      agency: "Až 60% ceny jde na kanceláře, marketing a management",
      freelancerPercentage: 100,
      agencyPercentage: 40,
      icon: <DollarSign size={24} className="text-orange-500" />
    },
    {
      title: "Rychlost",
      freelancer: "Rychlé rozhodování a implementace bez čekání",
      agency: "Zdlouhavé schvalování a předávání mezi odděleními",
      freelancerPercentage: 100,
      agencyPercentage: 70,
      icon: <Zap size={24} className="text-orange-500" />
    }
  ];
  
  // Cenové srovnání
  const pricingComparison = {
    freelancer: { hourlyRate: 900, hours: 30, totalCost: 27000 },
    agency: { hourlyRate: 2500, hours: 30, totalCost: 75000 }
  };
  
  const savingsAmount = pricingComparison.agency.totalCost - pricingComparison.freelancer.totalCost;
  const savingsPercentage = Math.round((savingsAmount / pricingComparison.agency.totalCost) * 100);
  
  // Simplified Counter for better mobile performance
  interface CounterProps {
    value: number;
    startAt?: number;
    className?: string;
  }
  
  const Counter: React.FC<CounterProps> = ({ value, startAt = 0, className = "" }) => {
    const [count, setCount] = useState<number>(startAt);
    
    useEffect(() => {
      if (!isVisible) {
        setCount(value); // Immediately show final value on mobile
        return;
      }
      
      let start = startAt;
      const totalSteps = 20; // Reduced steps for mobile
      const step = (value - startAt) / totalSteps;
      
      const timer = setInterval(() => {
        start += step;
        if ((step > 0 && start >= value) || (step < 0 && start <= value)) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 35); // Slightly slower animation
      
      return () => clearInterval(timer);
    }, [value, startAt, isVisible]);
    
    return <span className={className}>{count.toLocaleString()}</span>;
  };
  
  return (
    <section 
      id="comparison" 
      ref={sectionRef}
      className="py-16 md:py-32 relative bg-[#020410] overflow-hidden"
    >
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Základní mřížka - optimized for mobile */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Světelné přímky - reduced for mobile */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0"></div>
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-orange-500/0 via-orange-500/10 to-orange-500/0"></div>
        </div>
        
        {/* Simplified particles for mobile */}
        <div className="absolute top-[10%] left-[20%] w-1 h-1 rounded-full bg-orange-500/30"></div>
        <div className="absolute bottom-[20%] right-[15%] w-1 h-1 rounded-full bg-blue-500/30"></div>
        
        {/* Reduced blur effects for mobile */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Stylizovaný nadpis - with fallback visibility */}
        <div 
          className={`mb-16 md:mb-20 text-center transition-all duration-700 ${
            animationProgress > 0 ? 'opacity-100 scale-100' : 'opacity-100 scale-100'
          }`}
        >
          {/* Nadpisový blok s futuristickým stylem */}
          <div className="inline-block relative mb-4 px-6 py-2 border border-orange-500/30 bg-black/30 rounded-lg">
            <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-orange-500"></div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-orange-500"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-orange-500"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-orange-500"></div>
            
            <div className="flex items-center justify-center space-x-2">
              <Terminal size={14} className="text-orange-500" />
              <span className="text-sm font-medium text-white tracking-widest font-mono">IMPORT SERVICES</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-white tracking-tight relative">
            <span className="relative">
              <span className="text-orange-500">1 expert</span>
              <span className="absolute -top-1 left-0 w-full h-px bg-orange-500/20"></span>
            </span>
            <span className="mx-2 px-2 relative">
              <span className="text-white">vs</span>
              <span className="absolute -left-1 top-1/2 w-1 h-1 bg-orange-500 rounded-full"></span>
              <span className="absolute -right-1 top-1/2 w-1 h-1 bg-orange-500 rounded-full"></span>
            </span>
            <span className="relative">
              <span className="text-blue-400">agentura</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-blue-500/20"></span>
            </span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center text-sm text-gray-400 space-x-4 bg-black/20 px-4 py-1 rounded-full border border-gray-800">
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                <span className="font-mono">SROVNÁNÍ</span>
              </span>
              <span className="w-6 h-px bg-gray-700"></span>
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                <span className="font-mono">HODNOTA</span>
              </span>
            </div>
          </div>
          
          <div className="mt-6 max-w-2xl mx-auto text-white text-center text-lg relative">
            <p className="leading-relaxed">
              Agentura zaměstnává designéry, marketéry, manažery, vývojáře a testery. 
              Za práci každého z nich musíte zaplatit. <span className="text-orange-500 font-medium">Já zvládnu všechny tyto role sám</span> — 
              a vy platíte pouze jednoho člověka.
            </p>
          </div>
        </div>
        
        {/* KLÍČOVÉ ROZDÍLY - MOBILE OPTIMIZED */}
        <div className="relative mb-16 md:mb-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyDifferences.map((diff, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 transform ${
                  animationProgress > 0.2 || isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <div 
                  className={`relative bg-black/60 border border-gray-800 hover:border-orange-500/50 rounded-lg overflow-hidden transition-all duration-300 ${
                    hoverCard === index ? 'scale-[1.02] shadow-xl shadow-orange-500/10' : ''
                  }`}
                >
                  {/* Futuristické okraje */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500"></div>
                  
                  {/* Hover efekt - záře */}
                  <div className={`absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5 opacity-0 transition-opacity duration-300 ${hoverCard === index ? 'opacity-100' : ''}`}></div>
                  
                  {/* Nadpis karty */}
                  <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-black/80 via-black/40 to-black/80">
                    <div className="flex items-center">
                      <div className={`mr-3 p-1.5 rounded-lg bg-black border border-orange-500/30 transition-transform duration-300 ${
                        hoverCard === index ? 'rotate-6 scale-110' : ''
                      }`}>
                        {diff.icon}
                      </div>
                      <div className="text-xl font-bold text-white">{diff.title}</div>
                    </div>
                    
                    <div className="text-xs text-gray-500 font-mono hidden md:block">
                      comparison_{index + 1}.js
                    </div>
                  </div>
                  
                  <div className="p-5">
                    {/* Freelancer */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-green-500/30 mr-3">
                          <UserPlus size={16} className="text-green-400" />
                        </div>
                        <h4 className="text-base font-bold text-white">Expert</h4>
                        <div className="ml-auto bg-black/60 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-md text-sm">
                          <span className="font-mono">{diff.freelancerPercentage}%</span>
                        </div>
                      </div>
                      <p className="text-white mb-3">{diff.freelancer}</p>
                      <div className="relative h-2 bg-black w-full rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${diff.freelancerPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Agentura */}
                    <div className="pt-3 border-t border-gray-800/50">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-blue-500/30 mr-3">
                          <Users size={16} className="text-blue-400" />
                        </div>
                        <h4 className="text-base font-bold text-white">Agentura</h4>
                        <div className="ml-auto bg-black/60 border border-blue-500/30 text-blue-400 px-2 py-0.5 rounded-md text-sm">
                          <span className="font-mono">{diff.agencyPercentage}%</span>
                        </div>
                      </div>
                      <p className="text-white mb-3">{diff.agency}</p>
                      <div className="relative h-2 bg-black w-full rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${diff.agencyPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CENOVÉ SROVNÁNÍ - OPTIMIZED FOR MOBILE */}
        <div 
          className={`relative mb-16 md:mb-24 max-w-5xl mx-auto transition-all duration-700 transform ${
            animationProgress > 0.4 || isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative bg-gradient-to-br from-black/80 via-black/90 to-black/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg md:shadow-2xl">
            {/* Simplified hexagonal pattern for mobile */}
            <div className="absolute inset-0 opacity-5 hidden md:block" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.980762 15v30L30 60 4.01923788 45V15z' fill='%23f97316' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
            
            {/* Futuristické okraje */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500"></div>
            
            {/* Nadpis */}
            <div className="pt-6 md:pt-8 pb-4 text-center relative">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-black/40 rounded-lg border border-orange-500/30 mb-2">
                <DollarSign size={18} className="text-orange-500 mr-2" />
                <h3 className="text-xl font-bold text-white font-mono">CENOVÉ SROVNÁNÍ</h3>
              </div>
              
              <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-orange-500/50 to-transparent my-4"></div>
              
              <p className="text-white/80 max-w-2xl mx-auto px-4 text-sm md:text-base">
                Porovnání ceny typického webového projektu při spolupráci s expertem nebo s agenturou
              </p>
            </div>
            
            {/* Cenové karty - optimized for mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6 pb-4">
              {/* Karta experta */}
              <div 
                className="relative rounded-xl overflow-hidden"
                onMouseEnter={() => setHoverPriceCard('expert')}
                onMouseLeave={() => setHoverPriceCard(null)}
              >
                <div className="relative border border-green-500/30 rounded-xl overflow-hidden backdrop-blur-sm">
                  {/* Světelné efekty */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500/40 to-green-500/0"></div>
                  
                  <div className="p-4 md:p-5 relative">
                    {/* Nadpis karty */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="p-1.5 md:p-2 bg-black/50 rounded-lg border border-green-500/30">
                          <UserPlus size={20} className="text-green-400" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide">Expert</h4>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-xs font-mono text-green-400">ONLINE</span>
                      </div>
                    </div>
                    
                    {/* Cena s pulzujícím efektem */}
                    <div className="relative mx-auto text-center py-4 md:py-6 px-4 rounded-lg bg-black/30 border border-green-500/20 mb-4 md:mb-6">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        <span className="text-green-400">{pricingComparison.freelancer.hourlyRate} Kč</span>
                        <span className="text-sm font-normal text-gray-400">/hod</span>
                      </div>
                      
                      <div className="text-base md:text-lg text-white">
                        Celkem <span className="font-bold text-green-400">{pricingComparison.freelancer.totalCost.toLocaleString()} Kč</span>
                      </div>
                    </div>
                    
                    {/* Seznam výhod - simplified for mobile */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-green-500/30">
                          <CheckCircle size={12} className="text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm md:text-base">Přímá komunikace bez prostředníků</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-green-500/30">
                          <CheckCircle size={12} className="text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm md:text-base">Účtujete si pouze hodiny experta</p>
                        </div>
                      </div>
                      
                      <div className="md:flex items-start space-x-2 md:space-x-3 hidden">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-green-500/30">
                          <CheckCircle size={12} className="text-green-400" />
                        </div>
                        <div>
                          <p className="text-white">Rychlé rozhodování bez byrokracie</p>
                        </div>
                      </div>
                      
                      <div className="md:flex items-start space-x-2 md:space-x-3 hidden">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-green-500/30">
                          <CheckCircle size={12} className="text-green-400" />
                        </div>
                        <div>
                          <p className="text-white">Všechny role v jedné osobě</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Doplňující informace */}
                    <div className="mt-4 md:mt-6 pt-3 border-t border-green-500/10">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-400 font-mono text-xs md:text-sm">Počet hodin: {pricingComparison.freelancer.hours}h</div>
                        <div className="px-2 py-1 bg-black/50 rounded-md border border-green-500/20 text-green-400 font-mono text-xs">PREFERRED</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Karta agentury */}
              <div 
                className="relative rounded-xl overflow-hidden"
                onMouseEnter={() => setHoverPriceCard('agency')}
                onMouseLeave={() => setHoverPriceCard(null)}
              >
                <div className="relative border border-blue-500/30 rounded-xl overflow-hidden backdrop-blur-sm">
                  {/* Světelné efekty */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0"></div>
                  
                  <div className="p-4 md:p-5 relative">
                    {/* Nadpis karty */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="p-1.5 md:p-2 bg-black/50 rounded-lg border border-blue-500/30">
                          <Users size={20} className="text-blue-400" />
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide">Agentura</h4>
                      </div>
                      
                      <div className="text-xs font-mono text-blue-400 px-1.5 py-0.5 border border-blue-500/20 rounded bg-black/40">corporate</div>
                    </div>
                    
                    {/* Cena s pulzujícím efektem */}
                    <div className="relative mx-auto text-center py-4 md:py-6 px-4 rounded-lg bg-black/30 border border-blue-500/20 mb-4 md:mb-6">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        <span className="text-blue-400">{pricingComparison.agency.hourlyRate} Kč</span>
                        <span className="text-sm font-normal text-gray-400">/hod</span>
                      </div>
                      
                      <div className="text-base md:text-lg text-white">
                        Celkem <span className="font-bold text-blue-400">{pricingComparison.agency.totalCost.toLocaleString()} Kč</span>
                      </div>
                      
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-500"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-blue-500"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-blue-500"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-500"></div>
                    </div>
                    
                    {/* Seznam nevýhod - simplified for mobile */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-blue-500/30">
                          <span className="text-blue-400 text-xs">!</span>
                        </div>
                        <div>
                          <p className="text-white text-sm md:text-base">Komunikace přes account a projektové manažery</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2 md:space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-blue-500/30">
                          <span className="text-blue-400 text-xs">!</span>
                        </div>
                        <div>
                          <p className="text-white text-sm md:text-base">Platíte za režii, kanceláře a marketing</p>
                        </div>
                      </div>
                      
                      <div className="md:flex items-start space-x-2 md:space-x-3 hidden">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-blue-500/30">
                          <span className="text-blue-400 text-xs">!</span>
                        </div>
                        <div>
                          <p className="text-white">Zdlouhavé schvalovací procesy</p>
                        </div>
                      </div>
                      
                      <div className="md:flex items-start space-x-2 md:space-x-3 hidden">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 border border-blue-500/30">
                          <span className="text-blue-400 text-xs">!</span>
                        </div>
                        <div>
                          <p className="text-white">Více lidí pracuje na vašem projektu</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Doplňující informace */}
                    <div className="mt-4 md:mt-6 pt-3 border-t border-blue-500/10">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-400 font-mono text-xs md:text-sm">Počet hodin: {pricingComparison.agency.hours}h</div>
                        <div className="px-2 py-1 bg-black/50 rounded-md border border-blue-500/20 text-blue-400 font-mono text-xs">ENTERPRISE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Srovnání úspory - MOBILE OPTIMIZED */}
            <div className="px-4 md:px-6 pb-6 relative">
              <div className="bg-gradient-to-r from-black/60 via-black/40 to-black/60 border border-orange-500/20 rounded-xl p-4 md:p-6 overflow-hidden">
                <div className="relative">
                  <div className="text-center mb-4 md:mb-6">
                    <div className="inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-1.5 bg-black/50 rounded-lg border border-orange-500/30 mb-2">
                      <Sparkles size={14} className="text-orange-500 mr-2" />
                      <h3 className="text-base md:text-lg font-bold text-white">UŠETŘÍTE S EXPERTEM</h3>
                    </div>
                  </div>
                  
                  {/* Mobile-responsive grid */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 items-center">
                    {/* Částka úspory */}
                    <div className="bg-black/50 rounded-xl border border-orange-500/20 p-3 md:p-5 text-center relative">
                      <h4 className="text-white/80 text-xs md:text-sm font-mono mb-1">CELKOVÁ ÚSPORA</h4>
                      <div className="text-2xl md:text-4xl font-bold text-orange-500 font-mono relative">
                        <span className="relative">
                          <Counter value={savingsAmount} /> Kč
                          <span className="absolute -bottom-1 left-0 w-full h-px bg-orange-500/30"></span>
                        </span>
                      </div>
                    </div>
                    
                    {/* Mobile-optimized simplified chart */}
                    <div className="bg-black/50 rounded-xl border border-gray-800 p-3 md:hidden">
                      <div className="flex justify-between items-end h-16 px-3">
                        <div className="w-6 bg-gradient-to-t from-green-500/80 to-green-500/30 h-5 rounded-t-sm relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white whitespace-nowrap">
                            Expert
                          </div>
                        </div>
                        <div className="w-8 h-px bg-orange-500/30 flex-grow mx-2"></div>
                        <div className="w-6 bg-gradient-to-t from-blue-500/80 to-blue-500/30 h-14 rounded-t-sm relative">
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white whitespace-nowrap">
                            Agentura
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 px-1 text-xs text-gray-400 font-mono">
                        <div>{pricingComparison.freelancer.totalCost.toLocaleString().substring(0,2)}k</div>
                        <div>{pricingComparison.agency.totalCost.toLocaleString().substring(0,2)}k</div>
                      </div>
                    </div>
                    
                    {/* Grafické znázornění for Desktop */}
                    <div className="relative hidden md:block">
                      {/* Futuristický graf srovnání */}
                      <div className="w-full h-32 relative bg-black/50 rounded-xl border border-gray-800 overflow-hidden">
                        {/* Expert bar */}
                        <div className="absolute bottom-0 left-0 w-1/3 bg-gradient-to-t from-green-500/80 to-green-500/30 z-10 rounded-tr-md"
                             style={{ height: '30%' }}>
                          <div className="absolute top-0 left-0 w-full h-1 bg-green-400/50"></div>
                          <div className="absolute bottom-0 w-full text-center text-xs font-bold text-white py-1">
                            Expert
                          </div>
                        </div>
                        
                        {/* Agency bar */}
                        <div className="absolute bottom-0 right-0 w-1/3 bg-gradient-to-t from-blue-500/80 to-blue-500/30 z-10 rounded-tl-md"
                             style={{ height: '85%' }}>
                          <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50"></div>
                          <div className="absolute bottom-0 w-full text-center text-xs font-bold text-white py-1">
                            Agentura
                          </div>
                        </div>
                        
                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-rows-4 gap-0 pointer-events-none">
                          <div className="border-t border-gray-700/30 mt-auto"></div>
                          <div className="border-t border-gray-700/30 mt-auto"></div>
                          <div className="border-t border-gray-700/30 mt-auto"></div>
                          <div className="border-t border-gray-700/30 mt-auto"></div>
                        </div>
                        
                        {/* Spojnice mezi sloupci */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <line x1="16.5" y1="70" x2="83.5" y2="15" 
                                stroke="#f97316" strokeWidth="1" strokeDasharray="2 2" />
                                
                          <circle cx="16.5" cy="70" r="1.5" fill="#f97316" />
                          <circle cx="83.5" cy="15" r="1.5" fill="#f97316" />
                        </svg>
                      </div>
                      
                      {/* Popisky pod grafem */}
                      <div className="flex justify-between mt-2 px-2 text-xs text-gray-400 font-mono">
                        <div>{pricingComparison.freelancer.totalCost.toLocaleString()} Kč</div>
                        <div>{pricingComparison.agency.totalCost.toLocaleString()} Kč</div>
                      </div>
                    </div>
                    
                    {/* Procentuální úspora s kruhovým diagramem */}
                    <div className="bg-black/50 rounded-xl border border-orange-500/20 p-3 md:p-5 text-center relative">
                      <h4 className="text-white/80 text-xs md:text-sm font-mono mb-2">PROCENTUÁLNÍ ÚSPORA</h4>
                      
                      {/* Simplified donut chart for mobile */}
                      <div className="relative w-16 h-16 md:w-24 md:h-24 mx-auto">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#1e293b" strokeWidth="8" />
                          
                          {/* Progress arc - simplified animation for mobile */}
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke="#f97316" 
                            strokeWidth="8"
                            strokeDasharray={`${savingsPercentage * 2.83} 1000`}
                            strokeDashoffset="0"
                            transform="rotate(-90 50 50)"
                            strokeLinecap="round"
                          />
                          
                          <text 
                            x="50" 
                            y="50" 
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="22"
                            fontWeight="bold"
                            fill="white"
                            fontFamily="monospace"
                          >
                            {savingsPercentage}%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lišta s výhodami - simplified for mobile */}
                  <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2 bg-black/50 p-2 rounded-lg border border-gray-800">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-orange-500/30">
                        <Clock size={16} className="text-orange-500" />
                      </div>
                      <p className="text-white text-sm">Rychlejší dodání projektu</p>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-2 bg-black/50 p-2 rounded-lg border border-gray-800">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-orange-500/30">
                        <Cpu size={16} className="text-orange-500" />
                      </div>
                      <p className="text-white text-sm">Práce s nejnovějšími technologiemi</p>
                    </div>
                    
                    <div className="flex items-center space-x-2 bg-black/50 p-2 rounded-lg border border-gray-800">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black border border-orange-500/30">
                        <DollarSign size={16} className="text-orange-500" />
                      </div>
                      <p className="text-white text-sm">Výrazná úspora nákladů</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA S FUTURISTICKÝM DESIGNEM - MOBILE OPTIMIZED */}
        <div 
          className={`mt-12 md:mt-20 text-center transition-all duration-700 transform ${
            animationProgress > 0.6 || isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <a 
            href="/kontakt" 
            className="group relative inline-flex items-center justify-center px-6 md:px-10 py-3 md:py-4 overflow-hidden font-bold text-white rounded-lg border border-orange-500/50 bg-black/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
          >
            {/* Futuristické okraje tlačítka */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-orange-500"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-orange-500"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-orange-500"></div>
            
            <span className="relative flex items-center">
              <Terminal size={18} className="mr-2" />
              <span className="font-mono tracking-wider text-sm md:text-base">KONTAKTOVAT_EXPERTA</span>
            </span>
            
            {/* Blikající animace na tlačítku */}
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-orange-500 opacity-75 animate-pulse"></span>
          </a>
          
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-white bg-black/40 px-3 py-1 rounded-full border border-gray-800">
              <DollarSign size={12} className="text-orange-500" />
              <span className="font-mono text-gray-300">Profesionální výsledky za zlomek ceny</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animační keyframes pro pomalou rotaci */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .text-shadow {
          text-shadow: 0 0 4px rgba(249, 115, 22, 0.6);
        }
      `}</style>
    </section>
  );
};

export default Comparison;