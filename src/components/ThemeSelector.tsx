'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { THEMES } from '@/lib/themes';
import { useState } from 'react';

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();
  const [showThemes, setShowThemes] = useState(false);

  return (
    <div className="z-50">
      <motion.button
        className="rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12"
        onClick={() => setShowThemes(!showThemes)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          aria-hidden="true"
          className="rounded-full w-6 h-6"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`,
          }}
        ></div>
      </motion.button>

      <AnimatePresence>
        {showThemes && (
          <motion.div
            className="absolute bg-[#1c1c1e] rounded-lg p-3 flex flex-col gap-2 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {THEMES.map((theme) => (
              <motion.button
                key={theme.id}
                className="p-2 rounded-full w-10 h-10 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  border:
                    theme.id === currentTheme.id ? '2px solid white' : 'none',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setTheme(theme.id);
                  setShowThemes(false);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
