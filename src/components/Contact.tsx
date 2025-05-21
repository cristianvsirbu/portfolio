import React from 'react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="px-4 md:px-6">
      <h1 className="title">Contact</h1>
      <h2 className="subtitle">Get In Touch:</h2>
      <div className="flex flex-col md:flex-row gap-16 mt-8">
        <div className="flex flex-col gap-4 w-full md:max-w-1/2">
          <p className="paragraph mt-5">
            Feel free to drop me a message — whether it&apos;s a question,
            feedback, or just to say hi. My inbox is always open, and I’ll get
            back to you as soon as I can!
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="site-button w-full md:max-w-1/2"
          >
            <Image
              src="/icons/misc/mail.svg"
              alt="Open email client"
              width={18}
              height={18}
            />
            <span>Say Hello</span>
          </a>
        </div>
        <div className="flex flex-col gap-4 w-full md:max-w-1/2">
          <p className="paragraph mt-5">
            You can also find me on GitHub and LinkedIn if you&apos;d like to
            connect or check out more of what I’m up to.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
            >
              <Image
                src="/icons/technologies/additional/github.svg"
                alt="LinkedIn profile"
                width={56}
                height={56}
                className="cursor-pointer"
              />
              <span className="text-white text-xs text-center">Github</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
            >
              <Image
                src="/icons/social/linkedin.svg"
                alt="LinkedIn profile"
                width={56}
                height={56}
                className="cursor-pointer"
              />
              <span className="text-white text-xs text-center">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <p className="w-full text-center font-medium text-xs text-[#86868B] mt-8">
        Built &amp;&amp; Designed with
        <Image
          src="/icons/misc/heart.svg"
          alt="heart"
          width={12}
          height={12}
          className="inline-block mx-1"
        />
        by Cristian Sîrbu
      </p>
    </section>
  );
};

export default Contact;
