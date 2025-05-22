import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center w-full">
      <h1 className="text-7xl leading-none text-white font-medium">
        Hi, I’m <span className='font-inter-heavy'>Cristian Sîrbu</span>
      </h1>
      <h1 className="text-6xl text-white font-medium">
        I bring <span className='font-jersey'>pixels</span> to life with <span className='font-geist-mono'>code</span>
      </h1>
      <p className="text-xl max-w-[1000px] text-[#86868B] text-center mt-2">
        Frontend dev who crafts seamless web experiences with React, clean code,
        and a touch of creative magic. I obsess over the details - from buttery
        animations to maintainable code, because great interfaces should feel as
        good as they look.
      </p>
    </div>
  );
};

export default Home;
