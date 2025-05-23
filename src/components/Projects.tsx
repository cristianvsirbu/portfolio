import React from 'react';
import Project from './Project';
import { PROJECTS } from '@/lib/constants';

const Projects = () => {
  return (
    <>
      <h1 className="title">Projects</h1>
      <h2 className="subtitle">Stuff I&apos;ve Made:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        {PROJECTS.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
