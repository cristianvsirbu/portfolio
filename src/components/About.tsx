'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const additionalContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section>
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
          I&apos;ve been coding professionally for {PROFESSIONAL_YEARS} years, but my
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
            <motion.ul 
              className="w-full flex mt-4 flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {mainTechnologies.map((tech) => (
                <motion.li
                  key={tech.name}
                  className="flex flex-col items-center gap-1 sm:gap-2 w-[80px] sm:w-auto"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
                </motion.li>
              ))}
            </motion.ul>
          </section>

          <section>
            <h2 className="subtitle">Additional Technologies:</h2>
            <motion.ul 
              className="grid grid-cols-6 lg:grid-cols-9 gap-4 mt-4"
              variants={additionalContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {additionalTechnologies.map((tech) => (
                <motion.li
                  key={tech.name}
                  className="flex flex-col items-center gap-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
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
                </motion.li>
              ))}
            </motion.ul>
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
    </section>
  );
};

export default About;