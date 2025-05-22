'use client';
import { useState, useEffect, useRef } from 'react';
import { SECTIONS } from '@/lib/constants';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');
  const navSections = SECTIONS.filter((section) => !section.isSpecial);
  const allSectionIds = SECTIONS.map((section) => section.id);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (debounceTimeout) clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 100);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionsRef.current[id] = el;
        observer.observe(el);
      }
    });

    const currentSections = { ...sectionsRef.current };

    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      Object.values(currentSections).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [allSectionIds]);

  return { activeSection, navSections, allSectionIds };
}