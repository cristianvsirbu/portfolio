'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
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
      <div className="flex flex-col gap-1">
        <motion.a
          href={recommendation.profile_url}
          target="_blank"
          rel="noopener noreferrer"
          className="job-title hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {recommendation.name}
        </motion.a>
        <h2 className="subtitle">{recommendation.occupation}</h2>
      </div>

      <div className="paragraph">
        <h3 className="mb-2 font-medium text-white text-center lg:text-left">
          {recommendation.relationship}
        </h3>
        <TermHighlighter>
          <p className="text-center lg:text-left">{recommendation.text}</p>
        </TermHighlighter>
      </div>
    </motion.div>
  );
});

export default Recommendation;
