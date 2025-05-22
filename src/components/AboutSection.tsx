//import React from 'react';

const AboutSection = () => {
  return (
    <div className="w-full h-[500px] bg-white flex items-center justify-center">
    <div className="w-[1247px] h-[500px] flex flex-col items-left justify-center bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat">
    <h1 className="ml-[520px] text-black text-5xl font-roboto font-medium leading-25 py-[50px] bg-transparent uppercase">
      Who is I am AVA?
    </h1>
    <p className="w-[760px] ml-[520px] text-black text-xl font-roboto font-medium leading-25">
    "I am AVA" Meet AVA — a virtual artist at the intersection of music, storytelling, and machine-made dreams.
    On this channel, AVA creates original music videos inside Second Life, fusing cinematic virtual worlds with AI-generated vocals, sound, and visuals. Every piece is a journey through the future of creativity.
    </p>
    </div>
  </div>
  );
};

export default AboutSection;