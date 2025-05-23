'use client';
import { useActiveSection } from '@/hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ThemeSelector from './ThemeSelector';
import GradientText from './GradientText';
import { useTheme } from '@/hooks/useTheme';

export default function Navigation() {
  const { activeSection, navSections } = useActiveSection();
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const { currentTheme } = useTheme();
  const [activeItemDimensions, setActiveItemDimensions] = useState<{
    width: number;
    height: number;
    left: number;
  } | null>(null);

  useEffect(() => {
    if (
      activeSection &&
      activeSection !== 'home' &&
      navRefs.current[activeSection]
    ) {
      const current = navRefs.current[activeSection];
      if (current) {
        const rect = current.getBoundingClientRect();
        const parentRect = current.parentElement?.getBoundingClientRect();

        if (parentRect) {
          setActiveItemDimensions({
            width: rect.width,
            height: rect.height,
            left: rect.left - parentRect.left,
          });
        }
      }
    } else if (activeSection === 'home') {
      setActiveItemDimensions(null);
    }
  }, [activeSection]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' } },
  };

  return (
    <header className="sticky top-0 z-50">
      <motion.nav
        className="py-4 flex gap-6 justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a
          href="#home"
          variants={item}
          className={`rounded-full backdrop-blur-sm flex transition-all duration-150 items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12 font-sonsie text-2xl`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {activeSection === 'home' ? (
            <GradientText>C</GradientText>
          ) : (
            <span>C</span>
          )}
        </motion.a>

        <motion.div
          variants={item}
          className="relative flex backdrop-blur-sm items-center justify-center gap-8 border-2 border-[#c9c9c9]/50 rounded-full p-2"
        >
          <AnimatePresence>
            {activeItemDimensions && activeSection !== 'home' && (
              <motion.div
                key="highlight"
                variants={item}
                className="absolute bg-[#d9d9d9]/40 rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  width: activeItemDimensions.width,
                  height: activeItemDimensions.height,
                  left: activeItemDimensions.left,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  width: activeItemDimensions.width,
                  height: activeItemDimensions.height,
                  left: activeItemDimensions.left,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: 'spring',
                  duration: 0.5,
                  opacity: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Navigation links */}
          {navSections.map((section) => (
            <motion.a
              href={`#${section.id}`}
              key={section.id}
              ref={(el) => {
                navRefs.current[section.id] = el;
              }}
              className={`h-7 flex items-center px-4 relative z-10`}
              style={{
                color: activeSection === section.id ? '#ffffff' : '#9ca3af',
              }}
              whileHover={{
                scale: 1.05,
                color: 'rgba(255, 255, 255, 0.9)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {section.name}
            </motion.a>
          ))}

          <motion.a
            href="#resume"
            className="px-4 h-7 flex items-center bg-secondary cursor-pointer rounded-full relative z-10"
            style={{
              backgroundColor: currentTheme.primaryColor,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>
        <motion.div variants={item}>
          <ThemeSelector />
        </motion.div>
      </motion.nav>
    </header>
  );
}
