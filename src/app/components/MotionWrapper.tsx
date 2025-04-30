"use client";
import { MotionConfig } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

interface MotionWrapperProps {
  children: ReactNode;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : 'never'}>
      {children}
    </MotionConfig>
  );
};

export default MotionWrapper;
