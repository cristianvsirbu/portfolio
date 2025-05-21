'use client';
import { useState, useEffect, useMemo } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  const sections = useMemo(
    () => ['about', 'experience', 'projects', 'contact'],
    []
  );

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateSectionFromHash = () => {
      const hash = window.location.hash.substring(1);
      if (sections.includes(hash)) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
    };
    updateSectionFromHash();

    window.addEventListener('hashchange', updateSectionFromHash);

    return () =>
      window.removeEventListener('hashchange', updateSectionFromHash);
  }, [sections]);

  const handleSectionClick = (section: string) => {
    if (section === 'home') {
      window.history.pushState({}, '', '/');
      // Manually trigger hashchange event since pushState doesn't do it
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.location.hash = section;
    }
  };

  return (
    <main className="min-h-screen max-w-[1200px] mx-auto flex flex-col">
      <nav className="flex gap-6 justify-center my-8">
        <button
          onClick={() => handleSectionClick('home')}
          className={`rounded-full cursor-pointer border-2 border-[#c9c9c9]/50 h-12 w-12 font-sonsie text-2xl ${
            activeSection === 'home' ? 'text-white' : 'text-gray-400'
          }`}
        >
          C
        </button>

        <div className="flex gap-8 border-2 border-[#c9c9c9]/50 rounded-full p-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`px-4 cursor-pointer hover:text-white ${
                activeSection === section
                  ? 'text-white rounded-full bg-[#d9d9d9]/40'
                  : 'text-gray-400'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            className={`px-4 cursor-pointer bg-red-500 text-white rounded-full`}
          >
            Resume
          </button>
        </div>
      </nav>

      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </main>
  );
}
