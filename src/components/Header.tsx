//import React from 'react';
//import { useState, useEffect } from 'react'

const Header = () => {
  return (
    <header className="text-black bg-white p-4 flex justify-between items-center">
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
              className=""
              href="https://www.youtube.com/@avaonai"
            >
              AVA on YouTube
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;