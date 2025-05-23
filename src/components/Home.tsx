import React from 'react';
import GradientText from './GradientText';

const Home = () => {
  return (
    <div className="flex px-3 lg:px-0 flex-col items-center justify-center text-center w-full">
      <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none text-white font-medium">
        Hi, I’m{' '}<br className='block md:hidden'/>
        <GradientText className="font-inter-heavy">Cristian Sîrbu</GradientText>
      </h1>
      <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-medium">
        I bring{' '}
        <span className="font-jersey text-primary text-3xl md:text-6xl lg:text-7xl">
          pixels
        </span>{' '}
        to life with{' '}
        <span className="font-geist-mono text-secondary">code</span>
      </h1>
      <p className="text-md lg:text-xl max-w-[1000px] text-[#86868B] text-center mt-2">
        Frontend dev who crafts seamless web experiences with React, clean code,
        and a touch of creative magic. I obsess over the details - from buttery
        animations to maintainable code, because great interfaces should feel as
        good as they look.
      </p>
    </div>
  );
};

export default Home;
