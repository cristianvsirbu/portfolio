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
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="job-title">{job.company}</h1>
          <h2 className="subtitle">{job.location}</h2>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <h1 className="text-xl lg:text-[32px] leading-tight font-medium text-left lg:text-right">
            {job.position}
          </h1>
          <h2 className="font-medium text-md lg:text-lg text-left lg:text-right">
            <GradientText
              className={`${job.isActual ? 'text-transparent' : 'text-white'}`}
            >
              {job.period}
            </GradientText>
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {job.highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="font-medium text-center lg:text-left">
              {highlight.title}
            </h3>
            <p className="paragraph text-center lg:text-left">
              <TermHighlighter>{highlight.content}</TermHighlighter>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
