'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

interface MotionProviderProps {
  children: ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  // Použití stavu pro uložení informací o tom, zda jsme na klientovi a zda je zařízení mobilní
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Efekt pro detekci klientského prostředí a mobilního zařízení
  useEffect(() => {
    // Označíme, že jsme na klientovi
    setMounted(true);
    
    const checkMobile = () => {
      const ua = navigator.userAgent || '';
      return /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
    };
    
    const checkScreenSize = () => {
      return window.innerWidth <= 768;
    };
    
    setIsMobile(checkMobile() || checkScreenSize());
    
    const handleResize = () => {
      setIsMobile(checkMobile() || checkScreenSize());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Podmíněné renderování pro zabránění hydratačním chybám
  // Vrátíme děti bez MotionConfig dokud nejsme na klientovi
  if (!mounted) {
    return <>{children}</>;
  }

  // Na klientovi použijeme MotionConfig s nastavením reducedMotion
  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  );
}