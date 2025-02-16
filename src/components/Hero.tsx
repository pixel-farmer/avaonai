//import React from 'react';
//import { useState, useEffect } from 'react'

const Hero = () => {
  return (
<div className="mx-auto flex max-w-7xl items-center justify-center bg-transparent">
<div className="w-[1247px] h-[475px] flex flex-col items-left justify-center">
  <h1 className="text-white text-5xl font-roboto font-medium leading-25 py-[50px] bg-transparent uppercase">
    Explore the Latest in<br></br> AI with AVA on AI
  </h1>
  <p className="text-white text-xl font-roboto font-medium leading-25">
    From cutting-edge AI tutorials to app showcases, dive into<br></br> the future of tech and creativity.
  </p>
  <button className="w-[140px] h-[50px] mt-8 font-roboto font-medium bg-yellow-400 text-black rounded hover:bg-yellow-300">
    Start Exploring
  </button>
</div>
</div>
  );
};

export default Hero;