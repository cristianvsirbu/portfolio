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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  // Close mobile menu when clicking a navigation link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Desktop Navigation */}
      <motion.nav
        className="py-4 hidden md:flex gap-6 justify-center"
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

      {/* Mobile Navigation Header */}
      <div className="flex md:hidden px-4 py-4 justify-between items-center backdrop-blur-sm">
        <motion.a
          href="#home"
          className="rounded-full flex transition-all duration-150 items-center justify-center cursor-pointer h-10 w-10 font-sonsie text-2xl"
          whileTap={{ scale: 0.95 }}
          onClick={handleNavLinkClick}
        >
          {activeSection === 'home' ? (
            <GradientText>C</GradientText>
          ) : (
            <span>C</span>
          )}
        </motion.a>
        
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 p-2"
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-current block transition-all duration-300"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-full bg-current block transition-all duration-300"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-current block transition-all duration-300"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center justify-center flex-1 pt-24 pb-16 px-8">
              {navSections.map((section) => (
                <motion.a
                  href={`#${section.id}`}
                  key={section.id}
                  onClick={handleNavLinkClick}
                  variants={mobileNavItemVariants}
                  className="text-3xl font-medium py-5 border-b border-gray-800 w-full text-center"
                  style={{
                    color: activeSection === section.id ? '#ffffff' : '#9ca3af',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {section.name}
                </motion.a>
              ))}
              
              <motion.a
                href="#resume"
                onClick={handleNavLinkClick}
                variants={mobileNavItemVariants}
                className="mt-8 text-3xl font-medium py-3 px-12 rounded-full"
                style={{
                  backgroundColor: currentTheme.primaryColor,
                }}
                whileTap={{ scale: 0.98 }}
              >
                Resume
              </motion.a>
            </div>
            
            <div className="pb-8 flex justify-center">
              <ThemeSelector />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}