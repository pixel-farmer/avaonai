//import React from 'react';
import CustomCursor from './components/CustomCursor'; // Ensure the path matches your file structure
import Header from './components/Header';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import Carousel from './components/Carousel';
import AboutSection from './components/AboutSection';
//import ContentSection from './components/AboutSection';
import './App.css'; // Import your styles (optional, but recommended for consistency)


const App = () => {
  return (
    <div>
      {/* Custom cursor */}
      <CustomCursor />

      {/* Header with full-width white background */}
      <div className='bg-white'>
        {/* Centered container for header content */}
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </div>

      {/* Hero with full-width bg-gray-300 background */}
      <div className="bg-[url('/hero-graphic3.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Centered container for hero content */}
        <div className="max-w-7xl mx-auto items-center" >
          <Hero />
        </div>
      </div>

      {/* Headline and carousel with full-width black background */}
            <div className="bg-black">
        {/* Centered container for hero content */}
        <div className="max-w-7xl mx-auto items-center" >
        <TextSection/>
        <Carousel />
        </div>
      </div>

      {/* Centered container for the rest of the content */}
      <div className="max-w-7xl mx-auto bg-black">
        <AboutSection />
      </div>
    </div>
  );
};

export default App;