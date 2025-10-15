'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TermHighlighter from './TermHighlighter';

interface RecommendationProps {
  recommendation: {
    name: string;
    occupation: string;
    profile_url: string;
    relationship: string;
    text: string;
  };
  index?: number;
}

const recommendationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      duration: 0.6,
      delay: custom * 0.1,
    },
  }),
};

const textVariants = {
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

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Recommendation = memo(function Recommendation({
  recommendation,
  index = 0,
}: RecommendationProps) {
  return (
    <motion.div
      className="flex flex-col gap-8 w-full"
      variants={recommendationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <div className="flex flex-col gap-1 items-center lg:items-start">
        <div className="flex items-center gap-2">
          <h1 className="job-title">{recommendation.name}</h1>
          <motion.a 
            href={recommendation.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${recommendation.name}'s LinkedIn profile`}
            className="flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/icons/social/linkedin.webp"
              alt="LinkedIn profile"
              width={30}
              height={30}
              className="transition-all duration-300 hover:brightness-125"
            />
          </motion.a>
        </div>
        <h2 className="subtitle text-center lg:text-start">{recommendation.occupation}</h2>
      </div>

      <motion.div
        className="flex flex-col gap-2"
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 
          className="mb-2 font-medium text-white text-center lg:text-left"
          variants={textVariants}
        >
          {recommendation.relationship}
        </motion.h3>
        <motion.div 
          className="paragraph text-center lg:text-left"
          variants={textVariants}
        >
          <TermHighlighter>
            {recommendation.text}
          </TermHighlighter>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export default Recommendation;