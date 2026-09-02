import React from 'react';
import Job from './Job';
import { JOBS } from '@/lib/constants';

const Experience = () => {
  return (
    <section>
      <h1 className="title">Experience</h1>
      <h2 className="subtitle">Where I&apos;ve Worked:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
        {JOBS.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
