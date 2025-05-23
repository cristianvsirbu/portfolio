'use client';
import React, { createContext, useState, useEffect } from 'react';
import { THEMES } from '@/lib/themes';
import { ThemeColor } from '@/lib/types';

type ThemeContextType = {
  currentTheme: ThemeColor;
  setTheme: (themeId: string) => void;
  isChanging: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: THEMES[0],
  setTheme: () => {},
  isChanging: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>(THEMES[0]);
  const [isChanging, setIsChanging] = useState(false);

  const setTheme = (themeId: string) => {
    const theme = THEMES.find((t) => t.id === themeId);
    if (theme) {
      setIsChanging(true);
      setCurrentTheme(theme);

      // Store user preference
      localStorage.setItem('theme', themeId);

      // Allow time for animation
      setTimeout(() => setIsChanging(false), 1000);
    }
  };

  // Apply theme to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--primary',
      currentTheme.primaryColor
    );
    document.documentElement.style.setProperty(
      '--secondary',
      currentTheme.secondaryColor
    );
  }, [currentTheme]);

  // Load saved theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isChanging }}>
      {children}
    </ThemeContext.Provider>
  );
};
