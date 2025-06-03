'use client';
import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project as ProjectType } from '@/lib/types';
import Image from 'next/image';
import TermHighlighter from './TermHighlighter';

interface ProjectProps {
  project: ProjectType;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Project = memo(
  function Project({ project }: ProjectProps) {
    // Memoize class names to prevent recalculation
    const imageClassName = useMemo(
      () => (project.isEmpty ? 'project-gradient-bg rounded-[20px]' : ''),
      [project.isEmpty]
    );

    return (
      <motion.div
        className="flex flex-col gap-8 w-full h-full items-center lg:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ willChange: 'auto' }}
      >
        <Image
          src={project.icon}
          alt={`${project.name} icon`}
          width={150}
          height={150}
          className={imageClassName}
          loading="lazy"
          decoding="async"
          priority={false}
        />

        <section className="flex flex-col items-center lg:items-start">
          <h1 className="project-title">{project.name}</h1>
          <p className="paragraph mt-2 text-center lg:text-left">
            <TermHighlighter>{project.description}</TermHighlighter>
          </p>
        </section>

        <div className="mt-auto flex flex-col lg:flex-row gap-3 md:gap-6 w-full">
          {project.site && (
            <motion.a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="site-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src="/icons/misc/external_link.svg"
                alt={`Open ${project.name} site`}
                width={18}
                height={18}
              />
              <span>Visit Site</span>
            </motion.a>
          )}

          {project.repo && (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              <Image
                src="/icons/misc/github_white.svg"
                alt={`Open ${project.name} GitHub repo`}
                width={18}
                height={18}
              />
              <span>GitHub Repo</span>
            </motion.a>
          )}
        </div>
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    // Perform a shallow comparison of relevant fields
    const prevProject = prevProps.project;
    const nextProject = nextProps.project;
    return (
      prevProject.isEmpty === nextProject.isEmpty &&
      prevProject.icon === nextProject.icon &&
      prevProject.name === nextProject.name &&
      prevProject.description === nextProject.description &&
      prevProject.site === nextProject.site &&
      prevProject.repo === nextProject.repo
    );
  }
);

export default Project;
