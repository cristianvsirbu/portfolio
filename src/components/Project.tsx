'use client';
import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project as ProjectType } from '@/lib/types';
import Image from 'next/image';
import TermHighlighter from './TermHighlighter';
import { track } from '@vercel/analytics';

interface ProjectProps {
  project: ProjectType;
  index?: number;
}

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
  },
};

const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const Project = memo(
  function Project({ project, index = 0 }: ProjectProps) {
    const imageClassName = useMemo(
      () => (project.isEmpty ? 'project-gradient-bg rounded-[20px]' : ''),
      [project.isEmpty]
    );

    const handleSiteClick = () => {
      try {
        track('project_site_click', {
          project_name: project.name,
          site_url: project.site || '',
        });
      } catch (error) {
        console.error('Analytics track error (site click):', error);
      }
    };

    const handleRepoClick = () => {
      try {
        track('project_repo_click', {
          project_name: project.name,
          repo_url: project.repo || '',
        });
      } catch (error) {
        console.error('Analytics track error (repo click):', error);
      }
    };

    return (
      <motion.div
        className="flex flex-col gap-8 w-full h-full items-center lg:items-start"
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={index}
      >
        <motion.div
          variants={projectContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-8 w-full h-full items-center lg:items-start"
        >
          <motion.div variants={imageVariants}>
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
          </motion.div>

          <motion.section
            className="flex flex-col items-center lg:items-start"
            variants={contentVariants}
          >
            <h1 className="project-title">{project.name}</h1>
            <p className="paragraph mt-2 text-center lg:text-left">
              <TermHighlighter>{project.description}</TermHighlighter>
            </p>
          </motion.section>

          <motion.div
            className="mt-auto flex flex-col lg:flex-row gap-3 md:gap-6 w-full"
            variants={contentVariants}
          >
            {project.site && (
              <motion.a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button"
                onClick={handleSiteClick}
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
                onClick={handleRepoClick}
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
          </motion.div>
        </motion.div>
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
      prevProject.repo === nextProject.repo &&
      prevProps.index === nextProps.index
    );
  }
);

export default Project;
