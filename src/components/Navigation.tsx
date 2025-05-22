'use client';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navigation() {
  const { activeSection, navSections } = useActiveSection();

  return (
    <header className="sticky top-0 z-50">
      <nav className="py-4 flex gap-6 justify-center">
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
    </header>
  );
}
