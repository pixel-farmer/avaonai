//import React from 'react';
//import { useState, useEffect } from 'react'

const Header = () => {
  return (
    <header className="text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold" >
        <img
          src="/AVA-round-logo.jpg"
          alt="AVA Logo"
          className="h-12 rounded-full"
        /> 
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              className="text-black font-roboto font-medium leading-5 py-[50px] bg-transparent relative z-[9999] uppercase h-auto cursor-pointer tracking-[1.5px] transition-all duration-300 ease-in-out"
              href="#"
            >
              AVA on AI
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;