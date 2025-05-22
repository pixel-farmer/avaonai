// import React from 'react';

const FooterSection = () => {
  return (
    <div className="w-full bg-black text-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-7xl flex flex-col items-start justify-center">
        <h1 className="text-5xl font-roboto font-medium uppercase mb-6">
          Social media
        </h1>
        <p className="text-xl font-roboto mb-6">
          icons
        </p>
        <div className="text-sm">
          © I am AVA. Site by <a href="#" className="underline">PixelFarmer</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;