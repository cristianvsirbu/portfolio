'use client';
import { useState, useEffect, useRef } from 'react';
import { SECTIONS } from '@/lib/constants';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');
  const navSections = SECTIONS.filter((section) => !section.isSpecial);
  const allSectionIds = SECTIONS.map((section) => section.id);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    // Track all sections and their visibility ratios
    const sectionVisibility = new Map<string, number>();

    // Less strict thresholds for better detection
    const thresholds = [0.1, 0.2, 0.3, 0.4, 0.5];

    // Update sections visibility values
    const updateSectionVisibility = (id: string, ratio: number) => {
      sectionVisibility.set(id, ratio);
    };

    // Determine the most visible section, with preference to the scroll direction
    const getMostVisibleSection = () => {
      if (sectionVisibility.size === 0) return 'home';

      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const scrollingDown = currentScrollTop > lastScrollTop.current;
      lastScrollTop.current = currentScrollTop;

      let highestVisibleSection = 'home';
      let highestRatio = 0;

      // First pass: find highest visibility ratio
      sectionVisibility.forEach((ratio, id) => {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          highestVisibleSection = id;
        }
      });

      // If section is barely visible (less than 15%), use scroll direction to decide
      if (highestRatio < 0.15) {
        // When scrolling down, prefer the section that's coming into view
        if (scrollingDown) {
          const sections = Array.from(sectionVisibility.entries())
            .filter(([, ratio]) => ratio > 0)
            .sort((a, b) => {
              const aEl = document.getElementById(a[0]);
              const bEl = document.getElementById(b[0]);
              if (!aEl || !bEl) return 0;
              return (
                aEl.getBoundingClientRect().top -
                bEl.getBoundingClientRect().top
              );
            });

          if (sections.length > 0) {
            const [lowestSection] = sections[sections.length - 1];
            return lowestSection;
          }
        } else {
          // When scrolling up, prefer the previous section
          const sections = Array.from(sectionVisibility.entries())
            .filter(([, ratio]) => ratio > 0)
            .sort((a, b) => {
              const aEl = document.getElementById(a[0]);
              const bEl = document.getElementById(b[0]);
              if (!aEl || !bEl) return 0;
              return (
                bEl.getBoundingClientRect().bottom -
                aEl.getBoundingClientRect().bottom
              );
            });

          if (sections.length > 0) {
            const [highestSection] = sections[0];
            return highestSection;
          }
        }
      }

      return highestVisibleSection;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        let needsUpdate = false;

        entries.forEach((entry) => {
          updateSectionVisibility(entry.target.id, entry.intersectionRatio);
          needsUpdate = true;
        });

        if (needsUpdate) {
          const mostVisibleSection = getMostVisibleSection();
          if (mostVisibleSection !== activeSection) {
            setActiveSection(mostVisibleSection);
          }
        }
      },
      {
        threshold: thresholds,
      }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionsRef.current[id] = el;
        observer.observe(el);
        // Initialize visibility map
        sectionVisibility.set(id, 0);
      }
    });

    // Handle fast scrolling with scroll event listener
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection('home');
      } else if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        // Near bottom of page - likely in the last section
        const lastSection = allSectionIds[allSectionIds.length - 1];
        setActiveSection(lastSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, allSectionIds]);

  return { activeSection, navSections, allSectionIds };
}
