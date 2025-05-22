// import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa'; // Font Awesome via react-icons

const FooterSection = () => {
  return (
    <div className="w-full h-[300px] bg-black flex items-center justify-center">
      <div className="w-[1247px] h-[300px] flex flex-col justify-center">
        <h1 className="text-white text-5xl font-roboto font-medium py-[20px] uppercase">
          Follow me
        </h1>

        {/* Social Media Icons */}
        <div className="flex gap-8 py-4">
          <a href="https://www.facebook.com/profile.php?id=100090879751682" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-blue-500 text-3xl" />
          </a>
          <a href="https://www.tiktok.com/@iamavamusic" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-sky-400 text-3xl" />
          </a>
          <a href="https://www.instagram.com/anastashiadubois/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500 text-3xl" />
          </a>
          <a href="https://www.youtube.com/@avaexists" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white hover:text-red-600 text-3xl" />
          </a>
          <a href="https://www.tiktok.com/@iamavamusic" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-white hover:text-gray-400 text-3xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white text-sm mt-6">
          © I am AVA. Site by <a href="#" className="underline">PixelFarmer</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
