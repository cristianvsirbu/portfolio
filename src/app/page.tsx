'use client';
import React from 'react';
import { SECTIONS } from '@/lib/constants';

export default function Page() {
  return (
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
  );
}
