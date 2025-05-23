'use client';
import React from 'react';
import { SECTIONS } from '@/lib/constants';

export default function Page() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-8">
      {SECTIONS.map(({ id, component: Component }) => (
        <section
          key={id}
          id={id}
          className="min-h-screen flex items-center justify-center"
        >
          <Component />
        </section>
      ))}
    </div>
  );
}
