import React from 'react';
import GradientText from './GradientText';

const Home = () => {
  return (
    <div className="flex px-3 lg:px-0 flex-col items-center justify-center text-center w-full">
      <h1 className="text-[48px] md:text-6xl lg:text-7xl leading-none text-white font-medium">
        Hi, I&apos;m <br className="block md:hidden" />
        <GradientText className="font-inter-heavy">Cristian Sîrbu</GradientText>
      </h1>
      <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-medium">
        I bring{' '}
        <span
          data-text="pixels"
          className="font-jersey glitch-animation text-primary text-3xl md:text-6xl lg:text-7xl"
          style={{ willChange: 'auto' }}
        >
          pixels
        </span>{' '}
        to life with{' '}
        <span className="font-geist-mono text-secondary relative">
          code
          <span className="text-secondary font-normal animate-[blink_1s_infinite] -ml-1 md:-ml-3">
            |
          </span>
        </span>
      </h1>
      <p className="text-md lg:text-xl max-w-[500px] md:max-w-[600px] lg:max-w-[1000px] text-[#86868B] text-center mt-2">
        Frontend dev who crafts seamless web experiences with React, clean code,
        and a touch of creative magic. I obsess over the details - from buttery
        animations to maintainable code, because great interfaces should feel as
        good as they look.
      </p>
    </div>
  );
};

export default Home;
