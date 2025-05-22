'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { ReactNode } from 'react';

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function GradientText({
  children,
  className = '',
  delay = 0,
}: GradientTextProps) {
  const { currentTheme, isChanging } = useTheme();

  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`,
      }}
      initial={{ opacity: 1 }}
      animate={isChanging ? { opacity: [1, 0.8, 1] } : {}}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
      }}
    >
      {children}
    </motion.span>
  );
}
