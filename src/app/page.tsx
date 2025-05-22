'use client';
import React, { useEffect, useRef, useState } from 'react';
import { SECTIONS } from '@/lib/constants';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');
  const navSections = SECTIONS.filter((section) => !section.isSpecial);
  const allSectionIds = SECTIONS.map((section) => section.id);
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
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
      Object.values(currentSections).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [allSectionIds]);

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 flex gap-6 justify-center">
        <a
          href="#home"
          className={`rounded-full backdrop-blur-sm flex items-center justify-center cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12 font-sonsie text-2xl`}
        >
          C
        </a>

        <div className="flex backdrop-blur-sm items-center justify-center gap-8 border-2 border-[#c9c9c9]/50 rounded-full p-2">
          {navSections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              className={`text-white h-7 flex items-center px-4 ${
                activeSection === section.id
                  ? 'bg-[#d9d9d9]/40 rounded-full'
                  : ''
              }`}
            >
              {section.name}
            </a>
          ))}
          <a
            href="#resume"
            className="px-4 h-7 flex items-center cursor-pointer bg-red-500 text-white rounded-full"
          >
            Resume
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-[1200px]">
        {SECTIONS.map(({ id, component: Component }) => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center"
          >
            <Component />
          </section>
        ))}
      </main>
    </>
  );
}
