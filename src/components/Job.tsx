'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Job as JobType } from '@/lib/types';
import GradientText from './GradientText';
import TermHighlighter from './TermHighlighter';

interface JobProps {
  job: JobType;
  index?: number;
}

const jobVariants = {
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

const highlightVariants = {
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

const highlightContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Job({ job, index = 0 }: JobProps) {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full md:w-1/2"
      variants={jobVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
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
      <motion.div
        className="flex flex-col gap-4"
        variants={highlightContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {job.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2"
            variants={highlightVariants}
          >
            <h3 className="font-medium text-center lg:text-left">
              {highlight.title}
            </h3>
            <p className="paragraph text-center lg:text-left">
              <TermHighlighter>{highlight.content}</TermHighlighter>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
