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

  const handleNavLinkClick = (e?: React.MouseEvent, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
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
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Desktop Navigation */}
      <motion.nav
        className="py-4 hidden lg:flex gap-6 justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.a
          href="/#home"
          variants={item}
          className={`rounded-full backdrop-blur-sm flex transition-all duration-150 items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12 font-sonsie text-2xl`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <GradientText
            className={`${activeSection === 'home' ? 'text-transparent' : 'text-white'}`}
          >
            C
          </GradientText>
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
              href={`/#${section.id}`}
              key={section.id}
              ref={(el) => {
                navRefs.current[section.id] = el;
              }}
              className={`h-7 flex items-center px-4 relative z-10`}
              style={{
                color: activeSection === section.id ? '#ffffff' : '#9ca3af',
              }}
              transition={{ duration: 0.1, type: 'tween' }}
              whileHover={{
                scale: 1.1,
                color: 'rgba(255, 255, 255, 1)',
                transition: { duration: 0.1, type: 'tween', stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {section.name}
            </motion.a>
          ))}

          <motion.a
            href="/resume/CRISTIAN-SIRBU-RESUME.pdf"
            className="px-4 h-7 flex items-center bg-secondary cursor-pointer rounded-full relative z-10"
            style={{
              backgroundColor: currentTheme.primaryColor,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            download
          >
            Resume
          </motion.a>
        </motion.div>
        <motion.div variants={item}>
          <ThemeSelector />
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation with unified background */}
      <motion.div
        className="lg:hidden fixed inset-x-0 top-0 backdrop-blur-sm bg-black/60 z-50 flex flex-col"
        animate={{
          height: isMobileMenuOpen ? '100vh' : '68px',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        {/* Mobile Header */}
        <div className="flex p-4 justify-between items-center relative">
          <motion.a
            href="/#home"
            className="rounded-full flex transition-all duration-150 items-center justify-center cursor-pointer h-10 w-10 font-sonsie text-2xl overflow-hidden"
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleNavLinkClick(e, 'home')}
          >
            <GradientText
              className={`flex items-center justify-center w-full h-full text-3xl ${activeSection === 'home' ? 'text-transparent' : 'text-white'}`}
            >
              C
            </GradientText>
          </motion.a>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 p-2"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { top: '50%', y: '-50%', rotate: 45 }
                    : { top: '0%', y: '0%', rotate: 0 }
                }
                className="absolute h-0.5 w-full bg-current block transition-all duration-300 origin-center"
                style={{ height: '2px' }}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute top-1/2 -translate-y-1/2 h-0.5 w-full bg-current block transition-all duration-300"
                style={{ height: '2px' }}
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { bottom: '50%', y: '50%', rotate: -45 }
                    : { bottom: '0%', y: '0%', rotate: 0 }
                }
                className="absolute bottom-0 h-0.5 w-full bg-current block transition-all duration-300 origin-center"
                style={{ height: '2px' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="flex-1 flex flex-col overflow-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col items-center justify-center flex-1 pt-8 pb-16 px-8">
                {navSections.map((section) => (
                  <motion.a
                    href={`/#${section.id}`}
                    key={section.id}
                    onClick={(e) => handleNavLinkClick(e, section.id)}
                    variants={mobileNavItemVariants}
                    className="text-3xl font-medium py-5 border-b border-white/10 w-full text-center"
                    style={{
                      color:
                        activeSection === section.id ? '#ffffff' : '#9ca3af',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.name}
                  </motion.a>
                ))}

                <motion.a
                  href="/resume/CRISTIAN-SIRBU-RESUME.pdf"
                  variants={mobileNavItemVariants}
                  className="mt-8 text-3xl font-medium py-3 px-12 rounded-full"
                  style={{
                    backgroundColor: currentTheme.primaryColor,
                  }}
                  whileTap={{ scale: 0.98 }}
                  download
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
      </motion.div>
    </header>
  );
}
