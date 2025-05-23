import React from 'react';
import { Job as JobType } from '@/lib/types';
import GradientText from './GradientText';
import TermHighlighter from './TermHighlighter';

interface JobProps {
  job: JobType;
}

export default function Job({ job }: JobProps) {
  return (
    <div className="flex flex-col gap-8 w-full md:w-1/2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="job-title">{job.company}</h1>
          <h2 className="subtitle">{job.location}</h2>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="project-title">{job.position}</h1>
          <h2 className="subtitle">
            {job.isActual ? (
              <GradientText>{job.period}</GradientText>
            ) : (
              job.period
            )}
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {job.highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="font-medium">{highlight.title}</h3>
            <p className="paragraph">
              <TermHighlighter>{highlight.content}</TermHighlighter>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
