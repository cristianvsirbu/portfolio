import React from 'react';
import { Job as JobType } from '@/lib/types';

interface JobProps {
  job: JobType;
}

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="flex flex-col gap-8 w-full md:w-1/2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="job-title">{job.company}</h1>
          <h2 className="subtitle">{job.location}</h2>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="job-title">{job.position}</h1>
          <h2 className="subtitle">{job.period}</h2>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {job.highlights.map((highlight, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="font-medium">{highlight.title}</h3>
            <p className="paragraph">{highlight.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
