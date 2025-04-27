"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Nastavení data konce akce - například 30 dní od teď
const getEndDate = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30); // Akce končí za 30 dní
  return endDate;
};

interface CountdownProps {
  endDate: Date;
}

// Komponenta pro odpočet času
const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Funkce pro výpočet zbývajícího času
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Když odpočet skončí
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Počáteční výpočet
    calculateTimeLeft();
    
    // Aktualizace každou sekundu
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup při unmount
    return () => clearInterval(timer);
  }, [endDate]);

  // Pomocná funkce pro přidání nuly před jednociferné číslo
  const padWithZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex space-x-2 sm:space-x-3 text-white text-sm sm:text-base">
      <div className="flex flex-col items-center">
        <div className="bg-orange-600 rounded px-2 py-1 font-mono font-bold min-w-[30px] sm:min-w-[36px] text-center">
          {padWithZero(timeLeft.days)}
        </div>
        <span className="text-xs mt-1 opacity-90">dnů</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-orange-600 rounded px-2 py-1 font-mono font-bold min-w-[30px] sm:min-w-[36px] text-center">
          {padWithZero(timeLeft.hours)}
        </div>
        <span className="text-xs mt-1 opacity-90">hod</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-orange-600 rounded px-2 py-1 font-mono font-bold min-w-[30px] sm:min-w-[36px] text-center">
          {padWithZero(timeLeft.minutes)}
        </div>
        <span className="text-xs mt-1 opacity-90">min</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-orange-600 rounded px-2 py-1 font-mono font-bold min-w-[30px] sm:min-w-[36px] text-center">
          {padWithZero(timeLeft.seconds)}
        </div>
        <span className="text-xs mt-1 opacity-90">sec</span>
      </div>
    </div>
  );
};

interface PromoBannerProps {
  onClose?: () => void;
  promoText?: string;
  discountText?: string;
  endDate?: Date;
  showCountdown?: boolean;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  onClose,
  promoText = "Akce na tento měsíc",
  discountText = "30% sleva na webové služby",
  endDate = getEndDate(),
  showCountdown = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Pokud banner není viditelný, nic nevykreslujeme
  if (!isVisible) return null;

  return (
    <motion.div 
      className="relative bg-orange-500 text-white py-2 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Ikona pro zvýraznění akce */}
          <div className="hidden sm:flex items-center justify-center mr-3 bg-white text-orange-500 p-1 rounded-full">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Text akce */}
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <p className="font-bold">{promoText}</p>
            <p className="text-white text-sm sm:text-base">{discountText}</p>
          </div>
        </div>
        
        {/* Pravá část s odpočtem */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {showCountdown && (
            <div className="flex items-center">
              <span className="mr-2 text-sm hidden sm:inline-block">Zbývá:</span>
              <Countdown endDate={endDate} />
            </div>
          )}
          
          {/* Tlačítko pro více informací */}
          <a 
            href="/akce" 
            className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors"
          >
            Více info
          </a>
          
          {/* Tlačítko pro zavření banneru */}
          <button 
            onClick={handleClose}
            className="absolute right-2 top-2 sm:relative sm:right-auto sm:top-auto text-white hover:text-orange-200 transition-colors"
            aria-label="Zavřít oznámení"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Dekorativní prvek - dolní vlna */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div className="h-full w-full bg-orange-400 opacity-30"></div>
      </div>
    </motion.div>
  );
};

export default PromoBanner;