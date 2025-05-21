import React from 'react';
import Job from './Job';
import { JOBS } from '@/lib/constants';

const Experience = () => {
  return (
    <section className="px-4 md:px-6">
      <h1 className="title">Experience</h1>
      <h2 className="subtitle">Where I&apos;ve Worked:</h2>
      <div className="flex flex-col md:flex-row gap-16 mt-8">
        {JOBS.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Experience;