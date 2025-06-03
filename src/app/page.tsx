'use client';
import React from 'react';
import { SECTIONS } from '@/lib/constants';

const fullScreenSections = ['home', 'contact'];

export default function Page() {
  const getContainerClasses = (sectionId: string) => {
    if (fullScreenSections.includes(sectionId)) {
      return 'h-screen flex items-center justify-center';
    }
    return 'min-h-screen flex items-center justify-center py-16 md:py-24';
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-8">
      {SECTIONS.map(({ id, component: Component }) => (
        <section key={id} id={id} className={getContainerClasses(id)}>
          <Component />
        </section>
      ))}
    </div>
  );
}
