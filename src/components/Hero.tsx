import React from 'react';

const Hero = () => {
  return (
<div className="mx-auto flex max-w-7xl items-center justify-center bg-black">
  <div className="w-[1247px] h-[475px] inline-flex items-center justify-center">
    <img
      src="/hero-graphic.jpg"
      alt="Hero Image"
      className="w-full h-full object-cover"
    />
  </div>
</div>
  );
};

export default Hero;