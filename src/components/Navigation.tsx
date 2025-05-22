'use client';
import { useActiveSection } from '@/hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Navigation() {
  const { activeSection, navSections } = useActiveSection();
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
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

  return (
    <header className="sticky top-0 z-50">
      <nav className="py-4 flex gap-6 justify-center">
        <a
          href="#home"
          className={`rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12 font-sonsie text-2xl ${
            activeSection === 'home' ? 'text-white' : 'text-gray-400'
          }`}
        >
          C
        </a>

        <div className="relative flex backdrop-blur-sm items-center justify-center gap-8 border-2 border-[#c9c9c9]/50 rounded-full p-2">
          <AnimatePresence>
            {activeItemDimensions && activeSection !== 'home' && (
              <motion.div
                key="highlight"
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
            <a
              href={`#${section.id}`}
              key={section.id}
              ref={(el) => {
                navRefs.current[section.id] = el;
              }}
              className={`h-7 flex items-center px-4 relative z-10 ${
                activeSection === section.id ? 'text-white' : 'text-gray-400'
              }`}
            >
              {section.name}
            </a>
          ))}

          <a
            href="#resume"
            className="px-4 h-7 flex items-center cursor-pointer bg-red-500 text-white rounded-full relative z-10"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
