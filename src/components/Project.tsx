import React from 'react';
import { Project as ProjectType } from '@/lib/types';
import Image from 'next/image';
import TermHighlighter from './TermHighlighter';

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="flex flex-col gap-8 w-full h-full items-center md:items-start">
      <Image
        src={project.icon}
        alt={`${project.name} icon`}
        width={150}
        height={150}
        className={`${project.isEmpty ? 'gradient-bg rounded-[20px]' : ''}`}
      />

      <section className="flex flex-col items-center md:items-start">
        <h1 className="project-title">{project.name}</h1>
        <p className="paragraph mt-2">
          <TermHighlighter>{project.description}</TermHighlighter>
        </p>
      </section>

      <div className="mt-auto flex flex-col md:flex-row gap-3 md:gap-6 w-full">
        {project.site && (
          <a
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
            className="site-button"
          >
            <Image
              src="/icons/misc/external_link.svg"
              alt={`Open ${project.name} site`}
              width={18}
              height={18}
            />
            <span>Visit Site</span>
          </a>
        )}

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-button"
          >
            <Image
              src="/icons/misc/github_white.svg"
              alt={`Open ${project.name} GitHub repo`}
              width={18}
              height={18}
            />
            <span>GitHub Repo</span>
          </a>
        )}
      </div>
    </div>
  );
}
