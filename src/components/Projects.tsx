'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Project from './Project';
import { PROJECTS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const Projects = memo(function Projects() {
  return (
    <section>
      <h1 className="title">Projects</h1>
      <h2 className="subtitle">Stuff I&apos;ve Made:</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.name} variants={itemVariants}>
            <Project project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

export default Projects;
