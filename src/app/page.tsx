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

  // The initial state defaults to "home"
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
    <main>
      <nav className="flex gap-4 justify-center my-8">
        <button
          onClick={() => handleSectionClick('home')}
          className={`px-4 py-2 ${
            activeSection === 'home' ? 'text-white' : 'text-gray-400'
          }`}
        >
          Home
        </button>

        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`px-4 py-2 ${
              activeSection === section ? 'text-white' : 'text-gray-400'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      {activeSection === 'home' && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white">Cristian Sîrbu</h1>
          <p className="text-gray-400 mt-4">Welcome to my portfolio website!</p>
        </div>
      )}
      {activeSection === 'about' && <About />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </main>
  );
}
