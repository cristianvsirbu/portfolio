import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center w-full h-full">
      <h1 className="text-7xl leading-none text-white font-medium">
        Hi, I’m Cristian Sîrbu
      </h1>
      <h1 className="text-6xl text-white leading-tight font-medium">
        I bring pixels to life with code
      </h1>
      <p className="text-xl max-w-[1000px] text-[#86868B] text-center">
        Frontend dev who crafts seamless web experiences with React, clean code,
        and a touch of creative magic. I obsess over the details - from buttery
        animations to maintainable code, because great interfaces should feel as
        good as they look.
      </p>
    </div>
  );
};

export default Home;
