import React from 'react';
import Image from 'next/image';
import {
  PROFESSIONAL_YEARS,
  PROFILE_PIC,
  PROGRAMMING_YEARS,
  TECHNOLOGIES,
} from '@/lib/constants';
import TermHighlighter from './TermHighlighter';

const About = () => {
  const mainTechnologies = TECHNOLOGIES.filter(
    (technology) => technology.category === 'main'
  );
  const additionalTechnologies = TECHNOLOGIES.filter(
    (technology) => technology.category === 'additional'
  );

  return (
    <>
      <h1 className="title">About Me</h1>
      <h2 className="subtitle">
        Hey there! My name is Cristian and I like building nice things for the
        web.
      </h2>

      {/* Profile picture - visible on mobile between subtitle and paragraph */}
      <figure className="md:hidden my-6 flex justify-center">
        <Image
          priority={true}
          src={PROFILE_PIC}
          alt="Cristian Sîrbu's profile picture"
          width={280}
          height={280}
          className="rounded-lg"
        />
      </figure>

      <p className="paragraph mt-5 text-center md:text-left">
        <TermHighlighter>
          I’ve been coding professionally for {PROFESSIONAL_YEARS} years, but my
          love for building web interfaces started back in university{' '}
          {PROGRAMMING_YEARS} years ago - when I got completely absorbed by
          Vanilla CSS and the magic of making a webpage look just right. Today,
          I work with React, Next.js, and TypeScript, but that same obsession
          with detail sticks around: I want interfaces that feel effortless,
          load fast, and — above all — just make sense.
        </TermHighlighter>
      </p>

      <div className="flex justify-between items-start">
        <section className="w-full md:w-1/2 flex flex-col gap-8 mt-8">
          <section>
            <h2 className="subtitle">My Everyday Stack:</h2>
            <ul className="w-full flex mt-4 flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start">
              {mainTechnologies.map((tech) => (
                <li
                  key={tech.name}
                  className="flex flex-col items-center gap-1 sm:gap-2 w-[80px] sm:w-auto"
                >
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={64}
                    height={64}
                  />
                  <span className="text-white text-xs text-center">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="subtitle">Additional Technologies:</h2>
            <ul className="grid grid-cols-6 lg:grid-cols-9 gap-4 mt-4">
              {additionalTechnologies.map((tech) => (
                <li
                  key={tech.name}
                  className="flex flex-col items-center gap-1"
                >
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={48}
                    height={48}
                  />
                  <span className="text-white text-[10px] text-center">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </section>

        {/* Profile picture - visible on desktop only */}
        <figure className="hidden md:block mt-8">
          <Image
            priority={false}
            src={PROFILE_PIC}
            alt="Cristian Sîrbu's profile picture"
            width={400}
            height={400}
          />
        </figure>
      </div>
    </>
  );
};

export default About;
