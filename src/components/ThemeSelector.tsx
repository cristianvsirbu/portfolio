'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { THEMES } from '@/lib/themes';
import { useState, useEffect, useRef } from 'react';

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();
  const [showThemes, setShowThemes] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        showThemes
      ) {
        setShowThemes(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemes]);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (showThemes) {
      setIsAnimating(true);
      // Animation duration: container (300ms) + last item delay (items × 50ms)
      const animationDuration = 300 + THEMES.length * 50;
      const timer = setTimeout(() => setIsAnimating(false), animationDuration);
      return () => clearTimeout(timer);
    }
  }, [showThemes]);

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.2,
      },
    }),
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.2,
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="z-50 relative" ref={containerRef}>
      <motion.button
        className="rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-auto px-2 gap-2"
        onClick={() => setShowThemes(!showThemes)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          aria-hidden="true"
          className="rounded-full size-6"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primaryColor}, ${currentTheme.secondaryColor})`,
          }}
        ></div>
        <span className={`${showThemes ? 'text-white' : 'text-[#86868b]'}`}>
          Themes
        </span>
      </motion.button>

      <AnimatePresence>
        {showThemes && isLargeScreen && (
          <motion.div
            className={`absolute top-16 backdrop-blur-sm border-2 border-[#c9c9c9]/50 rounded-2xl p-2 flex flex-col gap-1 ${
              isLargeScreen ? 'left-0' : 'right-0'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {THEMES.map((theme, i) => (
              <motion.button
                key={theme.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={i}
                className={`py-1 rounded-xl w-full flex items-center cursor-pointer gap-3`}
                whileHover={!isAnimating ? { scale: 1.02 } : {}}
                whileTap={!isAnimating ? { scale: 0.98 } : {}}
                onClick={() => {
                  setTheme(theme.id);
                  setShowThemes(false);
                }}
              >
                <div
                  className="rounded-full size-6 flex-shrink-0 relative flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                  }}
                >
                  {theme.id === currentTheme.id && (
                    <motion.div
                      className="w-3 h-3 bg-black rounded-full"
                      layoutId="desktopThemeIndicator"
                    />
                  )}
                </div>
                <span className="text-white font-medium text-sm">
                  {theme.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Mobile optimized theme selector */}
        {showThemes && !isLargeScreen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 pb-6 pt-4 px-4 backdrop-blur-md bg-black/80 border-t-2 border-[#c9c9c9]/50 z-50"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <p className="text-center mb-4 text-white font-medium">Themes</p>
            <motion.div
              className="flex justify-center flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {THEMES.map((theme, i) => (
                <motion.button
                  key={theme.id}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  className="flex flex-col items-center gap-2"
                  onClick={() => {
                    setTheme(theme.id);
                    setShowThemes(false);
                  }}
                >
                  <motion.div
                    className="rounded-full size-14 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme.id === currentTheme.id && (
                      <motion.div
                        className="w-6 h-6 bg-black rounded-full"
                        layoutId="themeIndicator"
                      />
                    )}
                  </motion.div>
                  <span className="text-white text-xs">{theme.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
