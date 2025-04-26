'use client';

import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detekce mobilního zařízení pomocí User Agenta a velikosti obrazovky
  useEffect(() => {
    // Označíme, že jsme na klientovi pro vyřešení hydratace
    setMounted(true);
    
    const checkMobile = () => {
      const ua = navigator.userAgent || '';
      return /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
    };
    
    // Přidáme také kontrolu šířky obrazovky pro lepší detekci
    const checkScreenSize = () => {
      return window.innerWidth <= 768; // Typická breakpoint hodnota pro mobily
    };
    
    setIsMobile(checkMobile() || checkScreenSize());
    
    // Event listener pro změnu velikosti okna
    const handleResize = () => {
      setIsMobile(checkMobile() || checkScreenSize());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pro vyřešení problému s hydratací začneme bez MotionConfig
  // a přidáme ho až po prvním renderu na klientovi
  if (!mounted) {
    return (
      <html lang="cs">
        <body className={cn(inter.className, "bg-gray-900")}>
          {children}
        </body>
      </html>
    );
  }

  // Po mountnutí na klientovi použijeme MotionConfig
  return (
    <html lang="cs">
      <body className={cn(inter.className, "bg-gray-900")}>
        <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}