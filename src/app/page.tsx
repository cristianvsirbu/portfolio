'use client';
import { useState, useEffect, useMemo } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function Home() {
  // Only define the sections you want in the hash-based navigation
  const sections = useMemo(
    () => ['about', 'experience', 'projects', 'contact'],
    []
  );

  // The initial state defaults to "home"
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (sections.includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection('home');
    }

    // Listen and update for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (sections.includes(newHash)) {
        setActiveSection(newHash);
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  // Update the hash and active section on button click
  const handleSectionClick = (section: string) => {
    if (section === 'home') {
      // Removes hash from the URL, leaving '/'
      window.history.pushState({}, '', '/');
      setActiveSection('home');
    } else {
      window.location.hash = section;
      setActiveSection(section);
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
