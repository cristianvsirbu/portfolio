'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';
import Image from 'next/image';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const socialItemVariants = {
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

  return (
    <section>
      <h1 className="title">Contact</h1>
      <h2 className="subtitle">Get In Touch:</h2>
      <motion.div
        className="flex flex-col md:flex-row gap-8 lg:gap-16 mt-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4 w-full lg:max-w-1/2"
          variants={itemVariants}
        >
          <p className="paragraph text-center lg:text-left">
            Feel free to drop me a message — whether it&apos;s a question,
            feedback, or just to say hi. My inbox is always open, and I&apos;ll
            get back to you as soon as I can!
          </p>
          <motion.a
            href={`mailto:${EMAIL}`}
            className="site-button w-full md:max-w-1/2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/icons/misc/mail.svg"
              alt="Open email client"
              width={18}
              height={18}
            />
            <span>Send Email</span>
          </motion.a>
        </motion.div>
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4 w-full lg:max-w-1/2"
          variants={itemVariants}
        >
          <p className="paragraph text-center lg:text-left">
            You can also find me on GitHub and LinkedIn if you&apos;d like to
            connect or check out more of what I&apos;m up to.
          </p>
          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            variants={socialVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
              variants={socialItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/icons/technologies/additional/github.webp"
                alt="GitHub profile"
                width={56}
                height={56}
                className="cursor-pointer"
              />
              <span className="text-white text-xs text-center">GitHub</span>
            </motion.a>
            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
              variants={socialItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src="/icons/social/linkedin.webp"
                alt="LinkedIn profile"
                width={56}
                height={56}
                className="cursor-pointer"
              />
              <span className="text-white text-xs text-center">LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;